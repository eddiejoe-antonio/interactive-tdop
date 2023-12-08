import ScrollableTitle from "./ScrollableTitle";
import IntroCards from "./IntroCard";
import Navbar from "./Navbar";

const Test = () => {
    return ( 
    <>
        <ScrollableTitle 
        img={IntroCards.Test.img}
        altText={IntroCards.Test.altText}
        title={IntroCards.Test.title}
        />
      </>
     );
}
 
export default Test;