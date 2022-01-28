
import './User.css';
import fakeData from '../../fakeData/generated.json';
import UserDetails from '../UserDetails/UserDetails';
import { useState } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';



const User = () => {
     console.log(fakeData)
    const first15 = fakeData;
    const [user, setUser] = useState(first15);
    // for cart
    const [cart, setCart] = useState([]);

    const handleAddUser = (user) => {
        console.log('User added', user);
        const newCart = [...cart, user];
        setCart(newCart)
    }

    return (
        <div>
            <div className='user-container'>

                <div className='userDetails-container'>
                    
                        {
                            user.map(user => <UserDetails 
                               handleAddUser = {handleAddUser} 
                                user = {user}></UserDetails>)
                        }
                    
                </div>
                <div className="cartDetails-container">
                    
                    <Cart cart = {cart}></Cart>
                </div>
            </div>
            
            
        </div>
    );
};

export default User;