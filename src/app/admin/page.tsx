"use client";

import { useState, useEffect } from "react";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
}

export default function AdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  // Load posts from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("blogPosts");
      if (stored) setPosts(JSON.parse(stored));
    }
  }, []);

  // Save posts to localStorage on change
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("blogPosts", JSON.stringify(posts));
    }
  }, [posts]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    if (editingId !== null) {
      setPosts((prev) =>
        prev.map((p) =>
          p.id === editingId ? { ...p, title, content } : p
        )
      );
      setEditingId(null);
    } else {
      setPosts((prev) => [
        {
          id: Date.now(),
          title,
          content,
          date: new Date().toLocaleDateString(),
        },
        ...prev,
      ]);
    }
    setTitle("");
    setContent("");
  }

  function handleEdit(post: BlogPost) {
    setTitle(post.title);
    setContent(post.content);
    setEditingId(post.id);
  }

  function handleDelete(id: number) {
    setPosts((prev) => prev.filter((p) => p.id !== id));
    if (editingId === id) {
      setTitle("");
      setContent("");
      setEditingId(null);
    }
  }

  return (
    <main className="min-h-screen py-16 px-4 bg-primary text-white">
      <h1 className="text-4xl font-bold mb-6 text-accent">Admin Panel</h1>
      <p className="text-lg text-gray-300 mb-8">Manage blog posts and site content here.</p>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-secondary rounded-xl p-6 shadow-lg mb-10 flex flex-col gap-4">
        <input
          className="px-4 py-2 rounded bg-primary text-white border border-secondary/40 focus:ring-2 focus:ring-accent"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="px-4 py-2 rounded bg-primary text-white border border-secondary/40 focus:ring-2 focus:ring-accent min-h-[120px]"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="bg-accent text-primary font-bold px-6 py-2 rounded-full shadow hover:bg-accent-light transition-all"
        >
          {editingId !== null ? "Update Post" : "Add Post"}
        </button>
        {editingId !== null && (
          <button
            type="button"
            className="text-sm text-gray-400 hover:text-accent mt-2"
            onClick={() => {
              setTitle("");
              setContent("");
              setEditingId(null);
            }}
          >
            Cancel Edit
          </button>
        )}
      </form>
      <section className="max-w-2xl mx-auto grid gap-6">
        {posts.length === 0 && (
          <div className="text-gray-500 text-center">No blog posts yet.</div>
        )}
        {posts.map((post) => (
          <div key={post.id} className="bg-secondary rounded-xl p-4 shadow border border-secondary/40 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-accent">{post.title}</h2>
              <div className="text-xs text-gray-400">{post.date}</div>
            </div>
            <p className="text-gray-200 whitespace-pre-line">{post.content}</p>
            <div className="flex gap-4 mt-2">
              <button
                className="text-sm text-accent hover:underline"
                onClick={() => handleEdit(post)}
              >
                Edit
              </button>
              <button
                className="text-sm text-red-400 hover:underline"
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

