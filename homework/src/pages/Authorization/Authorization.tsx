import { Button } from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { Link } from '../../components/Link/Link'
import './Authorization.css'


function Authorization() {
    return (
        <div className="authorization">
            <div className="sing-in">
                <form className="sing-in-form">
                    <h1>Sign In</h1>
                    <div className="sing-in-form__login">
                        <Input id="login" label="Login"/>
                    </div>
                    <div className="sing-in-form__password">
                        <Input id="password" label="Password" type="password" icon iconName="close_eye_rounded"/>
                    </div>
                    <div className="sing-in-form__button">
                        <Button>Sign In</Button>
                    </div>
                    <div className="sing-in-form__link">
                        <p>Not a member yet? <Link href="#">Sing up</Link></p>
                    </div>
                </form>
            </div>
            <div className="sing-in-img">
                <img src="assets/img/auth.png" alt="AuthorizationLogo"/>
            </div>
        </div>
    )
};

export default Authorization;