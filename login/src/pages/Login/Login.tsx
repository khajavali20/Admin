import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type FormFields = {
  userId: string;
  password: string;
};

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("admin");
  const navigate = useNavigate();

  const loginForm = useForm<FormFields>();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const onSubmit = async (body: FormFields) => {
    axios
      .post("http://example.com", body)
      .then((res) => res.data)
      .then((data) => {
        if (data.status === "MFA_REQUIRED") {
          navigate("/verify", { state: { token: data.token } });
        }
      });
      console.log(body);
  };
  return (
    <div className="flex justify-center items-center min-h-screen from-blue-300 to-orange-300 bg-gradient-to-br space-y-4">
      <div className="from-blue-300 to-green-100 bg-gradient-to-br p-10 rounded-md shadow-lg">
        <div className="text-center text-3xl font-bold text-amber-500 pb-5">
          <h1>LOGIN</h1>
        </div>
        {/* Tabs */}
        <div className="flex space-x-4 pb-2  mb-10 text-bold text-cyan-400 text-lg">
          <button
            onClick={() => handleTabChange("admin")}
            className={` px-10 transition-all duration-300 ${
              activeTab === "admin"
                ? " text-yellow-800 border-b-2 border-rose-400"
                : " "
            }`}
          >
            Admin
          </button>

          <button
            onClick={() => handleTabChange("superAdmin")}
            className={` px-10 transition-all duration-300 ${
              activeTab === "superAdmin"
                ? " text-yellow-800 border-b-2 border-rose-400"
                : " "
            }`}
          >
            SuperAdmin
          </button>
        </div>
        <div>
          <form onSubmit={loginForm.handleSubmit((e) => onSubmit(e))}>
            <div className="mb-3">
              <label
                className="block font-medium text-[#f84c9d]"
                htmlFor="userId"
              >
                UserId
              </label>
              <input
                id="userId"
                {...loginForm.register("userId", {
                  required: {
                    value: true,
                    message: "Email or Phone Number required",
                  },
                })}
                className="border-2 border-blue-500 rounded-md outline-none w-full p-2"
                type="text"
                placeholder="User Name"
              />
              <p className="text-red-500 text-left text-sm">{loginForm.formState.errors.userId?.message}</p>
            </div>
            <div className="mb-3">
              <label
                className="block font-medium text-[#f84c9d]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                {...loginForm.register("password", {
                  required: {
                    value: true,
                    message: 'Password is required'
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    message:
                      "Password should be 1 letter, 1 number, 1 character",
                  },
                })}
                className="border-2 border-blue-500 rounded-md outline-none w-full p-2"
                type="password"
                placeholder="*******"
                minLength={8}
              />
              <p className="text-red-500 text-left text-sm">{loginForm.formState.errors.password?.message}</p>
            </div>
            <div className="text-center mt-6 text-lg text-bold text-white flex justify-end">
              <button type="submit" className=" btn btn-primary ">
                Login
              </button>
            </div>
            <div className="text-center mt-6 flex justify-between">
              <Link
                to="/reset"
                className="underline text-blue-500 font-semibold"
              >
                Reset Password?
              </Link>
              <Link
                to="/forgot"
                className="underline text-blue-500 font-semibold"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
