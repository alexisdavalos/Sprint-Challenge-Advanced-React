import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
    useEffect(() =>{
        const body = document.querySelector('.App-header');
        let toggle = document.querySelector('.dark-mode__toggle');
        if(darkMode){
            body.classList.add('dark_mode');
           
        }else{
            body.classList.remove('dark_mode');
           
        }
    },[darkMode])

    return [darkMode, setDarkMode];
}