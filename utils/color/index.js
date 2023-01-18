// 将16进制转换为rgb形式，echarts颜色直接+00的方式，颜色好像不太对
export const colorToRGB = (color, opt) => {
  let color1, color2, color3;
  color = "" + color;
  if (typeof color !== "string") return;
  if (color.charAt(0) == "#") {
    color = color.substring(1);
  }
  if (color.length == 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }
  if (/^[0-9a-fA-F]{6}$/.test(color)) {
    color1 = parseInt(color.substr(0, 2), 16);
    color2 = parseInt(color.substr(2, 2), 16);
    color3 = parseInt(color.substr(4, 2), 16);
    // return 'rgb(' + color1 + ',' + color2 + ',' + color3 + ',' + opt + ')';
    return `${color1},${color2},${color3}`;
  }
};
