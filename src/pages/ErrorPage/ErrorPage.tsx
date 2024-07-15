import { ErrorResponse, Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
    const error = useRouteError() as ErrorResponse;
    if (error.status === 404) {
        return (
            <div className="error-container">
                <h2 className="header-content">PageNotFound</h2>
                <Link className="home-page-btn button" to={'./'}>
                    Home Page
                </Link>
            </div>
        );
    }
    return (
        <div className="error-container">
            <h2 className="header-content">Something went wrong:</h2>
            <Link className="home-page-btn button" to={'./'}>
                Home Page
            </Link>
        </div>
    );
}

export default ErrorPage;