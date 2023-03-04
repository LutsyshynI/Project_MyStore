import React from 'react';
import {useSelector} from "react-redux";
import {Col, Container} from "react-bootstrap";
import {TypeBar} from "../../components";
import {BrandBar} from "../../components";
import {DeviceList} from "../../components/DeviceList/DeviceList";

const MainShopPage = () => {
    const {device} = useSelector(state => state.device);
    return (
        <Container>
            <div className="mt-2 d-flex">
                <div className="col-3 ">
                    <TypeBar/>
                </div>
                <div className="col-9">
                    <BrandBar/>
                    <DeviceList/>
                </div>
            </div>
        </Container>
    );
};

export {MainShopPage};