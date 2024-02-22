import React from "react";
import  ReactDOM  from "react-dom/client";
  
// this is a core react but this would create messy in writing hence we use JSX
// this is how we create react element using react
//  const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "hello world from React!"
//   );
  
//   console.log(heading);
  
//   const root = ReactDOM.createRoot(document.getElementById("root"));
  
//   root.render(heading);  


//   // package.json -->scripts --> "start":"parcel index.html",
//                                   "build":"parcel build index.html",

/* Terminal --> npm start or npm run start(behind the scence it is called as parcel index.html becoz we configure it package.json)
npm run build (this will build the project)*/



// JSX--> javascript xml (is not a html in js ,but it is like html)


// React element 
// const jsxHeading = <h1 id="heading" className="heading1">this is using JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
  
// root.render(jsxHeading); 


// React Component

// const Heading = ()=>{
//     return <h1>Namaste React,This is function component</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
  
// root.render(<Heading/>); 

// or

// const Heading1= ()=>(
//  <h1>Namaste React,This is function component without return</h1>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
  
// root.render(<Heading1/>); 


// component composition : composing two component in one another 

// function Title (){
//    return <h1>This is using normal function</h1>
// }

// const Heading =()=>(
//     <div id="container">
//      <Title/>
//      <Title></Title>
//      {Title()}
//      <h1>this is component composition</h1>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
  
// root.render(<Heading/>); 


// to pass normal js will be using {}

// const Heading =()=>(
//     <div id="container">
//      {300+440}
   
//      <h1>this is component composition</h1>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
  
// root.render(<Heading/>); 











 

  
