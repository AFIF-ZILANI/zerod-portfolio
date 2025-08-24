"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Check, Loader2 } from "lucide-react";
import GradientBars from "../ui/gradiant-bar";
export default function ContactUs1() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const formRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(formRef, { once: true, amount: 0.3 });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Perform form submission logic here
            console.log("Form submitted:", { name, email, message });
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setName("");
            setEmail("");
            setMessage("");
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className=" relative w-full overflow-hidden py-16 md:py-24 flex justify-center items-center">
            <div className="relative p-6 z-10 flex flex-col md:w-[60vw] w-[80%]" ref={formRef}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex gap-2"
                >
                    <h2 className="from-foreground to-foreground/80 mb-2 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                        Contact
                    </h2>
                    <span className="text-primary relative z-10 w-full text-4xl font-bold tracking-tight italic md:text-5xl">
                        Us
                    </span>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                >
                    <div className="grid grid-cols-1 gap-6">
                        <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                required
                            />
                        </motion.div>

                        <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter your message"
                            required
                            className="h-40 resize-none"
                        />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full"
                    >
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="md:w-[40%] bg-gradient-to-b from-rose-500 to-rose-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center">
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </span>
                            ) : isSubmitted ? (
                                <span className="flex items-center justify-center">
                                    <Check className="mr-2 h-4 w-4" />
                                    Message Sent!
                                </span>
                            ) : (
                                <span>Send Message</span>
                            )}
                        </Button>
                    </motion.div>
                </motion.form>
            </div>
            <GradientBars bars={40} colors={["transparent", "#2EB8A8", "transparent"]} />
        </section>
    );
}
