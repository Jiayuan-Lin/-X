"use client";

import Image from "next/image";

const sharePlatforms = [
  { label: "小红书", src: "/share-xiaohongshu.jpg", scale: "scale-[1.3333]" },
  { label: "X", src: "/share-x.jpg" },
  { label: "Instagram", src: "/share-instagram.jpg", scale: "scale-[0.6667]" },
  { label: "Threads", src: "/share-threads.jpg" },
];

export function MemoryBookShareStrip() {
  const shareCurrentPage = async () => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const shareData = {
      title: "印途 X · 旅行回忆地图",
      text: "把这张旅行回忆地图分享给你，一起看看这些被保存下来的旅途片段。",
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      }
    } catch {
      // Ignore user-cancelled share actions.
    }
  };

  const shareCollaborationInvite = async () => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const inviteText = `一起看看这张旅行回忆地图吧：${shareUrl}`;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(inviteText);
      }
    } catch {
      // Silently ignore clipboard failures.
    }
  };

  return (
    <article className="surface flex flex-col gap-5 rounded-[28px] p-5 md:flex-row md:items-center md:justify-between md:p-6">
      <div className="space-y-3">
        <p className="panel-label">共享地图</p>
        <div className="flex flex-wrap items-center gap-3">
          {sharePlatforms.map((platform) => (
            <div
              key={platform.label}
              className="inline-flex items-center gap-3 rounded-full border border-[rgba(220,205,191,0.58)] bg-[rgba(255,255,255,0.82)] px-3 py-2"
            >
              <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-[10px] bg-[rgba(255,255,255,0.94)]">
                <Image
                  src={platform.src}
                  alt={platform.label}
                  fill
                  className={`object-cover ${platform.scale ?? ""}`}
                  sizes="40px"
                />
              </span>
              <span className="text-[12px] font-medium text-[color:var(--ink)]">
                {platform.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={shareCurrentPage} className="action-button">
          分享地图
          <span>→</span>
        </button>
        <button type="button" onClick={shareCollaborationInvite} className="ghost-button">
          邀请协作
        </button>
      </div>
    </article>
  );
}
