import TexasStripes from '@/components/TexasStripes';
import 'react-dropdown/style.css';

const NeedsOne = () => {
  return (
    <div className='w-full h-full bg-[#FFFDF6] px-4 font-sans'>
      <div className='grid md:grid-cols-12'>
        <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center py-[10vh]'>
          <TexasStripes />
          <p className='py-12 font-sans'>
            The plan assesses the current baseline of digital opportunity conditions statewide. The
            data demonstrates that not all needs are equal across populations and geographies, and
            therefore the plan requires approaches that are tailored to the particular needs of each
            community.
            <br />
            <br />
            To address these challenges, the BDO has created{' '}
            <strong>five goals with measurable datapoints</strong> and implementation strategies.
            <br />
            <br />
            Each goal identifies an area of concern for Texans in the realm of digital opportunity,
            and presents each measurable datapoint as a “key performance indicator” or “KPI” capable
            of demonstrating growth in the coming years.
          </p>
          <p>
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
            Scroll on to learn more about the BDO’s five goals and the key performance indicators
            that will ensure that Texas expands its reputation as a state of digital opportunity! 
          </p>
        </div>
      </div>
    </div>
  );
};

export default NeedsOne;
