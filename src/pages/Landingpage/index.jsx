import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const LandingpagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[1000px] md:px-5 relative w-full">
            <Img
              className="h-[1000px] m-auto object-cover w-full"
              src="images/img_herolandingpage.png"
              alt="herolandingpage"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[291px] inset-x-[0] items-start justify-start mx-auto top-[2%] w-[89%]">
              <Header className="flex flex-row items-center justify-center w-full" />
              <div className="flex flex-col gap-[23px] items-start justify-start w-[38%] md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-deep_orange-300 w-full"
                  size="txtUbuntuBold36"
                >
                  Melindungi Keajaiban Terancam
                </Text>
                <Text
                  className="leading-[130.00%] text-orange-50 text-xl w-[94%] sm:w-full"
                  size="txtUbuntuRegular20"
                >
                  Jelajahi kisah-kisah penuh keajaiban, tantangan, dan harapan
                  yang melibatkan kita semua dalam menjaga keberlanjutan hidup
                  sang raja hutan.
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[132px] text-base text-center tracking-[-0.16px]"
                  shape="round"
                  color="light_green_800"
                  size="md"
                  variant="fill"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <Text
            className="mt-[114px] md:text-3xl sm:text-[28px] text-[32px] text-light_green-800"
            size="txtUbuntuBold32"
          >
            Explore The Animal
          </Text>
          <Text
            className="mt-[17px] text-center text-orange-50 text-xl w-[78%] sm:w-full"
            size="txtUbuntuRegular20"
          >
            <>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s
            </>
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1135px] mt-[53px] mx-auto md:px-5 w-full">
            <div className="h-[621px] relative w-[32%] md:w-full">
              <Img
                className="absolute h-[621px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
                src="images/img_rectangle475.png"
                alt="rectangle475"
              />
              <div className="absolute backdrop-opacity-[0.5] bg-black-900_4c blur-[40.00px] bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-2.5 rounded-[20px] w-full">
                <Text
                  className="mb-[90px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[90%] sm:w-full"
                  size="txtUbuntuRegular24WhiteA700"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s
                  </>
                </Text>
              </div>
            </div>
            <div className="md:h-[621px] h-[625px] ml-9 md:ml-[0] relative w-[33%] md:w-full">
              <Img
                className="absolute h-[621px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
                src="images/img_rectangle476.png"
                alt="rectangle476"
              />
              <div className="absolute backdrop-opacity-[0.5] bg-black-900_4c blur-[40.00px] bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-1.5 rounded-[20px] w-full">
                <Text
                  className="mb-[98px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[84%] sm:w-full"
                  size="txtUbuntuRegular24WhiteA700"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s
                  </>
                </Text>
              </div>
            </div>
            <div className="md:h-[621px] h-[625px] md:ml-[0] ml-[35px] relative w-[30%] md:w-full">
              <Img
                className="absolute h-[621px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
                src="images/img_rectangle477.png"
                alt="rectangle477"
              />
              <div className="absolute backdrop-opacity-[0.5] bg-black-900_4c blur-[40.00px] bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-1.5 rounded-[20px] w-full">
                <Text
                  className="mb-[98px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[93%] sm:w-full"
                  size="txtUbuntuRegular24WhiteA700"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="h-[1000px] md:h-[1108px] mt-[108px] md:px-5 relative w-full">
            <Img
              className="h-[1000px] m-auto object-cover w-full"
              src="images/img_rectangle478.png"
              alt="rectangle478"
            />
            <div className="absolute bg-black-900 bottom-[0] h-[89px] right-[0] w-[7%]"></div>
            <div className="absolute backdrop-opacity-[0.5] bg-black-900_4c blur-[40.00px] flex flex-col gap-[43px] h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-[20px]">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-orange-50"
                size="txtUbuntuBold32Orange50"
              >
                Ikan Arwana Merah
              </Text>
              <Text
                className="mb-[42px] text-2xl md:text-[22px] text-center text-orange-50 text-shadow-ts sm:text-xl w-[99%] sm:w-full"
                size="txtUbuntuRegular24"
              >
                Hewan ini kini telah dinyatakan sebagai hewan langka dan
                dilindungi oleh Surat Keputusan Bupati kapuas Hulu Nomor 6 Tahun
                2001, yang menyatakan Danau Lindung Empangau Kalimantan Barat
                ditetapkan sebagai danau lindung.
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[58px] items-start justify-start max-w-7xl mt-[199px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[22px] items-start justify-start md:mt-0 mt-[177px]">
              <Text
                className="ml-0.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-deep_orange-800 w-full"
                size="txtUbuntuBold32Deeporange800"
              >
                Our Job is to improve the world and help animals
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-orange-50 text-shadow-ts sm:text-xl w-[96%] sm:w-full"
                size="txtUbuntuRegular24"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </>
              </Text>
            </div>
            <List
              className="flex flex-col gap-10 h-[720px] w-[720px]"
              orientation="vertical"
            >
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="h-[340px] relative w-[340px]">
                  <Img
                    className="common-pointer h-[340px] m-auto object-cover rounded-[20px] w-[340px]"
                    src="images/img_rectangle499.png"
                    alt="rectangle499"
                    onClick={() => navigate("/volunteer")}
                  />
                  <div className="absolute flex flex-col gap-[18px] inset-x-[0] items-center justify-start mx-auto top-[29%]">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-deep_orange-800"
                      size="txtUbuntuBold36Deeporange800"
                    >
                      Our Volunteer
                    </Text>
                    <Text
                      className="text-lg text-orange-50 w-full"
                      size="txtUbuntuRegular18"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Text>
                  </div>
                </div>
                <div className="h-[340px] relative w-[340px]">
                  <Img
                    className="h-[340px] m-auto object-cover rounded-[20px] w-[340px]"
                    src="images/img_rectangle498.png"
                    alt="rectangle498"
                  />
                  <Text
                    className="absolute bottom-[14%] inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-deep_orange-800 w-max"
                    size="txtUbuntuBold36Deeporange800"
                  >
                    Help Us
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="h-[340px] relative w-[340px]">
                  <Img
                    className="h-[340px] m-auto object-cover rounded-[20px] w-[340px]"
                    src="images/img_rectangle500.png"
                    alt="rectangle500"
                  />
                  <div className="absolute flex flex-col items-start justify-start left-[14%] top-[24%]">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-deep_orange-800"
                      size="txtUbuntuBold32Deeporange800"
                    >
                      Get in Touch
                    </Text>
                    <Text
                      className="mt-[21px] text-lg text-orange-50"
                      size="txtUbuntuRegular18"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="mt-[19px] text-lg text-orange-50"
                      size="txtUbuntuRegular18"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="mt-[19px] text-lg text-orange-50"
                      size="txtUbuntuRegular18"
                    >
                      Lorem Ipsum
                    </Text>
                  </div>
                </div>
                <div className="h-[340px] relative w-[340px]">
                  <Img
                    className="common-pointer h-[340px] m-auto object-cover rounded-[20px] w-[340px]"
                    src="images/img_rectangle501.png"
                    alt="rectangle501"
                    onClick={() => navigate("/donation")}
                  />
                  <Text
                    className="absolute bottom-[15%] inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-deep_orange-800 w-max"
                    size="txtUbuntuBold36Deeporange800"
                  >
                    Donate Now
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="h-[699px] md:h-[741px] mt-[181px] md:px-5 relative w-full">
            <div className="absolute h-[539px] inset-x-[0] mx-auto top-[0] w-full">
              <Img
                className="h-[539px] m-auto object-cover w-full"
                src="images/img_rectangle524.png"
                alt="rectangle524"
              />
              <div className="absolute bg-black-900_4c bottom-[0] flex flex-col items-start justify-end p-[35px] sm:px-5 right-[10%] rounded-[20px]">
                <Text
                  className="ml-1 md:ml-[0] mt-[46px] sm:text-2xl md:text-[26px] text-[28px] text-deep_orange-300 w-[98%] sm:w-full"
                  size="txtUbuntuBold28"
                >
                  Apakah Anda Peduli Terhadap Hewan Langka Seperti Kami?
                </Text>
                <Text
                  className="ml-1 md:ml-[0] mt-[25px] text-lg text-orange-50 text-shadow-ts w-[94%] sm:w-full"
                  size="txtUbuntuRegular18"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s
                  </>
                </Text>
                <Text
                  className="ml-1 md:ml-[0] mt-3.5 text-orange-50 text-xl"
                  size="txtUbuntuRegular20"
                >
                  Lorem ipsum dor sit amet
                </Text>
                <Text
                  className="ml-1 md:ml-[0] mt-[17px] text-orange-50 text-xl"
                  size="txtUbuntuRegular20"
                >
                  Lorem ipsum dor sit amet
                </Text>
                <Text
                  className="ml-1 md:ml-[0] mt-[17px] text-orange-50 text-xl"
                  size="txtUbuntuRegular20"
                >
                  Lorem ipsum dor sit amet
                </Text>
              </div>
            </div>
            <div className="absolute bg-gray-900_01 bottom-[0] flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-[39px] sm:px-5 right-[10%] rounded-[20px] w-[35%]">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[-0.40px]"
                size="txtUbuntuMedium40"
              >
                712{" "}
              </Text>
              <Text
                className="leading-[18.00px] ml-4 sm:ml-[0] text-lg text-white-A700 tracking-[-0.18px] w-[22%] sm:w-full"
                size="txtUbuntuLight18"
              >
                Sudah bergabung
              </Text>
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[178px] sm:ml-[0] ml-[47px] sm:mt-0 my-0.5 text-center text-lg tracking-[-0.18px]"
                onClick={() => navigate("/volunteer")}
                shape="round"
                color="light_green_800"
                size="lg"
                variant="fill"
              >
                Volunteer Now
              </Button>
            </div>
            <Img
              className="absolute bottom-[0] h-[560px] left-[10%] object-cover rounded-[20px] w-[560px]"
              src="images/img_rectangle522.png"
              alt="rectangle522"
            />
          </div>
          <div className="h-[420px] md:h-[643px] mt-[223px] md:px-5 relative w-full">
            <Img
              className="h-[420px] m-auto object-cover w-full"
              src="images/img_rectangle521.png"
              alt="rectangle521"
            />
            <div className="absolute bottom-[28%] flex flex-col gap-[19px] inset-x-[0] items-center justify-start mx-auto w-[77%]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 w-full"
                size="txtUbuntuBold36WhiteA700"
              >
                Kami Mengandalkan Dukungan Kalian untuk Melindungi Hewan Liar
                dan Memastikan Habitatnya Tetap Aman
              </Text>
              <Button
                className="common-pointer cursor-pointer min-w-[155px] text-center text-lg tracking-[-0.18px]"
                onClick={() => navigate("/donation")}
                shape="round"
                color="light_green_800"
                size="lg"
                variant="fill"
              >
                Donate Now
              </Button>
            </div>
          </div>
          <Text
            className="mt-20 text-4xl sm:text-[32px] md:text-[34px] text-center text-orange-50"
            size="txtUbuntuRegular36"
          >
            Team Capstone
          </Text>
          <Text
            className="mt-[13px] text-lg text-orange-50"
            size="txtUbuntuRegular18"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-7xl mt-[79px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="h-80 relative w-full">
              <Img
                className="h-80 m-auto object-cover rounded-[20px] w-full"
                src="images/img_rectangle527.png"
                alt="rectangle527"
              />
              <div className="absolute bg-gray-900_7f bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto p-2.5 w-full">
                <Text
                  className="md:ml-[0] ml-[9px] text-base text-orange-50"
                  size="txtUbuntuRegular16"
                >
                  Lorem Ipsum{" "}
                </Text>
                <Text
                  className="mb-[27px] md:ml-[0] ml-[9px] text-orange-50 text-xs w-[92%] sm:w-full"
                  size="txtUbuntuRegular12"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </div>
            </div>
            <div className="h-80 relative w-full">
              <Img
                className="h-80 m-auto object-cover rounded-[20px] w-full"
                src="images/img_rectangle527.png"
                alt="rectangle528"
              />
              <div className="absolute bg-gray-900_7f bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto p-2.5 w-full">
                <Text
                  className="md:ml-[0] ml-[9px] text-base text-orange-50"
                  size="txtUbuntuRegular16"
                >
                  Lorem Ipsum{" "}
                </Text>
                <Text
                  className="mb-[27px] md:ml-[0] ml-[9px] text-orange-50 text-xs w-[92%] sm:w-full"
                  size="txtUbuntuRegular12"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </div>
            </div>
            <div className="h-80 relative w-full">
              <Img
                className="h-80 m-auto object-cover rounded-[20px] w-full"
                src="images/img_rectangle527.png"
                alt="rectangle529"
              />
              <div className="absolute bg-gray-900_7f bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto p-2.5 w-full">
                <Text
                  className="md:ml-[0] ml-[9px] text-base text-orange-50"
                  size="txtUbuntuRegular16"
                >
                  Lorem Ipsum{" "}
                </Text>
                <Text
                  className="mb-[27px] md:ml-[0] ml-[9px] text-orange-50 text-xs w-[92%] sm:w-full"
                  size="txtUbuntuRegular12"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </div>
            </div>
            <div className="h-80 relative w-full">
              <Img
                className="h-80 m-auto object-cover rounded-[20px] w-full"
                src="images/img_rectangle527.png"
                alt="rectangle530"
              />
              <div className="absolute bg-gray-900_7f bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto p-2.5 w-full">
                <Text
                  className="md:ml-[0] ml-[9px] text-base text-orange-50"
                  size="txtUbuntuRegular16"
                >
                  Lorem Ipsum{" "}
                </Text>
                <Text
                  className="mb-[27px] md:ml-[0] ml-[9px] text-orange-50 text-xs w-[92%] sm:w-full"
                  size="txtUbuntuRegular12"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </div>
            </div>
            <div className="h-80 relative w-full">
              <Img
                className="h-80 m-auto object-cover rounded-[20px] w-full"
                src="images/img_rectangle527.png"
                alt="rectangle531"
              />
              <div className="absolute bg-gray-900_7f bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto p-2.5 w-full">
                <Text
                  className="md:ml-[0] ml-[9px] text-base text-orange-50"
                  size="txtUbuntuRegular16"
                >
                  Lorem Ipsum{" "}
                </Text>
                <Text
                  className="mb-[27px] md:ml-[0] ml-[9px] text-orange-50 text-xs w-[92%] sm:w-full"
                  size="txtUbuntuRegular12"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
              </div>
            </div>
          </List>
          <Footer className="bg-gray-900_01 flex items-center justify-center mt-[142px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default LandingpagePage;
