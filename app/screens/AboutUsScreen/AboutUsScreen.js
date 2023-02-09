import React, {useState} from 'react';
import {View, Text, ScrollView, Image, ImageBackground} from 'react-native';
import {Colors, Theme} from '../../config';
import {CustomHeader, Spinner, VirtualizedView} from '../../components';
import {Button} from 'react-native-elements';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import carouselImages from '../../assets/resto/plates';

function AboutUsScreen({navigation}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    {
      title: 'Item 1',
      text: 'Text 1',
      image: 'plate1.png',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
      image: 'plate2.png',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
      image: 'plate3.png',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
      image: 'plate4.png',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
      image: 'plate5.png',
    },
  ]);
  const data = [
    {
      key: 1,
      uri: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
      title: 'Lorem ipsum dolor sit amet',
      content: 'Neque porro quisquam est qui dolorem ipsum quia ',
    },
    {
      key: 2,
      uri: 'https://firebasestorage.googleapis.com/v0/b/buyanihanph.appspot.com/o/images%2Fbanners%2F20200320_171424.jpg?alt=media&token=e287767b-3e69-406e-8005-d5a5737758ab',
      title: 'Lorem ipsum dolor sit amet',
      content: 'Neque porro quisquam est qui dolorem ipsum quia ',
    },
    {
      key: 3,
      uri: 'https://firebasestorage.googleapis.com/v0/b/buyanihanph.appspot.com/o/images%2Fbanners%2F20200417_094834.jpg?alt=media&token=0498fca8-9905-4284-9459-0b4ea90493b7',
      title: 'Lorem ipsum dolor sit amet',
      content: 'Neque porro quisquam est qui dolorem ipsum quia ',
    },
  ];
  const _renderItem = ({item, index}) => {
    const {uri, title, content} = item;
    return (
      <View style={styles.imageContainer}>
        <Image source={{uri: item && item.uri}} style={styles.carouselImg} />
      </View>
    );
  };

  // const PaginationComponent = () => {
  //   // const { entries, activeSlide } = this.state;
  //   return (
  //     <Pagination
  //       dotsLength={data.length}
  //       activeDotIndex={activeIndex}
  //       containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
  //       dotStyle={{
  //         width: 10,
  //         height: 10,
  //         borderRadius: 5,
  //         marginHorizontal: 8,
  //         backgroundColor: "rgba(255, 255, 255, 0.92)",
  //       }}
  //       inactiveDotStyle={
  //         {
  //           // Define styles for inactive dots here
  //         }
  //       }
  //       inactiveDotOpacity={0.4}
  //       inactiveDotScale={0.6}
  //     />
  //   );
  // };

  return (
    <>
      <VirtualizedView>
        <LinearGradient colors={[Colors.white, '#60B414']} style={{flex: 1}}>
          <CustomHeader isAboutUs />
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/logo.png')}
              style={styles.img}
            />
          </View>
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
            ZERO WASTE, ZERO HUNGER
          </Text>

          <Carousel
            ref={ref => (carousel = ref)}
            data={data}
            renderItem={_renderItem}
            // sliderWidth={420}
            sliderWidth={Theme.getScreenWidth}
            itemWidth={300}
            autoplay={true}
            loop={true}
            autoplayDelay={300}
            // onSnapToItem={(index) => setActiveIndex(index)}
          />
          {/* <PaginationComponent /> */}
          <View>
            <Text style={{textAlign: 'center', marginVertical: 10}}>
              For faster shopping, make your own account now and earn points!
            </Text>

            <Button
              title="CREATE ACCOUNT NOW"
              buttonStyle={[Theme.buttonSecondary, {height: 65}]}
              containerStyle={{
                width: '90%',
                alignSelf: 'center',
                marginVertical: 20,
              }}
              titleStyle={Theme.center}
              // loading={isLoggingIn}
              onPress={() => {
                navigation.navigate('Signup');
              }}
            />
          </View>

          <View style={styles.textContainer}>
            <Image
              style={{
                position: 'absolute',
                top: -51,
                width: '90%',
              }}
              resizeMode="contain"
              source={require('../../assets/about_bg.png')}
            />
            <Text style={[Theme.center, {marginVertical: 20}]}>
              ABOUT SUREPLUS
            </Text>
            <Text style={styles.about}>
              One-Stop Snap is an online food delivery service in Davao. We are
              currently serving Southbound areas including Toril, Mintal,
              Catalunan Grande, Matina, Ma-a, and Downtown. The One-Stop Snap
              app allows its users to conveniently order food around their area.
              It also shows shops outside of the vicinity, giving the users more
              options to choose from. Launched in 2021, we have been working
              around the clock to improve our app and make it more
              user-friendly. We are committed to delivering your food, quickly
              and hassle-free! Craving for tasty meals but want to skip the
              traffic? Download the One-Stop Snap app on Google Play and choose
              your location to order from nearby restaurants.
            </Text>
          </View>

          <View style={styles.textContainer}>
            <Image
              style={{
                position: 'absolute',
                top: -51,
                width: '90%',
              }}
              resizeMode="contain"
              source={require('../../assets/about_bg.png')}
            />
            <Text style={[Theme.center, {marginVertical: 20}]}>PROBLEM</Text>
            <Text style={styles.problemText}>
              Through our website and upcoming app, excess food from local
              farmers, groceries, and restaurants are sold at prices lower than
              usual.
            </Text>

            <Text style={styles.problemText}>
              Donations for food subsidy are also gathered then they are
              directed to specified individuals, families, and charities. Part
              of our proceeds are also given to our partner charities.
            </Text>

            <Text style={styles.about}>
              Part of our proceeds are also given to our partner charities.
            </Text>
          </View>

          <Button
            title="BE OUR CHARITY OR BUSINESS PARTNER"
            buttonStyle={[Theme.buttonSecondary, {height: 65}]}
            containerStyle={{
              width: '90%',
              alignSelf: 'center',
              marginVertical: 20,
            }}
            titleStyle={Theme.center}
            // loading={isLoggingIn}
            // onPress={handleSubmit(login)}
          />

          <View style={styles.imageContainer}>
            <Text
              style={{
                textAlign: 'center',
                marginHorizontal: 10,
                marginBottom: -20,
                color: Colors.darkestGrey,
              }}>
              This project is funded by the YSEALI Seeds for Future Grant
            </Text>
            <Image
              style={{width: '90%'}}
              resizeMode="contain"
              source={require('../../assets/grant_logo.png')}
            />
          </View>
        </LinearGradient>
      </VirtualizedView>
    </>
  );
}

export default AboutUsScreen;
