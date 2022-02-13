import React from 'react'
import { Routes, Route } from 'react-router-dom';
import routes from './routes.js'
import {Header} from './cmps/Header.jsx'
import {Footer} from './cmps/Footer.jsx'

export class RootCmp extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <main>
                    <Routes>
                        {routes.map(route => <Route key={route.path}  element={route.component} exact path={route.path} />)}
                    </Routes>
                </main>
                <Footer/>
            </div>
        )
    }
}


