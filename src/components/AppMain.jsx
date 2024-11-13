import Card from '../components/card/Card.jsx'
import data from '../data/data.js'
export default function AppMain() {
const pageTitle = 'Ill mio blog'


    return (
        <main>
            <div className="container">
                <h2>{pageTitle}</h2>

                <section className="cards">
                    {data.map(post => <Card key={post.id} data={post} />)}
                </section>
            </div>
        </main>

    )
}