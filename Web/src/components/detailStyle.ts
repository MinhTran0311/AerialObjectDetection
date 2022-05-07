import { Button, Modal } from "antd";
import styled from "styled-components";

export const ModalContainer = styled(Modal)<{ loading?: boolean }>`
  .ant-modal-body {
    height: 70vh;
    overflow-y: scroll;
  }
  .ant-modal-title {
    text-align: center;
    font-size: 20px;
  }
  color: black;
`;

export const ContentModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentModaText = styled.p`
  font-size: 16px;
`;

// export const DownloadContainer = styled.div`
//   margin-top: 10px;
//   .ant-btn-primary {
//     background-color: #fec107;
//     color: black;
//   }
//   // align-self: flex-end;
//   align-self: center;
// `;

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
