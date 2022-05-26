import { FC, useState, useEffect } from 'react'
import menus from '@components/shared/menu'
import style from './header.module.scss'

const Header: FC = () => {
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <header
      className={`navbar fixed top-0 inset-x-0 z-10 ${
        !visible ? 'translate-y-[-64px]' : ''
      } transition-transform`}
    >
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-base-100" href="/">
          SNGR Studio
        </a>
      </div>
      <ul className="md:menu md:menu-horizontal hidden">
        {menus.map((menu) => (
          <li className="text-base-100" key={menu.name}>
            <a href={menu.url}>{menu.name}</a>
          </li>
        ))}
      </ul>
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          <span className={style.menu} />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content bg-base-100"
        >
          {menus.map((menu) => (
            <li className="text-neutral" key={menu.name}>
              <a href={menu.url}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
