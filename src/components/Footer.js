function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>Online Voting &copy; 2022</p>
      </div>
      <div className="footer-content">
        <a href="#">
          <img src={ process.env.PUBLIC_URL + "/assets/github-logo.png" } alt=""/>
        </a>
      </div>
    </footer>
  );
}



export default Footer;