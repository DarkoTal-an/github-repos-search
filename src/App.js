import {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Card, Form} from "react-bootstrap";
import {Repo} from "./components/Repo.js";
import UsersProfile from "./components/UsersProfile.js";






function App() {

const [userName, setUserName] = useState(""); //  username state hook
const [userDetails, setUserDetails] = useState({}) // user infos to be displayed
const [repos, setRepos] = useState([])        // usernames` repositories state fetched from github
const [search, setSearch] = useState("")      // repositories beeing filtered by name

// clearing the loading of all details when the userName is beeing changed or deleted
// useEffect(() => {
//   setUserDetails([]);
//   setRepos([]);
// }, [userName]);

// activates the searching and loading the data from GitHub to our App
const handleSubmit = (e) => {
  e.preventDefault();
  getUser();
  getUsersRepos();  
}


// Asynchronously getting the users details and repositories

async function getUser() {
  try {
    const response = await axios.get(`https://api.github.com/users/${userName}`);
    console.log("User:",response.data.bio);
    setUserDetails(response.data);   //updating state to user repo-data
  
  } 
  catch (error) {
    console.error("User...",error);
  }
}

// getting users repositories and its data 
async function getUsersRepos() {
  try {
    const response = await axios.get(`https://api.github.com/users/${userName}/repos`);
    console.log("Repos:",response.data);
    setRepos(response.data) ;
         
  } 
  catch (error) {
    console.error("UsersRepos...",error);
  }
}

// each child in a list should have a unique "key" prop
const renderRepos = (repo) => {
  return ( 
    <>
      <Repo key={repo.id} repo={repo}/>
    </> 
    
  )
}

// searching the repositories state by name / if 
const findARepo = (repo => repo.name.toLowerCase().includes(search.toLowerCase()))
  

  return (
    
      <Container className="my-4" >
        <h1 className= "my-4">GitHub Repositories Application</h1>
        <Form className="form m-3" >  
            <input className="form-control mb-1" onChange={e => setUserName(e.target.value)}  value= {userName} placeholder="GitHub Username please..."/>
            <button type="submit" className="btn btn-info"onClick={handleSubmit}>Enter a GitHub username</button>
          </Form>
        <Container className="fluid d-flex">
          <div className="user-profile-card">
            <UsersProfile userDetails={userDetails}/>
          </div>
          
          <div className="right-container">          
          
            <Form className="form m-3" >
              <input className="form-control mb-1" onChange={e => setSearch(e.target.value)}  value= {search} placeholder="Find a repository..."/>
            </Form>
            <div>
              {repos.filter(findARepo)
              .map(renderRepos)}
          
            </div>
          </div>
        </Container>
      </Container>  
    
  );
}

export default App;
