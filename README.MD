# Welcome to Leito's Cookie Shop
This Repo should work as a reference about how you can make a backend server with express.js & MercadoPago.SDK and how you should connect it to your React.js, ( or Angular.js, React Native, Ionic, etc. ).

# Installation

## Frontend

in file ./frontend/components/MPButton.js you must change

    const  backendURL = "https://yourbackendurl.com"

***This is only a Demo, you should config this kind of enviroment variables in your webpack configuration***

Now run the following commands:

    cd frontend
    npm run install
    npm run start
    
## Backend

complete the .env file in backend folder with your information and credentials

    PORT=8081
    MP_ACCESS_TOKEN=mercadopagoaccesstoken
    DOMAIN_URL=https://yourfrontendurl.app

then run the following commands

    cd backend
    npm run install
    npm run dev



# Deployment

### Deploy Backend / Heroku 

you can put the backend in its own Git Repo... or you can use the heroku CLI with



    $ heroku create
    Creating app... done, ⬢ thawing-inlet-61413
    https://thawing-inlet-61413.herokuapp.com/ | https://git.heroku.com/thawing-inlet-61413.git

```
$ git remote -v
heroku  https://git.heroku.com/thawing-inlet-61413.git (fetch)
heroku  https://git.heroku.com/thawing-inlet-61413.git (push)
```

    heroku git:remote -a thawing-inlet-61413
    set git remote heroku to https://git.heroku.com/thawing-inlet-61413.git
```
git subtree push --prefix backend heroku master  
```
### Deploy frontend / Netlify 

    cd frontend
    npm run build
    
    npm install netlify-cli -g
    netlify login
    netlify deploy
    
## How MercadoPago SDK work?

![usecase1.](https://raw.githubusercontent.com/lponciolo/mercadopago-react-express/main/readmeStaticFiles/mpusecase1.jpg)

![usecase2.](https://raw.githubusercontent.com/lponciolo/mercadopago-react-express/main/readmeStaticFiles/mpusecase2.jpg)

## API

### /payments/new

Makes a new Payment request
#### Request Body
```
{
cookies: 5
},
```
return init_point (Checkout URL) 

### /payments/webhook

MercadoPago API will Post in this endpoint when a payment status change


## Improvements

- Test Units
- Authentication Middleware implementation
- Encryption

## Found a bug? Missing a specific feature?

Feel free to  **file a new issue**  with a respective title and description on the the  [lponciolo/mercadopago-react-express](https://github.com/lponciolo/mercad