import React, {useState, useEffect} from 'react'; 
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from 'recharts';
import format from 'date-fns/format'; 

export default function Charts(){

    const [trainings, setTrainings]=useState([])

    useEffect(()=> fetchData(), []);

    const fetchData = ()=> {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
    }

     
    const events = trainings.map((events) => {
        return {
            title: events.activity, 
            duration: events.duration,
            name: events.customer.firstname,
            date: format(new Date(events.date), 'MM/dd/yyyy HH:mm')
        }  
    })
    

    return (
        <div>
            <LineChart
                width={600}
                height={600}
                data={events}
                margin={{ top: 5, right: 50, left: 50, bottom: 5 }}
            >
            <XAxis dataKey="title" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="duration" stroke="#ff7300" yAxisId={0} />
            <Line type="monotone" dataKey="name" stroke="#387908" yAxisId={1} />
            <Line type="monotone" dataKey="date" stroke="#387908" yAxisId={2} />
            </LineChart>
        </div>
    )
}