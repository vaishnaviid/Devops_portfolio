import { ProfileData as data } from '@/config/content';
import { IconContext } from 'react-icons';
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";

export const SocialIcons = () => {

  const socials = [
    { key: "mail",      url: data.socials.mail,      icon: <FiMail /> },
    { key: "github",    url: data.socials.github,    icon: <FiGithub /> },
    { key: "linkedin",  url: data.socials.linkedin,  icon: <FiLinkedin /> },
    { key: "instagram", url: data.socials.instagram, icon: <FiInstagram /> },
    { key: "twitter",   url: data.socials.twitter,   icon: <FaXTwitter /> },
  ];

  return (
    <IconContext.Provider value={{ size: "1.25rem" }}>
      <ul className="reset flex items-center gap-3">
        {socials
          .filter((item) => item.url && item.url.trim() !== "")
          .map((item, index) => {
            const href =
              item.key === "mail"
                ? `mailto:${item.url}`
                : item.url;

            return (
              <li key={index} className="leading-0">
                <a href={href} className="inline-block p-2 rounded-full hover:bg-gray-800 transition"
                  aria-label={item.key}
                  target={item.key === "mail" ? "" : "_blank"}
                >
                  {item.icon}
                </a>
              </li>
            );
          })}
      </ul>
    </IconContext.Provider>
  );
};