function NoteCard({note,Edit,Delete,Archive,pinned,Unarchive}){
    return (
    <div key={note.id} className={`p-4 rounded-xl shadow-md ${
             note.color === "red"
            ? "bg-red-300"
          : note.color === "blue"
          ? "bg-blue-300"
          : note.color === "green"
          ? "bg-green-300"
          : "bg-yellow-300"
          }`}>
            <button onClick={()=>pinned(note.id)}>
              {note.pin?"pinned":"pin"}
            </button>
                <h3 className='font-bold text-lg'>{note.title}</h3>
                <p className='whitespace-pre-line'>{note.content}</p>
                <button onClick={()=>Delete(note.id)}>  -delete-    </button>
                <button onClick={()=>Edit(note)}>   -edit-   </button>

            {note.archived ? (
            
             <button onClick={() => Unarchive(note.id)}> -unarchive-      </button>
            ) : (
             <button onClick={() => Archive(note.id)}>  -archive-   </button>
            )}
              </div>
            )
        }

export default NoteCard;