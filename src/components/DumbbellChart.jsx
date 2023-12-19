import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Customized } from 'recharts';

const data = [
    { name: "Item A", startValue: 3000, endValue: 2400 },
    { name: "Item B", startValue: 3000, endValue: 1398 },
    { name: "Item C", startValue: 3000, endValue: 800 },
    { name: "Item D", startValue: 3000, endValue: 1200 },
    { name: "Item E", startValue: 3000, endValue: 2800 },
    { name: "Item F", startValue: 3000, endValue: 300 },
    // ... more data ...
];


const CustomScatter = (props) => {
    const { x, y, payload } = props;

    // Determine the positions for start and end values
    const startY = payload.startValue; // y is the vertical position provided by Recharts
    console.log(startY);
    const endY = payload.endValue; // Additional prop for the end value position
    // console.log(endY);

    return (
        <>
            <line x1={x} y1={endY/25} x2={x} y2={startY/25} stroke="#111" strokeWidth={2} />
            <circle cx={x} cy={startY/25} r={15} fill="#B9B9B9" />
            <circle cx={x} cy={endY/25} r={15} fill="#002768" />
        </>
    );
};


const DumbbellChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <ScatterChart
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                {/* <CartesianGrid /> */}
                <XAxis type="category" dataKey="name" hide />
                <YAxis type="number" dataKey="startValue" hide/>
                <Tooltip />
                <Scatter data={data} shape={<CustomScatter />} />
            </ScatterChart>
        </ResponsiveContainer>
    );
};

export default DumbbellChart;
