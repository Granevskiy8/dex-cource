import './TeamsCardDetails.css'

function TeamsCardDetails() {
    return (
        <div className="team-card-details">
            <div className="team-card-details_title">
                <div className="team-card-details_title-navigation">
                    <p>Teams / Denver Nuggets</p>
                </div>
                <div className="team-card-details_title-actions">
                    <img src="assets/icons/create_rounded.svg" alt="Create" className="create-actions" />
                    <img src="assets/icons/delete_rounded.svg" className="delete-actions" alt="Delete"/>
                </div>
            </div>
            <div className="team-card-details_body">
                <div className="team-card-details_body-logo">
                    <img src="assets/img/POR_1.png" alt="Logo"/>
                </div>
                <div className="team-card-details_body-info">
                    <div className="team-name"><h1>Denver Nuggets</h1></div>
                    <div className="team-info1">
                        <div className="team-info1_year">
                            <h2>Year of foundatios</h2>
                            <p>1976</p>
                        </div>
                        <div className="team-info1_division">
                            <h2>Division</h2>
                            <p>Northwestern</p>
                        </div>
                    </div>
                    <div className="team-info2">
                        <div className="team-info2_conference">
                            <h2>Conference</h2>
                            <p>Western</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TeamsCardDetails;