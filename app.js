// Importeer express uit de node_modules map
import express from 'express'
// Maak een nieuwe express app aan
const app = express()
// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')
// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))


//Fetch JSON
//fetch(url).then((response) => response.json()).then((data) => console.log(data));

// // Maak een route voor de index
// app.get('/', (request, response) => {
//   let slug = request.query.squad || 'squad-b-2022'
//   let orderBy = request.query.orderBy || 'name'
//   let direction = request.query.direction || 'ASC'
//   let squadUrl = url + slug + '?orderBy=' + orderBy + '&direction=' + direction

//   // fetchJson(squadUrl).then((data) => {
//   //   response.render('index', data)
//   // })  
// })


/* 
  ROUTES AND FETCH
*/
// Route voor de index
app.get('/', function (request, response) {
  const url = 'https://whois.fdnd.nl/api/v1/squads';
  fetchJson(url).then((data) => {
    response.render('index', data)
  })
})

//Route voor een squad overzicht
app.get('/squad/:id', function (request, response) {
  // console.log("query",request.query);
  console.log("params",request.params)

  // const url = "https://whois.fdnd.nl/api/v1/member/koop-reynders"
  // "slug": "squad-a-2022",
  // "slug": "squad-b-2022",
  // "slug": "squat-c-2022",
  // "slug": "founders-2021",
  let id = request.params.id;
  let order = "name";
  let direction = "ASC";
  let url = 'https://whois.fdnd.nl/api/v1/squad/'+id+"?orderBy="+order+"&direction="+direction;
  console.log("url",url)

  fetchJson(url).then((data) => {
    // console.log(data.squad.members.length)
    console.log("data",data)
    response.render('squad', data)
  })
})


/* 
  SERVER SETTINGS
*/
// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)
// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})


/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url, payload = {}) {
  return await fetch(url, payload)
    .then((response) => response.json())
    .catch((error) => error)
}