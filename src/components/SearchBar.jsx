function SearchBar({search,setSearch}){
    return (
        <>
    <input type="text" className='w-full mb-4 border rounded-lg p-2'
         value={search} placeholder='Search notes'
         onChange={(a)=>setSearch(a.target.value)} />

        </>
    )
}
export default SearchBar;