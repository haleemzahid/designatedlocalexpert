'use client';

import * as React from 'react';

import { GridSection } from '@/components/marketing/fragments/grid-section';

interface NTClipboardVideoProps {
  videoUrl?: string | null;
}

// Function to extract YouTube video ID from various URL formats
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
    /youtube\.com\/v\/([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/,
    /youtu\.be\/([^&\n?#]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

export function NTClipboardVideo({
  videoUrl
}: NTClipboardVideoProps): React.JSX.Element {
  // Default fallback video ID if no URL is provided or URL is invalid
  const defaultVideoId = '9PRAd-5nX3k';

  let videoId = defaultVideoId;

  if (videoUrl) {
    const extractedId = getYouTubeVideoId(videoUrl);
    if (extractedId) {
      videoId = extractedId;
    }
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <GridSection hideVerticalGridLines>
      <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              See EDGEBIC in Action
            </h2>
            <p className="mb-12 text-xl text-muted-foreground">
              Watch how EDGEBIC transforms complex production planning into a
              simple, efficient process
            </p>

            <div className="relative mx-auto max-w-4xl">
              <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl">
                <iframe
                  className="aspect-video w-full"
                  src={embedUrl}
                  title="EDGEBIC Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Video description */}
              <div className="mt-8 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800">
                  <h3 className="mb-2 text-lg font-semibold">
                    Step-by-Step Tutorial
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Follow along as we demonstrate each feature and show you
                    exactly how to use EDGEBIC effectively.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800">
                  <h3 className="mb-2 text-lg font-semibold">
                    Real-World Examples
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    See how EDGEBIC handles actual production data and
                    transforms complex scheduling into organized workflows.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800">
                  <h3 className="mb-2 text-lg font-semibold">
                    Time-Saving Tips
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn advanced techniques and shortcuts that will help you
                    work faster and more efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
