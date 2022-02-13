
import {HomePage} from './pages/HomePage.jsx'
import {TodoApp} from './pages/TodoApp.jsx'

const routes = [
    
    {
        path:'/todo',
        component: <TodoApp/>,
    }
    ,
    {
        path:'/',
        component: <HomePage/>,
    }
]

export default routes;