import styled from "@emotion/native";
import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";

// Styled Container
const Wrapper = styled(View)`
  align-items: center;
  justify-content: center;
`;

// Flash Animation
const ClickIcon = ({ size = 100, color = "#ffffff" }) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.6, { duration: 1500 }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Wrapper>
      <Animated.View style={animatedStyle}>
        <Svg width={size} height={size} viewBox="0 0 1000 1000" fill="none">
          <G>
            <Path
              fill={color}
              d="M273.5,75.1l15.7-15.7c4.3-4.3,11.4-4.3,15.7,0l54.1,54.1c4.3,4.3,4.3,11.4,0,15.7l-15.7,15.7c-4.3,4.3-11.4,4.3-15.7,0 
              l-54.1-54.1C269.2,86.5,269.2,79.4,273.5,75.1C273.5,75.1,273.5,75.1,273.5,75.1z"
            />
            <Path
              fill={color}
              d="M528.3,113.3l53.9-54c4.3-4.3,11.4-4.3,15.7,0l15.7,15.7c4.3,4.3,4.3,11.4,0,15.7l-53.9,54c-4.3,4.3-11.4,4.3-15.7,0 
              L528.3,129C523.9,124.7,523.9,117.7,528.3,113.3C528.3,113.3,528.3,113.3,528.3,113.3z"
            />
            <Path
              fill={color}
              d="M432.5,0h22.2c6.1,0,11.1,5,11.1,11.1v76.3c0,6.1-5,11.1-11.1,11.1h-22.2c-6.1,0-11.1-5-11.1-11.1V11.1 
              C421.4,5,426.3,0,432.5,0z"
            />
            <Path
              fill={color}
              d="M585.6,207.2h76.3c6.1,0,11.1,5,11.1,11.1v22.2c0,6.1-5,11.1-11.1,11.1h-76.3c-6.1,0-11.1-5-11.1-11.1v-22.2 
              C574.5,212.2,579.4,207.2,585.6,207.2z"
            />
            <Path
              fill={color}
              d="M225.2,207.2h76.4c6.1,0,11.1,5,11.1,11.1v22.2c0,6.1-5,11.1-11.1,11.1h-76.4c-6.1,0-11.1-5-11.1-11.1v-22.2 
              C214.1,212.2,219.1,207.2,225.2,207.2z"
            />
            <Path
              fill={color}
              d="M211.7,653.1l116.7,170.7c21.7,31.4,50.4,57.4,83.8,76c13.1,7.6,21.1,21.6,20.9,36.7v37.4c0,14.5,11.7,26.2,26.2,26.2 
              c0,0,0,0,0,0h246c14.5,0,26.2-11.7,26.2-26.2v-70.9c0.3-23.9,8.4-47,23.2-65.7c27-34.4,41.8-76.9,42-120.7l0-139.4 
              c1.4-26.5-18.9-49.2-45.4-50.7c-1.2-0.1-2.5-0.1-3.7-0.1h-1.2c-24.6-1.7-45.9,16.7-47.9,41.3v-40.1c-1.8-24.5-23-42.9-47.5-41.3 
              l-1.4,0c-27.4,0-49.4,19.1-49.4,42.7l0-38.4c-1-23.5-19.6-42.4-43-44c-29.9-3.1-55.2,17-55.2,42.3l0-201.2 
              c0-32.2-26.2-58.3-58.4-58.3c-32.2,0-58.2,26.1-58.3,58.3V638l-85-53.3c-19.6-12.3-44-14-65.2-4.6 
              C204,594.7,194.5,627.9,211.7,653.1z"
            />
          </G>
        </Svg>
      </Animated.View>
    </Wrapper>
  );
};

export default ClickIcon;
