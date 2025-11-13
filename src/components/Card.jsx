function Card({ meme }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 text-center p-4">
      <img
        src={meme.url}
        alt={meme.name}
        className="rounded-lg w-full h-32 object-cover mb-2"
      />
      <h3 className="text-sm font-medium text-slate-800 truncate">{meme.name}</h3>
    </div>
  );
}

export default Card;
