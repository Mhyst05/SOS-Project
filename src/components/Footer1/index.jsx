import React from "react";

import { Button, Img, Text } from "components";

const Footer1 = (props) => {
  function handleNavigate1() {
    const win = window.open("https://www.tiktok.com/foryou", "_blank");
    win.focus();
  }
  function handleNavigate2() {
    const win = window.open("https://twitter.com/", "_blank");
    win.focus();
  }
  function handleNavigate3() {
    const win = window.open("https://discord.gg/k3vqEXcW4P", "_blank");
    win.focus();
  }
  function handleNavigate4() {
    const win = window.open("https://youtube.com/", "_blank");
    win.focus();
  }
  function handleNavigate5() {
    const win = window.open("https://www.instagram.com/", "_blank");
    win.focus();
  }

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[71px] ml-[409px] mr-[416px] mt-[74px] w-[43%]">
          <div className="flex flex-col gap-10 items-center justify-center w-full">
            <div className="flex sm:flex-col flex-row gap-[50px] items-center justify-center w-[82%] md:w-full">
              <Button
                className="common-pointer flex h-[60px] items-center justify-center w-[60px]"
                onClick={handleNavigate5}
                shape="circle"
                color="blue_gray_100"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-11"
                  src="images/img_mdiinstagram.svg"
                  alt="mdiinstagram"
                />
              </Button>
              <Button
                className="common-pointer flex h-[60px] items-center justify-center w-[60px]"
                onClick={handleNavigate4}
                shape="circle"
                color="blue_gray_100"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-[45px]"
                  src="images/img_mdiyoutube.svg"
                  alt="mdiyoutube"
                />
              </Button>
              <Button
                className="common-pointer flex h-[60px] items-center justify-center w-[60px]"
                onClick={handleNavigate3}
                shape="circle"
                color="blue_gray_100"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-[45px]"
                  src="images/img_icbaselinediscord.svg"
                  alt="icbaselinedisco"
                />
              </Button>
              <Button
                className="common-pointer flex h-[60px] items-center justify-center w-[60px]"
                onClick={handleNavigate2}
                shape="circle"
                color="blue_gray_100"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-11"
                  src="images/img_pajamastwitter.svg"
                  alt="pajamastwitter"
                />
              </Button>
              <Button
                className="common-pointer flex h-[60px] items-center justify-center w-[60px]"
                onClick={handleNavigate1}
                shape="circle"
                color="blue_gray_100"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-[45px]"
                  src="images/img_icbaselinetiktok.svg"
                  alt="icbaselinetikto"
                />
              </Button>
            </div>
            <Text className="text-lg text-orange-50" size="txtUbuntuRegular18">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
