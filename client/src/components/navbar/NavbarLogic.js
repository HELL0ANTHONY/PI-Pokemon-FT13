import { useState } from "react";

export const NavbarLogic = (_) => {
  const [showLinks, setShowLinks] = useState(false);
  return { showLinks, setShowLinks };
};
