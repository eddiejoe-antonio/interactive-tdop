import { Element as ScrollElement } from 'react-scroll';
import '@mantine/core/styles.css';
import NeedsOne from './content/NeedsOne';
import NeedsCards from '../static/NeedsCards';
import ScrollableTitle from '../components/ScrollableTitle';
// import GoalsSection from '../components/GoalsSection';
import NeedsTwo from './content/NeedsTwo';

const NeedsAndAssetsPage = () => {
  const Header = () => (
    <ScrollableTitle
      img={NeedsCards.Header.img}
      altText={NeedsCards.Header.altText}
      title={NeedsCards.Header.title}
    />
  );

  const sections = [<NeedsOne />, <NeedsTwo />];

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

export default NeedsAndAssetsPage;
