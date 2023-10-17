import './style.css';

export default function LandingPage () {
    return (
        <div className='modo-claro'>
            <header className='limitar-secao'>
                <img src='./assets/barbearia-logo.png' className='logo'/>
                <button>
                    <img src='./assets/moon.png'/>
                    <span>Dark</span>
                </button>
            </header>

            <section className='secao-banner'>

            </section>

            <section className='limitar-secao secao-texto'>
                <h1>Bem-vindo a Barber Shop</h1>
                <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                <p>S. Kelly</p>
            </section>
        </div>
    );
}