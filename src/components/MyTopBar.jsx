import Nav from "react-bootstrap/Nav";
import viteLogo from "/vite.svg";

const TopBar = () => {
  return (
    <Nav className="align-items-center bg-dark">
      <Nav.Item>
        <Nav.Link href="#" className="align-items-center">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="text-white">
        <b>EpicBooks</b>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Browse</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default TopBar;
