import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import {GoLocation} from "react-icons/go";
import {FaGithub} from "react-icons/fa";
import {BsFillPeopleFill} from "react-icons/bs"
 


const UsersProfile = ({ userDetails }) => {     

  let usersFirstName =()=> {
      if(userDetails.realName) {
         userDetails.realName.slice(0,5);
      }
      return userDetails.realName;
  }
  
  return (

    <>
      <Card style={{ width: '19rem' }}>
        <Card.Img variant="top" src={userDetails.avatar} />
        <Card.Body >
          <Card.Title className="border-bottom"><a href={userDetails.url}>@ {userDetails.username}</a></Card.Title>
         <Card.Subtitle className="text-muted mb-2 ">Real Name is {userDetails.realName}</Card.Subtitle> 
          <Card.Text>
            {userDetails.bio}
          </Card.Text>
          
            <Card.Link className="btn btn-info" href={userDetails.blog} target="_blank" rel="noreferrer">Contact {userDetails.realName}</Card.Link>
            <ListGroup className="list-group-flush">              
            <br></br>
              <ListGroupItem > <GoLocation /> {userDetails.location}</ListGroupItem>             
            <br></br>
            </ListGroup>
            <BsFillPeopleFill/>
              <Card.Link className="btn btn-light"href="#">followers:&nbsp;{userDetails.followers}</Card.Link>
              <span>&nbsp;-&nbsp;</span>
              <Card.Link className="btn btn-light" href="#">following:&nbsp;{userDetails.following}</Card.Link>
              <br></br>
              <ListGroup >              
            <br></br>
            <ListGroupItem className="btn btn-secondary text-light"><a className="text-decoration-none text-black" href={userDetails.url} target="_blank" rel="noreferrer"><FaGithub />&nbsp;{usersFirstName}`s GitHub Profile</a></ListGroupItem>           
            <br></br>
            </ListGroup>
              
        </Card.Body>
      </Card>
    </>
  );
};

export default UsersProfile;
