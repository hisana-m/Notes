import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import NoteCard from "./components/Notecard";
import NoteForm from "./components/NoteForm";
import './App.css'
import SearchBar from "./components/SearchBar";
import NotesList from "./components/NotesList";
import ArchiveList from "./components/ArchiveList";

function App() {
const[title,setTitle]=useState("")

const[text,setText]=useState("")
const[color,Setcolor]=useState("red")

const[notes,setNotes]=useState(()=>{
  const saved=localStorage.getItem("notes")
  return saved ? JSON.parse(saved):[];
});

const[edit,setEdit]=useState(null)
const[search,setSearch]=useState("")

useEffect(()=>{
   console.log("Saving:", notes);
  localStorage.setItem("notes",JSON.stringify(notes))
},[notes]);

function Addnote(){

  if(text.trim()===""){
    alert("Content is Empty,Please type something!");
    return;
  }

  if(edit===null){
       const note={
    id :Date.now(),
    title:title,
    content:text,
    color:color,
    archived:false,
    pin:false
  };
  
  setNotes([...notes,note])
  alert("Note added succesfully")
  console.log(note);
  }
  else{
    const updatednotes=notes.map((note)=>{
      if(note.id===edit){
        return {
          id:note.id,
          title:title,
          content:text,
          color:color
        }
      }
      return note;
    });
    setNotes(updatednotes);
    setEdit(null)
    alert("Note Updated");
  }

  setTitle("")
  setText("")
  Setcolor("red")
}

function Delete(id){
  const update=notes.filter((no)=>no.id !== id)
  setNotes(update);
 
}

function Edit(note){
  setTitle(note.title);
  setText(note.content);
  Setcolor(note.color)
  setEdit(note.id);
  
}

 function Archive(id){
 setNotes(
  notes.map((note)=>{
    if(note.id===id){
      return {
        ...note,archived:true,
      }
    }
    else{
      return note;
    }
  })
 )}

 function Unarchive(id){
  setNotes(
    notes.map((note)=>{
      if(note.id===id){
        return {
          ...note,
          archived:false,
        }
      }
      else{
        return note;
      }
    })
  )
 }


 function pinned(id){
   setNotes(
    notes.map((note)=>{
      if(note.id===id){
        return {
          ...note,
          pin:!note.pin
        }
      }
      else{
        return note;
      }
    })
   )
 }

 const sorted=[...notes].sort((a,b)=>{
    return b.pin-a.pin;
  })


  return (
    <>
    <div className="min-h-screen bg-gray-300 p-10">

      <h1 className="text-4xl font-bold text-center">📝MY NOTES</h1>

      <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
      
       <SearchBar 
       search={search}
       setSearch={setSearch}/>


        <NoteForm title={title}
        setTitle={setTitle}
        text={text}
        setText={setText}
        color={color}
        Setcolor={Setcolor}
        Addnote={Addnote}
        edit={edit}/>
           

      </div>

      <div className='mt-8'>
        <h2 className='text-2xl font-bold'>Your Notes</h2>

      <NotesList notes={sorted.filter((note)=>{
    return (
      (note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase()))
      &&
      !note.archived
        );
      })}  
          Edit={ Edit}
          Delete={ Delete}
          Archive={ Archive}
          pinned={ pinned}/>
  

      </div>
            <h2 className='text-2xl font-bold'>Archived Notes</h2>

          <ArchiveList
          notes={sorted.filter((note)=>note.archived)}
          Edit={ Edit}
          Delete={ Delete}
          Unarchive={ Unarchive}
          Archive={ Archive}
          pinned={ pinned}
          
          />
    </div>
      
    </>
  )
}

export default App