import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from "react-native";

import { Text, View } from "@/components/Themed";
import React, { PropsWithChildren } from "react";
import { Colors, styles } from "./styles";
import initCMP, { showBanner, showFirstLayer, showSecondLayer } from "./UCHandler";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export const Header = () => {
  const isDarkMode = useColorScheme() === "dark";
  const headerStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <View style={[styles.headerContainer, headerStyle]}>
      <Text
        style={[
          styles.headerText,
          { color: isDarkMode ? Colors.light : Colors.dark },
        ]}
      >
        Welcome to {"\n"}React Native
      </Text>
    </View>
  );
};
export const Separator = () => <View style={styles.separator} />;

export function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}
export default function TabOneScreen(): React.JSX.Element {
  React.useEffect(() => { initCMP() }, [initCMP]);

  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Section title="First Layer">
            Open the First Layer {"\n\n"}
            <View style={styles.button}>
              <Button
                onPress={async () => {
                  showFirstLayer();
                }}
                title="Show First Layer"
              />
            </View>
          </Section>
          <Separator />
          <Section title="Second Layer">
            Open the Second Layer {"\n\n"}
            <View style={styles.button}>
              <Button
                onPress={async () => {
                  showSecondLayer();
                }}
                title="Show Second Layer"
              />
            </View>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
