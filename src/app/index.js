const cheerio = require('cheerio');
const request = require('request');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/stocks/:userId", (req, res, next) => {

    // TODO: get user by id
    // TODO: get stocks from user
    // TODO: iterate by user's stocks
    
    [].forEach(it => {
        request(`https://statusinvest.com.br/acoes/${it.id}`, (err, reqResponse, body) => {
            if (err) {
                res.status(500).json({ message: 'Internal Server Error' });
            }
            var $ = cheerio.load(body);
            const text = $("#main-2 > div:nth-child(4) > div > div.pb-3.pb-md-5 > div > div.info.special.w-100.w-md-33.w-lg-20 > div > div:nth-child(1) > strong").text();
            it.currentValue = text;
            it.currentTotal = it.quantity * new Number(text.replace(',', '.'));
        });
    });

    res.status(200).json(getMinhasAcoes);
});

module.exports = app;