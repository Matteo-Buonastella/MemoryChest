

import './App.css';

import axios from 'axios';
import React, { Component } from 'react';


class App extends Component {

  constructor() {
    super();
    this.state = { memories: [] ,
    UserID : '1',
    MemoryID:'0001' ,title:'test'
    };
    this.handleSubmit = this.handleSubmit.bind(this)
}
componentDidMount(){
   axios.get("http://localhost:8081/data").then((res) => {
        this.setState({
            memories: res.data
        });

    })
}



handleSubmit(event) {
  console.log("handlesubmit")
   event.preventDefault()
   var data = {
    UserID: this.state.UserID,
    MemoryID: this.state.MemoryID,
    title:this.state.title
  }
  console.log(data)
  // fetch("http://localhost:8081/addMemory", {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(data)
  // })
  axios.post("http://localhost:8081/addMemory",data).then(function(response) {
      if (response.status >= 400) {
        console.log(response.status);
        throw new Error("Bad response from server");
        
      }
      return response.json();
  }).then(function(data) {
      console.log(data)    
      if(data === "success"){
         this.setState({msg: "Thanks for registering"});  
      }
  }).catch(function(err) {
      console.log(err)
  });
}


  render() {
    return (
      <div>
      <table className="table table-striped table-bordered">
      <thead>
          <tr>
          
              <th>userID</th>
              <th>title</th>
              <th>description</th>
              <th>category</th>
              <th>status</th>
              <th>Privacy	</th>
              <th>Taged</th>
              <th>media_location</th>
              <th>media_type</th>
              <th>upload_date</th>
          </tr>
      </thead>
      <tbody>
          {this.state.memories.map(function (memories, index) {
              return (
                  <tr>
                      <td>{memories.userID}</td>
                      <td>{memories.title}</td>
                  </tr>
              );
          })}
          
      </tbody>
  </table>
  
  <form onSubmit={this.handleSubmit}>
  
  <input type="submit" value="Submit" />
</form>
</div>

       
       
        
    );
  }
}

export default App;

// function App() {


//   return (  <form class="form-horizontal">
//   <fieldset>
  
  
//   <legend>Form Name</legend>
  
  
//   <div class="form-group">
//     <label class="col-md-4 control-label" for="filebutton">File Button</label>
//     <div class="col-md-4">
//       <input id="filebutton" name="filebutton" class="input-file" type="file"/>
//     </div>
//   </div>
//   <div class="form-group">
    
//         <label class="control-label" for="date">Date</label>
//         <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text"/>
//       </div>
  
  
//   <div class="form-group">
//     <label class="col-md-4 control-label" for="Title">Title</label>  
//     <div class="col-md-4">
//     <input id="Title" name="Title" type="text" placeholder="placeholder" class="form-control input-md" required=""/>
//     <span class="help-block">we</span>  
//     </div>
//   </div>
  
    
//   <div class="form-group">
//     <label class="col-md-4 control-label" for="Description">Description</label>
//     <div class="col-md-4">                     
//       <textarea class="form-control" id="Description" name="Description"></textarea>
//     </div>
//   </div>
  
  
//   <div class="form-group">
//     <label class="col-md-4 control-label" for="tag">tag</label>  
//     <div class="col-md-4">
//     <input id="tag" name="tag" type="text" placeholder="" class="form-control input-md"/>
      
//     </div>
//   </div>
  
  
//   <div class="form-group">
//     <label class="col-md-4 control-label" for="radios-privacy">Privacy</label>
//     <div class="col-md-4"> 
//       <label class="radio-inline" for="radios-privacy-0">
//         <input type="radio" name="radios-privacy" id="radios-privacy-0" value="private" checked="checked"/>
//         private
//       </label> 
//       <label class="radio-inline" for="radios-privacy-1">
//         <input type="radio" name="radios-privacy" id="radios-privacy-1" value="public"/>
//         public
//       </label>
//     </div>
//   </div>
  
//   <div class="form-group">
//     <label class="col-md-4 control-label" for="AddMemory"></label>
//     <div class="col-md-4">
//       <button id="AddMemory" name="AddMemory" class="btn btn-primary">ADD</button>
//     </div>
//   </div>
  
//   </fieldset>
//   </form>
  
  
//   );
// }

// export default App;
