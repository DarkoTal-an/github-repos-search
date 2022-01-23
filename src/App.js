import {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Form, Stack} from "react-bootstrap";
import UserBox from "./components/UsersBox.js";
import {VscGithub} from "react-icons/vsc";
import AlertMsg from "./components/AlertMsg.js";





function App() {

const [userName, setUserName] = useState(""); //  username state hook

const [userDetails, setUserDetails] = useState({
  username: '',
  realName: '',
  bio: "",
  avatar: '',
  location: '',
  blog: '',
  followers: '',
  following: '',
  url: '',
  notFound: ''
}) // user infos to be displayed
const [repos, setRepos] = useState([])        // usernames` repositories state fetched from github
const [search, setSearch] = useState("")      // repositories being filtered by name
const [initialLoad, setInitialLoad] = useState(true); // on app load -initial alertMsg is true

// clearing the loading of all details when the userName is being changed or deleted
useEffect(() => {  
  setUserDetails([]);
  setRepos([]);
}, [userName]);

// activates the searching and loading the data from GitHub to our App
//-prevents defalut browser behaviour
//-initialize loading to false to enable the "No user found" alertMsg
//-resets the input field by setting userName to initial state
const handleSubmit = (e) => {
  e.preventDefault();
  setInitialLoad(false);
  getUser();
  getUsersRepos(); 
  setUserName("");
}


// Asynchronously getting the users details and repositories

async function getUser() {
  try {
    const response = await axios.get(`https://api.github.com/users/${userName}`);
    console.log("User:",response.data);
    // setUserDetails(response.data);   //updating state to user repo-data
    setUserDetails({
      username: response.data.login,
          realName: response.data.name,
          bio: response.data.bio,
          avatar: response.data.avatar_url,
          location: response.data.location,
          blog: response.data.blog,
          followers: response.data.followers,
          following: response.data.following,
          url: response.data.html_url,          
      })  
    } 
    catch (error) {
      console.error("User...",error);
    }
  }

// getting users` repositories and its data 
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

  return (
    
      <Container className="px-5 my-4" >       
        <Stack className="mx-5"  direction="horizontal" gap="5">
          <h1 className= " my-4">GitHub CopyCat</h1>
          <div className="h1"><VscGithub/></div>
        </Stack>
        <Form className="form m-3" >               
            <Stack gap="1" className="col-md-5 mx-auto" >
              <input className="form-control mb-1" onChange={e => setUserName(e.target.value)}  value= {userName} placeholder="GitHub Username please..."/>
              <button type="submit" className="btn btn-info m-auto"onClick={handleSubmit}>Enter a GitHub username</button>
            </Stack>
        </Form>
        <div className="mt-3">          
         { userDetails.username ? <UserBox userDetails={userDetails} repos={repos} search={search} setSearch={setSearch}/> : <AlertMsg initialLoad={initialLoad}/>}
        </div>
      </Container>
    
  );
}

export default App;


