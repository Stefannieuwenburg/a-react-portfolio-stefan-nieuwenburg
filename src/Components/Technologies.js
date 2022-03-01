import { FaDatabase, FaReact, FaTools } from "react-icons/fa";
import "./styles/Technologies.scss";

export default function Technologies() {
    return (
        <div className="tech-background">
            <h1>Technologies</h1>
            <br />

            <h4>
                I've worked with a range a technologies in the web
                developmentworld. <br />
                From Front-End to Back-end plus Design
            </h4>
            <br />

            <div>
                <FaReact style={{ color: "blue" }} />
                <p>Front-End</p>
                Experience with:
                <br />
                Html 5
                <br />
                Css
                <br />
                Scss
                <br />
                Bootstrap
                <br />
                React.js
                <br />
                Redux
                <br />
                Github
                <br />
                Node.js
                <br />
                Npm
                <br />
                API
                <br />
                Scrum
                <br />
                Jest
            </div>
            <div>
                <FaDatabase style={{ color: "green" }} />
                <p>Back-End</p>
                Experience with:
                <br />
                Sqlite
                <br />
                SQL Database
                <br />
                ORM
                <br />
                Django
                <br />
                Flask
                <br />
                Python
                <br />
                VPS
                <br />
                APT
                <br />
                WSGI and Gunicorn
            </div>
            <div>
                <FaTools style={{ color: "red" }} />
                <p>Tools</p>
                Experience with:
                <br />
                Github
                <br />
                Figma
                <br />
                Visual Studio code
                <br />
                Slack
                <br />
                POSTman
                <br />
            </div>
        </div>
    );
}
