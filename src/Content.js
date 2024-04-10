import { useState } from "react";

function Content() {
    const [show, setShow] = useState(false);
  
    return (
      <div style={{ padding: 32 }}>
       <h1> Hello</h1>
      </div>
    );
  }
  
  export default Content;