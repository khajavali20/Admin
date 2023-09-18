import axios from 'axios';
import {useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

type FormFields = {
  forgot: string;
};
export default function ForgotPasswordPage() {

  const passwordForm = useForm<FormFields>();

  const onSubmit = async (body: FormFields) => {
    axios.post("http://example.com", body);
    console.log(body);
  }

  return (
    <div className="flex justify-center items-center min-h-screen space-y-10 from-blue-300 to-orange-300 bg-gradient-to-br">
    <div className=" from-blue-300 to-green-300 bg-gradient-to-br p-20 rounded-md shadow-lg w-[24%] h-[400px]">
      
      <div className="text-start text-3xl text-bold text-amber-500  pb-4">
        <h1>FORGOT PASSWORD</h1>
      </div>
      <div className="">
      <form onSubmit={passwordForm.handleSubmit(onSubmit)}>
        <div className="">
          <label
           className="text-[#f84c9d] text-lg pt-4 block font-medium pb-2"
           htmlFor="reset">ForgotPassword</label>
          <input 
           className="w-full border-2 border-blue-500 outline-none p-2 rounded-md placeholder:text-sm placeholder:text-[#ffff] text-white"
          type="tel" placeholder="Phone Number" id="forgot"
          {...passwordForm.register("forgot",{
            required: {
              value: true,
              message: 'Phone Number is required'
            },
            pattern: {
              value: /^[6789][0-9]{9}$/,
              message: 'Please enter valid phone number'
            }
          })}
          />
          <p className='text-red-500 text-left text-sm mt-4'>{passwordForm.formState.errors.forgot?.message}</p>
        </div>
        <div className="pt-8 flex justify-center">
          <button className="btn btn-primary px-16" type="submit">Submit</button>
        </div>
        <div className="font-bold text-lg text-center pt-5">
          <Link
          to='/'
          className="underline text-blue-500"
          >
          Back to Login  </Link>
         
        </div>
      </form>
    </div>
    </div>
  </div>
  )
}
