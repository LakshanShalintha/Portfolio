import React from 'react';
import NavLink from './NavLink';

interface MenuBarProps {
  links: { title: string; path: string }[]; // Define the type for the links prop
}

function MenuBar({ links }: MenuBarProps) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}

export default MenuBar;
