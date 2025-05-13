import { useEffect, useState } from "react"
import styles from './Popup.module.css'

export default function Popup() {
  const [isOpen, setIsOpen] = useState(() => {
    const savedMail = localStorage.getItem('mail')
    return !savedMail
  })

  const [mail, setMail] = useState(() => {
    const saved = localStorage.getItem('mail')
    const initialValue = saved
    return initialValue || ''
  })

  useEffect(() => {
    localStorage.setItem('mail', mail)

  }, [mail])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (mail) {
      setIsOpen(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>

        <div className="container">
          <h3 className="text-center mb-4">Iscriviti alla newsletter</h3>
          <form onSubmit={handleSubmit} className="text-center">
            <input
              type="email"
              className="form-control mb-3"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Inserisci la tua email"
              required
            />
            <button
              type="submit"
              className="btn btn-primary"
            >
              Iscriviti
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}