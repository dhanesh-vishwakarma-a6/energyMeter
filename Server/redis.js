const express = require("express")
const session = require('express-session');
const redis = require('redis');
const redisClient = redis.createClient();
const redisStore = require('connect-redis')(session);

const app = express()

redisClient.on('error', (err) => {
  console.log('Redis error: ', err);
});

app.use(session({
  secret: '#secret',
  name: 'electric_meters',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: new redisStore({
    host: 'localhost',
    port: 6379,
    client: redisClient,
    ttl: 86400
  }),
}));