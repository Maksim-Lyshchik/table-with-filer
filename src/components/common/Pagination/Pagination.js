import React from 'react';
import s from './pagination.module.css';
import cn from 'classnames';

const Pagination = ({pageSize, records, paginate, currentPage}) => {
const pageNumbers = [];

for(let i = 1; i <= Math.ceil(records.length / pageSize); i++){
    pageNumbers.push(i)
}
    return (
    <div>
        <ul className={s.pagination}>
            {
                pageNumbers.map(number => (
                    <li className={cn({[s.selectedPage]: currentPage === number}, s.pageNumber)}
                        key={number} onClick={() => paginate(number)} >
                            <a className={s.number} href='#'>{number}</a>
                    </li>
                ))
            }
        </ul>
    </div>)

}
export default Pagination;