import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import './NotFound.scss';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found | NETFUSION"
        description="The page you're looking for doesn't exist. Explore NETFUSION's core banking solutions or contact our team."
        path="/404"
      />

      <section className="not-found section">
        <div className="container not-found__inner">
          <span className="not-found__code">404</span>
          <h1>Page not found</h1>
          <p className="lead">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          </p>
          <div className="not-found__actions">
            <Link to="/" className="btn btn-primary">
              Back to Home &rarr;
            </Link>
            <Link to="/products" className="btn btn-outline">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
