import React from "react";
import { Card, Button } from "react-bootstrap";

const UsersProfile = ({ userDetails }) => {
  return (
    <>
      <Card className="border-none">
        <Card.Img variant="top" src={userDetails.avatar_url} />
        <Card.Body>
          <Card.Title className="border-bottom">{userDetails.login}</Card.Title>
         <Card.Subtitle className="text-muted mb-2 ">Real Name:{userDetails.name}</Card.Subtitle> 
          <Card.Text>
            {userDetails.bio}
          </Card.Text>
          <Button variant="secondary">Contact {userDetails.name}</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default UsersProfile;
