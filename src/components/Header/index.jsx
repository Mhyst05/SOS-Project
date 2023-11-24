import React from "react";

import { useNavigate } from "react-router-dom";

import { Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-10 items-center justify-start w-full">
          <div
            className="common-pointer bg-blue_gray-100 h-[60px] w-[60px]"
            onClick={() => navigate("/landingpage")}
          ></div>
          <Text
            className="common-pointer text-2xl md:text-[22px] text-light_green-800 sm:text-xl w-auto"
            size="txtUbuntuMedium24"
            onClick={() => navigate("/landingpage")}
          >
            Save Our Species
          </Text>
        </div>
        <ul className="flex sm:flex-col flex-row gap-[66px] md:hidden items-center justify-center w-full common-row-list">
          <li>
            <Text
              className="common-pointer text-2xl md:text-[22px] text-orange-50 sm:text-xl"
              size="txtUbuntuRegular24"
              onClick={() => navigate("/listhewandilindungi")}
            >
              LINDUNGI
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer text-2xl md:text-[22px] text-orange-50 sm:text-xl"
              size="txtUbuntuRegular24"
              onClick={() => navigate("/laporan")}
            >
              LAPOR
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer text-2xl md:text-[22px] text-orange-50 sm:text-xl"
              size="txtUbuntuRegular24"
              onClick={() => navigate("/articlelist")}
            >
              ARTIKEL
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer text-2xl md:text-[22px] text-orange-50 sm:text-xl"
              size="txtUbuntuRegular24"
              onClick={() => navigate("/volunteer")}
            >
              Volunteer
            </Text>
          </li>
        </ul>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
