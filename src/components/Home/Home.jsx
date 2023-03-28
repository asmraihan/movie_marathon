import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Home = () => {

    const [movies, setMovies] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])




    return (
        <div className='card-container grid grid-cols-3 gap-5'>
            {
                movies.map(movie=> <Card key={movie.movieName} movie={movie}/> )
            }
        </div>
    );
};

export default Home;