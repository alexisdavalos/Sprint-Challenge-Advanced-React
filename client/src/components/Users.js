import React from 'react'
import UserCard from './userCard';
import {useDarkMode} from '../hooks/useDarkMode';

const Users = (props) =>{
    const [darkMode, setDarkMode] = useDarkMode(false, 'dark-mode');
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };
    
    console.log('Users.js:',props.Users)
    return(
        <>
        <h1>Women's World Cup Data</h1>
        <div className="dark-mode__toggle">
        <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
        />
        </div>
        <div className='Users'>
            {props.Users.map((item,index) => (
                <UserCard User={props.Users[index]} key={props.Users[index].id}/>
            ))}

        </div>
        </>
    )
}

export default Users;