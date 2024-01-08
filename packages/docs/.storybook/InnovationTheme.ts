import { create } from "@storybook/theming/create";

export default create({
  base: "dark",
  brandTitle: "Parvi Inovação",
  brandUrl: "",
  brandImage: "./parvi-tec -White-resized.png",
  brandTarget: "_self",

  // UI
  appBg: "#101418",
  appContentBg: "#101418",
  appPreviewBg: "#101418",
  appBorderRadius: 4,

  // Text colors
  textColor: "#DBE5DF",
  textInverseColor: "#101418",

  // Toolbar default and active colors
  barTextColor: "#DBE5DF",
  barSelectedColor: "#ffffff",
  barBg: "#101418",

  // Form colors
  inputBg: "#191C1B",
  inputBorder: "#006B54",
  inputTextColor: "#DBE5DF",
  inputBorderRadius: 4,
});
