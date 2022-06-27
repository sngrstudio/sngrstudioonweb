import { FC, useState, useEffect } from 'react'
import logo from '@assets/logo-c.png?w=150'
import style from './header.module.scss'

interface IHeaderComp {
  menu: any
}

const HeaderComp: FC<IHeaderComp> = ({ menu }) => {
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div
      className={`${style.nav} ${
        !visible ? 'translate-y-[-64px]' : ''
      } navbar transition-transform`}
    >
      <div className="flex-none md:hidden">
        <label htmlFor="main-drawer" className="btn btn-square btn-ghost mr-1">
          <span className={style.icon}>menu</span>
        </label>
      </div>
      <div className="flex-1">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="flex-none hidden md:inline-flex">
        <ul className="menu menu-horizontal">
          {menu.map((item) => (
            <li key={item.id}>
              <a href={`/${item.id}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HeaderComp
