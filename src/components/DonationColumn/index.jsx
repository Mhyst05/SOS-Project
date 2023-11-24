import React from "react";

import { Button, Img, Text } from "components";

const DonationColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-10 items-center justify-start mt-0.5 w-[48%] md:w-full">
          <div className="flex sm:flex-col flex-row gap-[50px] items-center justify-center w-[82%] md:w-full">
            {!!props?.instagramlink ? (
              <Button
                className="flex h-[60px] items-center justify-center w-[60px]"
                shape="circle"
                color="blue_gray_100"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-11"
                  alt="mdiinstagram"
                  src={props?.instagramlink}
                />
              </Button>
            ) : null}
            {!!props?.youtubelink ? (
              <Button
                className="flex h-[60px] items-center justify-center w-[60px]"
                shape="circle"
                color="blue_gray_100"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-[45px]"
                  alt="mdiyoutube"
                  src={props?.youtubelink}
                />
              </Button>
            ) : null}
            {!!props?.discordlink ? (
              <Button
                className="flex h-[60px] items-center justify-center w-[60px]"
                shape="circle"
                color="blue_gray_100"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-[45px]"
                  alt="icbaselinedisco"
                  src={props?.discordlink}
                />
              </Button>
            ) : null}
            {!!props?.twitterlink ? (
              <Button
                className="flex h-[60px] items-center justify-center w-[60px]"
                shape="circle"
                color="blue_gray_100"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-11"
                  alt="pajamastwitter"
                  src={props?.twitterlink}
                />
              </Button>
            ) : null}
            {!!props?.tiktoklink ? (
              <Button
                className="flex h-[60px] items-center justify-center w-[60px]"
                shape="circle"
                color="blue_gray_100"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-[45px]"
                  alt="icbaselinetikto"
                  src={props?.tiktoklink}
                />
              </Button>
            ) : null}
          </div>
          <Text className="text-lg text-orange-50" size="txtUbuntuRegular18">
            {props?.loremipsumissimNine}
          </Text>
        </div>
      </div>
    </>
  );
};

DonationColumn.defaultProps = {
  loremipsumissimNine:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};

export default DonationColumn;
