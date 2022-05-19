import { FC } from 'react'
import style from './hero.module.scss'

interface IShowcaseHero {
    title: string
    image: string
    headline: string
    url?: string
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
            <div className={style.hero}>
                <img src={image} alt={headline} />
                <div className={style.hero_title} style={{ backgroundColor: hexToRgba(color, 0.5) }}>
                    <h2>{title}</h2>
                </div>
            </div>
            <div className={style.headline} style={{ backgroundColor: hexToRgba(color) }}>
                <div className={style.headline_inner}>
                    <h3>{headline}</h3>
                    {url && <a className={style.a} href={url}>Lihat kisahnya</a>}
                </div>
            </div>
        </>
    )
}

export default ShowcaseHero