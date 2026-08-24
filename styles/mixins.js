const mixins = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  resetList: `
    list-style: none;
    margin: 0;
    padding: 0;
  `,
  link: `
    color: var(--accent);
    text-decoration: none;
    transition: color var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--accent-hover);
      text-decoration: underline;
    }
  `,
};

export default mixins;
