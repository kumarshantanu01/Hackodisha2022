import React from "react";
import "./Card.css";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Card = ({ name, image, team, insta, linkedin, github }) => {
  return (
    <div className="text-white p-4 pt-8  flex flex-col justify-center">
      <div className="">
        <img
          src={image}
          className="w-[240px] h-[240px] rounded-[50%] color"
          alt={name}
        />
      </div>
      <div className="flex justify-center mt-[12px] text-[24px] lg:text-[24px] text-orange-500">
        {name}
      </div>
      <div className="flex justify-center mt-[8px] text-[24px] lg:text-[26px] text-yellow-400">
        {team}
      </div>
      <div className="flex justify-evenly text-4xl pt-5 pb-1">
        {/* <a href={github}><AiFillGithub/></a>
        <a href={insta}><AiFillInstagram/></a> */}
        <a href={linkedin} rel="noreferrer" target={"_blank"}>
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Card;
