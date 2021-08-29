import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Image = ({ src, alt, height, width, }) => (
    <div>
        <LazyLoadImage src={src} alt={alt} width={width} height={height} effect="blur" wrapperClassName="rendered_img" loading="lazy" />
    </div>
)

export default Image