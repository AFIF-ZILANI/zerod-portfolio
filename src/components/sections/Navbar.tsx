"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Founders", href: "#founders" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = React.useState(false);

    return (
        <header className="top-0 left-0 w-full z-50 fixed backdrop-blur-md">
            <nav className="flex items-center justify-between p-4">
                {/* Logo */}
                <Link href={"/"} className="cursor-pointer">
                    <Image src="/images/hero.png" alt="hero logo" width={80} height={50} />
                </Link>

                {/* Desktop Menu */}
                <div className="text-primary-foreground hidden md:block">
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

                {/* Mobile Menu */}
                <Sheet onOpenChange={setOpen} open={open}>
                    <SheetTrigger>
                        <IoMenu className="text-4xl cursor-pointer" />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Navigation Menu</SheetTitle>
                        </SheetHeader>
                        <ul className="flex flex-col px-10 gap-6 mt-6">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="bg-white text-black rounded-lg p-2 hover:bg-gray-200 transition"
                                    onClick={() => setOpen(false)} // ✅ Auto-close when link is clicked
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </ul>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
}
