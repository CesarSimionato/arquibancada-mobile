import { forwardRef } from 'react';
import { Text, TextInput, View } from 'react-native';

import { colors } from '@/styles/colors';

import { cn } from '../lib/utils';

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelClasses, inputClasses, ...props }, ref) => (
    <View className={cn('w-full flex flex-col gap-1.5', className)}>
      {label && <Text className={cn('text-base text-white font-bold', labelClasses)}>{label}</Text>}
      <TextInput
        className={cn(
          inputClasses,
          'py-3 px-4 rounded-lg text-white placeholder:text-gray-500 border-2 border-primary-800 focus:border-primary-500'
        )}
        selectionColor={colors.primary[500]}
        {...props}
      />
    </View>
  )
);

export { Input };
