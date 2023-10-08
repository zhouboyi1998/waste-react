import { Route, Routes } from 'react-router-dom'
import Home from '../views/home/Home'
import Statistic from '../views/statistic/Statistic'
import About from '../views/about/About'

export default function RouterView() {
    return (
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="statistic" element={ <Statistic/> }/>
            <Route path="/about" element={ <About/> }/>
        </Routes>
    )
}
