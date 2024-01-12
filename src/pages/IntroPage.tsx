// IntroPage.js
import { Element as ScrollElement } from 'react-scroll';
import IntroOne from './content/IntroOne';
import IntroTwo from './content/IntroTwo';
import ScrollableTitle from '../components/ScrollableTitle';
import IntroCards from '../static/IntroCards';
import ScrollytellingWithFixedBackground from '@/components/ScrollHeader';

const IntroPage = ({ handlePageChange: _ }: { handlePageChange: Function }) => {
  const header = (
    <ScrollableTitle
      img={IntroCards.Header.img}
      altText={IntroCards.Header.altText}
      title={IntroCards.Header.title}
    />
  );
  const sections = [<IntroOne />, <IntroTwo />];

  return (
    <>
      <div className='app flex'>
        <div className='content flex-1'>
          {sections.map((section, index) => (
            <ScrollElement key={index} name={`section${index + 1}`}>
              {section}
            </ScrollElement>
          ))}
        </div>
      </div>
    </>
  );
};

export default IntroPage;
