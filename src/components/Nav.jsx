import { Link, useLocation } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  const currentPage = useLocation().pathname;
  return (
    <>
      <Navbar
        links={[
          <Link
            key={1}
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
            to="/"
          >
            About Me
          </Link>,
          <Link
            key={2}
            className={
              currentPage === "/portfolio" ? "nav-link active" : "nav-link"
            }
            to="/portfolio"
          >
            Portfolio
          </Link>,
          <Link
            key={3}
            className={
              currentPage === "/contact" ? "nav-link active" : "nav-link"
            }
            to="/contact"
          >
            Contact
          </Link>,
          <Link
            key={4}
            className={
              currentPage === "/resume" ? "nav-link active" : "nav-link"
            }
            to="/resume"
          >
            Resume
          </Link>,
        ]}
      />
    </>
  );
}
