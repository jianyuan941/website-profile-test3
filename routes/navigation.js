//import part
const path = require('path');

//import express
const express = require('express');
const router = express.Router();

//import controller
//const navConstroller = require('../controllers/navigation');

//=======================================================================================================
// / => GET TO HOME PAGE
router.get('/', (req,res, next) =>{
    res.render('index');
}); 
// / => GET TO CALCULATOR PAGE
router.get('/redirect-to-calculator', (req,res, next) =>{
    res.render('calculator');
});
// / => GET TO BLOGGING PAGE
router.get('/redirect-to-blogging', (req,res, next) =>{
    res.render('blogging');
});
// / => GET TO FORM PAGE
router.get('/redirect-to-form', (req,res, next) =>{

        const monthYearLastMonth = new Date(new Date().getFullYear(), new Date().getMonth()-1, 1).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
        const monthYearTwoMonth = new Date(new Date().getFullYear(), new Date().getMonth()-2, 1).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
        const monthYearThreeMonth = new Date(new Date().getFullYear(), new Date().getMonth()-3,1).toLocaleString('en-US', {month: 'long', year: 'numeric'});
        const monthYearfourMonth = new Date(new Date().getFullYear(), new Date().getMonth()-4,1).toLocaleString('en-US',{month: 'long', year: 'numeric'});
        const monthYearFiveMonth = new Date(new Date().getFullYear(), new Date().getMonth()-5,1).toLocaleString('en-US',{month: 'long', year: 'numeric'});
        const monthYearSixMonth = new Date(new Date().getFullYear(), new Date().getMonth()-6,1).toLocaleString('en-US',{month: 'long', year: 'numeric'});
        const lastYear = new Date(new Date().getFullYear()-1,0,1).toLocaleString('en-US', {year: 'numeric'});
        const last2Year = new Date(new Date().getFullYear()-2,0,1).toLocaleString('en-US', {year: 'numeric'});
        res.render('form',
            {monthYearLastMonth, 
            monthYearTwoMonth, 
            monthYearThreeMonth, 
            monthYearfourMonth, 
            monthYearFiveMonth, 
            monthYearSixMonth,
            lastYear,
            last2Year});
});




module.exports = router;