import styled from 'styled-components';
import { useAppSelector } from '../../hooks/redux';

const HeaderWrapper = styled.nav`
    display: flex;
    width: 100%;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
    align-items: center;
    justify-content: space-between
`;
const Logo = styled.div`padding-left: 51px;`;
const Profile = styled.div`
    display: flex;
    align-items: center;
    padding-right: 51px;
`;
const Name = styled.div`
    color: #303030;
    font-size: 14px;
    font-weight: 500;
`;
const ImgProfile = styled.img`
    height: 36px;
    width: 36px;
    padding-left: 16px;
`;

function Navigation() {
    const {res} = useAppSelector(state => state.userInReducer)

    return(
        <HeaderWrapper>
            <Logo>
                <img src="/assets/icons/logo.svg" alt="Logo"/>
            </Logo>
            <Profile>
                <Name>{res.name}</Name>
                <ImgProfile src={res.avatarUrl == null ? "/assets/icons/profile_rounded.svg" : res.avatarUrl} alt="Profile"/>
            </Profile>
            
        </HeaderWrapper>
    )
};

export default Navigation;