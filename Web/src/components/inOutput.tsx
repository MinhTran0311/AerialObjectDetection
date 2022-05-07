import React from "react";
import {
  ContentCard,
  ContentCardText,
  ContentImage,
  ContentPosition,
  ContentSideContainer,
} from "../pages/home/homeStyle";

interface IInputOutput {
  imageInput?: string;
  output?: string;
  position: string;
}

const InputOutput = ({
  imageInput = "",
  output = "",
  position,
}: IInputOutput) => {
  return (
    <ContentSideContainer>
      {/* For Predicted */}
      {imageInput ? (
        <ContentCard className="contentCard">
          <ContentImage className="contentImage" src={imageInput} />
        </ContentCard>
      ) : position === "Input" ? (
        <ContentCard className="contentCard">
          <ContentCardText className="contentCardText">
            No Image Uploaded
          </ContentCardText>
        </ContentCard>
      ) : (
        <ContentCard className="contentCard">
          <ContentCardText className="contentCardText">
            No Image Predicted
          </ContentCardText>
        </ContentCard>
      )}

      {/* For OCR */}
      {/* {position === "Input" ? (
        imageInput ? (
          <ContentImage src={imageInput} />
        ) : (
          <ContentCard className="contentCard">
            <ContentCardText>No Image Uploaded</ContentCardText>
          </ContentCard>
        )
      ) : output ? (
        <ContentCard className="contentCard" isResult={true}>
          <ContentCardText copyable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </ContentCardText>
        </ContentCard>
      ) : (
        <ContentCard className="contentCard">
          <ContentCardText>No Image Predicted</ContentCardText>
        </ContentCard>
      )} */}
      <ContentPosition className="contentCardText">{position}</ContentPosition>
    </ContentSideContainer>
  );
};

export default InputOutput;
