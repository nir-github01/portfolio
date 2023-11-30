import React from "react";
import { socialLinkList } from "../components/SocialLinksList";

const SocialLinks = () => {
  let socilLinks = socialLinkList.map((sociallink) => {
    return (
      <div
        key={sociallink.id}
        id={sociallink.title + "div"}
        className="socialLinks"
      >
        <a
          href={sociallink.href}
          target="_blank"
          id={sociallink.title}
          className="socialLinksName"
          download={sociallink.download}
          rel="noreferrer"
        >
          {sociallink.child}
        </a>
      </div>
    );
  });
  return (
    <div>
      <div className="sociallinksContainer">{socilLinks}</div>
    </div>
  );
};

export default SocialLinks;
