import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    
    let name = '';
    let yearlySalary = 0;
    let monthlySalary = 0;
    let companyName = '';
    for(let i=0; i < cart.length; i++){
        const user = cart[i];
        monthlySalary = user.salary
        yearlySalary = (user.salary) * 12;
        companyName = user.company;
        name = user.name

    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Company Name: {companyName}</p>
             <p>Monthly Salary: {monthlySalary}</p>
            <p>Yearly Salary: {yearlySalary}</p>

        </div>
    );
};

export default Cart;