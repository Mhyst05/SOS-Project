import React from "react";

import { useNavigate } from "react-router-dom";

import { loginDeviceAuth } from "service/api";

import { Button, Img, Input, Text } from "components";
import Header1 from "components/Header1";

const SignupPagePage = () => {
  const [login, setLogin] = React.useState();
  const navigate = useNavigate();

  function signup() {
    const req = {};

    loginDeviceAuth(req)
      .then((res) => {
        setLogin(res?.data);

        navigate("/loginpage");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-start mx-auto p-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[180px] items-end justify-start max-w-7xl mb-[237px] mx-auto md:px-5 w-full">
          <Header1 className="flex flex-row items-center justify-center w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-end w-[94%] md:w-full">
            <div className="md:h-[358px] sm:h-[464px] h-[540px] p-[26px] sm:px-5 relative w-[540px] sm:w-full">
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[89%]">
                <div className="flex flex-col md:gap-10 gap-[146px] items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[319px] items-start justify-end p-[50px] md:px-10 sm:px-5 w-[98%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group1887.svg')",
                    }}
                  >
                    <Img
                      className="h-[206px] ml-6 md:ml-[0] mt-[11px]"
                      src="images/img_freepikspeech.svg"
                      alt="freepikspeech"
                    />
                  </div>
                  <Img
                    className="h-px"
                    src="images/img_freepiktableinject2.svg"
                    alt="freepiktableinj"
                  />
                </div>
              </div>
              <div className="absolute bottom-[6%] md:h-[125px] h-[181px] left-[7%] w-[21%]">
                <div className="flex flex-col m-auto w-full">
                  <div className="md:h-[125px] h-[126px] mx-auto w-full">
                    <div className="md:h-[125px] h-[126px] m-auto w-full">
                      <div className="md:h-[125px] h-[126px] m-auto w-full">
                        <div className="md:h-[125px] h-[126px] m-auto w-full">
                          <div className="absolute bottom-[0] h-28 md:h-[111px] inset-x-[0] mx-auto w-[113px]">
                            <div className="h-28 md:h-[111px] m-auto w-[113px]">
                              <div className="h-28 md:h-[111px] m-auto w-[113px]">
                                <div className="absolute bottom-[0] flex left-[0] w-[70%]">
                                  <div className="h-[94px] my-auto w-[84%]">
                                    <Img
                                      className="absolute h-[94px] inset-y-[0] left-[0] my-auto"
                                      src="images/img_signal.svg"
                                      alt="vector"
                                    />
                                    <Img
                                      className="absolute h-[89px] inset-y-[0] my-auto right-[0]"
                                      src="images/img_signal_blue_gray_700.svg"
                                      alt="vector_One"
                                    />
                                  </div>
                                  <Img
                                    className="h-[90px] ml-[-7.71px] my-auto z-[1]"
                                    src="images/img_checkmark.svg"
                                    alt="vector_Two"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[111px] inset-y-[0] my-auto right-[0]"
                                  src="images/img_vector_blue_gray_700.svg"
                                  alt="vector_Three"
                                />
                              </div>
                              <Img
                                className="absolute bottom-[5%] h-[87px] left-[0]"
                                src="images/img_favorite.svg"
                                alt="vector_Four"
                              />
                            </div>
                            <div className="absolute bottom-[4%] flex flex-row items-start justify-center right-[35%] w-[21%]">
                              <Img
                                className="h-[49px] mt-1"
                                src="images/img_location.svg"
                                alt="vector_Five"
                              />
                              <Img
                                className="h-[89px] ml-1"
                                src="images/img_vector.svg"
                                alt="vector_Six"
                              />
                            </div>
                          </div>
                          <Img
                            className="absolute bottom-[0] h-[110px] right-[0]"
                            src="images/img_vector_blue_gray_900.svg"
                            alt="vector_Seven"
                          />
                          <Img
                            className="absolute h-[125px] inset-y-[0] left-[10%] my-auto"
                            src="images/img_vector_blue_gray_700_125x53.svg"
                            alt="vector_Eight"
                          />
                        </div>
                        <Img
                          className="absolute bottom-[0] h-10 left-[36%]"
                          src="images/img_location.svg"
                          alt="vector_Nine"
                        />
                      </div>
                      <Img
                        className="absolute h-[123px] inset-y-[0] left-[11%] my-auto"
                        src="images/img_vector_blue_gray_900_123x46.svg"
                        alt="vector_Ten"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[2%] h-[53px] inset-x-[0] mx-auto"
                      src="images/img_location.svg"
                      alt="vector_Eleven"
                    />
                  </div>
                  <div className="bg-light_green-800 flex flex-col items-center justify-start ml-auto mr-[22px] mt-[-5.48px] w-[44%] z-[1]">
                    <Img
                      className="h-[60px]"
                      src="images/img_group_black_900.svg"
                      alt="group"
                    />
                  </div>
                </div>
                <div className="absolute bg-light_green-800 bottom-[0] h-[60px] left-[27%] w-[39%]"></div>
              </div>
              <Img
                className="absolute bottom-[6%] h-[337px] right-[8%]"
                src="images/img_freepikcharacterinject2.svg"
                alt="freepikcharacte"
              />
            </div>
            <div className="bg-gray-900_01 flex flex-col gap-6 items-center justify-center p-8 sm:px-5 rounded-[5px] w-[49%] md:w-full">
              <Text
                className="mt-[18px] sm:text-4xl md:text-[38px] text-[40px] text-orange-50 tracking-[-0.40px]"
                size="txtUbuntuBold40"
              >
                Sign up
              </Text>
              <div className="flex flex-col items-start justify-start mb-[9px] w-[94%] md:w-full">
                <Text
                  className="text-orange-50 text-xl tracking-[-0.20px]"
                  size="txtUbuntuBold20"
                >
                  Email
                </Text>
                <Input
                  name="group1884"
                  placeholder="Isi email..."
                  value={login?.status}
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
                  name="group1883"
                  placeholder="Isi password..."
                  value={login?.status}
                  className="font-bold p-0 placeholder:text-blue_gray-900_47 text-left text-xl tracking-[-0.20px] w-full"
                  wrapClassName="mt-[11px] w-full"
                  type="password"
                  shape="round"
                  color="blue_gray_100"
                  size="xs"
                ></Input>
                <Text
                  className="mt-[37px] text-orange-50 text-xl tracking-[-0.20px]"
                  size="txtUbuntuBold20"
                >
                  Confirm Password
                </Text>
                <Input
                  name="group1882"
                  placeholder="Isi password..."
                  value={login?.status}
                  className="font-bold p-0 placeholder:text-blue_gray-900_47 text-left text-xl tracking-[-0.20px] w-full"
                  wrapClassName="mt-[11px] w-full"
                  type="password"
                  shape="round"
                  color="blue_gray_100"
                  size="xs"
                ></Input>
                <Button
                  className="common-pointer cursor-pointer md:ml-[0] ml-[126px] mt-[61px] text-center text-lg tracking-[-0.18px] w-48"
                  onClick={() => {
                    signup();
                  }}
                  shape="round"
                  color="light_green_800"
                  size="lg"
                  variant="fill"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPagePage;
