import axios from "axios";
import { ChangeEventHandler, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
        const [activeTab, setActiveTab] = useState('admin');
        const [values, setValues] =useState({
          user: "",
          password: "",
        });
        
        const handleChange: ChangeEventHandler<HTMLInputElement> = ({target}) => {
          const {name, value}= target;
          setValues({...values, [name]: value})
        };
        
        
        const handleTabChange = (tab: string) => {
             setActiveTab(tab);
        };
        
        const handleSubmit = async (event: FormEvent ) => {
           event.preventDefault();
           const res = await axios.post('http://example.com',
           {
            user: values.user,
            password: values.password
           })
           console.log('Response:', res.data);
        }
          return (
            <div className="flex justify-center items-center min-h-screen from-blue-300 to-orange-300 bg-gradient-to-br space-y-4">
                <div className="from-blue-300 to-green-100 bg-gradient-to-br p-10 rounded-md shadow-lg" >
                    <div className="text-center text-3xl font-bold text-amber-500 pb-5">
                        <h1>LOGIN</h1>
                    </div>
                    <div className="flex space-x-4 pb-2  mb-10 text-bold text-cyan-400 text-lg">
                        <button 
                        onClick={() => handleTabChange('admin')}
                        className={` px-10 transition-all duration-300 ${ 
                        activeTab === 'admin' ? ' text-yellow-800 border-b-2 border-rose-400' : ' '
                        }`}
                        >Admin</button>

                        <button 
                        onClick={() => handleTabChange('superAdmin')}
                        className={` px-10 transition-all duration-300 ${ 
                        activeTab === 'superAdmin' ? ' text-yellow-800 border-b-2 border-rose-400' : ' '
                        }`}
                        >SuperAdmin</button>
                    </div>
                    <div>
                        <form 
                        onSubmit={handleSubmit}
                        >
                    <div className="mb-3">
                        <label className="block font-medium text-[#f84c9d]" htmlFor="user">UserName</label>
                        <input 
                        onChange={ handleChange }
                        value={values.user}
                        className="border-2 border-blue-500 rounded-md outline-none w-full p-2" type="text" name="user" id="user" placeholder="User Name"/>
                        </div>
                    <div className="mb-3">
                        <label className="block font-medium text-[#f84c9d]" htmlFor="password">Password</label>
                        <input 
                        onChange={handleChange}
                        value={values.password}
                        className="border-2 border-blue-500 rounded-md outline-none w-full p-2" type="password" name="password" id="password" placeholder="*******"/>
                    </div>
                    <div className="text-center mt-6 text-lg text-bold text-white flex justify-end">
                        <button  type="submit" className=" btn btn-primary "
                        >
                        Login</button>
                    </div>
                    <div className="text-center mt-6 flex justify-between">
                        <Link to="/reset"  className="underline text-blue-500 font-semibold">Reset Password?</Link>
                        <Link to="/forgot" className="underline text-blue-500 font-semibold">Forgot Password?</Link>
                    </div>
                    </form>
                    </div>
              </div>
          </div>
  )
}
