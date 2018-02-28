# BobbyStone

HearthStone Like Game created with Django Rest Framework and Angular.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

Clone this repo or just download it as a zip and uncompress it in a folder.

Then, inside the folder `api` and `client` you'll find the instructions to start each project in the README.md.

## Author

**Enzo Cornand** - goulaheau@gmail.com
**Valerian Pyckaert**
**Thomas Mirabile**
**Simon Delaunay**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

### Routes

Pizzas' routes:
```
GET    /pizzas     - Find all the pizzas.
GET    /pizzas/:id - Find a pizza by his id.
POST   /pizzas     - Create a pizza.
PUT    /pizzas/:id - Update a pizza by his id.
PATCH  /pizzas/:id - Update a pizza by his id.
DELETE /pizzas/:id - Delete a pizza by his id.
```

Ingredients' routes:
```
GET    /ingredients     - Find all the ingredients.
GET    /ingredients/:id - Find an ingredient by his id.
POST   /ingredients     - Create an ingredient.
PUT    /ingredients/:id - Update an ingredient by his id.
PATCH  /ingredients/:id - Update an ingredient by his id.
DELETE /ingredients/:id - Delete an ingredient by his id.
```

See the [JSDoc Documentation](docs/jsdoc/index.html) for further details.

You can see all the code by using this view [Docco Documentation](docs/docco/app.html).

### Sockets.io

Events emitted:

```
[Pizza] Created 
[Pizza] Updated 
[Pizza] Removed 

[Ingredient] Created 
[Ingredient] Updated 
[Ingredient] Removed 
```

All the events transfer the object treated.

### Folder structure

```
project ----------------------- Root folder
│   app.js -------------------- Main file
│   app.spec.js --------------- Main tests
|   package.json -------------- Project dependencies 
│
├────asserts ------------------ Asserts files
│   │   ...
│
├────config ------------------- Config files defining the URIs of the DB
│   │   ...
│
├────controllers -------------- Controllers files
│   │   ingredients.js -------- Ingredients' controller
│   │   ingredients.spec.js --- Ingredients' controller tests
│   │   pizzas.js ------------- Pizzas' controller
│   │   pizzas.spec.js -------- Pizzas' controller tests
│
├────docs --------------------- Documentation  files
│   │   docco ----------------- Documentation generated using Docco
│   │   jsdoc ----------------- Documentation generated using JSDoc
│ 
├────helpers ------------------ Helpers files
│   │   router.js ------------- Router validation helper
│   │   view.js --------------- View helper to know port used
│
├───models -------------------- Models files
│   │   ingredient.js --------- Ingredient's model
│   │   pizza.js -------------- Pizza's model
│
├───routes -------------------- Routes files
│   │   ingredients.js -------- Ingredients' routes
│   │   pizzas.js ------------- Pizzas' routes
│
└───views --------------------- Views files
    │   socket.html ----------- Socket's view file (test purpose)
```
