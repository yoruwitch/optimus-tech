import Metric from "./Metric";
import "./style.css";

function Metrics() {
    return (
        <>
            <section className="metrics_container">
                <Metric
                    title="400+"
                    subtitle="Projetos concluídos"
                    description="Nós ajudamos a construir mais de 400 projetos incríveis"
                />
                <Metric
                    title="100+"
                    subtitle="Colaboradores"
                    description="Temos mais de 100 colaboradores no nosso time que se preocupam com nossos clientes."
                />
                <Metric
                    title="20k"
                    subtitle="Downloads"
                    description="Nossos projetos que estão disponíveis em lojas já foram baixados mais de 20.000 vezes."
                />

                <Metric
                    title="500+"
                    subtitle="Reviews 5 estrelas"
                    description="Estamos orgulhosos de contar com mais de 500 reviews 5 estrelas em nossos produtos."
                />
            </section>
        </>
    );
}

export default Metrics;
