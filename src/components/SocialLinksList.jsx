import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

export let socialLinkList = [
  {
    id: 1,
    title: "linkedIn",
    child: (
      <>
        LinkedIn <FaLinkedin id="linkedInid" />
      </>
    ),
    href: "https://www.linkedin.com/in/niraditya-k-3669331b9/",
  },

  {
    id: 2,
    title: "github",
    child: (
      <>
        Github <FaGithub id="githubid" />
      </>
    ),
    href: "https://github.com/nir-github01",
  },
  {
    id: 3,
    title: "gmail",
    child: (
      <>
        Gmail <BiLogoGmail id="gmailid" />
      </>
    ),
    href: "mailto:emmanuelniry007@gmail.com",
  },

  {
    id: 4,
    title: "resume",
    child: (
      <>
        Resume <CgProfile id="profileid" />
      </>
    ),
    href: "./resume.pdf",
    download:true,
  },
];
