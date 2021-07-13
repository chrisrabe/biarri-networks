# Software Developer Technical Challenge Solution 

## Getting started

Step 1: Set up the server

```shell
cd server
npm install # install all dependencies
npx prisma generate # generate prisma database
npx prisma db seed --preview-feature # populate database with mock data
npm start # start server
```

Step 2: Start up the client

```shell
cd biarri-scheduler-client
npm install # install dependencies
npm start # start client
```

## Limitations
- Existing scheduler library has limitations in terms of data formatting (too much effort to build one from scratch)

## Future Improvements
- I wish I did some test cases for both BE and FE
- Send any updates to the schedule for Backend
- Being able to filter by Role or Employee would make user experience better
- Error handling in the backend
- Only display employees which are rostered for the specified timeframe (this wasn't possible due to library limitations)
