import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homePage">
      <div className="banner">
        <div className="heading">
          <div className="hedleft">
            <div className="hlName">
              <h1>Breath Natureal </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                maxime non quasi eveniet odio doloremque officia alias iure
                nesciunt modi?
              </p>
              <button className="demo">
                <i class="fa-solid fa-circle-play"></i>
                Live demo..
              </button>
            </div>
            <div className="hlVR">
              <p>
                Explore Ayurvedic plants in our immersive 3D virtual garden.
                Learn about the healing properties of herbs while interacting
                with a peaceful,
              </p>
              <button>
                <i class="fa-solid fa-vr-cardboard"></i>
              </button>
            </div>
          </div>
          <div className="hedright">
            <div className="hr3dView">
              <img src="./assets/garden.png" alt="" />
              <button
              onClick={() => {
                navigate("/garden");
              }}
              >360 View</button>
            </div>
          </div>
        </div>


        <h1 className="homeTrendyPlants">Our Trendy plants</h1>
        <div className="homeplants"></div>
        <div className="homeplants"></div>
      </div>

      <div className="vrSection">
        <div className="vrInfo">
          <p>
            Explore Ayurvedic plants in our immersive 3D virtual garden. Learn
            about the healing properties of herbs while interacting with a
            peaceful, nature-inspired environment. Experience Ayurveda like
            never before, combining wellness and technology.
          </p>
          <button>Get App</button>
        </div>
        <div className="vrImage">
          <img src="./assets/vr.png" alt="" />
        </div>
      </div>

      <div className="topSearch">
        <p className="tSpara">Our Top Searching</p>
        <img src="./assets/bg3.png" alt="" />
        <div className="tSCards">
          <div className="tSDiv1">
            <img src="./assets/Aloevera.png" alt="" />
            <p>Aloevera</p>
            <button
              onClick={() => {
                navigate("/plants");
              }}
            >
              More info..
            </button>
          </div>
          <div className="tSDiv2">
            <img src="./assets/Ashwagandha.png" alt="" />
            <p>Ashwagandha</p>
            <button>More info..</button>
          </div>
          <div className="tSDiv3">
            <img src="./assets/Brhamin.png" alt="" />
            <p>Brhamin</p>
            <button>More info..</button>
          </div>
          <div className="tSDiv4">
            <img src="./assets/Ginger.png" alt="" />
            <p>Ginger</p>
            <button>More info..</button>
          </div>
          <div className="tSDiv5">
            <img src="./assets/Mint.png" alt="" />
            <p>Mint</p>
            <button>More info..</button>
          </div>
          <div className="tSDiv6">
            <img src="./assets/Neem.png" alt="" />
            <p>Neem</p>
            <button>More info..</button>
          </div>
          <div className="tSDiv7">
            <img src="./assets/Turmeric.png" alt="" />
            <p>Turmeric</p>
            <button>More info..</button>
          </div>
          <div className="tSDiv8">
            <img src="./assets/Tulsi.png" alt="" />
            <p>Tulsi</p>
            <button>More info..</button>
          </div>
        </div>
      </div>


      <div className="homeReview">
        <h2>Reviews</h2>
        <div className="homereviewContainer">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
 
      </div>
    </div>
  );
};

export default Home;
