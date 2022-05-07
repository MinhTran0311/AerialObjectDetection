import React from "react";
import { ButtonUpload, DownloadContainer } from "../pages/home/homeStyle";
import { DownloadOutlined } from "@ant-design/icons";

const Download = ({
  width,
  text = "",
  title = "",
}: {
  width: number;
  text: string;
  title: string;
}) => {
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = title + ".txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <DownloadContainer predicted={title !== "" ? false : true}>
        <ButtonUpload
          type="primary"
          icon={<DownloadOutlined />}
          // size="large"
          onClick={downloadTxtFile}
          className="buttonBottom"
          disabled={title !== "" ? false : true}
        >
          {!(width <= 900) ? "Download" : null}
        </ButtonUpload>
      </DownloadContainer>
    </>
  );
};

export default Download;
