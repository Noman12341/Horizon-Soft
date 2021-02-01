import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AdminHome() {
    const history = useHistory();
    useEffect(() => {
        const checkAuth = async () => {
            await axios.get("/auth/check-auth", { headers: { "x-auth-token": localStorage.getItem('token') } })
                .then(res => {
                    console.log("u logged in!")
                }).catch(error => {
                    history.push("/admin/auth");
                });
        }
        checkAuth();
    }, [])
    return <div className="text-center pt-5">
        <h1>Admin Home</h1>
    </div>
}
export default AdminHome;