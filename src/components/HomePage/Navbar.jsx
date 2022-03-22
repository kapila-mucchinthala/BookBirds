import Styles from './navbar.module.css';

export const Navbar = () => {
    return (
        <div className={Styles.navbar}>
            <div className={Styles.logo}>Book Birds</div>
            <div className={Styles.navbar_Search}>
                <input type="text" placeholder='Search here with title or author' />
                <button>Search</button>
            </div>
            <div className={Styles.navbar_Div}>
                <div>Cart</div>
                <div>Login</div>
                <div>Sign up</div>
            </div>
        </div>
    )
}

