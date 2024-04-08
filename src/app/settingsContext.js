"use client";

import { createContext, useContext, useState } from "react";

const defaultSettings = {
  curUser: null,
};

const SettingsContext = createContext(defaultSettings);

function SettingsProvider({ children }) {
  const [curUser, setCurUser] = useState(defaultSettings.curUser);

  const settings = {
    curUser,
  };

  const component = (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
  return component;
}

function useSettings() {
  const settings = useContext(SettingsContext);
  return settings;
}

export { SettingsProvider, useSettings };
