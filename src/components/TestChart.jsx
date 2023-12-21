import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const SingleStackedBarChart = ({ width, height }) => {
  const ref = useRef();
  const [chartData, setChartData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
        const requestBody = [
            {
                "geoId": "48",
                "id": "6582102b903ab0943c07dbf8"
            }
        ];
        const res = await fetch("https://api.hra-dashtest.com/v3/reports/65820ff1903ab0943c07dbc6/output/charts", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });
        const data = await res.json();
        console.log(data);
        const value = data?.charts[0].dataView.data[0].households
        setChartData(value * 0.000005);
      };
    fetchData();
  }, []);
  console.log(chartData);

  useEffect(() => {
    if (!ref.current || chartData === null) return;

    // Clear the SVG to prevent duplication
    d3.select(ref.current).selectAll("*").remove();

    // Create SVG canvas
    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height);

    // Background bar (100%)
    svg.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', width)
      .attr('height', height)
      .attr('fill', '#ececec');

    // Foreground bar (chartData%)
    svg.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', width * (chartData / 100))
      .attr('height', height)
      .attr('fill', '#666');

    // Label
    svg.append('text')
      .attr('x', width * (chartData / 100) / 2)
      .attr('y', height / 2)
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .attr('font-weight', 'bold')
      .attr('font', 'sans')
      .text(`${chartData}%`);

  }, [chartData, width, height]);

  return <svg ref={ref}></svg>;
};

export default SingleStackedBarChart;
