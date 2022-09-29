import { useState } from "react";

import * as S from "./menu.style";

function Menu({ linkList }) {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <S.MenuWrapper
      active={active}
      onMouseEnter={toggleMenu}
      onMouseLeave={toggleMenu}
    >
      {active ? (
        linkList.map((link) => (
          <S.MenuLink key={link} href={`#${link}`}>
            {link}
          </S.MenuLink>
        ))
      ) : (
        <S.Hamburger className="icon-menu" />
      )}
    </S.MenuWrapper>
  );
}

export default Menu;
