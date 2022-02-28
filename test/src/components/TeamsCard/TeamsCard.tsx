import styled from 'styled-components';

const TeamCardWrapper = styled.div`
    display: flex;
    max-width: 365px;
    max-height: 366px;
    border-radius: 4px;
    background: linear-gradient(276.45deg, #393939 0%, #707070 100.28%);
    flex-direction: column;
    justify-content: space-between;
`;
const Logo = styled.div`
    display: flex;
    justify-content: center;
    min-height: 237px;
    align-items: center;
`;
const Info = styled.div`
    width: 364px;
    height: 85px;
    background: #303030;
    h2 {
        color: white;
        margin: 0;
        font-size: 18px;
        line-height: 24px;
        font-weight: 500;
        padding-top: 24px;
    }
    p {
        color: #9C9C9C;
        font-size: 14px;
        line-height: 24px;
        font-weight: 500;
        margin: 0;
        padding-top: 3px;
    }
`;

function TeamsCard() {
    return (
        <TeamCardWrapper>
            <Logo>
                <div>
                    <img src="/assets/img/POR_2.png" alt="Logo"/>
                </div>
            </Logo>
            <Info>
                <h2>Portland trail blazers</h2>
                <p>Year of foundation: 1970</p>
            </Info>
        </TeamCardWrapper>
    )
};

export default TeamsCard;