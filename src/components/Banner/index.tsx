import "./style.css";

function Banner() {
    return (
        <>
            <section className="banner_container">
                <span>Vagas abertas!</span>
                <h3>Estamos procurando por talentos</h3>
                <p>
                    Somos uma equipe 100% remota com pessoas do Brasil inteiro.
                </p>
                <img
                    src="src/assets/Image.png"
                    alt="People talking friendly to each other in a meeting"
                />
            </section>
        </>
    );
}

export default Banner;
