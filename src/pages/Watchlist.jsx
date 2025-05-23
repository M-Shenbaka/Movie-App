import GenreFilter from "../components/GenreFilter"
import { WatchListContext } from "../context/WatchListContext"
import Moviecard from "../components/Moviecard"
import { useState, useContext } from "react"

const Watchlist = ()=>
{
    const{watchlist,genrelist} = useContext(WatchListContext)
    const [search,setSearch] = useState("");
    const [selectedgenre,setSelectedGenre] = useState("");


    const filteredmovies = watchlist.filter((movie) =>
    
        movie.title.toLowerCase().includes(search.toLowerCase())
    ).filter((movie)=>{
        return !selectedgenre || movie.genre_ids.includes(Number(selectedgenre));
    })


    return(
        <div className="p-4 pt-16">
            <input type="text"
            placeholder="Search Watchlist..."
            className="p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-900 opacity-60 backdrop-blur-md
             text-white fixed left-1/2 transform -translate-x-1/2 z-50 "
             onChange={(e) =>(setSearch(e.target.value))}
            />
            <div className="mt-16 flex justify-center">
                <GenreFilter genrelist = {genrelist} setSelectedGenre ={setSelectedGenre}></GenreFilter>
            </div>
            <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
                {filteredmovies.map((movie) =>
                {
                    return <Moviecard key={movie.id} movie ={movie}/>
                })}
            </div>
        </div>

    )
}

export default Watchlist