import "./styles/Home.scss";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
     const navigate = useNavigate();
    return (
        <div className="home-background">
            <h1>Hey! I am Stefan</h1>
            <h2>Full stack Web Developer</h2>
            <p>
                I can provide clean code and perfect design. I can also make the
                website more interactive.
            </p>
            <div className="buttons">
                <button onClick={() => navigate("/About")}>About me</button>
            </div>
            <br />
            <div className="icons">
                <a href="https://">
                    <FaFacebook
                        style={{ color: "blue", fontSize: "50px" }}
                        onMouseOver={({ target }) =>
                            (target.style.color = "white")
                        }
                        onMouseOut={({ target }) =>
                            (target.style.color = "blue")
                        }
                    />
                </a>

                <a href="https://">
                    <FaGithub
                        style={{ color: "green", fontSize: "50px" }}
                        onMouseOver={({ target }) =>
                            (target.style.color = "white")
                        }
                        onMouseOut={({ target }) =>
                            (target.style.color = "green")
                        }
                    />
                </a>

                <a href="https://">
                    <FaLinkedin
                        style={{ color: "red", fontSize: "50px" }}
                        onMouseOver={({ target }) =>
                            (target.style.color = "white")
                        }
                        onMouseOut={({ target }) =>
                            (target.style.color = "red")
                        }
                    />
                </a>
            </div>
        </div>
    );
}
