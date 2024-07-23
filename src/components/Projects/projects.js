import { setUpProjectCard } from "../ProjectCard/projectCard";

import "./projects.scss";
import "../../styles/global.scss";

export function setUpProjects() {
  const projects = document.createElement("section");

  const sectionTitle = document.createElement("div");
  sectionTitle.classList.add("sectionTitle");

  const h2 = document.createElement("h2");
  h2.textContent = "PROJECTS";
  h2.id = "projects";

  const line = document.createElement("div");
  line.classList.add("line");

  sectionTitle.append(h2);
  sectionTitle.append(line);
  projects.append(sectionTitle);

  projects.append(
    setUpProjectCard(
      "https://developer.android.com/static/images/cluster-illustrations/controllers.svg",
      "Games Hub",
      ["Vite", "SASS"],
      "Project that brings together three classic games to play alone or with someone.",
      "https://github.com/SerLarMan/gameshub"
    )
  );
  projects.append(
    setUpProjectCard(
      "https://static-00.iconduck.com/assets.00/pinterest-icon-512x512-3vn0ggs9.png",
      "Pinterest Clone",
      ["Vite", "SASS", "Unsplash"],
      "Project that simulates the pinterest application, being able to search for images and collections and download any image.",
      "https://github.com/SerLarMan/pinterest-clone"
    )
  );
  projects.append(
    setUpProjectCard(
      "https://hypercritic.org/wp-content/uploads-webpc/uploads/2022/07/ELDENRING_01_4K.jpeg.webp",
      "Elden Ring Wiki Front-End",
      ["React", "Bootstrap", "Axios"],
      "Project that simulates a wik of the Elden Ring video game. Users can mark things achieved as well as obtain information. Data access through an api. User login. Administration panel.",
      "https://github.com/SerLarMan/eldenringwiki-frontend"
    )
  );
  projects.append(
    setUpProjectCard(
      "https://hypercritic.org/wp-content/uploads-webpc/uploads/2022/07/ELDENRING_01_4K.jpeg.webp",
      "Elden Ring Wiki Back-End",
      ["Node Js", "Express Js", "MySql"],
      "API developed for the above project. Access to data in a database. Password encryption. File upload.",
      "https://github.com/SerLarMan/eldenringwiki-backend"
    )
  );

  return projects;
}
