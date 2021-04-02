import React, { StrictMode } from 'react';
import NorthStarThemeProvider from '../src/components/NorthStarThemeProvider';
import Box from '../src/layouts/Box';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <StrictMode>
        <Box p={2}>
            <NorthStarThemeProvider><Story/></NorthStarThemeProvider>
        </Box>
    </StrictMode>
  )
];