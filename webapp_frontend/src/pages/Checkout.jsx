import { useGlobalContext } from "../contexts/GlobalContext"

export default function Checkout() {
    const { cart } = useGlobalContext()

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
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
    ];
    const regione = [
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
    const provincia = [
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
    const stato = [
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
    ];
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
                            <div className="text-end fw-bold mt-3">Totale: {total.toFixed(2)} €</div>
                        </div>

                    </div>
                </div>


                {/* Form dati cliente */}
                <form style={{ width: "70%" }}>
                    <div className="d-flex gap-3">
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            <input type="text" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Cognome</label>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>

                    <div className="d-flex gap-3">
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Numero di telefono</label>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Indirizzo di spedizione</label>
                        <input type="text" className="form-control" required />
                    </div>

                    <div className="d-flex gap-3">
                        <div className="mb-3">
                            <label className="form-label">CAP</label>
                            <select className="form-select" required>
                                <option value="">Seleziona CAP</option>
                                {capOptions.map((cap, index) => (
                                    <option key={index} value={cap}>{cap}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Provincia</label>
                            <select className="form-select" required>
                                <option value="">Seleziona Provincia</option>
                                {provincia.map((provincia, index) => (
                                    <option key={index} value={provincia}>{provincia}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Regione</label>
                            <select className="form-select" required>
                                <option value="">Seleziona Regione</option>
                                {regione.map((regione, index) => (
                                    <option key={index} value={regione}>{regione}</option>
                                ))}
                            </select>
                        </div>


                        <div className="mb-3">
                            <label className="form-label">Stato</label>
                            <select className="form-select" required>
                                <option value="">Seleziona Stato</option>
                                {stato.map((stato, index) => (
                                    <option key={index} value={stato}>{stato}</option>
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

                    <button className="btn btn-primary">Conferma ordine</button>
                </form>
            </div>

        </>
    )
}