import { Button, Collapse, Modal, Image } from "antd";
import styled from "styled-components";

export const ModalContainer = styled(Modal)<{ loading?: boolean }>`
  .ant-modal-body {
    height: 70vh;
    overflow-y: scroll;
    ${(props) => (!props.loading ? "display: flex" : null)};
    ${(props) => (!props.loading ? "flex-direction: column" : null)};
    ${(props) => (!props.loading ? "justify-content: center" : null)};
  }

  .ant-modal-title {
    text-align: center;
    font-size: 20px;
  }
  color: black;
`;

export const ContentModalContainer = styled.div`
  .ant-divider {
    height: 2px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentModaText = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const DownloadContainer = styled.div`
  margin-top: 10px;
  .ant-btn-primary {
    background-color: #fec107;
    color: black;
  }
  // align-self: flex-end;
  align-self: center;
`;

export const CollapseContainer = styled(Collapse)`
  .ant-collapse-header {
    background-color: #fafafa;
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
`;

export const HistoryContainer = styled.div`
  margin-top: 10px;
  .ant-btn-primary {
    background-color: #fec107;
    color: black;
  }
  // margin-left: 5px;
  // margin-right: 5px;
`;
