import React from 'react';
import {Theme} from '../../../config';
import {Input} from 'react-native-elements';
import {useController} from 'react-hook-form';

const CustomInput = props => {
  const {control, name, rules, defaultValue} = props;
  const {field} = useController({
    control,
    defaultValue: defaultValue ?? '',
    name,
    rules: rules,
  });

  return (
    <Input
      {...props}
      autoCapitalize="none"
      value={field.value}
      onChangeText={field.onChange}
      labelStyle={Theme.labelStyle}
      inputStyle={[Theme.inputStyle]}
      containerStyle={{paddingHorizontal: 0}}
    />
  );
};

export default CustomInput;
