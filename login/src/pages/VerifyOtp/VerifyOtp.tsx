import axios from "axios";
import { useForm } from "react-hook-form";

type FormFields = {
  key: string;
  otp: string;
  password: string;
  confirmPassword: string;
};

export default function VerifyOtpPage() {
  const verifyForm = useForm<FormFields>();
  const onSubmit = async (body: FormFields) => {
    axios.post("http:example.com", body);
    console.log(body);
  }
  return (
    <div className="flex justify-center items-center min-h-screen from-blue-300 to-orange-300 bg-gradient-to-tr space-y-5">
      <div className="from-blue-300 to-green-300 bg-gradient-to-br rounded-md shadow-lg p-20 w-[28%]">
        <div className="text-center text-3xl font-bold text-amber-400 pb-5">
          <h1>VERIFY OTP</h1>
        </div>
        <form onSubmit={verifyForm.handleSubmit(onSubmit)}>
          <div>
            <label
              className="block font-medium text-[#f84c9d] py-3"
              htmlFor="key"
            >
              KEY
            </label>
            <input
              className="w-full border-2 border-blue-500 outline-none p-2 rounded-md placeholder:text-sm placeholder:text-[#ffff] text-white"
              type="text"
              placeholder="Provide KEY"
              id="key"
              {...verifyForm.register("key", {
                required: {
                  value: true,
                  message: 'Key is required'
                }
              })}
            />
            <p className="text-red-500 text-sm text-left mt-1">{verifyForm.formState.errors.key?.message}</p>
          </div>
          <div>
            <label
              className="block font-medium text-[#f84c9d] py-2"
              htmlFor="otp"
            >
              OTP
            </label>
            <input
              className="w-full border-2 border-blue-500 outline-none p-2 rounded-md placeholder:text-sm text-white placeholder:text-[#ffff]"
              type="number"
              placeholder="Provide OTP"
              id="otp"
              {...verifyForm.register("otp",{
                required: {
                  value: true,
                  message: 'Otp is required'
                }
              })}
            />
            <p className="text-red-500 text-sm text-left mt-1">{verifyForm.formState.errors.otp?.message}</p>
          </div>
          <div>
            <label
              className="block font-medium text-[#f84c9d] py-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border-2 border-blue-500 rounded-md outline-none w-full p-2 placeholder:text-white"
              id="password"
              type="password"
              placeholder="* * * * * * * *"
              {...verifyForm.register("password", {
                required: {
                  value: true,
                  message: 'Password is required'
                }
              })}
            />
            <p className="text-red-500 text-sm text-left mt-1">{verifyForm.formState.errors.password?.message}</p>
          </div>
          <div>
            <label
              className="block font-medium text-[#f84c9d] py-2"
              htmlFor="password"
            >
              ConfirmPassword
            </label>
            <input
              className="border-2 border-blue-500 rounded-md outline-none w-full p-2 placeholder:text-white"
              id="confirmPassword"
              type="password"
              placeholder="* * * * * * * *"
              {...verifyForm.register("confirmPassword", {
                required: {
                  value: true,
                  message: 'Confirm Password is required'
                }
              })}
            />
            <p className="text-red-500 text-sm text-left mt-1">{verifyForm.formState.errors.confirmPassword?.message}</p>
          </div>
          <div className="mt-8 text-center">
            <button className="btn btn-primary px-40" type="submit">
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
