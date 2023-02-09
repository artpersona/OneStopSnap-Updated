// Refer from https://github.com/bogoslavskiy/react-native-tabs-section-list/blob/master/src/SectionList.tsx

import * as React from 'react';
import {
  View,
  SectionList as RNSectionList,
  SectionListProps,
  ViewStyle,
  SectionListData,
  ViewToken,
  Animated,
  StyleProp,
  PixelRatio,
  Dimensions,
} from 'react-native';
import TabBar from './TabBar';
import ParralaxTab from './ParralaxTab';
import styles from './styles';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';

const d = Dimensions.get('window');

interface IProps extends SectionListProps<any> {
  scrollToLocationOffset?: number;
  tabBarStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  tabBarScrollViewStyle?: StyleProp<ViewStyle>;
  renderTab: (section: SectionListData<any>) => React.ReactNode;
  onViewableItemsChangedCallback?: (info: {
    viewableItems: Array<ViewToken>;
    changed: Array<ViewToken>;
  }) => void;
}

interface IState {
  currentIndex: number;
}

export default class SectionList extends React.PureComponent<IProps, IState> {
  state = {
    currentIndex: 0,
  };

  private blockUpdateIndex: boolean = false;
  private sectionList: React.RefObject<RNSectionList<any>> = React.createRef();

  constructor(props) {
    super(props);

    this.getItemLayout = sectionListGetItemLayout({
      // The height of the row with rowData at the given sectionIndex and rowIndex
      getItemHeight: (rowData, sectionIndex, rowIndex) =>
        (sectionIndex = d.height / 4),

      // These three properties are optional
      // getSeparatorHeight: () => 1 / PixelRatio.get(), // The height of your separators
      // getSectionHeaderHeight: () => 20, // The height of your section headers
    });
  }

  render() {
    const {
      sections,
      renderTab,
      tabBarStyle,
      tabBarScrollViewStyle,
      scrollToLocationOffset,
      onViewableItemsChangedCallback,
      renderAboveItems,
    } = this.props;

    const prepareSections = sections.map((item, index) => ({...item, index}));

    const tabBarPress = (index: number) => {
      this.setState({currentIndex: index});
      this.blockUpdateIndex = true;
      const sectionList = this.sectionList.current;
      if (sectionList && sectionList.scrollToLocation) {
        sectionList.scrollToLocation({
          animated: true,
          itemIndex: 0,
          viewOffset: scrollToLocationOffset || 0,
          sectionIndex: index,
        });
      }
    };

    return (
      <>
        <TabBar
          sections={prepareSections}
          renderTab={renderTab}
          tabBarStyle={tabBarStyle}
          tabBarScrollViewStyle={tabBarScrollViewStyle}
          currentIndex={this.state.currentIndex}
          onPress={(index: number) => {
            this.setState({currentIndex: index});
            this.blockUpdateIndex = true;
            const sectionList = this.sectionList.current;
            if (sectionList && sectionList.scrollToLocation) {
              sectionList.scrollToLocation({
                animated: true,
                itemIndex: 0,
                viewOffset: scrollToLocationOffset || 0,
                sectionIndex: index,
              });
            }
          }}
        />

        {/* {renderAboveItems && renderAboveItems()} */}
        <Animated.SectionList
          {...this.props}
          sections={prepareSections}
          onViewableItemsChanged={(info: any) => {
            const {viewableItems} = info;
            if (!this.blockUpdateIndex && viewableItems[0]) {
              if (onViewableItemsChangedCallback) {
                onViewableItemsChangedCallback(info);
              }
              const currentIndex = viewableItems[0].section.index;
              if (this.state.currentIndex !== currentIndex) {
                this.setState({currentIndex});
              }
            }
          }}
          viewabilityConfig={{
            minimumViewTime: 10,
            itemVisiblePercentThreshold: 10,
          }}
          ref={this.sectionList as React.RefObject<any>}
          onMomentumScrollEnd={() => (this.blockUpdateIndex = false)}
          removeClippedSubviews={true} // Unmount components when outside of window
          contentContainerStyle={{paddingBottom: '20%', zIndex: 9999}}
          disableIntervalMomentum
          showsVerticalScrollIndicator={false}
          getItemLayout={this.getItemLayout}
          style={{zIndex: 9999, backgroundColor: 'white'}}
          ListHeaderComponent={renderAboveItems}
        />
      </>
    );
  }
}
