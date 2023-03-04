import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {brandActions} from "../../redux";

const BrandBar = () => {

    const AllBrands = useSelector(state => state.brand);
    const dispatch = useDispatch();
    console.log(AllBrands.selectedBrand);
    return (

        <div className='d-flex flex-wrap justify-content-center '>
            {AllBrands.brands.map(brand =>
                <button
                    type="button"
                    key={brand.id}
                    className="p-2 ms-1 btn btn-outline-secondary "
                    onClick={() => dispatch(brandActions.setSelectedBrand(brand))}
                >
                    {brand.name}
                </button>
            )}
        </div>
    );
};

export {BrandBar};