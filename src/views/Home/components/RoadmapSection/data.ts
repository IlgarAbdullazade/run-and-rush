import { IRoadmapBlock } from "./types";

export const roadmapSections: IRoadmapBlock[] = [
  {
    title: 'Phase 1. Jun, 2023 - Aug, 2023',
    items: [
      { checked: true, text: 'Sold products totally worth of: $1,000,000' },
      { checked: true, text: 'Sell 1,000 + footwear items' },
      { checked: true, text: 'Make the active user audience grow to 30,000' },
      { checked: true, text: 'Beta-launch of an MVP version' },
    ]
  },
  {
    title: 'Phase 2. Aug, 2023 - Nov, 2023',
    items: [
      { checked: true, text: 'Improve the sneakers marketplace' },
      { checked: true, text: 'Promote not only the brand but living a healthy lifestyle' },
      { checked: true, text: 'Collaborate with bloggers' },
    ]
  },
  {
    title: 'Phase 3. Nov, 2023 - Mar, 2023',
    items: [
      { checked: true, text: 'Launch a staking program' },
      { checked: false, text: 'Promote the project on various platforms' },
      { checked: false, text: 'MVP upgrade' },
      { checked: false, text: 'Open our first offices in many major countries' },
    ]
  },
  {
    title: 'Phase 4. Mar, 2023 - Jul, 2023',
    items: [
      { checked: false, text: 'Add new functionality' },
      { checked: false, text: 'Develop physical exercises' },
      { checked: false, text: 'Launch a smart contract' },
      { checked: false, text: 'Issue official RAR tokens' },
      { checked: false, text: 'Influencer Hub' },
      { checked: false, text: 'Full White Paper upgrade' },
    ]
  },
  {
    title: 'Phase 5. Jul, 2023 - Oct, 2023',
    items: [
      { checked: false, text: 'Token entry/withdrawal/exchange right in the app' },
      { checked: false, text: 'A more detailed transaction history, including TXid' },
      { checked: false, text: 'Collaborate with partners to launch a separate collection on a different blockchain' },
    ]
  },
];