import "./style.css";

interface MetricProps {
    title: string;
    subtitle: string;
    description: string;
}

function Metric({ title, subtitle, description }: MetricProps) {
    return (
        <div className="metric">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Metric;
