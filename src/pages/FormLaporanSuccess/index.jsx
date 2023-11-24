import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer1 from "components/Footer1";

const FormLaporanSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-end mx-auto w-full">
        <header className="flex flex-row items-center justify-center mt-[37px] md:px-5 w-full">
          <div className="flex flex-1 flex-row gap-10 items-center justify-start w-full">
            <div className="bg-blue_gray-100 h-[60px] w-[60px]"></div>
            <Text
              className="text-2xl md:text-[22px] text-light_green-800 sm:text-xl w-auto"
              size="txtUbuntuMedium24"
            >
              Save Our Species
            </Text>
          </div>
          <ul className="flex flex-1 sm:flex-col flex-row gap-[66px] md:hidden items-center justify-center w-full common-row-list">
            <li>
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-orange-50 sm:text-xl"
              >
                <Text size="txtUbuntuRegular24">LINDUNGI</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-orange-50 sm:text-xl"
              >
                <Text size="txtUbuntuRegular24">LAPOR</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-orange-50 sm:text-xl"
              >
                <Text size="txtUbuntuRegular24">ARTIKEL</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-orange-50 sm:text-xl"
              >
                <Text size="txtUbuntuRegular24">VOLUNTEER</Text>
              </a>
            </li>
          </ul>
        </header>
        <Img
          className="h-[257px] mt-56"
          src="images/img_solarchecklist.svg"
          alt="solarchecklist"
        />
        <Text
          className="mt-[43px] text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 w-[38%] sm:w-full"
          size="txtUbuntuBold36WhiteA700"
        >
          Terima kasih atas pengaduan anda, kami akan menindaklanjuti laporan
          anda.
        </Text>
        <Button
          className="common-pointer cursor-pointer min-w-[269px] mt-[58px] text-center text-lg tracking-[-0.18px]"
          onClick={() => navigate("/landingpage")}
          shape="round"
          color="light_green_800"
          size="lg"
          variant="fill"
        >
          Kembali ke halaman utama
        </Button>
        <Footer1 className="bg-gray-900_01 flex items-center justify-center mt-[597px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default FormLaporanSuccessPage;
