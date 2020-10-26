import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './../contexApi/StateProvider';
import { auth } from '../../firebase';



function Header() {

    const [{ basket, user }, dispatch] = useStateValue();
    // console.log('basket data--->', basket)

    const handelAuth = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="https://i.pinimg.com/originals/f8/88/1e/f8881ef6016ed4be9286d1ae8f9b240f.png" alt="" />
            </Link>



            <div className="header_search">
                <input className="header_search_Input" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">


                <Link to={!user && '/login'}>
                    <div onClick={handelAuth} className="headr_option">
                        <span>
                            <div className="header_option_LineOne">Hello Guest</div>
                        </span>
                        <span>
                            <div className="header_option_LineTwo">{user ? 'Sign Out' : "Sign In"}</div>
                        </span>

                    </div>
                </Link>
                <div className="headr_option">

                    <span>
                        <div className="header_option_LineOne">Return</div>
                    </span>
                    <span>
                        <div className="header_option_LineTwo">A order</div>
                    </span>
                </div>
                <div className="headr_option">

                    <span>
                        <div className="header_option_LineOne">Your</div>
                    </span>
                    <span>
                        <div className="header_option_LineTwo">Prime</div>
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="headr_option_basket">
                        <ShoppingCartIcon />
                        <span>
                            <div className=" header_basketCount">{basket?.length}</div>
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
