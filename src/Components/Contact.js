import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles/Contact.scss";

export default function Contact() {
    return (
        <div className="contact-background">
            <h1>Here's my Contact info</h1>

            <div className="Button-link">
                <a href="https://www.facebook.com/stefan.nieuwenburg.9/">
                    <FaFacebook
                        style={{ color: "blue", fontSize: "50px" }}
                        onMouseOver={({ target }) =>
                            (target.style.color = "white")
                        }
                        onMouseOut={({ target }) =>
                            (target.style.color = "blue")
                        }
                    />
                    Facebook Profile
                </a>
                <br />
                <a href="https://github.com/Stefannieuwenburg">
                    <FaGithub
                        style={{ color: "green", fontSize: "50px" }}
                        onMouseOver={({ target }) =>
                            (target.style.color = "white")
                        }
                        onMouseOut={({ target }) =>
                            (target.style.color = "green")
                        }
                    />
                    Github Profile
                </a>
                <br />
                <a href="https://www.linkedin.com/in/stefan-nieuwenburg-3030a1213/">
                    <FaLinkedin
                        style={{ color: "red", fontSize: "50px" }}
                        onMouseOver={({ target }) =>
                            (target.style.color = "white")
                        }
                        onMouseOut={({ target }) =>
                            (target.style.color = "Red")
                        }
                    />
                    Linkedin Profile
                </a>
                <br />
            </div>
        </div>
    );
}

