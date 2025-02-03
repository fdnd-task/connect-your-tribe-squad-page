
# Connect Your Tribe - Squad page

## Squad page ontwerpen
over het ontwerpen van een interface met veel data

## Aanpak

Elke frontender bij FDND staat in een database die te bereiken is via de API op [whois.fdnd.nl](https://whois.fdnd.nl). In een team ga je met deze data een website voor je squad ontwerpen en maken, zodat je met elkaar in contact kan blijven.


### Ontwerpen
In de ontwerpfase ga je met je team verschillende ideeën voor een website voor je squad bedenken en schetsen. 

1. Ideegeneratie: Eerst bedenk je met je team verschillende ideeën voor de website.
2. Maak een breakdown van de schets, bedenk welke data je uit de WHOIS API kan gebruiken voor je ontwerp. 
3. Werk je schets netjes uit in Figma, Illustrator of ga meteen los in de browser.



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
