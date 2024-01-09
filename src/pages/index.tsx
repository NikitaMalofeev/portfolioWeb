import React, { useState } from "react";

import Header from "@/sections/Header/Header";
import Main from "@/sections/Main/Main";
import Loader from "@/shared/ui/loader/Loader";
import More from "@/shared/more/More";
import { AnimatePresence } from "framer-motion";

function Index() {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };
  return (
    <div className="app">
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
