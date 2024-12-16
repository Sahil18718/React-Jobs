import jobsData from '../jobs.json';
import JobLisitings from './JobLisitings';

export interface jobType {
    id: string;
    title: string;
    type: string;
    description: string;
    location: string;
    salary: string;
    company: {
        name: string;
        description: string;
        contactEmail: string;
        contactPhone: string;
    };
}

const JobListing = () => {
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Browse Jobs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {jobsData.jobs.map((job: jobType) => (
                        <JobLisitings key={job.id} job={job}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobListing;
