import Arrow from "./Arrow";
import ImageContainer from "./ImageContainer";

const HeroContent = () => {
    return ( 
    <>
    <div className="grid w-screen mx-auto gap-1 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center col-start-2 col-span-5">
            <p className="pb-2 uppercase text-xs tracking-widest">Texas Broadband Development Office</p>
            <h1 className="pb-5 sm:text-xl lg:text-6xl font-bold uppercase tracking-widest">The Texas Digital Opportunity Plan</h1>
            <p className="pb-10 w-[100%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad empor incididunt ut labore et dolore magna
            </p>
            <div className="">
                <button className="bg-[#111] shadow-lg border-solid border-2 border-black px-1 py-4 text-white uppercase italic text-xs font-normal">Geographic summary</button>
                <button className="bg-[#FFFDF6] shadow-lg border-solid border-2 border-black px-1 py-4 mx-4 text-[#111] uppercase italic text-xs">Data Deep-Dive</button>
            </div>
            <p className="py-[10%] w-[100%] text-center">
                Scroll to explore the Texas Digital Opportunity Plan
            </p>
            <div className="flex w-[80%] lg:w-[40%] mx-[50%]">
                <Arrow />
            </div>
        </div> 
        <div className="sm:block lg:flex lg:col-start-8 lg:col-span-5 sm:col-span-5">
            <ImageContainer />
        </div>
    </div>
    </>
    );
}
 
export default HeroContent;