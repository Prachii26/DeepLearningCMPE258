"use client";

import { useState, useEffect, useMemo } from "react";
import { Note } from "@/types/note";

const STORAGE_KEY = "notes_app_data";

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load notes on startup
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setNotes(parsed);
        }
      } catch (e) {
        console.error("Failed to parse notes from localStorage", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Persist notes (debounced)
  useEffect(() => {
    if (isLoaded) {
      const timeoutId = setTimeout(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [notes, isLoaded]);

  const filteredNotes = useMemo(() => {
    return notes
      .filter(
        (note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.body.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => b.updatedAt - a.updatedAt);
  }, [notes, searchQuery]);

  const selectedNote = useMemo(
    () => notes.find((n) => n.id === selectedNoteId) || null,
    [notes, selectedNoteId]
  );

  const createNote = () => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: "New Note",
      body: "",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    setNotes((prev) => [newNote, ...prev]);
    setSelectedNoteId(newNote.id);
  };

  const updateNote = (id: string, updates: Partial<Pick<Note, "title" | "body">>) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, ...updates, updatedAt: Date.now() }
          : note
      )
    );
  };

  const deleteNote = (id: string) => {
    if (confirm("Are you sure you want to delete this note?")) {
      setNotes((prev) => prev.filter((n) => n.id !== id));
      if (selectedNoteId === id) {
        setSelectedNoteId(null);
      }
    }
  };

  if (!isLoaded) return null;

  return (
    <div className="flex h-screen bg-white text-gray-900">
      {/* Sidebar */}
      <div className="w-80 border-r flex flex-col bg-gray-50">
        <div className="p-4 border-b space-y-4">
          <button
            onClick={createNote}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            + New Note
          </button>
          <input
            type="text"
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {filteredNotes.length === 0 ? (
            <div className="p-8 text-center text-gray-400 text-sm">
              No notes found
            </div>
          ) : (
            filteredNotes.map((note) => (
              <div
                key={note.id}
                onClick={() => setSelectedNoteId(note.id)}
                className={`p-4 cursor-pointer border-b hover:bg-gray-100 transition-colors ${selectedNoteId === note.id ? "bg-blue-50 border-l-4 border-l-blue-600" : ""
                  }`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold truncate pr-2">
                    {note.title || "Untitled"}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNote(note.id);
                    }}
                    className="text-gray-400 hover:text-red-500 text-xs"
                  >
                    Delete
                  </button>
                </div>
                <p className="text-sm text-gray-500 truncate mt-1">
                  {note.body || "No content"}
                </p>
                <div className="text-[10px] text-gray-400 mt-2">
                  {new Date(note.updatedAt).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {selectedNote ? (
          <div className="flex-1 flex flex-col p-8 space-y-4">
            <input
              type="text"
              value={selectedNote.title}
              onChange={(e) => updateNote(selectedNote.id, { title: e.target.value })}
              placeholder="Note Title"
              className="text-3xl font-bold border-none focus:outline-none placeholder-gray-300"
            />
            <textarea
              value={selectedNote.body}
              onChange={(e) => updateNote(selectedNote.id, { body: e.target.value })}
              placeholder="Start writing..."
              className="flex-1 resize-none border-none focus:outline-none text-lg leading-relaxed placeholder-gray-300"
            />
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400 flex-col space-y-2">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <p>Select a note or create a new one</p>
          </div>
        )}
      </div>
    </div>
  );
}
