import React from 'react';

const CardHome = (props) => {
    return (
        <>
            <div
                className={`text-center bg-gray radius-10 d-flex align-items-center justify-content-around ${props.className}`}
                onClick={props.onClick}
            >
                <img src={require(`../../images/${props.imageName}`)} alt="news" style={{maxWidth: '45px'}}/>
                <p className="text-blue-dark pt-2 d-block font-Size-9 m-0 font-weight-bold">{props.text}</p>
            </div>
        </>
    );
};

export default CardHome;
