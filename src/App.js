// import React, { Component } from 'react'
// import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
// import getWeb3 from './utils/getWeb3'
// import ipfs from './ipfs'
// import Web3 from 'web3';
// import './css/oswald.css'
// import './css/open-sans.css'
// import './css/pure-min.css'
// import './App.css'

// var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

// class App extends Component {
  
  
//   constructor(props) {

//     super(props)

//     this.state = {
//       ipfsHash:'',
//       web3: null,
//       buffer: null,
//       account: null,
//       isTest:true,
//       myarray:[],
//       block: []
//     }
//     this.captureFile = this.captureFile.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
    
//   }




//   componentWillMount() {
//     // Get network provider and web3 instance.
//     // See utils/getWeb3 for more info.
    
//     // var block_hash = this.props.match.params.blockHash;
//     // this.getBlockState(block_hash);

//     getWeb3
//     .then(results => {
      
//       this.setState({
//         web3: results.web3
//       })

//       // Instantiate contract once web3 provided.
//       this.instantiateContract()
//     })
//     .catch(() => {
//       console.log('Error finding web3.')
//     })
//   }



//   getBlockState(block_hash) {
//     console.log("Block hash: " + block_hash);
//     // Use web3 to get the Block object
//     var currBlockObj = web3.eth.getBlock(block_hash);
//     console.log(JSON.stringify(currBlockObj));
//     // Set the Component state
//     this.setState({
//       block_id: currBlockObj.number,
//       block_hash: currBlockObj.hash,
//       block_ts: Date(parseInt(this.state.block.timestamp, 10)).toString(),
//       block_txs: parseInt(currBlockObj.transactions.slice().length, 10),
//       block: currBlockObj
//     })
//   }

//   instantiateContract() {
//     /*
//      * SMART CONTRACT EXAMPLE
//      *
//      * Normally these functions would be called in the context of a
//      * state management library, but for convenience I've placed them here.
//      */

//     const contract = require('truffle-contract')
//     const  simpleStorage = contract(SimpleStorageContract)
   
//     // const simpleStorage = contract(SimpleStorageContract)
//     console.log("Current Provider",this.state.web3.currentProvider)
//     simpleStorage.setProvider(this.state.web3.currentProvider)

//     // Get accounts.
//     this.state.web3.eth.getAccounts((error, accounts) => {
  
//       simpleStorage.deployed().then((instance) => {
//         console.log("value of instane",instance)
//       this.simpleStorageInstance = instance
//       console.log("this simplestorageinstance",this.simpleStorageInstance)
//       console.log("SETACCOUNT",accounts)
//       this.setState({ account: accounts[0] })
//       // Get the value from the contract to prove it worked.
//       return this.simpleStorageInstance.get.call(accounts[0])
//       }).then((ipfsHash) => {
//         console.log("InstantiateContract IPFS HASH",ipfs)
//         // Update state with the result.
//         return this.setState({ ipfsHash })
//       })
//     })
//   }

//   captureFile(event) {
    
//     event.preventDefault()
//     const file = event.target.files[0]
//     const reader = new window.FileReader()
//     reader.readAsArrayBuffer(file)
//     reader.onloadend = () => {
//     this.setState({ buffer: Buffer(reader.result) })
//     console.log('buffer', this.state.buffer);

//     }
//   }

//   // onSubmit(event) {
//   //   debugger;
//   //   console.log("Im called")
//   //   event.preventDefault()
//   //   ipfs.files.add(this.state.buffer, (error, result) => {
//   //     if(error) {
//   //       console.error(error)
//   //       return
//   //     }
//   //     this.simpleStorageInstance.set(result[0].hash, { from: this.state.account }).then((r) => {
//   //       console.log("r",r)
//   //       return this.setState({ ipfsHash: result[0].hash })
//   //       console.log('ifpsHash', this.state.ipfsHash)
//   //     })
//   //   })
//   // }


//    onSubmit(event){


//     debugger;
//     const contract = require('truffle-contract')
//     const simpleStorage = contract(SimpleStorageContract)
 
  
//     event.preventDefault()
//      ipfs.files.add(this.state.buffer,(error,result) => {    
//        console.log("result of IPFS",result)    

