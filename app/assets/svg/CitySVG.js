import React from "react";
import { SvgXml } from "react-native-svg";

export default function CitySVG({ width, height }) {
  const icon = `<svg id="city-map" xmlns="http://www.w3.org/2000/svg" width="82.344" height="82.344" viewBox="0 0 82.344 82.344">
  <g id="Group_321" data-name="Group 321" transform="translate(0 28.996)">
    <g id="Group_320" data-name="Group 320">
      <g id="Group_319" data-name="Group 319">
        <g id="Group_318" data-name="Group 318">
          <g id="Group_317" data-name="Group 317">
            <path id="Path_2465" data-name="Path 2465" d="M82.344,233.641H0V180.293H82.344Z" transform="translate(0 -180.293)" fill="#00aa8e"/>
          </g>
        </g>
      </g>
    </g>
  </g>
  <g id="Group_326" data-name="Group 326" transform="translate(41.172 28.996)">
    <g id="Group_325" data-name="Group 325">
      <g id="Group_324" data-name="Group 324">
        <g id="Group_323" data-name="Group 323">
          <g id="Group_322" data-name="Group 322">
            <path id="Path_2466" data-name="Path 2466" d="M297.172,233.641H256V180.293h41.172Z" transform="translate(-256 -180.293)" fill="#008475"/>
          </g>
        </g>
      </g>
    </g>
  </g>
  <path id="Path_2467" data-name="Path 2467" d="M30,210.293h72.694v43.7H30Z" transform="translate(-25.175 -176.472)" fill="#b0eeae"/>
  <path id="Path_2468" data-name="Path 2468" d="M256,210.293h36.347v43.7H256Z" transform="translate(-214.828 -176.472)" fill="#00dc7b"/>
  <path id="Path_2469" data-name="Path 2469" d="M102.694,229.729H92.015V210.293H87.19V229.73H67.668l-6.661-10.423v-9.013H56.183V217.6H45.5v-7.306H40.679V217.6H30v4.825H40.679v31.567H45.5v-7.407H63.935v7.407h4.825v-7.407H87.19v7.407h4.825V234.554h10.679ZM45.5,241.759V222.424h11.77l6.661,10.423v8.912Zm41.686,0H68.759v-7.2H87.19Z" transform="translate(-25.175 -176.472)" fill="#e7f2ff"/>
  <g id="Group_327" data-name="Group 327" transform="translate(41.172 33.821)">
    <path id="Path_2470" data-name="Path 2470" d="M281.668,229.729V210.293h-4.825V229.73H257.321L256,227.662v26.329h2.412v-7.407h18.431v7.407h4.825V234.554h10.679v-4.825Zm-4.825,12.03H258.412v-7.2h18.431Z" transform="translate(-256 -210.293)" fill="#d0e8ff"/>
  </g>
  <g id="Group_328" data-name="Group 328" transform="translate(32.75)">
    <path id="Path_2471" data-name="Path 2471" d="M235.771,32.131l-13.311,13.3-13.311-13.3A18.82,18.82,0,0,1,222.453,0h.014a18.82,18.82,0,0,1,13.3,32.131Z" transform="translate(-203.633)" fill="#ff4949"/>
  </g>
  <g id="Group_329" data-name="Group 329" transform="translate(51.57)">
    <path id="Path_2472" data-name="Path 2472" d="M320.666,0h-.014l.007,45.435,13.311-13.3A18.82,18.82,0,0,0,320.666,0Z" transform="translate(-320.652)" fill="#ff001e"/>
  </g>
  <g id="Group_330" data-name="Group 330" transform="translate(43.546 10.789)">
    <circle id="Ellipse_91" data-name="Ellipse 91" cx="8.031" cy="8.031" r="8.031" fill="#f3d6ae"/>
  </g>
  <g id="Group_331" data-name="Group 331" transform="translate(51.577 10.789)">
    <path id="Path_2473" data-name="Path 2473" d="M320.7,67.084V83.146a8.031,8.031,0,0,0,0-16.062Z" transform="translate(-320.696 -67.084)" fill="#ffc373"/>
  </g>
</svg>

  `;

  const CitySvg = () => (
    <SvgXml
      xml={icon}
      width={width}
      height={height}
      style={{ marginTop: "-2%" }}
    />
  );
  return <CitySvg />;
}
