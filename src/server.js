

const
    express             = require("express"),
    path                = require("path"),
    bodyParser          = require("body-parser"),
    hbs                 = require("express-hbs"),
    cors                = require('cors');

import React from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext, match} from 'react-router';
import routes from './routes';


const app = express();


app.set("port", process.env.PORT || 8080);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Make index false, so that it is not resolved by default.
app.use(express.static(path.resolve('build'), {index: false}));


app.set("views", path.resolve('build'));
app.set("view engine", "html");
app.engine("html", hbs.express4());


app.use((req, res) => {
    match({routes: routes, location: req.url}, (err, redirectLocation, renderProps) => {
        if (err) {
          return res.status(500).send(error);
        }
        else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        else if(renderProps){
            // async render using react-router `getComponent` in client code.
            let html = renderToString(<RouterContext {...renderProps}/>);
            res.render('index.html', {content: html});
        }
        else res.status(404).send('Page not found');
    });

});



app.listen(app.get("port"), () => {
    console.log("Express server starting on port: " + app.get("port"));
});
