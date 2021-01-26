import React from 'react';
import { Container, Image } from 'react-bootstrap';
import TopContainer from '../Components/TopContainer';
import ContactUs from '../Sections/ContactUs';
import BlueBtn from '../Components/TechNameBtn';
import net from '../Images/.net.png';
import java from '../Images/java.png';
import node from '../Images/node.png';
import angular from '../Images/angular.png'
import reactLogo from '../Images/react.png';
import postgre from '../Images/postgre.jpg';
import mongo from '../Images/mongo.png';
import mysql from '../Images/mysql.png';
import apple from '../Images/apple.png';
import android from '../Images/android.png';
import reactNative from '../Images/react-native.png';

function TechPage() {
    return <div>
        <TopContainer bigTitle="Technologies" currPage="Tech" />
        <Container id="tech" fluid>
            <Container>
                <p className="tech-top-p">Designing and developing innovative and professional software solutions for hundreds of companies across global tech markets for almost two decades now.</p>
            </Container>
            {/* Backend Section */}
            <div className="py-5">
                <Container>
                    <div className="tech-cnt">
                        <h2>Backend</h2>
                        <p>Combat development challenges by reinforcing the backend functioning of the application with easy synchronization of different features and seamless communication with relational or NoSQL databases.</p>
                        <div className="mb-5"><BlueBtn name=".net" moveTo="/tech" /><BlueBtn name="Java" moveTo="/tech" /><BlueBtn name="Node js" moveTo="/tech" /></div>
                        <div className="tech-imgs-cnt"><Image src={net} height="60" /><Image src={java} height="60" /> <Image src={node} height="60" /></div>
                    </div>
                </Container>
            </div>
            {/* Frontend section */}
            <div className="py-5 bg-gray">
                <Container>
                    <div className="tech-cnt">
                        <h2>Frontend</h2>
                        <p>Reinvent the look and feel of web applications using JavaScript technologies along with HTML and CSS to improve aesthetics and enhance the digital experience of your customers.</p>
                        <div className="mb-5"><BlueBtn name="AngularJs" moveTo="/tech" /><BlueBtn name="ReactJs" moveTo="/tech" /></div>
                        <div className="tech-imgs-cnt"><Image src={angular} height="60" /><Image src={reactLogo} height="60" /></div>
                    </div>
                </Container>
            </div>
            {/* DataBase section */}
            <div className="py-5">
                <Container>
                    <div className="tech-cnt">
                        <h2>DataBase</h2>
                        <p>Consolidate data from multiple complex data sources and manage end-to-end data integration to predict significant and actionable insights.</p>
                        {/* <div className="mb-5"><BlueBtn name="AngularJs" moveTo="/tech" /><BlueBtn name="ReactJs" moveTo="/tech" /></div> */}
                        <div className="tech-imgs-cnt"><Image src={postgre} height="60" /><Image src={mongo} height="60" /><Image src={mysql} height="60" /></div>
                    </div>
                </Container>
            </div>
            {/* Mobile Section  */}
            <div className="py-5 bg-gray">
                <Container>
                    <div className="tech-cnt">
                        <h2>Mobile</h2>
                        <p>Transform web applications into leading-edge mobile applications by enabling mobility across multiple platforms such as iOS, Android, and windows.</p>
                        <div className="mb-5"><BlueBtn name="iOS" moveTo="/tech" /><BlueBtn name="Android" moveTo="/tech" /><BlueBtn name="React Native" moveTo="/tech" /></div>
                        <div className="tech-imgs-cnt"><Image src={apple} height="60" /><Image src={android} height="60" /><Image src={reactNative} height="60" /></div>
                    </div>
                </Container>
            </div>
        </Container>
        <ContactUs />
    </div>
}
export default TechPage;