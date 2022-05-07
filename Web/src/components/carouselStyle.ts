import { Modal, Image, Typography } from "antd";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

export const ModalContainer = styled(Modal)`
  .ant-modal-content {
    // height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ContentModalContainer = styled.div`
  .ant-divider {
    height: 2px;
  }
`;

export const ContentAuthorContainer = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContentModaText = styled.p`
  font-size: 16px;
`;

export const ThumbnailAuthorImage = styled(Image)`
  &:hover {
    cursor: pointer;
  }
  height: calc(10vh - 10px);
  width: calc(10vh - 10px);
  border-radius: 100px;
  // -webkit-user-drag: none;
  // -khtml-user-drag: none;
  // -moz-user-drag: none;
  // -o-user-drag: none;
  // user-drag: none;
`;

export const AuthorImage = styled(Image)`
  border-radius: 100px;
  &:hover {
    cursor: pointer;
  }
`;

export const CarouselContainer = styled(Carousel)`
  .authorImage {
    width: 90px;
    height: calc(10vh - 10px);
  }
  // -webkit-user-drag: none;
  // -khtml-user-drag: none;
  // -moz-user-drag: none;
  // -o-user-drag: none;
  // user-drag: none;
`;

export const TypoText = styled(Typography)`
  font-weight: bold;
  font-size: 16px;
`;
export const TypoLink = styled(Typography.Link)``;
