import React, { useState, useEffect } from 'react'; 
import{ AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import'ag-grid-community/dist/styles/ag-theme-material.css';
import Button from '@mui/material/Button';
import Addcustomer from './Addcustomer'; 
import Editcustomer from './Editcustomer';

export default function Customerlist(){

    const [customers, setCustomers]=useState([]); 

    useEffect(()=> fetchData(), []); 

    const fetchData = ()=> {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    const deleteCustomer = (link) => {
        console.log(link); 
        if(window.confirm('Are you sure you want to delete the customer?')){ 
            fetch(link, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }    
    }

    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const editCustomer = (customer, link) => {

        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        } )
        .then(res => fetchData())
        .catch(err => console.error(err))
    }


    const columns = [
        { headerName: 'Firstname', field: 'firstname', filter: true, sortable: true,
        filterParams: {
            applyMiniFilterWhileTyping: true}},
        { headerName: 'Lastname', field: 'lastname', filter: true, sortable: true,
        filterParams: {
          applyMiniFilterWhileTyping: true,
        } },
        { headerName: 'Street address', field: 'streetaddress', filter: true, sortable: true,
        filterParams: {
          applyMiniFilterWhileTyping: true,
        } },
        { headerName: 'Post Code', field: 'postcode', filter: true, sortable: true },
        { headerName: 'City', field: 'city', filter: true, sortable: true },
        { headerName: 'Email', field: 'email', filter: true, sortable: true }, 
        { headerName: 'Phone', field: 'phone', filter: true, sortable: true },
        {headerName: 'Edit', field: 'links.0.href', cellRendererFramework: function(params) {
            return <Editcustomer editCustomer={editCustomer} customer={params.data} link={params.value} /> }},            
        { headerName: 'Delete', field: 'links.0.href', 
        cellRendererFramework: (params) =><div><Button color="error" size="small" onClick={()=>deleteCustomer(params.value)}>Delete</Button></div> },

    ]

    return(
        <div className="ag-theme-material"style={{height:'700px',width:'70%',margin:'auto'}}>
            <Addcustomer saveCustomer={saveCustomer} />
            <AgGridReact
                rowSelection="single"
                columnDefs={columns}
                rowData={customers}
                agSetColumnFilter={true}
                >
            </AgGridReact>
        </div>

    )
}