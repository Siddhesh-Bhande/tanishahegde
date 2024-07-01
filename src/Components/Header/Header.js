import NavBar from "../Navigators/Navbar";

export default function Header({
  setShowAbout,
  showAbout,
  showPrograms,
  setShowPrograms,
}) {
  return (
    <div className="p-4 lg:px-12">
      <div className="inline-block w-3/5">
        <img
          className="h-24 w-24 lg:h-32 lg:w-32 float-left mr-2"
          alt="Tanisha Hegde"
        ></img>
        <h1 className="text-3xl lg:text-5xl font-bold font-serif text-blue-600">
          Tanisha Hegde
        </h1>
        <h1 className="text-2xl lg:text-3xl text-slate-500 italic font-serif">
          Software Engineer
        </h1>
      </div>
      <NavBar
        showAbout={showAbout}
        showPrograms={showPrograms}
        setShowAbout={setShowAbout}
        setShowPrograms={setShowPrograms}
      ></NavBar>
    </div>
  );
}
