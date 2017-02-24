import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// // class App extends Component {
// //   render() {
// //     return (
// //       <div className="App">
// //         <div className="App-header">
// //           <img src={logo} className="App-logo" alt="logo" />
// //           <h2>Welcome to React</h2>
// //         </div>
// //         <p className="App-intro">
// //           To get started, edit <code>src/App.js</code> and save to reload.
// //         </p>
// //       </div>
// //     );
// //   }
// // }

// // export default App;




// class Salam extends React.Component {
//   render() {
//     return(
//       <div>
//       <h1 id="heading">YA NaBi Mustafa MarHaba</h1>
//         <br />
        
//         <input type="number" placeholder="Phone No ...."/> <br />
//         <input type="text/Email" placeholder="type Your Email Address ...."/>
//         <br />
       
//        <button>Submit </button>
      
      
      
//       </div>
//     )
//   }
// }



// export default Salam;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
  // class App extends Component {
  //   render() {
  //      return (
          // <div className="App"> <div className="App-header">
          //  <img src={logo} className="App-logo" alt="logo" />
          //   <h2>Welcome to React</h2> 
          //   </div> 
          // <p className="App-intro"> To get started, edit <code>src/App.js</code> and save to reload. </p> 
          // </div>
          //  );
          //  }
           
          // }
          //  export default App; 
         
         
         
         
         
         
          // class Hello extends React.Component{
          //    render() {
          //       return(
          //          <div className="Center" style={{fontSize: "50px"}}> 
          //           <h1 id="heading">Saylani Welfare Trust</h1>
          //           <input type="number" placeholder="Type Your M.No Here....... " />
          //           <br /> <br />
          //          <input type="text" placeholder="Type Your Email Here....... " />
          //           <br /> <br />
          //          <button type="button" >Submit</button>
          //           </div>
          //            )
          //            }
          //            } 
          //            export default Hello;
                     
                     
      //     class Button extends React.Component{
      //     // constructor(props) {
      //    //    super(props);
      //   //     this.state = { current: 0, count: 2, multy: 2}
      //   //     this.increment = this.increment.bind(this);
      //  //      this.dicriment = this.dicrimen.bind(this);
      //  constructor(props) {
      //    super(props);
      //     this.state = { current: 0, count: 2}
      //     this.increment = this.increment.bind(this);
      //     this.dicriment = this.dicriment.bind(this);
         
      //  increment() {
      //    return(
      //    this.setState({
      //      state: { current: 0, count: 2}

      //    })
      //    )
      //  }
      
      //  }
       
      //         render() {
      //           return(
      //             <div>
      //             <h1>Saylani Welfare International Trust</h1>
      //             <br /><br />
      //             <button button="button" onClick={this.state.increment}>Add</button>
      //             <br /><br />
      //             <button button="button">Subtrect</button>
                  
      //             </div>
      //           )
      //         }


      //          }


      //          export default Hello;

      // class Hello extends React.Component{
      //   constructor(props) {
      //     super(props);
      //     this.state= {count: 0,current: 1}
            

      //   }

      //   render() {
      //     return(
      //       <div>
      //       <h1>counter</h1>
      //       <br />
      //       <button> plus </button>
      //       <button> minus </button>
            
      //       </div>
      //     )
      //   }
      // }
      class App extends React.Component {
          constructor() {
            super();
            this.state ={count: 0, current: -1}
            this.incrimentCounter= this.incrimentCounter.bind(this);
            this.decrimentCounter= this.decrimentCounter.bind(this);
          } 
          // it is for add 
          incrimentCounter() {
            console.log("aksdkaskdls");
            let currentCount = this.state.count + 1;



            this.setState ({count: currentCount })

          }

          //it is for Subtrect
          decrimentCounter() {
            console.log("asdkjsaljd");
            let currentCount = this.state.current - 1;
            this.setState({current: currentCount})

          }

        render() {
          return(
            <div>
            <h1>Counter</h1>
            <br />
            <h2>{this.state.count}{this.state.current}</h2>

            <br /><br />

            <button onClick={this.incrimentCounter}> Plus </button>
            <button onClick={this.decrimentCounter}> Subtrect</button>
            </div>
          )
        }
      }

      export default App;