import React from "react";
import { SponsorImage, ContentContainerSponsor } from "./listImageStyle";
import { listSponsor } from "../assets/data/listSponsor";
const ListImage = () => {
  return (
    <ContentContainerSponsor>
      {listSponsor.map((value, key) => {
        return (
          <SponsorImage
            key={"key" + key}
            src={value.image}
            className="sponsorImage"
            preview={false}
            // height={key === 1 ? "12vh" : "100%"}
          />
          // <Avatar
          //   key={"key" + key}
          //   size={{ xs: 55, sm: 75, md: 75, lg: 75, xl: 80, xxl: 100 }}
          //   src={value.image}
          //   className="sponsorImage"
          // />
        );
      })}
    </ContentContainerSponsor>
  );
};

export default ListImage;
