import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const DetailDonationOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-end mx-auto pt-10 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex flex-row items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col gap-[37px] items-start justify-start max-w-[1242px] mt-[71px] mx-auto md:px-5 w-full">
            <Img
              className="common-pointer h-6 w-6"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
              onClick={() => navigate("/detaildonation")}
            />
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
              <Img
                className="h-[560px] md:h-auto object-cover rounded-[20px]"
                src="images/img_rectangle569.png"
                alt="rectangle569"
              />
              <div className="bg-gray-900_01 flex flex-col items-start justify-start p-0.5 rounded-[20px]">
                <Text
                  className="md:ml-[0] ml-[39px] mt-[126px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-[94%] sm:w-full"
                  size="txtUbuntuBold36WhiteA700"
                >
                  @Nama Terima Kasih Sudah Memberikan Dukungan
                </Text>
                <Text
                  className="md:ml-[0] ml-[39px] mt-[23px] text-orange-50 text-xl w-[87%] sm:w-full"
                  size="txtUbuntuLight20"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <Button
                  className="common-pointer cursor-pointer mb-[147px] min-w-[269px] md:ml-[0] ml-[153px] mt-[73px] text-center text-lg tracking-[-0.18px]"
                  onClick={() => navigate("/landingpage")}
                  shape="round"
                  color="light_green_800"
                  size="lg"
                  variant="fill"
                >
                  Kembali ke halaman utama
                </Button>
              </div>
            </div>
          </div>
          <footer className="bg-gray-900_01 flex items-center justify-center mt-[168px] md:px-5 w-full">
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
                  className="flex justify-center text-lg text-orange-50"
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

export default DetailDonationOnePage;
