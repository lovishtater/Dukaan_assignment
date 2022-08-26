import { useState } from "react";
import { ReactComponent as Clear } from "../../assets/images/cross.svg";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";
import SloganCard from "./SloganCard";
import "./Slogan.css";
import { sloganData } from "../../mockData/mockData";

const SloganContainer = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [slogans, setSlogans] = useState(sloganData);
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClear = () => {
    setSearchQuery("");
    setSlogans(sloganData);
  };

  const filteredSlogans = slogans.filter((slogan) => slogan?.toLowerCase().includes(searchQuery?.toLowerCase()));

  return (
    <div className="slogan-box container">
      <div className="top">
        <h1 className="heading">Free slogan maker</h1>
        <p>
          Simply enter a term that describes your business, and get up to 1,000 relevant slogans for
          free.
        </p>
        <div className="search-box">
          <label htmlFor="word-input">Word for your slogan</label>
          <input type="text" id="word-input" value={searchQuery} onChange={handleInputChange} />
          <Clear className="clear" onClick={handleClear} />
          <button
            className="submit"
            onClick={() => {
              setSlogans(filteredSlogans);
            }}
          >
            Generate slogans
          </button>
        </div>
      </div>
      <div className="center">
        <div className="center_top">
          <h2 className="heading slogan-box_heading">We have generated 1,023 slogans for “cozy”</h2>
          <button>Download all</button>
        </div>
        <ul className="slogans">
          {slogans.map((slogan, index) => (
            <SloganCard key={index} slogan={slogan} />
          ))}
        </ul>
      </div>
      <div className="pagination container flex">
        <button className="prev">
          <Arrow className="prev_arrow" /> Prev
        </button>
        <div className="pages ">
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          ...
          <span>21</span>
        </div>
        <button className="next">
          Next <Arrow />
        </button>
      </div>
    </div>
  );
};

export default SloganContainer;
