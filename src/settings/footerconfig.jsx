import { AiFillYoutube, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const FooterSocials = [
  {
    link: "https://www.youtube.com/channel/UCl6K8DAtlXkonUjbzDkkA9g",
    icon: <AiFillYoutube />,
  },
  {
    link: "https://instagram.com/xaero.id",
    icon: <AiFillInstagram />,
  },
  {
    link: "https://www.linkedin.com/in/abramsatria",
    icon: <AiFillLinkedin />,
  },
  {
    link: "https://discord.gg/XqbR6Mg45C",
    icon: <FaDiscord />,
  },
];

const FooterLinks = [
  {
    name: `AboutUS`,
    url: `/about`,
  },
  {
    name: `ContactUS`,
    url: `/contact`,
  },
];

export { FooterLinks, FooterSocials };
