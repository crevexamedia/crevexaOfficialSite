import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function CareersForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_bnoncpk", // your service ID
        "template_0wcld5j", // your template ID
        formRef.current,
        "23XMEOcHeb0JjNdN1" // your public key
      )
      .then(() => setStatus("Sent!"))
      .catch(() => setStatus("Something went wrong."));
  };

  return (
    <form
      ref={formRef} // ✅ attach formRef here
      onSubmit={handleSubmit} // ✅ handle submit
      className="max-w-2xl mx-auto mt-8 space-y-4 bg-slate-900/60 p-6 rounded-2xl shadow-lg overflow overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="from_name" // ✅ must match EmailJS template variable
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="from_email" // ✅ must match EmailJS template variable
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <textarea
        name="message" // ✅ must match EmailJS template variable
        placeholder="Cover Letter / Message"
        rows="4"
        required
        className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      {/* File upload won't work directly with EmailJS — use URL instead */}
      <input
        type="file"
        name="resume_file" // optional, but won't send actual file
        className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 
               file:rounded-full file:border-0
               file:text-sm file:font-semibold
               file:bg-gradient-to-r file:from-blue-600 file:to-purple-600 file:text-white
               hover:file:opacity-90 cursor-pointer"
      />

      <input
        type="url"
        name="resume_url" // ✅ must match EmailJS template variable
        placeholder="Resume URL (optional)"
        className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Send
      </button>

      {/* Show status */}
      {status && <p className="text-center text-gray-300 mt-2">{status}</p>}
    </form>
  );
}
