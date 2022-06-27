import { FC } from 'react'
import logo from '@assets/logo-c.png?w=150'
import style from './header.module.scss'

interface IHeaderComp {
  menu: any
}

const HeaderComp: FC<IHeaderComp> = ({ menu }) => {
  return (
    <div className="fixed top-0 inset-x-0 navbar">
      <div className="flex-none md:hidden">
        <label htmlFor="main-drawer" className='btn btn-square btn-ghost mr-1'>
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
