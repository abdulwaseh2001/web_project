import React,{useEffect,useState,uxeState} from 'react';
export default function DarkModeToggle() {
    const[dark,setDark] = useState(localStorage.getItem('theme')=='dark');

    useEffect(() => {
        if(dark){
            document.documentElement.classlist.add('dark')
            localStorage.setItem('theme','dark')



        }
        else{
            document.documentElement.classlist.remove('dark');
            localStorage.setItem('theme','light');


        }

    },[dark]);
    return(
        <button onClick={()=> setDark(!dark)} classnamer = "text-sm">
            {dark ? 'light mode' : 'dark mode'}
        </button>   


    );
}