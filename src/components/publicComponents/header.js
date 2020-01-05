import React,{useState} from 'react';
import Logo from "./logo";
import leftArrow from "../../images/left-arrow.svg";
import {NavLink} from "react-router-dom";
import profile from '../../images/userWhite.svg';
import home from '../../images/home.svg';
const Header = (props) => {
    const [open, setopen] = useState(false);
    return (
        <>

            <div className={` menu vh-100 text-right pt-2  ${!open && ' right-50'}`}>
                <div className=" text-left">
                    <button className="font-Size-15 font-weight-bold text-white pl-3" onClick={()=>setopen(false)}>✕
                    </button>
                </div>
                <ul className="p-0 list-unstyled " style={{fontFamily: 'IRANSans_light'}}>
                    <li className="border-item pr-2"><NavLink className="dark " to="/home" exact activeClassName="text-white"><img src={home} className="imageNav pl-2" /> خانه</NavLink>
                    </li>
                    <li className="border-item pr-2"><NavLink className="dark " to="/profile" exact
                                                              activeClassName="text-white"><img src={profile} className="imageNav pl-2" />پروفایل</NavLink></li>
                    <li className="border-item pr-2"><NavLink className="dark " to="/map" exact activeClassName="text-white"><img src={home} className="imageNav pl-2" /> نقشه  </NavLink>
                    </li>
                    <li className=" pr-2"><NavLink className="dark " to="/qrlogin" exact
                                 activeClassName="text-white"><img src={home} className="imageNav pl-2" /> بارکد</NavLink></li>
                </ul>
            </div>
            <div className="row pt-2">
                <div className="col-4 text-right ">
                    <div className={` ${props.showMenu ? '' : 'hidden'}`}>
                      <button className="font-Size-15 font-weight-bold text-blue-dark" onClick={()=>setopen(true)}>☰</button>

                    </div>

                </div>

                <div className="col-4 text-center">
                    <Logo className={`${props.showLogo ? '' : 'hidden'}`}/>

                </div>
                <div className="col-4">
                    <img src={leftArrow} alt="" className={`img-fluid ${props.showBack ? '' : 'hidden'}`}
                         style={{maxWidth: '30px'}}/>
                </div>

            </div>
        </>
    );
};

export default Header;
