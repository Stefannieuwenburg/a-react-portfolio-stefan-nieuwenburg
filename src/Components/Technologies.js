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
                <FaReact />
                <p>Front-End</p>
                Experience with
                <br /> Html 5
                <br /> Css
                <br /> Scss
                <br /> Bootstrap
                <br /> React.js
                <br /> Github
            </div>
            <div>
                <FaDatabase />
                <p>Back-End</p>
                Experience with
                <br />
                Sqlite
                <br /> Database
                <br /> Django
                <br /> Flask
                <br /> Python
            </div>
            <div>
                <FaTools />
                <p>UI-UX</p>
                Experience with
                <br />
                Figma
                <br />
                Visual Studio code
                <br />
            </div>
        </div>
    );
}
