import React, { useState } from "react";
import {
  ContentModalContainer,
  ModalContainer,
  DownloadContainer,
  ButtonUpload,
} from "./detailStyle";
import { FileSearchOutlined } from "@ant-design/icons";
import TableAnnotation from "./table";

const Detail = ({
  location = "",
  title = "",
  width,
}: {
  location: string;
  title: string;
  width: number;
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = async () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const ModalHistory = () => {
    return (
      <ModalContainer
        title="Detail"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <ContentModalContainer>
          <TableAnnotation location={location} title={title} />
        </ContentModalContainer>
      </ModalContainer>
    );
  };

  return (
    <>
      <DownloadContainer predicted={title !== "" ? false : true}>
        <ButtonUpload
          type="primary"
          icon={<FileSearchOutlined />}
          // size="large"
          onClick={showModal}
          className="buttonBottom"
          disabled={title !== "" ? false : true}
        >
          {!(width <= 900) ? "Detail" : null}
        </ButtonUpload>
      </DownloadContainer>
      <ModalHistory />
    </>
  );
};

export default Detail;
