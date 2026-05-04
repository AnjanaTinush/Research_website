import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_obafwl7", // 🔹 Service ID
        "template_5vsp91i", // 🔹 Template ID
        {
          from_name: form.email,
          to_name: "Anjana Tinush",
          from_email: form.email,
          to_email: "anjanatinush222@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        "mncx4XFocLsGh5bVP" // 🔹 Public Key
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully!");

          setForm({
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <section id="contact" className="section-padding bg-surfaceLight">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-20 items-center">
        {/* LEFT SIDE */}
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl text-textPrimary tracking-widest uppercase">
              Get In <br />
              <span className="text-primary italic font-black">Touch</span>
            </h2>

            <p className="text-xl font-medium text-black border-l-4 border-primary pl-6 py-2">
              "Building the future of predictive infrastructure, <br />
              one microservice at a time."
            </p>
          </div>

          <p className="text-black text-lg leading-relaxed opacity-80 max-w-lg">
            For inquiries or collaboration opportunities in sustainable
            Kubernetes conservation, please reach out to our research team.
          </p>

          <div className="space-y-6">
            <div className="group cursor-pointer">
              <p className="text-black text-xs uppercase tracking-[0.3em] mb-1 opacity-50">
                Email Address
              </p>
              <p className="text-2xl font-bold text-textPrimary group-hover:text-primary transition-colors">
                info@dnamix.com
              </p>
            </div>

            <div className="group cursor-pointer">
              <p className="text-black text-xs uppercase tracking-[0.3em] mb-1 opacity-50">
                Physical Location
              </p>
              <div className="text-lg font-bold text-black group-hover:text-textPrimary transition-colors">
                <p>Sri Lanka Institute of Information Technology,</p>
                <p>New Kandy Rd, Malabe, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex-1 w-full max-w-xl">
          <div className="bg-white p-10 md:p-8 rounded-3xl border border-white relative">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-black ml-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 text-textPrimary border border-gray-200 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-300"
                  required
                />
              </div>

              {/* SUBJECT */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-black ml-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 text-textPrimary border border-gray-200 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-300"
                />
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-black ml-2">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 text-textPrimary border border-gray-200 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none placeholder:text-gray-300"
                  required
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-primary text-white font-black text-xs uppercase tracking-[0.4em] rounded-full hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;