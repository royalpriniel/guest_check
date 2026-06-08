import React, { useState } from 'react';

// 1. Capitalized function name
export function GuestCheck() { 
  const [guestName, setGuestName] = useState('');
  const [message, setMessage] = useState('');
  const [accessGranted, setAccessGranted] = useState(null);

  const guestList = [
    "Daniel", "Somtoochi", "Daniel Somtoochi", "Daniel Somtoochi Dav-Emmanuel",
    "royalpriniel", "Royalpriniel", "Jesus", "Jehovah", "Holy Spirit", "Daniel's friend",
    "Angels", "Angel", "Word of God", "Bible", "Prayer", 
    "True Christian", "God", "Jesus Christ"
  ];

  const handleInputChange = (e) => {
    setGuestName(e.target.value);
    // Reset message when user starts typing again
    if (accessGranted !== null) {setAccessGranted(null)};
  };

  const checkInvite = (e) => {
    e.preventDefault();
    
    const isInvited = guestList.some(
      guest => guestName.trim().toLowerCase().includes(guest.toLowerCase()));

    if (isInvited) {
      const lowcGuestName= guestName.toLowerCase();
      const fmtdGuestName = lowcGuestName.replace(/(?<!')\b\w/g, char => char.toUpperCase());
      setMessage(`Welcome, ${fmtdGuestName.trim()}!`);
      setAccessGranted(true);
    } else {
      setMessage("Sorry, you are not invited.");
      setAccessGranted(false);
    }
  };

  return (
    <div style={{ 
      padding: '30px', 
      maxWidth: '400px', 
      margin: '40px auto', 
      textAlign: 'center',
      fontFamily: 'Georgia, serif',
      border: '2px solid #d4af37',
      borderRadius: '15px',
      backgroundColor: '#fffcf5'
    }}>
      <h2 style={{ color: '#d4af37' }}>Private Invitation Check</h2>
      <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>Please enter your name to verify your invitation.</p>
      
      <form onSubmit={checkInvite}>
        <input 
          type="text" 
          value={guestName} 
          onChange={handleInputChange} // Uses the new handler
          placeholder="Enter your name..."
          style={{ 
            width: '80%', 
            padding: '10px', 
            marginBottom: '15px', 
            borderRadius: '5px',
            border: '1px solid #ccc' 
          }}
          required
        />
        <br />
        <button type="submit" style={{ 
          padding: '10px 25px', 
          backgroundColor: '#d4af37', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Check List
        </button>
      </form>

      {accessGranted !== null && (
        <div style={{ 
          marginTop: '25px', 
          padding: '15px', 
          borderRadius: '10px',
          backgroundColor: accessGranted ? '#e6fffa' : '#fff5f5',
          color: accessGranted ? '#2c7a7b' : '#c53030',
          border: `1px solid ${accessGranted ? '#b2f5ea' : '#feb2b2'}`
        }}>
          <strong>{message}</strong>
        </div>
      )}
    </div>
  );
}

