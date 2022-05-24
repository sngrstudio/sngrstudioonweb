import { FC } from "react";
import getImageUrl from '@lib/image'

interface IGrid {
    items: any
}

interface IGridItem {
    image: string
    title: string
    url?: string
}

const Grid:FC<IGrid> = ({ items }) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map(item => <GridItem image={item.image} title={item.title} url={item.url} />)}
        </section>
    )
}

const GridItem:FC<IGridItem> = ({ image, title, url }) => {
    return (
        <div className="flex flex-col gap-4">
            <img className="w-full h-auto aspect-[16/10] object-cover object-center" src={getImageUrl(image, ['w_800', 'h_500', 'q_auto'])} alt={title} width={800} height={450} loading="lazy" decoding="async" />
            <a href={url && url}>
                <h3 className="font-bold text-2xl">{title}</h3>
            </a>
        </div>
    )
}

export default Grid