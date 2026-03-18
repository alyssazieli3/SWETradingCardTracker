import { Link } from 'react-router-dom';
import { LogOut, User, Mail, Calendar, Settings, ShieldCheck } from 'lucide-react';

export default function Profile() {
  return (
    <div className="container animate-fade-in flex-center" style={{ minHeight: '80vh' }}>
      <div className="glass" style={{ width: '100%', maxWidth: '640px', padding: '48px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--accent-1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <User size={40} color="white" />
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Alex Collector</h2>
        </div>

        <div className="flex-col gap-6">
          <div className="glass glass-interactive" style={{ padding: '20px 24px', background: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '12px' }}>
                <User size={20} className="text-secondary" />
              </div>
              <span className="text-secondary" style={{ fontSize: '1.2rem' }}>Username</span>
            </div>
            <span style={{ fontWeight: '600', fontSize: '1.2rem' }}>@alex_master</span>
          </div>

          <div className="glass glass-interactive" style={{ padding: '20px 24px', background: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '12px' }}>
                <Mail size={20} className="text-secondary" />
              </div>
              <span className="text-secondary" style={{ fontSize: '1.2rem' }}>Email Address</span>
            </div>
            <span style={{ fontWeight: '600', fontSize: '1.2rem' }}>alex@nexus.vault</span>
          </div>

          <div className="glass glass-interactive" style={{ padding: '20px 24px', background: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '12px' }}>
                <Calendar size={20} className="text-secondary" />
              </div>
              <span className="text-secondary" style={{ fontSize: '1.2rem' }}>Vault Opened</span>
            </div>
            <span style={{ fontWeight: '600', fontSize: '1.2rem' }}>January 2026</span>
          </div>
        </div>
        
        <div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--border-glass)', display: 'flex', gap: '20px' }}>
          <button className="btn" style={{ flex: '1', padding: '16px', fontSize: '1.1rem' }}>
            <Settings size={20} />
            Preferences
          </button>
          <button className="btn" style={{ flex: '1', padding: '16px', fontSize: '1.1rem', background: 'rgba(239, 68, 68, 0.1)', borderColor: 'var(--danger)', color: 'var(--danger)' }}>
            <LogOut size={20} />
            Secure Disconnect
          </button>
        </div>
      </div>
    </div>
  );
}
