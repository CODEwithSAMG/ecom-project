import React from 'react';
import product_card from './productDatas';

const Product = () => {
    const mystyle = {
        color: "red",
        fontFamily: "Arial",
        fontSize: "2em",
        // fontWeight: 400,
    };
    const listItems = product_card.map((val) =>
        <div className='card' key={val.id}>
            <div className='card-img'>
                <img src={val.thumb} alt="image" />
            </div>
            <div className="card-header">
                <h3 style={{ textAlign: "center", paddingTop: 20 }}> {val.product_name}</h3>
                <p style={mystyle}>{val.description}</p>
                <p>{val.product_name}</p>
                <h4 id="price">{val.price}</h4>
                <div id="btn">Add to cart</div>
            </div>
        </div >
    );
    return (
        <div className="main-content">
            {listItems}
        </div>

    )
}

export default Product;