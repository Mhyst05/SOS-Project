import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header1 from "components/Header1";

const LoginPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-start mx-auto p-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[180px] items-end justify-start max-w-7xl mb-[237px] mx-auto md:px-5 w-full">
          <Header1 className="flex flex-row items-center justify-center w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-end w-[94%] md:w-full">
            <div className="md:h-[401px] h-[540px] py-[59px] relative w-[540px] sm:w-full">
              <div className="h-[401px] m-auto w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[374px]"
                      src="images/img_freepikbackgr.svg"
                      alt="freepikbackgr"
                    />
                    <Img
                      className="h-6 mt-[3px]"
                      src="images/img_freepikshadowinject2.svg"
                      alt="freepikshadowin"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[2%] flex flex-row gap-[7px] items-end justify-center left-[15%] w-[56%]">
                  <div className="flex flex-col mt-[164px] relative w-[38%]">
                    <div className="md:h-[106px] h-[123px] mx-auto w-full">
                      <div className="md:h-[106px] h-[123px] m-auto w-full">
                        <div className="absolute md:h-[106px] h-[110px] inset-x-[0] mx-auto top-[0] w-full">
                          <div className="md:h-[106px] h-[110px] m-auto w-full">
                            <div className="flex m-auto w-full">
                              <div className="md:h-[106px] h-[110px] my-auto w-[61%]">
                                <div className="absolute md:h-[106px] h-[110px] inset-y-[0] my-auto right-[0] w-[53%]">
                                  <div className="absolute md:h-[106px] h-[110px] inset-[0] justify-center m-auto w-full">
                                    <div className="absolute flex flex-col gap-1.5 h-full inset-[0] items-start justify-center m-auto w-[31%]">
                                      <Img
                                        className="h-[15px]"
                                        src="images/img_location_light_green_800.svg"
                                        alt="vector"
                                      />
                                      <div className="md:h-[85px] h-[89px] ml-0.5 md:ml-[0] relative w-[73%]">
                                        <Line className="absolute bg-blue_gray-900 bottom-[0] h-[85px] left-[0] w-[3px]" />
                                        <Img
                                          className="absolute h-[15px] inset-x-[0] mx-auto top-[0]"
                                          src="images/img_location_light_green_800.svg"
                                          alt="vector_Two"
                                        />
                                      </div>
                                    </div>
                                    <Img
                                      className="absolute h-2 left-[0] top-[14%]"
                                      src="images/img_eye.svg"
                                      alt="vector_Three"
                                    />
                                    <Img
                                      className="absolute h-2 right-[0] top-[11%]"
                                      src="images/img_eye.svg"
                                      alt="vector_Four"
                                    />
                                  </div>
                                  <div className="absolute flex flex-col h-[30px] inset-x-[0] items-start justify-start mx-auto top-[2%] w-[30px]">
                                    <div className="flex flex-row items-start justify-evenly w-[94%] md:w-full">
                                      <Img
                                        className="h-3 mt-0.5 w-[13px]"
                                        src="images/img_vector_light_green_800.svg"
                                        alt="vector_Five"
                                      />
                                      <Img
                                        className="h-[13px] w-3"
                                        src="images/img_vector_light_green_800.svg"
                                        alt="vector_Six"
                                      />
                                    </div>
                                    <div className="flex flex-row items-start justify-evenly ml-0.5 md:ml-[0] mt-0.5 w-[94%] md:w-full">
                                      <Img
                                        className="h-[13px]"
                                        src="images/img_vector_light_green_800_13x11.svg"
                                        alt="vector_Seven"
                                      />
                                      <Img
                                        className="h-3 w-[13px]"
                                        src="images/img_vector_light_green_800.svg"
                                        alt="vector_Eight"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-col h-9 inset-x-[0] items-center justify-start mx-auto p-3 top-[0] w-9"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group1739.svg')",
                                    }}
                                  >
                                    <Img
                                      className="h-2.5 w-2.5"
                                      src="images/img_vector_light_green_800_10x10.svg"
                                      alt="vector_Nine"
                                    />
                                  </div>
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[73%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_vector_light_green_800_10x10.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-16"
                                    src="images/img_fire.svg"
                                    alt="group"
                                  />
                                </div>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[74px] items-center justify-start ml-[-19.21px] mt-[7px] w-[57%] z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group1735.svg')",
                                }}
                              >
                                <Img
                                  className="h-[74px]"
                                  src="images/img_group.svg"
                                  alt="group_One"
                                />
                              </div>
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat bottom-[4%] flex flex-col h-[70px] items-center justify-start p-1.5 right-1/4 w-[32%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group1736.svg')",
                              }}
                            >
                              <div className="flex flex-row items-center justify-evenly mb-[29px] mt-[9px] w-[92%] md:w-full">
                                <Line className="bg-blue_gray-900 h-[19px] w-[3px]" />
                                <Img
                                  className="h-1"
                                  src="images/img_vector_4x15.svg"
                                  alt="vector_Eleven"
                                />
                              </div>
                            </div>
                          </div>
                          <Img
                            className="absolute h-px right-[21%] top-[36%]"
                            src="images/img_vector_blue_gray_900_1x12.svg"
                            alt="vector_Twelve"
                          />
                        </div>
                        <Img
                          className="absolute h-[27px] right-[29%] top-[16%]"
                          src="images/img_checkmark_blue_gray_900.svg"
                          alt="vector_Thirteen"
                        />
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[88px] items-end justify-start left-[13%] p-[3px] w-[30%]"
                          style={{
                            backgroundImage: "url('images/img_group1734.svg')",
                          }}
                        >
                          <div className="flex flex-row gap-[5px] items-start justify-evenly mb-[41px] mt-[21px] w-[78%] md:w-full">
                            <Img
                              className="h-1"
                              src="images/img_vector_blue_gray_900_4x13.svg"
                              alt="vector_Fourteen"
                            />
                            <Line className="bg-blue_gray-900 h-[17px] w-[3px]" />
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[3px] left-[13%] top-[40%]"
                        src="images/img_vector_blue_gray_900_3x13.svg"
                        alt="vector_Sixteen"
                      />
                    </div>
                    <Img
                      className="h-6 ml-[25px] mt-[-NaNpx] z-[1]"
                      src="images/img_vector_blue_gray_900_4x15.svg"
                      alt="vector_Seventeen"
                    />
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[43px] items-center justify-start ml-[19px] mt-[-13.58px] w-1/2 z-[1]"
                      style={{
                        backgroundImage: "url('images/img_group1738.svg')",
                      }}
                    >
                      <Img
                        className="h-[43px]"
                        src="images/img_vector_white_a700.svg"
                        alt="vector_Eighteen"
                      />
                    </div>
                  </div>
                  <Img
                    className="h-[319px]"
                    src="images/img_freepikcharacterinject2_white_a700.svg"
                    alt="freepikcharacte"
                  />
                </div>
              </div>
              <Img
                className="absolute h-[54px] right-[30%] top-[17%]"
                src="images/img_checkmark_light_green_800.svg"
                alt="freepikspeech"
              />
            </div>
            <div className="bg-gray-900_01 flex flex-col md:gap-10 gap-[70px] items-center justify-start p-10 sm:px-5 rounded-[5px] w-[49%] md:w-full">
              <Text
                className="mt-2.5 sm:text-4xl md:text-[38px] text-[40px] text-orange-50 tracking-[-0.40px]"
                size="txtUbuntuBold40"
              >
                Login
              </Text>
              <div className="flex flex-col items-start justify-start mb-[81px] w-[96%] md:w-full">
                <Text
                  className="text-orange-50 text-xl tracking-[-0.20px]"
                  size="txtUbuntuBold20"
                >
                  Email
                </Text>
                <Input
                  name="emailplaceholder"
                  placeholder="Isi email..."
                  className="font-bold p-0 placeholder:text-blue_gray-900_47 text-left text-xl tracking-[-0.20px] w-full"
                  wrapClassName="mt-2 w-full"
                  type="email"
                  shape="round"
                  color="blue_gray_100"
                  size="xs"
                ></Input>
                <Text
                  className="mt-[37px] text-orange-50 text-xl tracking-[-0.20px]"
                  size="txtUbuntuBold20"
                >
                  Password
                </Text>
                <Input
                  name="passwordplaceholder"
                  placeholder="Isi password..."
                  className="font-bold p-0 placeholder:text-blue_gray-900_47 text-left text-xl tracking-[-0.20px] w-full"
                  wrapClassName="mt-[11px] w-full"
                  type="password"
                  shape="round"
                  color="blue_gray_100"
                  size="xs"
                ></Input>
                <Button
                  className="common-pointer cursor-pointer md:ml-[0] ml-[134px] mt-[55px] text-center text-lg tracking-[-0.18px] w-48"
                  onClick={() => navigate("/landingpage")}
                  shape="round"
                  color="light_green_800"
                  size="lg"
                  variant="fill"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPagePage;
