import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kid1 from "./images/kid.jpg";
import kid2 from "./images/kid2.jpg";
import kid3 from "./images/kid3.jpg";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="main">
      {/* <!-- This main class is for aligning children into column --> */}
      <h2>The childhood memories</h2>
      <div className="row">
        {/* <!-- Below 3 divs are to align them in row --> */}

        <div className="image">
          {/* <!-- The image className is for text position --> */}
          <div className="image-item">STRENGTH</div>
          <div>
            <FontAwesomeIcon className="fa-solid" icon={faCircleChevronRight} />
          </div>
          <div>
            <img className="img1 " src={kid1} alt="" />
          </div>
        </div>

        <div className="image">
          <div className="image-item">MOBILITY</div>
          <div>
            <FontAwesomeIcon className="fa-solid" icon={faCircleChevronRight} />
          </div>
          <div>
            <img className="img2" src={kid2} alt="" />
          </div>
        </div>
        <div className="image"  >
          <div className="image-item">DRILLS</div>
          <div>
            <FontAwesomeIcon
              className="fa-solid "
              icon={faCircleChevronRight}
            />
          </div>
          <div  >
            <img className="img3"  src={kid3} alt="" />
          </div>
          {/* <i className="fa-solid fa-circle-chevron-right"></i> */}
        </div>
      </div>
    </div>
  );
}

export default App;
