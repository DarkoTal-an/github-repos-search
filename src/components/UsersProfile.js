import React from "react";
import { Card, ListGroup, ListGroupItem , Stack} from "react-bootstrap";
import {GoLocation} from "react-icons/go";
import {FaGithub} from "react-icons/fa";
import {BsFillPeopleFill} from "react-icons/bs"
 


const UsersProfile = ({ userDetails }) => {      

  
  return (

    <>
      <Card style={{ minWidth: '14rem', maxWidth: '25rem'}} >
        <Card.Img className="rounded fluid" variant="top" src={userDetails.avatar} />
        <Card.Body  >
          <Stack direction="vertical">
            <Card.Title className="border-bottom"><a className="text-dark text-decoration-none" href={userDetails.url} target="_blank" rel="noreferrer">@{userDetails.username}</a></Card.Title>
                     <Card.Subtitle className="text-muted mb-2 ">Real Name is {userDetails.realName}</Card.Subtitle>
            <Card.Text>
              {userDetails.bio}
            </Card.Text>
            
              <Card.Link className="btn btn-info" href={userDetails.blog} target="_blank" rel="noreferrer">Contact {userDetails.realName}</Card.Link>
              <ListGroup className="list-group-flush">
              <br></br>
                <ListGroupItem className="text-center"><GoLocation /> {userDetails.location}</ListGroupItem>
              <br></br>
              </ListGroup>
              <BsFillPeopleFill/>
                <Card.Link className="btn btn-light"href="#">followers:&nbsp;{userDetails.followers}</Card.Link>
                <span>&nbsp;-&nbsp;</span>
                <Card.Link className="btn btn-light" href="#">following:&nbsp;{userDetails.following}</Card.Link>
                <br></br>
                <ListGroup >
              <br></br>
              <ListGroupItem className="btn btn-secondary text-light"><a className="text-decoration-none text-black" href={userDetails.url} target="_blank" rel="noreferrer"><FaGithub />&nbsp;{userDetails.realName}`s GitHub Profile</a></ListGroupItem>
              <br></br>
              </ListGroup>
          </Stack>
              
        </Card.Body>
      </Card>
    </>
  );
};

export default UsersProfile;
