import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import DonationColumn from "components/DonationColumn";
import Header1 from "components/Header1";

const DonationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <div className="h-[865px] md:px-5 relative w-full">
          <div className="h-[865px] m-auto w-full">
            <Img
              className="h-[865px] m-auto object-cover w-full"
              src="images/img_d18f4d2e2b5f.png"
              alt="d18f4d2e2b5f"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[243px] inset-x-[0] items-center justify-start mx-auto top-[5%] w-[89%]">
              <Header1 className="flex flex-row items-center justify-center w-full" />
              <div className="backdrop-opacity-[0.5] bg-black-900_6d blur-[120.00px] flex flex-col items-end justify-start p-11 md:px-10 sm:px-5">
                <Text
                  className="mb-[45px] mr-[34px] sm:text-4xl md:text-[38px] text-[40px] text-orange-50 tracking-[-0.40px]"
                  size="txtUbuntuBold40"
                >
                  Lorem Ipsum is sim
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="absolute bottom-[46%] right-[26%] text-orange-50 text-shadow-ts text-xl tracking-[-0.20px]"
            size="txtUbuntuBold20"
          >
            Lorem Ipsum is sim Lorem Ipsum is sim Lorem Ipsum is sim
          </Text>
        </div>
        <Text
          className="mt-[39px] text-4xl sm:text-[32px] md:text-[34px] text-deep_orange-300 tracking-[-0.36px]"
          size="txtUbuntuBold36"
        >
          Lorem Ipsum is sim
        </Text>
        <Text className="text-orange-50 text-xl" size="txtUbuntuLight20">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <div className="md:gap-5 gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-7xl min-h-[auto] mt-[49px] mx-auto md:px-5 w-full">
          <div className="h-[561px] relative w-full">
            <Img
              className="h-[561px] m-auto object-cover rounded-[20px] w-full"
              src="images/img_pexelsniklasj.png"
              alt="pexelsniklasj"
            />
            <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[11px] rounded-bl-[20px] rounded-br-[20px] w-full">
              <Text
                className="ml-1.5 md:ml-[0] mt-[11px] text-3xl sm:text-[26px] md:text-[28px] text-deep_orange-300 tracking-[-0.30px]"
                size="txtUbuntuBold30"
              >
                Lorem ipsum
              </Text>
              <Text
                className="leading-[20.00px] ml-1.5 md:ml-[0] mt-[7px] text-[15px] text-orange-50 tracking-[-0.15px] w-[97%] sm:w-full"
                size="txtUbuntuRegular15"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                euismod dui
              </Text>
              <Button
                className="common-pointer cursor-pointer font-medium h-12 mb-[9px] md:ml-[0] ml-[241px] mt-9 text-center text-sm tracking-[-0.14px] w-[136px]"
                onClick={() => navigate("/detaildonationtwo")}
                shape="round"
                color="light_green_800"
                size="md"
                variant="fill"
              >
                Donatation!
              </Button>
            </div>
          </div>
          <div className="h-[561px] relative w-full">
            <Img
              className="h-[561px] m-auto object-cover rounded-[20px] w-full"
              src="images/img_pexelsniklasj.png"
              alt="pexelsniklasj"
            />
            <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[11px] rounded-bl-[20px] rounded-br-[20px] w-full">
              <Text
                className="ml-1.5 md:ml-[0] mt-[11px] text-3xl sm:text-[26px] md:text-[28px] text-deep_orange-300 tracking-[-0.30px]"
                size="txtUbuntuBold30"
              >
                Lorem ipsum
              </Text>
              <Text
                className="leading-[20.00px] ml-1.5 md:ml-[0] mt-[7px] text-[15px] text-orange-50 tracking-[-0.15px] w-[97%] sm:w-full"
                size="txtUbuntuRegular15"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                euismod dui
              </Text>
              <Button
                className="common-pointer cursor-pointer font-medium h-12 mb-[9px] md:ml-[0] ml-[241px] mt-9 text-center text-sm tracking-[-0.14px] w-[136px]"
                onClick={() => navigate("/detaildonationtwo")}
                shape="round"
                color="light_green_800"
                size="md"
                variant="fill"
              >
                Donatation!
              </Button>
            </div>
          </div>
          <div className="h-[561px] relative w-full">
            <Img
              className="h-[561px] m-auto object-cover rounded-[20px] w-full"
              src="images/img_pexelsniklasj.png"
              alt="pexelsniklasj"
            />
            <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[11px] rounded-bl-[20px] rounded-br-[20px] w-full">
              <Text
                className="ml-1.5 md:ml-[0] mt-[11px] text-3xl sm:text-[26px] md:text-[28px] text-deep_orange-300 tracking-[-0.30px]"
                size="txtUbuntuBold30"
              >
                Lorem ipsum
              </Text>
              <Text
                className="leading-[20.00px] ml-1.5 md:ml-[0] mt-[7px] text-[15px] text-orange-50 tracking-[-0.15px] w-[97%] sm:w-full"
                size="txtUbuntuRegular15"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                euismod dui
              </Text>
              <Button
                className="common-pointer cursor-pointer font-medium h-12 mb-[9px] md:ml-[0] ml-[241px] mt-9 text-center text-sm tracking-[-0.14px] w-[136px]"
                onClick={() => navigate("/detaildonationtwo")}
                shape="round"
                color="light_green_800"
                size="md"
                variant="fill"
              >
                Donatation!
              </Button>
            </div>
          </div>
          <div className="h-[561px] relative w-full">
            <Img
              className="h-[561px] m-auto object-cover rounded-[20px] w-full"
              src="images/img_pexelsniklasj.png"
              alt="pexelsniklasj"
            />
            <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[11px] rounded-bl-[20px] rounded-br-[20px] w-full">
              <Text
                className="ml-1.5 md:ml-[0] mt-[11px] text-3xl sm:text-[26px] md:text-[28px] text-deep_orange-300 tracking-[-0.30px]"
                size="txtUbuntuBold30"
              >
                Lorem ipsum
              </Text>
              <Text
                className="leading-[20.00px] ml-1.5 md:ml-[0] mt-[7px] text-[15px] text-orange-50 tracking-[-0.15px] w-[97%] sm:w-full"
                size="txtUbuntuRegular15"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                euismod dui
              </Text>
              <Button
                className="common-pointer cursor-pointer font-medium h-12 mb-[9px] md:ml-[0] ml-[241px] mt-9 text-center text-sm tracking-[-0.14px] w-[136px]"
                onClick={() => navigate("/detaildonationtwo")}
                shape="round"
                color="light_green_800"
                size="md"
                variant="fill"
              >
                Donatation!
              </Button>
            </div>
          </div>
          <div className="h-[561px] relative w-full">
            <Img
              className="h-[561px] m-auto object-cover rounded-[20px] w-full"
              src="images/img_pexelsniklasj.png"
              alt="pexelsniklasj"
            />
            <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[11px] rounded-bl-[20px] rounded-br-[20px] w-full">
              <Text
                className="ml-1.5 md:ml-[0] mt-[11px] text-3xl sm:text-[26px] md:text-[28px] text-deep_orange-300 tracking-[-0.30px]"
                size="txtUbuntuBold30"
              >
                Lorem ipsum
              </Text>
              <Text
                className="leading-[20.00px] ml-1.5 md:ml-[0] mt-[7px] text-[15px] text-orange-50 tracking-[-0.15px] w-[97%] sm:w-full"
                size="txtUbuntuRegular15"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                euismod dui
              </Text>
              <Button
                className="common-pointer cursor-pointer font-medium h-12 mb-[9px] md:ml-[0] ml-[241px] mt-9 text-center text-sm tracking-[-0.14px] w-[136px]"
                onClick={() => navigate("/detaildonationtwo")}
                shape="round"
                color="light_green_800"
                size="md"
                variant="fill"
              >
                Donatation!
              </Button>
            </div>
          </div>
          <div className="h-[561px] relative w-full">
            <Img
              className="h-[561px] m-auto object-cover rounded-[20px] w-full"
              src="images/img_pexelsniklasj.png"
              alt="pexelsniklasj"
            />
            <div className="absolute bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[11px] rounded-bl-[20px] rounded-br-[20px] w-full">
              <Text
                className="ml-1.5 md:ml-[0] mt-[11px] text-3xl sm:text-[26px] md:text-[28px] text-deep_orange-300 tracking-[-0.30px]"
                size="txtUbuntuBold30"
              >
                Lorem ipsum
              </Text>
              <Text
                className="leading-[20.00px] ml-1.5 md:ml-[0] mt-[7px] text-[15px] text-orange-50 tracking-[-0.15px] w-[97%] sm:w-full"
                size="txtUbuntuRegular15"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                euismod dui
              </Text>
              <Button
                className="common-pointer cursor-pointer font-medium h-12 mb-[9px] md:ml-[0] ml-[241px] mt-9 text-center text-sm tracking-[-0.14px] w-[136px]"
                onClick={() => navigate("/detaildonationtwo")}
                shape="round"
                color="light_green_800"
                size="md"
                variant="fill"
              >
                Donatation!
              </Button>
            </div>
          </div>
        </div>
        <DonationColumn
          className="bg-gray-900_01 flex flex-col items-center justify-end mt-[100px] p-[71px] md:px-10 sm:px-5 w-full"
          instagramlink="images/img_mdiinstagram.svg"
          youtubelink="images/img_mdiyoutube.svg"
          discordlink="images/img_icbaselinediscord.svg"
          twitterlink="images/img_pajamastwitter.svg"
          tiktoklink="images/img_icbaselinetiktok.svg"
        />
      </div>
    </>
  );
};

export default DonationPage;
