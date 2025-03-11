import styled from "@emotion/native";
import { useEffect } from "react";
import { Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type BlockquoteProps = {
  author: string;
  text: string;
  animate?: boolean;
};

const QuoteContainer = styled(Animated.View)`
  max-width: 620px;
  margin: 0;
  align-self: center;
  padding: 20px;
`;

const QuoteText = styled(Text)`
  font-size: 36px;
  line-height: ${36 * 1.3}px;
  text-align: center;
  color: #ffffff;
  font-family: "serif";
`;

const Footer = styled(View)`
  text-align: right;
  padding-top: 30px;
`;

const CiteText = styled(Text)`
  font-size: 24px;
  text-align: right;
  color: #dddddd;
  font-family: "serif";
`;

const Blockquote: React.FC<BlockquoteProps> = ({
  author,
  text,
  animate = false,
}) => {
  const opacity = useSharedValue(animate ? 0 : 1);

  useEffect(() => {
    opacity.value = withTiming(animate ? 0 : 1, {
      duration: animate ? 400 : 800,
    });
  }, [animate]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <QuoteContainer style={animatedStyle}>
      <QuoteText>{text}</QuoteText>
      <Footer>
        <CiteText style={{ fontStyle: "italic" }}>- {author}</CiteText>
      </Footer>
    </QuoteContainer>
  );
};

export default Blockquote;
