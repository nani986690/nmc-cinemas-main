import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { contactSchema } from "./landing.schema";

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (data) => {
    try {
      const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
      const textMessage = `New Project Inquiry!
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "N/A"}

Message:
${data.message}`;

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      toast.success("Redirecting to WhatsApp", {
        description: "Please send the message from your WhatsApp application.",
      });

      reset();
    } catch (err) {
      // Map server errors back to fields when possible
      if (err?.fields) {
        Object.entries(err.fields).forEach(([field, message]) => {
          setError(field, { message });
        });
      } else {
        setError("root", {
          message: "Something went wrong. Please try again.",
        });
      }

      toast.error("Something went wrong", {
        description: "Please try again or email us directly.",
      });
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
