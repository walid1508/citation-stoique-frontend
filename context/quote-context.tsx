import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Quote = {
  text: string;
  author: string;
};

interface QuoteContextProps {
  quote: Quote;
  loading: boolean;
  error: Error | null;
  fetchQuote: () => void;
}

const QuoteContext = createContext<QuoteContextProps | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [quote, setQuote] = useState<Quote>({ text: "", author: "" });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://citation-stoique.vercel.app/api/quote"
      );
      const data = await response.json();
      setQuote(data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <QuoteContext.Provider value={{ quote, loading, error, fetchQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuoteContext = () => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error("useQuoteContext must be used within a QuoteProvider");
  }
  return context;
};
