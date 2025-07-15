import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Carousel=()=>{
    const carImagesArr = [
        {
            img:'https://images7.alphacoders.com/112/1120950.jpg',
            caption:'Frozen',
            description:'FROZEN is an original story, loosely based on Hans Christian Andersen`s The Snow Queen.'
        },
        {
            img:'https://images4.alphacoders.com/111/1116070.jpg',
            caption:'Antman and the Wasp',
            description:'Ant-Man and the Wasp is a 2018 American superhero film based on Marvel Comics featuring the characters Scott Lang / Ant-Man and Hope Pym / Wasp.'
        },
        {
            img:'https://4kwallpapers.com/images/walls/thumbs_3t/22358.jpg',
            caption:'The Final Destination',
            description:'The Final Destination series centers around a group of people who escape a horrific accident after having a premonition, only to be targeted by death, which systematically claims their lives in elaborate and often gruesome ways. '
        }
    ]

    // const [curSlide, setCurSlide]=React.useState(0);
    const keyRef = React.useRef(null);

    React.useEffect(()=>{
        const handleKeyControl = (press) => {
         switch (press.key) {
      case 'ArrowRight':
        keyRef.current.goNext();
        break;
      case 'ArrowLeft':
        keyRef.current.goBack();
        break;
      default:
        break;
        };
    };

        window.addEventListener('keydown',handleKeyControl);
        return ()=>window.removeEventListener('keydown',handleKeyControl)
    }, [])

    return (
        <>
         <div className="slide-container" aria-label="Accesible Carousel Images" style={{ width: '80%', margin: '0 auto' }}>
          <Slide easing='ease' arrows={true} autoplay={true} duration={4000} indicators={true} infinite={true}  pauseOnHover={true} ref={keyRef}>
            {carImagesArr.map((slideImage, index)=> (
            //   <div className="each-slide" key={index}>
                    <div className="each-slide"
                        tabIndex="0"
                        key={index}
                        aria-label={`On page Accessible Carousel - Slide ${index + 1}: ${slideImage.caption} - This slide is about ${slideImage.description}`} style={{
                            // 'backgroundImage': `url(${slideImage.url})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '700px',
                            position:'relative'
                        }}>
                        <img
                            src={slideImage.img}
                            alt={slideImage.caption}
                            style={{ width: '100%', height: '700px', borderRadius: '15px', objectFit: 'cover' }}

                        />
                        {/* <p style={{ textAlign: 'center' }}>{slideImage.caption}</p>
                         */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                width: '100%',
                                background: 'linear-gradient(180deg,rgba(0,0,0,0) 0%, rgba(0, 0, 0, 1) 100%)',
                                color: '#fff',
                                padding: '1rem',
                                borderBottomLeftRadius: '15px',
                                borderBottomRightRadius: '15px'
                            }}
                        >
                            <h2 style={{ margin: 0 }}>{slideImage.caption}</h2>
                            <p style={{ margin: '0.5rem 0 0' }}>{slideImage.description}</p>
                        </div>
                </div>
            //   </div>
            ))}
          </Slide>
        </div>
        </>
    );
}


export default Carousel