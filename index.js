const express = require("express"); 

const app = express(); 

app.get("/", (req, res) => { 
  res.send("Hello there"); 
  res.send("welcome to playback session");
}); 

app.get("/me", (req, res) => { 
  res.send("Hi I am kaye"); 
  res.send("kaye of hallownest");
}); 

app.listen(5000, () => { 
  console.log("listening"); 
}); 
