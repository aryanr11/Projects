import React from 'react'
import { Formik, Field, Form } from 'formik';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

function Login() {


    const history = useHistory()

    const LoginPage = async (values) => {

        await axios.post('http://localhost:3001/users/login', values)
            .then((res) => {
                console.log(res.data.token)
                const token = res.data.token
                localStorage.setItem('token', token)
                history.push('/contact')
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
                    email: '',
                    password: ''
                }}
                onSubmit={async (values) => {
                    LoginPage(values)
                }}
            >
                <Form>

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                    />

                    <br></br>

                    <label htmlFor="password">password</label>
                    <Field id="password" name="password" placeholder="any" />

                    <br></br>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Login





