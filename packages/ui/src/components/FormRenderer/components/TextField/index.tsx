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
import Input, { InputProps } from '@cloudscape-design/components/input';
import FormField from '@cloudscape-design/components/form-field';
import useFieldApi, { UseFieldApiConfig } from '@data-driven-forms/react-form-renderer/use-field-api';
import useUniqueId from '../../../../hooks/useUniqueId';
import getErrorText from '../../utils/getErrorText';

const TextField: FC<UseFieldApiConfig> = (props) => {
    const {
        label,
        description,
        helperText,
        info,
        i18nStrings,
        stretch,
        secondaryControl,

        type,
        input,
        isRequired,
        isDisabled,
        isReadOnly,

        validateOnMount,
        meta: { error, submitFailed },
        showError,

        ...rest
    } = useFieldApi(props);
    const controlId = useUniqueId(input.name);
    const errorText = getErrorText(validateOnMount, submitFailed, showError, error);
    return (
        <FormField
            controlId={controlId}
            label={label}
            description={description}
            errorText={errorText}
            constraintText={helperText}
            info={info}
            i18nStrings={i18nStrings}
            stretch={stretch}
            secondaryControl={secondaryControl}
        >
            <Input
                {...rest}
                {...input}
                controlId={controlId}
                disabled={isDisabled}
                readOnly={isReadOnly}
                ariaRequired={isRequired}
                type={(type as InputProps.Type) || 'text'}
                invalid={!!errorText}
                onChange={({ detail }) => input.onChange(detail.value)}
                onBlur={() => input.onBlur()}
                onFocus={() => input.onFocus()}
            />
        </FormField>
    );
};

export default memo(TextField);
