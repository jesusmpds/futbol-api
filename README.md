# Futbol Players API

## API Definition:

- GET /api/players : Get all players

- POST /api/players : Create new player in player list

```
Data needed for POST
JSON object with these properties:

    recipeId: Number,
    categoryId: Number,
    title: String,
    photo_url: String,
    photosArray: Array,
    time: String,
    description: String,

```

- GET /api/players/id/{id} : Get player info by ID

- GET /api/players/positions : Get player positions info

- GET /api/players/topscorers : Get top scorers info
