import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, AlertCircle, ShoppingCart } from 'lucide-react';

export default function ListPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Charizard Base Set - Unlimited',
      game: 'Pokémon',
      condition: 'Near Mint',
      price: 1250.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Black Lotus - Alpha',
      game: 'Magic: The Gathering',
      condition: 'Moderately Played',
      price: 25000.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1593814681464-eef5af2b0628?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'Pikachu Illustrator',
      game: 'Pokémon',
      condition: 'Near Mint',
      price: 5000000.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ]);

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const groupedItems = items.reduce((groups, item) => {
    if (!groups[item.game]) groups[item.game] = [];
    groups[item.game].push(item);
    return groups;
  }, {});

  if (items.length === 0) {
    return (
      <div className="container animate-fade-in flex-center flex-col" style={{ minHeight: '60vh', textAlign: 'center' }}>
        <div className="glass p-6" style={{ padding: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '500px' }}>
          <AlertCircle size={80} className="text-secondary mb-6 animate-float" />
          <h2 className="mb-4" style={{ fontSize: '2rem' }}>Your Vault is Empty</h2>
          <p className="text-secondary mb-8" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Looks like you haven't secured any relics yet. Start browsing the marketplace to build your collection.</p>
          <Link to="/search" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
            <ShoppingCart size={20} />
            Browse Relics
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ maxWidth: '1400px' }}>
      <h1 className="mb-8 text-accent" style={{ fontSize: '3rem' }}>My List</h1>
      
      <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {Object.entries(groupedItems).map(([game, gameItems]) => (
            <div key={game}>
              <h2 className="mb-4" style={{ fontSize: '1.8rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '12px' }}>{game}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {gameItems.map(item => (
                  <div key={item.id} className="glass glass-interactive" style={{ display: 'flex', padding: '24px', gap: '24px', alignItems: 'center' }}>
                    <div style={{ width: '100px', height: '140px', borderRadius: '12px', overflow: 'hidden', background: '#000', flexShrink: 0 }}>
                      <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                        <span className="text-secondary" style={{ fontSize: '0.9rem', background: 'rgba(255,255,255,0.05)', padding: '4px 12px', borderRadius: '20px' }}>
                          {item.condition}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', lineHeight: '1.3' }}>{item.name}</h3>
                      
                      <div className="text-accent" style={{ fontWeight: '700', fontSize: '1.5rem' }}>
                        ${item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px', borderLeft: '1px solid var(--border-glass)', paddingLeft: '24px' }}>
                      <div className="glass" style={{ display: 'flex', alignItems: 'center', padding: '8px 16px', gap: '16px', background: 'rgba(0,0,0,0.5)' }}>
                        <button className="btn-icon" style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '1.2rem' }}>-</button>
                        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.quantity}</span>
                        <button className="btn-icon" style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '1.2rem' }}>+</button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '1rem', transition: 'color 0.2s' }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'var(--danger)'}
                        onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                      >
                        <Trash2 size={18} /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ flex: '0 0 400px' }}>
          <div className="glass" style={{ padding: '40px', position: 'sticky', top: '100px', borderTop: '2px solid var(--accent-1)' }}>
            <h3 className="mb-6" style={{ fontSize: '1.6rem' }}>Summary</h3>
            <div className="flex-between mb-4">
              <span className="text-secondary" style={{ fontSize: '1.1rem' }}>Subtotal</span>
              <span style={{ fontSize: '1.2rem' }}>${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex-between mb-4">
              <span className="text-secondary" style={{ fontSize: '1.1rem' }}>Estimated Tax (8%)</span>
              <span style={{ fontSize: '1.2rem' }}>${tax.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex-between mb-6 pb-6" style={{ borderBottom: '1px solid var(--border-glass)' }}>
              <span className="text-secondary" style={{ fontSize: '1.1rem' }}>Shipping</span>
              <span className="text-accent" style={{ fontSize: '1.1rem' }}>Calculated at checkout</span>
            </div>
            <div className="flex-between mb-8">
              <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>Total</span>
              <span className="text-accent" style={{ fontSize: '2.5rem', fontWeight: '800' }}>
                ${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
            </div>
            <button className="btn btn-primary" style={{ width: '100%', padding: '20px', fontSize: '1.2rem', letterSpacing: '1px' }}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
