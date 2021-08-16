import React from "react";
import ContainerWrapper from "./ContainerWrapper";
import logo from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendarDay,
  faEnvelope,
  faHome,
  faComments,
  faShoppingBag,
  faShoppingCart,
  faTachometerAlt,
  faUniversity,
  faUser,
  faCalendar,
  faTv,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/actions/globalActions";
import "../../Css/Fonts.css";
import { faBlogger } from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

const Container = ({ children }) => {
  const { page } = useParams();
  const isShow = useSelector((state) => state.global.isSidebarShow);

  return (
    <ContainerWrapper>
      <div className={`sidebar ${(isShow && "show") || ""}`}>
        <p className="fw-bold fs-3 mb-4 d-flex justify-content-center">M{isShow && <span>enu</span>}</p>
        <ul className="menu">
          <li className="heading m-3 d-flex justify-content-center">GEN{isShow && <span>ERAL</span>}</li>
          <li>
            <Link to="/" className={`${(page == "app" && "active") || ""}`}>
              <FontAwesomeIcon icon={faTachometerAlt} /> {isShow && "App"}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/commerce"
              className={`${(page == "commerce" && "active") || ""}`}
            >
              <FontAwesomeIcon icon={faShoppingBag} /> {isShow && "E-Commerce"}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/analytics"
              className={`${(page == "analytics" && "active") || ""}`}
            >
              <FontAwesomeIcon icon={faChartBar} /> {isShow && "Analytics"}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/banking"
              className={`${(page == "banking" && "active") || ""}`}
            >
              <FontAwesomeIcon icon={faUniversity} /> {isShow && "Banking"}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/booking"
              className={`${(page == "booking" && "active") || ""}`}
            >
              <FontAwesomeIcon icon={faCalendarDay} /> {isShow && "Booking"}
            </Link>
          </li>
          <li className="heading m-3 d-flex justify-content-center">MAN{isShow && "AGEMENT"}</li>
          <li>
            <Link
              to="/dashboard/users"
              className={`${(page == "users" && "active") || ""}`}
            >
              <FontAwesomeIcon icon={faUser} /> {isShow && "User"}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/commerc"
              className={`${(page == "commerc" && "active") || ""}`}
            >
              <FontAwesomeIcon icon={faShoppingCart} /> {isShow && "E-Commerce"}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/blog"
              className={`${(page == "blog" && "active") || ""}`}
            >
              <FontAwesomeIcon icon={faBlogger} /> {isShow && "Blog"}
            </Link>
          </li>
          <li className="heading m-3 d-flex justify-content-center">APP{isShow && ""}</li>
          <li>
            <Link
              to="/dashboard/mail"
              className={`${(page == "mail" && "active") || ""}`}
            >
              <FontAwesomeIcon icon={faEnvelope} /> {isShow && "Mail"}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/chat"
              className={`${(page == "chat" && "active") || ""}`}
            >
              <FontAwesomeIcon icon={faComments} /> {isShow && "Chat"}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/calendar"
              className={`${(page == "calendar" && "active") || ""}`}
            >
              <FontAwesomeIcon icon={faCalendarAlt} /> {isShow && "Calendar"}
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/tv"
              className={`${(page == "tv" && "active") || ""}`}
            >
              <FontAwesomeIcon icon={faTv} /> {isShow && "Kanban"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="rightside">
        <header className="px-2 py-3 shadow">
          <Button color="light" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <img src={logo} className="logo" alt="" />
        </header>
        <div className="content">{children}</div>
      </div>
    </ContainerWrapper>
  );
};

export default Container;
