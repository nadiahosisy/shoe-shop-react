import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">
        Oops! The page you are looking for cannot be found.
      </p>
      <Link to="/" className="not-found-home-link">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
