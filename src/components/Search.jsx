const Search = () => {
  return (
    <div className="flex gap-4 items-center bg-black mt-2 h-10 rounded-lg">
        <img className="ml-4 h-4 filter invert" src="../src/assets/icons/search.png" alt="search" />
        <div>
            <input className="bg-black text-white caret-white outline-none" type="text" placeholder="Search or start new chat"/>
        </div>
    </div>
  )
}

export default Search