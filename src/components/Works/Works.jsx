import React, { useContext } from "react";
import "./Works.css";
import Xampp from "../../img/xampp.png";
import Github from "../../img/git.png";
import Tawk from "../../img/tawk.png";
import Sublime from "../../img/sublime.png";
import Flutter from "../../img/flutter.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Knowledge for All these
          </span>
          <span>Platforms</span>
          <spane>
            Well, In Learning of the Web development fild. I also got the understanding
            <br />
            and experience of many softwares & platforms such as Sublime Texteditor 
            <br />
            VS Code editor, Git, Github,  
            <br />
            Xampp, Flutter, tawk.to, W3 School, Pinterest.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Xampp} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Github} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Tawk} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Sublime} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Flutter} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
