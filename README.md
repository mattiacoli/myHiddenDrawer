# My Hidden Drawer - E-commerce di Prodotti Intimi

Un e-commerce moderno per prodotti intimi con focus sulla discrezione, inclusività e facilità d'uso. Questa applicazione è composta da un frontend React e un backend API con Node.js ed Express.

## 🌐 Panoramica

My Hidden Drawer è un e-commerce specializzato nella vendita di prodotti intimi come preservativi e sex toys. Il sito si distingue per il suo approccio inclusivo, discreto e user-friendly, con un design moderno e una narrativa di brand che abbatte i tabù intorno alla sessualità.

## 📋 Funzionalità

### Frontend (React)

#### Pagine principali:
- ✅ **Homepage** - Vetrina principale con video hero, categorie di prodotti, ultimi arrivi, prodotti in offerta e recensioni
- ✅ **Pagina prodotto** - Visualizzazione dettagliata con galleria immagini, descrizione, prezzo, recensioni e prodotti correlati
- ✅ **Categorie** - Filtrazione dei prodotti per categoria
- ✅ **Checkout** - Processo di acquisto completo
- ✅ **Wishlist** - Salvataggio dei prodotti preferiti
- ✅ **FAQ** - Domande frequenti
- ✅ **About Us** - Chi siamo e valori aziendali
- ✅ **Privacy Policy** - Informativa sulla privacy
- ✅ **Terms & Conditions** - Termini e condizioni
- ✅ **Shipping & Returns** - Informazioni su spedizioni e resi
- ✅ **Contact Us** - Form di contatto
- ✅ **404 Page** - Pagina personalizzata per URL non esistenti

#### Componenti chiave:
- ✅ **Header/Navbar** - Con menu di navigazione, search bar e icone per carrello/wishlist
- ✅ **Footer** - Links a pagine legali, social e sezioni principali
- ✅ **Product Card** - Visualizzazione dei prodotti in griglia con immagine, nome, prezzo e pulsanti azione
- ✅ **Review Form** - Form per inviare recensioni sui prodotti
- ✅ **Cart Panel** - Pannello laterale per visualizzare e gestire il carrello
- ✅ **Popup** - Popup per iscrizione alla newsletter

#### Funzionalità utente:
- ✅ **Carrello** - Aggiunta/rimozione prodotti, aggiornamento quantità
- ✅ **Wishlist** - Salvataggio prodotti preferiti in localStorage
- ✅ **Form checkout** - Raccolta dati cliente e creazione ordine
- ✅ **Conferma ordine** - Email di conferma al cliente e notifica al venditore
- ✅ **Ricerca prodotti** - Ricerca in tempo reale con dropdown dei risultati
- ✅ **Recensioni** - Visualizzazione e invio di recensioni sui prodotti

### Backend (Node.js + Express)

#### API Endpoints:

**Prodotti:**
- `GET /api/v1/products` - Lista di tutti i prodotti
- `GET /api/v1/products/:slug` - Dettaglio di un singolo prodotto con immagini, categorie e tag
- `GET /api/v1/products/related/:slug` - Prodotti correlati in base a categorie e tag

**Ordini:**
- `POST /api/v1/orders/new_order` - Creazione di un nuovo ordine

**Clienti:**
- `POST /api/v1/customers/new_customer` - Registrazione nuovo cliente durante il checkout

**Recensioni:**
- `GET /api/v1/reviews` - Lista di tutte le recensioni
- `POST /api/v1/reviews` - Aggiunta nuova recensione

#### Database MySQL:
- ✅ **Products** - Tabella prodotti con prezzi, sconti, slug, descrizioni
- ✅ **Product Images** - Galleria immagini prodotto
- ✅ **Categories** - Categorie prodotti
- ✅ **Tags** - Tag prodotti per correlazioni
- ✅ **Customers** - Dati clienti
- ✅ **Orders** - Ordini effettuati
- ✅ **Reviews** - Recensioni degli utenti

## 🔧 Tecnologie utilizzate

### Frontend:
- **React** - Libreria UI
- **React Router** - Navigazione
- **Context API** - Gestione stato globale
- **Bootstrap** - Framework CSS
- **EmailJS** - Invio email di conferma
- **localStorage** - Persistenza wishlist

### Backend:
- **Node.js** - Runtime JavaScript lato server
- **Express** - Framework web
- **MySQL2** - Connettore database
- **CORS** - Middleware per richieste cross-origin

## 📱 Responsive Design

L'applicazione è completamente responsive con breakpoints specifici per:
- Desktop e tablet (≥ 768px)
- Tablet piccoli (< 768px)
- Mobile (< 576px)
- Mobile piccoli (< 440px e < 320px)

## 🚀 Implementazione step-by-step

### 1. Setup dell'ambiente
- Creazione progetto React con Vite
- Setup del server Express e connessione al database
- Configurazione delle variabili d'ambiente

### 2. Backend API
- Connessione al database MySQL
- Creazione delle rotte per prodotti, ordini, clienti e recensioni
- Implementazione controllers per ogni risorsa
- Gestione degli errori e middleware per risorse non trovate

### 3. Struttura Frontend
- Setup del routing con React Router
- Implementazione tema e stili globali
- Creazione layout base (Header, Footer, container principale)
- Implementazione Context API per lo stato globale

### 4. Funzionalità Prodotti
- Fetch dei prodotti dall'API
- Visualizzazione prodotti in griglia e dettaglio singolo
- Implementazione galleria immagini prodotto
- Sistema di filtraggio per categoria e tag

### 5. Funzionalità Carrello e Wishlist
- Sistema carrello con aggiunta/rimozione prodotti
- Gestione quantità prodotti
- Implementazione wishlist con persistenza in localStorage
- Pannello carrello slide-in per quick view

### 6. Processo di Checkout
- Form per inserimento dati cliente
- Calcolo del totale con gestione spese di spedizione
- Integrazione EmailJS per notifiche
- Creazione dell'ordine tramite API

### 7. Recensioni e contenuti
- Sistema di visualizzazione recensioni prodotto
- Form per invio nuove recensioni
- Creazione pagine statiche (About, FAQ, Policy)
- Form di contatto

### 8. Ottimizzazione e UI/UX
- Implementazione responsive design per tutti i dispositivi
- Feedback visivi per operazioni utente (alerts, toast)
- Loading states e gestione errori
- Design discreto e user-friendly

### 9. Funzionalità extra
- Popup newsletter
- Prodotti correlati
- Pagina 404 personalizzata
- Barra di ricerca con suggerimenti in tempo reale

## 🌟 Caratteristiche distintive

1. **Focus sulla privacy e discrezione** - Elementi narrativi, packaging discreto, comunicazione sensibile
2. **Design inclusivo** - Linguaggio inclusivo e contenuto adatto a diverse identità e orientamenti
3. **UX narrativa** - Elementi di copywriting ironici e leggeri che alleggeriscono un tema spesso tabù
4. **Discrezione nelle spedizioni** - Enfasi sulla privacy della consegna (confezioni anonime)

## 📈 Future implementazioni possibili

- Sistema di autenticazione utenti
- Gestione account e cronologia ordini
- Filtri avanzati per prodotti
- Sistema di pagamento integrato (Stripe, PayPal)
- Dashboard admin per gestione prodotti e ordini
- Programma fedeltà e coupon
- Blog con articoli educativi

## 🔧 Setup e installazione

### Prerequisiti
- Node.js e npm
- Database MySQL

### Backend
1. Navigare nella directory `webapp_backend_api`
2. Installare le dipendenze: `npm install`
3. Configurare le variabili d'ambiente nel file `.env`
4. Avviare il server: `npm start`

### Frontend
1. Navigare nella directory `webapp_frontend`
2. Installare le dipendenze: `npm install`
3. Avviare l'applicazione: `npm run dev`

---

## Conclusione

My Hidden Drawer è un e-commerce moderno che combina funzionalità tecniche robuste con un approccio narrativo che normalizza prodotti spesso considerati "tabù". L'applicazione dimostra come un design inclusivo e un'esperienza utente ben studiata possano rendere confortevole l'acquisto di prodotti intimi online, mantenendo al contempo gli standard di un e-commerce professionale.