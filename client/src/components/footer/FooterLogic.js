const FooterLogic = () => {
  const _icons = [
    '<i class="fab fa-twitter" />',
    '<i class="fab fa-linkedin"/>',
    '<i class="fab fa-github-square" />',
    '<i class="fab fa-facebook-square" />',
    '<i class="fas fa-envelope-open-text" />',
  ];

  return {
    printIcons() {
      return _icons.map((icon, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: icon }} />
      ));
    },
  };
};

export default FooterLogic;
