import {Component, createRef} from "react"
import {GrClose, GrMenu} from "react-icons/gr"
import {GoCode} from "react-icons/go"
import "./App.css"
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
    this.focusHome = createRef()
    this.focusAboutMe = createRef()
    this.focusProjects = createRef()
    this.focusContact = createRef()
  }

  toggleMenu() {
    this.setState(prevState => {
      return {
        ...prevState,
        mobileMenuVisible: !prevState.mobileMenuVisible
      }
    })
  }

  swipeTo(id) {
      if(id === 1){
          this.focusHome.current.scrollIntoView({ 
              behavior: "smooth", 
              block: "start"
          })
      } else if(id === 2) {
        this.focusAboutMe.current.scrollIntoView({ 
              behavior: "smooth", 
              block: "start"
          })
      } else if(id === 3) {
        this.focusProjects.current.scrollIntoView({ 
              behavior: "smooth", 
              block: "start"
          })
      } else if(id === 4) {
        this.focusContact.current.scrollIntoView({ 
              behavior: "smooth", 
              block: "start"
          })
      }
      if(this.state.mobileMenuVisible) {
        this.toggleMenu()
      }
  }

  render() {
    return (
      <div className="app">
        <nav className={`top-navbar light ${!this.state.mobileMenuVisible && "box-shadow"}`}>
          <div className="logo">
            <span>DB</span>
            <GoCode className="logo-icon" />
          </div>
          <ul className="nav-menu">
            {NavItems.map(navItem => {
              return (
                <li className="nav-item" key={navItem.id} onClick={() => this.swipeTo(navItem.id)}>
                  {navItem.name}
                </li>
              )
            })}
          </ul>
          <div className="social-links">
            {SocialLinks.map(socialLink => {
              return (
                <button className="social-item" onClick={() => window.open(socialLink.link)} key={socialLink.id}>
                  {socialLink.icon}
                </button>
              )
            })}
          </div>
          <button className="toggle-menu" onClick={this.toggleMenu}>
            {this.state.mobileMenuVisible ? <GrClose className="toggle-icon" /> : <GrMenu className="toggle-icon" />}
          </button>
        </nav>
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
        <section className="home dark" ref={this.focusHome}>
          <div className="text-container">
            <h1>Dawid Bobowski</h1>
            <h3>self-taught future web developer</h3>
          </div>
        </section>
        <section className="about-me" ref={this.focusAboutMe}>
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
        <section className="projects dark" ref={this.focusProjects}>
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
                    <a href={project.githubLink} target="_blank" rel="noreferrer">Github</a>
                    {" / "}
                    <a href={project.liveLink} target="_blank" rel="noreferrer">Live</a>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
        <div className="section-divider"></div>
        <section className="contact dark" ref={this.focusContact}>
            <h2>Contact</h2>
            <div className="underline"></div>
          <div className="contact-wrapper">
            {Contacts.map(contact => {
              return (
                <div className="contact-item" key={contact.id}>
                  {contact.icon}
                  {contact.id !== 3 && <p>{contact.text}</p>}
                  {contact.id === 3 && <p><a href={contact.id}>profile</a></p>}
                </div>
              )
            })}
          </div>
        </section>
        <footer>
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
