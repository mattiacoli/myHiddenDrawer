import { useEffect, useState } from "react"
import emailjs from 'emailjs-com'
import styles from './Popup.module.css'


export default function Popup() {
  const [isOpen, setIsOpen] = useState(false)

  const [mail, setMail] = useState(() => {
    const saved = localStorage.getItem('mail')
    const initialValue = saved
    return initialValue || ''
  })

  useEffect(() => {
    const savedMail = localStorage.getItem('mail')
    if (!savedMail || savedMail.trim() === '') {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (mail.trim()) {
      setIsOpen(false)
      localStorage.setItem('mail', mail)
      sendEmail(mail)
    }
  }

  function sendEmail(mail) {
    // Create template parameters object
    const templateParams = {
      email: mail,
      // Add any other template parameters you need
    };

    emailjs.send(
      'service_0jrbiu5',
      'template_mbn6r8f',
      templateParams,
      'Yl4NruAJhvwFTSBmI'
    )
      .then((result) => {
        window.location.reload();
        console.log(`mail inviata a: ${mail}`, result.status);
      })
      .catch((error) => {
        console.log('errore invio:', error.text);
      });
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
        >
          <i className="bi bi-x-circle"></i>
        </button>

        <div className="container">
          <h3 className="text-center mb-4">Ben<strong>venut*</strong> <br /> nel lato piccante dello shopping! 🔥</h3>

          <div className="message text-center mb-4">
            <p >Hai appena messo piede nel tuo nuovo sexy posto felice! </p>
            <p>💌 Iscriviti alla newsletter e resta sempre sul pezzo (…e sul piacere).
              Tips piccanti, novità bollenti e consigli senza tabù, direttamente nella tua inbox.
              Perché il piacere, si sa, ama essere coltivato… con stile. 😏.</p>
            <p> 👉 Nessun imbarazzo, solo vibrazioni positive.</p>
          </div>


          <form onSubmit={handleSubmit} className="text-center">
            <input
              type="email"
              className="form-control mb-3 rounded-4"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Inserisci la tua email"
              required
            />
            <button
              type="submit"
              className={`btn rounded-pill ${styles.btn}`}
            >
              Iscriviti
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}