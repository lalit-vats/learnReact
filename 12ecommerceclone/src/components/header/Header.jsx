import React from 'react'
import './header.css';
import Logo from '../../assets/e-SchoolLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropDown from '../select-drop-down/DropDown';

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <img src={Logo} alt='logo' height={50} width={200} />
          </div>
              {/*header search start here */}
          <div className="col-sm-5">
          <div className="headerSearch d-flex align-items-center">
          <DropDown />
            <div className="searchBox">
              <input type='text' placeholder='Search for items..'/>
              <div><i class="bi bi-search cursor icon"></i></div>
            </div>
            </div>
          </div>
          <div className="col-sm-5">
          
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header