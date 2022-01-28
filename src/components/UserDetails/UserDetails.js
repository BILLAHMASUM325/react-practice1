import React from 'react';
import './UserDetails.css';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faUserPlus} from '@fortawesome/free-solid-svg-icons';

const UserDetails = (props) => {
    // console.log(props)
    
    return (
        <div className='userDetails'>
            <div>
                
               <img src={props.user.picture} alt="" />
            </div>
            <div className='personDetails'>
            <h4>Name: {props.user.name}</h4>
                <p>Phone: {props.user.phone}</p>
                <p>Address: {props.user.address}</p>
                <p>Salary: {props.user.salary}</p>
                
                <button className='main-button'
                onClick={() => props.handleAddUser(props.user)}
                >
                    <FontAwesomeIcon icon ={faUserPlus}/> Add person to cart

                </button>
            </div>
        </div>
    );
};

export default UserDetails;