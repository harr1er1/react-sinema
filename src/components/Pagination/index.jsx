import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss'

const Pagination = ({getFilms, onChangePage}) => {
  return (
    <ReactPaginate
    className={styles.root}
     breakLabel="..."
     previousLabel="<"
     nextLabel=">"
     onPageChange={(event) => onChangePage(event.selected + 1 )}
     pageRangeDisplayed={5}
     pageCount={Math.round(getFilms.length/6)}
     renderOnZeroPageCount={null}
   /> 
  )
}

export default  Pagination; 