import React from 'react'


const HomeBanner = () => {
  return (
    <div className="h-[15vh] md:h-[40vh] bg-center bg-no-repeat flex items-end bg-sky-300 filter"
  style={{
    backgroundImage: `url(https://images.hdqwalls.com/wallpapers/the-batman-2022-movie-poster-art-cy.jpg)`,
    backgroundBlendMode:'multiply',
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    }}>   
       <div className='flex-col m-10 absolute top-20 '>
          <h2 className='text-white text-5xl font-bold leading-none font-sans'>Welcome.</h2>
          <h3 className='text-white text-3xl font-bold leading-none font-sans'>Millions of movies,Tv shows and people to discover. Explore now.</h3>
          <div className="mt-4">
          <form className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search for a movie, TV show, person......"
              className="border border-gray-400 px-4 py-2 rounded-l-xl focus:outline-none focus:ring focus:border-blue-500 flex-1"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-xl focus:outline-none focus:ring focus:border-blue-500"
            >
              Search
            </button>
          </form>
        </div>
        </div>
       
        
    </div>
  )
}

export default HomeBanner