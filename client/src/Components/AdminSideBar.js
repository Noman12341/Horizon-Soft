import React from 'react';
import { NavLink } from 'react-router-dom';
function AdminSideBar() {
    return <aside id="admin-sidebar">
        <div className="py-4">
            <h6>Horizon Soft</h6>
            <hr className="mt-4" />
        </div>
        <div>
            <ul className="side-list">
                <li>
                    <NavLink to="/admin" exact activeClassName="active-side">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/add-services" exact activeClassName="active-side">
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/add-reviews" exact activeClassName="active-side">
                        Reviews
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/add-members" exact activeClassName="active-side">
                        Members
                    </NavLink>
                </li>
            </ul>
        </div>
    </aside>
}
export default AdminSideBar;