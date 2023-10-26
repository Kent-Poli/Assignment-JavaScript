import { NavLink } from "react-router-dom";
const Links = () => {
  const links = [
    { link: "Home", url: "/" },
    { link: "Service", url: "/service" },
    { link: "News", url: "/news" },
    { link: "Contact", url: "/contact" },
  ];
  return (
    <>
      {links.map((item, index) => (
        <li key={index}>
          <NavLink to={item.url}>{item.link}</NavLink>
        </li>
      ))}
    </>
  );
};

export default Links;
