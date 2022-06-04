import { FC } from 'react'
import { footerMenu as menus } from '@components/shared/menu'
import logo from '@assets/logo-n.png?w=120'

const Footer:FC = () => {
    return (
        <footer className='footer bg-neutral text-neutral-content px-4 py-8'>
            <div className='items-center grid-flow-col'>
                <img src={logo} width={120} height={60} alt="logo-footer" />
            </div>
            <ul className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
                {menus.map(menu => (
                    <li key={menu.name}><a href={menu.url}>{menu.name}</a></li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer