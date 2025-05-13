import { useGlobalContext } from "../contexts/GlobalContext"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
    const { cart, setCart, setWishlist } = useGlobalContext()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();

        // Crea il nuovo cliente
        fetch('http://localhost:3000/api/v1/customers/new_customer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(customer => {
                console.log("Risposta dal server:", customer)
                const customer_id = customer.id;

                //Crea il nuovo ordine
                const orderData = {
                    customer_id: customer_id,
                    order_number: Math.floor(Math.random() * 1000),
                    price: total
                };

                return fetch('http://localhost:3000/api/v1/orders/new_order', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(orderData),
                });
            })
            .then(res => res.json())
            .then(order => {
                console.log("Ordine creato:", order);
                setCart([])
                setWishlist([])
                navigate('/order-confirmation');
            })
            .catch(err => console.error("Errore:", err));
    }
    //Variabile per il totale
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        phone_number: '',
        email: '',
        address: '',
        postcode: '',
        city: '',
        province: '',
        country: ''
    });

    // Arrays per dati select
    const capOptions = [
        '10011', '10060', '10070', '10010', '10040', '10080', '10091', '10020',
        '10051', '10052', '10092', '10012', '10071', '10013', '10031', '10050',
        '10032', '10090', '10053', '10014', '10041', '10022', '10072', '10081',
        '10061', '10054', '10023', '10034', '10073', '10093', '10055', '10082',
        '10083', '10084', '10094', '10095', '10046', '10015', '10074', '10062',
        '10030', '10075', '10035', '10059', '10024', '10016', '10017', '10042',
        '10076', '10043', '10056', '10018', '10063', '10044', '10064', '10025',
        '10045', '10085', '10065', '10086', '10098', '10077', '10099', '10057',
        '10026', '10058', '10036', '10019', '10121', '10122', '10123', '10124',
        '10125', '10126', '10127', '10128', '10129', '10131', '10132', '10133',
        '10134', '10135', '10136', '10137', '10138', '10139', '10141', '10142',
        '10143', '10144', '10145', '10146', '10147', '10148', '10149', '10151',
        '10152', '10153', '10154', '10155'
    ]
    const regioni = [
        "Piemonte",
        "Valle d'Aosta/Vallée d'Aoste",
        "Lombardia",
        "Trentino-Alto Adige/Südtirol",
        "Veneto",
        "Friuli-Venezia Giulia",
        "Liguria",
        "Emilia-Romagna",
        "Toscana",
        "Umbria",
        "Marche",
        "Lazio",
        "Abruzzo",
        "Molise",
        "Campania",
        "Puglia",
        "Basilicata",
        "Calabria",
        "Sicilia",
        "Sardegna"
    ]
    const province = [
        "Agrigento",
        "Alessandria",
        "Ancona",
        "Aosta",
        "Arezzo",
        "Ascoli Piceno",
        "Asti",
        "Avellino",
        "Bari",
        "Barletta-Andria-Trani",
        "Belluno",
        "Benevento",
        "Bergamo",
        "Biella",
        "Bologna",
        "Bolzano/Bozen",
        "Brescia",
        "Brindisi",
        "Cagliari",
        "Caltanissetta",
        "Campobasso",
        "Carbonia-Iglesias",
        "Caserta",
        "Catania",
        "Catanzaro",
        "Chieti",
        "Como",
        "Cosenza",
        "Cremona",
        "Crotone",
        "Cuneo",
        "Enna",
        "Fermo",
        "Ferrara",
        "Firenze",
        "Foggia",
        "Forlì-Cesena",
        "Frosinone",
        "Genova",
        "Gorizia",
        "Grosseto",
        "Imperia",
        "Isernia",
        "La Spezia",
        "L'Aquila",
        "Latina",
        "Lecce",
        "Lecco",
        "Livorno",
        "Lodi",
        "Lucca",
        "Macerata",
        "Mantova",
        "Massa-Carrara",
        "Matera",
        "Messina",
        "Milano",
        "Modena",
        "Monza e della Brianza",
        "Napoli",
        "Novara",
        "Nuoro",
        "Ogliastra",
        "Olbia-Tempio",
        "Oristano",
        "Padova",
        "Palermo",
        "Parma",
        "Pavia",
        "Perugia",
        "Pesaro e Urbino",
        "Pescara",
        "Piacenza",
        "Pisa",
        "Pistoia",
        "Pordenone",
        "Potenza",
        "Prato",
        "Ragusa",
        "Ravenna",
        "Reggio Calabria",
        "Reggio Emilia",
        "Rieti",
        "Rimini",
        "Roma",
        "Rovigo",
        "Salerno",
        "Medio Campidano",
        "Sassari",
        "Savona",
        "Siena",
        "Siracusa",
        "Sondrio",
        "Taranto",
        "Teramo",
        "Terni",
        "Torino",
        "Ogliastra", // eventuali duplicati da rimuovere se necessario
        "Trapani",
        "Trento",
        "Treviso",
        "Trieste",
        "Udine",
        "Varese",
        "Venezia",
        "Verbano-Cusio-Ossola",
        "Vercelli",
        "Verona",
        "Vibo Valentia",
        "Vicenza",
        "Viterbo"
    ]
    const stati = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antartide",
        "Antigua e Barbuda",
        "Antille Olandesi",
        "Arabia Saudita",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaigian",
        "Bahamas",
        "Bahrein",
        "Bangladesh",
        "Barbados",
        "Belgio",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bielorussia",
        "Birmania",
        "Bolivia",
        "Bosnia ed Erzegovina",
        "Botswana",
        "Brasile",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambogia",
        "Camerun",
        "Canada",
        "Capo Verde",
        "Ciad",
        "Cile",
        "Cina",
        "Cipro",
        "Città del Vaticano",
        "Colombia",
        "Comore",
        "Congo",
        "Corea del Nord",
        "Corea del Sud",
        "Costa d'Avorio",
        "Costa Rica",
        "Croazia",
        "Cuba",
        "Danimarca",
        "Dominica",
        "Ecuador",
        "Egitto",
        "El Salvador",
        "Emirati Arabi Uniti",
        "Eritrea",
        "Estonia",
        "Etiopia",
        "Figi",
        "Filippine",
        "Finlandia",
        "Francia",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germania",
        "Ghana",
        "Giamaica",
        "Giappone",
        "Giordania",
        "Grecia",
        "Grenada",
        "Groenlandia",
        "Guadalupa",
        "Guatemala",
        "Guiana Francese",
        "Guinea",
        "Guinea Equatoriale",
        "Guinea-Bissau",
        "Guyana",
        "Honduras",
        "Hong Kong",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Irlanda",
        "Islanda",
        "Israele",
        "Italia",
        "Kazakhstan",
        "Kenya",
        "Kirghizistan",
        "Kiribati",
        "Kuwait",
        "Laos",
        "Lettonia",
        "Libano",
        "Liberia",
        "Libia",
        "Liechtenstein",
        "Lituania",
        "Lussemburgo",
        "Macao",
        "Macedonia del Nord",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldive",
        "Mali",
        "Malta",
        "Marocco",
        "Martinica",
        "Mauritania",
        "Mauritius",
        "Messico",
        "Micronesia",
        "Moldavia",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Mozambico",
        "Namibia",
        "Nauru",
        "Nepal",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Norvegia",
        "Nuova Caledonia",
        "Nuova Zelanda",
        "Oman",
        "Paesi Bassi",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua Nuova Guinea",
        "Paraguay",
        "Perù",
        "Polonia",
        "Portogallo",
        "Qatar",
        "Regno Unito",
        "Repubblica Ceca",
        "Repubblica Dominicana",
        "Romania",
        "Ruanda",
        "Russia",
        "Saint Kitts e Nevis",
        "Saint Lucia",
        "Saint Vincent e Grenadine",
        "Samoa",
        "San Marino",
        "Sao Tomé e Principe",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovacchia",
        "Slovenia",
        "Somalia",
        "Spagna",
        "Sri Lanka",
        "Stati Uniti",
        "Sudafrica",
        "Sudan",
        "Sudan del Sud",
        "Suriname",
        "Svezia",
        "Svizzera",
        "Siria",
        "Tagikistan",
        "Taiwan",
        "Tanzania",
        "Thailandia",
        "Timor Est",
        "Togo",
        "Tonga",
        "Trinidad e Tobago",
        "Tunisia",
        "Turchia",
        "Turkmenistan",
        "Tuvalu",
        "Ucraina",
        "Uganda",
        "Ungheria",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ]
    const comuni = [
        "Agliè",
        "Airasca",
        "Ala di Stura",
        "Albiano d’Ivrea",
        "Alice Superiore",
        "Almese",
        "Alpette",
        "Alpignano",
        "Andezeno",
        "Andrate",
        "Angrogna",
        "Arignano",
        "Avigliana",
        "Azeglio",
        "Bairo",
        "Balangero",
        "Baldissero Canavese",
        "Baldissero Torinese",
        "Balme",
        "Banchette",
        "Barbania",
        "Bardonecchia",
        "Barone Canavese",
        "Beinasco",
        "Bibiana",
        "Bobbio Pellice",
        "Bollengo",
        "Borgaro Torinese",
        "Borgiallo",
        "Borgofranco d’Ivrea",
        "Borgomasino",
        "Borgone Susa",
        "Bosconero",
        "Brandizzo",
        "Bricherasio",
        "Brosso",
        "Brozolo",
        "Bruino",
        "Brusasco",
        "Bruzolo",
        "Buriasco",
        "Burolo",
        "Busano",
        "Bussoleno",
        "Buttigliera Alta",
        "Cafasse",
        "Caluso",
        "Cambiano",
        "Campiglione Fenile",
        "Candia Canavese",
        "Candiolo",
        "Canischio",
        "Cantalupa",
        "Cantoira",
        "Caprie",
        "Caravino",
        "Carema",
        "Carignano",
        "Carmagnola",
        "Casalborgone",
        "Cascinette d’Ivrea",
        "Caselette",
        "Caselle Torinese",
        "Castagneto Po",
        "Castagnole Piemonte",
        "Castellamonte",
        "Castelnuovo Nigra",
        "Castiglione Torinese",
        "Cavagnolo",
        "Cavour",
        "Ceres",
        "Ceresole Reale",
        "Cesana Torinese",
        "Chialamberto",
        "Chianocco",
        "Chiaverano",
        "Chieri",
        "Chiesanuova",
        "Chiomonte",
        "Chiusa di San Michele",
        "Chivasso",
        "Ciconio",
        "Cintano",
        "Cinzano",
        "Claviere",
        "Coassolo Torinese",
        "Coazze",
        "Collegno",
        "Colleretto Castelnuovo",
        "Colleretto Giacosa",
        "Condove",
        "Corio",
        "Cossano Canavese",
        "Cuceglio",
        "Cumiana",
        "Cuorgnè",
        "Druento",
        "Exilles",
        "Favria",
        "Feletto",
        "Fenestrelle",
        "Fiano",
        "Fiorano Canavese",
        "Foglizzo",
        "Forno Canavese",
        "Frassinetto",
        "Front",
        "Gassino Torinese",
        "Germagnano",
        "Giaglione",
        "Giaveno",
        "Givoletto",
        "Gravere",
        "Groscavallo",
        "Grosso",
        "Grugliasco",
        "Ingria",
        "Inverso Pinasca",
        "Isolabella",
        "Issiglio",
        "Ivrea",
        "La Cassa",
        "La Loggia",
        "Lanzo Torinese",
        "Lauriano",
        "Leini",
        "Lemie",
        "Lessolo",
        "Levone",
        "Locana",
        "Lombardore",
        "Lombriasco",
        "Loranzè",
        "Lugnacco",
        "Luserna San Giovanni",
        "Lusernetta",
        "Lusigliè",
        "Macello",
        "Maglione",
        "Marentino",
        "Massello",
        "Mathi",
        "Mattie",
        "Mazzè",
        "Meana di Susa",
        "Mercenasco",
        "Meugliano",
        "Mezzenile",
        "Mompantero",
        "Monastero di Lanzo",
        "Moncalieri",
        "Moncenisio",
        "Montalenghe",
        "Montalto Dora",
        "Montanaro",
        "Monteu da Po",
        "Moriondo Torinese",
        "Nichelino",
        "Noasca",
        "Nole",
        "Nomaglio",
        "None",
        "Novalesa",
        "Oglianico",
        "Orbassano",
        "Orio Canavese",
        "Osasco",
        "Osasio",
        "Oulx",
        "Ozegna",
        "Palazzo Canavese",
        "Pancalieri",
        "Parella",
        "Pavarolo",
        "Pavone Canavese",
        "Pecetto Torinese",
        "Perosa Argentina",
        "Perosa Canavese",
        "Perrero",
        "Pertusio",
        "Pessinetto",
        "Pianezza",
        "Pinasca",
        "Pinerolo",
        "Pino Torinese",
        "Piobesi Torinese",
        "Piossasco",
        "Piscina",
        "Piverone",
        "Poirino",
        "Pomaretto",
        "Pont Canavese",
        "Porte",
        "Pragelato",
        "Prali",
        "Pralormo",
        "Pramollo",
        "Prarostino",
        "Prascorsano",
        "Pratiglione",
        "Quagliano",
        "Quincinetto",
        "Reano",
        "Ribordone",
        "Rivalba",
        "Rivalta di Torino",
        "Riva presso Chieri",
        "Rivara",
        "Rivarolo Canavese",
        "Rivarossa",
        "Rivoli",
        "Robassomero",
        "Rocca Canavese",
        "Roletto",
        "Romano Canavese",
        "Ronco Canavese",
        "Rondissone",
        "Rorà",
        "Roure",
        "Rueglio",
        "Salassa",
        "Salbertrand",
        "Salerano Canavese",
        "Salza di Pinerolo",
        "Samone",
        "San Benigno Canavese",
        "San Carlo Canavese",
        "San Colombano Belmonte",
        "San Didero",
        "San Francesco al Campo",
        "San Germano Chisone",
        "San Gillio",
        "San Giorgio Canavese",
        "San Giorio di Susa",
        "San Giusto Canavese",
        "San Mauro Torinese",
        "San Pietro Val Lemina",
        "San Ponso",
        "San Raffaele Cimena",
        "San Sebastiano da Po",
        "San Secondo di Pinerolo",
        "Sangano",
        "Sant'Ambrogio di Torino",
        "Sant'Antonino di Susa",
        "Santena",
        "Sauze di Cesana",
        "Sauze d'Oulx",
        "Scalenghe",
        "Scarmagno",
        "Sciolze",
        "Sestriere",
        "Settimo Rottaro",
        "Settimo Torinese",
        "Settimo Vittone",
        "Sparone",
        "Strambinello",
        "Strambino",
        "Susa",
        "Susera",
        "Tavagnasco",
        "Torino",
        "Torrazza Piemonte",
        "Torre Canavese",
        "Torre Pellice",
        "Trana",
        "Traversella",
        "Traves",
        "Trofarello",
        "Usseaux",
        "Usseglio",
        "Vaie",
        "Val della Torre",
        "Valgioie",
        "Vallo Torinese",
        "Valperga",
        "Valprato Soana",
        "Varisella",
        "Vauda Canavese",
        "Venaus",
        "Venaria Reale",
        "Verolengo",
        "Verrua Savoia",
        "Vestignè",
        "Vialfrè",
        "Vico Canavese",
        "Vidracco",
        "Vigone",
        "Villafranca Piemonte",
        "Villanova Canavese",
        "Villarbasse",
        "Villar Dora",
        "Villar Focchiardo",
        "Villar Pellice",
        "Villar Perosa",
        "Villastellone",
        "Vinovo",
        "Virle Piemonte",
        "Vische",
        "Vistrorio",
        "Viù",
        "Volpiano",
        "Volvera"
    ];

    //Variabili per spedizione gratuita
    const shipping_price = total >= 50 ? 0 : 4.99;
    const totalWithShipping = total + shipping_price;


    return (
        <>
            <div className="container py-5">
                <h1>Checkout</h1>

                {/* Lista prodotti */}
                <div className="mb-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Riepilogo ordine</h3>
                        </div>
                        <div className="card-body">
                            {cart.map(item => (
                                <div key={item.id} className="d-flex justify-content-between border-bottom py-2">
                                    <div>{item.name} x {item.quantity}</div>
                                    <div>{(item.price * item.quantity).toFixed(2)} €</div>
                                </div>
                            ))}

                            <div className="d-flex justify-content-between mt-3">
                                <div>Spedizione</div>
                                <div>{shipping_price === 0 ? "Gratuita" : `${shipping_price.toFixed(2)} €`}</div>
                            </div>

                            <hr />
                            <div className="text-end fw-bold mt-2">Totale: {totalWithShipping.toFixed(2)} €</div>
                        </div>

                    </div>
                </div>


                {/* Form dati cliente */}
                <form style={{ width: "70%" }} onSubmit={handleSubmit}>
                    <div className="d-flex gap-3">
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Cognome</label>
                            <input type="text"
                                className="form-control"
                                required
                                value={formData.lastname}
                                onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="d-flex gap-3">
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Numero di telefono</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formData.phone_number}
                                onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })} />
                        </div>
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Indirizzo di spedizione</label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        />
                    </div>

                    <div className="d-flex gap-3">
                        <div className="mb-3">
                            <label className="form-label">CAP</label>
                            <select
                                className="form-select"
                                required
                                value={formData.postcode}
                                onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                            >
                                <option value="">Seleziona CAP</option>
                                {capOptions.map((cap, index) => (
                                    <option key={index} value={cap}>{cap}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Provincia</label>
                            <select
                                className="form-select"
                                required
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            >
                                <option value="">Seleziona Provincia</option>
                                {province.map((province, index) => (
                                    <option key={index} value={province}>{province}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Comune</label>
                            <select className="form-select" required>
                                <option value="">Seleziona la tua città</option>
                                {comuni.map((comuni, index) => (
                                    <option key={index} value={comuni}>{comuni}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Regione</label>
                            <select
                                className="form-select"
                                required
                                value={formData.province}
                                onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                            >
                                <option value="">Seleziona Regione</option>
                                {regioni.map((regioni, index) => (
                                    <option key={index} value={regioni}>{regioni}</option>
                                ))}
                            </select>
                        </div>


                        <div className="mb-3">
                            <label className="form-label">Stato</label>
                            <select
                                className="form-select"
                                required
                                value={formData.country}
                                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            >
                                <option value="">Seleziona Stato</option>
                                {stati.map((stati, index) => (
                                    <option key={index} value={stati}>{stati}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Metodo di pagamento</label>
                        <select className="form-select" required>
                            <option value="">Seleziona</option>
                            <option value="carta">Carta di credito</option>
                            <option value="paypal">PayPal</option>
                        </select>
                    </div>

                    <button className="btn btn-primary" type="submit">Conferma ordine</button>
                </form>
            </div>

        </>
    )
}