import React, {useState} from "react";
import "../component/Canvas.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import menuIcon from "../images/image.png";
import  {Offcanvas,Button} from "react-bootstrap";
function Canvas(){
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
return(
<div>
    <Button className="btn-open" onClick={handleOpen}><img src={menuIcon} alt="imgae"/></Button>
    <Offcanvas show={open} onHide={handleClose} placement="start">
      <Offcanvas.Header>
        <Button className="btn-close" onClick={handleClose}></Button>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
       <Offcanvas.Body>
  <ul className="menu-list">
    <li>Home</li>
    <li>Administration</li>
    <li>Departments</li>
    <li>Centres</li>
    <li>Facilities</li>
    <li>Scholarships</li>
    <li>Events</li>
  </ul>
</Offcanvas.Body>
       
      </Offcanvas.Body>
    </Offcanvas>
</div>
)
}
export default Canvas;