import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../firebase';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setError('');
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container animate-fade-in flex-center" style={{ minHeight: '80vh' }}>
      <div className="glass" style={{ width: '100%', maxWidth: '440px', padding: '48px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '8px', fontSize: '2rem' }}>
          {isRegister ? 'Create Account' : 'Welcome Back'}
        </h2>
        <p className="text-secondary" style={{ textAlign: 'center', marginBottom: '32px' }}>
          {isRegister ? 'Sign up to start your vault' : 'Enter your credentials to access your vault'}
        </p>

        {error && (
          <p style={{ color: 'red', marginBottom: '16px', textAlign: 'center', fontSize: '0.9rem' }}>
            {error}
          </p>
        )}

        <div className="flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            style={{ padding: '16px' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            style={{ padding: '16px' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="btn btn-primary mt-6"
            style={{ width: '100%', padding: '16px', fontSize: '1.2rem', fontWeight: 'bold' }}
          >
            {isRegister ? 'Create Account' : 'Sign In'}
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border-color)' }}>
          <span className="text-secondary">
            {isRegister ? 'Already have an account? ' : "Don't have an account? "}
          </span>
          <button
            onClick={() => setIsRegister(!isRegister)}
            style={{ background: 'none', border: 'none', fontWeight: '600', cursor: 'pointer' }}
          >
            {isRegister ? 'Sign in' : 'Create one now'}
          </button>
        </div>
      </div>
    </div>
  );
}