import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {typeActions} from "../../redux";
import {ListGroup, ListGroupItem} from "react-bootstrap";

const TypeBar = () => {
    const AllType = useSelector(state => state.type);
    const dispatch = useDispatch();
    return (
        <ListGroup className="overflow-auto  d-flex flex-column">

                {AllType.types.map(type =>
                    <button key={type.id}
                            type="button"
                            className=" btn btn-outline-secondary mb-1"
                            onClick={() => dispatch(typeActions.setSelectedType(type))}
                    >
                        {type.name}
                    </button>)}
        </ListGroup>
    );
};

export {TypeBar};