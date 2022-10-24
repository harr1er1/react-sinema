import React from 'react';

import Pagination from '../Pagination/index';

const Films = () => {

    let count = 1;
    const [getFilms, setGetFilms] = React.useState([]);
    const [getAllGenres, setGetAllGenres] = React.useState([]);
    const [getGenres, setGetGenres] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(0);
    
    React.useEffect(() => {
    fetch('http://localhost/getFilm.php')
      .then((res) => res.json())
      .then((data)=> {(setGetFilms(data))})
    }, [])

    React.useEffect(() => {
    fetch('http://localhost/getFilmGenre.php')
      .then((res) => res.json())
      .then((data)=> {(setGetAllGenres(data))})
    }, [])

    React.useEffect(() => {
    fetch('http://localhost/getGenres.php')
      .then((res) => res.json())
      .then((data)=> {(setGetGenres(data))})
    }, [])


  return (<div className="film">
            <div className="active-film">
                <div className='group-film'>
                {getFilms.map((film, i) => (i >= 0 && i<= 5 &&
                <>
                  <div key={film.id_film} className="active-film-block">
                        <div title="Нажмите чтобы приобрести билет" className="af-photo">
                            <img className="af-photo" src="" alt=""/>
                        </div>
                        <div className="af-block-text">
                            <div className="af-title">
                              {film.film_name}
                            </div>
                            <div className="af-block-info">
                                <div className="af-row">
                                    <div className="af-cell">
                                        Жанр:
                                    </div>
                                    <div className="af-cell-info">
                                        {getAllGenres.map((genre) => (genre.id_film === film.film_id && 
                                            (getGenres.map((genreTitle) => (genreTitle.id_janre === genre.id_janre && (count === 1 ? 
                                                <div key={genreTitle.id_janre} className='genre'>{genreTitle.name_janre}</div> : <div key={genreTitle.id_janre} className='genre'>,{genreTitle.name_janre}</div>))
                                            )
                                            )))}
                                      </div>
                                </div>
                                <div className="af-row">
                                    <div className="af-cell">
                                        Страна:
                                    </div>
                                    <div className="af-cell-info">
                                        {film.country}
                                    </div>
                                </div>
                                <div className="af-row">
                                    <div className="af-cell">
                                        Режисер:
                                    </div>
                                    <div className="af-cell-info">
                                      {film.director}
                                    </div>
                                </div>
                                <div className="af-row">
                                    <div className="af-cell">
                                        Возраст:
                                    </div>
                                    <div className="af-cell-info">
                                      {film.age}+
                                    </div>
                                </div>
                                <div className="af-row">
                                    <div className="af-cell">
                                        Длительность:
                                    </div>
                                    <div className="af-cell-info">
                                      {film.duration} минуты
                                    </div>
                                </div>
                            </div>
                            <div className="af-description-title">
                                <div className="af-description-line"></div>
                                Описание
                            </div>
                            <div className="af-description" >
                              {film.description}
                            </div>
                        </div>
                    </div>
                </>
      ))}
                </div>

        <div className='pagination-block'>
            <Pagination onChangePage={(number) => setCurrentPage(number)} getFilms={getFilms}/>
        </div>



      <div className="split">
                    <div className="line"></div>
                    <div className="line-text">Скоро в прокате</div>
                    <div className="line"></div>
                </div>
                <div className="back-new-film">

                </div>
    </div>
  </div>
  )
}

export default Films;
