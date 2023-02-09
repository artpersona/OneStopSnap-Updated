import React, { useContext, useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";

import styles from "./styles";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ImageViewer from "react-native-image-zoom-viewer";

const OrderItemCard = ({ data }) => {
  let productImage = { uri: data && data.file };

  const optionsActive = data.selectedOption ? 1 : 0;
  const addonsActive = data.selectedAddOn ? 1 : 0;
  const optionalActive = optionsActive != 0 || addonsActive != 0;

  if (!data.image) {
    return (
      <>
        <View style={styles.container}>
          <View style={{ width: "35%" }}>
            <View style={styles.imageContainer}>
              <Image source={productImage} style={styles.image} />
            </View>
          </View>
          <Text style={styles.product__quantity}>x{data.quantity}</Text>
          <View style={{ width: "65%" }}>
            <Text style={styles.displayNameText}>{data && data.name}</Text>

            {optionalActive && (
              <View style={styles.optional__container}>
                {optionalActive != 0 && (
                  <View style={styles.options__wrapper}>
                    <Text style={styles.section__header}>Options</Text>

                    <View style={styles.section__content}>
                      <Text style={styles.content__name}>
                        {data.selectedOption.name}
                      </Text>
                      <Text style={styles.content__price}>
                        + ₱{data.selectedOption.amount}
                      </Text>
                    </View>
                  </View>
                )}
                {addonsActive != 0 && (
                  <View style={styles.addons__wrapper}>
                    <Text style={styles.section__header}>Add-ons</Text>
                    {data.selectedAddOn.map((item, index) => {
                      return (
                        <View
                          style={styles.section__content}
                          key={index.toString()}
                        >
                          <Text style={styles.content__name}>{item.name}</Text>
                          <Text style={styles.content__quantity}>
                            x{item.quantity}
                          </Text>
                          <Text style={styles.content__price}>
                            + ₱{item.quantity * item.amount}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                )}
              </View>
            )}

            <View style={styles.bottom__container}>
              <Text style={styles.subTotalPrice}>
                {data.unit === "g"
                  ? `₱ ${parseFloat(
                      (data.price * data.quantity) / data.increment
                    ).toFixed(2)}`
                  : `₱ ${data.subtotal}`}
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  } else {
    const [showImage, setShowImage] = useState(false);
    const images = [
      {
        url: data.uri,
      },
    ];

    return (
      <>
        <View style={styles.container}>
          <View style={styles.photo__container}>
            <TouchableOpacity
              style={styles.image__container}
              onPress={() => setShowImage(true)}
            >
              <Image
                source={{ uri: data.uri }}
                style={{ width: "100%", height: "100%" }}
              />
            </TouchableOpacity>

            <Modal
              visible={showImage}
              transparent={true}
              onRequestClose={() => setShowImage(false)}
            >
              <ImageViewer imageUrls={images} />
            </Modal>
          </View>
          <View style={styles.photo__orderWrapper}>
            <Text style={styles.photo__orderText}>Photographic Order</Text>
          </View>
        </View>
      </>
    );
  }
};

export default React.memo(OrderItemCard);
