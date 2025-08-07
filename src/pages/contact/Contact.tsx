import { useState } from "react";
import SocialLinks from "../../components/SocialLinks";
import Motion from "../../components/Motion"; // المسار حسب مكان ملفك

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    setOpenDialog(true);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent("Portfolio Contact Form");
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);

    window.location.href = `mailto:anasadnanabujaber@gmail.com?subject=${subject}&body=${body}`;
    setOpenDialog(false);
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-8">
      <Motion yValue={-20}>
        <h2 className="text-2xl md:text-3xl font-bold text-left">
          Let's Get in Touch ✉️
        </h2>
      </Motion>

      <Motion yValue={10} delay={0.1}>
        <p className="text-sm md:text-base text-gray-700 max-w-xl leading-relaxed text-left">
          👋 Whether you're looking to collaborate, have a question, or just
          want to say hello — I'd love to hear from you! <br />
          Reach out via social media or drop a message directly through the form
          below.
        </p>
      </Motion>

      <Motion yValue={10} delay={0.2}>
        <div className="flex justify-start">
          <SocialLinks />
        </div>
      </Motion>

      <Motion yValue={20} delay={0.3}>
        <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full text-sm md:text-base border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            className="w-full text-sm md:text-base border border-gray-300 rounded-lg px-4 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#001E62] hover:bg-[#00184F] text-white font-medium px-6 py-2 rounded-lg transition-colors text-sm md:text-base"
          >
            Send Message
          </button>
        </form>
      </Motion>

      {openDialog && (
        <Motion yValue={-10}>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6">
              <h3 className="text-base md:text-lg font-semibold mb-4">
                Confirm Send
              </h3>
              <p className="text-sm md:text-base mb-6">
                Are you sure you want to send this message to Anas?
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setOpenDialog(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition text-sm md:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendEmail}
                  className="px-4 py-2 rounded-lg bg-[#001E62] hover:bg-[#00184F] text-white transition text-sm md:text-base"
                >
                  Yes, Send it
                </button>
              </div>
            </div>
          </div>
        </Motion>
      )}
    </div>
  );
}

export default Contact;
