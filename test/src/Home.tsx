import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import Navigation from "./components/Navigation/Navigation";

const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`display: flex;`;
const Content = styled.div`
  background-color: #F6F6F6;
  width: 100%;
`;

function Home() {
    return (
      <AppWrapper>
        <Navigation/>
        <Wrapper>
          <HamburgerMenu/>
          <Content>
            <Outlet/>
          </Content>
        </Wrapper>
    </AppWrapper>
  );
}

export default Home;