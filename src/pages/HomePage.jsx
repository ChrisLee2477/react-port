import profilePicture from "../assets/ProfilePic.jpg";
export default function HomePage() {
  return (
    <div className="container pt-4">
      <h2>About Me</h2>
      <img
        src={profilePicture}
        className="rounded float-start w-200 h-200"
        alt="Profile Picture"
      ></img>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
        impedit suscipit sed magnam alias in, repellat expedita hic explicabo
        architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Velit voluptate exercitationem quaerat pariatur
        mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
        nostrum temporibus ad omnis nam rerum eligendi.
      </p>
    </div>
  );
}
