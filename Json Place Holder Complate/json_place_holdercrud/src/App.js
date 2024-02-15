import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Formik, Field, Form } from 'formik';

function App() {

  const [data , setData] = useState([])
  const [initialValues , setinitialValues] = useState([])
  const [row , setRow] = useState([])
  
  const getData = () =>{
    axios.get('http://localhost:3001/')
    .then((res) => {
      setData(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  const del = (id) =>{
    axios.delete('http://localhost:3001/' + id)
    .then((res) => {

      getData()
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  const update = (id) =>{
    axios.get('http://localhost:3001/' + id)
    .then((res) => {
      console.log(res.data.data);
      setinitialValues(res.data.data)
      setRow(res.data.data._id)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getData() 
  },[]);
  
  return (
    <>

<Formik
      initialValues={{id: '',title: '',body: '',...initialValues}}
      enableReinitialize = {true}
      onSubmit={async (values,action) => {
        const Data = row
        if(!Data)
        {
          await axios.post('http://localhost:3001/',values)
          action.resetForm()
          getData()
        }
        else
        {
          await axios.put('http://localhost:3001/'+row,values)
          setRow(null)
          setinitialValues()
          getData()
        }
      }}
    >
      <Form>
        <label htmlFor="id">Id</label>
        <Field name="id" placeholder="ID" />
        
        <label htmlFor="title">Title</label>
        <Field name="title" placeholder="Title" />
        
        <label htmlFor="body">Body</label>
        <Field name="body" placeholder="body" />
        
        <button type="submit">Submit</button>
      </Form>
    </Formik>

      <table border={2} width={'50%'}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>DELETE</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((el,num) =>{
              return <tr key={num}>
                <th>{el.id}</th>
                <td>{el.title}</td>
                <td>{el.body}</td>
                <td><button onClick={() => del(el._id)}>DELETE</button></td>
                <td><button onClick={() => update(el._id)}>UPDATE</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
