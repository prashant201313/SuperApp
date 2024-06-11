import React, { useState, useEffect, useRef } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import '../App.css';

export default function Info() {
  const navigate = useNavigate();

  const handleMovies = () => {
    navigate('/movies')
  }

  return (   
    <div style={{backgroundColor: '#000000', padding: '2rem 5rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto auto auto', gridColumnGap: '3rem', gridRowGap: '1.5rem'}}>
      <div style={{gridRow: '1/span 2'}}>
        <UserData />
      </div>

      <div style={{gridRow: '1/span 3'}}>
        <NotePad />
      </div>

      <div style={{gridRow: '1/span 5'}}>
        <NewsData />
      </div>

      <div>
        <WeatherData />
      </div>

      <div style={{gridColumn: '1/span 2'}}>
        <Timer />
      </div>

      <button onClick={handleMovies} style={{position: 'fixed', right: '5rem', bottom: '1.2rem', backgroundColor: '#148A08', color: '#FFFFFF', fontWeight: '550', padding: '10px 35px', border: 'none', borderRadius: '20px', cursor: 'pointer'}}>Browse</button>
    </div>
  );
}


// UserData Component
const UserData = () => {
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  const movies = JSON.parse(localStorage.getItem("selectedMovie"));

  return (
    <div style={{ display: 'flex', backgroundColor: '#5746EA', padding: '1rem', borderRadius: '12px' }}>
      <div>
        <img width={80} src="/assets/info.png" alt="userPic" />
      </div>

      <div style={{ padding: '0.5rem 2.5rem', fontFamily: 'Roboto', color: '#FFFFFF' }}>
        <p style={{ fontSize: '1rem', fontWeight: '350', marginBottom: '0.2rem' }}>{userDetails.name}</p>
        <p style={{ fontSize: '1rem', fontWeight: '350', marginBottom: '0.2rem' }}>{userDetails.email}</p>
        <p style={{ fontSize: '1.5rem', marginBottom: '1.3rem' }}>{userDetails.username}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', width: '400px', gap: '0.5rem' }}>
          {movies.map((movie, idx) => (
            <p key={idx} style={{ backgroundColor: '#9F94FF', fontSize: '0.7rem', width: '24%', padding: '7px 15px', borderRadius: '20px' }}>{movie}</p>
          ))}
        </div>
      </div>
    </div>
  )
}


// Notepad Component
const NotePad = () => {
  const [data, setData] = useState(localStorage.getItem("notes") ?? "");
  const textBoxRef = useRef(null);

  const handleInput = (e) => {
    localStorage.setItem("notes", e.target.innerHTML);
    setData(e.target.innerHTML);
  };

  useEffect(() => {
    // Set the initial content of the contentEditable div only once
    if (textBoxRef.current) {
      textBoxRef.current.innerHTML = data;
    }
  }, []);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#F1C75B',
      fontFamily: 'Roboto',
      borderRadius: '12px'
    },
    heading: {
      marginBottom: '10px',
      fontSize: '24px',
      padding: '15px 30px 0px'
    },
    textBox: {
      height: '300px',
      overflowY: 'scroll',
      padding: '0 30px',
      marginBottom: '15px',
      outline: 'none',
      backgroundColor: '#F1C75B',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>All Notes</h1>
      <div className='textbox' contentEditable style={styles.textBox} ref={textBoxRef} onInput={handleInput}></div>
    </div>
  );
};


// News Component
const NewsData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const url = 'https://google-news13.p.rapidapi.com/latest?lr=en-US';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '772c86ae89msh16c4af6060fec41p1d9283jsna8585935f2b0',
          'x-rapidapi-host': 'google-news13.p.rapidapi.com'
        }
      };

      try {
       setLoading(true);
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchNews()
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.items || data.items.length === 0) {
    return <div style={{fontSize: '1.5rem', textAlign: 'center', color: '#FFFFFF'}}>No data available!</div>
  }

  return (
    <>
      {loading && <Spinner />}
      <div>
        {!loading && <div style={{height: '593px', borderRadius: '12px', overflow: 'auto'}}>
            <img src={data.items[0].images.thumbnailProxied} alt="thumbnail" style={{width: '100%', height: '60%'}} />
            <p style={{fontFamily: 'Roboto', padding: '0 16px', fontSize: '1.2rem', fontWeight: 'bold'}}>{data.items[0].title.slice(0,85)}...</p>
            <p style={{fontFamily: 'Roboto', color: '#272727', fontSize: '0.8rem', padding: '18px', lineHeight: '25px'}}>{data.items[0].snippet.slice(0, 100)}...</p>
          </div>
        }
      </div>
    </>
  )
}


