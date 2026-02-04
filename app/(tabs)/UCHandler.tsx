import {
  Usercentrics,
  UsercentricsConsentUserResponse,
  UsercentricsLoggerLevel,
  UsercentricsOptions
} from "@usercentrics/react-native-sdk";
import { settingsId } from "./model";


export default function initCMP(){
    let options: UsercentricsOptions = { settingsId: settingsId };
    options.loggerLevel = UsercentricsLoggerLevel.debug;
    options.consentMediation = false;
    options.consentMediation = true;
    Usercentrics.configure(options);
    showBanner();
}

// eslint-disable-next-line react-hooks/exhaustive-deps
export async function showBanner() {
    try {
      const status = await Usercentrics.status();
      if (status.shouldCollectConsent) {
        // Show banner to collect consent
        showFirstLayer();
      } else {
        // Apply consent with status.consents
      }
    } catch (error) {
      // Handle error
    }
  }

export  async function showFirstLayer() {
    const response = await Usercentrics.showFirstLayer();
    consentsLogger(response);
  }

export  async function showSecondLayer() {
    const response = await Usercentrics.showSecondLayer();
    consentsLogger(response);
  }

  async function consentsLogger(response: UsercentricsConsentUserResponse) {
    console.log("Consents -> ${response.consents}", response.consents);

    const tcfData = await Usercentrics.getTCFData();
    const tcString = tcfData.tcString;
    console.log("TCSTRING - > ${tcString}", tcString);

    console.log(
      "User Interaction -> ${response.userInteraction}",
      response.userInteraction,
    );
    console.log(
      "Controller Id -> ${response.controllerId}",
      response.controllerId,
    );

    let data = Usercentrics.getCMPData();
    let categories = (await data).categories;
    let services = (await data).services;
    console.log("CATEGORIES");
    console.log(categories);
    console.log("SERVICES");
    console.log(services);
  }