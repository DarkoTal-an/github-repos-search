import React from "react";
import UsersProfile from "./UsersProfile.js";
import {Repo} from "./Repo.js";
import {Container, Form} from "react-bootstrap";

const UsersBox = ({search, setSearch, userDetails, repos}) => {

  return (
    <>
      <Container className="fluid d-flex flex-column flex-md-row border-rounded mt-3 shadow-lg p-3 mb-5 bg-white rounded">
        <div className="user-profile-card flex-">
          <UsersProfile userDetails={userDetails} />
        </div>

        <div className="right-container">
          <Form className="form m-3 px-lg-5">
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
