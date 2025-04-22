// src/components/Header.js
import Nav from './Nav'

function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        borderBottom: '1px solid #ccc',
      }}
    >
      <h1>Study With Us</h1>
      <Nav />
    </header>
  )
}

export default Header
