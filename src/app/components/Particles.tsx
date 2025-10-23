"use client";

import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import { useTheme } from "../context/ThemeContext";

export default function ParticlesComponent() {
  const { theme } = useTheme(); // get current theme
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: theme === "dark" ? "#ffffff" : "#288bf7" },
          links: {
            color: { value: theme === "dark" ? "#ffffff" : "#288bf7" },
            distance: 120,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 1,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 150 },
          opacity: { value: 0.2 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}
