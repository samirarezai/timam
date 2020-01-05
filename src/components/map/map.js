import React, {Component} from 'react';
import CedarMaps from '@cedarstudios/react-cedarmaps';
import markerUrl from '../../images/marker.svg';
import './map.scss';
import Header from "../publicComponents/header";

class MapBuy extends Component {
    state = {
        lng: 51.39232213228172,
        lat: 35.77005206115901
    }

    componentDidMount() {
    }

    handleClick = (map, event) => {

        /*let lngLat = event.lngLat;
        console.log(lngLat.lng)
        this.setState({
            lng: lngLat.lng,
            lat: lngLat.lat,
            userLocation:''
        })*/
    }
    onMarkerClick = (ev) => {
        console.log(ev)
    }
    handleAddress = (e) => {

    }

    render() {

        const {RotationControl, ZoomControl, ScaleControl, Marker, Map, MapContext, Geocoder, L} = CedarMaps.getReactMapboxGl();
        return (

            <CedarMaps
                containerStyle={{
                    height: '100vh',
                    width: '100%'
                }}
                token='2e6f3b1a94fd3ae41bda2d1ac5cee21af542c0c2'
                preserveDrawingBuffer={false}
                center={[51.39232213228172, 35.77005206115901]}
                onClick={this.handleClick}
                geoJSONSourceOptions={this.handleAddress}
            >
                <div className="container-fluid" dir="rtl">

                    <Header showLogo={true} showMenu={true}/>

                </div>
                <div className="mapText position-absolute bg-white text-center p-1 w-100" style={{fontFamily: 'IRANSans_light',bottom:0,right:0}}>
                    <p className="my-1 text-blue-dark font-Size-9">فروشگاه برادران نوری</p>
                    <p className="my-1">تهران,خیابان نوری,کوچه بهاران,پلاک11</p>
                </div>
                <RotationControl/>
            {/*    <ZoomControl/>*/}
             {/*   <ScaleControl/>*/}
                <Marker
                    coordinates={[this.state.lng, this.state.lat]}
                    anchor="bottom"
                >
                    <img src={markerUrl} style={{width: 30}}/>
                </Marker>
                <Marker


                    coordinates={[51.49943883142606, 35.803193981999655]}
                    anchor="bottom"
                >
                    <img src={markerUrl} style={{width: 30}}/>
                </Marker>
                <Marker


                    coordinates={[51.46613652436835, 35.72769942906754]}
                    anchor="bottom"
                >
                    <img src={markerUrl} style={{width: 30}}/>
                </Marker>
                <Marker
                    coordinates={[51.35560424096036, 35.77046863410136]}
                    anchor="bottom"
                >
                    <img src={markerUrl} style={{width: 30}}/>
                </Marker>
            </CedarMaps>
        );
    }
}

export default MapBuy;
