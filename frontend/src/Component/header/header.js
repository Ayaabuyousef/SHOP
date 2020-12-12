import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/aya.svg';
import{auth} from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header =({currentUser})=> (
    <div className='header'>
        <Link className='logoLink' to ="/">
            <Logo className='logo'/>

        </Link>
        <div className='options'>
            <Link className='options' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser?
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/Signin'>SIGN IN</Link>
            }

        </div>

    </div>
)
export default Header;