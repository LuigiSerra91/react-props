
export default function Card({ data }) {
    return (


        
        <div className="card">
            <img src={data.image} alt="card-blog" />
            <div className="details">
                <h3>{data.title}</h3>
                <p>{data.content}</p>
                <button className="btn">Leggi di più</button>
            </div>

        </div>
        
        

    )
}