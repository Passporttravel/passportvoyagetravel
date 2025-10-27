export default function App() {
  return (
    <div style={{
      minHeight: '100%',
      display: 'grid',
      placeItems: 'center',
      padding: '40px'
    }}>
      <div style={{
        width: 'min(900px, 92vw)',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,.08)',
        padding: '28px'
      }}>
        <h1 style={{margin:'0 0 8px'}}>🌍 Passportvoyagetravel</h1>
        <p style={{margin:'0 0 18px', color:'#444'}}>
          Tu web está activa. Si ves este bloque, React está montando bien.
        </p>

        <div style={{
          display:'grid',
          gap:'16px',
          gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',
          marginTop:'8px'
        }}>
          <div style={{background:'#f2f4f8', borderRadius:'12px', padding:'16px'}}>
            <h3 style={{margin:'0 0 6px'}}>Rutas Sagradas</h3>
            <p style={{margin:0}}>Camino de Santiago · Lourdes · Covadonga</p>
          </div>
          <div style={{background:'#f2f4f8', borderRadius:'12px', padding:'16px'}}>
            <h3 style={{margin:'0 0 6px'}}>Norte de España</h3>
            <p style={{margin:0}}>Navarra · Asturias · Galicia · País Vasco francés · La Rioja · Aragón</p>
          </div>
          <div style={{background:'#f2f4f8', borderRadius:'12px', padding:'16px'}}>
            <h3 style={{margin:'0 0 6px'}}>Costa Este USA</h3>
            <p style={{margin:0}}>Nueva York · Orlando · Miami</p>
          </div>
        </div>

        <div style={{marginTop:'18px'}}>
          <a href="https://www.civitatis.com" target="_blank" rel="noreferrer">Civitatis</a>
          {' · '}
          <a href="https://www.viator.com" target="_blank" rel="noreferrer">Viator</a>
        </div>

        <small style={{display:'block', marginTop:'16px', color:'#666'}}>
          Marca de prueba: {new Date().toLocaleString()}
        </small>
      </div>
    </div>
  )
}

