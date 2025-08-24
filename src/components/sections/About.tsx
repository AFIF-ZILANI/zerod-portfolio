"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Building, LineChart, Zap } from "lucide-react";

export default function AboutUs2() {
    const aboutRef = useRef(null);
    const timelineRef = useRef(null);

    const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
    const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });

    return (
        <section id="about" className="relative w-full overflow-hidden py-16 md:py-24">
            {/* Background pattern */}
            <div className="absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.05]">
                <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path
                                d="M 40 0 L 0 0 0 40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-6">
                {/* Header Section with Badge */}
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
                            About Us
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="from-foreground to-foreground/70 bg-gradient-to-b bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
                    >
                        About Our Company
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-muted-foreground mt-4 text-xl"
                    >
                        Delivering excellence for over 15 years
                    </motion.p>
                </div>
                <div ref={aboutRef} className="relative mx-auto mb-20">
                    <div className="grid gap-16 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                            className="relative space-y-6"
                        >
                            <div className="from-primary/80 to-primary/60 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg">
                                <Zap className="h-6 w-6" />
                            </div>

                            <h2 className="text-2xl font-bold tracking-tight">Our Mission</h2>

                            <p className="text-muted-foreground text-base leading-relaxed">
                                Our mission is to turn bold ideas into reality through innovation,
                                creativity, and technology. Starting with software and web
                                development, we are building scalable, user-friendly, and impactful
                                solutions that empower individuals, businesses, and communities. We
                                strive to push boundaries, inspire change, and create opportunities
                                that drive global progress
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                            className="relative space-y-6"
                        >
                            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/80 to-blue-500/60 text-white shadow-lg">
                                <LineChart className="h-6 w-6" />
                            </div>

                            <h2 className="text-2xl font-bold tracking-tight">Our Vision</h2>

                            <p className="text-muted-foreground text-base leading-relaxed">
                                At ZeroD, our vision is to become the largest company in the galaxy
                                — a true parent company leading multiple child companies across
                                industries. From IT and AI to hardware, agriculture, and beyond, we
                                aim to innovate in every sector and shape the future of technology
                                and human progress.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                        className="mt-16 flex items-start gap-4"
                    >
                        <div className="from-primary/20 to-primary/5 text-primary inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
                            <Building className="h-5 w-5" />
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            We are a passionate team of experts dedicated to delivering exceptional
                            solutions that help businesses thrive in the digital landscape. Our
                            commitment to innovation and quality has made us a trusted partner for
                            organizations worldwide.
                        </p>
                    </motion.div>
                </div>

                {/* Timeline Section */}
                <div ref={timelineRef} className="relative mx-auto max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-10 text-center text-2xl font-bold tracking-tight md:text-3xl"
                    >
                        Our Journey
                    </motion.h2>

                    <div className="border-border/60 relative ml-4 border-l pl-8 md:ml-0 md:border-none md:pl-0">
                        {[
                            {
                                year: "5 Mar 2024",
                                title: "Founded",
                                description:
                                    "Our company was established with a vision to transform digital experiences.",
                            },
                            {
                                year: "~",
                                title: "And Still Going",
                                description: "Our journey continues with passion and dedication.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={
                                    timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                                }
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 * index,
                                    ease: "easeOut",
                                }}
                                className="relative mb-10 md:grid md:grid-cols-5 md:gap-8"
                            >
                                <div className="md:col-span-1">
                                    <div className="text-sm font-bold md:static md:h-auto md:w-auto md:rounded-none md:border-none md:bg-transparent md:text-xl text-white/80">
                                        {item.year}
                                    </div>
                                </div>
                                <div className="md:col-span-4">
                                    <h3 className="text-lg font-bold md:text-xl">{item.title}</h3>
                                    <p className="text-muted-foreground mt-1">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
