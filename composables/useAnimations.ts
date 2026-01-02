/**
 * Premium animation presets for Videre.cz
 * Provides smooth, polished animations with a premium feel
 * Based on Motion for Vue (motion.dev)
 */

// Smooth easing curves for premium feel
export const easings = {
  smooth: [0.43, 0.13, 0.23, 0.96], // Premium smooth
  snappy: [0.34, 1.56, 0.64, 1], // Snappy with slight bounce
  soft: [0.16, 1, 0.3, 1], // Soft and gentle
  spring: { type: 'spring', stiffness: 300, damping: 30 }, // Natural spring
}

export const useAnimations = () => {
  // Check for reduced motion preference
  const prefersReducedMotion = process.client
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  // Helper to create animation with reduced motion support
  const createAnimation = (animation: any) => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0 } }
      }
    }
    return animation
  }

  /**
   * ENTRANCE ANIMATIONS
   * Smooth entrances for content appearing on page
   */

  // Premium fade in - subtle and elegant
  const fadeIn = createAnimation({
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8, ease: easings.smooth }
    }
  })

  // Fade in from bottom - hero sections, cards
  const fadeInUp = createAnimation({
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: easings.smooth }
    }
  })

  // Fade in from bottom (short) - buttons, small elements
  const fadeInUpShort = createAnimation({
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easings.smooth }
    }
  })

  // Fade in from top - navigation, alerts
  const fadeInDown = createAnimation({
    initial: { opacity: 0, y: -30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easings.smooth }
    }
  })

  // Scale in - modals, popovers, important elements
  const scaleIn = createAnimation({
    initial: { opacity: 0, scale: 0.92 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: easings.soft }
    }
  })

  // Slide in from left
  const slideInLeft = createAnimation({
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easings.smooth }
    }
  })

  // Slide in from right
  const slideInRight = createAnimation({
    initial: { opacity: 0, x: 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easings.smooth }
    }
  })

  /**
   * STAGGER ANIMATIONS
   * For lists, grids, and multiple elements
   */

  // Premium stagger - elegant timing
  const stagger = (delay: number = 0.1) => createAnimation({
    animate: {
      transition: {
        staggerChildren: delay,
        delayChildren: 0.2
      }
    }
  })

  // Fast stagger - for many items
  const staggerFast = createAnimation({
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  })

  // Slow stagger - for emphasis
  const staggerSlow = createAnimation({
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  })

  /**
   * HOVER ANIMATIONS
   * Interactive feedback for premium feel
   */

  // Lift on hover - cards, buttons
  const hoverLift = {
    whileHover: {
      y: -6,
      transition: { duration: 0.3, ease: easings.soft }
    }
  }

  // Scale up on hover - buttons, images
  const hoverScale = {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: easings.soft }
    }
  }

  // Subtle scale - for already elevated elements
  const hoverScaleSubtle = {
    whileHover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: easings.soft }
    }
  }

  // Glow effect - primary buttons
  const hoverGlow = {
    whileHover: {
      boxShadow: '0 8px 30px rgba(18, 182, 140, 0.3)',
      transition: { duration: 0.3 }
    }
  }

  /**
   * TAP ANIMATIONS
   * Tactile feedback for interactions
   */

  // Press down effect
  const tapScale = {
    whileTap: {
      scale: 0.97,
      transition: { duration: 0.1 }
    }
  }

  // Stronger press - for large buttons
  const tapScaleStrong = {
    whileTap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  }

  /**
   * SCROLL ANIMATIONS
   * Triggered when elements enter viewport
   */

  // Fade in on scroll - sections, content blocks
  const scrollFadeIn = createAnimation({
    initial: { opacity: 0, y: 50 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easings.smooth }
    },
    viewport: { once: true, margin: '-100px' }
  })

  // Scale in on scroll - images, cards
  const scrollScaleIn = createAnimation({
    initial: { opacity: 0, scale: 0.9 },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: easings.soft }
    },
    viewport: { once: true, margin: '-100px' }
  })

  /**
   * SPECIAL EFFECTS
   * Premium micro-interactions
   */

  // Smooth spring bounce
  const springBounce = createAnimation({
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: easings.spring
    }
  })

  // Shimmer/shine effect (for loading, success states)
  const shimmer = {
    animate: {
      backgroundPosition: ['200% center', '-200% center'],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  }

  // Pulse effect (for notifications, badges)
  const pulse = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easings.soft
      }
    }
  }

  /**
   * COMBINED PRESETS
   * Ready-to-use combinations for common patterns
   */

  // Hero section entrance - dramatic but smooth
  const heroEntrance = createAnimation({
    initial: { opacity: 0, y: 60, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.2, ease: easings.smooth }
    }
  })

  // Card entrance - elegant and premium (hover effects handled by Tailwind on the card)
  const cardEntrance = createAnimation({
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easings.smooth }
    },
    viewport: { once: true, margin: '-50px' }
  })

  // Button interaction - complete tactile feel
  const buttonInteraction = {
    whileHover: {
      scale: 1.03,
      transition: { duration: 0.2, ease: easings.soft }
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  }

  // Premium button with glow (includes entrance)
  const buttonPremium = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easings.smooth }
    },
    whileHover: {
      scale: 1.03,
      boxShadow: '0 8px 30px rgba(18, 182, 140, 0.4)',
      transition: { duration: 0.3 }
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  }

  // Smooth button hover - no entrance, just smooth interactions
  const buttonSmooth = prefersReducedMotion ? {} : {
    whileHover: {
      scale: 1.02,
      y: -2,
      transition: { duration: 0.25, ease: easings.soft }
    },
    whileTap: {
      scale: 0.98,
      y: 0,
      transition: { duration: 0.15, ease: easings.soft }
    }
  }

  // Primary button with glow - no entrance
  const buttonPrimarySmooth = prefersReducedMotion ? {} : {
    whileHover: {
      scale: 1.02,
      y: -2,
      boxShadow: '0 10px 25px rgba(18, 182, 140, 0.35)',
      transition: { duration: 0.25, ease: easings.soft }
    },
    whileTap: {
      scale: 0.98,
      y: 0,
      boxShadow: '0 4px 15px rgba(18, 182, 140, 0.25)',
      transition: { duration: 0.15, ease: easings.soft }
    }
  }

  return {
    // Easings
    easings,

    // Entrance animations
    fadeIn,
    fadeInUp,
    fadeInUpShort,
    fadeInDown,
    scaleIn,
    slideInLeft,
    slideInRight,

    // Stagger
    stagger,
    staggerFast,
    staggerSlow,

    // Hover
    hoverLift,
    hoverScale,
    hoverScaleSubtle,
    hoverGlow,

    // Tap
    tapScale,
    tapScaleStrong,

    // Scroll
    scrollFadeIn,
    scrollScaleIn,

    // Special effects
    springBounce,
    shimmer,
    pulse,

    // Combined presets
    heroEntrance,
    cardEntrance,
    buttonInteraction,
    buttonPremium,
    buttonSmooth,
    buttonPrimarySmooth,
  }
}
