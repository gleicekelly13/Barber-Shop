import './style.css';
import { useState } from 'react';

export default function LandingPage () {

    const [temaClaro, setTemaClaro] = useState(true);

    /*const alterarTema = () => {
        if(modoClaro === "modo-claro" ) {
            setModoClaro("modo-escuro");
        } else {
            setModoClaro("modo-claro");
        }
    } */

    const alterarTema = () => { /* Função que muda o tema da página */
        setTemaClaro(!temaClaro);
    }

    return (
        <div className={ temaClaro ? "modo-claro" : "modo-escuro"}> 
            <header>
                <div className='limitar-secao topo'>
                    <img src='./assets/barbearia-logo.png' className='logo'/>
                    <button onClick={alterarTema} className={temaClaro ? "modo-claro" : "modo-escuro"}>
                        <img src={temaClaro ? './assets/moon.png' : './assets/sun.png'}/> 
                        {temaClaro ? 'Dark' : 'Light'}
                    </button>
                </div>
            </header>

            <section className='secao-banner'>

            </section>

            <section className='limitar-secao secao-texto'>
                <div className='limitar-secao'>
                    <h1>Bem-vindo a Barber Shop</h1>
                    <p className='primeiro-paragrafo'>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                    <p className='segundo-paragrafo'>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                    <p className='terceiro-paragrafo'>S. Kelly</p>
                </div>
            </section>
        </div>
    );
}