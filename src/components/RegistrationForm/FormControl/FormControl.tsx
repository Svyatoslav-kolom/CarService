import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";
import { FormType } from "../../../types/formType";

interface Props {
  field: string;
  formData: FormType;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const FormCntrl: FC<Props> = ({ field, formData, handleChange, error }) => {
  const getInputType = (field: string) => {
    if (field === "email") return "email";
    if (field === "phone") return "tel";
    return "text";
  };

  return (
    <FormControl isRequired isInvalid={!!error} fontSize="20px">
      <FormLabel mb={0} textAlign="center">
        {field.charAt(0).toUpperCase() + field.slice(1)}
      </FormLabel>

      <Input
        type={getInputType(field)}
        name={field}
        value={formData[field as keyof FormType]}
        onChange={handleChange}
        boxShadow="none"
        border="1px solid black"
        bg="primary.white"
        _active={{ border: "1px solid black", boxShadow: "none" }}
        _focus={{ border: "1px solid black", boxShadow: "none" }}
        _hover={{ border: "1px solid black", boxShadow: "none" }}
      />

      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};
