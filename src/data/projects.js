import ProjectImage1 from "../images/shoplist-preview.jpg"
import ProjectImage2 from "../images/portfolio-page-preview.jpg"

const projects = [
  {
    id: 1,
    title: "shoplist",
    image: ProjectImage1,
    description: "Shopping web companion created using React.js. It allows to add and save multiple named and editable lists. It's my first project made in this library. The idea came from Codecademy course where the app had only basic feature to create only one grocery list.",
    githubLink: "https://github.com/sonofhel/shoplist",
    liveLink: "https://shoplist-by-dave.netlify.app/",
  },
  {
    id: 2,
    title: "portfolio-page",
    image: ProjectImage2,
    description: "Portfolio page where I showcase all of my projects. Added it to the list because it was also created using React.js.",
    githubLink: "https://github.com/sonofhel/portfolio-page",
    liveLink: "https://portfolio-by-dave.netlify.app/",
  },
]

export default projects