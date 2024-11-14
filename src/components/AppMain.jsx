import Card from '../components/card/Card.jsx'
import data from '../data/data.js'
export default function AppMain() {
const pageTitle = 'Ill mio blog'
const isTrue = data.filter(post => post.published === true)

    return (
        <main>
            <div className="container">
    
                        {isTrue.map(post => <Card key={post.id} data={post} />)}
            </div>
               
        </main>

        

    )
}