import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Contact = () => {

    const [contactdata, setcontactData] = useState([])
    const [initialValues, setInitialValues] = useState([])
    const [row, setRow] = useState(null)


    const history = useHistory()
    const token1 = localStorage.getItem('token')
    if(!token1){
        history.push('/login')

    }

    const getData = async () => {
        await axios.get('http://localhost:3001/contacts/alldata', {
            headers: { token: token1 }
        })
            .then((res) => {
                setcontactData(res.data.data)
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })
    }

    useEffect(() => {
        getData()
    },[])

    const del = (id) => {
        axios.delete('http://localhost:3001/contacts/delete/' + id, {
            headers : { token : token1 }
        })
            .then((res) => {
                console.log(res.data.data);
                getData()
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })
    }

    const upd = (id) => {
        axios.get('http://localhost:3001/contacts/data/' + id,{
            headers:{token : token1}
        })
            .then((res) => {
                setRow(res.data.data._id)
                setInitialValues(res.data.data)
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })
    }

    const logOut = () => {
        localStorage.removeItem('token')
        history.push('/login')
    }

    return (
        <div>
            <Formik
                initialValues={{ fname: '', lname: '', contactno: '', city: '', address: '', ...initialValues }}

                enableReinitialize={true}

                onSubmit={async (values, action) => {
                    if (row == null) {
                        axios.post('http://localhost:3001/contacts/create', values, {
                            headers : {token : token1}
                          })
                            .then((res) => {
                                action.resetForm()
                                getData()
                            })
                            .catch((error) => {
                                console.log(error.response.data.message);
                            })
                    }
                    else {
                        axios.put('http://localhost:3001/contacts/update/' + row, values, {
                            headers: { token: token1 }
                        })
                            .then((res) => {

                                setRow(null)
                                setInitialValues()
                                getData()

                            })
                            .catch((error) => {
                                console.log(error.response.data.message);
                            })
                    }
                }}
            >
                <Form>
                    <label htmlFor="fname">First Name</label>
                    <Field id="fname" name="fname" placeholder="" />
                    <br />
                    <br />

                    <label htmlFor="lname">Last Name</label>
                    <Field id="lname" name="lname" placeholder="" />
                    <br />
                    <br />

                    <label htmlFor="contactno">Phone Number</label>
                    <Field id="contactno" name="contactno" placeholder="" />
                    <br />
                    <br />

                    <label htmlFor="city">City</label>
                    <Field id="city" name="city" placeholder="" />
                    <br />
                    <br />

                    <label htmlFor="address">Address</label>
                    <Field id="address" name="address" placeholder="" />
                    <br />
                    <br />


                    <button type="submit">submit</button> 
                    <br></br>
                    <br></br>
                    <button onClick={() => logOut()}>logOut</button>
                    <br></br>
                    <br></br>
                    <br></br>

                </Form>
            </Formik>

            <table border={1} width="50%">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Fname</th>
                        <th>Lname</th>
                        <th>Phone number</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contactdata.map((el, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{el.fname}</td>
                                <td>{el.lname}</td>
                                <td>{el.contactno}</td>
                                <td>{el.city}</td>
                                <td>{el.address}</td>
                                <td><button onClick={() => del(el._id)}>Delete</button></td>
                                <td><button onClick={() => upd(el._id)}>Update</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>



    )
}

export default Contact
