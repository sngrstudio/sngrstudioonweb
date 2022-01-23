import style from '@styles/modules/card.module.scss'

const Card = ({ title, image="", excerpt, url }) => (
    <a className="card card-bordered" href={url}>
        {image ? (
        <figure>
            <img src={image} alt={title} />
        </figure>
        ) : null}
        <div className="card-body">
            <h1 className={[style.title, 'card-title font-extrabold'].join(' ')}>{title}</h1>
            <p className="line-clamp-4">{excerpt}</p>
        </div>
    </a>
)

export default Card