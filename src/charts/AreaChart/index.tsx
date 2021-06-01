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

import React from 'react';
import { AreaChart as Chart, Area as AreaComponent, AreaProps } from 'recharts';
import northStarChartWrapper, { BaseChartProps } from '../BaseChart';
import withNorthStarChart from '../withNorthStarChart';

/**
 * Renders an Area Chart.
 */
const AreaChart = (props: BaseChartProps) => {
    const NorthStarAreaChart = northStarChartWrapper(Chart);
    return <NorthStarAreaChart {...props} />;
};

const Area = withNorthStarChart<AreaProps>(AreaComponent, 'monotone');

export default AreaChart;
export { Area };
export { NORTHSTAR_COLORS } from '../../themes';
export {
    Tooltip,
    Legend,
    ReferenceArea,
    ReferenceDot,
    Customized,
    Brush,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Label,
    LabelList,
} from 'recharts';
