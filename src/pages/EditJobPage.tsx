import { useParams, useLoaderData } from 'react-router-dom';
import DetailsForm from '../components/DetailsForm';

const EditJobPage = ({ updateJobSubmit }) => {
    const job = useLoaderData();
    const { id } = useParams();

    return (
        <section className='bg-indigo-50'>
            <div className='container m-auto max-w-2xl py-24'>
                <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
                    <DetailsForm jobSubmit={updateJobSubmit} serviceTitle='Update Job' job={job} id={id} />
                </div>
            </div>
        </section>
    );
};
export default EditJobPage;