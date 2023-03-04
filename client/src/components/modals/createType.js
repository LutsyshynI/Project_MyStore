import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateType = ({show,onHide}) => {

    return (
        <div>

            <Modal show={show} onHide={onHide} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <Form>
                       <Form.Control
                       placeholder={'Enter type name'}
                       />
                   </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onHide}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export {CreateType};