// WeatherData Component
const WeatherData = () => {
  const [weather, setWeather] = useState(null)

  const getCurrentDate = () => {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  const getCurrentTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    const strTime = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
    return strTime;
  };

  useEffect(() => {
    const fetchWeather = async () => {
      const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=gurgaon&format=json&u=c';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '772c86ae89msh16c4af6060fec41p1d9283jsna8585935f2b0',
          'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setWeather(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeather();
  }, [])

  return weather ? (
    <div style={{borderRadius: '12px', overflow: 'auto'}}>
      <div style={{height: '30px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#FF4ADE', color: '#FFFFFF', fontFamily: 'Roboto', fontWeight: 'bold'}}>
        <p>{getCurrentDate()}</p>
        <p>{getCurrentTime()}</p>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#101744', padding: '1rem 2.5rem', color: '#FFFFFF', fontFamily: 'Roboto'}}>

        <div style={{fontSize: '1.5rem'}}>
          <p>{weather.current_observation.condition.temperature}°C</p>
          <p>{weather.location.city}, {weather.location.country}</p>
        </div>
        |
        <div style={{display: 'flex'}}>
          <img width={25} src="/assets/pressure.png" alt="pressure" />
          <div style={{fontSize: '1.2rem', marginLeft: '10px'}}>
            <p>{weather.current_observation.atmosphere.pressure} mbar</p>
            <p>Pressure</p>
          </div>
        </div>
        |
        <div>
          <div style={{display: 'flex', marginBottom: '10px'}}>
            <img width={15} src="/assets/wind.png" alt="wind" />
            <div style={{fontSize: '0.6rem', marginLeft: '8px'}}>
              <p>{weather.current_observation.wind.speed} km/h</p>
              <p>Wind</p>
            </div>
          </div>

          <div style={{display: 'flex'}}>
            <img width={15} src="/assets/humidity.png" alt="humidity" />
            <div style={{fontSize: '0.6rem', marginLeft: '8px'}}>
              <p>{weather.current_observation.atmosphere.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <div style={{height: '123px', borderRadius: '12px', backgroundColor: 'white'}}></div>
}


// Timer Component
const Timer = () => {
  const styles = {
    timerDivs: { 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    timing: { 
      color: '#949494', 
      fontFamily: 'Roboto', 
      fontSize: '1.2rem', 
      marginBottom: '1rem' 
    },
    arrows: {
      cursor: 'pointer', 
      marginBottom: '0.8rem'
    },
    timer: {
      fontFamily: 'Roboto',
      color: '#FFFFFF',
      fontSize: '1.8rem',
      fontWeight: '300',
      marginBottom: '0.8rem',
    }
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  function increaseSecond() {
    setTime((time) => time + 1);
  }

  function increaseMinute() {
    setTime((time) => time + 60);
  }

  function increaseHour() {
    setTime((time) => time + 3600);
  }

  function decreaseSecond() {
    if (time > 0) {
      setTime((time) => time - 1);
    }
  }

  function decreaseMinute() {
    if (time >= 60) {
      setTime((time) => time - 60);
    }
  }

  function decreaseHour() {
    if (time >= 3600) {
      setTime((time) => time - 3600);
    }
  }

  function formatTime(time) {
    const hours = parseInt(time / 3600, 10).toString().padStart(2, '0');
    const minutes = parseInt((time % 3600) / 60, 10).toString().padStart(2, '0');
    const seconds = parseInt(time % 60, 10).toString().padStart(2, '0');
    return { hours, minutes, seconds };
  }

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <>
      <div style={{ display: 'flex', background: '#1E2343', padding: '1rem 3rem', borderRadius: '12px' }}>
        <div style={{ background: '#191E39', borderRadius: '50%', padding: '10px', boxShadow: '0px 6px 26px 0px #0000009C inset, -3px -7px 16px 0px #5F58583B' }}>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={time}
            colors={['#FF6A6A']}
            rotation='counterclockwise'
            strokeWidth={6}
            trailColor='transparent'
            size={150}
          >
            {({ remainingTime }) => {
              const { hours, minutes, seconds } = formatTime(remainingTime);
              return (
                <p style={{ color: '#FFFFFF', fontSize: '1.5rem', fontFamily: 'Roboto' }}>
                  {hours}:{minutes}:{seconds}
                </p>
              );
            }}
          </CountdownCircleTimer>
        </div>

        <div style={{ marginLeft: '10rem', width: '50%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

            <div style={styles.timerDivs}>
              <p style={styles.timing}>Hours</p>
              <img width={20} src="/assets/increament.png" alt="increaseHour" onClick={increaseHour} style={styles.arrows} />
              <p style={styles.timer}>{hours}</p>
              <img width={20} src="/assets/decrement.png" alt="decreaseHour" onClick={decreaseHour} style={styles.arrows} />
            </div>

            <div style={styles.timerDivs}>
              <p style={styles.timing}>Minutes</p>
              <img width={20} src="/assets/increament.png" alt="increaseMinute" onClick={increaseMinute} style={styles.arrows} />
              <p style={styles.timer}>{minutes}</p>
              <img width={20} src="/assets/decrement.png" alt="decreaseMinute" onClick={decreaseMinute} style={styles.arrows} />
            </div>

            <div style={styles.timerDivs}>
              <p style={styles.timing}>Seconds</p>
              <img width={20} src="/assets/increament.png" alt="increaseSecond" onClick={increaseSecond} style={styles.arrows} />
              <p style={styles.timer}>{seconds}</p>
              <img width={20} src="/assets/decrement.png" alt="decreaseSecond" onClick={decreaseSecond} style={styles.arrows} />
            </div>
          </div>

          <button disabled={isPlaying} onClick={() => setIsPlaying(true)} style={{ padding: '2px', fontFamily: 'Roboto', fontSize: '1.2rem', color: '#FFFFFF', backgroundColor: '#FF6A6A', border: 'none', borderRadius: '20px', letterSpacing: '2px', cursor: 'pointer' }}>Start</button>
        </div>
      </div>
    </>
  )
}
