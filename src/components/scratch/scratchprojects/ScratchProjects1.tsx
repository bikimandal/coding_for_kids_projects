function ScratchProjects1() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
        Scratch Project 1
      </h1>
      {/* <div className="w-full max-w-3xl aspect-w-16 aspect-h-9 relative bg-gray-200 shadow-lg rounded-lg overflow-hidden"> */}
      <iframe
        src="https://scratch.mit.edu/projects/951288241/embed"
        className="absolute top-0 left-0 w-full h-full"
        allowFullScreen
      ></iframe>
      {/* </div> */}
    </div>
  );
}

export default ScratchProjects1;
