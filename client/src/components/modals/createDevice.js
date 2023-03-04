import React, {useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {brandActions, typeActions} from "../../redux";

const CreateDevice = ({show, onHide}) => {

    const type = useSelector(state => state.type);
    const brand = useSelector(state => state.brand);
    const [info, setInfo] = useState([]);
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    };
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Select type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {type.types.map(type =>
                                <Dropdown.Item
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Select brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {brand.brands.map(brand =>
                                <Dropdown.Item
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter device name"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter device price"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"

                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}

                    >
                        Add description
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Enter name"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Enter  property"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success">Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export {CreateDevice};