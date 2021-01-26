import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import SideBar from '../Components/AdminSideBar';
import AdminHome from '../AdminSubPages/Home';
import AdminServices from '../AdminSubPages/Services';
import AdminReviews from '../AdminSubPages/Reviews';
import AdminMembers from '../AdminSubPages/Members';

function AdminPage() {
    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(!show);
    }

    return <div className="d-flex">
        {show && <SideBar />}
        {/* below section is where the different subpages are shown */}
        <section id="main-sec">
            <Navbar bg="light" expand="lg" className="py-3">
                <Button variant="primary" bsPrefix="show-btn" onClick={handleShow}><FaPlus /></Button>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Button varient="primary">LogOut</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* Others section items */}

            <Switch>
                <Route path="/admin/" exact component={AdminHome} />
                <Route path="/admin/add-services" exact component={AdminServices} />
                <Route path="/admin/add-reviews" exact component={AdminReviews} />
                <Route path="/admin/add-members" exact component={AdminMembers} />
            </Switch>
        </section>
    </div>
}
export default AdminPage;