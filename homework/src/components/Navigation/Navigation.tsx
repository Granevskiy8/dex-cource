import './Navigation.css'

function Navigation() {
    
    return(
        <nav className="header-menu">
            <div className="header-menu__logo">
                <img src="assets/icons/logo.svg" alt="Logo"/>
            </div>
            <div className="header-menu__profile">
                <p className="header-menu__name">John Smith</p>
                <img className="header-menu__img" src="assets/icons/profile_rounded.svg" alt="Profile"/>
            </div>
            
        </nav>
    )
};

export default Navigation;