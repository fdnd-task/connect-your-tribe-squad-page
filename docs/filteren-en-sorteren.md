
# Connect Your Tribe - Squad page

## Filteren en sorteren

In deze workshop leer je hoe je de data uit Directus kan filteren en sorteren en hoe je dit in je NodeJS project kan fetchen, en met Express en Liquid kan verwerken. 


### Aanpak

Afgelopen maandag hebben jullie ideeën bedacht voor jullie squadpage en zijn jullie begonnen met ontwerpen en bouwn. Waarschijnlijk ben je al begonnen met een prototype uitwerken in statische HTML. Misschien heb je al wat dynamische data uit de API gebruikt. Vandaag ga je leren hoe je JSON data kan filteren en sorteren en gebruiken in je NodeJS project.

Eerst gaan jullie je teamleden helpen met het ophalen en gebruiken van de juiste data. Daarna gaan jullie eigen URLs, query parameters, routes en views bedenken en ontwerpen, aan de hand van een wireflow.


## Vorderingen bespreken

Ga weer in de teams zitten waarin je maandag ingedeeld bent. Zet je naam op het bord, en schrijf achter je naam een titel van het ontwerp dat je aan het maken bent. Schrijf eronder een vraag die je hebt (over Directus, JSON, NodeJS, Liquid, etc).

Leg elkaar je ontwerp en idee uit, als jullie dat maandag nog niet gedaan hebben.

### API query parameters

