# Game Collection API
## Om projektet
Game Collection API är ett REST API som används för att hantera en personlig samling av TV-spel.
API:et gör det möjligt att lägga till, hämta, uppdatera och ta bort spel. Informationen sparas i en MongoDB-databas.
Projektet är utvecklat med Node.js och Hapi.js. Mongoose används för att kommunicera med databasen och Joi används för att validera datan som kommer in.

## Tekniker
- Node.js
- Hapi.js
- MongoDB Atlas
- Mongoose
- Joi
- dotenv
- Thunder Client

## Datamodell
Varje spel sparas som ett dokument i MongoDB:s samling av spel.
Ett spel innehåller följande fält:
| Fält | Datatyp | Beskrivning |
|---|---|---|
| `title` | String | Spelets titel |
| `genre` | String | Spelets genre |
| `rating` | Number | Betyg mellan 1 och 10 |
| `completed` | Boolean | Anger om spelet är färdigspelat |
| `createdAt` |  Date | Datum så spelet skapades |
| `updatedAt` |  Date | Datum då spelet senast uppdaterades |
| `_id` |  ObjectId | Spelets id |

## Installation och start
### 1. Klona projektet
Klona GitHub-repot till din dator och öppna projektmappen i Visual Studio Code.
### 2. Installera beroenden
Kör följande kommando i terminalen:
```bash
npm install
```
### 3. Konfigurera databasen
Skapa en fil med namnet .env i projektets rotmapp.
Lägg till din egen MongoDB-anslutningssträng:
```bash
MONGODB_URI=din_mongodb_anslutningstrang
```
Ersätt värdet med din egen anslutningssträng.
**Viktigt:** Dela aldrig dina databasuppgifter. .env-filen ska inte laddas upp till GitHub.
### 4. Starta servern
Kör följande kommando:
```bash
node server.js
```
När anslutningen lyckats visas ett meddelande i terminalen. API:et körs då på: **http://localhost:3000**

## API hantering
| HTTP-metod | Endpoint | Beskrivning |
|---|---|---|
| GET | `/games` | Hämtar alla spel |
| GET | `/games/{id}` | Hämtar ett specifikt spel |
| POST | `/games` | Lägger till ett nytt spel |
| PUT | `/games/{id}` | Uppdaterar ett spel |
| DELETE | `/games/{id}` | Tar bort ett spel |

### Exempel på JSON-data
```json
{
    "title": "Horizon Zero Dawn",
    "genre": "Action RPG",
    "rating": 9,
    "completed": true
}
```

## Validering
API:et använder **Joi** för att validera informationen innan den sparas i databasen.
Följande regler gäller:
- Titel (title): Måste anges
- Genre (genre): Måste anges
- Betyg (rating): Måste vara ett heltal mellan 1 och 10
- Färdigspelat (completed): Ska vara *true* eller *false*
Om informationen saknas eller är ogiltig så returnerar API:et felmeddelande.

## HTTP-statuskoder

| Statuskod | Betydelse |
|---|---|
| `200 OK` | Begäran lyckades. |
| `201 Created` | Ett nytt spel har skapats. |
| `400 Bad Request` | Ogiltig information har skickats. |
| `404 Not Found` | Spelet kunde inte hittas. |
| `500 Internal Server Error` | Ett serverfel har inträffat. |