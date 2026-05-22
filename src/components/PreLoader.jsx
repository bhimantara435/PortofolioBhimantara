const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]">
      <div className="flex flex-col items-center gap-6">
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-cyan-500/20 border-t-cyan-400"></div>

        <div className="text-center">
          <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-3xl font-black tracking-[0.25em] text-transparent">
            BHIMANTARA
          </h1>
          <p className="mt-5 text-sm font-medium tracking-wide text-slate-400">
            Loading Portofolio...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;