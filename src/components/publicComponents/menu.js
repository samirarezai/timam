/*
import React, {Component} from 'react';
import menu from "../../images/menu.svg";
import {NavLink} from "react-router-dom";

class Menu extends Component {
    state = {
        open: this.props.showNavbar
    }
    closeMenu = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <>
                <div className={` menu vh-100 text-right pt-2 pl-3 ${!this.state.open && 'hidden'}`}>
                    <div className=" text-left">
                        <button className="font-Size-15 font-weight-bold text-blue-dark" onClick={this.closeMenu}>✕
                        </button>
                    </div>
                    <ul className="p-0 list-unstyled " style={{fontFamily: 'IRANSans_light'}}>
                        <li><NavLink className="dark " to="/home" exact activeClassName="text-blue-dark">خانه</NavLink>
                        </li>
                        <li><NavLink className="dark " to="/profile" exact
                                     activeClassName="text-blue-dark">پروفایل</NavLink></li>
                        <li><NavLink className="dark " to="/map" exact activeClassName="text-blue-dark">نقشه</NavLink>
                        </li>
                        <li><NavLink className="dark " to="/qrlogin" exact
                                     activeClassName="text-blue-dark">بارکد</NavLink></li>
                    </ul>
                </div>
            </>
        );
    }


};

export default Menu;
*/
