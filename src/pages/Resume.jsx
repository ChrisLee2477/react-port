import ResumePic from "../assets/Resume.pdf";
import ListGroup from "react-bootstrap/ListGroup";

export default function Resume() {
  return (
    <div className="container pt-4">
      <h2>Resume</h2>
      <div className="d-inline-flex">
        <p>Click the link to download my&nbsp;</p>
        <a href={ResumePic} download={"ChristopherLeeResume"}>
          resume
        </a>
      </div>
      <h3>Skills</h3>
      <ListGroup as="ol">
        <ListGroup.Item as="li">JavaScript</ListGroup.Item>
        <ListGroup.Item as="li">HTML</ListGroup.Item>
        <ListGroup.Item as="li">CSS</ListGroup.Item>
        <ListGroup.Item as="li">Node.js</ListGroup.Item>
        <ListGroup.Item as="li">MySql</ListGroup.Item>
        <ListGroup.Item as="li">NoSql</ListGroup.Item>
        <ListGroup.Item as="li">BootStrap</ListGroup.Item>
        <ListGroup.Item as="li">React</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
