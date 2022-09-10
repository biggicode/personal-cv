import * as S from "./pill-button.style";

function PillButton({ icon, text, url }) {
  return (
    <S.StyledLink href={url}>
      <S.StyledIcon className={`icon-${icon}`} />
      <S.StyledText>{text}</S.StyledText>
    </S.StyledLink>
  );
}

export default PillButton;
