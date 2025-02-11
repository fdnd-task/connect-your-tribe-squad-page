
# Connect Your Tribe - Squad page

## Filteren en sorteren

In deze workshop leer je hoe je de data uit Directus kan filteren en sorteren en hoe je dit in je NodeJS project kan fetchen, en met Express en Liquid kan verwerken. 


### Aanpak

Afgelopen maandag heb je uit al je ideeën eentje gekozen waar je deze week aan werkt. Waarschijnlijk ben je al begonnen met een prototype uitwerken in statische HTML. Misschien heb je al wat dynamische data uit de API gebruikt. Vandaag gaan we zorgen dat iedereen hun idee kan uitvoeren.

Eerst gaan jullie je teamleden helpen met het ophalen en gebruiken van de juiste data. Daarna gaan jullie eigen URLs, query parameters, routes en views bedenken en ontwerpen, aan de hand van een wireflow.


## Elkaar helpen

Ga weer in de teams zitten waarin je maandag ingedeeld bent. Zet je naam op het bord, en schrijf achter je naam een soort titel voor het ontwerp dat je aan het maken bent. Schrijf eronder een vraag die je nog hebt (over Directus, JSON, NodeJS, Liquid, etc).

Leg elkaar de ontwerpen en ideeën uit, als jullie dat maandag nog niet gedaan hebben.

