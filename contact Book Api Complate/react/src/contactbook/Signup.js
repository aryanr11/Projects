import React from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Signup() {



    const history = useHistory()

    const SignupPage = async (values) => {

        await axios.post('http://localhost:3001/users/signup', values)
            .then((res) => {
                console.log(res.data.data);
                history.push('/login')
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })

    }

    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                }}
                onSubmit={async (values) => {
                    SignupPage(values)
                }}
            >
                <Form>
                    <label htmlFor="username">User Name</label>
                    <Field id="username" name="username" placeholder="Jane" />

                    <br></br>

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                    />

                    <br></br>

                    <label htmlFor="password">password</label>
                    <Field id="password" name="password" placeholder="Doe" />

                    <br></br>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Signup