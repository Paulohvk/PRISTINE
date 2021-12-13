import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className='item'>
          <Icon color = 'black' name = 'home'/>
          Home
        </a>
      </Link>
      <Link route="/data/market">
        <a className='item'>
        <Icon name = 'users'/>
          Marketplace
        </a>
      </Link>
      <Link route="/data/submit">
        <a className='item'>
        <Icon name = 'download'/>
          Submit your Data
        </a>
      </Link>
      <Link route="/about">
        <a className='item'>
        <Icon name = 'users'/>
          About Us
        </a>
      </Link>
    </Menu>
  );
};
