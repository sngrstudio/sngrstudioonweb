import { FC, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import style from './hero.module.scss'

const HeroComp: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style.hero}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className={style.title}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default HeroComp
