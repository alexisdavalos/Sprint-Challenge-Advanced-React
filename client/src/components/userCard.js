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
            <h3 data-testid="username" >{props.User.name}</h3>
            <p>Country: {props.User.country}</p>
            <p># of Google Searches: {props.User.searches}</p>
        </div>
    )
}

export default UserCard;