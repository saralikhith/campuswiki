const exp=require('express');
//import path
const path = require('path');


//create express object
const app=exp();


//connect express server with mongodb data base

//get connection string
const dataBaseUrl='mongodb+srv://sara:<password>@cluster0.2zaxd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//import mongoclient from mongodb
const mc=require('mongodb').MongoClient

//connect to database
mc.connect(dataBaseUrl,(err,client)=>{
    if(err){
        console.log(err)
    }
    else{
        //get database object from client object
        let dataBaseObj=client.db('gamesdatabase')
        console.log('connected to database')
       
        //get collection object
        let userCollectionObj=dataBaseObj.collection('usercollection')
        let adminCollectionObj=dataBaseObj.collection('admincollection')
        let productCollectionObj=dataBaseObj.collection('productcollection')
         let contactUsCollectionObj=dataBaseObj.collection('contact-uscollection')
         let usercartCollectionObj=dataBaseObj.collection('usercartcollection')

        //set collection obj to exp obj
        app.set('userCollectionObj',userCollectionObj)
        app.set('adminCollectionObj',adminCollectionObj)
        app.set('productCollectionObj',productCollectionObj)
        app.set('contactUsCollectionObj',contactUsCollectionObj)
        app.set('usercartCollectionObj',usercartCollectionObj)

    }

})




//connect server to angular app
app.use(exp.static(path.join(__dirname,'./dist/campuswiki/')))


//assign port number to server
port=3000
app.listen(port,()=>{
           console.log(`server listening to ${port}....`)
})