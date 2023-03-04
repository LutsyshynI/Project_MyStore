import React from 'react';
import {Outlet} from 'react-router-dom'

import {MainShopPage} from "../../pages";
import {NavBar} from "../../components"

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};