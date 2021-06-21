const ButtonLogic = (_) => {
  const _STYLES = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--success--outline",
    "btn--gray--outline",
  ];

  const _SIZE = ["btn--medium", "btn--large", "btn--jumbo"];

  return {
    includesStyle: (style) => (_STYLES.includes(style) ? style : _STYLES[0]),
    includesSize: (size) => (_SIZE.includes(size) ? size : _SIZE[0]),
  };
};

export default ButtonLogic;
