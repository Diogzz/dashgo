import { FormControl, FormLabel, Input as ChackaInput, InputProps as ChakraInputProps  } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps  {
  name: string;
  label?: string;
}

export function Input({name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChackaInput
        id={name}
        name={name}
        type={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        required
      />
    </FormControl>
  )
}