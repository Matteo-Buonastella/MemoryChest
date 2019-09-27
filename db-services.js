const mysql = require('mysql');
const bodyParser = require('body-parser');

//load the schema





module.exports={
     

        getAllMemories: (req,res)=>
        {
          
          var sql = 'SELECT * FROM memory';
          
          dbconnection.query(sql, (err, result)=>{
            console.log(err);
              if(err) throw err;
              
            
              res.send(result);
          });
        },

        getValidEmail: (req,res)=>
        {
          
          var sql = "SELECT Count(*) FROM Users where Email_id = '" + req.query.UserEmail + "'";
          dbconnection.query(sql, (err, result)=>{
            console.log(err);
              if(err) throw err;
              
              res.send(result);
          });
        },

        addNewMemory:(req,res)=>{
            console.log("add memory")
            
            console.log(req.body.MemoryID);
            console.log(req.headers);
            console.log(req.body +"BODY");
          

          
   var sql ="insert into memory(MemoryID,userID,title) values('"+req.body.MemoryID+"','"+req.body.UserID+"','"+req.body.title+"')"
   //var sql ="insert into memory (MemoryID,userID,title) values(12375,'testuser','dfsdfds')";
  
   dbconnection.query(sql, (err, result)=>{
       
        console.log(err);
        if(err){

            return res.status(500).send(err);

        }
        res.send(result);
        
        
        console.log(result);

   }); 
        },


        addUser:(req,res)=>{
          console.log("add memory")
          console.log(req.body.MemoryID);
          console.log(req.headers);
          console.log(req.body +"BODY");
        

        
 var sql ="insert into Users(UserID,FirstName,LastName,DOb,Email_id, status) values('"+req.body.UserID+"','"+req.body.FirstName+"','"+req.body.LastName +"','"+req.body.DOb+"','"+req.body.Email_id+"','"+req.body.status+ "')"
 //var sql ="insert into memory (MemoryID,userID,title) values(12375,'testuser','dfsdfds')";

 dbconnection.query(sql, (err, result)=>{
     
      console.log(err);
      if(err){

          return res.status(500).send(err);

      }
      res.send(result);
      
      
      console.log(result);

 }); 
      },

    
};
