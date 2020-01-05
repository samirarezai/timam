import React, {Component} from 'react';
import Header from "../publicComponents/header";
import '../../assets/scss/qrlogin.scss';
import convertToPersianNumber from "../publicComponents/convertToPersian";
import {Redirect} from 'react-router-dom';

class QrLogin extends Component {
    state = {
        enterCode: false,
    }
    changeInput = (e) => {
        e.target.value = convertToPersianNumber(e.target.value);
    }
    goScanQR = () => {
        this.setState({
            enterCode: true
        });

    }

    render() {
        if (this.state.enterCode) {
            return <Redirect to="/home"/>;
        }
        return (
            <>
                <div className="container-fluid vh-100 d-flex justify-content-between flex-column">
                    <Header showLogo={true} showMenu={true}/>
                    <div className="container h-100">
                        <div className="row h-100">

                            <div className="col-12">
                                <h5 className="text-center text-dark  font-Size-15 font-weight-bold mt-5 mb-4">وارد کردن
                                    کد</h5>
                                <p className="text-center text-black-50 font-Size-8">لطفا کد درج شده روی بسته را در فرم
                                    زیر وارد کنید</p>
                                <div className="qrlogin">
                                    <input className="form-control w-100"
                                           placeholder={` مثال : ${convertToPersianNumber('524178596')} `} type="tel"
                                           onChange={this.changeInput}/>
                                    <button className="checkCode bg-blue-dark text-center radius-5 text-light text-white" alt="phone" >✔</button>
                                </div>
                                <div
                                    className="infoQrLogin bg-gray text-right d-flex justify-content-between align-items-center my-4 radius-10 font-Size-9">
                                    <div className="pr-2 py-2">
                                        <div className="yourCode py-1">
                                            <span>کد شما :</span>
                                            <span>{convertToPersianNumber('524178596')}</span>
                                        </div>
                                        <div className="infoYourCode py-1">
                                            دوغ کارخانه شیر پگاه
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            className="bg-white d-inline-block p-2 ml-2 text-blue-dark radius-10">{convertToPersianNumber('13')}+
                                        </div>
                                    </div>
                                </div>
                                <div className="points text-center font-weight-bold mt-5">
                                    <span className="text-black-50 "> مجموع امتیازات شما : </span>
                                    <span className="text-blue-dark font-Size-11">{convertToPersianNumber('25')}</span>
                                </div>
                            </div>
                            <div className="col-12 align-self-end">
                                <div
                                    className="switchBtn my-4 bg-blue-dark text-center d-flex justify-content-between radius-100 p-1">
                                    <button
                                        className="qrScanBtn bg-blue-dark text-light py-2 radius-100 px-4"
                                        onClick={this.goScanQR}>اسکن بارکد
                                    </button>

                                    <button ref={t => this.btn = t}
                                            className="qrLoginBtn bg-blue-light text-light py-2 radius-100 px-4"
                                    >وارد کردن کد
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

export default QrLogin;
