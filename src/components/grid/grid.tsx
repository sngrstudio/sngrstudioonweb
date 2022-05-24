import { FC } from "react";
import getImageUrl from '@lib/image'

interface IGrid {
    items: any
}

interface IGridItem {
    image: string
    title: string
}

const Grid:FC<IGrid> = ({ items }) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-screen-lg mx-auto px-8">
            {items.map(item => <GridItem image={item.image} title={item.title} />)}
        </section>
    )
}

const GridItem:FC<IGridItem> = ({ image, title }) => {
    return (
        <div>
            <img src={getImageUrl(image)} alt={title} width={800} height={450} loading="lazy" decoding="async" />
        </div>
    )
}

export default Grid