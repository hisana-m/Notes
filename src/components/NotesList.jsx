import NoteCard from "./NoteCard.jsx";

function NotesList({
    notes,
    Edit,
    Delete,
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
          Edit={Edit}
         Delete={Delete}
         Archive={Archive}
         pinned={pinned}/>
            ))
          }
        </div>
    )
}

export default NotesList;