//        if(error){
//         console.error(error)
//         return
//        }

//        console.log("resultHash",result[0].hash)

//  //Ethereum Storage   

// //  this.simpleStorageInstance.get(this.state.account).then((r)=>{
// //   console.log("result GET ",r);
  
// //   // console.log('ipfsHash lenght',this.state.ipfsHash.length);
// //  // window.alert("Images Uploaded ")
// //  // this.state.myarray.push(result[0].hash)
// //   //console.log("myArrayState",this.state.myarray)
// // //  this.state.block.push(result[0].hash);
// // //  console.log("block are ",block)


// // //console.log("IPFS HASH",result[0].hash)
// // //return this.setState({ ipfsHash : result[0].hash })

 
// // })


// // console.log("Account address",this.state.account)
// // console.log("result accounts are",result[0].hash)
// // var a=[];
// // a=result[0].hash
// // console.log("A account No",a)
// // var   x ={
// //   from :this.state.account
// // }
// // console.log("Value of x",x)

// // var  arb=[];
// // arb=[a,x]



// var a = [result[0].hash];
// var 
// b={

//   from:this.state.account
// }
// var  c =this.state.account;
// var d=JSON.stringify(c)
// console.log("value of D",d)
//   var abc=[a,{from:d}]
  
//   console.log("value of abc",abc)

// console.log("VAlue of a",a )
// console.log("value of b",b)




// // this.simpleStorageInstance.set(result[0].hash, {from:this.state.account}).then((r)=>{

// this.simpleStorageInstance.set([abc]).then((r)=>{
  

//   console.log("Value of r",r)
//   console.log("result are ",result);
//     // console.log('ipfsHash lenght',this.state.ipfsHash.length);
//     window.alert("Images Uploaded ")

  
  
//   console.log("IPFS HASH",result[0].hash)
//   return this.setState({ ipfsHash : [result[0].hash] })

   
//   })
// console.log("Result Hash",result[0].hash)
// // this.simpleStorageInstance.set(result[0].hash,{from :this})
// // this.simpleStorageInstance.set( [result[0].hash,{from:this.state.account}]).then((r)=>{

// //     console.log("IMCALLED",r)    
// //   })



//   })
//  }



//   // render() {


  
//   //   return (
//   //     <div className="App">
//   //       <nav className="navbar pure-menu pure-menu-horizontal">
//   //         <a href="#" className="pure-menu-heading pure-menu-link">IPFS File Upload DApp</a>
//   //       </nav>

//   //       <main className="container">
//   //         <div className="pure-g">
//   //           <div className="pure-u-1-1">
//   //             <h1>Your Image</h1>
//   //             <p>This image is stored on IPFS & The Ethereum Blockchain!</p>
              
//   //   {/* <img src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} alt=""/> */}

           
//   //             <form onSubmit={this.onSubmit} >
              
//   //             <h2>Upload Image</h2>
//   //             <input type='file' onChange={this.captureFile} />
//   //             <input type='submit'/>

//   //             </form>


//   //             <form method="get" action={`https://ipfs.io/ipfs/${this.state.ipfsHash}`}>
//   //             <button type="submit">Download!</button>
//   //             </form>





//   //           </div>
//   //         </div>
//   //       </main>
//   //     </div>
//   //   );
//   // }




//   render() {
    
    
      
//         return (
//           <div className="App">
//             <nav className="navbar pure-menu pure-menu-horizontal">
//               <a href="#" className="pure-menu-heading pure-menu-link">IPFS File Upload DApp</a>
//             </nav>
    
//             <main className="container">
//               <div className="pure-g">
//                 <div className="pure-u-1-1">
//                   <h1>Your Image</h1>
//                   <p>This image is stored on IPFS & The Ethereum Blockchain!</p>
                  
//         {/* <img src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} alt=""/> */}
    
               
//                   <form onSubmit={this.onSubmit} >
                  
//                   <h2>Upload Image</h2>
//                   <input type='file' onChange={this.captureFile} />
//                   <input type='submit'/>
    
//                   </form>
//                   <form method="get" action={`https://ipfs.io/ipfs/${this.state.ipfsHash}`}>
//                   <button type="submit">Download!</button>
//                   </form>
//                    </div>
//               </div>
//             </main>
//           </div>
//         );
//       }
//     }




