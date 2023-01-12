import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import CadastroTurma from './turma/CadastroTurma';

function App() {

    var AppComponent;

    AppComponent =
        <Router>
            <Navbar />
            <div style={{ minHeight: '100vh' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/CadastroTurma" element={<CadastroTurma />} />
                    <Route path="/CadastroTurma/:id" element={<CadastroTurma />} />

                </Routes>
            </div>
        </Router>

    return (
        <>
            {AppComponent}
        </>
    )
}

export default App;