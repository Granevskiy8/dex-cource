import './PlayersCardDetails.css'

function PlayersCardDetails() {
    return (
        <div className="players-card-details">
            <div className="players-card-details__title">
                <div className="players-card-details__title-navigation">
                    <p>Players / Alex Granevskiy</p>
                </div>
                <div className="players-card-details__title-actions">
                    <img src="assets/icons/create_rounded.svg" alt="Create" className="create-actions" />
                    <img src="assets/icons/delete_rounded.svg" className="delete-actions" alt="Delete"/>
                </div>
            </div>
            <div className="players-card-details__body">
                <div className="players-card-details__body-logo">
                    <img src="assets/img/photobig.png" alt="Photoplayer"/>
                </div>
                <div className="players-card-details__body-info">
                    <div className="player-name"><h1>Alex Granevskiy <span>#22</span></h1></div>
                    <div className="player-info1">
                        <div className="player-info1_position">
                            <h2>Position</h2>
                            <p>Forward</p>
                        </div>
                        <div className="player-info1_team">
                            <h2>Team</h2>
                            <p>Denver Nuggets</p>
                        </div>
                    </div>
                    <div className="player-info2">
                        <div className="player-info2_height">
                            <h2>Height</h2>
                            <p>206 cm</p>
                        </div>
                        <div className="player-info2_weight">
                            <h2>Weight</h2>
                            <p>95 kg</p>
                        </div>
                    </div>
                    <div className="player-info3">
                        <div className="player-info3_age">
                            <h2>Age</h2>
                            <p>27</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PlayersCardDetails;