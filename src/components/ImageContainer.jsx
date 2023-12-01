import hero from '../assets/hero.jpg'

const ImageContainer = () => {
    return ( 
        <div className='object-fill'>
            <img src={hero} alt="Hero" />
        </div>
     );
}
 
export default ImageContainer;