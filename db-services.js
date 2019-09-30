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
          
          console.log(req.body.title);
          
        

        
  var filex= req.files.file;
 var sql ="insert into memory(userID,title,description,category,status,Privacy,Taged,media_location,media_type,upload_date) values('"+req.body.UserID+"','"+req.body.title+"','"+req.body.description+"','"+req.body.category+"','false','"+req.body.privacy+"','null','"+filex.name+"','"+req.body.fileExt+"','"+req.body.mdate+"')"
 //var sql ="insert into memory (MemoryID,userID,title) values(12375,'testuser','dfsdfds')";
 

     
 
        
  if(req.files.file ===null){
          return res.status(450).jason({msg: 'nofile to upload'})
        }

        else{
          dbconnection.query(sql, (err, result)=>{
     
            console.log(err);
            if(err){
    
                return res.status(500).send(err);
    
            }
            else{
              filex.mv(`./ ${filex.name}`, err => {
                console.log('process')
                console.log(result.insertId)
                if (err) {
                  console.error(err);
                  
                  return res.status(475).send(err);
                }
                console.log("success");
            
                //res.json({ fileName: filex.name, filePath: `/uploads/${filex.name}` });
              });
              
            }
            
            
            res.send(result);
            
            
            console.log(result);
    
       }); 
          
        }
        
        },





        addUser:(req,res)=>{
          console.log("add memory")
          console.log(req.body.MemoryID);
          console.log(req.headers);
          console.log(req.body +"BODY");
        

        
 var sql ="insert into Users(FirstName,LastName,DOb,Email_id, status, userPass) values('"+ req.body.FirstName+"','"+req.body.LastName +"','"+req.body.DOb+"','"+req.body.Email_id+"','"+req.body.status+"','"+req.body.userPass+ "')"
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
