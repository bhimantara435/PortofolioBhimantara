const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]">
      <div className="relative flex flex-col items-center gap-5">
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-cyan-400/20 border-t-cyan-400"></div>

        <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 bg-clip-text text-2xl font-black tracking-widest text-transparent">
          BHIMANTARA
        </h1>

        <p className="text-sm font-medium text-slate-400">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
};

export default Preloader;