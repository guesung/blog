'use client';
import { ClassNameType } from '@guesung/constants';
import { cn } from '@guesung/utils';
import { PropsWithChildren, createContext, useContext, useState } from 'react';

interface ThemeProviderProps extends ClassNameType {
  initialTheme: 'dark' | 'light';
}

export type Theme = 'dark' | 'light';

const ThemeContext = createContext({
  theme: 'dark',
  setTheme: (theme: Theme) => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default function ThemeProvider({
  children,
  initialTheme,
  className,
}: PropsWithChildren<ThemeProviderProps>) {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={cn(
          { dark: theme === 'dark' },
          'text-body3 bg-white-1 text-black-1 min-h-screen',
          className
        )}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
