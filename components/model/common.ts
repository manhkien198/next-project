import { NextPage } from "next";
import { AppProps } from "next/dist/shared/lib/router/router";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  Layout?: (page: ReactElement) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
