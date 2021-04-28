import React, {Component} from "react"
import {GrClose, GrMenu} from "react-icons/gr"
import {GoCode} from "react-icons/go"
import NavItems from "../data/navItems"
import SocialLinks from "../data/socialLinks"

class TopNavbar extends Component {
  render() {
    return (
      <nav className={`top-navbar light ${!this.props.mobileMenuVisible && "box-shadow"}`}>
        <div className="logo" onClick={() => window.location.reload()}>
          <span>DB</span>
          <GoCode className="logo-icon" />
        </div>
        <ul className="nav-menu">
          {NavItems.map(navItem => {
            return (
              <li className="nav-item" key={navItem.id} onClick={() => this.props.swipeTo(navItem.id)}>
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
        <button className="toggle-menu" onClick={this.props.toggleMenu}>
          {this.props.mobileMenuVisible ? <GrClose className="toggle-icon" /> : <GrMenu className="toggle-icon" />}
        </button>
      </nav>
    )
  }
}

export default TopNavbar