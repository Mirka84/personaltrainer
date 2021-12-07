import React, {useState, useEffect} from 'react'; 
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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


export default function Calender(props) {

    const [training, setTraining]=useState({activity: '', start: '', end: ''}); 
    const [events, setEvents]=useState([]); 

    useEffect(()=> saveEvents(), []);
     

    const saveEvents = () => {
        setEvents([...events, { activity: props.activity, start: props.start, end: props.end}]);  
    }

return (
    <div>
        <Calendar localizer={localizer} events={events}  
        startAccessor="start" endAccessor="end" style={{height: 500, margin: "50px"}}/>
    </div>
)
}