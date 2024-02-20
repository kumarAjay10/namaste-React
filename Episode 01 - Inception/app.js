{
    // adding parent child
    /* <div id="parent">
      <div id="child">
          <h1>I'am h1 tag</h1>
      </div>
  </div> */
  }
  
  
  // adding another sibling that is h2 tag 
  /* <div id="parent">
      <div id="child">
          <h1>I'am h1 tag</h1>
          <h2>I'am h2 tag</h2>
      </div>
  </div> */
  
  
  /* <div id="parent">
      <div id="child 1">
          <h1>I'am h1 tag</h1>
          <h2>I'am h2 tag</h2>
      </div>
       <div id="child 2">
          <h1>I'am h1 tag</h1>
          <h2>I'am h2 tag</h2>
      </div>
  </div> */
  
  
  
  
  
  // ReactElement = object => HTML (Browser understands)
  
  // adding parent child
  // const parent = React.createElement(
  //   "div",
  //   { id: "parent" },
  //   React.createElement(
  //     "div",
  //     { id: "child" },
  //     React.createElement("h1", {}, "I am h1 Tag")
  //   )
  // );
  
  // adding another sibling h2 tag by array
  // const parent = React.createElement(
  //   "div",
  //   { id: "parent" },
  //   React.createElement(
  //     "div",
  //     { id: "child" },
  //     [React.createElement("h1", {}, "I am h1 Tag"),
  //     React.createElement("h2", {}, "I am h2 Tag")]
  //   )
  // );
  
  
  // adding nested divs
  const parent = React.createElement(
    "div",
    { id: "parent" },
   [ React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),]
  ), React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),]
  )]
  );
  
  console.log(parent);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(parent);
  
  // const heading = React.createElement(
  //   "h1",
  //   { id: "heading" },
  //   "hello world from React!"
  // );
  
  // console.log(heading);
  
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  
  // root.render(heading);
  