import React, {useState, memo} from 'react';
import './inputs.css';

function Input(props:any){

    const [valoresDigitados, setValoresDigitados]    = useState('');
    const {typeInput,name,id,placeholder,className}  = props;
    const tipoInput                                  = ['text','email','password','number'];
    
    const validacaoTiposTags = tipoInput.find(elementos=> elementos === typeInput ? true : false);
 
    return (
        <div>
            <input
                type={
                    validacaoTiposTags ? validacaoTiposTags : 'text'
                } 
                name={name} 
                onChange={(e)=>setValoresDigitados(e.target.value)} 
                id={id} value={valoresDigitados} 
                className={className} 
                placeholder={placeholder} 
            />
        </div>
    )
}

export default memo(Input);