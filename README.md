# tvl300-fullstack-dev

TLV300- Home Assignment for Full Stack Developer

## Installation

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
http://localhost:5001/whoisserver?domain=amazon.com&type=all
```

You will see json response like this

```
{
    "domain_info": {
        "domain_name": "amazon.com",
        "registrar_name": "MarkMonitor Inc.",
        "expiration_date": "2024-10-30T07:00:00+0000",
        "estimated_domain_age": 10888,
        "host_names": "ns1.amzndns.org,ns2.am..."
    },
    "contact_info": {
        "registrant_name": "Amazon Technologies, Inc.",
        "technical_contact_name": "Amazon Technologies, Inc.",
        "administrative_contact_name": "Amazon Technologies, Inc.",
        "contact_email": "hostmaster@amazon.com"
    }
}
```

That's it backend server is running on port 5000

### Frontend

Navigate to `frontend` directory.

```
cd frontend
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
http://localhost:5000
```

Try to enter `amazon.com`

That's it client is running on port 5000

Notes:
To view error handling try entering invalid domain or killing the backend server
Select the type of information to view, by default set to `all`
