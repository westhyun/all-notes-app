import { useState } from 'react';

export const useTheme = () => {
  const curBrowserDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  let initTheme = curBrowserDarkMode ? 'dark' : 'light';

  const localSettingTheme = localStorage.getItem('theme');

  if (localSettingTheme) {
    initTheme = localSettingTheme;
  }

  const [themeMode, setThemeMode] = useState<string>(initTheme);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setThemeMode(mode);
  };

  const themeToggle = (): void =>
    setMode(themeMode === 'light' ? 'dark' : 'light');

  // return [themeMode, themeToggle];
  return { themeMode, themeToggle };
};
