import Button from '../Button/Button'
export default function Card({ data }) {
    return (


        
        <div className="card">
            <img src={data.image} alt="card-blog" />
            <div className="details">
                <h3>{data.title}</h3>
                <p>{data.content}</p>
                <Button />
            </div>

        </div>
        
        

    )
}