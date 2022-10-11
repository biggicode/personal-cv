import * as S from "./section-icon.style";

function SectionIcon({ type }) {
  return type === "red" ? (
    <S.StyledLink
      className="icon-github"
      href="https://github.com/biggicode"
      target="_blank"
    ></S.StyledLink>
  ) : (
    <S.StyledDiv className="icon-arrow-down"></S.StyledDiv>
  );
}

export default SectionIcon;
