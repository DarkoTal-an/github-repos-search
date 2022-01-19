import {useState} from "react";





function App() {

const [userName, setUserName] = useState("");
const [repos, setRepos] = useState([])



const handleSubmit = (e) => {
  e.preventDefault();
  getUser();  // activates the searching and loading the data from GitHub to our App
}

// Asynchronously getting the users`repositories 
async function getUser() {
  const resp = await fetch(`https://api.github.com/users/${userName}/repos`);
  const jsonData = await resp.json();
  setRepos(jsonData);
  console.log("Podatci:",jsonData);
}

// each child in a list should have a unique "key" prop
const renderRepos = (repo) => {
  return (
    <div  key={repo.id}>
      <h2 >{repo.name}</h2>
    </div>
  )
}
  return (
    
      <div >
  
        <input onChange={e => setUserName(e.target.value)}  value= {userName} placeholder="GitHub Username"/>
        <button className="btn btn-primary"onClick={handleSubmit}>Search</button>
         
          <div>
            {repos.map(renderRepos)}
         
        </div>
      </div>  
    
  );
}

export default App;
