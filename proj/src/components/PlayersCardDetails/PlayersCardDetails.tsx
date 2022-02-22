import styled from 'styled-components';

const PlayersCardDetailsWrapper = styled.div`
    display: flex;
    max-width: 1140px;
    height: 473px;
    background: linear-gradient(276.45deg, #393939 0%, #707070 100.28%);
    border-radius: 10px 10px 10px 10px;
    flex-direction: column;
`;
const Title = styled.div`
    height: 69px;
    width: 100%;
    border: 0.5px solid #9C9C9C;
    border-radius: 10px 10px 0px 0px;
    background: #FFFFFF;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    p {
        padding-left: 32px;
        font-size: 14px;
        line-height: 24px;
        font-weight: 500;
        color: #E4163A;
    }
`;
const Change = styled.img`padding-right: 15px;`;
const Delete = styled.img`padding-right: 32px;`;
const Body = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    p {
        text-align: left;
        color: white;
        font-size: 18px;
        margin: 0;
    }
    h2 {
        text-align: left;
        color: white;
        font-size: 32px;
        margin: 0;
    }
    h1 {
        text-align: left;
        color: white;
        font-size: 36px;
        margin: 0;
    }
`;
const Logo = styled.div`
    width: 50%;
    img {
        height: 90.5%;
    }
`;
const PlayerInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-top: 65px; 
    span {
        color: #FF5761;
    }
`;
const Row = styled.div`
    display: flex;
    padding-top: 20px;
`;
const Col = styled.div`width: 50%`;


function PlayersCardDetails() {
    return (
        <PlayersCardDetailsWrapper>
            <Title>
                <div>
                    <p>Players / Alex Granevskiy</p>
                </div>
                <div>
                    <Change src="/assets/icons/create_rounded.svg" alt="Change" />
                    <Delete src="/assets/icons/delete_rounded.svg" alt="Delete"/>
                </div>
            </Title>
            <Body>
                <Logo>
                    <img src="/assets/img/photobig.png" alt="Photoplayer"/>
                </Logo>
                <PlayerInfo>
                    <div><h1>Alex Granevskiy <span>#22</span></h1></div>
                    <Row>
                        <Col>
                            <h2>Position</h2>
                            <p>Forward</p>
                        </Col>
                        <Col>
                            <h2>Team</h2>
                            <p>Denver Nuggets</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Height</h2>
                            <p>206 cm</p>
                        </Col>
                        <Col>
                            <h2>Weight</h2>
                            <p>95 kg</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Age</h2>
                            <p>27</p>
                        </Col>
                    </Row>
                </PlayerInfo>
            </Body>
        </PlayersCardDetailsWrapper>
    )
};

export default PlayersCardDetails;