import logo from "./assets/LogoEstacio.png";
import logo2 from "./assets/OutlookLogo.png";
import { BiSolidUserDetail } from "react-icons/bi";
import { BsEyeSlashFill } from "react-icons/bs";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState, useEffect } from "react";
import './App.css';

function App() {
    const [matricula, setMatricula] = useState("");
    const [senha, setSenha] = useState("");
    const [dataAtual, setDataAtual] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDataAtual(new Date());
        }, 1000); 

        return () => clearInterval(interval);
    }, []);

    const onChange = () => {
       
    };

    const handleMatriculaChange = (event) => {
        setMatricula(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='wrapper'>
            <img src={logo} alt='image' />
            <form onSubmit={handleSubmit}>
                <h1>SIA - Sistema de Informações Acadêmicas</h1>
                <p className="date-container">
                    {dataAtual.toLocaleString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}
                </p>
                <button type="submit">Entrar com e-mail do estudante<img src={logo2} alt="logo2"/></button>
                <div className="input-box">
                    <input type="text" placeholder='Digite sua matrícula' value={matricula} onChange={handleMatriculaChange} required />
                    <BiSolidUserDetail className="icon" />
                </div>
                <div className="esqueci-matricula">
                    <a href="#"> esqueci a matrícula</a>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Digite sua senha' value={senha} onChange={handleSenhaChange} required />
                    <BsEyeSlashFill className="icon" />
                </div>
                 
                <div className="esqueci-cadastrar">
                    <a href="#">Esqueci a senha/cadastrar nova senha</a>
                </div>
                <ReCAPTCHA sitekey="6LcE3Z8pAAAAAJeEhms3cYGeQf6f5NihxNUbz9k9" onChange={onChange} />

                <button type="submit" disabled={!matricula && !senha}>Entrar</button>

            </form>
        </div>
    );
}

export default App;