Bespreek met elkaar welke API URL(s) je nodig hebt, en welke query parameters je daarin gebruikt hebt. Lees met elkaar de [`fields` query parameter van Directus](https://directus.io/docs/guides/connect/query-parameters#fields) en maak de API URL(s) zo klein mogelijk, zodat je alleen de data die je echt nodig hebt ook terugkrijgt. De ene zal misschien alleen namen en favoriete kleuren nodig hebben, de ander ook geboortedata en GitHub handles.

Als je lokaal een werkend prototype in HTML hebt, met de data die je nodig hebt, zet dan een krul achter je naam op het whiteboard. Als dat je nog niet is gelukt, vraag dan om hulp van je team. Als het je wel is gelukt, bied dan je hulp aan aan teamleden.

### Integreren naar Render

Push je eigen code naar GitHub, en zet je repository live met Render. Volg hiervoor de stappen uit het Visitekaartje van vorige week. Help elkaar met Render als je er niet uit komt. Zet een tweede krul achter je naam als je de boel op Render hebt staan, en je jouw link hebt toegevoegd aan de About van je repository. Let op: je squad page hoeft nog niet “af” te zijn. We kiezen hier bewust voor deze fase van de development lifecycle.

#### Bronnen

- [Directus `fields` parameter](https://directus.io/docs/guides/connect/query-parameters#fields)
- [Integreren met Render (Sprint 7)](https://github.com/fdnd-task/connect-your-tribe-profile-card/blob/main/docs/visitekaartje-met-nodejs.md#visitekaartje-integreren-en-live-testen)


## Wireflow schetsen

In je ontwerp heb je een filter bedacht, of een sorteermogelijkheid. Dit is een interactie, die je net als in Sprint 5 en 6 met een Wireflow uit kunt werken. Toen deden we dit voor een micro-interactie, maar deze interactie is wat groter. Er moet waarschijnlijk nieuwe data opgehaald worden uit de API. Of de data moet net even anders gefilterd of gesorteerd worden, voordat je het weer toont.

Maak een Wireflow schets van jouw interactie. Gebruik [de workshop uit Sprint 5](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/user-interface-design.md#wireflow). Heb je meerdere soorten filters of sorteermogelijkheden? Schets dan meerdere Wireflows.

### URL Design

We gaan voor deze interactie _terug naar jouw server_. De verschillende schermen van jouw interactie zijn op verschillende pagina's van jouw website beschikbaar. En elke pagina geeft andere HTML terug. De URLs van deze pagina's moet je dus ook _ontwerpen_, net als dat je bij een micro-interactie _feedforward_ en _feedback_ ontwerpt (en bouwt). Directus heeft in hun URL ontwerp een aantal keuzes gemaakt (met query parameters, zoals `filter`, `sort` en `fields`), maar die moet jij nu ook gaan maken voor je eigen squad page. Misschien wil je wel alleen maar Nederlandse URLs gebruiken bijvoorbeeld.

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

Breid je Wireflows uit met eigen URLs. Schrijf ze onder je schermen met een andere kleur. Dit worden later de _routes_ in je server, dus je gaat ze nodig hebben.

![wireflow-squadpage-met-nodejs](wireflow.jpg)
*In de Wireflow schets geef je aan welke URLs de pagina's nodig hebben, welke routes daarbij horen en met welke query parameters je de data kan fetchen van Directus*

Dit mag je dus helemaal zelf bedenken. Net wat je mooi vindt. Maar overleg hier wel even over met je team. Of vraag de mening van een docent. Je zult zien dat URLs ontwerpen toch best ingewikkeld is. #NamingThings

💪 Wil je al gebruik gaan maken van formulieren voor filters? Pas dan URL design toe op het `action` attribuut van je `<form>` en de verschillende `name` attributen van je `<input>` elementen. We zijn nu bezig met _`GET` requests_ (om gegevens op te halen). Volgende week komen hier ook _`POST` requests_ bij (om gegevens op te slaan).

#### Bronnen

- [User Interface Design - Wireflow (Sprint 5)](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/user-interface-design.md#wireflow)
- [Guidelines for URL Design @ CSS Tricks](https://css-tricks.com/guidelines-for-uri-design/)


### Routes en query parameters

De volgende stap is het toevoegen van de _routes_ die je net hebt bedacht. En het gebruiken van de _query parameters_ die je verzonnen hebt. Gebruik de documentatie van Express om eerst wat hints hiervoor bij je Wireflows te zetten. Heb je bijvoorbeeld een `/paars` URL bedacht, zet daar dan ook `app.get('/paars', ...)` bij. Heb je een `/?sorteer=achternaam` URL bedacht, zet daar dan `app.get('/', ...)` bij. Query parameters lees je uit in die route. Breid je Wireflows uit met eigen routing hints.

Zet als extra hints bij je Wireflows ook welke data je denkt nodig te hebben uit de API. Ga je iets met sorteren op lengte doen op een bepaalde pagina, zet dan bijvoorbeeld `sort=-length` bij dat scherm.

Bespreek de extra hints die je toegevoegd hebt binnen je team, zodat je een goed plan hebt om de code te kunnen schrijven.

Maak daarna net als vorige week verschillende routes aan, voor elk van de schermen in je Wireflow(s). Dit doe je in `server.js`.

💪 Wil je al wat verder gaan met URL design? Kijk dan eens naar _Route parameters_ en `req.params` bij de Bronnen. Er staat al een voorbeeld met `/student/:id` voor je klaar in de server.

#### Bronnen

- [`app.get(path, callback)` @ Express](https://expressjs.com/en/5x/api.html#app.get.method)
- [`req.query` @ Express](https://expressjs.com/en/5x/api.html#req.query)
- [Route parameters @ Express](https://expressjs.com/en/guide/routing.html#route-parameters)
- [`req.params` @ Express](https://expressjs.com/en/5x/api.html#req.params)


### Voorbeeld van eigen query parameters gebruiken

Stel dat we een optie om andersom te sorteren op naam toe willen voegen aan onze squad page. En dat willen we op de URL `/?sorteer=andersom`. Dit is de code waar we mee begonnen:

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
  // In deze String variabele gaan we opslaan welke API URL we straks gaan fetch'en
  let personURL = 'https://fdnd.directus.app/items/person/';

  if (request.query.sorteer == 'andersom') {
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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