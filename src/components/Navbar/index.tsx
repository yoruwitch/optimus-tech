import "./style.css";
function Navbar() {
    return (
        <>
            <nav>
                <img src="/src/assets/logo.svg" alt="Logo" />
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="http://">Produtos</a>
                    </li>
                    <li>
                        <a href="http://">Recursos</a>
                    </li>
                    <li>
                        <a href="http://">Sobre nós</a>
                    </li>
                </ul>
                <div className="button_container">
                    <a href="" className="login">
                        Entrar
                    </a>
                    <a href="" className="signin">
                        Cadastrar
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
