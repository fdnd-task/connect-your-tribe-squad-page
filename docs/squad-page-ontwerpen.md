
# Connect Your Tribe - Squad page

## Squad page ontwerpen
In deze workshop ga je met een team ideeen bedenken en uitwerken in een ontwerp. 

### Aanpak

<!--
Volgende technische stap die ik studenten wil leren: iets met query parameters voor GET requests. 

Volgende week dan forms, POST en de parallel naar query params voor POST requests. 

Kunnen we morgen oefenen met de query parameters/filters van Directus zelf (wat opdrachten aan de hand van de documentatie van Directus), en dan woensdag oefenen met query params in hun eigen routes toevoegen en gebruiken?
-->

Met een team van 3 ga je met de WHOIS data een website ontwerpen en maken, zodat je met elkaar in contact kan blijven. Met de website wil je op een (interactieve) manier mede-studenten kunnen opzoeken, gegevens bekijken, een student pingen, een vraag kunnen stellen, of iets anders.

Eerst gaan we teams maken en de Sprint Planning doorlopen. Daarna ga je met je team ideeen bedenken, ontwerpen en beginnen met bouwen.

## Sprint Planning

Tijdens de Sprint Planning ga je met je team de opdracht analyseren.

### Team maken
Je wordt ingedeeld in een team van 3 studenten uit jouw squad. 

Welk team zit jij? 
Je bent al ingedeeld in een team, zoek in Directus op in welk team je zit, en filter wie jouw teamgenoten zijn. 

