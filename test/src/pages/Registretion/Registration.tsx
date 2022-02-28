import {useState} from 'react';
import Input from '../../components/Input/Input';
import CheckBox from '../../components/Checkbox/Checkbox';
import { Button } from '../../components/Button/Button';
import { Link } from '../../components/Link/Link';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../hooks/redux';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/store';
import { setRegisterThunk } from '../../modules/authorization/authorizationThunk';
import { useEffect } from 'react'

const RegistrationFormWrapper = styled.div`display: flex;`;
const SingUp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100vh;
    background: white;
    @media (max-width: 975px) {
        width: 100%;
     }
`;
const SingUpForm = styled.form`
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
const RowLink = styled(Row)`
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
const SingUpImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100vh;
    background: #F5FBFF;
    img {
        @media (max-width: 1030px) {
           width: 500px;
        }
    }
    @media (max-width: 975px) {
        display: none;
     }
`;


function Registration() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const { isAuth } = useSelector((state: AppStateType) => state.auth)
    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [values, setValues] = useState({
        password: "",
        showPassword: true,
      });
      const [valuesconfirm, setValuesConfirm] = useState({
        passwordconfirm: "",
        showPasswordConfirm: true,
      });
    const handlePasswordChangeConfirm = (prop: any) => (event: any) => {
        setValuesConfirm({ ...valuesconfirm, [prop]: event.target.value });
      };
    const handleClickShowPasswordConfirm = () => {
        setValuesConfirm({ ...valuesconfirm, showPasswordConfirm: !valuesconfirm.showPasswordConfirm });
      };
      const handlePasswordChange = (prop: any) => (event: any) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

      const SubminRegistrationForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            userName: name,
            login: login,
            password: values.password
        }
        await dispatch(setRegisterThunk(user));
      } 
      useEffect(() => {
        isAuth && navigate('/menu');
      }, [isAuth]);
      
    return (
        <RegistrationFormWrapper>
            <SingUp>
                <SingUpForm onSubmit={SubminRegistrationForm}>
                    <h1>Sign Up</h1>
                    <Row>
                        <Input 
                            id="name" 
                            label="Name"
                            value={name}
                            onChange={(e: any) => setName(e.target.value)}
                        />
                    </Row>
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
                            onClick={handleClickShowPassword}
                        />
                    </Row>
                    <Row>
                        <Input 
                            id="passwordconfirm" 
                            label="Enter your password again" 
                            type={!valuesconfirm.showPasswordConfirm ? 'text' : 'password'} 
                            value={valuesconfirm.passwordconfirm}
                            onChange={handlePasswordChangeConfirm("passwordconfirm")}
                            icon
                            iconName={valuesconfirm.showPasswordConfirm ? "close_eye_rounded" : "eye_rounded"}
                            onClick={handleClickShowPasswordConfirm}
                        />
                    </Row>
                    <Row>
                        <CheckBox id="acept" label="I accept the agreement"/>
                    </Row>
                    <Row>
                        <Button type="submit">Sign Up</Button>
                    </Row>
                    <RowLink>
                        <p>Already a member? <Link to="/">Sing in</Link></p>
                    </RowLink>
                </SingUpForm>
            </SingUp>
            <SingUpImg>
                <img src="/assets/img/reg.png" alt="RegistrationLogo"/>
            </SingUpImg>
        </RegistrationFormWrapper>
    )
};


export default Registration;