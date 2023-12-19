import React from 'react';
import { BarChart, Bar, XAxis, YAxis, 
    CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
 
const TestChart = () => {
 
    // Sample data
    const data = [
        { name: 'A', x: 68, y: 32}
    ];
 
    return (
       <ResponsiveContainer width={400} height={300}>
       <BarChart  data={data} >
            <Tooltip />
            <Legend />
            <XAxis hid/>
            <YAxis />
            <Bar dataKey="x" stackId="a" fill="#8884d8" />
            <Bar dataKey="y" stackId="a" fill="#82ca9d" />
        </BarChart>
        </ResponsiveContainer>
    );
}
 
export default TestChart;