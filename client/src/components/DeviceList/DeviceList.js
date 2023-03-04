import React from 'react';
import {useSelector} from "react-redux";
import {Row} from "react-bootstrap";

import {DeviceItem} from "../DeviceItem/DeviceItem";

const DeviceList = () => {
    const {device} = useSelector(state => state.device);
    return (
        <Row className=" m-0 overflow-auto">
            {device.map(dev =>
                <DeviceItem key={dev.id} dev={dev}/>
            )}
        </Row>
    );
};

export {DeviceList};