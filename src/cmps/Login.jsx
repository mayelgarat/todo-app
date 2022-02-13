
import React, { useState, useContext } from "react"
import  {AccountContext}  from './Accounts'

export function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { authenticate } = useContext(AccountContext);

    const onSubmit = ev => {
        ev.preventDefault();
        authenticate(email, password).then((data) => {
            console.log('logged in', data);
        })
        .catch((err) => {
            console.error('Failed to login', err)
        })
        // const user = new CognitoUser({
        //     Username: email,
        //     Pool: UserPool
        // })

        // const authDetails = new AuthenticationDetails({
        //     Username: email,
        //     Password: password
        // })

        // user.authenticateUser(authDetails, {
        //     onSuccess: data => {
        //         console.log('onSuccess: ', data);
        //         // window.location.replace('/todo')
        //         console.log('user:', user);

        //     },
        //     onFailure: err => {
        //         console.error('onFailure: ', err)
        //     },
        //     newPasswordRequired: data => {
        //         console.log('newPasswordRequired', data);
        //     }
        // })
    }

    return <section>
        <form onSubmit={onSubmit}>
            <input
                value={email}
                placeholder="Email"
                onChange={event => setEmail(event.target.value)}
                />
            <input
                value={password}
                placeholder="Password"
                onChange={event => setPassword(event.target.value)}
            />
            <button>Login</button>
        </form>
    </section>
}