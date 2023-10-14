"use client";

import "./Navbar.css";
import Image from "next/image";
import { Person } from "@styled-icons/bootstrap/Person/Person";
import { NotificationsNone } from "@styled-icons/material/NotificationsNone/NotificationsNone";
import { Add } from "@styled-icons/ionicons-outline/Add/Add";
import * as bootstrap from "@styled-icons/bootstrap";
import * as boxiconsLogos from "@styled-icons/boxicons-logos";
import * as boxiconsRegular from "@styled-icons/boxicons-regular";
import * as boxiconsSolid from "@styled-icons/boxicons-solid";
import * as crypto from "@styled-icons/crypto";
import * as entypo from "@styled-icons/entypo";
import * as entypoSocial from "@styled-icons/entypo-social";
import * as evaiconsOutline from "@styled-icons/evaicons-outline";
import * as evaiconsSolid from "@styled-icons/evaicons-solid";
import * as evil from "@styled-icons/evil";
import * as faBrands from "@styled-icons/fa-brands";
import * as faRegular from "@styled-icons/fa-regular";
import * as faSolid from "@styled-icons/fa-solid";
import * as feather from "@styled-icons/feather";
import * as fluentUISystemFilled from "@styled-icons/fluentui-system-filled";
import * as fluentUISystemRegular from "@styled-icons/fluentui-system-regular";
import * as foundation from "@styled-icons/foundation";
import * as heroiconsOutline from "@styled-icons/heroicons-outline";
import * as heroiconsSolid from "@styled-icons/heroicons-solid";
import * as icomoon from "@styled-icons/icomoon";
import * as ioniconsSharp from "@styled-icons/ionicons-sharp";
import * as ioniconsSolid from "@styled-icons/ionicons-solid";
import * as ioniconsOutline from "@styled-icons/ionicons-outline";
import * as materialRounded from "@styled-icons/material-rounded";
import * as materialSharp from "@styled-icons/material-sharp";
import * as materialTwoTone from "@styled-icons/material-twotone";
import * as octicons from "@styled-icons/octicons";
import * as remixFill from "@styled-icons/remix-fill";
import * as remixEditor from "@styled-icons/remix-editor";
import * as remixLine from "@styled-icons/remix-line";
import * as simpleIcons from "@styled-icons/simple-icons";
import * as typicons from "@styled-icons/typicons";
import * as zondicons from "@styled-icons/zondicons";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar__container ">

      <div className="left__content">
        <li className="hamburgerMenu">
          <span className="name">HamBurgerMenu</span>
          <span className="icon">
            <evaiconsSolid.Menu2 size="20" title="Menu" />
          </span>
        </li>
        <li className="logo__container">
          <div className="logo__main__container">
            <Image src="/logo.png" width={18} height={18} alt="Logo Main" />
            <span className="name">Logo Main</span>
          </div>
          <div className="logo__banner__container md:hidden ">
            <h5 className="text-md font-bold">Hello</h5>
            <span className="name">Logo Banner</span>
          </div>
        </li>
        <li className="web3__status bg-red-200 ">
          <span className="icon">
            <zondicons.CheveronDown size="20" title="Chat" />
          </span>
          <h5 className="web3__balance">0101010</h5>
          <span className="web3__network"></span>
        </li>
      </div>

      <div className="center__content ">
        <li className="search__container">
          <boxiconsRegular.SearchAlt size="35" title="Search" />
          <input
            type="text"
            name="Search"
            id="search"
            placeholder="Search for joy!!!"
          />
          <div className="mic__container">
            <span className="name">Mic Input</span>
            <bootstrap.Mic size="10" title="Mic Input" />
          </div>
          <div className="file__container">
            <span className="name">File Input</span>
            <bootstrap.Collection size="10" title="File Input" />
          </div>
        </li>
      </div>

      <div className="right__content ">
        <div className="extra__content">
          <li className="add__container icon__container">
            <span className="name">Add</span>
            <Add size="20" title="Add" />
          </li>
          <li className="add__container icon__container">
            <span className="name">Add</span>
            <ioniconsSolid.Infinite size="16" title="Add" />
          </li>
          <li className="chat__container icon__container">
            <span className="name">Chat</span>
            <remixLine.Messenger size="16" title="Chat" />
          </li>

          <li className="rightSidebar__container icon__container">
            <span className="name">Right SideBar</span>
            <bootstrap.LayoutSidebarReverse size="12" title="Right Sidebar" />
          </li>
        </div>
        <li className="extra  icon__container">
          <span className="name">Extra</span>
          <zondicons.CheveronDown size="20" title="Extra" />
        </li>
        <li className="search__container icon__container">
          <span className="name">Search</span>
          <boxiconsRegular.SearchAlt size="20" title="Search" />
        </li>
        <li className="notification__container icon__container">
          <span className="name">Notification</span>
          <NotificationsNone size="20" title="Notifications" />
        </li>
        <li className="profile__container icon__container">
          <span className="name">Profile</span>
          <span className="icon">
            <Person size="20" title="Profile" />
          </span>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
