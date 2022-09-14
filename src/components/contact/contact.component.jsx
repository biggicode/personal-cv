import { useState } from "react";
import SectionTitle from "../section-title";
import SectionIcon from "../section-icon";
import GridRow from "../grid/grid-row";
import DumbGap from "../grid/dumb-gap";
import PillButton from "../pill-button";

import * as S from "./contact.style";
import profileImg from "../../assets/img/cv2.jpg";

function Contact({ data }) {
  const [selected, setSelected] = useState();

  const handleContact = (icon) => {
    setSelected(data.buttonList.find((button) => button.icon === icon));
  };

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
      {data.buttonList.map((button) => (
        <S.ContactButton
          key={button.icon}
          onClick={() => {
            handleContact(button.icon);
          }}
          id={button.icon}
        >
          <S.StyledIcon className={`icon-${button.icon}`} />
        </S.ContactButton>
      ))}

      <DumbGap />
      {selected && (
        <GridRow gridColumn="1/-1">
          <S.ContactBox>
            <S.BoxHeader>
              <p>{selected.title}</p>
              <S.CrossIcon className="icon-cross" />
            </S.BoxHeader>
            <S.BoxContent>{selected.description}</S.BoxContent>
            <S.BoxFooter>
              <PillButton
                icon="link"
                text={selected.label}
                url={selected.link}
              />
            </S.BoxFooter>
          </S.ContactBox>
        </GridRow>
      )}

      <GridRow gridColumn="1/-1">
        <SectionIcon type="green" />
      </GridRow>
    </>
  );
}

export default Contact;
