import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kid1 from "./images/kid.jpg";
import kid2 from "./images/kid2.jpg";
import kid3 from "./images/kid3.jpg";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div class="main">
      {/* <!-- This main class is for aligning children into column --> */}
      <h2>The childhood memories</h2>
      <div class="row">
        {/* <!-- Below 3 divs are to align them in row --> */}

        <div class="image">
          {/* <!-- The image class is for text position --> */}
          <div class="text">STRENGTH</div>
          <FontAwesomeIcon className="fa-solid" icon={faCircleChevronRight} />
          <img class="img1" src={kid1} alt="" />
        </div>

        <div class="image">
          <div class="text">MOBILITY</div>
          <FontAwesomeIcon className="fa-solid" icon={faCircleChevronRight} />
          <img src={kid2} alt="" />
        </div>
        <div class="image">
          <div lass="text">DRILLS</div>
          <FontAwesomeIcon className="fa-solid" icon={faCircleChevronRight} />
          {/* <i class="fa-solid fa-circle-chevron-right"></i> */}
          <img class="img3" src={kid3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
