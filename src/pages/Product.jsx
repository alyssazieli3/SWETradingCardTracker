import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, Shield, ArrowLeft } from 'lucide-react';

export default function Product() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [condition, setCondition] = useState('NM');

  // Dummy product data
  const product = {
    name: id === '1' ? 'Charizard Base Set - Unlimited' : 'Black Lotus - Alpha',
    game: id === '1' ? 'Pokémon' : 'Magic: The Gathering',
    basePrice: id === '1' ? 1250.00 : 25000.00,
    type: 'Single Card',
    rarity: 'Holo Rare',
    description: 'This is an authentic, highly sought-after trading card in excellent condition. Perfect for serious collectors or competitive players looking to expand their decks. Graded versions are known to increase in value exponentially.',
    image: id === '1' ? 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=600&q=80' : 'https://images.unsplash.com/photo-1593814681464-eef5af2b0628?auto=format&fit=crop&w=600&q=80'
  };

  const getPrice = () => {
    let multiplier = condition === 'NM' ? 1 : condition === 'LP' ? 0.8 : condition === 'MP' ? 0.6 : 0.4;
    return product.basePrice * multiplier;
  };

  return (
    <div className="container animate-fade-in" style={{ maxWidth: '1400px' }}>
      <Link to="/search" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', textDecoration: 'none', color: 'var(--text-secondary)' }}>
        <ArrowLeft size={18} /> Back to Search
      </Link>
      
      <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
        
        {/* Left: Image */}
        <div className="glass" style={{ flex: '1 1 450px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '60px', background: 'rgba(0,0,0,0.6)' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="animate-float"
            style={{ maxWidth: '100%', maxHeight: '600px', objectFit: 'contain', borderRadius: '16px', boxShadow: '0 30px 60px rgba(0,0,0,0.8)' }} 
          />
        </div>

        {/* Middle: Info */}
        <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <span style={{ fontSize: '1rem', color: 'var(--accent-2)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px' }}>
              {product.game}
            </span>
            <h1 className="text-accent" style={{ fontSize: '3.5rem', lineHeight: '1.2', marginTop: '12px', marginBottom: '24px' }}>
              {product.name}
            </h1>
            
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <span className="text-secondary" style={{ fontSize: '1.1rem' }}>24 reviews</span>
            </div>
          </div>

          <p className="text-secondary" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            {product.description}
          </p>

          <div className="glass" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '16px' }}>
            <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', fontSize: '1.4rem' }}>Card Details</h3>
            <div className="flex-between">
              <span className="text-secondary" style={{ fontSize: '1.1rem' }}>Card Type</span>
              <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{product.type}</span>
            </div>
            <div className="flex-between">
              <span className="text-secondary" style={{ fontSize: '1.1rem' }}>Rarity Classification</span>
              <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{product.rarity}</span>
            </div>
            <div className="flex-between mt-2">
              <span className="text-secondary" style={{ fontSize: '1.1rem' }}>Status</span>
              <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                Verified Authentic
              </span>
            </div>
          </div>
        </div>

        {/* Right: Purchase Panel */}
        <div style={{ flex: '0 0 380px' }}>
          <div className="glass" style={{ padding: '40px', position: 'sticky', top: '100px', borderTop: '2px solid var(--accent-1)' }}>
            
            <div className="mb-8">
              <h4 className="text-secondary mb-4" style={{ fontSize: '1.2rem' }}>Physical Condition</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <button 
                  className={`btn ${condition === 'NM' ? 'btn-primary' : ''}`}
                  onClick={() => setCondition('NM')}
                  style={condition !== 'NM' ? { background: 'rgba(0,0,0,0.4)' } : {}}
                >
                  Near Mint
                </button>
                <button 
                  className={`btn ${condition === 'LP' ? 'btn-primary' : ''}`}
                  onClick={() => setCondition('LP')}
                  style={condition !== 'LP' ? { background: 'rgba(0,0,0,0.4)' } : {}}
                >
                  Lightly Played
                </button>
                <button 
                  className={`btn ${condition === 'MP' ? 'btn-primary' : ''}`}
                  onClick={() => setCondition('MP')}
                  style={condition !== 'MP' ? { background: 'rgba(0,0,0,0.4)' } : {}}
                >
                  Moderate
                </button>
                <button 
                  className={`btn ${condition === 'HP' ? 'btn-primary' : ''}`}
                  onClick={() => setCondition('HP')}
                  style={condition !== 'HP' ? { background: 'rgba(0,0,0,0.4)' } : {}}
                >
                  Heavy
                </button>
              </div>
            </div>

            <div className="mb-8 pb-8" style={{ borderBottom: '1px solid var(--border-glass)' }}>
              <h4 className="text-secondary mb-4" style={{ fontSize: '1.2rem' }}>Quantity</h4>
              <div className="glass" style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '12px 24px', width: 'fit-content', background: 'rgba(0,0,0,0.05)' }}>
                <button 
                  className="btn-icon" 
                  style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '1.4rem' }}
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >-</button>
                <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{quantity}</span>
                <button 
                  className="btn-icon" 
                  style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '1.4rem' }}
                  onClick={() => setQuantity(q => q + 1)}
                >+</button>
              </div>
            </div>

            <div className="flex-between mb-8">
              <span className="text-secondary" style={{ fontSize: '1.2rem' }}>Current Market Value</span>
              <span className="text-accent" style={{ fontSize: '2.5rem', fontWeight: '800' }}>
                ${(getPrice() * quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button className="btn btn-primary" style={{ width: '100%', padding: '20px', fontSize: '1.2rem', display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <ShoppingCart size={24} />
                Add to List
              </button>
              <button className="btn" style={{ width: '100%', padding: '20px', fontSize: '1.2rem', display: 'flex', gap: '12px', justifyContent: 'center' }}>
                Checkout
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
