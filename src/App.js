import React from 'react';
import './App.css';
import TableWithFilter from './components/TableWithFilter/TableWithFilter'
import store from './store/store';



function App(props) {
    props={...store}
    return (
        <div className="App">
            <TableWithFilter 
                filterFields={props.filterFields}
                columns={props.columns}
                records={props.records}
                pageSize={props.pageSize}
            />
        </div>
    );
}

export default App;