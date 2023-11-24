import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header1 from "components/Header1";

const DetailVolunteerPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-end mx-auto pt-[38px] w-full">
        <div className="flex flex-col md:gap-10 gap-[93px] items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
            <Header1 className="flex flex-row items-center justify-center w-full" />
            <Img
              className="common-pointer h-6 mt-[73px] w-6"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
              onClick={() => navigate("/volunteer")}
            />
            <Img
              className="h-[463px] sm:h-auto mt-[21px] object-cover rounded-[12px] w-full"
              src="images/img_pexelsdavidgonzales2656647.png"
              alt="pexelsdavidgonz"
            />
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mt-9 w-full">
              <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[42%] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.40px]"
                  size="txtUbuntuBold40WhiteA700"
                >
                  Taman Nasional Ujung Kulon
                </Text>
                <div className="flex flex-row gap-[19px] items-center justify-start w-1/4 md:w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_ionlocationsharp.svg"
                    alt="ionlocationshar"
                  />
                  <Text
                    className="text-white-A700 text-xl tracking-[-0.20px]"
                    size="txtUbuntuRegular20WhiteA700"
                  >
                    Location
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start mb-0.5 md:mt-0 mt-2 w-[9%] md:w-full">
                <Text
                  className="text-white-A700 text-xl tracking-[-0.20px]"
                  size="txtUbuntuBold20WhiteA700"
                >
                  Status
                </Text>
                <Button
                  className="cursor-pointer font-bold min-w-[103px] rounded-[5px] text-[15px] text-center tracking-[-0.15px]"
                  shape="round"
                  color="green_400"
                  size="sm"
                  variant="fill"
                >
                  Open
                </Button>
              </div>
            </div>
            <Line className="bg-gray-900_02 h-px mt-[13px] w-full" />
            <Text
              className="ml-1.5 md:ml-[0] mt-7 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[-0.25px]"
              size="txtUbuntuBold25"
            >
              Volunteer Description
            </Text>
            <Text
              className="leading-[20.00px] ml-1.5 md:ml-[0] mt-[25px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[-0.25px] w-[84%] sm:w-full"
              size="txtUbuntuRegular25"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              euismod dui, suscipit posuere felis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed sed euismod dui, suscipit posuere
              felis. ed euismod dui, suscipit posuere felis. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed sed euismod dui,
              suscipit posuere felis.
            </Text>
            <Button
              className="common-pointer cursor-pointer min-w-[142px] md:ml-[0] ml-[558px] mt-[98px] text-center text-lg tracking-[-0.18px]"
              onClick={() => navigate("/formvolunteer")}
              shape="round"
              color="light_green_800"
              size="lg"
              variant="fill"
            >
              Apply Now
            </Button>
          </div>
          <footer className="bg-gray-900_01 flex items-center justify-center md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[71px] ml-[410px] mr-[416px] mt-[74px] w-[43%]">
              <div className="flex flex-col gap-10 items-center justify-center w-full">
                <div className="flex sm:flex-col flex-row gap-[50px] items-center justify-center w-[82%] md:w-full">
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
                <Text
                  className="text-lg text-orange-50"
                  size="txtUbuntuRegular18"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default DetailVolunteerPage;
