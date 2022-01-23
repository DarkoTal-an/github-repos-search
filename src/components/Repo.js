import React from "react";
import { Card, Badge } from "react-bootstrap";

export const Repo = ({ repo }) => {
  return (
    <div>
      <Card className="m-lg-3">
        <Card.Body className="d-flex row justify-content-between align-items-center">
          <div className="d-flex justify-content-between ">
            <Card.Title>
              <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-dark text-decoration-none">{repo.name}</a>
              <span>
                <Badge pill bg="secondary" className="mx-3">
                  {repo.visibility.charAt(0).toUpperCase() +
                    repo.visibility.slice(1)}
                </Badge>
              </span>
            </Card.Title>
          </div>
          <div>
            <p className="text-muted font-weight-light">{repo.description}</p>
          </div>
          <div className="d-flex justify-content-between">
            <h6>
              <Badge bg="success">{repo.language}</Badge>
            </h6>
            <span className="text-muted mb-2">
              <h6>
                Updated on{" "}
                {new Date(repo.updated_at).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </h6>
            </span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
