import React, { createContext } from 'react'
const Cart = createContext();
const Context = (props) => {
    return (
        <Cart.Provider>
            <div>Context</div>
        </Cart.Provider>
    )
}

export default Context;