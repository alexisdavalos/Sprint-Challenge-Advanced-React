import React from 'react'
//Props.Users Object
//name: "Stefanie van der Gragt"
//country: "Netherlands"
//searches: 1
//id: 90
const UserCard = (props) =>{
    console.log('userCard.js | Props:', props)
    const cardStyle = {

    }
    return(
        <div className='UserCard'>
            <h2>{props.User.name}</h2>
            <p>country: {props.User.country}</p>
            <p># of Searches: {props.User.searches}</p>
        </div>
    )
}

export default UserCard;