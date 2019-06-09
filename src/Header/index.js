import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
                    <a className="navbar-brand mr-1" href="index.html">Speech Recogination</a>

    <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
      <i className="fas fa-bars"></i>
    </button>

    <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
      <div className="input-group">
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
    <ul className="navbar-nav ml-auto ml-md-0">
      <li className="nav-item dropdown no-arrow">
        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" datatoggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-user-circle fa-fw"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
          <a className="dropdown-item" href="#">Settings</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>
        </div>
      </li>
    </ul>

  </nav>
        );
    }
}

export default Header;
