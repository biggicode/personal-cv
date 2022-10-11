import * as S from "./section-icon.style";

function SectionIcon({ type, last }) {
  return type === "red" ? (
    <S.StyledLink
      className="icon-github"
      href="https://github.com/biggicode"
      target="_blank"
      title="GitHub"
    ></S.StyledLink>
  ) : (
    <S.StyledDiv className="icon-arrow-down" last={last}></S.StyledDiv>
  );
}

export default SectionIcon;
