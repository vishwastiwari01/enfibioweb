"use client";

import { useState } from "react";
import { FaRegPaperPlane, FaRegHeart, FaHeart, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { FOUNDERS } from "@/lib/data/founders";

type Founder = typeof FOUNDERS[0];

interface PostCardProps {
  founder: Founder;
}

export const PostCard: React.FC<PostCardProps> = ({ founder }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLike = () => setLiked((prev) => !prev);
  const handleBookmark = () => setBookmarked((prev) => !prev);

  return (
    <div className="w-full rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] shadow-2xl p-5 hover:border-[var(--border-mid)] transition-colors">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className="flex items-center justify-center shrink-0 rounded-full font-display font-bold text-lg"
          style={{
            width: 48,
            height: 48,
            background: `${founder.color}15`,
            border: `1px solid ${founder.color}40`,
            color: founder.color,
          }}
        >
          {founder.initials}
        </div>
        <div>
          <h3 className="font-display font-semibold text-[var(--text)] tracking-wide flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            {founder.name}
            <span className="flex items-center gap-2 opacity-60 text-xs font-mono">
              <small>@{founder.name.split(" ")[0].toLowerCase()}</small>
              <span className="hidden sm:inline">·</span>
              <small className="hidden sm:inline">Clearance: {founder.layer}</small>
            </span>
          </h3>
          <div className="text-[11px] font-mono text-[var(--text-muted)] tracking-widest uppercase mt-0.5">
            {founder.role}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col gap-4">
        <blockquote className="border-l-2 pl-3 py-1 font-sans-ui italic text-sm text-[var(--text-muted)]" style={{ borderColor: `${founder.color}50` }}>
          "{founder.ethos}"
        </blockquote>
        
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-[var(--text-dim)] font-sans-ui">
          {founder.specialty}
        </p>

        {/* Empty space where image would be, avoiding images as requested */}
        {/* <div className="h-2 rounded bg-white/5 w-1/4 mt-2"></div> */}
      </div>

      {/* Actions */}
      <div className="mt-6 flex justify-evenly gap-2 border-t border-[var(--border)] pt-4">
        <button
          onClick={handleLike}
          className="flex grow items-center justify-center gap-2.5 rounded-xl px-4 py-2 transition hover:bg-[var(--muted)] text-[var(--text-muted)] hover:text-[var(--text)]"
        >
          {liked ? <FaHeart color="#ef4444" /> : <FaRegHeart />}
          <span className="font-medium text-xs tracking-wide max-sm:hidden">
            {liked ? "Acknowledged" : "Acknowledge"}
          </span>
        </button>

        <button
          onClick={handleBookmark}
          className="flex grow items-center justify-center gap-2.5 rounded-xl px-4 py-2 transition hover:bg-[var(--muted)] text-[var(--text-muted)] hover:text-[var(--text)]"
        >
          {bookmarked ? <FaBookmark color="#3b82f6" /> : <FaRegBookmark />}
          <span className="font-medium text-xs tracking-wide max-sm:hidden">
            {bookmarked ? "Archived" : "Archive"}
          </span>
        </button>

        <button className="flex grow items-center justify-center gap-2.5 rounded-xl px-4 py-2 transition hover:bg-[var(--muted)] text-[var(--text-muted)] hover:text-[var(--text)]">
          <FaRegPaperPlane />
          <span className="font-medium text-xs tracking-wide max-sm:hidden">
            Uplink
          </span>
        </button>
      </div>
    </div>
  );
};
