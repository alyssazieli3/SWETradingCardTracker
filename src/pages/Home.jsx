import { Link } from 'react-router-dom';
import { Package, Layers, TrendingUp, Sparkles } from 'lucide-react';

const CATEGORIES = [
  { id: 'pokemon', name: 'Pokémon', color: '#f59e0b' },
  { id: 'mtg', name: 'Magic: The Gathering', color: '#f97316' },
  { id: 'yugioh', name: 'Yu-Gi-Oh!', color: '#ef4444' },
  { id: 'onepiece', name: 'One Piece', color: '#3b82f6' },
  { id: 'lorcana', name: 'Lorcana', color: '#a855f7' },
  { id: 'digimon', name: 'Digimon', color: '#10b981' },
  { id: 'flesh-and-blood', name: 'Flesh and Blood', color: '#f43f5e' },
  { id: 'starwars', name: 'Star Wars', color: '#94a3b8' },
];

export default function Home() {
  return (
    <div className="container animate-fade-in">
      <div className="flex-between mb-8">
        <div>
          <h1 className="text-accent hover-glow animate-float" style={{ fontSize: '3.5rem', marginBottom: '16px' }}>
            Discover Relics
          </h1>
          <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '600px', lineHeight: '1.6' }}>
            Build and optimize your ultimate collection. Explore millions of authenticated cards from across the multiverse.
          </p>
        </div>
      </div>
      
      <div className="grid-categories mb-8">
        {CATEGORIES.map((cat) => (
          <Link 
            key={cat.id} 
            to={`/search?game=${cat.id}`}
            className="glass glass-interactive flex-center flex-col"
            style={{ 
              padding: '36px',
              textDecoration: 'none',
              borderTop: `4px solid ${cat.color}`,
              borderTopRightRadius: '20px',
              borderTopLeftRadius: '20px',
            }}
          >
            <h3 style={{ color: 'black', textAlign: 'center', fontWeight: '500', fontSize: '1.2rem', letterSpacing: '0.05em' }}>
              {cat.name}
            </h3>
          </Link>
        ))}
      </div>

      <div className="flex-between mt-8 mb-6">
        <h2 style={{ fontSize: '2.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
          Market Activity
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
        <Link to="/search?type=recent" className="glass glass-interactive" style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Recent Product</h3>
          <p className="text-secondary mb-6 text-center">Browse the newest hits and sealed drops</p>
          <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '240px', border: '1px solid var(--border-glass)' }}>
            <span className="text-secondary">Image of recent product</span>
          </div>
        </Link>

        <Link to="/search?type=singles" className="glass glass-interactive" style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Singles</h3>
          <p className="text-secondary mb-6 text-center">Top graded slabs and verified raw singles</p>
          <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '240px', border: '1px solid var(--border-glass)' }}>
            <span className="text-secondary">Image of top single in market</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
