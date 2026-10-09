import NoteCard from "./Notecard";


function ArchiveList({
    notes,
    Edit,
    Delete,
    Unarchive,
    Archive,
    pinned
}){
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
          {
            notes.map((note)=>(
         <NoteCard
          key={note.id}
          note={note}
          Edit={ Edit}
         Delete={Delete}
         Unarchive={Unarchive}
         Archive={Archive}
         pinned={pinned}/>
            ))
          }
        </div>
    )
    
}
export default ArchiveList;