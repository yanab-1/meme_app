import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
  const [query, setQuery] = useState("");
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const fetchMemes = async () => {
      if(query.trim() === "") {
        setMemes([]);
        return;
      }
      const res = await axios.get("https://api.imgflip.com/get_memes");
      setMemes(res.data.data.memes || []); 
    };
    fetchMemes();
  }, [query]);

  const filtered = memes.filter((meme) =>
    meme.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">Emoji Search</h1>

      <Search query={query} handleQuery={setQuery} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8 w-full max-w-6xl">
        {filtered.map((meme) => (
          <Card key={meme.id} meme={meme} />
        ))}
      </div>

      <p className="mt-6 text-slate-600 text-sm">
        Found {filtered.length} memes
      </p>
    </div>
  );
}

export default App;
