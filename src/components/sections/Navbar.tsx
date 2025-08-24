import React from "react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <header className="top-0 left-0 w-full z-50 fixed  backdrop-blur-md ">
            <nav className="flex items-center justify-between p-4">
                <Link href={"/"} className="cursor-pointer">
                    <Image src="/images/hero.png" alt="hero logo" width={80} height={50} />
                </Link>
                <div className="text-primary-foreground">
                    <ul className="flex justify-around gap-28">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="hover:text-primary cursor-pointer transition"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
