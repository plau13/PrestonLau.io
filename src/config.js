module.exports = {
  email: 'Preston.lau13@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/plau13',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/preston-d-lau/',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/_PLAUsible',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/p_lau13/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Lessons',
      url: '/#lessons',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#60a5fa',
    navy: '#0a0a12',
    darkNavy: '#050508',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
