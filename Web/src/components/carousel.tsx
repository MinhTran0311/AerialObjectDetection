/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import {
  AuthorImage,
  CarouselContainer,
  TypoLink,
  TypoText,
  ContentAuthorContainer,
  ThumbnailAuthorImage,
  ModalContainer,
} from "./carouselStyle";
import { listAuthor } from "../assets/data/listAuthor";
import githubImage from "../assets/images/media/github.png";
import facebookImage from "../assets/images/media/facebook.png";
import googleImage from "../assets/images/media/google.png";

const CarouselAuthor = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [google, setGoogle] = useState("");
  const [facebook, setFacebook] = useState("");
  const [github, setGithub] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const ModalAuthor = () => {
    return (
      <ModalContainer
        title="Information"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <AuthorImage src={image} preview={false} width={200} height={200} />
        {name ? <TypoText>{name}</TypoText> : null}
        {/* {birthday ? <TypoText>{birthday}</TypoText> : null} */}

        {facebook ? (
          <>
            <AuthorImage
              className="authorImage"
              preview={false}
              src={facebookImage}
              style={{ borderRadius: "80px" }}
              onClick={() => {
                openInNewTab(facebook);
              }}
              height={80}
            />
          </>
        ) : null}
        {google ? (
          <>
            <AuthorImage
              className="authorImage"
              preview={false}
              src={googleImage}
              style={{ borderRadius: "100px" }}
              onClick={() => {
                openInNewTab(google);
              }}
              height={100}
            />
          </>
        ) : null}
        {github ? (
          <>
            <AuthorImage
              className="authorImage"
              preview={false}
              src={githubImage}
              style={{ borderRadius: "90px" }}
              onClick={() => {
                openInNewTab(github);
              }}
              height={100}
            />
          </>
        ) : null}
      </ModalContainer>
    );
  };

  return (
    <ContentAuthorContainer>
      {listAuthor.map((value, key) => {
        return (
          <ThumbnailAuthorImage
            key={"key" + key}
            src={value.image}
            className="sponsorImage"
            preview={false}
            onClick={() => {
              setImage(value.image || "");
              setName(value.name || "");
              setBirthday(value.birthday || "");
              setGoogle(value.google || "");
              setFacebook(value.facebook || "");
              setGithub(value.github || "");
              showModal();
            }}
          />
        );
      })}
      <ModalAuthor />
    </ContentAuthorContainer>
    // <ContentAuthorContainer>
    /* <AliceCarousel
        mouseTracking
        items={itemCarousel()}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls
        disableDotsControls
        infinite={true}
        autoPlay={true}
        innerWidth={window.innerWidth}
        animationDuration={ANIMATION_TIME}
        autoPlayInterval={SWIPE_TIME}
      /> */
    /* <CarouselContainer
        infiniteLoop
        useKeyboardArrows
        autoPlay
        centerMode={true}
        // For 2 person, up to 40
        // centerSlidePercentage={40}
        centerSlidePercentage={30}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        verticalSwipe="standard"
        swipeable={true}
        emulateTouch={true}
      >
        {listAuthor.map((value, key) => {
          return (
            <ThumbnailAuthorImage
              className="authorImage"
              key={"key" + key}
              preview={false}
              src={value.image}
              style={{ borderRadius: "100px" }}
              onClick={() => {
                setImage(value.image || "");
                setName(value.name || "");
                setBirthday(value.birthday || "");
                setGoogle(value.google || "");
                setFacebook(value.facebook || "");
                setGithub(value.github || "");
                showModal();
              }}
            />
          );
        })}
      </CarouselContainer>
      <p>© Web Designed by Thuan Nguyen Quang</p>
      <ModalAuthor />
    </ContentAuthorContainer> */
  );
};

export default CarouselAuthor;
