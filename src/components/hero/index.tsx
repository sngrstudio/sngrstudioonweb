import { FC } from 'react'
import style from './hero.module.scss'

const content = {
  headline: 'Persembahan yang terbaik, dari teknologi web modern.',
  text: 'Kami mempersembahkan kepada anda produk layanan digital terbaik, dengan berfokus kepada kenyamanan costumer.',
}

const HeroComp: FC = () => {
  return (
    <div className={style.hero}>
      <div className={style.title}>
        <h2>{content.headline}</h2>
        <p>{content.text}</p>
        <div className={style.hero__contact}>
          <a href="#contact">Kontak kami</a>
        </div>
      </div>
    </div>
  )
}

export default HeroComp
