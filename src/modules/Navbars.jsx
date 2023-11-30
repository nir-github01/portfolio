import { navLinks } from "../components/NavLists";
import { useState, useEffect } from "react";
// import { Link }  from "react-scroll";

const Navbars = () => {
  const [nav, setNavs] = useState(false);

  //Checking device screen width and height
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    // setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    // Add event listener to update dimensions on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup by removing event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (screenWidth > 766 && nav === true) {
      setNavs(false);
    }
  }, [screenWidth, nav]);

  let navLinkList = navLinks.map((link) => {
    return (
      <h4 key={link.id} className={nav ? "mobileviewnavlinks" : "linksclass"}>
     <a href={'#' + link.navlink} rel="noreferrer" onClick={()=>setNavs(false)}> {link.navlink}</a>
        
      </h4>
    );
  });
  return (
    <div>
      <div className={nav ? "mobilemenunavbox" : "navContainer"}>
        <div className={nav ? "nameSignature" : "nameSign"}>
          <span className="font-sign">RANJEET</span>
        </div>
        <div className="navlinkbox">{navLinkList}</div>

        <div onClick={() => setNavs(!nav)} className="menuBox">
          {nav ? (
            <div className="twoCrossdiv">
              <div id="div1"></div>
              <div id="div2"></div>
            </div>
          ) : (
            <div className="threedivmenu">
              <div id="div3"></div>
              <div id="div4"></div>
              <div id="div5"></div>
            </div>
          )}
        </div>
        {nav && (
          <div className="mobileBox">
            {navLinkList}
            {/* <span> {screenWidth}</span> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbars;
