import { Image } from "react-native";

import {
  BannerLogo,
  BannerSettings,
  ButtonLayout,
  ButtonType,
  LegalLinksSettings,
  SectionAlignment,
  UsercentricsLayout,
} from "@usercentrics/react-native-sdk";

// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const bannerSettingsCustom: BannerSettings = {
  firstLayerStyleSettings: {
    layout: UsercentricsLayout.popupCenter,
    cornerRadius: 30.0,
    title: {
      textSize: 20.0,
      textAlignment: SectionAlignment.center,
      textColorHex: "000000",
    },
    message: {
      textSize: 16.0,
      textAlignment: SectionAlignment.left,
      textColorHex: "181818",
      linkTextColorHex: "000000",
      linkTextUnderline: true,
    },
    buttonLayout: ButtonLayout.row([
      {
        buttonType: ButtonType.acceptAll,
        cornerRadius: 30.0,
      },
      {
        buttonType: ButtonType.more,
        backgroundColorHex: "#E8D9D5",
        textColorHex: "#FF6D4A",
      },
    ]),
  },
  secondLayerStyleSettings: {
    showCloseButton: true,
  },
  generalStyleSettings: {
    layerBackgroundColorHex: "#E3FEE8",
    font: {
      regularFont: "Lora",
      boldFont: "Lora-Regular_Bold",
      fontSize: 12.0,
    },
    logo: createBannerLogo(),
    links: LegalLinksSettings.both,
    disableSystemBackButton: false,
  },
};

function createBannerLogo(): BannerLogo {
  // Logo name is used for iOS and the Image.resolveAssetSource is used for Android.
  const customLogo = new BannerLogo(
    "logo.png",
    Image.resolveAssetSource(require("../../assets/images/logo.png")),
  );
  console.log(
    `customLOGO ----- logoName: ${customLogo.logoName} -- logoPath: ${customLogo.logoPath}`,
  );
  return customLogo;
}
