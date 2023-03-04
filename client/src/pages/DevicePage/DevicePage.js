import React from 'react';

import bigStar from '../../icons/bigStar.png'
import {Container, Row} from "react-bootstrap";

const DevicePage = () => {
    const device = {id: 1, name: 'Iphone 12 pro', price: 1200, rating: 5}
    const description = [
        {id: 1, title: 'memory', description: '5gb'},
        {id: 2, title: 'memory', description: '5gb'},
        {id: 3, title: 'memory', description: '5gb'},
        {id: 4, title: 'memory', description: '5gb'},
        {id: 5, title: 'memory', description: '5gb'}
    ]
    return (
        <Container>
            <Row>
                <div className="col-4 mt-3 d-flex justify-content-center p-0">
                    <img src="" alt="" style={{width: 300, height: 300}}/>
                </div>
                <div className="col-4 mt-3 d-flex justify-content-center">
                    <div className="row d-flex flex-column align-items-center ">
                        <h2>{device.name}</h2>
                        <div className="d-flex align-items-center justify-content-center"
                             style={{
                                 background: `url(${bigStar}) no-repeat center center`,
                                 width: 240,
                                 height: 240,
                                 backgroundSize: 'cover',
                                 fontSize:64

                             }}
                        >
                            {device.rating}
                        </div>
                    </div>
                </div>
                <div className="col-4 mt-3">
                    <div className="card d-flex flex-column align-items-center justify-content-around "
                         style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>From: {device.price} EUR.</h3>
                        <button type="button" className="btn btn-outline-secondary">Add to busket</button>
                    </div>
                </div>
            </Row>
            <Row className=" d-flex flex-column m-3 ">
                <h1>Descriptions</h1>
                {description.map((info, index) =>
                    <div className="row" key={info.id}
                         style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}:{info.description}
                    </div>)}
            </Row>
        </Container>
    );
};

export {DevicePage};