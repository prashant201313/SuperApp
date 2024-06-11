import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const GENRE_LIST = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
]

export default function Movies() {
  const navigate = useNavigate();

  const selectedMoviesByUser = JSON.parse(localStorage.getItem("selectedMovie"));

  const selectedGenresToFetch = selectedMoviesByUser.map((movie) => {
    return GENRE_LIST.find((genre) => genre.name === movie);
  });

  const [movies, setMovies] = useState([
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/5Zv5KmgZzdIvXz2KC3n0MyecSNL.jpg",
      "genre_ids": [
        28,
        53,
        80
      ],
      "id": 634528,
      "original_language": "en",
      "original_title": "The Marksman",
      "overview": "Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.",
      "popularity": 1503.985,
      "poster_path": "https://image.tmdb.org/t/p/original/6vcDalR50RWa309vBH1NLmG2rjQ.jpg",
      "release_date": "2021-01-15",
      "title": "The Marksman",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 126
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/jnq4fV53Px9HvUZD2bQIxtGSwS7.jpg",
      "genre_ids": [
        80,
        18,
        28
      ],
      "id": 644083,
      "original_language": "en",
      "original_title": "Twist",
      "overview": "A Dicken’s classic brought thrillingly up to date in the teeming heartland of modern London, where a group of street smart young hustlers plan the heist of the century for the ultimate payday.",
      "popularity": 996.424,
      "poster_path": "https://image.tmdb.org/t/p/original/29dCusd9PwHrbDqzxNG35WcpZpS.jpg",
      "release_date": "2021-01-22",
      "title": "Twist",
      "video": false,
      "vote_average": 7,
      "vote_count": 42
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/uQtqiAu2bBlokqjlURVLEha6zoi.jpg",
      "genre_ids": [
        80,
        18
      ],
      "id": 544401,
      "original_language": "en",
      "original_title": "Cherry",
      "overview": "Cherry drifts from college dropout to army medic in Iraq - anchored only by his true love, Emily. But after returning from the war with PTSD, his life spirals into drugs and crime as he struggles to find his place in the world.",
      "popularity": 946.541,
      "poster_path": "https://image.tmdb.org/t/p/original/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg",
      "release_date": "2021-02-26",
      "title": "Cherry",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 517
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/6TPZSJ06OEXeelx1U1VIAt0j9Ry.jpg",
      "genre_ids": [
        28,
        80,
        53
      ],
      "id": 587996,
      "original_language": "es",
      "original_title": "Bajocero",
      "overview": "When a prisoner transfer van is attacked, the cop in charge must fight those inside and outside while dealing with a silent foe: the icy temperatures.",
      "popularity": 867.733,
      "poster_path": "https://image.tmdb.org/t/p/original/dWSnsAGTfc8U27bWsy2RfwZs0Bs.jpg",
      "release_date": "2021-01-29",
      "title": "Below Zero",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 517
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg",
      "genre_ids": [
        28,
        53,
        80
      ],
      "id": 615457,
      "original_language": "en",
      "original_title": "Nobody",
      "overview": "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a \"nobody.\" When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.",
      "popularity": 703.822,
      "poster_path": "https://image.tmdb.org/t/p/original/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
      "release_date": "2021-03-18",
      "title": "Nobody",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 565
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg",
      "genre_ids": [
        53,
        80
      ],
      "id": 602269,
      "original_language": "en",
      "original_title": "The Little Things",
      "overview": "Deputy Sheriff Joe \"Deke\" Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who's terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke's past, uncovering disturbing secrets that could threaten more than his case.",
      "popularity": 671.465,
      "poster_path": "https://image.tmdb.org/t/p/original/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg",
      "release_date": "2021-01-28",
      "title": "The Little Things",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 763
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/fX8e94MEWSuTJExndVYxKsmA4Hw.jpg",
      "genre_ids": [
        28,
        12,
        80
      ],
      "id": 604822,
      "original_language": "zh",
      "original_title": "急先锋",
      "overview": "Covert security company Vanguard is the last hope of survival for an accountant after he is targeted by the world's deadliest mercenary organization.",
      "popularity": 510.639,
      "poster_path": "https://image.tmdb.org/t/p/original/mKvw1Ic9enfFlCPBNJGiejRPMUO.jpg",
      "release_date": "2020-09-30",
      "title": "Vanguard",
      "video": false,
      "vote_average": 6.2,
      "vote_count": 285
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg",
      "genre_ids": [
        28,
        80
      ],
      "id": 495764,
      "original_language": "en",
      "original_title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
      "overview": "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
      "popularity": 492.893,
      "poster_path": "https://image.tmdb.org/t/p/original/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
      "release_date": "2020-02-05",
      "title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 7372
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/3N316jUSdhvPyYTW29G4v9ebbcS.jpg",
      "genre_ids": [
        53,
        28,
        80
      ],
      "id": 38700,
      "original_language": "en",
      "original_title": "Bad Boys for Life",
      "overview": "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
      "popularity": 450.122,
      "poster_path": "https://image.tmdb.org/t/p/original/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
      "release_date": "2020-01-15",
      "title": "Bad Boys for Life",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 6193
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
      "genre_ids": [
        28,
        80,
        18,
        53
      ],
      "id": 539885,
      "original_language": "en",
      "original_title": "Ava",
      "overview": "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
      "popularity": 421.1,
      "poster_path": "https://image.tmdb.org/t/p/original/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
      "release_date": "2020-07-02",
      "title": "Ava",
      "video": false,
      "vote_average": 5.7,
      "vote_count": 1470
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/2M2JxEv3HSpjnZWjY9NOdGgfUd.jpg",
      "genre_ids": [
        53,
        28,
        80,
        18
      ],
      "id": 553604,
      "original_language": "en",
      "original_title": "Honest Thief",
      "overview": "A bank robber tries to turn himself in because he's falling in love and wants to live an honest life...but when he realizes the Feds are more corrupt than him, he must fight back to clear his name.",
      "popularity": 403.264,
      "poster_path": "https://image.tmdb.org/t/p/original/zeD4PabP6099gpE0STWJrJrCBCs.jpg",
      "release_date": "2020-09-03",
      "title": "Honest Thief",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 798
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/dEh93Ni98JWh7fmhD56ZlOFQmoT.jpg",
      "genre_ids": [
        80,
        18,
        53
      ],
      "id": 606523,
      "original_language": "ko",
      "original_title": "낙원의 밤",
      "overview": "An assassin named Tae-goo is offered a chance to switch sides with his rival Bukseong gang, headed by Chairman Doh. Tae-goo rejects the offer that results in the murder of his sister and niece. In revenge, Tae-goo brutally kills Chairman Doh and his men and flees to Jeju Island where he meets Jae-yeon, a terminally ill woman. Though, the henchman of the Bukseong gang, Executive Ma is mercilessly hunting Tae-goo to take revenge.",
      "popularity": 398.875,
      "poster_path": "https://image.tmdb.org/t/p/original/dYCWUAidqgakGETwZkfGxU7CWhL.jpg",
      "release_date": "2020-09-03",
      "title": "Night in Paradise",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 68
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/1umKVgbjFG5Cho5ZKTpcvRFJjuJ.jpg",
      "genre_ids": [
        35,
        53,
        80
      ],
      "id": 609242,
      "original_language": "es",
      "original_title": "El robo del siglo",
      "overview": "In 2006, a group of thieves performed what is considered one of the most famous and smart bank heists in the history of Argentina. How they robbed the Rio bank is as surprising as what happened afterwards. This is their story.",
      "popularity": 390.571,
      "poster_path": "https://image.tmdb.org/t/p/original/aSGwXbaTMxUhrfXT6xyZKqoklfB.jpg",
      "release_date": "2020-01-16",
      "title": "The Heist of the Century",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 483
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
      "genre_ids": [
        80,
        53,
        18
      ],
      "id": 475557,
      "original_language": "en",
      "original_title": "Joker",
      "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      "popularity": 377.104,
      "poster_path": "https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      "release_date": "2019-10-02",
      "title": "Joker",
      "video": false,
      "vote_average": 8.2,
      "vote_count": 17345
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/zogWnCSztU8xvabaepQnAwsOtOt.jpg",
      "genre_ids": [
        28,
        80,
        18
      ],
      "id": 531499,
      "original_language": "en",
      "original_title": "The Tax Collector",
      "overview": "David Cuevas is a family man who works as a gangland tax collector for high ranking Los Angeles gang members. He makes collections across the city with his partner Creeper making sure people pay up or will see retaliation. An old threat returns to Los Angeles that puts everything David loves in harm’s way.",
      "popularity": 332.977,
      "poster_path": "https://image.tmdb.org/t/p/original/3eg0kGC2Xh0vhydJHO37Sp4cmMt.jpg",
      "release_date": "2020-08-07",
      "title": "The Tax Collector",
      "video": false,
      "vote_average": 5.8,
      "vote_count": 279
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/wlnDNMQlnwl5ETlVY6n9CEtR5s0.jpg",
      "genre_ids": [
        878,
        28,
        80,
        53,
        18
      ],
      "id": 461130,
      "original_language": "en",
      "original_title": "Code 8",
      "overview": "In Lincoln City, some inhabitants have extraordinary abilities. Most live below the poverty line, under the close surveillance of a heavily militarized police force. Connor, a construction worker with powers, involves with a criminal gang to help his ailing mother. (Based on the short film “Code 8,” 2016.)",
      "popularity": 258.251,
      "poster_path": "https://image.tmdb.org/t/p/original/izGX7npHEopDQvngYcxMJEfcFbj.jpg",
      "release_date": "2019-12-06",
      "title": "Code 8",
      "video": false,
      "vote_average": 6.2,
      "vote_count": 1150
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
      "genre_ids": [
        28,
        53,
        80
      ],
      "id": 458156,
      "original_language": "en",
      "original_title": "John Wick: Chapter 3 - Parabellum",
      "overview": "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
      "popularity": 226.687,
      "poster_path": "https://image.tmdb.org/t/p/original/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
      "release_date": "2019-05-15",
      "title": "John Wick: Chapter 3 - Parabellum",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 6645
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/ne4QPHn56Z1vxk6iKJKvDnmNI9Y.jpg",
      "genre_ids": [
        28,
        80,
        18,
        53
      ],
      "id": 611914,
      "original_language": "en",
      "original_title": "The Courier",
      "overview": "This intense action-thriller unfolds in real time as two embattled souls fight for their lives. Gary Oldman stars as a vicious crime boss out to kill Nick, the lone witness set to testify against him. He hires a mysterious female motorcycle courier to unknowingly deliver a poison-gas bomb to slay Nick, but after she rescues Nick from certain death, the duo must confront an army of ruthless hired killers in order to survive the night.",
      "popularity": 218.741,
      "poster_path": "https://image.tmdb.org/t/p/original/cmC7bJZ5sCzx9ZsrlXOrYJfYtLc.jpg",
      "release_date": "2019-11-22",
      "title": "The Courier",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 355
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/erpYg6h8MnoT2BZqdlT0zABbbqK.jpg",
      "genre_ids": [
        28,
        35,
        80
      ],
      "id": 799497,
      "original_language": "pt",
      "original_title": "Cabras da Peste",
      "overview": "Bruceuilis, a policeman from the countryside, is assigned to rescue Celestina, a goat considered heritage of his small city, and travels to São Paulo. There, he meets police clerk Trindade, who decides to venture out into the field, even though it is not his specialty.",
      "popularity": 203.714,
      "poster_path": "https://image.tmdb.org/t/p/original/rzcdLb0BhPaUJjD2jEcfRMiwOgh.jpg",
      "release_date": "2021-03-18",
      "title": "Get the Goat",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 93
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/jlxDtvmdniVlnGDaDWIrlCiDNpj.jpg",
      "genre_ids": [
        16,
        28,
        12,
        80,
        14
      ],
      "id": 732450,
      "original_language": "en",
      "original_title": "Batman: Soul of the Dragon",
      "overview": "Bruce Wayne faces a deadly menace from his past, with the help of three former classmates: world-renowned martial artists Richard Dragon, Ben Turner and Lady Shiva.",
      "popularity": 201.015,
      "poster_path": "https://image.tmdb.org/t/p/original/uDhnTtSxU5a8DtZdbbin3aZmkmU.jpg",
      "release_date": "2021-01-12",
      "title": "Batman: Soul of the Dragon",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 127
    }
  ]);

  // Comment out this in order to see real time movie in this Api and also remove the movies useState
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   async function fetchMovies(id) {
  //     const url = `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${id}&page=1`;
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-key': '772c86ae89msh16c4af6060fec41p1d9283jsna8585935f2b0',
  //         'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com'
  //       }
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.text();
  //       return result;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   const promises = selectedGenresToFetch.map((genre) => {
  //     return fetchMovies(genre.id);
  //   });

  //   promises.forEach(async (promise) => {
  //     setTimeout(async () => {
  //       const result = await promise;
  //       setMovies((prev) => [...prev, JSON.parse(result)]);
  //     }, 5000); // becasue of rate-limit
  //   });

  // }, [selectedGenresToFetch]);

  const checkMoviesInGenre = (genreId) => {
    return movies.some((movie) => movie.genre_ids.includes(genreId));
  };

  return (
    <div style={{ padding: '20px 30px', background: '#000000'}}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ fontFamily: 'Single Day', color: '#72DB73', fontSize: '2.5rem', marginBottom: '2rem' }}>Super app</p>
        <img onClick={() => navigate('/info')} style={{ width: '4%', cursor: 'pointer' }} src="/assets/profile.png" alt="profile" />
      </div>

      <div style={{ width: '95vw', margin: 'auto' }}>
        <p style={{ color: '#FFFFFF', fontFamily: 'Roboto', fontSize: '1.3rem', marginLeft: '2.2rem' }}>Entertainment according to your choice</p>

        {selectedGenresToFetch.map((genre) => (
          <div key={genre.id} style={{marginTop: '30px'}}>
            <h2 style={{fontFamily: 'Roboto', fontSize: '1.1rem', fontWeight: '500', marginLeft: '34px', marginBottom: '3px', color: '#878787'}}>{genre.name}</h2>
            
            {checkMoviesInGenre(genre.id) ? 
              <div style={{display: 'flex', flexWrap: 'wrap', width: '90vw',  marginTop: '10px', marginLeft: '0.8rem'}}>
                {movies
                  .filter((movie) => movie.genre_ids.includes(genre.id))
                  .map((filteredMovie) => (
                    <div key={filteredMovie.id} style={{margin: '15px 20px', width: '300px', height: '180px'}}>
                      <img
                        height={180}
                        width={300}
                        src={filteredMovie.poster_path}
                        alt={filteredMovie.title}
                        style={{borderRadius: '10px', cursor: 'pointer'}}
                      />
                    </div>
                  ))}
              </div> : <p style={{color: '#FFFFFF', margin: '20px 34px', fontFamily: 'Roboto', fontSize: '1.3rem'}}>😔 Sorry! Right now we don't have movies of {genre.name} category</p>
            }
          </div>
        ))}

      </div>
    </div>
  );
}
