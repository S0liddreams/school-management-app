import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/home",
      },
      {
        icon: "/education.png",
        label: "Teachers",
        href: "/teachers",
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/student",
      },
     
      {
        icon: "/parents.png",
        label: "Parents",
        href: "/parents",
      },
      {
        icon: "/training.png",
        label: "Classes",
        href: "/classes",
      },
      {
        icon: "/notes.png",
        label: "Lesson",
        href: "/lesson",
      },
      {
        icon: "/exams.png",
        label: "Exams",
        href: "/exams",
      },
      {
        icon: "/delegate.png",
        label: "Assignments",
        href: "/assisntments",
      },
      {
        icon: "/selection.png",
        label: "Attendance",
        href: "/attendance",
      },
    
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/events",
      },
      {
        icon: "/email.png",
        label: "Message",
        href: "/message",
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/announcements",
      },
    ],
  },

  {
    title: "OTHER",

    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-medium my-4">{i.title}</span>
          {i.items.map((item) => (
            <Link className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2" href={item.href} key={item.label}>
              <Image src={item.icon} alt="alt" width={20} height={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
