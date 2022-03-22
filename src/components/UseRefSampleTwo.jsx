import {useState, useEffect, useRef} from 'react'

const UseRefSampleTwo = () => {
  const [name, setName] = useState('')
  const renderRef = useRef(1)
  const prevName = useRef('')

  useEffect(() =>{
    renderRef.current = renderRef.current + 1
    prevName.current = name;
  },[name])
  return (
    <div>
      <br/>
     <h2 className='mb-2'>Render {renderRef.current} </h2>
     <h2>Previous Name State:{prevName.current}</h2>
      <form>
        <input type="text" value={name} className="form-control mb-3" onChange={(event)=>setName(event.target.value)} />
      </form>
    </div>
  )
}

export default UseRefSampleTwo;