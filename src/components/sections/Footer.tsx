import React from "react";
import { inter } from "../fonts";
import { Separator } from "../ui/separator";
import FlipLink from "../ui/text-effect-flipper";
import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { IconType } from "react-icons";
import Earth from "../ui/globe";

interface ScocialLinkProps {
    href: string;
    Icon: IconType;
    name: string;
    iconPos?: "left" | "right";
}

const socialLinks = [
    { href: "https://github.com/zerodofficial", Icon: FaGithub, name: "Github", iconPos: "left" },
    {
        href: "https://www.facebook.com/profile.php?id=61565070907652",
        Icon: FaFacebook,
        name: "Facebook",
        iconPos: "right",
    },
    { href: "#", Icon: FaXTwitter, name: "Twitter", iconPos: "left" },
    {
        href: "https://www.instagram.com/zerodofficial",
        Icon: FaInstagram,
        name: "Instagram",
        iconPos: "right",
    },
    { href: "#", Icon: FaLinkedinIn, name: "Linkedin", iconPos: "left" },
];

export default function Footer() {
    return (
        <footer className="text-white py-6 w-full md:h-screen relative overflow-hidden">
            <div className={`text-center space-y-3 relative md:right-[10rem]`}>
                <h2 className="md:text-3xl text-2xl font-bold mb-2 text-[#FF401A]">Connect with Us</h2>
                <div className="flex flex-col justify-center items-center gap-4">
                    {socialLinks.map(({ href, Icon, name, iconPos }) => (
                        <ScocialLink
                            key={name}
                            href={href}
                            Icon={Icon}
                            name={name}
                            iconPos={iconPos === "right" ? "right" : "left"}
                        />
                    ))}
                </div>
            </div>
            <div className="absolute top-28 left-20 md:left-[20rem] w-full flex justify-center z-[-10]">
                <Earth
                    scale={1.1}
                    baseColor={[1, 0.251, 0.102]} // #ff401a
                    markerColor={[1, 0.251, 0.102]} // #ff401a
                    glowColor={[1, 0.251, 0.102]} // #ff401a
                />
            </div>

            <div
                className={`px-[4rem] mt-14 ${inter.className} text-center text-sm text-white/50 space-y-1 `}
            >
                <Separator />
                <span>All rights reserved &copy; ZeroD {new Date().getFullYear()}</span>
            </div>
        </footer>
    );
}

function ScocialLink({ href, Icon, name, iconPos = "left" }: ScocialLinkProps) {
    return (
        <div className="flex justify-center items-center gap-1 group">
            {iconPos === "right" && <FlipLink href={href}>{name}</FlipLink>}
            <span className="md:h-[4.5rem] h-[1.8rem] bg-white text-black rounded-lg flex justify-center items-center px-1 group-hover:bg-[#FF401A] transition-colors group-hover:text-white">
                <Icon className="md:text-6xl text-2xl" />
            </span>
            {iconPos === "left" && <FlipLink href={href}>{name}</FlipLink>}
        </div>
    );
}
