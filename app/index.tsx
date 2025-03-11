import HomeView from "@/components/home-view";
import { QuoteProvider } from "@/context/quote-context";
import "react-native-reanimated";

export default function Index() {
  return (
    <QuoteProvider>
      <HomeView />
    </QuoteProvider>
  );
}
