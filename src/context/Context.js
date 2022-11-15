import React, { createContext } from 'react'
import App from '../App';
const Cart = createContext();
const Context = (props) => {
    return (
        <Cart.Provider>
            <div> context</div>
        </Cart.Provider>
    )
}

export default Context;