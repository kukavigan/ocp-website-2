import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Industries from "@/pages/Industries";
import Certifications from "@/pages/Certifications";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";

import logo from "@/assets/ocp-logo.png";

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{
            scale: 0.85,
            opacity: 0,
            y: 10,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mb-8 flex items-center justify-center"
        >
          <img
            src={logo}
            alt="On Call Prime"
            className="h-auto w-36 object-contain md:w-44"
          />
        </motion.div>

        <div className="h-px w-48 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.4,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-green"
          />
        </div>
      </div>
    </motion.div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <HashRouter>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            key="loader"
            onComplete={() => {
              setIsLoading(false);
            }}
          />
        )}
      </AnimatePresence>

      {!isLoading && <AppRoutes />}
    </HashRouter>
  );
}
