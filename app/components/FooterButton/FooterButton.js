import React from "react";
import styles from "./styles";
import { Button } from "react-native-elements";

const FooterButton = (props) => {
  const { title, onPress } = props;
  return (
    <Button
      title={title}
      buttonStyle={styles.bookNowButton}
      containerStyle={styles.bookNowContainer}
      titleStyle={styles.bookNowTitle}
      onPress={() => onPress()}
    />
  );
};

export default FooterButton;
