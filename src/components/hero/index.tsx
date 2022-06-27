import { FC, PropsWithChildren } from 'react'
import style from './hero.module.scss'

const HeroComp: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style.hero}>
      <div className={style.title}>{children}</div>
    </div>
  )
}

export default HeroComp
