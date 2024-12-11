import Job from "./Job";
import "./style.css";
function JobOpening() {
    return (
        <>
            <section className="job_opening_container">
                <div>
                    <h3>Design</h3>
                    <Job
                        title="Product Designer"
                        jobType=" Full-time"
                        salary="Faixa salarial: R$7.000"
                    />
                    <Job
                        title="UX Designer"
                        jobType=" Full-time"
                        salary="Faixa salarial: R$6.000"
                    />
                    <h3>Desenvolvimento de software</h3>
                    <Job
                        title="Desenvolvedor(a) iOS"
                        jobType=" Full-time"
                        salary="Faixa salarial: R$8.000"
                    />
                    <Job
                        title="Desenvolvedor(a) Front-end"
                        jobType=" Full-time"
                        salary="Faixa salarial: R$7.000"
                    />
                    <Job
                        title="Desenvolvedor(a) Back-end"
                        jobType=" Full-time"
                        salary="Faixa salarial: R$8.000"
                    />
                </div>
            </section>
        </>
    );
}

export default JobOpening;
