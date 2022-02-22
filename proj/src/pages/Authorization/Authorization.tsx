import {useState} from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Link } from '../../components/Link/Link';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchInUser } from '../../store/reducers/ActionUserCreators';
import { Notification } from '../../components/Notification/Notification';
// import { useEffect } from 'react';


const AuthorizationWrapper = styled.div`display: flex;`;
const SingIn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100vh;
    background: white;
`;
const SingInForm = styled.form`
    width: 366px;
    h1 {
        font-size: 36px;
        font-weight: 400;
        line-height: 49px;
        color: #344472;
        margin: 0;
    }
`;
const Row = styled.div`padding-top: 24px;`;
const LinkRow = styled(Row)`
    display: flex;
    justify-content: center;
    p {
        margin: 0;
        color: #707070;
        font-size: 14px;
        line-height: 24px;
        font-weight: 500;
    }
`;
const SingInImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100vh;
    background: #F5FBFF;
`;

function Authorization() {
    // const {error, res} = useAppSelector(state => state.userInReducer)
    let navigate = useNavigate();

    // const dispatch = useAppDispatch()


    const [values, setValues] = useState({
        password: "",
        showPassword: true,
    });
    const [login, setLogin] = useState('')
    const handlePasswordChange = (prop: any) => (event: any) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const SubminLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            login: login,
            password: values.password
        }
        // dispatch(fetchInUser(user));

        return navigate("menu");
        
        // return navigate("menu");
        // console.log(error)
        
        
      }
    //   let ErrorMasseg
    //   if (!error) {
    //     ErrorMasseg = <Notification>User with the specified username / password was not found.</Notification>
    



    return (
        <AuthorizationWrapper>
            <SingIn>
                <SingInForm onSubmit={SubminLoginForm}>
                    <h1>Sign In</h1>
                    <Row>
                        <Input 
                            id="login" 
                            label="Login"
                            value={login}
                            onChange={(e: any) => setLogin(e.target.value)}
                            />
                    </Row>
                    <Row>
                        <Input 
                            id="password" 
                            label="Password" 
                            type={!values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handlePasswordChange("password")}
                            icon 
                            iconName={values.showPassword ? "close_eye_rounded" : "eye_rounded"}
                            onClick={handleClickShowPassword}/>
                    </Row>
                    <Row>
                        <Button type="submit">Sign In</Button>
                    </Row>
                    <LinkRow>
                        <p>Not a member yet? <Link to="sign_up">Sing up</Link></p>
                    </LinkRow>
                </SingInForm>
            </SingIn>
            <SingInImg>
                <img src="/assets/img/auth.png" alt="AuthorizationLogo"/>
            </SingInImg>
        </AuthorizationWrapper>
    )
};

export default Authorization;