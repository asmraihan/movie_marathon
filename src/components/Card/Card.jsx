import React from 'react';

const Card = ({movie}) => {
    // console.log(props)
    return (
        <div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img
      className="p-2 rounded-t-lg bg-cover h-64 w-full"
      src={movie?.poster}
      alt="product image"
    />
  </a>
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {movie?.movieName}
      </h5>
    </a>
    <p>{movie?.description}</p>
    <div className="flex items-center mt-2.5 mb-5">
    <h3 className='font-semibold'>IMDb rating :</h3>
      <span className="bg-blue-100 text-blue-800 font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
        {movie?.imdbRating}
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-sm font-bold text-gray-900 dark:text-white">
        Watch time : {movie?.watchTime}min
      </span>
      <a
        href="#"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Book now
      </a>
    </div>
  </div>
</div>

        </div>
    );
};

export default Card;