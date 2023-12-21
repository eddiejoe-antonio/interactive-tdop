import React, {useState, useEffect} from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const CustomScatter = (props) => {
    const { x, y, payload } = props;

    // Determine the positions for start and end values
    const startY = payload.startValue;
    const endY = payload.endValue;
    const labelY = Math.min(endY, startY) / 15 - 30 // Adjust label position

    return (
        <>
            <line x1={x} y1={endY / 15} x2={x} y2={startY / 15} stroke="#111" strokeWidth={2} />
            <circle cx={x} cy={startY / 15} r={20} fill="#B9B9B9" />
            <circle cx={x} cy={endY / 15} r={20} fill="#002768" />
            <text x={x} y={endY / 15} dy={0} textAnchor="middle" fontSize={12} fill="#FFF">
                {endY}
            </text>
            <text x={x} y={labelY} textAnchor="middle" fontSize={15} fill="#000">
                {payload.name}
            </text>
        </>
    );
};


const DumbbellChart = ({data}) => {
    // const [data, setData] = useState();


    // useEffect(() => {
    //   const fetchDatas = async () => {
    //     const requestBody = [
    //         {
    //             "geoId": "48",
    //             "id": "654d5449886c8eda0686e97c"
    //         }
    //     ]

    //     const res = await fetch("https://api.hra-dashtest.com/v3/reports/6509fa55a9a3fc8b698e0cba/output/charts", {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(requestBody) // Add the body here
    //       })
    //     const data = await res.json();
    //     console.log(data);
    //     // console.log(data.charts[0].dataView.data[0]);
    //     setData(data?.charts[0].dataView.data);
    //   };
    //   fetchDatas();
    // }, []);
    

    return (
        <ResponsiveContainer width="100%" height={600} className="font-sans">
            <ScatterChart
                margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
            >
                {/* <CartesianGrid /> */}
                <XAxis type="category" dataKey="name" hide />
                <YAxis type="number" dataKey="endValue" hide/>
                <Tooltip cursor={false}/>
                <Scatter data={data} shape={<CustomScatter />} />
            </ScatterChart>
        </ResponsiveContainer>
    );
};

export default DumbbellChart;
