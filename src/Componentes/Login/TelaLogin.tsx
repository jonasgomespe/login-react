import React from 'react';
import './TelaLogin.css';
import Input from '../FormComponents/Input/Inputs';
import Button from '../FormComponents/Button/Button';

export default function TelaLogin(){

    function defaultForm(event:any){

        event.preventDefault();
        
        //const formLogin          = new FormData(event.target);
        //const dadosFormulario    = Object.fromEntries(formLogin);
        /* let {nome, login, senha} = dadosFormulario; */
        
    }

    return (
        <div className="container-login">
            <div className="alinhamento">
                <div>
                    <form name="form-login" id="form-login" onSubmit={(event)=>defaultForm(event)}>
                        <div>
                                <h1>
                                    Área de usuários
                                </h1>
                                <h4>
                                    Sistema de gerencimento de funcionarios da empresa em geral
                                </h4>
                        </div>

                        <Input typeInput="text" name="Jonas gomes" placeholder=" Insira seu login " />
                        <Input typeInput="password" name="Teia" placeholder=" Insira sua senha " />
                        <Button type="submit" title=" Entrar " />
                    </form>
                </div>
            </div>
        </div>
    )
}