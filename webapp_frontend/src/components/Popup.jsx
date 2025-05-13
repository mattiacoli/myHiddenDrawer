import { useEffect, useState } from "react"



export default function Popup() {

  const [mail, setMail] = useState(() => {
    const saved = localStorage.getItem('mail')
    const initialValue = saved
    return initialValue || ''
  })

  localStorage.setItem("key", "value")


  useEffect(() => {
    localStorage.setItem('mail', mail)
  }, [mail])


  return (
    <div className="popup">

      <form>
        <input
          type="text"
          className="form-control"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="your mail"
          aria-label="mail"
        />
        <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}