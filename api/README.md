# BobbyStone API

RESTful API based on Django Rest Framework.

## Getting Started

### Prerequisites

[Python](https://www.python.org/downloads/) 3.6.3 or higher is required.

Then install all the dependencies with pip.

```
pip install Django==2.0.1
pip install djangorestframework==3.7.7
pip install markdown      
pip install django-filter 
pip install -U channels==1.1.8
pip install Pillow==5.0.0
```

### Installing

Open the console and get inside this directory.

Then get the database working (we are using sqlite).

```
python manage.py makemigrations app
python manage.py migrate
```

Next, create at least one superuser.

```
python manage.py createsuperuser
```

Now, you can run the server.

```
python manage.py runserver
```

### Create your datas

Some datas are primordial, so you'll have to create them.

Go to http://localhost:8000/admin and connect with your super user.

Now create at least a Rule, you can let the default or personnalize them.

Next, you should create some cards, you can let the field image empty, there is a default image. Create at least the same number that you have defined in the rules.

You can also create some Effects for you cards.

Now, you can create some standards Deck available for everyone by letting empty the field user. Or you can create your own decks in the client.

That's all what is necessary for the server.

## Acknowledgments

### Folder structure

```
api --------------------------- Root folder
│   .gitignore ---------------- Files ignore by Git 
│   manage.py ----------------- Django file to launch some commands
│   README.md ----------------- Documentation 
│
├────api ---------------------- Global settings of the project
│   │   ...
│
├────app ---------------------- Main folder
│   │───migrations ------------ Migrations folder
|   |   │   ...
|   | 
│   │──-models ---------------- Models folder
|   |   │   ...
|   | 
│   │   admin.py -------------- All the entities in the Admin site
│   │   app.py ---------------- Config file
│   │   consumers.py ---------- Websockets' functions
│   │   game.py --------------- All the actions during the game
│   │   routing.py ------------ Websockets' routes
│   │   serializers.py -------- Serializers used for REST
│   │   tests.py -------------- Tests 
│   │   urls.py --------------- Routes 
│   │   views.py -------------- ViewSets used for REST 
│
├────db ----------------------- Database files
│   │   ...
|
├────media -------------------- Media files
│   │   ...
```
