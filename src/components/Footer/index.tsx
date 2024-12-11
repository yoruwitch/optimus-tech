import "./style.css";
function Footer() {
    return (
        <>
            <footer>
                <h3>Acompanhe as nossas oprtunidades</h3>
                <span className="ad_email">
                    Seja o primeiro a saber quando novas vagas serão abertas!
                </span>
                <form action="submit">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Seu e-mail"
                    />
                    <button type="submit">Cadastrar</button>
                </form>
                <span className="copyright">
                    © 2022 OptimusTech. Todos os direitos reservados.
                </span>
            </footer>
        </>
    );
}

export default Footer;
