
# Squad page
Ontwerp en maak met een team een website voor je squad met Node en data uit de [whois.fdnd.nl](https://whois.fdnd.nl) API.

## Context
Deze leertaak hoort bij sprint 7 "Connect Your Tribe". Dit is een leertaak die je in een team uitvoert.

In het S07W2-01-Squadpage wordt uitgelegd wat je gaat doen.


## Briefing
Elke frontender bij FDND staat in een database die te bereiken is via de API op [whois.fdnd.nl](https://whois.fdnd.nl). In een team ga je met deze data een website voor je squad ontwerpen en maken, zodat je met elkaar in contact kan blijven.

## Doel van deze opdracht
Je leert met een team een website ontwerpen en bouwen op basis van een bestaande API.


## Werkwijze

Met je team bedenk en schets je verschillende ideeën voor een website voor je squad. 
Met de website wil je op een (interactieve) manier mede-studenten kunnen opzoeken, gegevens bekijken, een student pingen, een vraag kunnen stellen, of iets anders.
Vervolgens werken alle teamleden een ander idee uit met Node en JSON.
Jouw team kiest daarna het beste, mooiste of meest originele ontwerp en deze presenteren jullie aan de squad. 

Voor deze opdracht doorloop je alle fases van de DLC [analyseren](#analyseren), [ontwerpen](#ontwerpen), [bouwen](#bouwen), [integreren](#integreren) en [testen](#testen).


### Analyseren
In de analysefase inventariseer je wat er moet gebeuren om een taak uit te voeren en formuleer je een aantal uitgangspunten waar je ontwerp aan moet voldoen. 


#### Aanpak analysefase

1. Lees de instructies van deze leertaak zorgvuldig door.
2. Onderzoek wat je allemaal kan doen met de [WHOIS API](https://whois.fdnd.nl).
3. Bespreek met jouw team wat je aan werk verwacht, en vul een [teamvanvas](https://github.com/fdnd-task/your-tribe-team-canvas) in
4. Bedenk hoe jullie gaan samenwerken en plan de belangrijke momenten in. Gebruik Github Projectboard om dit te organiseren



#### Materiaal analysefase

- [WHOIS API](https://whois.fdnd.nl)
- [Learn about projects on Github](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
- [teamvanvas](https://github.com/fdnd-task/your-tribe-team-canvas)



### Ontwerpen
In de ontwerpfase ga je met je team verschillende ideeën voor een website voor je squad bedenken en schetsen. 

#### Aanpak ontwerpfase

1. Ideegeneratie: Eerst bedenk je met je team verschillende ideeën voor de website.
2. Maak een breakdown van de schets, bedenk welke data je uit de WHOIS API kan gebruiken voor je ontwerp. 
3. Werk je schets netjes uit in Figma, Illustrator of ga meteen los in de browser.



### Bouwen
In de bouwfase werken alle teamleden een ander idee uit met Node en JSON.

#### Aanpak bouwfase

 1. Fork deze leertaak en clone deze op jouw computer.
 2. Open deze leertaak in jouw editor (bijv. Visual Studio Code).
 3. Open de terminal en voer het commando `npm install` in. Je gebruikt NPM om Express inclusief alle afhankelijkheden te installeren.
 4. Start je server met `npm start`, en onderzoek wat de code op dit moment doet.
 5. Pas alles aan naar eigen wens.

#### Materiaal bouwfase

- [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [EJS - Embedded JavaScript templating](https://ejs.co)
- [Control Flow in JavaScript: Loops](https://dev.to/pszponder/control-flow-in-javascript-loops-26bd)




### Integreren
Als je online wil testen moet je je project publiceren op internet. Omdat we met Node werken, kan dat niet met GitHub Pages, omdat daar alleen statische pagina's kunnen worden gehost. Voor een Node project moet een serveromgeving opgestart worden. Wij gebruiken cyclic.sh als hostingpartij maar je mag natuurlijk je eigen voorkeur volgen als die anders is.

#### Aanpak integreerfase

1. Commit en Push jouw project naar GitHub
2. Login bij [cyclic.sh](https://www.cyclic.sh/)
3. Klik op Deploy om een nieuwe App aan te maken
4. Selecteer het tabblad _Link Your Own_ om jouw project te publiceren.
5. Zoek de juiste repository. Cyclic importeert jouw code en voert `npm start` uit.
6. Er wordt een unieke naam voor jouw project gegenereerd. Op jouw Cyclic pagina zie je alle apps die je hebt aangemaakt
7. Open je squad page in je browser, check of alles werkt en voeg de url van de App toe aan jouw repository op GitHub. 


#### Materiaal integreerfase

- [Cyclic Hosting](https://www.cyclic.sh/)




### Testen
In de testfase controleer je of jouw website voldoet aan standaarden. 
Jouw team kiest daarna het beste, mooiste of meest originele ontwerp en deze presenteren jullie aan de squad. 




## Definition of done

Deze opdracht is done als:
- [ ] Je hebt een website voor je squad ontworpen en gemaakt met Node en de WHOIS API
- [ ] Je website is online gepubliceerd
- [ ] Je hebt gewerkt volgens de verschillende fases van de development-lifecycle en je iteratieve werkwijze is gedocumenteerd in de Wiki
- [ ] Je hebt comments in je Node-code waarmee de code is uitgelegd
- [ ] Je hebt comments in de EJS bestanden waarmee een _loop_ en/of andere code is uitgelegd
- [ ] Je hebt in de Readme bij 'Kenmerken' uitgelegd wat Node is, wat Express is en wat EJS doet

