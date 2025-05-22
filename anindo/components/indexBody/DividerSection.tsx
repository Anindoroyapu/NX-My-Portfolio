import Image from "next/image";
import React from "react";
import DividerImg from "@/public/assets/image/Divider.png";
import DividerClientImg from "@/public/assets/image/Client.png";

const DividerSection = () => {
  return (
    <div className=" mt-[160px] relative">
      <div className="mx-[100px]">
        <Image
          src={DividerImg}
          alt=""
          width={100}
          height={100}
          sizes="100vh"
          className="w-full h-auto"
        />
      </div>
      <div className=" flex justify-between mx-[54px] mt-[65px]">
        <div className=" w-[430px] h-[100px] mt-14.5 flex items-center justify-center border bg-white/10 bg-">
          <svg
            width="201"
            height="25"
            viewBox="0 0 201 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              y="-0.000488281"
              width="201"
              height="25"
              fill="url(#pattern0_2184_139)"
            />
            <defs>
              <pattern
                id="pattern0_2184_139"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_2184_139"
                  transform="scale(0.00497512 0.04)"
                />
              </pattern>
              <image
                id="image0_2184_139"
                width="201"
                height="25"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAAZCAYAAACb+AoqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaiSURBVHgB7VuNeds4DEVuAm0Q3QTnbqBOcL4Jyk4QdwLrJog7gdoJ0k6gdIJkA+kmcDfAESZYQjAl0k4uuSR838fYIh9JAPwBSDkACSBiZVOHaextWkNBwVuCnfS1TXcZC2QgLhQUvCXYSd+wd0jhhrwNFBS8JdhJv8U8tFBQ8JaAp50/Gq5zTQkKCl470J0/howFMjCXUq/zoaDgleGC/rBXuLEpdbb4atPGppr5tSofbfp4cXFxC48MXoAVp5/Ul+3np+JULNOKOZTuNU+0t+L2RuJa3r1qS9vjZ6ytpwC6m8MOgrzvnlGWGp7RFg8FRUvg5P+UW2GLeWiZf4XpA/0WHgks38Dt7nHq7TrBk3INnPzzRvCkB9wLrq9XMa/BeVA9urAw8EQg+ysZGngGsP0IPbxQ8Djny08DjXm3WHT2oDPLCvPCsg4fcOvFffXc1g5VKIduEtf83Q/c0U0by1uL5y42ybi/RrWfgx6f4HaPdWw5Pdv7KLbfXcyGLwV44iLx4VZtP6hSneCPNr3n7xRurXL41q2NcCLQXQaQB/hk6+8SXAMuFHmfCvXIQOBCtfcJXgPOJh7fbPoOLtz5AFPdv9n2/orU/xOcTX2I+IO5o+JS+Zq5lzb9AyFUvGXOmtvz+OTDHa5vbPoDwhhO+qC+Lf8LhhtJCjd2LOeK61K/t3M25HlC9nsHzjb32o7c3hjRsWbZJuEvy76S+cxtIOhCZd9Ue4d6JKvQv9Ly0yYJIfwmue5jc0CNwaFPz58owTtxCgOGm63dKfxc4IkuHcOun7xl451/j4lLBjz2JG2kHYlLUbadN8eh7w9K12GBb5jXxvqL1N9jPDLYMV9ibryjdkTnRXolT6M4e4yMm5BR82kO7cWzwRDOdkJGql9FeCvfJ3NXXO4jkT230/Fzh8qTiDZuMHhr+k4es44ZosU8bM/h5wDDBG1PqNMKY269sSI8OanIEGuMhEuYXiQbVW4436j8HfchJ+Qew9lnp/INikGK6OdxGak/cN5KceWZTKPHMHEkmojdCGt+rjCyIISclbLlHfel+ZTfqbxqZiyMyPN2jk5koVM9I59cJEdySfymM6x7ae3HR3DuaQnUGe04tEOR+x1z+JgXv9f8OUImWO7fwYU0xqY7NpJRPHKhxCMdSRYKGwc2ag35mLPPB8W5535+iHx6biLt+FBuBBdOvYM0KtWf/IxxJCjkohCVbPG3KqvVM21yow97ODT6bFOjFtQtfxqRRzr94NRg2CBqcKHQd9mRvjVLhNCfZ8JXEyvjeaLt4+XanjQH8Lz3Jtn8RN9+J9zBmUC3+/TcznVCT/IKeykbpj2JDjUbzh8wD4b51UKda9HfnCfRnqvD4zCqFu1I9MpeR/IJGyHL2YvkD/DaEwwYwjJft2ZdCS2XHeweGbdrbnvA6S2llMnrfRQxCF0aiI/5L/lUe4O3Cz/XkAIrlXtO8W4495yyTvR7mLTwQGBYKFWCt2aej91nFwkebwiDKLtTepqZVKv+KS9ma8Pl0UUyU+bR43HYJCGv0JcWSbegi5e5jshD47jFmdCGv3fKBsj164hsJsK9jIyl32QbiAAXbre47gbDAq0hB5h/7ticw0/0+aB3Lpi/SPxAtOrZo2eZOjw+GJuI3B5bFOEFusUo+VfoBtwfOPV5op1pVx7c5fshw7J7767je4nkIsHgCcyM3eqFtvxkM5Eyvymt1VjFDv1Gy4DLi8Rvsu2CvIuXQoLXQi5YqQHnMYiByf15/SrRp/dKPYbBb1gWGoAGgsGuOV9yOq0oup1vI3gNRnYOzHtPQgOxUTJXGfrLCdUnuF6eVuVfiv6GRBsdhoU6J8fcIqG6ix4dgzeRh/UBOWSK8Pdcto+M96//S2LdGgz6GcGdXSRc7kNog9MXxD2qCwd0G1UjeN4DTvrMAs6fO27wtBeNPWa6MQwuXYcxlNco5Yc5jmjvC7fld18/YC1OB9nrotPhNgbdIFQJufVi8X0ZwWtneD1OX25ulByXSvcUvJeXWFwkGBaggeUx8hN5o/Sa9JEq4/6+ROxQc34juGtph4UxGER7Bxm5/xslz6D0n+hzElgRee5oOf8K83D2YbxgCgwhgR/UFQZvLnfgYvfnAK++hr9fYx7OW5kFUeB09x9wGmpule1XUPD0wEc8fxScB0zfJvb4Qn9j9X/BBZwJNjzFlHWCegvu5/MjFPwnQHe+o8OuPCON4H7HNELB0wPL+aPgDeFkT4Lueu4qg/qVfnUKBQUFBQWvG/8CD2BG+mip7YMAAAAASUVORK5CYII="
              />
            </defs>
          </svg>
        </div>
        <div className=" w-[430px] h-[100px] flex items-center justify-center border bg-white bg-opacity-10">
          <svg
            width="154"
            height="29"
            viewBox="0 0 154 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              x="0.75"
              y="-0.000488281"
              width="153"
              height="29"
              fill="url(#pattern0_2184_143)"
            />
            <defs>
              <pattern
                id="pattern0_2184_143"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_2184_143"
                  transform="scale(0.00653595 0.0344828)"
                />
              </pattern>
              <image
                id="image0_2184_143"
                width="153"
                height="29"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </div>
        <div className=" w-[430px] h-[100px] mt-14.5 flex items-center justify-center border bg-white bg-opacity-10">
          <svg
            width="202"
            height="60"
            viewBox="0 0 202 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              x="0.5"
              y="-0.000488281"
              width="201"
              height="60"
              fill="url(#pattern0_2184_146)"
            />
            <defs>
              <pattern
                id="pattern0_2184_146"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_2184_146"
                  transform="scale(0.00497512 0.0166667)"
                />
              </pattern>
              <image
                id="image0_2184_146"
                width="201"
                height="60"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </div>
        <div className=" bg-black h-fit">
          <div className=" w-[430px] h-[100px] flex items-center justify-center border bg-white bg-opacity-10">
            <svg
              width="102"
              height="26"
              viewBox="0 0 102 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                x="0.25"
                y="-0.000488281"
                width="101"
                height="26"
                fill="url(#pattern0_2184_150)"
              />
              <defs>
                <pattern
                  id="pattern0_2184_150"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_2184_150"
                    transform="scale(0.00990099 0.0384615)"
                  />
                </pattern>
                <image
                  id="image0_2184_150"
                  width="101"
                  height="26"
                  preserveAspectRatio="none"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="ml-[54px] w-[440px] h-auto float-right absolute -z-10 top-[506px] right-0">
        <Image
          src={DividerClientImg}
          alt="DividerClientImg"
          width={100}
          height={100}
          sizes="100vh"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default DividerSection;
