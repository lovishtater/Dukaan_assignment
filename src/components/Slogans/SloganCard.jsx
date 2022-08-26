import { useState } from "react";
import "./Slogan.css";

const SloganCard = ({ slogan }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyText = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const handleClick = () => {
    copyText(slogan)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
  };

  return (
    <li className="card_group" onClick={handleClick}>
      <span className="tooltip">{isCopied ? "Copied!" : "Click to copy"}</span>
      <p className="card">{slogan}</p>
    </li>
  );
};

export default SloganCard;
