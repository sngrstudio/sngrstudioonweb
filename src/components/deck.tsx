import Card from './card'

const Deck = ({ data }) => (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map(item => (
            <Card title={item.title} excerpt={item.excerpt} image={item.image} url={`/blog/${item.url}`} key={item.url} />
        ))}
    </section>
)

export default Deck