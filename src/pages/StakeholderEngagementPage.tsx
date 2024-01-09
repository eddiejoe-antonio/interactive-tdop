// App.js
import { Element as ScrollElement } from 'react-scroll';
import '@mantine/core/styles.css';
import StakeholderTwo from './content/StakeholderTwo';
import ScrollableTitle from '../components/ScrollableTitle';
import StakeholderCards from '../static/StakeholderCards';
import StakeholderOne from './content/StakeholderOne';

const StakeholderEngagementPage = () => {
  const header = (
    <ScrollableTitle img={StakeholderCards.Header.img} title={StakeholderCards.Header.title} />
  );
  const sections = [header, <StakeholderOne />, <StakeholderTwo />];
  // const [activeSection, setActiveSection] = useState(0);

  // const handleSectionClick = (index) => {
  //   setActiveSection(index);
  //   scroll.scrollTo(`section${index + 1}`, { smooth: true, duration: 500 });
  // };

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

export default StakeholderEngagementPage;
