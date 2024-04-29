import { Link } from "react-router-dom"

export const CatalogItem = ({
    _id,
    title,
    genre,
    imageUrl
}) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} />
                <h6>{title}</h6>
                <h2>{genre}</h2>
                <Link to={`/catalog/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    )
}