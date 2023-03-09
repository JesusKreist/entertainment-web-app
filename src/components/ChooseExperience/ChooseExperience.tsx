import React, { Fragment, useEffect, useState } from "react";
import { useAppModeStore } from "../../data/appMode";
import FirstPrompt from "../Homepage/FirstPrompt";

type ChooooseExperienceProps = {
  children: React.ReactNode;
};
const ChooseExperience: React.FC<ChooooseExperienceProps> = ({ children }) => {
  const [currentAppMode, setCurrentAppMode] = useState<
    "demo" | "normal" | "unset" | undefined
  >();
  const { appMode, setAppMode } = useAppModeStore();

  const handleAppModeChange = (appMode: "demo" | "normal") => {
    setAppMode(appMode);
  };

  useEffect(() => {
    setCurrentAppMode(appMode);
  }, [appMode]);

  return (
    <Fragment>
      <FirstPrompt
        currentAppMode={currentAppMode}
        updateAppMode={handleAppModeChange}
      />
      {children}
    </Fragment>
  );
};

export default ChooseExperience;
