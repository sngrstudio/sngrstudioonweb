import { FC } from 'react'

interface IShowcaseHero {
    title: string
    image: string
    headline: string
    url: string
    color?: string
}

const hexToRgba = (hex, alpha?) => {
    const r = parseInt(hex.slice(1,3), 16)
    const g = parseInt(hex.slice(3,5), 16)
    const b = parseInt(hex.slice(5,7), 16)

    if (alpha) return `rgba(${r}, ${g}, ${b}, ${alpha})`
    else return `rgb(${r}, ${g}, ${b})`
}

const ShowcaseHero:FC<IShowcaseHero> = ({ title, image, headline, color, url }) => {
    return (
        <>
            <div className="h-screen relative">
                <img className="h-full w-full object-cover object-center" src={image} alt={headline} />
                <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ backgroundColor: hexToRgba(color, 0.5) }}>
                    <h2 className='text-white text-6xl lg:text-8xl text-center font-extrabold max-w-lg'>{title}</h2>
                </div>
            </div>
            <div className="h-auto lg:h-[50vh] grid place-items-center p-12" style={{ backgroundColor: hexToRgba(color) }}>
                <div className="flex flex-col items-start justify-center gap-8 max-w-screen-md">
                    <h3 className="text-white text-2xl lg:text-5xl">{headline}</h3>
                    <a className='text-xl lg:text-2xl text-white link link-hover' href={url}>Lihat kisahnya</a>
                </div>
            </div>
        </>
    )
}

export default ShowcaseHero