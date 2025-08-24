"use client";

import React from "react";
import { Badge } from "../ui/badge";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { motion} from "framer-motion";
import { FaFacebook, FaGithub, FaGlobe, FaStar } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Founders: React.FC = () => {
    return (
        <section id="founders" className="min-h-screen text-white">
            <div className="mx-auto mb-16 max-w-3xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-4 flex justify-center"
                >
                    <Badge
                        variant="outline"
                        className="border-primary/20 bg-primary/5 rounded-full px-4 py-1 text-sm font-medium"
                    >
                        <Sparkles className="text-primary mr-1 h-3.5 w-3.5" />
                        Our Founders
                    </Badge>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="from-foreground to-foreground/70 bg-gradient-to-b bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
                >
                    Our Company Founders
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-muted-foreground mt-4 text-xl"
                >
                    The visionaries behind our success
                </motion.p>
            </div>
            <div className="py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* <!-- Left Side: Image --> */}
                <div className="w-full md:w-5/12 flex justify-center h-full md:justify-end">
                    <Image
                        src="/images/tauhid.jpg"
                        alt="About Tauhid Rana"
                        className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* <!-- Right Side: Text Content --> */}
                <div className="w-full md:w-7/12 text-center md:text-left relative">
                    {/* <!-- Vertical Text --> */}
                    <div className="absolute left-[40%] -top-6 md:-left-16  lg:top-0 md:top-6 rotate-0 md:rotate-[-90deg] text-sm tracking-widest">
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-16 h-[2px] bg-white"></div>
                            <p>MORE ABOUT</p>
                        </div>
                    </div>

                    {/* <!-- Main Heading --> */}
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-10">
                        Hello There!, I&apos;m <br />{" "}
                        <span className=" text-[#FF401A]">Tauhid Rana</span>
                    </h2>

                    {/* <!-- Description --> */}
                    <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
                        A Full-Stack Web Developer from Naogaon, Dhaka, Bangladesh who loves what I
                        do and is a core member of ZeroD. I use Next.js, React, MongoDB, and
                        Tailwind CSS and other technologies make web apps that are modern, fast, and
                        easy to use. With a solid base in I turn ideas into reality by writing clean
                        code, designing smartly, and making solutions that can grow.
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                        <FaStar className="text-xl text-yellow-400 mb-1" />
                        <span>Frontend Web Development</span>
                    </div>

                    {/* <!-- Buttons --> */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-4xl bg-white text-black hover:bg-primary p-1 rounded-lg hover:text-white transition-colors duration-300" />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-4xl bg-white text-black hover:bg-primary p-1 rounded-lg hover:text-white transition-colors duration-300" />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-4xl bg-white text-black hover:bg-primary p-1 rounded-lg hover:text-white transition-colors duration-300" />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className="text-4xl bg-white text-black hover:bg-primary p-1 rounded-lg hover:text-white transition-colors duration-300" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/afifzilani"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn className="text-4xl bg-white text-black hover:bg-primary p-1 rounded-lg hover:text-white transition-colors duration-300" />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaGlobe className="text-4xl bg-white text-black hover:bg-primary p-1 rounded-lg hover:text-white transition-colors duration-300" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* <!-- Left Side: Image --> */}
                <div className="w-full md:w-5/12 flex justify-center h-full md:justify-end">
                    <Image
                        src="/images/afif2.jpg"
                        alt="About AFIF ZILANI"
                        className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* <!-- Right Side: Text Content --> */}
                <div className="w-full md:w-7/12 text-center md:text-left relative">
                    {/* <!-- Vertical Text --> */}
                    <div className="absolute left-[40%] -top-6 md:-left-16  lg:top-0 md:top-6 rotate-0 md:rotate-[-90deg] text-sm tracking-widest">
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-16 h-[2px] bg-white"></div>
                            <p>MORE ABOUT</p>
                        </div>
                    </div>

                    {/* <!-- Main Heading --> */}
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-10">
                        Hi I&apos;m
                        <br /> <span className="text-primary">AFIF ZILANI</span>
                    </h2>

                    {/* <!-- Description --> */}
                    <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
                        An 18-year-old Full-Stack Web Developer from Naogaon, Dhaka, Bangladesh, and
                        I helped start ZeroD. I know how to use Next.js, React, MongoDB, and
                        Tailwind CSS and other technologies to make modern, scalable, and
                        easy-to-use web apps. I bring ideas to life with clean code and creative
                        solutions, focusing on both frontend and backend development.
                    </p>

                    {/* <!-- Buttons --> */}
                    <div className="flex items-center gap-2 mb-4">
                        <FaStar className="text-xl text-yellow-400 mb-1" />
                        <span>Backend Web Development</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="http://github.com/AFIF-ZILANI"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="text-4xl bg-white text-black hover:bg-primary p-1 rounded-lg hover:text-white transition-colors duration-300" />
                        </a>
                        <a
                            href="http://facebook.com/AFIF.ZILANI00"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook className="text-4xl bg-white text-black hover:bg-primary p-1 rounded-lg hover:text-white transition-colors duration-300" />
                        </a>
                        <a
                            href="http://instagram.com/afif.zilani"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="text-4xl bg-white text-black hover:bg-primary p-1 rounded-lg hover:text-white transition-colors duration-300" />
                        </a>
                        <a
                            href="http://x.com/afif_zilani"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaXTwitter className="text-4xl bg-white text-black hover:bg-primary p-1 rounded-lg hover:text-white transition-colors duration-300" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/afifzilani"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn className="text-4xl bg-white text-black hover:bg-primary p-1 rounded-lg hover:text-white transition-colors duration-300" />
                        </a>
                        <a
                            href="https://afifzilani.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGlobe className="text-4xl bg-white text-black hover:bg-primary p-1 rounded-lg hover:text-white transition-colors duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founders;
