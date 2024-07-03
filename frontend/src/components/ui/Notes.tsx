// Notex.tsx
import { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface Note {
  id: number;
  title: string;
  note: string;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [state, setState] = useState<Omit<Note, "id">>({
    title: "",
    note: "",
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleDelete = (id: number) => {
    const leftNotes = notes.filter((note) => note.id !== id);
    setNotes(leftNotes);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newNote: Note = {
      ...state,
      id: Math.random() * 10,
    };

    setNotes([...notes, newNote]);
    setState({
      title: "",
      note: "",
    });
  };

  return (
    <div className="App">
      <h1 className="text-center text-5xl p-5">Notes</h1>
      <div className="create-note w-[400px] mx-auto">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            name="title"
            className="border-2 border-black-200 p-2 mb-2"
            onChange={handleChange}
            value={state.title}
            required
          />
          <textarea
            name="note"
            cols={30}
            rows={5}
            placeholder="note"
            className="border-2 border-black-200 p-2"
            onChange={handleChange}
            value={state.note}
            required
          ></textarea>
          <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-2">Create New Item</button>
        </form>
      </div>

      <div className="notes-container border-t-2 border-blue-300 m-10 flex flex-wrap">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div
              className="note bg-white mt-5 mr-5 w-[300px] p-4 py-10 relative"
              key={note.id}
            >
              <button
                className="delete-note absolute right-2 top-0 font-bold text-2xl text-red-500"
                onClick={() => handleDelete(note.id)}
              >
                x
              </button>
              <h3 className="font-bold text-1xl pb-2">{note.title}</h3>
              <p>{note.note}</p>
            </div>
          ))
        ) : (
          <p className="py-5">No notes available.</p>
        )}
      </div>
    </div>
  );
}

export default Notes;
