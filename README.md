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
http://localhost:5001/api/whoisserver?domain=amazon.com&type=all
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
