/** @format */

import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { FC, useRef, useEffect, useState } from "react";
import { AppliedTheme } from "@constants";
import { ColorView, CustomDropdownCom } from "@components";
import {
  Airplane,
  ThumbLike,
  Share,
  CommentIcon,
  SolidHeart,
  Like,
} from "@assets";
import { ExpandingDot } from "react-native-animated-pagination-dots";
const theme = AppliedTheme();
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { getHeight, getWidth } from "@helpers";
import Slider from "react-native-slider";
import { FlashList } from "@shopify/flash-list";
interface props {
  Data?: Data[];
}
const HomeScreenComponent: FC = ({ Data }) => {
  const navigation = useNavigation();
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };
  const BottomSheetContent = () => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.logoSubView}>
          <View style={styles.logoView}>
            <Text style={styles.logoText}>{Data?.product?.username}</Text>
          </View>
          <View style={styles.secondView}>
            <View style={styles.firstView}>
              <Text style={styles.textStyle}>{Data?.product?.username}</Text>
              <View>
                <Text
                  style={[
                    styles.textStyle,
                    { color: theme.button.secondary, fontSize: 15 },
                  ]}
                >
                  ★★★★☆
                </Text>
                <Text
                  style={[
                    styles.textStyle,
                    { fontSize: 12, alignSelf: "flex-end" },
                  ]}
                >
                  {Data?.product?.views}
                </Text>
              </View>
            </View>
            <View style={styles.firstView}>
              <Text style={styles.textStyle}>{Data?.product?.name}</Text>
            </View>
            <View
              style={[
                styles.firstView,
                {
                  width: getWidth(55),
                  alignSelf: "flex-start",
                  left: getWidth(2.5),
                },
              ]}
            >
              <Text style={styles.textStyle}>{Data?.product?.price}</Text>
              <View style={styles.colorView}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                  <FlashList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
                        <View style={{ marginHorizontal: 2 }}>
                          <ColorView color={item} />
                        </View>
                      );
                    }}
                    estimatedItemSize={50}
                    data={Data?.product?.colors}
                  />
                </ScrollView>
              </View>
            </View>
            <View
              style={{
                marginTop: getHeight(1),
                alignSelf: "flex-start",
              }}
            >
              <Text
                style={[
                  styles.textStyle,
                  { fontSize: 16, fontFamily: "Regular", textAlign: "center" },
                ]}
              >
                {Data?.product?.description}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.dateView}>
          <Text style={styles.textStyle}>
            <View style={styles.iconTextView}>
              <Airplane />
              <Text style={[styles.textStyle, { fontSize: 10 }]}>
                {Data?.product?.delivery}
              </Text>
            </View>
          </Text>
        </View>
        <View style={styles.dateView}>
          <Text style={styles.textStyle}>How did it fit?</Text>
        </View>
        <View style={styles.container111}>
          <Slider
            value={sliderValue}
            onValueChange={handleSliderChange}
            minimumValue={0}
            maximumValue={2}
            step={1}
            minimumTrackTintColor={theme.text.heading}
            thumbTintColor={theme.text.heading}
            maximumTrackTintColor={theme.text.heading}
            style={styles.slider}
          />
          <View style={styles.textView}>
            <Text style={styles.textStyle}>Runs Small</Text>
            <Text style={styles.textStyle}>True to Size</Text>
            <Text style={styles.textStyle}>Runs Large</Text>
          </View>
        </View>
        <ScrollView
          style={styles.flashListView}
          showsVerticalScrollIndicator={false}
        >
          <FlashList
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={({ item }) => {
              return (
                <View>
                  <View
                    style={[
                      styles.dateView,
                      {
                        flexDirection: "row",
                        alignSelf: "flex-start",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      },
                    ]}
                  >
                    <Text style={styles.textStyle}>{item?.username}</Text>
                    <View>
                      <Text
                        style={[
                          styles.textStyle,
                          {
                            color: theme.button.secondary,
                            left: 5,
                          },
                        ]}
                      >
                        ★★★★☆
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={[
                      styles.textStyle,
                      { fontSize: 14, alignSelf: "flex-start" },
                    ]}
                  >
                    {item?.comment}
                  </Text>
                  <View
                    style={[
                      styles.firstView,
                      {
                        alignSelf: "flex-end",
                        marginTop: getHeight(2),
                        width: getWidth(45),

                        alignItems: "center",
                      },
                    ]}
                  >
                    <Text>{item?.time}</Text>
                    <View style={styles.helpfulView}>
                      <ThumbLike />
                      <Text
                        style={[
                          styles.textStyle,
                          { fontSize: 14, marginLeft: getWidth(2) },
                        ]}
                      >
                        Helpful (2)
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
            estimatedItemSize={8000}
            data={Data?.userComments}
          />
        </ScrollView>
      </View>
    );
  };

  const FlashListCom = () => {
    return (
      <View>
        <View style={styles.rightContainer}>
          <TouchableOpacity
            style={styles.imageView}
            onPress={() => navigation.navigate("MessageScreen")}
          >
            <Image source={Data?.userName1?.image} style={styles.image} />
          </TouchableOpacity>
          <View>
            <TouchableOpacity>
              <SolidHeart />
            </TouchableOpacity>
            <Text
              style={[styles.textStyle, { color: theme.background.primary }]}
            >
              {Data?.likes}
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <CommentIcon />
            </TouchableOpacity>
            <Text
              style={[styles.textStyle, { color: theme.background.primary }]}
            >
              {Data?.comments}
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Like />
            </TouchableOpacity>
            <Text
              style={[styles.textStyle, { color: theme.background.primary }]}
            >
              {Data?.likes}
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Share />
            </TouchableOpacity>
            <Text
              style={[styles.textStyle, { color: theme.background.primary }]}
            >
              {Data?.share}
            </Text>
          </View>
        </View>
        <View style={styles.bottomTextView}>
          <Text
            style={[
              styles.textStyle,
              { alignSelf: "flex-start", color: theme.background.primary },
            ]}
          >
            {Data?.userName1?.username}
          </Text>
          <Text
            style={[
              styles.textStyle,
              {
                fontFamily: "Regular",
                alignSelf: "flex-start",
                color: theme.background.primary,
              },
            ]}
          >
            {Data?.userName1?.description?.substring(0, 80) + "..."}
          </Text>
        </View>

        <View style={styles.flashListStyle}>
          <FlashList
            data={Data?.product?.images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            renderItem={({ item }) => (
              <ImageBackground
                source={item?.image}
                style={styles.backgroundImage}
              >
                <ExpandingDot
                  data={Data?.product?.images}
                  expandingDotWidth={20}
                  scrollX={scrollX}
                  inActiveDotColor={theme.background.primary}
                  activeDotColor={theme.background.primary}
                  inActiveDotOpacity={0.5}
                  dotStyle={styles.dotStyles}
                  containerStyle={styles.constainerStyles}
                />
              </ImageBackground>
            )}
            estimatedItemSize={8000}
          />
        </View>
      </View>
    );
  };
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    setTimeout(() => {
      bottomSheetRef.current?.present(1);
    }, 100);
  }, []);
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <FlashListCom />
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={["32%", "85%"]}
          index={0}
          enablePanDownToClose={false}
        >
          <BottomSheetContent />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
};

export default HomeScreenComponent;
