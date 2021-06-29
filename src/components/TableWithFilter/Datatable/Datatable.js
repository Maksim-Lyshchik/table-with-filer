import React from 'react';
import s from './datatable.module.css';

export default function Datatable({columns, records, pageSize}) {
    let data = records[0] && Object.keys(records[0]);
    return(
        <table className={s.table} cellPadding={10} cellSpacing={10}>
            <thead className={s.thead}>
                <tr>{columns[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
            </thead>
            <tbody className={s.body}>
                {records[0] && records.map((row) => <tr className={s.tr}>
                    {
                        data.map((d) => <td className={s.td}>{row[d]}</td>)
                    }
                </tr>)}
            </tbody>
        </table>
        )
}