import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function PortfolioCard(props) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={props.pic} alt={props.picAlt} />
      <Card.ImgOverlay>
        <Button href={props.gitLink} target="_blank">
          {props.altGitText}
        </Button>
        <Button href={props.deployedLink} target="_blank">
          {props.altDeployedText}
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
}
