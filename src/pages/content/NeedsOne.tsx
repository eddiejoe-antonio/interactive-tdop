import TexasStripes from '@/components/TexasStripes';
import 'react-dropdown/style.css';

const NeedsOne = () => {
  return (
    <div className='w-full h-full bg-[#FFFDF6] px-4 font-sans'>
      <div className='grid md:grid-cols-12'>
        <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center py-[10vh]'>
          <TexasStripes />
          <p className='py-12 font-sans'>
            The Texas Digital Opportunity Plan explores the current state of digital opportunity
            across Texas. The data shows that different places and communities have different needs
            in terms of access to internet, devices and digital skills. So, the plan calls for
            approaches designed to meet the particular needs of each community.
            <br />
            <br />
            The BDO made five goals to tackle these challenges. The goals are based on data that
            shows where we are today (providing a starting point or “baseline”). The plan explains
            strategies, or ways to make these goals happen.
          </p>
          <p className='py-4 font-sans'>
            Each goal focuses on a problem Texans have with digital opportunity. The BDO uses
            something called a "key performance indicator" or "KPI" to show how digital opportunity
            will get better over time. A KPI is a task that the BDO will do to meet the goals of the
            plan.
          </p>
          <p className='py-4 font-sans'>
            For example, one of the BDO’s goals is to :
            <br />
            <br />
            <strong>
              Expand access to reliable, affordable broadband internet service at home for all
              Texans 
            </strong>
            <br />
            <br />
            To ensure achievement of this goal, the BDO is committing to the key performance
            indicator of:
            <br />
            <br />
            <i>
              Decreasing the percentage of Texans without reliable broadband available in their
              homes from 32% to 20% by 2035.
            </i>
            <br />
            <br />
            Scroll on to learn more about the BDO’s five goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NeedsOne;
