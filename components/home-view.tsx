import { useQuoteContext } from "@/context/quote-context";
import styled from "@emotion/native";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import Blockquote from "./blockquote";
import ClickIcon from "./click-icon";
import ErrorMessage from "./error-message";

// Styled Components
const Container = styled(Pressable)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10vw 5vw;
  background-color: #0c0c0c;
`;

const Hint = styled(View)`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

// Main Component
const HomeView = () => {
  const { quote, loading, error, fetchQuote } = useQuoteContext();

  return (
    <Container
      accessible
      accessibilityRole="button"
      accessibilityLabel="Get a new random quote"
      onPress={fetchQuote}
    >
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : quote ? (
        <Blockquote text={quote.text} author={quote.author} animate={loading} />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <Text style={{ color: "#ffffff", fontSize: 18 }}>
          Pas de citation disponible.
        </Text>
      )}
      <Hint>
        <ClickIcon color="#ffffff" size={64} />
      </Hint>
    </Container>
  );
};

export default HomeView;
