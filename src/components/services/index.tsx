import { FC } from 'react'
import style from './services.module.scss'

const menu = [
  {
    title: 'Pengembangan Website',
    description:
      'Website ringan yang mudah diakses dari desktop maupun mobile.',
    icon: '',
  },
  {
    title: 'Pengembangan Aplikasi Web',
    description: 'Aplikasi berbasis web untuk apapun kebutuhan Anda.',
    icon: '',
  },
  {
    title: 'Pengembangan API',
    description:
      'Pengembangan API dikostumisasi sesuai dengan kebutuhan aplikasi Anda.',
    icon: '',
  },
  {
    title: 'Manajemen Hosting',
    description:
      'Hosting aplikasi anda bersama kami dan anda tidak perlu memikirkan hal lain selain bisnis Anda.',
    icon: '',
  },
]

const ServiceComp: FC = () => {
  return (
    <section className={style.service__section}>
      <article className="prose prose-lg md:prose-xl max-w-none">
        <h2 className={`${style.service__title} !mb-4`}>Layanan Kami</h2>
        <p>
          Kami menyediakan aplikasi web dengan kualitas terbaik, dibangun dengan
          teknologi web terkini.
        </p>
        <div className={`not-prose ${style.service__gallery}`}>
          {menu.map((item) => (
            <div className={`card border-2 border-primary`}>
              <div className="card-body p-2">
                <h3 className="card-title">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="not-prose flex flex-row justify-center my-8">
          <a className="btn btn-accent" href="/layanan">
            Ketahui lebih lanjut
          </a>
        </div>
      </article>
    </section>
  )
}

export default ServiceComp
