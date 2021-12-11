import React, {useState, useEffect} from 'react'; 
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import minutesToHours from 'date-fns/minutesToHours'; 

const locales={
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})


export default function Calender() {

    const [trainings, setTrainings]=useState([]);

    useEffect(()=> fetchData(), []);

    const fetchData = ()=> {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
    }

     
    const events = trainings.map((events) => {
        return {
            title: events.activity, 
            duration: minutesToHours(events.duration),
            start: format(new Date(events.date), 'MM/dd/yyyy HH:mm'),
            end: format(new Date(events.date), 'MM/dd/yyyy HH:mm')
        }  
    })

return (
    <div>
        <Calendar localizer={localizer} events={events}  
        startAccessor="start" endAccessor="end" style={{height: 500, margin: "50px"}}/>
    </div>
)
}