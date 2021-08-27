import React, {useState} from 'react';
import './TelaLogin.css';

export default function TelaLogin(){

    const [nomeUsuario, setNomeUsuario]    = useState('');
    const [senhaUsuario, setSenhaUsuario]  = useState('');
    
    console.log('1');

    function digitacaoInput(e:any,tipo?:string){

        if(tipo == 'login')
            setNomeUsuario(e.target.value);

        if(tipo == 'senha')
            setSenhaUsuario(e.target.value);

    }

    function defaultForm(event:any){
        event.preventDefault();
    }

    return (
        <div className="container-login">
            <div className="alinhamento">
                <div>
                    <form name="form-login" onSubmit={(event)=>defaultForm(event)}>
                        <div>
                                <h1>
                                    Área de usuários
                                </h1>
                                <h4>
                                    Sistema de gerencimento de funcionarios da empresa em geral
                                </h4>
                        </div>
                        <div>
                            <input type="text" name="sd" value={nomeUsuario} onChange={(e)=>digitacaoInput(e,'login')} placeholder=" Insira seu nome " id="sd" />
                        </div>
                        <div>
                            <input type="password" name="fe" value={senhaUsuario} onChange={(e)=>digitacaoInput(e,'senha')} placeholder=" Insira sua senha " id="fe" />
                        </div>
                        <div>
                            <input type="submit" value=" Entrar " id="yui" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}