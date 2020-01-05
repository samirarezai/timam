import React, {Component} from 'react';
import Header from "../publicComponents/header";
import Select from 'react-select';
import  { Redirect } from 'react-router-dom';
class Team extends Component {
    state={
        selectedOptionTeam:null,
        goHome:false
    }
    handleChangeTeam=selectedOptionTeam=>{
        this.setState({
            selectedOptionTeam
        })
    }
    handelClick=()=>{
        this.setState({
            goHome:true
        })
    }
    render() {
        if(this.state.goHome){
            return <Redirect to='/home' />
        }
        const {selectedOptionTeam} = this.state;
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
                    <div className="col-12 align-self-end">
                        <Select className="text-right"
                                value={selectedOptionTeam}
                                onChange={this.handleChangeTeam}
                                options={OptionTeam}
                                placeholder="تیم مورد علاقه خود را جستجو کنید"
                        />
                    </div>
                    <div className="col-12 align-self-end ">
                        <div className="text-center mb-4 mt-4">
                            <button className="bg-blue-dark border-0 radius-100 py-2 px-5 text-light"
                                    onClick={this.handelClick}>ثبت نام
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
const OptionTeam=[
    {value:'001',label:'چلسی'},
    {value:'002',label:'منچستر یونایتد'},
    {value:'003',label:'آرسنال'},
]
export default Team;
