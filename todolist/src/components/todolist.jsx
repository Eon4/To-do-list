import { useState } from "react";

export function Todolist() {
  const [name, setName] = useState("Luna");
  
  
  return (
    <div>
            <h1>TO DO</h1>

        
    
    <input placeholder={"Skriv dit to do ting her"} value={name} onChange={(event) => setName(event.target.value)} />
</div>
)
}