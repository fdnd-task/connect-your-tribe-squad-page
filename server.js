// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';


/*
Je kunt de volgende URLs uit onze WHOIS API gebruiken:
- https://fdnd.directus.app/items/tribe
- https://fdnd.directus.app/items/squad
- https://fdnd.directus.app/items/person
- https://fdnd.directus.app/items/role

En combineren met verschillende query parameters als fields, filter, sort, search, etc.

Gebruik hiervoor de documentatie van Directus:
- https://directus.io/docs/guides/connect/query-parameters

En de oefeningen uit de workshops:
- https://github.com/fdnd-task/connect-your-tribe-squad-page/blob/main/docs/squad-page-ontwerpen.md
- https://github.com/fdnd-task/connect-your-tribe-squad-page/blob/main/docs/filteren-en-sorteren.md
*/

// Haal bijvoorbeeld alle eerstejaars squads van dit jaar uit de WHOIS API op (2025–2026)
// Eerst bepalen we alle relevante query parameters die we nodig hebben
const params = {
  'filter[cohort]': '2526',
  'filter[tribe][name]': 'FDND Jaar 1'
}
// En maak hiermee de URL aan, zoals we dat ook in de browser deden
const apiURL = 'https://fdnd.directus.app/items/squad?' + new URLSearchParams(params)

// Laat eventueel zien wat die URL is
// (Let op: dit is _niet_ de console van je browser, maar van NodeJS, in je terminal)
// console.log('API URL voor squads:', apiURL)

// En haal daarna de squad data op
const squadResponse = await fetch(apiURL)

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
const squadResponseJSON = await squadResponse.json()

// Controleer eventueel de data in je console
// console.log(squadResponseJSON)


// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Zorg dat werken met request data (volgende week) makkelijker wordt
app.use(express.urlencoded({extended: true}))


// Om Views weer te geven, heb je Routes nodig
// Maak een GET route voor de index
app.get('/', async function (request, response) {

  // Haal voor de homepage bijvoorbeeld alle personen uit de WHOIS API op, van dit jaar, gesorteerd op naam
  // Eerst bepalen we alle query parameters voor de API
  const params = {
    // We willen sorteren op naam
    'sort': 'name',

    // En alle data terugkrijgen
    'fields': '*,squads.*',
    // Dat had ook zoiets kunnen zijn, als we minder gegevens nodig hebben
    // 'fields': 'name,nickname,birthdate,role.role_id.name',

    // Combineer meerdere filters
    'filter[squads][squad_id][tribe][name]': 'FDND Jaar 1',
    'filter[squads][squad_id][cohort]': '2526',
    
    // Filter eventueel alleen op een bepaalde squad
    // 'filter[squads][squad_id][name]': '1I',
    // 'filter[squads][squad_id][name]': '1J',
  }

  // En maak hiermee de URL aan, zoals we dat ook in de browser deden
  const apiURL = 'https://fdnd.directus.app/items/person/?' + new URLSearchParams(params)

  // Laat eventueel in de terminal zien wat die URL is
  // console.log('API URL voor studenten:', apiURL)

  // En haal daarna de data van alle studenten op
  const personResponse = await fetch(apiURL)

  // Haal daarvan de JSON op, en zet dat om naar een object
  const personResponseJSON = await personResponse.json()

  // Toon eventueel alle data in de console
  // console.log(personResponseJSON)

  // Render index.liquid uit de views map en geef de opgehaalde data mee als variabele, genaamd persons
  // Geef ook de eerder opgehaalde squad data mee aan de view
  response.render('index.liquid', {
    persons: personResponseJSON.data,
    squads: squadResponseJSON.data
  })
})

// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van POST, redirect naar GET op /
  response.redirect(303, '/')
})


// Maak een GET route voor een detailpagina met een route parameter, id
// Zie de documentatie van Express voor meer info: https://expressjs.com/en/guide/routing.html#route-parameters
app.get('/student/:id', async function (request, response) {
  
  // Gebruik de request parameter `id`` en haal de juiste persoon uit de WHOIS API op
  // Maak hier eerst de juiste URL mee aan
  const apiURL = 'https://fdnd.directus.app/items/person/' + request.params.id

  // Laat eventueel in de terminal zien wat die URL is
  // console.log('API URL voor student:', apiURL)

  // En haal de data van die student op
  const personDetailResponse = await fetch(apiURL)

  // En zet die JSON om in een object
  const personDetailResponseJSON = await personDetailResponse.json()
  
  // Render student.liquid uit de views map en geef de opgehaalde data mee als variable, genaamd person
  // Geef ook de eerder opgehaalde squad data mee aan de view, zodat die ook gebruikt kan worden op deze pagina
  response.render('student.liquid', {
    person: personDetailResponseJSON.data,
    squads: squadResponseJSON.data
  })
})


// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
