import * as S from "./section-icon.style";

function SectionIcon({ type }) {
  return (
    <S.StyledLink
      className={`icon-${type === "red" ? "github" : "arrow-down"}`}
      href={type === "red" ? "https://github.com/biggicode" : "#"}
    ></S.StyledLink>
  );
}

export default SectionIcon;
