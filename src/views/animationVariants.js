export const variants = {
  slideInLeft: {
    initial: {
      opacity: 0,
      x: -50
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {duration: 0.5}
    }
  },
  slideInRight: {
    initial: {
      opacity: 0,
      x: 50
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {duration: 0.5}
    }
  },
  slideUp: {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {duration: 1, delay: 0.5}
    }
  },
  heroBtnSlideInRight: {
    initial: {
      opacity: 0,
      x: 50
    },
    animate: {
      opacity: 1,
      x: 0,
    }
  }
}