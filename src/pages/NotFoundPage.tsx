import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <>
            <div>404 Not Found</div>
            <Link to="/">Go Back</Link>
        </>
    );
};

export default NotFoundPage;
