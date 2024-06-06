import "./Header.css";

const Header = ({ links }) => {
  return (
    <head id='header'>
      {links.map((linkTitle, index) => (
        <a key={`${linkTitle}_pos_${index}`} href=''>
          {linkTitle}
        </a>
      ))}
    </head>
  );
};

export default Header;
