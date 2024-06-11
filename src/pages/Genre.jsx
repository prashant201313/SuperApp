import React, { useState } from 'react';
import Box from '../components/Box';
import Chip from '../components/Chip';
import { useNavigate } from 'react-router-dom';

const MOVIES = [
  {
    id: 0,
    category: "Action",
    backgroundColor: "#FF5209",
    image: "./action.png"
  }, 
  {
    id: 1,
    category: "Drama",
    backgroundColor: "#D7A4FF",
    image: "./drama.png"
  },
  {
    id: 2,
    category: "Romance",
    backgroundColor: "#148A08",
    image: "./romance.png"
  },
  {
    id: 3,
    category: "Thriller",
    backgroundColor: "#84C2FF",
    image: "./thriller.png"
  },
  {
    id: 4,
    category: "Western",
    backgroundColor: "#902500",
    image: "./western.png"
  },
  {
    id: 5,
    category: "Horror",
    backgroundColor: "#7358FF",
    image: "./horror.png"
  },
  {
    id: 6,
    category: "Fantasy",
    backgroundColor: "#FF4ADE",
    image: "./fantasy.png"
  },
  {
    id: 7,
    category: "Music",
    backgroundColor: "#E61E32",
    image: "./music.png"
  },
  {
    id: 8,
    category: "Fiction",
    backgroundColor: "#6CD061",
    image: "./fiction.png"
  },
]

export default function Genre() {
  const [selectedMovie, setSelectedMovie] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = () => {
    if(selectedMovie.length < 3) return;
    localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
    navigate('/info')
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'100vh', backgroundColor: '#000000'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80vh', width: '80vw' }}>
        
        <div style={{ width: '30vw', height: '75vh', margin: '10px' }}>
          <p style={{ fontFamily: 'Single Day', color: '#72DB73', fontSize: '3rem', marginBottom: '40px' }}>Super app</p>
          <p style={{ fontFamily: 'Roboto', color: '#FFFFFF', fontWeight: '500', fontSize: '3rem', margin: '30px 0', lineHeight: '4.5rem'}}>Choose your entertainment category</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px'}}>
            {selectedMovie.length>0 ? selectedMovie.map((movie, index) => {
              return <Chip key={index} selectedMovie={movie} setSelectedMovie={setSelectedMovie} />
            }): null}
          </div>

          <p style={{fontFamily: 'Roboto', color: '#FF0000', marginTop: '30px'}}>
            {selectedMovie.length < 3 ? <div><img style={{width: '20px'}} src="./warning.png" alt="warning" />&nbsp; Minimum 3 category required</div> : null}
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
          {MOVIES.map((movie) => {
            return <Box key={movie.id} data={movie} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
          })}
        </div>

        <button onClick={handleNavigate} style={{ position: 'fixed', bottom: '20px', right: '9rem', width: '100px', padding: '10px', backgroundColor: '#148A08',fontFamily: 'DM Sans', color: '#FFFFFF', border: 'none', borderRadius: '20px', cursor: 'pointer'}}>Next Page</button>
      </div>
    </div>
  );
}


