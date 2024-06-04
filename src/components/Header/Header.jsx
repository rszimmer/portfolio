import "./Header.css";

const Header = ({ links }) => {
  return (
    <div id='header'>
      {links.map((linkTitle, index) => (
        <a key={`${linkTitle}_pos_${index}`} href=''>
          {linkTitle}
        </a>
      ))}
    </div>
  );
};

export default Header;
