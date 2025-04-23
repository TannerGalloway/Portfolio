import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Github, Linkedin, Send } from "lucide-react";

const ContactMe: React.FC = function ContactMe() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID);

  const [statusMessageVisable, setStatusMessageVisable] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setStatusMessageVisable(true);
    handleSubmit(formState);
  };

  // Auto hide status message after 5 seconds
  useEffect(() => {
    if (state.succeeded || state.errors) {
      if (state.succeeded) {
        setFormState({ name: "", email: "", message: "" });
      }
      const timeoutId = setTimeout(() => {
        setStatusMessageVisable(false);
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [state.succeeded, state.errors]);

  const getSubmitButtonStyle = () => {
    if (state.submitting) {
      return "bg-green-600";
    }
    return "bg-green-500 hover:bg-green-400 hover:scale-103 transition-all duration-300 cursor-pointer";
  };

  return (
    <section id="contact" className="py-20">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-2 text-sm font-mono text-gray-400 mb-2">
          <div className="h-px w-5 bg-green-500"></div>
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 max-w-2xl">
          Have questions or want to discuss potential opportunities? I'd love to
          hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="form-card-container">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors duration-300 contact-card">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

            {state.succeeded && statusMessageVisable ? (
              <div className="bg-green-500 border border-green-500 rounded-lg p-4 text-black mb-4">
                Thank you for your message! I'll get back to you as soon as
                possible.
              </div>
            ) : null}

            {state.errors && statusMessageVisable ? (
              <div className="bg-red-500 border border-red-500 rounded-lg p-4 text-black mb-4">
                An error occurred while submitting the form. Please try again.
              </div>
            ) : null}

            <form onSubmit={formSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  disabled={state.submitting}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                  placeholder="Your name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  disabled={state.submitting}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                  placeholder="your.email@example.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  disabled={state.submitting}
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white resize-none"
                  placeholder="Your message..."
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className={`w-full px-6 py-3 text-black rounded-md flex justify-center ${getSubmitButtonStyle()} contact-button`}>
                {state.submitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="contact-links-card-container">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors duration-300 contact-card">
            <h3 className="text-xl font-bold mb-6">Connect With Me</h3>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/TannerGalloway"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg hover:bg-gray-800 hover:-translate-y-2 transition-all duration-300 social-link">
                <Github className="h-6 w-6 text-white mb-2" />
                <span className="text-sm text-gray-400">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/tanner-galloway-094970183"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg hover:bg-gray-800 hover:-translate-y-2 transition-all duration-300 social-link">
                <Linkedin className="h-6 w-6 text-white mb-2" />
                <span className="text-sm text-gray-400">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
