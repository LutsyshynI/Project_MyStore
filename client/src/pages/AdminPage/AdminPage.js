import React, {useState} from 'react';
import {CreateBrand} from "../../components/modals/CreateBrand";
import {CreateType} from "../../components/modals/createType";
import {CreateDevice} from "../../components/modals/createDevice";
import {Container} from "react-bootstrap";

const AdminPage = () => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return (
        <Container className=" d-flex flex-column">

            <button type="button" className="btn btn-outline-secondary mt-2"
                    onClick={() => setTypeVisible(true)}>Add Type
            </button>
            <button type="button" className="btn btn-outline-secondary mt-2"
                    onClick={() => setBrandVisible(true)}>Add Brand
            </button>
            <button type="button" className="btn btn-outline-secondary mt-2"
                    onClick={() => setDeviceVisible(true)}>Add Device
            </button>

            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export {AdminPage};
