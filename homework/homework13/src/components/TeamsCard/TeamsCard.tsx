import './TeamsCard.css'

function TeamsCard() {
    return (
        <div className="teams-card">
            <div className="teams-card__logo">
                <img src="assets/img/POR_2.png" alt="Logo"/>
            </div>
            <div className="teams-card__info">
                <h2>Portland trail blazers</h2>
                <p>Year of foundation: 1970</p>
            </div>
        </div>
    )
};

export default TeamsCard;