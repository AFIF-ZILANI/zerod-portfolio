"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Badge } from "../ui/badge";
import { LineChart, Sparkles } from "lucide-react";
import { MdWeb } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { LiaPagerSolid } from "react-icons/lia";

const services = [
    {
        title: "Custom Web Development",
        description:
            "Building responsive and scalable web applications tailored to your business needs.",
        icon: MdWeb,
    },
    {
        title: "E-commerce Solutions",
        description:
            "Developing robust e-commerce platforms to help you sell products online effectively.",
        icon: BsShop,
    },
    {
        title: "Landing Page",
        description: "Creating high-converting landing pages to boost your marketing campaigns.",
        icon: LiaPagerSolid,
    },
    {
        title: "SEO Optimization",
        description:
            "Improving your website's visibility on search engines to attract more organic traffic.",
        icon: LineChart,
    },
];

export default function Services() {
    const aboutRef = useRef(null);

    const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
    return (
        <section id="services">
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
                        Services
                    </Badge>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="from-foreground to-foreground/70 bg-gradient-to-b bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
                >
                    Our Current Services
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-muted-foreground mt-4 text-xl"
                >
                    We offer a wide range of services to help businesses thrive in the digital age
                </motion.p>
            </div>
            <div ref={aboutRef} className="container mx-auto max-w-6xl px-4 md:px-6">
                <div className="grid gap-16 md:grid-cols-2">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.3 + index * 0.2,
                                ease: "easeOut",
                            }}
                            className="flex flex-col items-center"
                        >
                            <div className="from-primary/20 to-primary/5 text-primary inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                            <p className="mt-2 text-muted-foreground text-center">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
