"use client";

import { useState } from "react";

// Experience cards with Figma-style filter tabs.
export default function WorkGrid({ items }) {
  const categories = ["All", ...new Set(items.map((i) => i.category))];
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <div className="tabs" role="tablist">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            className={`tab ${filter === c ? "is-active" : ""}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="work">
        {shown.map((job) => (
          <article key={`${job.company}-${job.period}`} className="work__card">
            <div className="work__cover">
              <span className="work__period">{job.period}</span>
              <h3 className="work__company">{job.company}</h3>
              <ul className="work__stack">
                {job.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="work__body">
              <p>{job.summary}</p>
              <span className="work__place">{job.place}</span>
            </div>
            <div className="work__footer">
              <span>{job.role}</span>
              <span className="work__cat">{job.category}</span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
