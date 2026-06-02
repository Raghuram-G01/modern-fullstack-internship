import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/service">Service</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/contact/teams">Teams</Link>
        </li>
        <li>
          <Link href="/client/users">Users</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/form">Form</Link>
        </li>
      </ul>
    </nav>
  );
}

// task: multipage personal site 
// personal portfolio site (keep it minimal)

// a blog fecthing 