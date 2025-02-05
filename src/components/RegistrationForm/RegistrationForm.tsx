import { Box, Button, VStack, Text } from "@chakra-ui/react";
import { useState, ChangeEvent, FormEvent } from "react";
import { sendTelegramMessage } from "../../services/telegramService";
import { FormType } from "../../types/formType";
import { FormCntrl } from "./FormControl";

interface RegistrationFormProps {
  onSuccess: () => void;
}

export const RegistrationForm = ({ onSuccess }: RegistrationFormProps) => {
  const [formData, setFormData] = useState<FormType>({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fields: (keyof FormType)[] = ["name", "email", "phone"];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    fields.forEach((field) => {
      const value = formData[field];

      if (!value) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      } else {
        if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[field] = "Invalid email format";
        }
        if (field === "phone" && !/^\d{10,15}$/.test(value)) {
          newErrors[field] = "Invalid phone number (10-15 digits)";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await sendTelegramMessage(formData.name, formData.email, formData.phone);
      alert("Registration successfully sent!");
      setFormData({ name: "", email: "", phone: "" });
      onSuccess();
    } catch (err) {
      setErrors({ form: err instanceof Error ? err.message : "Failed to send registration data." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      pb={6}
      borderRadius="md"
      boxShadow="lg"
      mx="auto"
    >
      <form onSubmit={handleSubmit} noValidate>
        <VStack spacing={4}>
          {fields.map((field) => (
            <FormCntrl
              key={field}
              field={field}
              formData={formData}
              handleChange={handleChange}
              error={errors[field]}
            />
          ))}

          {errors.form && <Text color="red.500">{errors.form}</Text>}

          <Button type="submit" colorScheme="red" width="full" mt={4} isLoading={isSubmitting}>
            Register
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
