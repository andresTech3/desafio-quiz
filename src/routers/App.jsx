import React from 'react';
import '../styles/global.css'
//importando herramientas react
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";

//importando contenedores 
import Layout from '../containers/Layout';
import QuizInicio from '../containers/QuizInicio';
import Quizs from '../containers/Quizs'




const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path = '/' element = {<QuizInicio btnBegin={<button className='btn'><Link to='/quiz'>BEGIN</Link></button>}/>}/>
                        <Route exact path = '/quiz' element = {<Quizs/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;


