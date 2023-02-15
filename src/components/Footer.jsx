const react = require("react");

function Footer() {
  var now = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {now}</p>
    </footer>
  );
}

export default Footer;
