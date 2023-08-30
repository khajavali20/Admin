
export default function VerifyOtpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen from-blue-300 to-orange-300 bg-gradient-to-tr space-y-5">
      <div className="from-blue-300 to-green-300 bg-gradient-to-br rounded-md shadow-lg p-10">
        <div className="text-center text-3xl font-bold text-amber-400 pb-5">
            <h1>VERIFY OTP</h1>
        </div>
        <form action="">
            <div>
                <label className="block font-medium text-[#f84c9d]" htmlFor="key">KEY</label>
                <input type="text" placeholder="Provide KEY"  name="key" id="key" />
            </div>
            <div>
                <label className="block font-medium text-[#f84c9d]" htmlFor="otp">OTP</label>
                <input type="number" placeholder="Provide OTP" name="otp" id="otp" />
            </div>
            <div>
                <label className="block font-medium text-[#f84c9d]" htmlFor="password">Password</label>
                <input className="border-2 border-blue-500 rounded-md outline-none w-full p-2" name="password" id="password1" type="password" placeholder="********"/>
            </div>
            <div>
                <label className="block font-medium text-[#f84c9d]" htmlFor="password">ConfirmPassword</label>
                <input className="border-2 border-blue-500 rounded-md outline-none w-full p-2" name="password" id="password2" type="password" placeholder="********"/>
            </div>
            <div>
                <button className="btn btn-primary" type="submit">Verify</button>
            </div>
        </form>
      </div>
    </div>
  )
}
