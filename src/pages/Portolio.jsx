import PortfolioCard from "../components/UI/PortfolioCard";
import projects from "../utils/projects";

export default function Portfolio() {
  return (
    <div className="container pt-4">
      <h2>Portfolio</h2>
      <PortfolioCard
        pic={projects[0].pic}
        picAlt={projects[0].picAlt}
        gitLink={projects[0].gitLink}
        altGitText={projects[0].altGitText}
        deployedLink={projects[0].deployedLink}
        altDeployedText={projects[0].altDeployedText}
      />
      <PortfolioCard
        pic={projects[1].pic}
        picAlt={projects[1].picAlt}
        gitLink={projects[1].gitLink}
        altGitText={projects[1].altGitText}
        deployedLink={projects[1].deployedLink}
        altDeployedText={projects[1].altDeployedText}
      />
    </div>
  );
}
