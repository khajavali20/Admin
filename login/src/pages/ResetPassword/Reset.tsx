import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormFields = {
  reset: string;
};

export default function ResetPasswordPage() {
  const otpForm = useForm<FormFields>();

  const onSubmit = async (body: FormFields) => {
    axios.post("http://example.com", body);
    console.log(body);
  }
  return (
    <div className="flex justify-center items-center  min-h-screen space-y-10 from-blue-300 to-orange-300 bg-gradient-to-br">
      <div className=" from-blue-300 to-green-300 bg-gradient-to-br p-20  rounded-md shadow-lg w-[25%]">
        <div className="text-start text-3xl text-bold text-amber-500  pb-4">
          <h1>RESET PASSWORD</h1>
        </div>
        <div className="">
          <form onSubmit={otpForm.handleSubmit(onSubmit)}>
            <div className="">
              <label
                className="text-[#f84c9d] text-lg pt-4 block font-medium pb-3"
                htmlFor="reset"
              >
                ResetPassword
              </label>
              <input
                className="w-full border-2 border-blue-500 outline-none p-2 rounded-md placeholder:text-sm placeholder:text-[#ffff] text-white"
                type="text"
                placeholder="Admin Id"
                id="reset"
                {...otpForm.register("reset", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    message:
                      "Password should be 1 letter, 1 character, 1 symbol",
                  },
                })}
              />
              <p className="text-red-500 text-sm text-left mt-3">{otpForm.formState.errors.reset?.message}</p>
            </div>
            <div className="pt-8 flex justify-center">
              <button className="btn btn-primary px-16 " type="submit">
                Submit
              </button>
            </div>
            <div className="font-bold text-lg text-center pt-5">
              <Link to="/" className="underline text-blue-500">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
