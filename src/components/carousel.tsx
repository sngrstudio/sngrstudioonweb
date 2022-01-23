import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel'
import slugify from 'slugify'
import getSnap from '@lib/snap'
import 'pure-react-carousel/dist/react-carousel.es.css'
import '@styles/icon.scss'

const Carousel = ({ sites }) => (
    <CarouselProvider className="relative" naturalSlideWidth={800} naturalSlideHeight={600} totalSlides={sites.length}>
        <Slider className="rounded-box">
            {sites.map((site, i) => (
                <Slide index={i} key={i}>
                    <a href={`/sites/${slugify(site.title, {lower: true})}`}>
                        <Image className="object-cover object-center" src={getSnap(site.url)} hasMasterSpinner alt={site.title} />
                    </a>
                </Slide>
            ))}
        </Slider>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <ButtonBack className="btn btn-circle"><span className="icon">navigate_before</span></ButtonBack>
            <ButtonNext className="btn btn-circle"><span className="icon">navigate_next</span></ButtonNext>
        </div>
    </CarouselProvider>
)

export default Carousel