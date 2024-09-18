"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "@tsparticles/slim"; // Using slim version for smaller bundle size

interface ParticlesComponentProps {
  id: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = ({ id }) => {
  const [init, setInit] = useState(false);

  // Load particles slim engine only once
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setInit(true); // Set state to indicate that initialization is complete
  }, []);

  const particlesLoaded = useCallback((container: any) => {
    console.log("Particles loaded", container);
  }, []);

  // Memoize particle options for performance optimization
  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse", // Repulse on click
          },
          onHover: {
            enable: true,
            mode: "grab", // Grab on hover
          },
        },
        modes: {
          repulse: {
            distance: 200, // Set repulse distance
            duration: 0.4,
          },
          grab: {
            distance: 150, // Set grab distance
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF", // White particles
        },
        links: {
          color: "#FFFFFF", // White links
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Bounce on borders
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, // Particle density control
          },
          value: 150, // Total number of particles
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle", // Circle shaped particles
        },
        size: {
          value: { min: 1, max: 3 }, // Particle size range
        },
      },
      detectRetina: true, // Enable retina detection
    }),
    []
  );

  return (
    <Particles id={id} init={particlesInit} options={options} />
  );
};

export default ParticlesComponent;
