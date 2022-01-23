import React from "react";
import UsersProfile from "./UsersProfile.js";
import {Repo} from "./Repo.js";
import {Container, Form} from "react-bootstrap";

const UsersBox = ({search, setSearch, userDetails, repos}) => {
  return (
    <>
      <Container className="fluid d-flex">
        <div className="user-profile-card">
          <UsersProfile userDetails={userDetails} />
        </div>

        <div className="right-container">
          <Form className="form m-3">
            <input
              className="form-control mb-1"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Find a repository..."
            />
          </Form>
          <div>
            {repos
              .filter((repo) =>
                repo.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((repo) => (
                <Repo key={repo.id} repo={repo} />
              ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default UsersBox;
