import React, { useState, useEffect } from 'react'; 
import{ AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import'ag-grid-community/dist/styles/ag-theme-material.css';
import Button from '@mui/material/Button';
import { format, compareAsc } from 'date-fns'
 

export default function Trainings(){

    const [trainings, setTrainings]=useState([]); 

    useEffect(()=> fetchData(), []); 

    const fetchData = ()=> {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
    }



    const columns = [
        { headerName: 'Date', field: 'date', filter: true, sortable: true },
        { headerName: 'Duration', field: 'duration', filter: true, sortable: true },
        { headerName: 'Activity', field: 'activity', filter: true, sortable: true },
        { headerName: 'Firstname', field: 'customer.firstname', filter: true, sortable: true },
        { headerName: 'Lastname', field: 'customer.lastname', filter: true, sortable: true },
    ]

    return(
        <div className="ag-theme-material"style={{height:'700px',width:'70%',margin:'auto'}}>
            <AgGridReact
                rowSelection="single"
                columnDefs={columns}
                rowData={trainings}
                >
            </AgGridReact>
        </div>

    )
}