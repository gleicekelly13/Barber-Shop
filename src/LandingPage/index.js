import './style.css';

export default function LandingPage () {
    return (
        <div>
            <header>
                <img src='./assets/barbearia-logo.png'/>
                <button>
                    <img src='./assets/moon.png'/>
                    Dark
                </button>
            </header>

            <section className='secao-banner'>

            </section>

            <section className='secao-texto'>
                <h1>Bem-vindo a Barber Shop</h1>
                <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                <p>S. Kelly</p>
            </section>
        </div>
    );
}