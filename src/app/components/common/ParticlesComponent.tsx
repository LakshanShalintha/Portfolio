"use client";
import Particles from "@tsparticles/react";
import { useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "tsparticles-engine";

const ParticlesComponent = (props: { id: string | undefined }) => {
  // Initialize particles engine using loadSlim
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  // Memoized options for particle effects
  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  // Rendering the Particles component with the specified options
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
