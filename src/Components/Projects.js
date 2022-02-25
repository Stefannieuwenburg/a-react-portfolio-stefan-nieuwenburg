import wd0 from "./img/wd0.jpg";
import wd1 from "./img/wd1.jpg";
import wd2 from "./img/wd2.jpg";
import wd3 from "./img/wd3.jpg";
import wd4 from "./img/wd4.jpg";
import wd5 from "./img/wd5.jpg";

import "./styles/Projects.scss";


export default function Projects() {
    const proj1 = () => {
        window.open("http://twitter.com/");
    };
    const proj2 = () => {
        window.open("http://google.com/");
    };
    return (
        <div className="works">
            <div className="work__section">
                <div className="cards">
                    <img src={wd0} alt="" />
                    <button onClick={proj1} >project 1</button>
                </div>

                <div className="cards">
                    <img src={wd1} alt="" />
                    <button onClick={proj2} >project 2</button>
                </div>

                <div className="cards">
                    <img src={wd2} alt="" />
                    <button>project 3</button>
                </div>

                <div className="cards">
                    <img src={wd3} alt="" />
                    <button>project 4</button>
                </div>

                <div className="cards">
                    <img src={wd4} alt="" />
                    <button>project 5</button>
                </div>
                
                <div className="cards">
                    <img src={wd5} alt="" />
                    <button>project 6</button>
                </div>
            </div>
        </div>
    );
}



