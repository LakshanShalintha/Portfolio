"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { ISourceOptions } from "tsparticles-engine";

interface ParticlesComponentProps {
  id: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = ({ id }) => {
  // UseCallback to initialize the particles engine
  const particlesInit = useCallback(async () => {
    // Load the slim version of tsParticles to reduce the bundle size
    return
  }, []);

  // Particle options typed explicitly with ISourceOptions for safety
  const particlesOptions: ISourceOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push", // Use predefined mode string literal
        },
        onHover: {
          enable: true,
          mode: "grab", // Use predefined mode string literal
        },
        resize: true, // Ensure particles resize on window resize
      },
      modes: {
        push: {
          quantity: 4, // Pushes 4 particles on click
        },
        grab: {
          distance: 200, // Grab distance for hover
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff", // Set color to white
      },
      links: {
        color: "#ffffff", // White links
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none", // Correct typing here
        enable: true,
        outModes: {
          default: "bounce", // Particles bounce on borders
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800, // Particle density
        },
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      shape: {
        type: "circle", // Circle particles
      },
      size: {
        value: { min: 1, max: 5 }, // Random size between 1 and 5
      },
    },
    detectRetina: true, // Enable retina detection for high-resolution devices
  };

  return (
    <Particles id={id} init={particlesInit} options={particlesOptions} />
  );
};

export default ParticlesComponent;