Laat elkaar zien welke API URL(s) je gaat gebruiken, en welke query parameters je daarin gebruikt hebt. Onderzoek met elkaar de [`fields` query parameter van Directus](https://directus.io/docs/guides/connect/query-parameters#fields) en maak de API URL(s) zo klein mogelijk, zodat je alleen de data die je echt nodig hebt ook terugkrijgt. De ene zal misschien alleen namen en favoriete kleuren nodig hebben, de ander ook geboortedata en GitHub handles.

Als je lokaal een werkend prototype hebt, met de data die je nodig hebt, zet dan een krul achter je naam op het whiteboard.

Push je eigen code naar GitHub, en zet je repository live, met [de stappen uit het Visitekaartje van vorige week](https://github.com/fdnd-task/connect-your-tribe-profile-card/blob/main/docs/visitekaartje-met-nodejs.md#visitekaartje-integreren-en-live-testen). Help elkaar met Render als je er niet uit komt.

### Bronnen

- [Directus `fields` parameter](https://directus.io/docs/guides/connect/query-parameters#fields)
- [Integreren met Render (Sprint 7)](https://github.com/fdnd-task/connect-your-tribe-profile-card/blob/main/docs/visitekaartje-met-nodejs.md#visitekaartje-integreren-en-live-testen)


## Wireflow + URL Design

In je ontwerp heb je ook een filter bedacht, of een sorteermogelijkheid. Dit is een interactie, die je net als in Sprint 5 en 6 met een Wireflow uit kunt werken. Toen deden we dit voor een micro-interactie, maar deze interactie is wat groter. Er moet waarschijnlijk nieuwe data opgehaald worden uit de API. Of de data moet net even anders gefilterd of gesorteerd worden, voordat je het weer toont.

Gebruik [de workshop uit Sprint 5](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/user-interface-design.md#wireflow): maak een Wireflow schets van jouw interactie. Het JavaScript 3 stappenplan komt in dit geval dus te vervallen. (Heb je meerdere soorten filters, of sorteermogelijkheden, maak dan meerdere Wireflows aan.)

We gaan voor deze interactie _terug naar jouw server_, waarschijnlijk via simpele `<a>` links, met een `href` attribuut en een link; de verschillende schermen van jouw interactie zijn op verschillende URLs (routes) beschikbaar. Deze URLs moet je dus ook _ontwerpen_, net als dat je bij een micro-interactie _feedforward_ en _feedback_ ontwerpt (en bouwt). Directus heeft in hun URL ontwerp een aantal keuzes gemaakt (met query parameters, zoals `filter`, `sort` en `fields`), maar die moet jij nu ook gaan maken. Misschien wil je wel alleen maar Nederlandse URLs gebruiken. Breid je Wireflows dus met onderstaande tips uit met eigen URLs. Schrijf ze onder je schermen met een andere kleur. Dit worden later de _routes_ in je server, dus je gaat ze nodig hebben.

Als je bijvoorbeeld een Nederlandse squad page met hoofden aan het maken bent, waarop je kunt filteren op haarkleur, en kunt sorteren op haarlengte, kom je misschien wel tot de volgende URLs/routes voor je verschillende schermen (of pagina's):

| Pagina  | URL |
| --- | --- |
| Overzicht van alle hoofden | `/` |
| Filteren op bruin haar | `/?haarkleur=bruin` |
| Filteren op paars haar | `/?haarkleur=paars` |
| Filteren op geen haar | `/?haar=geen` |
| Sorteren op haarlengte, van kort naar lang | `/?gesorteerd=van-kort-naar-lang` |
| Sorteren op haarlengte, van lang naar kort | `/?gesorteerd=van-lang-naar-kort` |

Of je bedenkt dit:

| Pagina  | URL |
| --- | --- |
| Overzicht van alle hoofden | `/` |
| Filteren op bruin haar | `/bruin` |
| Filteren op paars haar | `/paars` |
| Filteren op geen haar | `/geen` |
| Sorteren op haarlengte, van kort naar lang | `/kort` |
| Sorteren op haarlengte, van lang naar kort | `/lang` |

Dit mag je dus helemaal zelf bedenken. Net wat je mooi vindt. Maar overleg hier wel even over met je team. Of vraag de mening van een docent. Je zult zien dat URLs ontwerpen toch best ingewikkeld is. #NamingThings

💪 Wil je al gebruik gaan maken van formulieren voor filters? Pas dan URL design toe op het `action` attribuut van je `<form>` en de verschillende `name` attributen van je `<input>` elementen. We zijn nu bezig met _`GET` requests_ (data ophalen). Volgende week komen hier ook _`POST` requests_ bij (data opslaan).

### Bronnen

- [User Interface Design - Wireflow (Sprint 5)](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/user-interface-design.md#wireflow)
- [Guidelines for URL Design @ CSS Tricks](https://css-tricks.com/guidelines-for-uri-design/)


## Eigen routes en query parameters toevoegen

De volgende stap is het toevoegen van de _routes_ die je net hebt bedacht. Dit doe je in `server.js`. Maak net als vorige week verschillende routes aan, voor elk van de schermen in je Wireflow(s).

Als je zelf ook query parameters wilt gebruiken op je server, kun je die in een bestaande route uitlezen. Je hoeft voor `/` en `/?zoeken=kaas` dus niet twee verschillende routes aan te maken. Voor `/` en `/kaas` wel.

Stel dat we een optie om andersom te sorteren op naam toe willen voegen aan onze squad page, en dat willen we op de route `/?sorteer=andersom`. Dit is de code waar we mee begonnen:

```js
// Om Views weer te geven, heb je Routes nodig
// Maak een GET route voor de index
app.get('/', async function (request, response) {

  // Haal alle personen uit de WHOIS API op, van dit jaar
  const personResponse = await fetch('https://fdnd.directus.app/items/person/?sort=name&fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}')

  // En haal daarvan de JSON op
  const personResponseJSON = await personResponse.json()
  
  // personResponseJSON bevat gegevens van alle personen uit alle squads van dit jaar
  // Je zou dat hier kunnen filteren, sorteren, of zelfs aanpassen, voordat je het doorgeeft aan de view

  // Render index.liquid uit de views map en geef de opgehaalde data mee als variabele, genaamd persons
  // Geef ook de eerder opgehaalde squad data mee aan de view
  response.render('index.liquid', {persons: personResponseJSON.data, squads: squadResponseJSON.data})
})
```

Zoals we van onze Directus API weten, moeten we onze `fetch` dan aanpassen. Dat zou bijvoorbeeld zo kunnen:

```js
  // In deze variabele gaan we opslaan welke API URL we gaan fetch'en
  let personURL = 'https://fdnd.directus.app/items/person/';

  if (request.query.sorteer == 'andersom') {
    // Als we op /?sorteer=andersom zitten, voeg daar dan ?sort=-name aan toe
    personURL = personURL + '?sort=-name'
  } else {
    // En anders, voeg daar ?sort=name aan toe
    personURL = personURL + '?sort=name'
  }

  // Voeg de overige filters toe aan de URL die we gaan fetch'en
  personURL = personURL + '&fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}'

  // Haal alle personen uit de WHOIS API op, van dit jaar
  const personResponse = await fetch(personURL)
```

💪 Wil je al wat verder gaan met URL design? Kijk dan eens naar _Route parameters_ en `req.params` bij de Bronnen.

### Bronnen

- [`req.query` @ Express](https://expressjs.com/en/5x/api.html#req.query)
- [Route parameters @ Express](https://expressjs.com/en/guide/routing.html#route-parameters)
- [`req.params` @ Express](https://expressjs.com/en/5x/api.html#req.params)

