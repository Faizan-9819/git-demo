"use client";

import { useState } from "react";
import FeaturesHero from "./FeaturesHero";
import FeatureFold, { WebsiteAccordion } from "./FeatureFold";
import VideoLightbox, { type LightboxState } from "./VideoLightbox";
import {
  AnimationStyleProvider,
  ANIMATION_STYLE_DEFAULT,
  type AnimationStyle,
} from "./FeatureReveal";
import WorkflowFold from "./WorkflowFold";
import ManagedFold from "./ManagedFold";
import FeaturesFaq from "./FeaturesFaq";
import FeaturesCta from "./FeaturesCta";
import { FEATURE_FOLDS, WEBSITE_ACCORDION, WEBSITE_FOLD } from "./data";

export default function FeaturesClient({
  animationStyle = ANIMATION_STYLE_DEFAULT,
}: {
  animationStyle?: AnimationStyle;
}) {
  const [video, setVideo] = useState<LightboxState | null>(null);

  return (
    <AnimationStyleProvider value={animationStyle}>
      <main
        id="main"
        // No overflow-x-hidden: it would make <main> a scroll container and break
        // the sticky video columns. html already clips the x-axis.
        className="relative flex min-h-screen flex-col gap-[14px] bg-white pt-[14px]"
      >
        <FeaturesHero />

        <FeatureFold content={WEBSITE_FOLD} onOpenVideo={setVideo}>
          <WebsiteAccordion rows={WEBSITE_ACCORDION} />
        </FeatureFold>

        {FEATURE_FOLDS.map((fold) => (
          <FeatureFold key={fold.id} content={fold} onOpenVideo={setVideo} />
        ))}

        <WorkflowFold />
        <ManagedFold />
        <FeaturesFaq />
        <FeaturesCta />

        <VideoLightbox video={video} onClose={() => setVideo(null)} />
      </main>
    </AnimationStyleProvider>
  );
}
