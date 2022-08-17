import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header_details">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <h1>
        BOYS
        <br />
        <span>International</span>
      </h1>
      <h3>Resgistration fee: ₦10,000</h3>
    </header>
  );
};

export default Header;
