import React from 'react';
import {useNavigate} from "react-router-dom";
import {Card, Image} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons'

import {DEVICE_ROUTE} from "../../configs";


const DeviceItem = ({dev}) => {
    const navigate = useNavigate();
    return (
        <div className="col-3 d-flex justify-content-center mt-2 flex-wrap"
             onClick={() => navigate(DEVICE_ROUTE + '/' + dev.id)}
        >
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src=''/>
                <div className=" text-black-50 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>{dev.rating}</div>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                </div>
                {dev.name}
            </Card>
        </div>
    );
};

export {DeviceItem};