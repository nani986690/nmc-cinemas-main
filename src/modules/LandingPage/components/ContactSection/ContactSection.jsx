import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { useContactForm } from "../../useContactForm";
import {
  Section,
  BgLine,
  Label,
  Heading,
  HeadingItalic,
  Desc,
  ContactItems,
  ContactItem,
  ContactIcon,
  ContactTextLabel,
  ContactTextValue,
  FormCard,
  FieldGrid,
  FieldWrapper,
  Input,
  Textarea,
  FocusLine,
  SubmitBtn,
  SubmitLabel,
  BtnGlow,
  ErrorMsg,
} from "./ContactSection.styles";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Nagiri, Andhra Pradesh, India" },
  { icon: Phone, label: "Phone", value: "+91 9032596016" },
  { icon: Mail, label: "Email", value: "nmchomecinemas@gmail.com" },
];

const ContactSection = () => {
  const { register, handleSubmit, errors, isSubmitting } = useContactForm();
  const [focused, setFocused] = useState(null);

  return (
    <Section id="contact">
      <BgLine $top="50%" />
      <BgLine $top="65%" $reverse />

      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left — Contact Info */}
          <div className="col-12 col-lg-5">
            <Label>Get In Touch</Label>
            <Heading>
              Project <br />
              <HeadingItalic>Inquiry.</HeadingItalic>
            </Heading>
            <Desc>
              Ready to transform your space with world-class audio-visual
              solutions? Our team is available for projects across the UAE and
              internationally.
            </Desc>

            <ContactItems>
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <ContactItem key={label}>
                  <ContactIcon>
                    <Icon size={16} strokeWidth={1} />
                  </ContactIcon>
                  <div>
                    <ContactTextLabel>{label}</ContactTextLabel>
                    <ContactTextValue>{value}</ContactTextValue>
                  </div>
                </ContactItem>
              ))}
            </ContactItems>
          </div>

          {/* Right — Form (presentation only) */}
          <div className="col-12 col-lg-7">
            <FormCard onSubmit={handleSubmit} noValidate>
              <FieldGrid>
                {/* Name */}
                <FieldWrapper>
                  <Input
                    type="text"
                    placeholder="Name"
                    $hasError={!!errors.name}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    {...register("name")}
                  />
                  <FocusLine $active={focused === "name"} />
                  {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
                </FieldWrapper>

                {/* Email */}
                <FieldWrapper>
                  <Input
                    type="email"
                    placeholder="Email"
                    $hasError={!!errors.email}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    {...register("email")}
                  />
                  <FocusLine $active={focused === "email"} />
                  {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                </FieldWrapper>
              </FieldGrid>

              {/* Phone */}
              <FieldWrapper>
                <Input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  $hasError={!!errors.phone}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                  {...register("phone")}
                />
                <FocusLine $active={focused === "phone"} />
                {errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
              </FieldWrapper>

              {/* Message */}
              <FieldWrapper>
                <Textarea
                  rows={4}
                  placeholder="Project Details"
                  $hasError={!!errors.message}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  {...register("message")}
                />
                <FocusLine $active={focused === "message"} />
                {errors.message && (
                  <ErrorMsg>{errors.message.message}</ErrorMsg>
                )}
              </FieldWrapper>

              {errors.root && <ErrorMsg>{errors.root.message}</ErrorMsg>}

              {/* Submit */}
              <SubmitBtn type="submit" disabled={isSubmitting}>
                <BtnGlow />
                <SubmitLabel>
                  {isSubmitting ? "Sending…" : "Send Inquiry"}{" "}
                  <Send size={14} />
                </SubmitLabel>
              </SubmitBtn>
            </FormCard>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
