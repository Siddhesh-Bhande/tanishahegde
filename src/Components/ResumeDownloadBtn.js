import ResumeUrl from "../Assets/Tanisha_Hegde_SWE.pdf";

export default function ResumeDownloadBtn() {
  return (
    <a
      href={ResumeUrl}
      download="Tanisha_Hegde_SWE.pdf"
      className="text-xl bg-blue-600 text-white px-4 py-2 hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 rounded-md "
    >
      Download Resume
    </a>
  );
}
