function NoteForm({
    title,setTitle,
    text,setText,
    color,Setcolor,
    Addnote,
    edit
}){
    return (
        <>
         <label className='block font-medium mb-2'>Title</label>
          <input type="text" value={title}
          maxLength={100} placeholder='Enter the Title'
          onChange={(e)=>setTitle(e.target.value)} className='w-full border border-gray-300 rounded-lg p-3' />
          {/* <p>{title}</p> */}
          <p className='text-sm text-gray mt-1'>{title.length}/100</p>

          <label className='block font-medium mb-2'>Content</label>
          <textarea  value={text} placeholder='Write Your Note Here' maxLength={500}
          onChange={(a)=>setText(a.target.value)}
          className='w-full border border-gray-300 rounded-lg p-3 h-30 resize-none'></textarea>
         {/* <p>{text}</p> */}
         <p className='text-sm text-gray-600 mt-1'>{text.length}/500</p>

          <label className='block font-medium mt-4 mb-2'>Colours</label>
          <div className='flex gap-3'>
            <div className='w-8 h-8 bg-red-300 rounded-full' onClick={()=>Setcolor("red")}></div>
            <div className='w-8 h-8 bg-blue-300 rounded-full'  onClick={()=>Setcolor("blue")}></div>
            <div className='w-8 h-8 bg-green-300 rounded-full'  onClick={()=>Setcolor("green")}></div>
            <div className='w-8 h-8 bg-yellow-300 rounded-full'  onClick={()=>Setcolor("yellow")}></div>
            {/* <p>selected color:{color}</p> */}

          </div>
          <button className='w-full bg-blue-500 text-white py-3
           rounded-lg mt-5 hover:bg-blue-700' onClick={Addnote}>
            {edit===null?"Add Note":"Update Note"}
           </button>
           </>
    )
}

export default NoteForm