# tvl300-fullstack-dev

TLV300- Home Assignment for Full Stack Developer

This is production ready just change the proxy of the frontend to use the deployed version of the api

## Installation (local development)

### Backend

Navigate to `backend` directory.

```
cd backend
```

Then run

```
npm install
```

Create `.env` file and paste the given environment variables. (I will send through Linkedin)

After the installation is complete run

```
npm run dev
```

to spin up development server. Navigate to browser and enter

```
http://localhost:5001/api/whoisserver?domain=youtube.com&type=all
```

You will see json response like this

```
{
    "domain_info": {
        "domain_name": "youtube.com",
        "registrar_name": "MarkMonitor Inc.",
        "registration_date": "2005-02-15T05:13:12+0000",
        "expiration_date": "2025-02-15T00:00:00+0000",
        "estimated_domain_age": 7129,
        "host_names": "ns2.google.com,ns1.goo..."
    },
    "contact_info": {
        "registrant_name": "Google LLC",
        "technical_contact_name": "Google LLC",
        "administrative_contact_name": "Google LLC",
        "contact_email": "abusecomplaints@markmonitor.com"
    }
}
```

That's it backend server is running on port 5000

### Frontend

Navigate to `frontend` directory.

```
cd frontend
```

Create `.env` file and paste the given environment variables. (I will send through Linkedin)

Then run

```
npm install
```

After the installation is complete run

```
npm run dev
```

to spin up development server. Navigate to browser and enter

```
http://localhost:5000
```

Try to enter `amazon.com`

That's it client is running on port 5000

Notes:
To view error handling try entering invalid domain or killing the backend server
Select the type of information to view, by default set to `all`

## Deployment to production

### Backend

-   Clone this repository and push it to your github account
-   Create `vercel.json` in root directory of `backend` and paste this content

```
{
    "version": 2,
    "builds": [
        {
            "src": "./index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/"
        }
    ]
}
```

this tells vercel how do build and serve the api

-   Signin to your vercel account
-   Create new project and select the clone repo
-   In the `root` dir input select the backend 6. Add environment variables in the input field
-   Hit deploy and wait until the deployment completes, save the given url for later use

### Frontend

-   Using the same repository, create new project in vercel
-   select the frontend dir as root directory
-   Leave the defaults as is but populate the required environment variables
-   Hit deploy and wait. Thats it you can now visit the website using the url given after deployment

Vercel does the CI/CD so you dont have to worry redeploying it. just push your changes and it will automatically deploy

#### Vist the live version of my assessment

Frontend: https://tvl300-fullstack-dev-client-4y6gjgh9y.vercel.app/
Backend: https://tvl300-fullstack-dev.vercel.app/api/whoisserver?domain=amazon.com&type=all
