import React from 'react'
// import axios from 'axios';

import GenreCard from '../GenreCard';

const Genres = () => {

    const [genreState, setGenreState] = React.useState([]);

    React.useEffect(() => {
      fetch('http://localhost/save.php')
        .then((res) => res.json())
        .then((data) => {
          setGenreState(data);
        })
    }, [])

  // React.useEffect(()=>{
  //   axios.get('http://localhost/save.php')
  //     .then((resp) => {
  //       setGenreState(resp.data);
  //     })
  // }, [])

  return (<div className="back-list-genre">
            {
              genreState.map((obj) => (
                <GenreCard 
                  key={obj.id_janre}
                  genreName={obj.name_janre}
                  genrePoster={obj.poster_janre}
                />
              ))
            }
          </div> 
  )
}

export default Genres;
