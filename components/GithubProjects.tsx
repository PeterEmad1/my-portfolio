"use client";

import { useEffect, useState } from "react";

export default function GithubProjects() {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/PeterEmad1/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        My <span className="text-purple-500">GitHub</span> Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {repos.slice(0, 6).map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            className="p-6 rounded-2xl border border-white/10 bg-[#0b0b18] hover:border-purple-500 transition"
          >
            <h2 className="text-xl font-bold">{repo.name}</h2>
            <p className="text-gray-400 mt-2 text-sm">
              {repo.description || "No description"}
            </p>

            <div className="flex justify-between mt-4 text-sm text-gray-400">
              <span>⭐ {repo.stargazers_count}</span>
              <span>{repo.language}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}