import React, {useState} from 'react';
import Datatable from './Datatable/Datatable';
import Pagination from '../common/Pagination/Pagination';
import s from './tableWithFilter.module.css'

const TableWithFilter = ({filterFields, columns, records, pageSize}) => {
    const [q, setQ] = useState('');
    const [serchColumns, setSerchColumns] = useState(['id']);
    const [currentPage, setCurrentPage] = useState([1]);

    const lastIndex = currentPage * pageSize;
    const firstIndex = lastIndex - pageSize;
    const currentPageTable = records.slice(firstIndex, lastIndex);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    function serch(rows) {
        return rows.filter((row) => 
        serchColumns.some((column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1)
        );
    }

    const columnsTable = records[0] && Object.keys(records[0])

    return (
    <div className={s.conеainer}>
        <div className={s.filter}>
            <input className={s.search} type="text" value={q} onChange={(e) => setQ(e.target.value)} ></input>
            {
                columnsTable && columnsTable.map(colmnTable => <label className={s.checkbox}>
                    <input  type="checkbox" checked={serchColumns.includes(colmnTable)}
                    onChange={(e) => {
                        const checked = serchColumns.includes(colmnTable)
                        setSerchColumns(prev => checked
                        ? prev.filter(sc => sc !== colmnTable)
                        : [...prev, colmnTable] 
                    )}}
                    />
                    {colmnTable}
                </label>)
            }
        </div>
        <Datatable
            className={s.dataTable}
            columns={columns}
            records={serch(currentPageTable)}
            pageSize={pageSize}
        />
        <Pagination
            className={s.paginatin}
            pageSize={pageSize}
            records={records}
            paginate={paginate}
            currentPage={currentPage}
        />
    </div>)
}
export default TableWithFilter;