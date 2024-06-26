import axios from "axios";
import Form from "../Form";
import {useState} from "react";
import {constructFormData} from "../../utils.js";
import "./styles.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const fields = [
    {
      type: 'text',
      id: 'name',
      label: 'Your Name',
      placeholder: 'Enter your name',
      value: name,
      onChange: (e) => setName(e.target.value),
      required: true,
    },
    {
      type: 'tel',
      id: 'phone',
      label: 'Phone',
      placeholder: 'Enter your phone number',
      pattern:"[0-9]*",
      value: number,
      onChange: (e) => setNumber(e.target.value),
      required: true,
    },
    {
      type: 'email',
      id: 'email',
      label: 'Your Email',
      placeholder: 'Enter your email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
      required: true,
    },
    {
      type: 'textarea',
      id: 'message',
      label: 'Write Your Message Here',
      placeholder: 'Enter your message',
      cols: 30,
      rows: 6,
      value: message,
      onChange: (e) => setMessage(e.target.value),
      required: true,
    },
  ];

  const resetForm = () => {
    setName("");
    setNumber("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = `Query:
        Name: ${name} \n
        Phone: ${number} \n
        Email: ${email} \n
        Message: ${message} \n`;

    const formData = constructFormData({
      to: 'vprince001@gmail.com',
      subject: "Query for IT Services",
      text
    });

    try {
      await axios.post("http://localhost:8080/contact-form", formData)
      resetForm();
      alert("Form submitted successfully!");
    } catch (error) {
      alert("Error sending email. Please try again.");
    }
  };

  return (
    <div className="contact-form">
      <Form fields={fields} onSubmit={handleSubmit} />
    </div>
  );
};

export default ContactForm;
