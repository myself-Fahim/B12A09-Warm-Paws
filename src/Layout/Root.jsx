import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import AuthContext from '../AuthContext/AuthContext';
import Loader from '../Components/Loader';

const Root = () => {
    const {loader} = useContext(AuthContext)
    return (
          loader ? <Loader></Loader>:
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;