//Routes for news application
const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();
//Below place routes for application in the correct order
//My Would be based news Topics for each page.
//Home, Tech, etc...
// /news ->

//News API key
const apiKey = process.env.API_KEY;

/*

Possible Routes to choose:
These are Topic Headlines these wil be my li's




Limit 5:
General News
Business
Science
Technology
Health


*/
//Top headlines for the home page will have Current Top headlines in USA
router.get("/", async (req, res) => {
    try {
        const HEADLINES_NEWS  = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

        const response = await axios.get(HEADLINES_NEWS);

        const topHeadlines_newsRoute = response.data.articles;

        console.log("On the Top Headlines Page");
        res.render("news", {
            
            data: topHeadlines_newsRoute,
            

         
        });
    } catch (error) {
        console.log(error);
    }
});

//General News routes
router.get("/general", async (req, res) => { 

    try {
        const GENERAL_NEWS  = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${apiKey}`;

        const response = await axios.get(GENERAL_NEWS );

        const generalNewsoute = response.data.articles;

        console.log("On the General News Page");
        res.render("general", {
            
            data: generalNewsoute,
            

       
        });
    } catch (error) {
        console.log(error);
    }
} );

//Business News Page
router.get("/business", async (req, res) => {
    try {
        const BUSINESS_NEWS  = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

        const response = await axios.get(BUSINESS_NEWS );

        //Array of related news articles
        const businessNewsApiRoute = response.data.articles;

        console.log("On the Business Page");

        res.render("business", {
            data: businessNewsApiRoute,
        });
    } catch (error) {
        console.error;
    }
});

//Science News Page
router.get("/science", async (req, res) => {
    try {
        const SCIENCE_NEWS = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${apiKey}`;

        const response = await axios.get(SCIENCE_NEWS);

        //Array of related news articles
        const scienceNewsApiRoute = response.data.articles;

        console.log("On the Science Page");

        res.render("science", {
            data: scienceNewsApiRoute,
        });
    } catch (error) {
        console.log(error);
    }
});

// Technology route
router.get("/technology", async (req, res) => {
    try {
        const TECHNOLOGY_NEWS = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`;

        const response = await axios.get(TECHNOLOGY_NEWS);

        //Array of related news articles
        const technologyNewsApiRoute = response.data.articles;

        console.log("On the Technology Page");

        res.render("technology", {
            data: technologyNewsApiRoute,
        });
    } catch (error) {
        console.log(error);
    }
});

// Health Page
router.get("/health", async (req, res) => {
    try {
        const HEALTH_NEWS = `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${apiKey}`;

        const response = await axios.get(HEALTH_NEWS);

        //Array of related news articles
        const healthNewsApiRoute = response.data.articles;

        console.log("On the Health Page");

        res.render("health", {
            data: healthNewsApiRoute,
        });
    } catch (error) {
        console.log(error);
    }
});

//Search Results Page
router.get("/results", async (req, res) => {
    try {
        // searched for in the home page search bar
        let querySearch = req.query.search;

        console.log(
            "On the Results page that displays infomation about search movie"
        );

        const SEARCH_NEWS = `https://newsapi.org/v2/everything?q=${querySearch}&sortBy=popularity&apiKey=${apiKey}`;
        const response = await axios.get(SEARCH_NEWS);

        const searchedTerm = response.data.articles;

        res.render("results", {
            searchTerm: querySearch,
            searchData: searchedTerm,
        });
    } catch (error) {
        console.log(error);
        console.log("Error");
    }
});

module.exports = router;
