import './Registration.css';
import Input from '../../components/Input/Input';
import CheckBox from '../../components/Checkbox/Checkbox';
import { Button } from '../../components/Button/Button';
import { Link } from '../../components/Link/Link';

function Registration() {
    return (
        <div className="registration">
            <div className="sing-up">
                <form className="sing-up-form">
                    <h1>Sign Up</h1>
                    <div className="sing-up-form__name">
                        <Input id="name" label="Name"/>
                    </div>
                    <div className="sing-up-form__login">
                        <Input id="login" label="Login"/>
                    </div>
                    <div className="sing-up-form__password">
                        <Input id="password" label="Password" type="password" icon iconName="close_eye_rounded"/>
                    </div>
                    <div className="sing-up-form__password">
                        <Input id="confirmpassword" label="Enter your password again" type="password" icon iconName="close_eye_rounded"/>
                    </div>
                    <div className="sing-up-form__check">
                        <CheckBox id="acept" label="I accept the agreement"/>
                    </div>
                    <div className="sing-up-form__button">
                        <Button>Sign Up</Button>
                    </div>
                    <div className="sing-up-form__link">
                        <p>Already a member? <Link href="#">Sing in</Link></p>
                    </div>
                </form>
            </div>
            <div className="sing-up-img">
                <img src="assets/img/reg.png" alt="RegistrationLogo"/>
            </div>

        </div>
    )
};


export default Registration;