import { Typography, Image, Button, Upload, Card, Divider } from "antd";
import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  // overflow: hidden;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 18%;
  background-color: #fec107;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .headerText {
    font-size: 20px;
    font-weight: bold;
  }

  @media screen and (max-width: 1500px) {
    .headerText {
      font-size: 18px;
      font-weight: bold;
    }
  }

  // @media screen and (max-width: 800px) {
  //   .headerText {
  //     font-size: 18px;
  //     font-weight: bold;
  //   }
  // }

  @media screen and (max-width: 650px) {
    .headerText {
      font-size: 14px;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 390px) {
    .headerText {
      font-size: 12px;
      font-weight: bold;
    }
  }
`;

export const HeaderTypography = styled(Typography)`
  color: black;
  text-align: center;
`;

export const ContentContainer = styled.div`
  background-color: #fefefe;
  height: 72%;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ContentContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25%;
  align-items: center;
  justify-content: space-evenly;

  .headerTopic {
    font-size: 20px;
    font-weight: bold;
  }
  .headerDemo {
    font-size: 20px;
    font-weight: bold;
    color: red;
  }

  // @media screen and (max-width: 1650px) {
  //   .headerTopic {
  //     font-size: 28px;
  //   }
  //   .headerDemo {
  //     font-size: 28px;
  //   }
  // }

  @media screen and (max-width: 1500px) {
    .headerTopic {
      font-size: 18px;
    }
    .headerDemo {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 800px) {
    .headerTopic {
      font-size: 18px;
    }
    .headerDemo {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 650px) {
    .headerTopic {
      font-size: 16px;
    }
    .headerDemo {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 390px) {
    .headerTopic {
      font-size: 12px;
    }
    .headerDemo {
      font-size: 12px;
    }
  }
`;

export const ContentContainerTopDivider = styled(Divider)`
  width: 55%;
  height: 1px;
`;

export const ContentContainerTopText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  justify-content: center;
`;

export const ContentContainerCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fefefe;
  width: 100%;
  height: 60%;
  color: white;
`;

export const ContentContainerBottom = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15%;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  .buttonBottom {
    font-size: 30px;
    font-weight: bold;
  }

  @media screen and (max-width: 2300px) {
    .buttonBottom {
      font-size: 27px;
    }
  }

  @media screen and (max-width: 1900px) {
    .buttonBottom {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 1500px) {
    .buttonBottom {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1300px) {
    .buttonBottom {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1100px) {
    .buttonBottom {
      font-size: 12px;
    }
  }
`;

export const ContentSideContainer = styled.div<{ upload?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .ant-btn-primary {
    ${(props) =>
      !props.upload ? "background-color: #f5f5f5" : "background-color: #fec107"}
  }

  .submitButton {
    width: 8vw;
    height: 8vh;
  }

  @media screen and (max-width: 1440px) {
    .submitButton {
      width: 10vw;
      height: 6vh;
    }
  }

  .contentCard {
    width: 30vw;
    height: 40vh;
  }
  .contentImage {
    width: 30vw;
    height: 40vh;
  }
  .contentCardText {
    font-size: 20px;
  }

  // @media screen and (max-width: 1024px) {
  //   .contentCard {
  //     width: 30vw;
  //     height: 30vh;
  //   }
  //   .contentImage {
  //     width: 30vw;
  //     height: 30vh;
  //   }
  // }

  @media screen and (max-width: 850px) {
    .contentCard {
      width: 30vw;
      height: 25vh;
    }
    .contentImage {
      width: 30vw;
      height: 25vh;
    }
  }
  @media screen and (max-width: 700px) {
    .contentCard {
      width: 30vw;
      height: 20vh;
    }
    .contentImage {
      width: 30vw;
      height: 20vh;
    }
  }

  @media screen and (max-width: 500px) {
    .contentCardText {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 400px) {
    .contentCardText {
      font-size: 14px;
    }
  }
`;

export const UploadContainer = styled(Upload)`
  margin-top: 10px;
  .ant-btn-primary {
    background-color: #fec107;
    color: black;
  }
`;

export const HistoryContainer = styled.div`
  margin-top: 10px;
  .ant-btn-primary {
    background-color: #fec107;
    color: black;
  }
`;

export const DownloadContainer = styled.div<{ predicted?: boolean }>`
  margin-top: 10px;
  .ant-btn-primary {
    background-color: #fec107;
    color: black;
  }
  .ant-btn-primary {
    ${(props) =>
      props.predicted
        ? "background-color: #f5f5f5"
        : "background-color: #fec107"};
    ${(props) => (props.predicted ? "color: #b8b8b8" : "color: black")}
  }
`;

export const ButtonUpload = styled(Button)`
  border-radius: 10px;
  background-color: #fec107;
  border: none;
  width: 10vw;
  height: 5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContentImage = styled(Image)`
  // width: 20vw;
  // height: 30vh;
  // flex: 1;
  // resize-mode: cover;
`;

export const ContentPosition = styled(Typography.Text)`
  font-size: 20px;
  font-weight: bold;
  width: 50%;
`;

export const ContentCard = styled(Card)<{ isResult?: boolean | false }>`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  ${(props) => (props.isResult ? "overflow-y: scroll" : "overflow-y: hidden")};
  ${(props) =>
    !props.isResult
      ? "justify-content: center"
      : "justify-content: flex-start"};
  ${(props) =>
    !props.isResult ? "align-items: center" : "align-items: flex-start"};
`;

export const ContentCardText = styled(Typography.Paragraph)`
  font-size: 20px;
  text-align: justify;
`;

export const SubmitButton = styled(Button)`
  font-weigth: bold;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #fec107;
`;

export const FooterContainer = styled.div`
  background-color: #fec107;
  width: 100%;
  height: 10%;
`;

export const FooterTypography = styled(Typography)`
  font-size: 20px;
  color: black;
  text-align: center;
  font-weight: bold;
`;
