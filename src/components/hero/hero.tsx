import { FC } from 'react'
import getImageUrl from '@lib/image'
import hexToRgba from '@lib/hextorgba'
import style from './hero.module.scss'

interface IShowcaseHero {
  title: string
  image: string
  headline: string
  url?: string
  color?: string[]
  imageLazy?: boolean
}

const ShowcaseHero: FC<IShowcaseHero> = ({
  title,
  image,
  headline,
  color,
  url,
  imageLazy = true,
}) => {
  return (
    <>
      <div className={style.hero}>
        <img
          src={getImageUrl(image)}
          alt={headline}
          loading={imageLazy ? 'lazy' : 'eager'}
          decoding="async"
        />
        <div
          className={style.hero_title}
          style={{ backgroundColor: hexToRgba(color[1], 0.7) }}
        >
          <h2>{title}</h2>
        </div>
      </div>
      <div
        className={style.headline}
        style={{ backgroundColor: hexToRgba(color[0]) }}
      >
        <div className={style.headline_inner}>
          <h3>{headline}</h3>
          {url && (
            <a className={style.a} href={url}>
              Lihat kisahnya
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default ShowcaseHero
