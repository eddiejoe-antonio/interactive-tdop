import ScrollytellingWithBackground from '@/components/ScrollHeader';
import SectionHeader from '@/components/SectionHeader';
import CardWithOffsetBackground from '@/components/CardOffset';

const steps = [
  <p>
    More and more each day, our lives depend on using the internet. Once a luxury, the internet has
    now become{' '}
    <strong>a necessity for access to health, education, employment, and many services.</strong>
  </p>,
  <div>
    <p>
      Yet <strong>not all Texas residents experience the same digital opportunity.</strong> Some
      Texans thrive in the digital world, while others struggle just to find an internet connection.
    </p>
  </div>,
  <div>
    <p>
      In 2023, the Texas Broadband Development Office (BDO) brought together people and communities
      from across the state to ask about the barriers and challenges that Texans face when they try
      to get online and use the internet.{' '}
      <strong>
        They also asked about who is already working to support the digital needs of Texas
        communities, and how they’re doing it.
      </strong>
    </p>
  </div>,
  <div>
    <p>
      <strong>Based on what the BDO heard from you,</strong> they built a plan for a new state of
      digital opportunity in Texas, in which every Texan has access to:
    </p>
    <ul className='list-disc my-4 mx-4'>
      <li>high-quality, affordable broadband internet service</li>
      <li>high-quality, affordable internet-enabled devices;</li>
      <li>digital skills training;</li>
      <li>and cybersecurity protection.</li>
    </ul>
  </div>,
  <div>
    <p>Scroll on to learn more about the Texas Digital Opportunity Plan!</p>
  </div>,
];

const IntroOne = () => {
  return (
    <div>
      <ScrollytellingWithBackground
        steps={steps}
        id='unique-id-1'
        backgroundImagePath='Capitol.jpg'
      />
      {/* <SectionHeader title='Vision and Purpose of Digital Opportunity' img='Vision.jpg' /> */}
      {/* <div className='bg-[#FFFDF6] w-screen h-full md:h-screen px-4 font-sans'>
        <div className=' grid md:grid-cols-12'>
          <div className='flex flex-col md:col-start-4 md:col-span-6 pt-[10vh]'>
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
              Based on what the BDO heard from you, they built a plan for a new state of digital
              opportunity in Texas, in which every Texan has access to:
              <br />
              <br />
            </p>
            <ul className='list-disc'>
              <li>high-quality, affordable broadband internet service</li>
              <li>high-quality, affordable internet-enabled devices;</li>
              <li>digital skills liaining;</li>
              <li>and cybersecurity protection.</li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default IntroOne;
