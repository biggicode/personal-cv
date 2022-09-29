import * as S from "./menu.style";

function Menu({ linkList }) {
  return (
    <S.MenuWrapper>
      {linkList.map((link) => (
        <S.MenuLink href={`#${link}`}>{link}</S.MenuLink>
      ))}
    </S.MenuWrapper>
  );
}

export default Menu;
