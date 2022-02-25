import styled from 'styled-components';

const PlayerCardWrapper = styled.div`
    display: flex;
    width: 364px;
    height: 380px;
    border-radius: 4px;
    background: linear-gradient(276.45deg, #393939 0%, #707070 100.28%);
    flex-direction: column;
    justify-content: space-between;
`;
const Photo = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 73px;
`;
const Info = styled.div`
    width: 364px;
    height: 100px;
    background: #303030;
    p {
        color: #9C9C9C;
        font-size: 14px;
        line-height: 24px;
        font-weight: 500;
        margin: 0;
        padding-top: 3px;
    }
    h2 {
        color: white;
        margin: 0;
        font-size: 18px;
        line-height: 24px;
        font-weight: 500;
        padding-top: 24px;
    }
    span {color: #FF5761;}

`;

function PlayersCard() {
    return (
        <PlayerCardWrapper>
            <Photo>
                <img src="/assets/img/photo.png" alt="Player"/>
            </Photo>
            <Info>
                <h2>Jaylen Adams <span>#10</span></h2>
                <p>Portland trail blazers</p>
            </Info>
        </PlayerCardWrapper>
    )
};

export default PlayersCard;