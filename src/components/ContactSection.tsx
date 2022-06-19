import * as React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";




const initialValues = {
  name: "",
  email: "",
  message: "",
};

const schema = yup.object().shape({
  name: yup.string().min(2).max(255),
  email: yup.string().email().min(2).max(255),
  message: yup.string().min(5),
});

type State = "loading" | "completed" | "error";
export const ContactSection = () => {

  const [setState] = React.useState<State | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: initialValues, resolver: yupResolver(schema) });

  async function onSubmit(data: typeof initialValues) {
    setState("loading");

    const res = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });

    if (res.ok) {
      setState("completed");
      setMessage("Message successfully sent! You should get an email with a confirmation.");
      reset();
    } else {
      setState("error");
      if (res.status === 429) {
        setMessage("Woah! You're moving to fast. Please try again in several minutes.");
      } else {
        setMessage("Could not sent the email. Please try again later.");
      }
    }
  }

  return (
    <section className="pb-5 mt-10" id="contact">
     
    </section>
  );
};
