// require("./xyz.js") // include module from another file



// import { sum } from "./sum.js";


const {sum ,multiply} = require("./calculate");

var name = "namste Nodejs";

var a = 30;
var b =20;


sum(a,b);

multiply(a,b)

// require

// 1 resolving the module 
// what type of data is it file type

// 2 loading module 
   //  file content according to file type 
// 3 wrap inside an iife 
// 4 code evaluation 
// in this module.exports happen , return 

// 5 caching 

