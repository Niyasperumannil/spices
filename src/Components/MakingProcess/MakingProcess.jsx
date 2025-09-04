import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLeaf, 
  faDroplet, 
  faFlask, 
  faHeart, 
  faStar, 
  faPepperHot, 
  faGlassWater, 
  faBowlFood 
} from "@fortawesome/free-solid-svg-icons"; // Using solid icons
import "./MakingProcess.css";

const MakingProcess = () => {
  return (
    <section className="making-process">
      {/* Left side with two images */}
      <div className="process-left">
        <img
          src="https://ajmifoods.com/_next/image?url=%2Fassets%2Fimages%2Fwelcome-up-img.png&w=640&q=75"
          alt="Turmeric Bowl"
          className="process-image top-image"
        />
        <img
          src="https://ajmifoods.com/_next/image?url=%2Fassets%2Fimages%2Fwelcome-down-img.png&w=1080&q=75"
          alt="Turmeric Root"
          className="process-image bottom-image"
        />
      </div>

      {/* Right side with text and icons */}
      <div className="process-right">
        <h2>Our Making Process</h2>
        <p>
          Our production facility is equipped with large storage silos that
          ensure raw materials are available even during off-seasons.
          Fully automated processing areas minimize human intervention.
        </p>

        <div className="process-icons">
          <div className="icon-item">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faLeaf} size="lg" color="#e93c3c" />
            </div>
            <span>Fresh &<br /> Ingredients <br /></span>
          </div>

          <div className="icon-item">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faDroplet} size="lg" color="#e93c3c" />
            </div>
            <span>Water</span>
          </div>

          <div className="icon-item">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faFlask} size="lg" color="#e93c3c" />
            </div>
            <span>Preservation</span>
          </div>

          <div className="icon-item">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faBowlFood} size="lg" color="#e93c3c" />
            </div>
            <span>Prepared</span>
          </div>

          <div className="icon-item">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faHeart} size="lg" color="#e93c3c" />
            </div>
            <span>Healthy</span>
          </div>

          <div className="icon-item">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faPepperHot} size="lg" color="#e93c3c" />
            </div>
            <span>Spice <br />& Mix</span>
          </div>

          <div className="icon-item">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faGlassWater} size="lg" color="#e93c3c" />
            </div>
            <span>Traditional</span>
          </div>

          <div className="icon-item">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faStar} size="lg" color="#e93c3c" />
            </div>
            <span>Complex <br />& Flavor</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakingProcess;
