import React from "react";

import { Button, Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[71px] ml-[410px] mr-[416px] mt-[74px] w-[43%]">
          <div className="flex flex-col gap-10 items-center justify-center w-full">
            <div className="flex sm:flex-col flex-row gap-[50px] items-center justify-start w-[82%] md:w-full">
              <Button
                className="flex h-[60px] items-center justify-center w-[60px]"
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
                className="flex h-[60px] items-center justify-center w-[60px]"
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
                className="flex h-[60px] items-center justify-center w-[60px]"
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
                className="flex h-[60px] items-center justify-center w-[60px]"
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
                className="flex h-[60px] items-center justify-center w-[60px]"
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

Footer.defaultProps = {};

export default Footer;
