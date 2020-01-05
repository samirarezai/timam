import React, {Component} from 'react';
import Select from 'react-select';
import Header from '../publicComponents/header';
import {Redirect} from 'react-router-dom';

class Profile extends Component {
    state = {
        selectedOptionCity: null,
        selectedOptionEducation: education[1],
        goTeam: false,
    };
    handleChange = selectedOptionCity => {
        this.setState(
            {selectedOptionCity},
            () => console.log(`Option selected:`, this.state.selectedOptionCity)
        );
    };
    handleChangeEducation = selectedOptionEducation => {
        this.setState(
            {selectedOptionEducation},
            () => console.log(`Option selected:`, this.state.selectedOptionEducation)
        );
    }
    handelClick = () => {
        this.setState({
            goTeam: true
        })
    }

    render() {

        if (this.state.goTeam === true) {
            return <Redirect to='/team'/>
        }


        const {selectedOptionCity} = this.state;
        const {selectedOptionEducation} = this.state;
        return (
            <>
                <div className="container-fluid vh-100 d-flex justify-content-between flex-column">
                    <div className="row">
                        <div className="col-12">
                            <Header showMenu={false} showLogo={true} showBack={false}/>
                        </div>
                    </div>
                    <div className="container h-100">
                        <div className="row h-100">

                            <div className="col-12">
                                <h5 className="text-center text-blue-dark  font-Size-15 font-weight-bold my-5">ثبت
                                    نام</h5>
                                <form action="#">
                                    <div className="form-group text-right">
                                        <label className="text-dark font-weight-bold font-Size-1">نام و نام
                                            خانوادگی</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group text-right">
                                        <label className="text-dark font-weight-bold font-Size-1">شهر</label>
                                        <Select className="text-right"
                                                value={selectedOptionCity}
                                                onChange={this.handleChange}
                                                options={city}
                                                placeholder="شهر خود را جستجو کنید"
                                        />
                                    </div>

                                    <div className="form-group text-right">
                                        <div className="row">
                                            <div className="col-6">
                                                <label className="text-dark font-weight-bold font-Size-1">سن</label>
                                                <input type="number" className="form-control "/>
                                            </div>
                                            <div className="col-6 d-flex mt-auto">
                                                <div className=" form-check form-check-inline flex-grow-1">
                                                    <label className="form-check-label pr-1 w-100">
                                                        <input className="form-check-input"
                                                               defaultChecked
                                                               type="radio"
                                                               name="genderRadioOptions"
                                                               value="MALE"/>
                                                        <span
                                                            className=" text-center checkmark w-100 font-Size-1 h-100">مرد</span>
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline flex-grow-1">

                                                    <label className="form-check-label pr-1 w-100">
                                                        <input className="form-check-input" type="radio"
                                                               name="genderRadioOptions" value="FEMALE"/>
                                                        <span
                                                            className="text-center checkmark w-100 font-Size-1 h-100">زن</span>
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="form-group text-right">
                                        <label className="text-dark font-weight-bold font-Size-1">تحصیلات</label>
                                        <Select className="text-right"
                                                value={selectedOptionEducation}
                                                onChange={this.handleChangeEducation}
                                                options={education}
                                                isSearchable={false}

                                        />
                                    </div>


                                </form>


                            </div>
                            <div className="col-12 align-self-end">
                                <div className="text-center mb-4 mt-4">
                                    <button className="bg-blue-dark border-0 radius-100 py-2 px-5 text-light"
                                            onClick={this.handelClick}>مرحله بعد
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

export default Profile;
const education = [
    {value: '01', label: 'دیپلم'},
    {value: '02', label: 'کاردانی'},
    {value: '03', label: 'کارشناسی'},
    {value: '05', label: 'کارشناسی ارشد'},
    {value: '06', label: 'دکترا'},
    {value: '07', label: 'بی سواد'},
];
const city = [
    {value: '1', label: 'آذربایجان شرقی'},
    {value: '2', label: 'آذربایجان غربی'},
    {value: '3', label: 'اردبیل'},
    {value: '4', label: 'اصفهان'},
    {value: '5', label: 'البرز'},
    {value: '6', label: 'ایلام'},
    {value: '7', label: 'بوشهر'},
    {value: '8', label: 'تهران'},
    {value: '9', label: 'چهارمحال بختیاری'},
    {value: '10', label: 'خراسان جنوبی'},
    {value: '11', label: 'خراسان رضوی'},
    {value: '12', label: 'خراسان شمالی'},
    {value: '13', label: 'خوزستان'},
    {value: '14', label: 'زنجان'},
    {value: '15', label: 'سمنان'},
    {value: '16', label: 'سیستان و بلوچستان'},
    {value: '17', label: 'فارس'},
    {value: '18', label: 'قزوین'},
    {value: '19', label: 'قم'},
    {value: '20', label: 'کردستان'},
    {value: '21', label: 'کرمان'},
    {value: '22', label: 'کرمانشاه'},
    {value: '23', label: 'کهکیلویه و بویراحمد'},
    {value: '24', label: 'گلستان'},
    {value: '25', label: 'گیلان'},
    {value: '26', label: 'لرستان'},
    {value: '27', label: 'مازندران'},
    {value: '28', label: 'مرکزی'},
    {value: '29', label: 'هرمزگان'},
    {value: '30', label: 'همدان'},
    {value: '31', label: 'یزد'},

];
