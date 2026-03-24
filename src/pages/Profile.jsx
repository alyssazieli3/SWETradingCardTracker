import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, Mail, Calendar, Settings } from 'lucide-react';

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="container animate-fade-in flex-center" style={{ minHeight: '80vh' }}>
      <div className="glass" style={{ width: '100%', maxWidth: '640px', padding: '48px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--accent-1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={40} color="white" />
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem' }}>{user?.displayName || 'Collector'}</h2>
        </div>

        <div className="flex-col gap-6">
          <div className="glass" style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Mail size={20} />
              <span className="text-secondary">Email</span>
            </div>
            <span style={{ fontWeight: '600' }}>{user?.email}</span>
          </div>

          <div className="glass" style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Calendar size={20} />
              <span className="text-secondary">Vault Opened</span>
            </div>
            <span style={{ fontWeight: '600' }}>
              {user?.metadata?.creationTime
                ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                : '—'}
            </span>
          </div>
        </div>

        <div className="mt-8" style={{ display: 'flex', gap: '20px', paddingTop: '32px' }}>
          <button className="btn" style={{ flex: 1, padding: '16px' }}>
            <Settings size={20} /> Preferences
          </button>
          <button
            onClick={handleSignOut}
            className="btn"
            style={{ flex: 1, padding: '16px', borderColor: 'red', color: 'red' }}
          >
            <LogOut size={20} /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
