import React, {Component} from 'react';
import Logo from '../publicComponents/logo';
import phone from '../../images/phone.svg';
import Header from "../publicComponents/header";
import {Redirect,withRouter} from 'react-router-dom';
import convertToPersianNumber from "../publicComponents/convertToPersian";

class Code extends Component {
    state = {
        mobile: '',
        goProfile: false
    }


    changeInput = (e) => {
        e.target.value = convertToPersianNumber(e.target.value);
        this.setState({
            mobile: e.target.value
        });
    }
    handelClick = () => {
        this.setState({
            goProfile: true
        })
    }

    render() {

        if (this.state.goProfile === true) {
            return <Redirect to='/profile'/>
        }
        return (
            <>
                <div className="container-fluid vh-100 d-flex justify-content-between flex-column">

                    <div className="row">
                        <div className="col-12">
                            <Header showMenu={false} showLogo={false} showBack={false}/>
                        </div>
                    </div>
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-12 my-auto text-center">
                                <Logo maxWidth="100px"/>
                            </div>
                            <div className="col-12">
                                <div className="code">
                                    <input className="form-control w-100" placeholder="شماره خودرا وارد کنید" type="tel"
                                           onChange={this.changeInput}/>
                                    <img src={phone} className="iconPhone" alt="phone"/>
                                </div>
                                <div className="text-center my-5">
                                    <button className="bg-blue-dark border-0 radius-100 py-2 px-5 text-light"
                                            onClick={this.handelClick}>ارسال کد فعالسازی
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        );
    }
}

export default Code;
