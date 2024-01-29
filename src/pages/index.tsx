import React, { useState } from "react";

import Header from "@/sections/Header/Header";
import Main from "@/sections/Main/Main";
import Loader from "@/shared/ui/loader/Loader";
import { classNames } from "@/shared/helpers/ClassNames";
import { useTheme } from "@/providers/ThemeProvider";

function Index() {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const { theme } = useTheme();

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };
  return (
    <div className={classNames("app", {}, [theme])}>
      {showContent && (
        <>
          <Header />
          <Main />
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}

export default Index;
