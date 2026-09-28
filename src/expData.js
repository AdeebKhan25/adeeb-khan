export const expData = [
  {
    position: "Senior Software Engineer",
    company: "Marvell Technology",
    location: "Pune, Maharashtra",
    time: "July 2025 - Present",
    pic: "/ExpPics/Marvell_900_900.jpg",
    description: [
      "Built a Python-based VDK environment orchestration framework that automates multi-stage firmware development/test setup—including software installation, project-specific configuration, and patch deployment—with resumable execution from failed phases or individual patches; actively used by multiple development, QA, and CI teams.",
      "Engineered a firmware fuzzing framework using libFuzzer, simulated hardware abstractions, and an NVMe-based communication path to exercise production firmware; identified 5+ firmware crashes across 2 modules in under an hour of fuzzing.",
      "Developed an LLM-assisted release-validation tool that analyzes Jira fixes and regression-test data to recommend high-priority test scenarios with reasoning, helping engineers focus verification on the affected and surrounding functionality.",
      "Built Python automation around firmware validation workflows and protocols including NVMe, MCTP, and PLDM, while collaborating with firmware and CI teams on release verification, debugging, and test infrastructure.",
      "Automated qTest result creation and log attachment for framework-generated test runs through Python and the qTest API, removing repetitive manual result-entry and log-upload work.",
    ],
  },
  {
    position: "Software Intern",
    company: "Marvell Technology",
    location: "Pune, Maharashtra",
    time: "July 2024 - July 2025",
    pic: "/ExpPics/Marvell_900_900.jpg",
    description: [
      "Built a Python-based test-case generation tool using AWS Bedrock that extracts requirements from specification documents and generates test scenarios as a starting point for engineers, improving validation efficiency by ~25%.",
      "Identified 15+ firmware defects through automated and scenario-driven testing of SSD controller firmware, including cases beyond existing test coverage, helping prevent issues from reaching downstream users.",
      "Automated 50+ manual regression scenarios using the existing Python test framework, saving 8+ hours of manual effort per week.",
      "Enhanced Python test infrastructure to surface relevant failure diagnostics and logs directly in test results, contributing to an observed ~20% reduction in debugging time.",
    ],
  },
];
