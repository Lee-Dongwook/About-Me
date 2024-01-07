'use client';

import StyledComponentsRegistry from './registry';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './globalStyles';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};
