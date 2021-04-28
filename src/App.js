import {Component} from "react"
import ReactTooltip from "react-tooltip"
import "./App.css"
import TopNavbar from "./components/TopNavbar"
import NavItems from "./data/navItems"
import SocialLinks from "./data/socialLinks"
import Projects from "./data/projects"
import Contacts from "./data/contact"
import ProfilePicture from "./images/profile-picture.jpg"

class App extends Component {
  constructor() {
    super()
    this.state = {
      mobileMenuVisible: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState(prevState => {
      return {
        ...prevState,
        mobileMenuVisible: !prevState.mobileMenuVisible
      }
    })
  }

  swipeTo(divID) {
    const sectionNames = [
      "home", "about-me", "projects", "contact"
    ]
    var y = 0

    switch(divID) {
      case 1:
        window.scrollTo({ top: y, behavior: "smooth" })
        break
      case 2:
      case 3:
        var margin = 50
        if(window.innerWidth < 600) {
          margin = 300
        }
        y = document.getElementById(sectionNames[divID-1]).getBoundingClientRect().top + window.pageYOffset - margin
        window.scrollTo({ top: y, behavior: "smooth" })
        break
      case 4:
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
        break
      default:
        break
    }


    if(window.innerWidth < 600 && this.state.mobileMenuVisible) {
      this.toggleMenu()
    }
  }

  toClipboard(text) {
    const el = document.createElement('textarea')
    el.value = text
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  render() {
    return (
      <div className="app">
        <TopNavbar
          mobileMenuVisible={this.state.mobileMenuVisible}
          swipeTo={this.swipeTo}
          toggleMenu={this.toggleMenu}
        />
        {this.state.mobileMenuVisible &&
          <nav className="mobile-navbar light box-shadow">
              <ul className="nav-menu">
                {NavItems.map(navItem => {
                  return (
                    <li className="nav-item" key={navItem.id} onClick={() => this.swipeTo(navItem.id)}>
                      {navItem.name}
                    </li>
                  )
                })}
              </ul>
          </nav>
        }
        <section className="home dark" id="home">
          <div className="text-container">
            <h1>Dawid Bobowski</h1>
            <h3>self-taught future web developer</h3>
          </div>
        </section>
        <section className="about-me light" id="about-me">
          <h2>About Me</h2>
          <div className="underline"></div>
          <div className="about-me-wrapper">
            <img src={ProfilePicture} alt="" />
            <div className="text-container">
              <h3>Hey, it's Dave here!</h3>
              <p>I'm a 2nd year student of IT on Casimir the Great University. My field of studies involves computer simulations and computer-aided design. It doesn't stop me from <span>self-improvement</span> and widening my skills. Besides the topics I learn and discover on the university I got interested by front end development. Currently I'm learning <span>JavaScript</span> and <span>React</span>. I try to design and implement user-friendly apps and enhance my ability to create even better content.</p>
              <p>In private I'm interested in reviewing games, movies, series, books and comics. You can find me on Instagram under <span>@sonofhel_</span>.</p>
            </div>
          </div>
        </section>
        <section className="projects dark" id="projects">
          <h2>Projects</h2>
          <div className="underline"></div>
          <div className="projects-wrapper">
            {Projects.map(project => {
              return (
                <article className="project" key={project.id}>
                  <h3>{project.title}</h3>
                  <img src={project.image} alt="" />
                  <div className="text-container">
                    <p>{project.description}</p>

                    { project.githubLink &&
                      <a href={project.githubLink} target="_blank" rel="noreferrer">Github</a>
                    }
                    { project.githubLink && " / " }
                    { project.liveLink &&
                      <a href={project.liveLink} target="_blank" rel="noreferrer">Live</a>
                    }
                    { !project.githubLink && !project.liveLink &&
                      <p style={{fontStyle: "italic"}}>work in progress</p>
                    }
                  </div>
                </article>
              )
            })}
          </div>
        </section>
        <section className="contact light" id="contact">
          <h2>Contact</h2>
          <div className="underline"></div>
          <div className="contact-wrapper">
            {Contacts.map(contact => {
              return (
                <div className="contact-item dark" key={contact.id}>
                  {contact.icon}
                  {contact.id !== 3 &&
                    <p
                      onClick={() => this.toClipboard(contact.text)}
                      data-tip="Copied to clipboard!"
                    >
                      {contact.text}
                    </p>}
                  {contact.id === 3 && <p>
                    <a
                      href={contact.text}
                      target="_blank"
                      rel="noreferrer"
                    >
                      profile
                    </a></p>}
                  <ReactTooltip eventOff="mouseout || scroll" delayHide={3000} event="click" />
                </div>
              )
            })}
          </div>
        </section>
        <footer className="dark">
          <div className="social-links">
            {SocialLinks.map(socialLink => {
              return (
                <button className="social-item" onClick={() => window.open(socialLink.link)} key={socialLink.id}>
                  {socialLink.icon}
                </button>
              )
            })}
          </div>
          <h3>2021 &copy; Dawid Bobowski</h3>
        </footer>
      </div>
    )
  }
}

export default App
