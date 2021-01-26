import React from 'react'
import TopContainer from '../Components/TopContainer';
import ContactUs from '../Sections/ContactUs';
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa'
function ContactPage() {

    const mapProps = {
        center: {
            lat: 33.720000,
            lng: 73.060000
        },
        zoom: 11
    }

    return <div>
        <TopContainer bigTitle="Contact Us" currPage="Contact" />
        <div className="map-container">
            <div style={{ height: "80vh", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBIj-LSfohsUe1_ga_aPmxZx__JUEMuBNI" }}
                    defaultCenter={mapProps.center}
                    defaultZoom={mapProps.zoom}
                ><MyMarker
                        lat={33.720000}
                        lng={73.060000}
                        text="Horizon Soft"
                    />
                </GoogleMapReact>
            </div>
        </div>
        <ContactUs />
    </div>
}
const MyMarker = ({ text }) => <div className="marker"><span className="marker-text">{text}</span><FaMapMarkerAlt size={40} /></div>;

export default ContactPage;