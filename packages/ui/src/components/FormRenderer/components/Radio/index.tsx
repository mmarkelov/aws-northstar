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
import { FC, memo } from 'react';
import RadioGroup from '@cloudscape-design/components/radio-group';
import FormField from '@cloudscape-design/components/form-field';
import useFieldApi, { UseFieldApiConfig } from '@data-driven-forms/react-form-renderer/use-field-api';
import getErrorText from '../../utils/getErrorText';
import { Option } from '../../types';

const Radio: FC<UseFieldApiConfig> = ({ component, ...props }) => {
    const {
        label,
        description,
        helperText,
        info,
        i18nStrings,
        stretch,
        secondaryControl,

        options,
        input,
        isRequired,
        isDisabled,

        validateOnMount,
        meta: { error, submitFailed },
        showError,

        ...rest
    } = useFieldApi(props);

    const errorText = getErrorText(validateOnMount, submitFailed, showError, error);

    return (
        <FormField
            label={label}
            description={description}
            errorText={errorText}
            constraintText={helperText}
            info={info}
            i18nStrings={i18nStrings}
            stretch={stretch}
            secondaryControl={secondaryControl}
        >
            <RadioGroup
                {...rest}
                {...input}
                items={options?.map((option: Option) => ({
                    ...option,
                    disabled: option.disabled ?? isDisabled,
                    controlId: `${input.name}-${option.value}`,
                }))}
                ariaRequired={isRequired}
                value={input.value}
                onChange={({ detail }) => {
                    input.onChange(detail.value);
                }}
            />
        </FormField>
    );
};

export default memo(Radio);
