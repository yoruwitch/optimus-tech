import "./style.css"

interface JobProps {
    title: string;
    jobType: string;
    salary: string;
}

function Job({ title, jobType, salary }: JobProps) {
    return (
        <>
            <div className="job_container">
                <h4>{title}</h4>
                <span>{jobType}</span>
                <span>{salary}</span>
            </div>
        </>
    );
}

export default Job;
