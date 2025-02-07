export const theme = {
  colors: {
    // Base Colors
    background: {
      primary: "#0A0A0F",
      secondary: "#131313",
      card: "rgba(255, 255, 255, 0.05)",
    },
    // Gradient Accents
    gradients: {
      primary: "from-purple-500 to-pink-500",
      secondary: "from-purple-400 to-pink-600",
      subtle: "from-purple-400/20 to-pink-600/20",
      glow: "from-purple-500/20 via-transparent to-transparent",
    },
    // Text Colors
    text: {
      primary: "#FFFFFF",
      secondary: "#94A3B8",
      accent: "#A855F7",
    },
    // Border Colors
    border: {
      primary: "rgba(255, 255, 255, 0.1)",
      hover: "rgba(255, 255, 255, 0.2)",
    }
  },
  // Common Effects
  effects: {
    hover: "hover:scale-105 transition-all duration-200",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.3)]",
    glassMorphism: "backdrop-blur-sm bg-white/5",
  }
} 