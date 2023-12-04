import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import one from '../assets/1.png'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'

const Caro = () => {
    return ( 
        <Carousel emulateTouch={true}>
        <div>
            <img src={one} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={two} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={three} />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
     );
}
 
export default Caro;