In Directus kun je de JSON data sorteren, filteren en doorzoeken Een filter toepassen doe je door de parameter `?filter` mee te geven aan de url. Dit is bijvoorbeeld team Rocket:  [https://fdnd.directus.app/items/person/?filter={"team":"Team Rocket"}](https://fdnd.directus.app/items/person/?filter=%7B%22team%22:%22Team%20Rocket%22%7D)

Ga met je team aan een eigen tafel zitten en schrijf je naam en id op het whiteboard.
Vul daarna in de [WHOIS admin](https://whois.fdnd.nl/admin/) je favoriete design kleur, favoriete HTML tag en attribuut, favoriete CSS property en JS feature.

#### Bron
- Zie de documentatie van Directus over filteren: https://directus.io/docs/guides/connect/query-parameters#filter
- [MDN HTML reference](https://developer.mozilla.org/docs/Web/HTML/Reference)
- [MDN CSS reference](https://developer.mozilla.org/docs/Web/CSS/Reference)
- [MDN JS feature](https://developer.mozilla.org/docs/Web/API)


### Analyseren
Lees de instructies van de hele leertaak met je team door. Bespreek met jouw team wat je aan werk verwacht en maak een planning op basis van wat er op de programma website staat, welke workshops staan op het programma, wat heb je nodig voor de code/design review van vrijdag, en wat ga je presenteren tijdens de expo volgende week vrijdag?

### Team Canvas
Als je in een team gaat werken, is het belangrijk om afspraken te maken over de samenwerking, zodat alle teamleden goed op één lijn zitten. Vul met jouw team een Team Canvas in om een goed vertrekpunt voor jouw teamproject te hebben. 

Zorg ervoor dat je de reflectie van sprint 4 meeneemt in jullie teamafspraken. Toen heb je tijdens de kampvuursessie gereflecteerd wat er goed ging en wat er beter kon. 

#### Bronnen Team Canvas
- [Workshop Team Canvas](https://github.com/fdnd-task/your-tribe-squad-page/blob/main/docs/team-canvas.md)

### Inrichten ontwikkelomgeving
Jullie gaan de eerste week op je eigen repo werken. Vrijdag brengen jullie de ideeen samen en gaan jullie op 1 repo verder werken. 

Als het goed is heb je NodejS al geinstalleerd, dus dat hoe je niet nog een keer te doen. 

Fork deze leertaak van [connect-your-tribe-squad-pade](https://github.com/fdnd-task/connect-your-tribe-squad-page/) en *clone* deze op jouw computer.

Open deze leertaak in Visual Studio Code, voer eerst een `npm install` uit om alle _afhankelijkheden_ voor dit project te installeren. Start daarna de voorbeeld squad page met het commando `npm start`. 

*Voor een stap voor stap uitleg over het Inrichten ontwikkelomgeving kan je nog even spieken bij de workshop visitekaart-met-nodejs van vorige week*


<!--Wat gaat er volgende week gebeuren met commits en pushen? Dan moet je wel even afspraken maken-->

## Ideeen bedenken
In de ontwerpfase ga je met je team verschillende ideeën voor de website bedenken en schetsen.

het is belangrijk omeerst te weten wat je allemaal kan met de data uit de WHOIS API. Onderzoek met je team hoe je met Directus kan sorteren, filteren en zoeken. Doe de opdrachtjes met je team op 1 computer en schrijf op het whiteboard hoe dit werk in Directus:

<!--Met je team spelen met de Directus whois api...-->

### Sorteren
Sorteren betekent dat je de volgorde aanpast. Begin met alle personen die in de database zitten in een browser te tonen: https://fdnd.directus.app/items/person/

Hoe is deze lijst gesorteerd?

<!-- Op Id. -->

Je kan op alle velden van de WHOIS sorteren.

Sorteer nu de lijst alfabetisch, voeg de parameter `?sort=name` toe aan de url in je browser.

Wie is het oudst bij FDND? Sorteer op geboortedag, voeg de parameter `?sort=birthdate` toe. 

Wie is de jongste op de lijst? Je kan de sort order omdraaien. Kijk op https://directus.io/docs/guides/connect/query-parameters#sort hoe dat moet. 

### Filteren
Filteren van data hebben we al een keer gedaan. Als je data filtert krijg je een deelverzameling.

Filter eens op alle studenten die als favoriete HTML element `body` hebben ingevuld, voeg de parameter `?filter={"fav_tag":"body"}`. Aj, zijn er geen interessante mensen die de body tag hebben ingevuld? Filter dan op het HTML element dat jezelf hebt ingevuld, nu krijg je alle mensen die dit element hebben ingevuld. Wie heeft dezelfde als jij?

Filter op alle studenten die als favoriete kleur rood hebben ingevuld, voeg de parameter `?filter={"fav_color":"red"}`

Oh wacht ... dat werkt niet. Wat moet je dan voor kleur gebruiken? de `#` doet het niet, gebruik daarvoor `%23`, special char voor de #. Lukt het nu?

Waar kan je nog meer op filteren? Filter op alle mensen in de database van wie de naam begint met een `k`. Voeg de paramater `?filter={"name":{"_starts_with":"K"}}` toe aan de url. 

Je kan dus ook nog _filter rules_ meegeven aan Directus. Wat kan je hier nog meer mee doen? Check https://directus.io/docs/guides/connect/filter-rules en probeer er een paar uit. Schrijf wat je hebt geleerd op het whiteboard. 

Filter nu op alle studenten die in hun bio het woord "frontend" hebben staan. Frontenders ahoy!

<!-- `?filter={"bio":{"_icontains":"frontend"}}` -->

### Zoeken
Je kan ook zoeken in de database. De zoekfunctie van Directus speurt in alle velden. 

Zoek maar eens op een hobby, voeg de parameter `?search=frisbee` toe aan de url. Weer geen interessante mensen gevonden? Zoek dan maar op je eigen naam ... ego.

<!--
**Oefenen met de query parameters/filters van Directus zelf (wat opdrachten aan de hand van de documentatie van Directus)**
Woensdag oefenen met query params in hun eigen routes toevoegen en gebruiken? 
-->


### Schetsen
Nu je een beetje hebt gespeeld met filteren, sorteren en zoeken kunnen jullie misschien wel wat ideeeen bedenken hoe je alle frontenders in de database zou kunnen tonen en wat leuke filters zijn om te laten zien. 

<!-- Met de website wil je op een (interactieve) manier mede-studenten kunnen opzoeken, gegevens bekijken, een student pingen, een vraag kunnen stellen, of iets anders. -->

Eerst bedenk met je team verschillende ideeën voor jullie website. Je kan hiervoor de formulier velden gebruiken die al bestaan. Maar misschien heb je nog een veel beter of gekker idee? Dan kunnen we ook nieuwe velden toevoegen. 

![](ideeen.png)

Schets met je team minimaal 6 verschillende ideeen op het whiteboard. Noteer bij elk idee hoe je de data kan filteren of sorteren, en welke velden in de WHOIS je daarvoor nodig hebt, of moeten worden aangemaakt. 

Kies daarna allemaal een idee om deze week aan te werken. Maak in een gezamenlijk Figma file een high-res ontwerp van je idee. Help elkaar met styling en gebruik dezelfde stijl elementen. 

Vrijdag ga je met je team kijken wat jullie hebben gemaakt en maken jullie een nieuw ontwerp om daarna gezamenlijk aan te werken. 



<!-- In de eerste week van deze opdracht ideeen bedenken met whois data, leren hoe je  met directus kan filteren en sorteren. (get)
In de de tweede leren hoe je data kan opslaan (POST) en op 1 codebase werken. 
-->






<!--
### Analyseren

In de analysefase inventariseer je wat er moet gebeuren om een taak uit te voeren en formuleer je een aantal uitgangspunten waar je ontwerp aan moet voldoen. 

1. Lees de instructies van deze leertaak zorgvuldig door.
2. Onderzoek wat je allemaal kan doen met de [WHOIS API](https://whois.fdnd.nl).
3. Bespreek met jouw team wat je aan werk verwacht, en vul een [teamvanvas](https://github.com/fdnd-task/your-tribe-team-canvas) in
4. Bedenk hoe jullie gaan samenwerken en plan de belangrijke momenten in. Gebruik Github Projectboard om dit te organiseren

#### Bronnen

- [WHOIS API](https://whois.fdnd.nl)
- [Learn about projects on Github](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
- [teamvanvas](https://github.com/fdnd-task/your-tribe-team-canvas)


### Bouwen
In de bouwfase werken alle teamleden een ander idee uit met Node en JSON.

 1. Fork deze leertaak en clone deze op jouw computer.
 2. Open deze leertaak in jouw editor (bijv. Visual Studio Code).
 3. Open de terminal en voer het commando `npm install` in. Je gebruikt NPM om Express inclusief alle afhankelijkheden te installeren.
 4. Start je server met `npm start`, en onderzoek wat de code op dit moment doet.
 5. Pas alles aan naar eigen wens.

#### Bronnen

- [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [EJS - Embedded JavaScript templating](https://ejs.co)
- [Control Flow in JavaScript: Loops](https://dev.to/pszponder/control-flow-in-javascript-loops-26bd)

### Integreren
Als je online wil testen moet je je project publiceren op internet. Omdat we met Node werken, kan dat niet met GitHub Pages, omdat daar alleen statische pagina's kunnen worden gehost. Voor een Node project moet een serveromgeving opgestart worden. Wij gebruiken cyclic.sh als hostingpartij maar je mag natuurlijk je eigen voorkeur volgen als die anders is.

1. Commit en Push jouw project naar GitHub
2. Login bij [cyclic.sh](https://www.cyclic.sh/)
3. Klik op Deploy om een nieuwe App aan te maken
4. Selecteer het tabblad _Link Your Own_ om jouw project te publiceren.
5. Zoek de juiste repository. Cyclic importeert jouw code en voert `npm start` uit.
6. Er wordt een unieke naam voor jouw project gegenereerd. Op jouw Cyclic pagina zie je alle apps die je hebt aangemaakt
7. Open je squad page in je browser, check of alles werkt en voeg de url van de App toe aan jouw repository op GitHub. 

#### Bronnen

- [Cyclic Hosting](https://www.cyclic.sh/)

### Testen
In de testfase controleer je of jouw website voldoet aan standaarden. 
Jouw team kiest daarna het beste, mooiste of meest originele ontwerp en deze presenteren jullie aan de squad. 
-->
