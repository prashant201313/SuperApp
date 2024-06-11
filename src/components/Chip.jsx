import React from 'react';

export default function Chip({ selectedMovie, setSelectedMovie }) {
    const styles = {
      chip: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '120px',
        backgroundColor: '#148A08',
        fontFamily: 'Roboto',
        color: '#FFFFFF',
        border: 'none',
        padding: '8px 15px',
        borderRadius: '20px'
      }
    }

    const removeSelection = () => {
      setSelectedMovie((prev) => prev.filter((item) => item !== selectedMovie))
    }

  return (
    <span style={styles.chip}>
      {selectedMovie}&nbsp; &nbsp; <span style={{ color:'#085C00', cursor: 'pointer' }} onClick={removeSelection}>X</span>
    </span>
  );
}
