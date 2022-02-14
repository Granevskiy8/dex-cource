import './PlayersCard.css'

function PlayersCard() {
    return (
        <div className="players-card">
            <div className="players-card__photo">
                <img src="assets/img/photo.png" alt="Player"/>
            </div>
            <div className="players-card__info">
                <h2>Jaylen Adams <span>#10</span></h2>
                <p>Portland trail blazers</p>
            </div>
        </div>
    )
};

export default PlayersCard;