export const Field = ({name, type, placeholder, tWStyle}) => {
  return (
    <input 
      type={type ? type : 'text'} 
      name={name} 
      id={name} 
      className={`py-1 text-[0.9rem] bg-transparent border-[0.5px] border-zinc-400 placeholder-zinc-400 outline-none text-zinc-400 indent-4 ${tWStyle}`} 
      placeholder={placeholder} 
    />
  )
}

export const TextArea = ({placeholder, tWStyle}) => {
  return(
    <textarea 
      name="" 
      id="" 
      cols="30" 
      rows="3"
      placeholder={placeholder}
      className={`${tWStyle} bg-transparent border-[0.5px] border-zinc-400 placeholder-zinc-400 outline-none text-zinc-400 resize-none p-2`}
      ></textarea>
  )
}