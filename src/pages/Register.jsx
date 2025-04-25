import React,{useState} from 'react';
export default function Register()
{
    const [username,setUsername] = useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] = useState('')

    return(
        <div className = "p-6">
            <h2 className = "text-x1 mb-4">Register</h2>
            <input type="text" placeholder="UserName" className='block mb-2 p-2 border' value={username} onChange={e=>setUsername(e.target.value)}/> 
            <input type="email" placeholder="Email" className='block mb-2 p-2 border' value={email} onChange={e=> setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" className='block mb-2 p-2 border' value={password} onChange={e=>setPassword(e.target.value)}/>
            <button className = "bg-blue-500 text white px-4 py-2">Register</button>



        </div>
    


    );
}