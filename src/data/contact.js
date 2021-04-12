import {FiLinkedin, FiMail, FiPhone} from "react-icons/fi"

const Contact = [
  {
    id: 1,
    text: "dbobowski3@gmail.com",
    icon: <FiMail className="contact-icon" />
  },
  {
    id: 2,
    text: "(+48) 577-874-506",
    icon: <FiPhone className="contact-icon" />
  },
  {
    id: 3,
    text: "<a href='https://www.linkedin.com/in/dawid-bobowski-aa7907209/'>profile</a>" ,
    icon: <FiLinkedin className="contact-icon" />
  }
]

export default Contact