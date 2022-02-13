
import React, { useState } from "react"
import { CognitoUserPool } from "amazon-cognito-identity-js"

import {Pool}  from '../services/userService'
export function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const poolData = {
    //     UserPoolId: 'us-east-1_JX0YQWJMw',
    //     ClientId: '5b2oj6sj4i8jor0i6lcf6hno2v'
    // }

    // const Pool = new CognitoUserPool(poolData)

    const onSubmit = ev => {
        ev.preventDefault();
        Pool.signUp(email, password, [], null, (err, data)=>{
            if(err) console.log('err:', err);
            console.log('data:', data);  
        })
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
<button>Signup</button>
        </form>
    </section>
}