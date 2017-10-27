require('dotenv').config();

const express = require('express'),
    massive = require('massive'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    session = require('express-session'),
    cors = require('cors'),
    axios = require('axios');

let app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
    .then((db) => {
        app.set('db', db);
        console.log('Database Connected Successfully..');
    })
    .catch((err) => {
        console.log('Could not connect..' + err)
    });

//ENDPOINTS

//GET

//POST

//PUT

//DELETE

//
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true
    })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new Auth0Strategy(
        {
            domain: process.env.AUTH_DOMAIN,
            clientID: process.env.AUTH_CLIENT_ID,
            clientSecret: process.env.AUTH_CLIENT_SECRET,
            callbackURL: process.env.AUTH_CALLBACK
        },
        function (accessToken, refreshToken, extraParams, profile, done) {
            try {
                app.get('db').find_user(profile.id).then((user) => {
                    if (user[0]) {
                        return done(null, user);
                    } else {
                        app
                            .get('db')
                            .create_user([
                                profile.displayName, profile.emails[0].value, profile.picture, profile.id
                            ])
                            .then((newUser) => {
                                return done(null, newUser[0]);
                            });
                    }
                });
            } catch (err) {
                return done(null, profile);
            }
        }
    )
);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.get('/auth', passport.authenticate('auth0'));

app.get(
    '/auth/callback',
    passport.authenticate('auth0', {
        successRedirect: 'http://localhost:3001/#/',
        failureRedirect: '/'
    })
);

app.get('/auth/me', (req, res, next) => {
    if (!req.user) {
        res.status(200).send('User not found');
    } else {
        res.status(200).send(req.user);
    }
});

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3001/#/');
});

// app.use(
//     session({
//         secret: process.env.SECRET,
//         resave: false,
//         saveUninitialized: true
//     })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//     new Auth0Strategy (
//         {
//             domain: process.env.AUTH_DOMAIN,
//             clientID: process.env.AUTH_CLIENT_ID,
//             clientSecret: process.env.AUTH_CLIENT_SECRET,
//             callbackURL: process.env.AUTH_CALLBACK
//         },
//         function(accessToken, refreshToken, extraParams, profile, done) {
//             const db = app.get('db');
//             try {
//                 db.find_user(profile.id).then((user) => {
//                     if (user[0]) {
//                         return done(null, user);
//                     } else {
//                         db.create_user([profile.displayName, profile.emails[0].value, profile.picture, profile.id])
//                         .then((newUser) => {
//                             return done(null, newUser[0]);
//                         });
//                     }
//                 });
//             } catch (err) {
//                 return done(null, profile);
//             }
//         }
//     )
// );

// passport.serializeUser(function(user, done) {
//     done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//     done(null, user);
// });

// app.get('/auth', passport.authenticate('auth0'));

// app.get('/auth/callback', passport.authenticate('auth0', {
//     successRedirect: 'http://localhost:3001/#/',
//     failureRedirect: 'http://localhost:3001/#/'
// }));

// app.get('/auth/me', (request, response, next) => {
//     if (!request.user) {
//         return response.status(404).send('User Not Found');
//     } else {
//         response.status(200).send(request.user);
//     }
// });

// app.get('/auth/logout', (request, response) => {
//     request.logout();
//     response.redirect(302, 'http://localhost:3021/#/');
// });

const port = 3021;
app.listen(port, console.log(`Reporting for duty on port ${port}`));