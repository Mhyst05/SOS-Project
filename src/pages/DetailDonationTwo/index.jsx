import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Radio, RadioGroup, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const DetailDonationTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-end mx-auto pt-10 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex flex-row items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col gap-[37px] items-start justify-start max-w-[1242px] mt-[71px] mx-auto md:px-5 w-full">
            <Img
              className="h-6 w-6"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
              <Img
                className="h-[560px] md:h-auto object-cover rounded-[20px]"
                src="images/img_rectangle569.png"
                alt="rectangle569"
              />
              <div className="bg-gray-900_01 flex flex-col items-center justify-end p-8 sm:px-5 rounded-[20px]">
                <div className="flex flex-col items-start justify-start mb-0.5 mt-3.5 w-[99%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] text-4xl sm:text-[32px] md:text-[34px] text-deep_orange-800"
                    size="txtUbuntuBold36Deeporange800"
                  >
                    Make Donation
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[3px] text-orange-50 text-xl w-[98%] sm:w-full"
                    size="txtUbuntuLight20"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-[57px] items-center justify-between md:ml-[0] ml-[3px] mt-[30px] w-[98%] md:w-full">
                    <Text
                      className="bg-blue_gray-100 border border-light_green-800 border-solid h-10 justify-center pl-[17px] sm:pr-5 pr-[35px] py-[11px] rounded-[5px] text-black-900_6d text-center text-sm tracking-[-0.14px] w-[220px]"
                      size="txtUbuntuRegular14"
                    >
                      Your name
                    </Text>
                    <Text
                      className="bg-blue_gray-100 border border-light_green-800 border-solid h-10 justify-center pl-5 sm:pr-5 pr-[35px] py-[11px] rounded-[5px] text-black-900_6d text-sm tracking-[-0.14px] w-[220px]"
                      size="txtUbuntuRegular14"
                    >
                      Masukkan email...
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-5 text-deep_orange-800 text-xl tracking-[-0.20px]"
                    size="txtUbuntuBold20Deeporange800"
                  >
                    Donation Ammount
                  </Text>
                  <RadioGroup
                    className="flex md:ml-[0] ml-[3px] mt-4 w-[94%]"
                    name="radiogrouprp10000"
                  >
                    <Radio
                      value="Rp10000"
                      className="font-bold text-[13px] text-left text-white-A700 tracking-[-0.13px]"
                      inputClassName="bg-blue_gray-100 border border-light_green-800 border-solid h-5 mr-[5px] w-5"
                      checked={false}
                      name="radiogrouprp10000"
                      label="Rp 10000"
                      id="Rp10000"
                    ></Radio>
                    <Radio
                      value="Rp50000"
                      className="font-bold ml-[95px] text-[13px] text-left text-white-A700 tracking-[-0.13px]"
                      inputClassName="bg-blue_gray-100 border border-light_green-800 border-solid h-5 mr-[5px] w-5"
                      checked={false}
                      name="radiogrouprp10000"
                      label="Rp 50000"
                      id="Rp50000"
                    ></Radio>
                    <Radio
                      value="Rp100000"
                      className="font-bold ml-[104px] text-[13px] text-left text-white-A700 tracking-[-0.13px]"
                      inputClassName="bg-blue_gray-100 border border-light_green-800 border-solid h-5 mr-[5px] w-5"
                      checked={false}
                      name="radiogrouprp10000"
                      label="Rp 100000"
                      id="Rp100000"
                    ></Radio>
                  </RadioGroup>
                  <div className="flex flex-row items-center justify-between md:ml-[0] ml-[3px] mt-[23px] w-[68%] md:w-full">
                    <Radio
                      value="lainnya"
                      className="font-bold my-2.5 text-[13px] text-left text-white-A700 tracking-[-0.13px]"
                      inputClassName="bg-blue_gray-100 border border-light_green-800 border-solid h-5 mr-[5px] w-5"
                      checked={false}
                      name="lainnya"
                      label="lainnya"
                      id="lainnya"
                    ></Radio>
                    <Text
                      className="bg-blue_gray-100 border border-light_green-800 border-solid h-10 justify-center pl-[23px] pr-[35px] sm:px-5 py-3 rounded-[5px] text-[13px] text-black-900_6d tracking-[-0.13px] w-40"
                      size="txtUbuntuBold13"
                    >
                      Amount
                    </Text>
                  </div>
                  <CheckBox
                    className="leading-[20.00px] mt-[57px] text-[15px] text-left tracking-[-0.15px]"
                    inputClassName="border border-light_green-800 border-solid h-5 mr-[5px] w-5"
                    name="loremipsumdolor_One"
                    id="loremipsumdolor_One"
                    label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed euismod dui"
                  ></CheckBox>
                  <Button
                    className="common-pointer cursor-pointer min-w-[190px] md:ml-[0] ml-[318px] mt-5 text-center text-lg tracking-[-0.18px]"
                    onClick={() => navigate("/detaildonation")}
                    shape="round"
                    color="light_green_800"
                    size="lg"
                    variant="fill"
                  >
                    Submit Donation
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-900_01 flex items-center justify-center mt-[168px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default DetailDonationTwoPage;
