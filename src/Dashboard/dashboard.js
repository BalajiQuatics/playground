import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  NavLink,
  Container,
  Row,
  Col,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faThList, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      start: false,
    };
  }
  startTransition = () => {
    this.setState({ start: !this.state.start });
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const logo = require("./dp.jpg");
    let st = this.state.start;

    return (
      <div>
        <Container fluid>
          <Row className={st ? "bgt-1" : ""}>
            <Col lg="8" className="pt-4  ">
              <Navbar light expand="md">
                <NavbarBrand href="/">
                  <FontAwesomeIcon
                    className={st ? "text-white" : ""}
                    icon={faThList}
                  />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem className="ml-5">
                      <NavLink className={st ? "text-white" : ""} href="/">
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem className="ml-5" onClick={this.startTransition}>
                      <NavLink href="#" className={st ? "text-white" : ""}>
                        Popular
                      </NavLink>
                    </NavItem>
                    <NavItem className="ml-5">
                      <NavLink href="#" className={st ? "text-white" : ""}>
                        Search
                      </NavLink>
                    </NavItem>
                    <NavItem className="ml-5">
                      <NavLink href="#" className={st ? "text-white" : ""}>
                        Podcasts
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <NavbarText className={st ? "be" : ""}>
                    <FontAwesomeIcon icon={faBell} />
                  </NavbarText>
                </Collapse>
              </Navbar>

              {/* sec-1 */}
              <Row className="pl-5 mt-3">
                <Col
                  lg="5"
                  className={"grid-1 m-auto " + (st ? "dis-none" : "")}
                >
                  <div className="  d-flex justify-content-center align-items-center c-box ht-100 border-c ga ">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>

                  <div className="sm-box c-box pl-4 py-2 my-3 border-c">
                    <p className="m-0 font-weight-100">Online</p>
                    <p className="m-0">229 Podcasts</p>
                  </div>
                  <div className="sm-box-1 c-box  trend  my-3 d-flex justify-content-center align-items-center border-c">
                    <p className="m-0 font-weight-bold">Trend</p>
                  </div>
                </Col>
                <Col lg="5" className={"m-auto " + (st ? "wh" : "")}>
                  <div>
                    <h4 className="mb-3">Where we finished</h4>
                    <div className="c-box ht-100 bg-1 border-c"></div>
                  </div>
                </Col>
                {st ? (
                  <Col lg="8" className="ht-250 bg-7 flip border-c"></Col>
                ) : (
                  ""
                )}
              </Row>

              <h4 className={"pl-5 mt-3 pst " + (st ? "ps" : "")}>
                Personal Board
              </h4>
              <Row className="pl-5 mt-3 ">
                <Col lg="5" className={"grid-1 " + (st ? "gd-1" : "")}>
                  <div
                    className={
                      " bg-3 d-flex justify-content-center align-items-center  ht-150 border-c ga a1 " +
                      (st ? "gat" : "")
                    }
                  ></div>

                  <div
                    className={"bg-2  pl-4  border-c a2 " + (st ? "gat-1" : "")}
                  ></div>
                  <div
                    className={"bg-2      border-c a3 " + (st ? "gat-1t" : "")}
                  ></div>
                </Col>
                <Col className="grid-2 ">
                  <div
                    className={"bg-2  border-c a4 " + (st ? "dis-none" : "")}
                  ></div>
                  <div
                    className={"bg-2  border-c a2 " + (st ? "dis-none" : "")}
                  ></div>
                  <div
                    className={
                      " bg-3   ht-100 border-c ga-1 " + (st ? "dis-none" : "")
                    }
                  ></div>
                  <div
                    className={"bg-2  border-c ga-2 a5 " + (st ? "ga1t" : "")}
                  ></div>
                  <div
                    className={
                      " bg-3  a6 border-c ga-3 " + (st ? "dis-none" : "")
                    }
                  ></div>
                  <div
                    className={" bg-3  border-c ga-4 a1 " + (st ? "ga2t" : "")}
                  ></div>
                </Col>
              </Row>
            </Col>

            {/* sec-2 */}

            <Col className={"bg-1 pr " + (st ? "bg-w" : "")}>
              <div className="text-center mt-5">
                <img
                  className={"rounded-circle tr " + (st ? "dpt" : "") + " dp"}
                  src={logo}
                  alt=""
                />
                <h4 className={"tr dpname m-auto " + (st ? "dst" : "")}>
                  Lebron Bala
                </h4>
              </div>
              <div
                className={"text-left mt-5 pl-5 tr " + (st ? "dis-none" : "")}
              >
                <h6 className="mb-2 mt-5 pl-5">Loreem Ipsum</h6>
                <h6 className="my-2 pl-5">Loreem Ipsum</h6>
                <h6 className="my-2 pl-5">Loreem Ipsum</h6>
              </div>

              <div
                className={"bg-4  border-c mt-4 " + (st ? "dis-none" : "")}
              ></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
