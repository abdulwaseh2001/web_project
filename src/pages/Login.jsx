import React , {UseState} from "react";
export default function Login()
{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    return (
        <div classname="p-6">
            <h2 classname="text-x1 mb-4">Login</h2>
            <input type="email" placeholder ="Email" className="block mb-2 p-2 border" value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type = "password" placeholder = "Password" className="block mb-2 p-2 border" value = {password} onChange={e=>setPassword(e.target.value)}/>
            <button className = "bg-blue-500 text white px-4 py-2">Login<button/></button>
"


        </div>




    );


}