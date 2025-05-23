import { useContext } from "react"
import { Link } from "react-router-dom"
import { WatchListContext } from "../context/WatchListContext"

const Navbar = ()=>
{
    const{watchlist} = useContext(WatchListContext)
    return(
        <div className="flex justify-between bg-gray-900 text-white p-4 w-full fixed z-50">
            <Link to={"/"} className="text-xl font-bold">MovieApp</Link>
            <Link to=  "/watchlist" className="text-xl">Watchlist({watchlist.length})</Link>
        </div>

    )
}

export default Navbar