import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';

export default function Login() {
  return (
    <div className="container animate-fade-in flex-center" style={{ minHeight: '80vh' }}>
      <div className="glass" style={{ width: '100%', maxWidth: '440px', padding: '48px', position: 'relative' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '8px', marginTop: '16px', fontSize: '2rem' }}>Welcome Back</h2>
        <p className="text-secondary" style={{ textAlign: 'center', marginBottom: '32px' }}>Enter your credentials to access your vault</p>
        
        <form className="flex-col gap-4">
          <div>
            <input type="text" placeholder="Username or Email" className="input-field" style={{ padding: '16px' }} />
          </div>
          <div>
            <input type="password" placeholder="Password" className="input-field" style={{ padding: '16px' }} />
          </div>
          <button type="button" className="btn btn-primary mt-6" style={{ width: '100%', padding: '16px', fontSize: '1.2rem', fontWeight: 'bold' }}>
            Acknowledge & Continue
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border-glass)' }}>
          <span className="text-secondary">Don't have an account? </span>
          <Link to="/register" className="text-accent" style={{ fontWeight: '600' }}>
            Create one now
          </Link>
        </div>
      </div>
    </div>
  );
}
