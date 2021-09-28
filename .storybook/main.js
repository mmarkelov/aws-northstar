/** *******************************************************************************************************************
  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
  
  Licensed under the Apache License, Version 2.0 (the "License").
  You may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
      http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.                                                                              *
 ******************************************************************************************************************** */
const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
    webpackFinal: async (config) => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    '@emotion/core': toPath('node_modules/@emotion/react'),
                    'emotion-theming': toPath('node_modules/@emotion/react'),
                },
            },
        };
    },
    stories: [
        '../src/components/**/*.stories.tsx',
        '../src/layouts/**/*.stories.tsx',
        '../src/charts/**/*.stories.tsx',
        '../src/advanced/**/*.stories.tsx',
    ],
    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-links',
        '@storybook/addon-storysource',
        '@storybook/addon-a11y',
        '@storybook/addon-viewport/register',
    ],
};
