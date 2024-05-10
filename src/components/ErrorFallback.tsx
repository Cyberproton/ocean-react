export const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <button
        className="h-10 px-6 font-semibold rounded-md bg-black text-white"
        onClick={() => {
          window.location.assign("https://www.google.com");
        }}
      >
        Refresh
      </button>
    </div>
  );
};
