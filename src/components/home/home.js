import React, {Component} from 'react';
import Header from "../publicComponents/header";
import CardHome from "./cardHome";
import {Redirect} from 'react-router-dom';
import convertToPersianNumber from '../publicComponents/convertToPersian';
class Home extends Component {
    state = {
        GoMap: false,
        GoQR:false
    }
    GoMap = () => {
        this.setState({
            GoMap: true
        })
    }
    GoQR=()=>{
        this.setState({
            GoQR: true
        })
    }
    render() {
        if (this.state.GoMap){
          return <Redirect to="/map"/>;
        }
        if (this.state.GoQR){
            return <Redirect to="/qrlogin"/>;
        }


        return (
            <>
                <div className="container-fluid vh-100 d-flex justify-content-between flex-column">
                    <Header showBack={false} showLogo={true} showMenu={true}/>

                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-12">
                                <div className="boxImage bg-blue-dark p-3 mt-3 radius-10 text-center">
                                    <div className="homeImage text-center">
                                        <img src={require('../../images/images.jpg')} alt="" className="img-fluid"
                                             style={{maxWidth: '200px'}}/>
                                    </div>
                                    <p className=" text-light pt-3 d-block font-Size-8 m-0">مجموعه فروشگاه های افق کوروش
                                        به
                                        تیمم پیوست
                                    </p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row ">
                                    <div className="col-6 mt-3 mt-sm-4">
                                        <CardHome className="flex-column py-2 py-sm-3" imageName="news.svg"
                                                  text="اخبار"/>

                                    </div>
                                    <div className="col-6 mt-3 mt-sm-4">
                                        <CardHome className="flex-column py-2 py-sm-3" imageName="qr.svg"
                                                  text="افزودن کد" onClick={this.GoQR}/>
                                    </div>
                                    <div className="col-12  mt-3 mt-sm-4">
                                        <CardHome className=" py-2 py-sm-3" imageName="shop.svg"
                                                  text="فروشگاه های اطراف شما" onClick={this.GoMap}/>
                                    </div>
                                    <div className="col-6 mt-3 mt-sm-4">
                                        <CardHome className="flex-column py-2 py-sm-3" imageName="user.svg"
                                                  text="پروفایل"/>

                                    </div>
                                    <div className="col-6 mt-3 mt-sm-4">
                                        <CardHome className="flex-column py-2 py-sm-3" imageName="award.svg"
                                                  text="امتیازها"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 align-self-end">
                                <div
                                    className="text-center text-blue-dark p-2 my-3 mx-1 border-dashed radius-10 font-weight-bold font-Size-9">
                                    <span className="">امتیاز های شما:</span>
                                    <span className="p-1 m-1 bg-gray radius-10">{convertToPersianNumber('458')}</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default Home;
