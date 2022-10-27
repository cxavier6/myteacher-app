import React from 'react'
import { CabecalhoContainer } from './Cabecalho.style';
import { Logo } from './Cabecalho.style';

const Cabecalho = () => {
    return (
        <CabecalhoContainer>
            <div>
                <Logo src='/imgs/myteacher.png'/>
            </div>

            <p>Encontre o professor perfeito!</p>
        </CabecalhoContainer>
    )
}

export default Cabecalho;