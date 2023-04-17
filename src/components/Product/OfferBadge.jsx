function OfferBadge({ status, offer }) {
    if (status) return (
        <div className="offer-badge">
            {offer}%
            OFF
        </div>
    )
}

export default OfferBadge