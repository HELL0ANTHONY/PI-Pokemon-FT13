export const flex = (align = "stretch", justify = "flex-start", direction = "row") => {
  return `
    display: flex;
    flex-direction: ${direction}; 
    justify-content: ${justify};
    align-items: ${align};
  `;
};
