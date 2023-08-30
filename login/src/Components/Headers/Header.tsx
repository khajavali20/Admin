import { Link } from "react-router-dom";

export default function HeaderPage() {
  return (
    <div className="flex justify-start  from-blue-500 to-emerald-500 bg-gradient-to-bl font-semibold text-lg text-white">
        <nav className="p-2">
          <ul className="flex flex-row space-x-10">
            <Link to=""><li>Home</li></Link>
            <Link to=""><li>Hospital</li></Link> 
            <Link to=""><li>Ambulance</li></Link>
            <Link to=""><li>Diagnostics</li></Link>
            <Link to=""><li>Elders Service</li></Link>
          </ul>
      </nav>
    </div>
  )
}
