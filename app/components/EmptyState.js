export default function EmptyState({ setOpen, setPrompt }) {
  return (
    <div className="mt-12 sm:mt-24 space-y-6 text-white text-base mx-8 sm:mx-4 sm:text-2xl leading-12 bg-white border-white p-8 rounded">
      <img src="https://th.bing.com/th/id/R.9d6134dbba07101d3e7cf015d69ab88a?rik=63nnUXyk1b9pJg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fmedical-symbol-transparent-background%2fmedical-symbol-transparent-background-23.png&ehk=8LEMcQkkLCfsrv2R3godNSNhRs7pvlAIEJnlSFmvIgU%3d&risl=&pid=ImgRaw&r=0" width={"80"} height={"80"} alt="" />
      <span className="text-bold text-black">
        Welcome to Tobib.ai Assistant!
      </span>
      <p className="text-black">
        I can assist you with any symptoms you may be experiencing.
      </p>
      <p className="text-black">
        What's causing you discomfort?
      </p>
    </div>

  );
}
