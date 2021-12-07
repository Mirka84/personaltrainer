import React from 'react'; 
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from 'recharts';

export default function Charts(props){
    


    return (
        <div>
            <LineChart
                width={400}
                height={400}
                data={props.trainings}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
            <XAxis dataKey="activity" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="duration" stroke="#ff7300" yAxisId={0} />
            <Line type="monotone" dataKey="name" stroke="#387908" yAxisId={1} />
            </LineChart>
        </div>
    )
}