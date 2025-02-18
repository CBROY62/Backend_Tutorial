import express from "express";

const app = express();

app.get('/' , (req , res) =>{
   res.send('hello');
})


 app.get('/api/jocks' , (req ,res)=>{
    const jocks = [
        {
           "id": 1,
           "title" : " this is a first jock",
           "contants": " this jocks is a very funny",
        },

        {
            "id": 1,
            "title" : " this is a first jock",
            "contants": " this jocks is a very funny",
         },

         {
            "id": 1,
            "title" : " this is a first jock",
            "contants": " this jocks is a very funny",
         },

         {
            "id": 1,
            "title" : " this is a first jock",
            "contants": " this jocks is a very funny",
         },

         {
            "id": 1,
            "title" : " this is a first jock",
            "contants": " this jocks is a very funny",
         },
    ]

    res.send(jocks);
 })
const port = process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log( ` servet is stated from port number${port}`);
})