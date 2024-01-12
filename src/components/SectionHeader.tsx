import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SectionHeader = ({ title, img }) => {
  const stripesRef = useRef(null);

  useEffect(() => {
    if (stripesRef.current) {
      const svg = d3.select(stripesRef.current);
      // Ensure that we have a specific width to animate to, which is the width of the parent container
      const parentWidth = stripesRef.current.parentElement.offsetWidth;

      // Set the dimensions of the bars
      svg
        .selectAll('rect')
        .data([0, 1]) // Data for two bars
        .enter()
        .append('rect')
        .attr('x', 0)
        .attr('y', (d, i) => i * 10) // Positioning each bar 5 pixels apart
        .attr('width', 0)
        .attr('height', 6)
        .attr('fill', (d, i) => (i === 0 ? '#BF0A30' : '#002868')) // Use Texas flag colors
        .transition()
        .duration(2000) // Duration of animation
        .ease(d3.easeLinear) // Ease function for smooth animation
        .attr('width', parentWidth); // Animate to the full width of the parent container
    }
  }, []);

  return (
    // Add flex wrapper around content and image
    <div className='bg-[#FFFDF6] md:grid md:grid-cols-12 w-full'>
      <div className='md:col-start-3 md:col-span-4 md:flex md:flex-col'>
        {/* Vision and Purpose title */}
        <div className='py-12'>
          <h1 className='text-4xl uppercase py-8'>{title}</h1>
          {/* TexasStripes component */}
          <div className='absolute md:w-[50vw] w-[90vw] z-10'>
            <svg ref={stripesRef} className='w-full h-10 absolute z-10'></svg>
          </div>
          {/* Text content */}
          <div className='pt-12 font-sans'>
            <p className='py-4 font-sans'>
              More and more each day, our lives depend on using the internet. Once a luxury, the
              internet has now become a necessity for access to health, education, employment, and
              many services.
            </p>
            <p className='py-4 font-sans'>
              Yet not all Texas residents experience the same digital opportunity. Some Texans
              thrive in the digital world, while others struggle just to find an internet
              connection.
            </p>
            <p className='py-4 font-sans'>
              In 2023, the Texas Broadband Development Office (BDO) brought together people and
              communities from across the state to ask about the barriers and challenges that Texans
              face when they try to get online and use the internet. They also asked about who is
              already working to support the digital needs of Texas communities, and how they’re
              doing it.
            </p>
            <p className='py-4 font-sans'>
              <strong>
                Based on what the BDO heard from you, they built a plan for a new state of digital
                opportunity in Texas, in which every Texan has access to:
              </strong>
              <br />
              <br />
            </p>
            <ul className='list-disc mx-10'>
              <li>high-quality, affordable broadband internet service</li>
              <li>high-quality, affordable internet-enabled devices;</li>
              <li>digital skills liaining;</li>
              <li>and cybersecurity protection.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Image container */}
      <div className='md:col-span-4 md:col-start-8 md:flex md:flex-col md:justify-center'>
        <div className='flex-grow'>
          <img className='w-full h-full object-cover' src={img} alt='' />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
