import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    h1 {
        margin: 0;
        color: #FF768E;
        font-weight: 800;
        font-size: 36px;
        line-height: 49px;
        padding-top: 56px;
    }
    p {
        margin: 0;
        color: #707070;
        font-size: 24px;
        line-height: 33px;
        padding-top: 24px;
    }
`;

function Error404() {
    return (
        <Wrapper>
            <img src="/assets/img/Error.png" alt="AuthorizationLogo"/>
            <h1>Page not found</h1>
            <p>Sorry, we can’t find what you’re looking for</p>
        </Wrapper>
    )
}

export default Error404;