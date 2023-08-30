
export default function ResetPasswordPage() {
  return (
    <div className="flex justify-center items-center min-h-screen space-y-10 from-blue-300 to-orange-300 bg-gradient-to-br">
      <div className=" from-blue-300 to-green-300 bg-gradient-to-br p-10 rounded-md shadow-lg">
        
        <div className="text-start text-3xl text-bold text-amber-500  pb-4">
          <h1>RESET PASSWORD</h1>
        </div>
        <div className="">
        <form>
          <div className="">
            <label
             className="text-[#f84c9d] text-lg pt-4 block font-medium"
             htmlFor="reset">ResetPassword</label>
            <input 
             className="input input-bordered input-primary w-full max-w-xs"
            type="text" placeholder="Admin Id" name="reset" id="reset"/>
          </div>
          <div className="pt-8 flex justify-end">
            <button className="btn btn-accent" type="submit">Submit</button>
          </div>
          <div className="font-bold text-lg text-center pt-5">
            <a href="#" className="underline text-blue-500">Back to Login</a>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}
