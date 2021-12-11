import React, { useState } from 'react'; 
import './App.css';
import Customerlist from './components/Customerlist';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import Trainings from './components/Trainings'; 
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Calender from './components/Calender'; 
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Charts from './components/Charts'; 


function App() {

  const[value, setValue] = useState('one');

  const handleChange= (event, value) => {
    setValue(value);
  };

  

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           PERSONAL TRAINER
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab value="one" label= "Customers" />
        <PersonIcon fontSize="medium" />
        <Tab value="two" label="Trainings"/>
        <DirectionsRunIcon fontSize="medium" />
        <Tab value="three" label= "Calender" />
        <CalendarTodayIcon fontSize="medium" />
        <Tab value="four" label= "Charts" />
      </ Tabs>
        {value === 'one' && <div>{<Customerlist />}</div>}
        {value === 'two' && <div>{<Trainings />}</div>}
        {value === 'three' && <div>{<Calender />}</div>}
        {value === 'four' && <div>{<Charts />}</div>}
      </div>
    </div>
  );
}

export default App;
