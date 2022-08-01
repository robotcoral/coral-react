import { Layout } from "components/layout";
import { MenubarContextProvider } from "context";
import de from "lang/de.json";
import en from "lang/en.json";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FC } from "react";
import { IntlProvider } from "react-intl";

const messages: Record<string, Record<string, string>> = {
  de,
  en,
};

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const locale = useRouter().locale || "de";

  return (
    <IntlProvider locale={locale} messages={messages[locale] || messages.de}>
      <MenubarContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MenubarContextProvider>
    </IntlProvider>
  );
};

export default MyApp;
