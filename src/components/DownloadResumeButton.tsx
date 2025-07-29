import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

function DownloadResumeButton() {
  return (
    <a
      href="/AnasAbuJaber_CV.pdf"
      download
      className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#0d1b2a] px-6 py-3 text-white font-medium text-base no-underline transition-colors duration-200 hover:bg-[#08121f]"
    >
      <ArrowDownTrayIcon className="w-5 h-5" />
      📄 Download My Resume
    </a>
  );
}

export default DownloadResumeButton;
