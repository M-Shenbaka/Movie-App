const GenreFilter = ({genrelist,setSelectedGenre})=>
{

    return(
        <select className="p-2 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white border rounded "
            onChange={(e)=> setSelectedGenre(e.target.value)}
        >
            <option>All genre</option>
            {genrelist.map((genre) =>
            {
                return(
                    <option key={genre} value={genre.id}>{genre.name}</option>
                )
            })}
        </select>

    )
}

export default  GenreFilter
