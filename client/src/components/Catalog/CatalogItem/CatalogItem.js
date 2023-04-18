export const CatalogItem = ({
    name,
    category,
    imageUrl,
    _id
}) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} />
                <h6>{name}</h6>
                <h2>{category}</h2>
                <a href={`/catalog/${_id}`} className="details-button">Details</a>
            </div>
        </div>
    )
}

