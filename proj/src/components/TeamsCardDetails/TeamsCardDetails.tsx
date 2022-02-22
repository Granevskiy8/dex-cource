import styled from 'styled-components';

const TeamsCardDetailsWrapper = styled.div`
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
        padding-top: 8px;
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
    padding-top: 97px;
    width: 40%;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding-top: 65px;
`;
const Row = styled.div`
    display: flex;
    padding-top: 40px;
`;
const Col = styled.div`width: 50%`;


function TeamsCardDetails() {
    return (
        <TeamsCardDetailsWrapper>
            <Title>
                <div>
                    <p>Teams / Denver Nuggets</p>
                </div>
                <div>
                    <Change src="/assets/icons/create_rounded.svg" alt="Create" className="create-actions" />
                    <Delete src="/assets/icons/delete_rounded.svg" className="delete-actions" alt="Delete"/>
                </div>
            </Title>
            <Body>
                <Logo>
                    <img src="/assets/img/POR_1.png" alt="Logo"/>
                </Logo>
                <Info>
                    <div><h1>Denver Nuggets</h1></div>
                    <Row>
                        <Col>
                            <h2>Year of foundatios</h2>
                            <p>1976</p>
                        </Col>
                        <Col>
                            <h2>Division</h2>
                            <p>Northwestern</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Conference</h2>
                            <p>Western</p>
                        </Col>
                    </Row>
                </Info>
            </Body>
        </TeamsCardDetailsWrapper>
    )
};

export default TeamsCardDetails;