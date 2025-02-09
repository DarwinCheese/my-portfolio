"use client"
import * as React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black text-white">
            <motion.h1
                className="text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: -50 }} // Start hidden and above
                animate={{ opacity: 1, y: 0 }}   // Fade in and slide down
                transition={{ duration: 1 }}      // Duration of 1 second
            >
                Hi, I'm Darwin Gutierrez
            </motion.h1>

            <motion.p
                className="text-xl text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Full-Stack Developer | C# • Azure • NextJS
            </motion.p>
            <motion.a
                href="/projects"
                className="px-6 py-2 bg-blue-500 rounded-xl shadow-md"
                whileHover={{ scale: 1.4 }}   // Slightly enlarge on hover
                whileTap={{ scale: 0.95 }}    // Slight shrink on click
                transition={{ type: "spring", stiffness: 300 }}
            >
                View my projects
            </motion.a>
        </section>
    );
};