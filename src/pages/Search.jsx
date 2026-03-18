import { Link, useSearchParams } from 'react-router-dom';
import { Filter, ShoppingCart } from 'lucide-react';

const DUMMY_RESULTS = [
  { id: 1, name: 'Charizard Base Set - Unlimited', price: 1250.00, game: 'Pokémon', type: 'Single Card', image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Black Lotus - Alpha', price: 25000.00, game: 'Magic: The Gathering', type: 'Single Card', image: 'https://images.unsplash.com/photo-1593814681464-eef5af2b0628?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Blue-Eyes White Dragon', price: 850.00, game: 'Yu-Gi-Oh!', type: 'Single Card', image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Pikachu Illustrator', price: 5000000.00, game: 'Pokémon', type: 'Graded Slab', image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Mox Sapphire', price: 4500.00, game: 'Magic: The Gathering', type: 'Single Card', image: 'https://images.unsplash.com/photo-1593814681464-eef5af2b0628?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Dark Magician - 1st Edition', price: 300.00, game: 'Yu-Gi-Oh!', type: 'Single Card', image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=400&q=80' },
];

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const gameInfo = searchParams.get('game');

  return (
    <div className="container animate-fade-in" style={{ display: 'flex', gap: '40px' }}>
      {/* Sidebar */}
      <aside style={{ flex: '0 0 280px' }}>
        <div className="glass" style={{ padding: '32px', position: 'sticky', top: '100px' }}>
          <div className="flex-between mb-8">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.4rem' }}>
              <Filter size={20} className="text-accent" /> Filters
            </h3>
            <button className="text-secondary" style={{ background: 'none', border: 'none', fontSize: '14px', cursor: 'pointer', transition: 'color 0.2s', ...{ ':hover': { color: '#000' }} }}>
              Reset
            </button>
          </div>

          <div className="mb-8">
            <h4 className="mb-4" style={{ fontSize: '1.1rem', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>Trading Game</h4>
            <div className="flex-col gap-3">
              <label style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer', fontSize: '1.1rem' }}>
                <input type="checkbox" defaultChecked={gameInfo === 'pokemon'} /> Pokémon
              </label>
              <label style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer', fontSize: '1.1rem' }}>
                <input type="checkbox" defaultChecked={gameInfo === 'mtg'} /> Magic: The Gathering
              </label>
              <label style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer', fontSize: '1.1rem' }}>
                <input type="checkbox" defaultChecked={gameInfo === 'yugioh'} /> Yu-Gi-Oh!
              </label>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="mb-4" style={{ fontSize: '1.1rem', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>Format</h4>
            <div className="flex-col gap-3">
              <label style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer', fontSize: '1.1rem' }}>
                <input type="checkbox" /> Single Card
              </label>
              <label style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer', fontSize: '1.1rem' }}>
                <input type="checkbox" /> Sealed Box
              </label>
              <label style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer', fontSize: '1.1rem' }}>
                <input type="checkbox" /> Graded Slab
              </label>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="mb-4" style={{ fontSize: '1.1rem', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>Price Range</h4>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <input type="number" placeholder="Min" className="input-field" style={{ padding: '10px' }} />
              <span className="text-secondary">—</span>
              <input type="number" placeholder="Max" className="input-field" style={{ padding: '10px' }} />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ flex: '1' }}>
        <div className="flex-between mb-8" style={{ alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              {query ? `Search Results for "${query}"` : (gameInfo ? `Browsing ${gameInfo}` : 'All Products')}
            </h2>
            <span className="text-secondary" style={{ fontSize: '1.1rem' }}>{DUMMY_RESULTS.length} Results</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.02)', padding: '12px 20px', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
            <span className="text-secondary" style={{ fontSize: '1rem', fontWeight: '500' }}>Sort by:</span>
            <select className="input-field" style={{ padding: '8px 32px 8px 12px', backgroundColor: 'transparent', border: '1px solid #000', cursor: 'pointer', appearance: 'none', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'black\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")' }}>
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </div>

        <div className="grid-cards">
          {DUMMY_RESULTS.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="glass glass-interactive" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', textDecoration: 'none' }}>
              <div style={{ height: '280px', background: '#f5f5f5', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                <img  
                  src={item.image} 
                  alt={item.name}
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(2deg)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '24px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--accent-2)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {item.game}
                  </span>
                  <span style={{ fontSize: '0.8rem', background: '#eaeaea', padding: '2px 8px', borderRadius: '12px', color: '#000' }}>
                    {item.type}
                  </span>
                </div>
                <h3 style={{ marginBottom: '24px', flex: '1', fontSize: '1.4rem', lineHeight: '1.3' }}>{item.name}</h3>
                
                <div className="flex-between" style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-glass)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className="text-secondary" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Market Price</span>
                    <span style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>
                      ${item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <button className="btn btn-primary btn-icon" onClick={(e) => { e.preventDefault(); /* add to cart */ }}>
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination mock */}
        <div className="flex-center mt-8" style={{ gap: '12px', marginTop: '60px' }}>
          <button className="btn btn-icon" disabled style={{ opacity: 0.3 }}>&lt;</button>
          <button className="btn btn-primary btn-icon" style={{ width: '44px', height: '44px' }}>1</button>
          <button className="btn btn-icon" style={{ width: '44px', height: '44px' }}>2</button>
          <button className="btn btn-icon" style={{ width: '44px', height: '44px' }}>3</button>
          <button className="btn btn-icon">&gt;</button>
        </div>
      </div>
    </div>
  );
}
