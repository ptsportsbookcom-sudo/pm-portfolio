window.DASHBOARD_DATA = {
  meta: {
    company: "B2Tech",
    title: "Risk & Fraud Strategy Dashboard",
    year: "FY2026",
    audience: "Internal Leadership",
    updatedDate: "April 2026",
    slug: "b2tech",
    docsProcessed: ["Competitor Feature Matrix", "B2Tech Strategy & OKRs FY2026"],
    docsFailed: []
  },
  northStarMetrics: [
    { label: "Fraud Decisions Automated", value: "12%", sub: "of risk decisions require zero manual review", target: "40%+ automated · queue −40%", targetQuarter: "Q3 2026", color: "teal", trend: "↑" },
    { label: "Platform Fraud Loss Rate", value: "TBD", sub: "GGR lost to fraud across operator base", target: "−30% bonus abuse · −25% chargebacks", targetQuarter: "Q4 2026", color: "amber", trend: "↓" },
    { label: "Risk Ops Queue Volume", value: "TBD", sub: "active cases in manual review at any time", target: "−40% vs baseline · false positive <15%", targetQuarter: "Q3 2026", color: "purple", trend: "↓" }
  ],
  kpiCards: [
    { icon: "🎯", value: "−30%", name: "Bonus Abuse Rate", quarter: "KR1.1 · Q3 2026" },
    { icon: "⚡", value: "<60s", name: "Real-time Alert Speed (90% coverage)", quarter: "KR1.3 · Q3 2026" },
    { icon: "🌍", value: "4", name: "New Operator Contracts · Africa", quarter: "KR3.1–3.2 · FY2026" },
    { icon: "🛡️", value: "Zero", name: "Self-Exclusion Violations (all channels)", quarter: "KR4.3 · Q4 2026" }
  ],
  portersFiveForces: {
    threatLevel: "High",
    forces: [
      { name: "Competitive Rivalry", score: "High", rationale: "5 direct competitors identified; AI feature convergence accelerating across all in 2024–2025" },
      { name: "Threat of New Entrants", score: "Medium", rationale: "Regulatory complexity is a barrier but VC-backed tech entrants are expanding into platform territory" },
      { name: "Threat of Substitutes", score: "Low", rationale: "No realistic substitute for a full B2B platform at scale; in-house builds are rare among tier-1 operators" },
      { name: "Buyer Power", score: "High", rationale: "Tier-1 operators (OPAP, Entain, PaddyPower) have significant leverage; platform switching happens every 3–5 years" },
      { name: "Supplier Power", score: "Medium", rationale: "Dependency on Onfido for KYC and limited African ID providers; alternatives exist but switching costs are real" }
    ]
  },
  featureCategories: ["Risk & Fraud", "Reporting", "AI / Auto", "Omnichannel", "Mobile", "Integrations"],
  competitors: [
    { name: "BtoBet",       isOwn: false, scores: { "Risk & Fraud": "Established", "Reporting": "Mature",       "AI / Auto": "Early",       "Omnichannel": "Mature",       "Mobile": "Established", "Integrations": "Established" } },
    { name: "Digitain",     isOwn: false, scores: { "Risk & Fraud": "Established", "Reporting": "Mature",       "AI / Auto": "Early",       "Omnichannel": "Established",  "Mobile": "Early",       "Integrations": "Mature"       } },
    { name: "Altenar",      isOwn: false, scores: { "Risk & Fraud": "Mature",       "Reporting": "Mature",       "AI / Auto": "Mature",      "Omnichannel": "Established",  "Mobile": "Established", "Integrations": "Mature"       } },
    { name: "BetConstruct", isOwn: false, scores: { "Risk & Fraud": "Established", "Reporting": "Mature",       "AI / Auto": "Established", "Omnichannel": "Mature",       "Mobile": "Established", "Integrations": "Mature"       } },
    { name: "Pronet",       isOwn: false, scores: { "Risk & Fraud": "Established", "Reporting": "Established",  "AI / Auto": "Early",       "Omnichannel": "Established",  "Mobile": "Mature",      "Integrations": "Established"  } },
    { name: "B2Tech",       isOwn: true,  scores: { "Risk & Fraud": "Established", "Reporting": "Established",  "AI / Auto": "Early →",     "Omnichannel": "Mature",       "Mobile": "Established", "Integrations": "Established"  } }
  ],
  okrGoals: [
    { name: "Goal 1 — Reduce Platform Fraud Loss", objective: "Make B2Tech the most fraud-resistant B2B platform in target markets", progress: 15, color: "teal", quarter: "Q3–Q4", krs: ["Reduce bonus abuse rate by 30% across operator base — Q3 2026", "Reduce payment fraud chargebacks by 25% — Q4 2026", "Real-time fraud alerting <60s for 90% of rules — Q3 2026"] },
    { name: "Goal 2 — Automate Risk Operations", objective: "Shift routine fraud decisions from manual review to the platform", progress: 20, color: "amber", quarter: "Q2–Q4", krs: ["−40% manual review queue via automated decisioning — Q3 2026", "False positive rate below 15% for auto-blocks — Q4 2026", "Auto-block for high-confidence signals (score >85) for all operators — Q2 2026"] },
    { name: "Goal 3 — Expand African Market Footprint", objective: "Sign 4 new operator contracts in underserved African markets by end FY2026", progress: 25, color: "purple", quarter: "Q3–Q4", krs: ["Launch in 2 new markets — Ethiopia, Ivory Coast — Q3 2026", "Sign 2 tier-1 operators in Nigeria, Kenya, South Africa — Q4 2026", "85% retail/digital feature parity for all new deployments — Q2 2026"] },
    { name: "Goal 4 — Progressive KYC for African Operators", objective: "Replace rigid upfront KYC with risk-based progressive verification", progress: 10, color: "blue", quarter: "Q2–Q4", krs: ["−30% onboarding abandonment at verification step — Q3 2026", "Integrate 2 African-native identity providers (SIM metadata, mobile money) — Q2 2026", "Zero self-exclusion enforcement violations across all channels — Q4 2026"] }
  ],
  topOpportunities: [
    { rank: 1, name: "Production Behavioral Scoring", pain: "Static rules miss adaptive fraud patterns — fraudsters learn rule thresholds", competitorCoverage: "0 / 5 competitors have this in production", nsmImpact: { nsm1: "High", nsm2: "High", nsm3: "Medium" }, effort: "High", quote: "Operators who adopt scoring-based detection will see materially lower fraud loss and fewer false positives than those on rules-only platforms" },
    { rank: 2, name: "Live Automated Decisioning", pain: "Risk Ops manually reviews alerts faster than they can be cleared — queue compounds", competitorCoverage: "0 / 5 competitors have automated decisioning live in production", nsmImpact: { nsm1: "High", nsm2: "Medium", nsm3: "High" }, effort: "Medium", quote: "Every new detection layer that increases manual review volume without automation is a net negative" },
    { rank: 3, name: "Africa-Native Identity (KYC)", pain: "Document-upload KYC causes 30–40% drop-off at onboarding — operators lose players before first deposit", competitorCoverage: "1 / 5 — Pronet has some broker connections; coverage limited", nsmImpact: { nsm1: "Low", nsm2: "Medium", nsm3: "Low" }, effort: "Medium", quote: "This reduces KYC drop-off by 30%+ compared to document-upload flows, improving operator conversion and compliance simultaneously" }
  ],
  nsmImpactMap: [
    { opportunity: "Production Behavioral Scoring", nsm1Impact: "High",   nsm2Impact: "High",   nsm3Impact: "Medium", effort: "High",   priority: 1, reasoning: "Moves NSM1 via rule-free detection; moves NSM2 by catching what static rules miss; moves NSM3 by reducing false positive volume" },
    { opportunity: "Live Automated Decisioning",    nsm1Impact: "High",   nsm2Impact: "Medium", nsm3Impact: "High",   effort: "Medium", priority: 2, reasoning: "Directly increases % automated (NSM1); reduces queue by removing manual steps (NSM3); indirectly reduces loss via faster response (NSM2)" },
    { opportunity: "Africa-Native KYC",             nsm1Impact: "Low",    nsm2Impact: "Medium", nsm3Impact: "Low",    effort: "Medium", priority: 3, reasoning: "Reduces fraud through better identity verification (NSM2); limited direct impact on automation or queue volume" },
    { opportunity: "Omnichannel Risk Enforcement",  nsm1Impact: "Medium", nsm2Impact: "High",   nsm3Impact: "Low",    effort: "High",   priority: 4, reasoning: "Closes enforcement gaps that allow fraud to slip through channel switches (NSM2); some automation via central enforcement API (NSM1)" },
    { opportunity: "USSD / Low-data UX",            nsm1Impact: "None",   nsm2Impact: "Low",    nsm3Impact: "None",   effort: "Low",    priority: 5, reasoning: "Core market strength — retention play, not a fraud reduction lever. Low NSM impact but low effort and critical for market positioning" }
  ],
  strategicBets: [
    { number: "01", title: "Hybrid Risk Scoring", description: "Moving from static rule-only detection to a layered scoring system combining configurable rules with behavioral and device signals. The central Risk product investment for FY2026.", moatAgainst: "BtoBet · Digitain", moatDesc: "Both competitors rated Early on AI/Automation — the widest gap in the market", risk: "ML quality requires labelled data — sparse in early African operator deployments. Mitigate: rules-weighted launch, increase ML weight as data matures." },
    { number: "02", title: "Africa-Native Identity", description: "Direct integrations with African mobile money providers and local identity brokers as KYC signal layer. SIM metadata + mobile money account status — low-friction, locally trusted.", moatAgainst: "All 5 competitors", moatDesc: "Pronet leads but coverage remains limited — no competitor has this fully solved", risk: "Regulatory acceptance of non-document verification varies by country. Mitigate: position as supplementary signal; document per-market acceptance before launch." },
    { number: "03", title: "Omnichannel Risk Enforcement", description: "All risk decisions — fraud flags, self-exclusion, withdrawal holds — propagate instantly across digital, USSD, and retail POS. Non-negotiable for African operators.", moatAgainst: "Digitain · Pronet", moatDesc: "Both have maturing retail integrations — enforcement gaps are known weaknesses", risk: "Retail POS integration depth varies across operator base. Mitigate: channel audit before go-live; compliance checklist + integration support provided." }
  ],
  whitespaceGaps: [
    { name: "Behavioral Scoring", sub: "Production-grade ML fraud models", coverage: "0 / 5", coverageColor: "red", b2techStatus: "bet", label: "Bet 01" },
    { name: "Automated Decisioning", sub: "Live in production (not just roadmap)", coverage: "0 / 5", coverageColor: "red", b2techStatus: "roadmap", label: "Q2 2026" },
    { name: "USSD / Low-data UX", sub: "Only BetConstruct has this", coverage: "1 / 5", coverageColor: "amber", b2techStatus: "strength", label: "Core Strength" },
    { name: "African KYC / ID Brokers", sub: "Pronet leads but limited coverage", coverage: "1 / 5", coverageColor: "amber", b2techStatus: "bet", label: "Bet 02" }
  ],
  keyQuotes: [
    { quote: "Operators who adopt scoring-based detection will see materially lower fraud loss and fewer false positives than those on rules-only platforms.", source: "B2Tech Strategy FY2026 — Bet 1", theme: "opportunity" },
    { quote: "Every new detection layer that increases manual review volume without automation is a net negative.", source: "B2Tech Strategy FY2026 — Key Constraint 1", theme: "ops-efficiency" },
    { quote: "All risk decisions must propagate instantly across digital, mobile, USSD, and retail POS — a non-negotiable capability for African operators.", source: "B2Tech Strategy FY2026 — Bet 3", theme: "fraud-prevention" }
  ],
  staleDataFlags: []
};
