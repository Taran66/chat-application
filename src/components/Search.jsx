const Search = () => {
  return (
    <div className="flex gap-4 items-center bg-slate-900 h-10 rounded-lg">
        <img className="ml-4 h-4 filter invert" src="../src/assets/icons/search.png" alt="search" />
        <input className="bg-slate-900 text-white caret-white outline-none w-10/12 h-full" type="text" placeholder="Search or start new chat"/>
    </div>
  )
}

export default Search