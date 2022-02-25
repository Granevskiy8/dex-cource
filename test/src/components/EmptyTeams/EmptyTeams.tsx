import styled from "styled-components"

const Wrapper = styled.div`
    width: 556px;
    height: 570px;
    background: #FFFFFF;
    border-radius: 15px;
    h1 {
        color: #FF768E;
        font-weight: 800;
        font-size: 36px;
        line-height: 49px;
        margin: 0;
    }
    p {
        color: #707070;
        font-size: 24px;
        line-height: 33px;
        margin: 0;
        padding-top: 24px;
    }
    img {
        padding-top: 48px;
    }
`;

function EmptyTeams() {
    return (
        <Wrapper>
            <img src="/assets/img/EmptyTeam.png" alt="AuthorizationLogo"/>
            <h1>Empty here</h1>
            <p>Add new teams to continue</p>
        </Wrapper>
    )
}

export default EmptyTeams