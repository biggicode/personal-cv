import * as S from "./section-title.style";

function SectionTitle({ text }) {
  console.log(text);
  return (
    <S.Wrapper>
      <S.Heading>{text}</S.Heading>
    </S.Wrapper>
  );
}

export default SectionTitle;
