<script setup lang="ts">
import { computed } from "vue";

import dataSearch from "../assets/master-template/decorative/data-search.png";
import companySizeCard from "../assets/master-template/decorative/company-size-card.png";
import priorityCard from "../assets/master-template/decorative/priority-card.png";
import magnifier from "../assets/master-template/decorative/magnifier.png";
import blobLavender from "../assets/master-template/decorative/blob-lavender.svg";
import blobSoftgreen from "../assets/master-template/decorative/blob-softgreen.svg";
import asterisk from "../assets/master-template/decorative/asterisk.svg";
import squiggle from "../assets/master-template/decorative/squiggle.svg";
import downArrow from "../assets/master-template/decorative/down-arrow.svg";
import blobRose from "../assets/master-template/decorative/blob-rose.svg";
import blobPurple from "../assets/master-template/decorative/blob-purple.svg";
import squiggleWide from "../assets/master-template/decorative/squiggle-wide.svg";
import rocketLine from "../assets/master-template/decorative/rocket-line.svg";
import analyticsDashboard from "../assets/master-template/product/analytics-dashboard.png";
import businessCardScanPhone from "../assets/master-template/product/business-card-scan-phone.png";
import contactCapturePhone from "../assets/master-template/product/contact-capture-phone.png";
import dashboardBuilder from "../assets/master-template/product/dashboard-builder.png";
import reportPhone from "../assets/master-template/product/report-phone.png";
import visitreportPhone from "../assets/master-template/product/visitreport-phone.png";
import webappComposite from "../assets/master-template/product/webapp-composite.png";
import automationBot from "../assets/master-template/mascot/automation-bot.svg";
import bot from "../assets/master-template/mascot/bot.svg";
import botHello from "../assets/master-template/mascot/bot-hello.svg";
import botLove from "../assets/master-template/mascot/bot-love.svg";
import broom from "../assets/master-template/mascot/broom.svg";
import contactCard from "../assets/master-template/mascot/contact-card.svg";
import dashboardChat from "../assets/master-template/mascot/dashboard-chat.svg";
import dataagentOrb from "../assets/master-template/mascot/dataagent-orb.svg";
import document from "../assets/master-template/mascot/document.svg";
import documentHold from "../assets/master-template/mascot/document-hold.svg";
import documentWave from "../assets/master-template/mascot/document-wave.svg";
import documents from "../assets/master-template/mascot/documents.svg";
import finishFlag from "../assets/master-template/mascot/finish-flag.svg";
import hand from "../assets/master-template/mascot/hand.svg";
import head from "../assets/master-template/mascot/head.svg";
import idCard from "../assets/master-template/mascot/id-card.svg";
import magicWand from "../assets/master-template/mascot/magic-wand.svg";
import mobileGrowth from "../assets/master-template/mascot/mobile-growth.svg";
import ok from "../assets/master-template/mascot/ok.svg";
import peace from "../assets/master-template/mascot/peace.svg";
import raisedHand from "../assets/master-template/mascot/raised-hand.svg";
import sideProfile from "../assets/master-template/mascot/side-profile.svg";
import voicePhone from "../assets/master-template/mascot/voice-phone.svg";
import wave from "../assets/master-template/mascot/wave.svg";

const assets = {
  decorative: {
    "data-search": dataSearch,
    "company-size-card": companySizeCard,
    "priority-card": priorityCard,
    magnifier,
    "blob-lavender": blobLavender,
    "blob-softgreen": blobSoftgreen,
    asterisk,
    squiggle,
    "down-arrow": downArrow,
    "blob-rose": blobRose,
    "blob-purple": blobPurple,
    "squiggle-wide": squiggleWide,
    "rocket-line": rocketLine,
  },
  product: {
    "analytics-dashboard": analyticsDashboard,
    "business-card-scan-phone": businessCardScanPhone,
    "contact-capture-phone": contactCapturePhone,
    "dashboard-builder": dashboardBuilder,
    "report-phone": reportPhone,
    "visitreport-phone": visitreportPhone,
    "webapp-composite": webappComposite,
  },
  mascot: {
    "automation-bot": automationBot,
    bot,
    "bot-hello": botHello,
    "bot-love": botLove,
    broom,
    "contact-card": contactCard,
    "dashboard-chat": dashboardChat,
    "dataagent-orb": dataagentOrb,
    document,
    "document-hold": documentHold,
    "document-wave": documentWave,
    documents,
    "finish-flag": finishFlag,
    hand,
    head,
    "id-card": idCard,
    "magic-wand": magicWand,
    "mobile-growth": mobileGrowth,
    ok,
    peace,
    "raised-hand": raisedHand,
    "side-profile": sideProfile,
    "voice-phone": voicePhone,
    wave,
  },
} as const;

type AssetKind = keyof typeof assets;

const props = withDefaults(
  defineProps<{
    kind?: AssetKind;
    name: string;
    alt?: string;
    height?: number | string;
    width?: number | string;
    decorative?: boolean;
  }>(),
  { kind: "mascot", decorative: false },
);

const src = computed(() => {
  const group = assets[props.kind] as Record<string, string>;
  return group[props.name];
});

const toSize = (value?: number | string) => {
  if (value === undefined) return undefined;
  if (typeof value === "number") return `${value}px`;
  return /^\d+(\.\d+)?$/.test(value) ? `${value}px` : value;
};

const size = computed(() => ({
  height: toSize(props.height),
  width: toSize(props.width),
}));
</script>

<template>
  <img
    v-if="src"
    class="sa-snap-asset"
    :src="src"
    :alt="decorative ? '' : alt || name"
    :aria-hidden="decorative ? 'true' : undefined"
    :style="size"
  />
</template>
