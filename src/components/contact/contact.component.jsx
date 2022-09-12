import SectionTitle from "../section-title";
import SectionIcon from "../section-icon";
import GridRow from "../grid/grid-row";
import DumbGap from "../grid/dumb-gap";

import * as S from "./contact.style";
import profileImg from "../../assets/img/cv2.jpg";

function Contact({ data }) {
  return (
    <>
      <SectionTitle text={data.sectionTitle} />
      <GridRow gridColumn="1/-1">
        <SectionIcon type="red" />
      </GridRow>
      <GridRow gridColumn="span 4">
        <S.ImgWrapper>
          <S.StyledImg src={profileImg} />
        </S.ImgWrapper>
      </GridRow>

      <DumbGap />
    </>
  );
}

export default Contact;
