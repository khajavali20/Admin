import axios from "axios";
import { ChangeEventHandler, useState } from "react"

function App() {
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

const handleSubmit = async (event) => {
   event.preventDefault();
   const res = await axios.post('http://example.com',
   {
    user: values.user,
    password: values.password
   })
   console.log('Response:', res.data);
}
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 space-y-4">
      <div className="bg-lime-300 p-10 rounded-md shadow-lg" >
          <div className="text-center text-3xl font-bold text-amber-500 pb-5">
            <h1>LOGIN</h1>
          </div>
          <div className="flex space-x-4 pb-2  mb-10 text-bold text-cyan-400 text-lg">
          <button 
          onClick={() => handleTabChange('admin')}
          className={` px-10 ${ 
            activeTab === 'admin' ? ' text-yellow-800 border-b-2 border-rose-400' : 'bg-lime-300 active:bg-indigo-600 transition-colors'
          }`}
          >Admin</button>

          <button 
          onClick={() => handleTabChange('superAdmin')}
          className={` px-10 ${ 
            activeTab === 'superAdmin' ? ' text-yellow-800 border-b-2 border-rose-400' : 'bg-lime-300 active:bg-indigo-600 transition-colors'
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
            <div className="text-center mt-6">
              <button  type="submit" className="px-10 py-1 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring[#0af0c9ee] rounded-md border-2"
              >
              {activeTab === 'admin' ? 'admin ' : 'superAdmin '}
              Login</button>
            </div>
            <div className="text-center mt-6 space-x-40">
              <a href="#" target="_blank" className="underline text-blue-500 font-semibold">Signup</a>
              <a href="#" target="_blank" className="underline text-blue-500 font-semibold">Reset Password?</a>

            </div>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default App
