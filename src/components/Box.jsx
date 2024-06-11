import React from 'react';

export default function Box({ data, selectedMovie, setSelectedMovie }) {
  const styles = {
    boxes: { 
      border: `4px solid ${selectedMovie.includes(data.category) ? "#11B800" : "black"}`,
      backgroundColor: `${data.backgroundColor}`,
      borderRadius: '10px',
      fontFamily: 'DM Sans',
      fontSize: '1.3rem',
      color: '#FFFFFF',
      padding: '10px', 
      margin: '10px', 
      height: '140px',
      width: '150px',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer'
    },
    image: {
      width: '100%'
    },
    category: {
      marginBottom: '22px'
    }
  }

  const handleSelection = () => {
    if(selectedMovie.includes(data.category)) {                                        // if this movie is already selected
      setSelectedMovie((prev) => prev.filter((item) => item !== data.category))        // then filter it out and remove from the selected movies array
    }
    else {
      setSelectedMovie((prev) => [...prev, data.category])                             // if this is not selected then add it into the state
    }
  }

  return (
    <div style={styles.boxes} onClick={handleSelection} >
      <div style={styles.category}>{data.category}</div>
      <img src={data.image} alt={data.category} style={styles.image} />
    </div>
  );
}
