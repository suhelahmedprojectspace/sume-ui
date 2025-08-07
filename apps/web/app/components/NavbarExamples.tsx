import React from 'react'
import { Navbar } from '@astra/ui'
const NavbarExamples = () => {
  return (
    <div>
        <Navbar
  logo="/vercel.svg"
  links={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services",
      children:[
          { label: "Web Development", href: "/services/web" },
      { label: "Mobile Apps", href: "/services/mobile" },
      ]
    },
     {
    label: "policies",
    children: [
      { label: "Company", href: "/about/company" },
      { label: "Team", href: "/about/team" },
       { label: "res", href: "/about/team" },
        { label: "Taf afsa asfds", href: "/about/team" },
         { label: "Teamda dfssd", href: "/about/team" },
          { label: "Teavvsfa afd", href: "/about/team" },
    ],
  },
  ]}
>
    <input
    type="text"
    placeholder="Search..."
    className="border px-3 py-1 rounded text-sm"
  />
</Navbar>
    </div>
  )
}

export default NavbarExamples