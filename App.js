import React, {useState} from "react";
import Title from "./components/Title";


function App() {
  const [name, setName] = useState('techinfo');
  const [date, setDate] = useState('DOB');
  return (
    <div className="container-fluid">
      <h1 className="text-center">E-Signature App</h1>
      <Title text={name} />
      <Title text={date} />
      <p>One of the main reasons a wet-signature may be preferable is that both parties must typically be present at the time of signing. This provides an opportunity to confirm details and touch base before formalizing the agreement. That’s a big part of why some companies and business people prefer wet signatures.

        When you sign a document in person, you can add additional validity to the process by hiring a Notary Public. These state-authorized professionals witness signatures on documents</p>
      
      <div className="d-flex input-boxes">
        <input type="date" value='date' onChange={(e) => setDate(e.target.value)}/>
        <input type="text" value='name' onChange={(e) => setName(e.target.value)}/>
      </div>

      
    </div>
  );
}

export default App;
