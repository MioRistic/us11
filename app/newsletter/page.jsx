"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Page() {
  const [state, handleSubmit] = useForm("xeorwale");

  if (state.succeeded) {
    return (
      <main style={styles.container}>
        <h1>Thank you!</h1>
        <p>Your message has been sent successfully.</p>
      </main>
    );
  }

  return (
    <main style={styles.container}>
      <h1>Contact Us</h1>
      <p>Fill out the form below and we’ll get back to you.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label} htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          style={styles.input}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />

        <label style={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="5"
          style={styles.textarea}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          style={styles.button}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </main>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "20px",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    resize: "vertical",
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};