// // }

// export default App









import React, { Component } from 'react'
import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import DocumentStorageContract from '../build/contracts/DocumentStorage.json'
import getWeb3 from './utils/getWeb3'
import ipfs from './ipfs'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

      extension:'',
      employee:null,
      ipfsHash: '',
      web3: null,
      buffer: null,
      account: null,
      temp:'',
      msg:''

    }
    this.captureFile = this.captureFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clickme =this.clickme.bind(this)
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }




  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const simpleStorage = contract(SimpleStorageContract)
    simpleStorage.setProvider(this.state.web3.currentProvider)

    const documentStorage = contract(DocumentStorageContract)
    documentStorage.setProvider(this.state.web3.currentProvider)


    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
    //   debugger;
     console.log("account are",accounts);

      documentStorage.deployed().then((Docinstance) => {

        console.log("Docinstance",Docinstance)
        this.documentStorageInstance = Docinstance
      this.setState({ account: accounts[0] })
      
      //   // Get the value from the contract to prove it worked.
        return this.documentStorageInstance.getEmployeeDocuments
      .call(1) 
        
      }).then((Employee) => {


this.state.temp=Employee.toString();
console.log("TEmp",this.state.temp)
        console.log("Employee1 full",Employee.toString());

        console.log("Employee1",Employee[0]);

  

      })
  })



    this.state.web3.eth.getAccounts((error, accounts) => {
    //   debugger;
     console.log("account are",accounts);

      documentStorage.deployed().then((Docinstances) => {

        console.log("Docinstance",Docinstances)
        this.documentStorageInstance = Docinstances
      this.setState({ account: accounts[0] })
      
      //   // Get the value from the contract to prove it worked.
        return this.documentStorageInstance.getEmployeeDocuments
      .call(2) 
        
      }).then((Employee) => {

        console.log("Employee2 full",Employee.toString());
          
      var a=[Employee[0],Employee[1]];

for(var i=0;i<=a.length;i++){
        console.log("Employee2",a[i]);
}
       

        
      //   // Update state with the result.        

      //    documentStorageInstance.Employees(i).then(function(employee)=> {
      //     var id = Employee[0];
      //     var hash = Employee[1];
        // this.state.employee =Employee;
        //  console.log('hashes in blockchain 64'+this.state.employee)

        
      //   return this.setState({ipfsHash: ipfsHash +","+this.state.employee})

      })
    })
  
}

  captureFile(event) {
    event.preventDefault()
    const file = event.target.files[0]
    const ext = event.target.files[0].name.split('.').pop().toLowerCase()
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)

      return  this.setState({extension:ext });
      
      

    }
  }



  clickme(msg)
  {

this.setState({msg:msg})
    const contract = require('truffle-contract')
    const simpleStorage = contract(SimpleStorageContract)
    simpleStorage.setProvider(this.state.web3.currentProvider)
    const documentStorage = contract(DocumentStorageContract)
    documentStorage.setProvider(this.state.web3.currentProvider)

    console.log("msg",msg);

    this.state.web3.eth.getAccounts((error, accounts) => {
      //   debugger;
       console.log("account are",accounts);
  
        documentStorage.deployed().then((Docinstance) => {
  
          console.log("Docinstance",Docinstance)
          this.documentStorageInstance = Docinstance
        this.setState({ account: accounts[0] })
        
        //   // Get the value from the contract to prove it worked.
          return this.documentStorageInstance.getEmployeeDocuments
        .call(msg) 
          
        }).then((Employee) => {
  
  
  this.state.temp=Employee.toString();
  console.log("TEmp",this.state.temp)
          console.log("Employeessssss full",Employee.toString());
          var str= Employee.toString();
         var aTemp =[];
         console.log("String of Hashes",str.substring(2))
         aTemp=str.split(",");
         var ipfsCandidate;
        
         ipfsCandidate=aTemp[1]
      console.log("ipfsCandidate",ipfsCandidate)
      this.state.temp=ipfsCandidate
      console.log("thisStateIpfs",this.state.temp)

      return this.setState({ ipfsHash: str.substring(2) })
     
         
         })
      })
    


      
        
        









 }


 




  onSubmit(event,msg) {


   console.log("extension are ",this.state.extension);

   console.log("IM called onsubmit",this.state.msg)
   var value =[];
   value=this.state.msg
   console.log("value are ",value)
   if(value.length ==0)
    {

      window.alert("please select candidate")
    }
   
   event.preventDefault()
  ipfs.files.add(this.state.buffer, (error, result) => {
      if(error) {
        console.error(error) 
        return
      }


      // this.simpleStorageInstance.set(result[0].hash +","+this.state.ipfsHash, { from: this.state.account }).then((r) => {
      //   window.open('https://ipfs.io/ipfs/${this.state.ipfsHash}', '_blank');
      //   console.log('ifpsHash', this.state.ipfsHash)
      //   console.log('91',result[0].hash +","+this.state.ipfsHash)

      //   var name = document.getElementById('fileInput');
      //   console.log('file', name.files.item(0).name)

     
      //   return this.setState({ ipfsHash: result[0].hash })

        
      // })

console.log("result Hash",result[0].hash)
        // this.documentStorageInstance.storeDocumentHash(value,result[0].hash+","+this.state.ipfsHash,{ from: this.state.account }).then((r) => {
          this.documentStorageInstance.storeDocumentHash(value,result[0].hash+","+this.state.ipfsHash,{ from: this.state.account }).then((r) => {
            
        console.log("Appended hash ",result[0].hash+","+this.state.ipfsHash);
          console.log("value of r ",r)
        // window.open('https://ipfs.io/ipfs/${this.state.ipfsHash}', '_blank');
        // console.log('ifpsHash', this.state.ipfsHash)
        // console.log('91',result[0].hash +","+this.state.ipfsHash)

        // var name = document.getElementById('fileInput');
        // console.log('file', name.files.item(0).name)

     
       //  return this.setState({ employee: result[0].hash })

        
      })

    })
  }

  

  renderData(arr){
    console.log("IM CAlled")
    const numbers = arr;
    console.log("Full Array",numbers)
    console.log("First Hash",numbers[0])
    console.log("Second Hash",numbers[1])
    const listItems = numbers.map((number) =>
   
   <a href={`https://ipfs.io/ipfs/${number}`} target="_blank"><object data={`https://ipfs.io/ipfs/${number}`} height="100" width="100" type="image/png"><img src="doc.png" alt="" height="100" width="100"/></object>{'\n'}</a>     

    );
    
    
    return (
      <ul>{listItems}</ul>
    );
  }

 

  render() {
     const arr = this.state.ipfsHash.split(',');

    

     
    /// var numbr=
  
      
      for (var i=0; i<arr.length; i++) {
        if(arr[i]=='')  {
          arr.splice(i, arr.length);
          console.log("removed:",arr.length);
        }

            console.log(i,arr[i]);
            
            //a b c
        }

     

       
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
           <h1 className="pure-menu-heading pure-menu-link">Employee Record Management</h1>
        </nav>




        <main className="container">

          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>Compunnel</h1> 
              <p>List of Employees:</p>


              <div>
  
  <ul>
    <li id='1'  onClick={() =>this.clickme(1)}>Vikram</li>
    <li id='2'  onClick={() =>this.clickme(2)}>Suvansh Aneja</li>
    <li id='3'  onClick={() =>this.clickme(3)} >Faiz Akram</li>
    <li id='4'  onClick={() =>this.clickme(4)} >Tanushri Soni</li>
    <li id='5'  onClick={() =>this.clickme(5)}>Kim </li>
</ul>







    {/* <li onClick ={this.clickme} >FAIZ AKRAM</li> */}


           </div>

              <div>
                {this.renderData(arr)}
              </div>             
                
  
            <h2>Upload Image</h2>
              <form onSubmit={this.onSubmit} >
               <div className="pure-button-primary">
                <input type='file' id= 'fileInput' onChange={this.captureFile} />
                </div><br/>
                <div className="pure-button-primary">
                <input type='submit' />
               </div>
              </form>

            </div>

<div>      
 



</div>
          </div>
        </main>
      </div>
    );
  }
}

export default App










