import React from "react";
import { SvgXml } from "react-native-svg";

export default function IconSVG({ width, height }) {
  const icon = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29895 12.9891C5.31696 7.6884 9.62865 3.40591 14.9294 3.42392C20.2301 3.44192 24.5126 7.75362 24.4946 13.0543V13.163C24.4294 16.6087 22.5055 19.7935 20.1468 22.2826C18.7978 23.6834 17.2915 24.9235 15.6576 25.9783C15.2208 26.3561 14.5728 26.3561 14.1359 25.9783C11.7003 24.3929 9.56262 22.3914 7.82069 20.0652C6.26814 18.0367 5.38666 15.5747 5.29895 13.0217L5.29895 12.9891Z" fill="#FFBE30" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="14.8968" cy="13.1739" r="3.07609" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  const IconSvg = () => <SvgXml xml={icon} width={width} height={height} />;
  return <IconSvg />;
}
