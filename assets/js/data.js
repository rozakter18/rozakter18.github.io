

window.SITE = {

  name: "Roza Akter",

  // Small pill above the greeting
  badge: "Open to PhD & Master's opportunities · Fall 2027",

  // Time-aware greeting (changes with the visitor's local time)
  greeting: {
    morning:   "Gooood morning, world!",
    afternoon: "Gooood afternoon, world!",
    evening:   "Gooood evening, world!"
  },

  // Typed out once under name
  typingPrefix: "Exploring",
  typingLine: "Bioinformatics · Computational Biology · Biomedical Imaging & Signals · Machine Learning for Health",

  bio: "Final-year CSE student at BRAC University, curious about what biological data can reveal about disease, from transcriptomics and gene networks to biomedical images and signals, using multimodal deep learning to study neurodegeneration.",

  // Small info row under the bio. icon names come from icons.js
  info: [
    { icon: "map-pin",    text: "Dhaka, Bangladesh" },
    { icon: "school",     text: "Graduating Jan 2027" },
    { icon: "microscope", text: "Open to research collaborations" }
  ],

  // Photo: put photo at images/profile.jpg
  photo: "images/profile.jpg",

  // CV: built automatically from the LaTeX in github.com/rozakter18/cv (always the latest version).
  // To use a file in this repo instead: cv: "files/Roza_Akter_CV.pdf",
  cv: "https://github.com/rozakter18/cv/releases/download/cv-latest/Roza_Akter_CV.pdf",

  // "Find me on" links. Leave a url empty ("") to hide that icon.
  links: [
    { label: "Email",          icon: "mail",           url: "mailto:rozakterofficial18@gmail.com" },
    { label: "LinkedIn",       icon: "brand-linkedin", url: "https://www.linkedin.com/in/rozaakter/" },
    { label: "GitHub",         icon: "brand-github",   url: "https://github.com/rozakter18" },
    { label: "X",              icon: "brand-x",        url: "https://x.com/rozakter18" },
    { label: "ORCID",          icon: "orcid",          url: "https://orcid.org/0009-0007-3725-3633" },
    { label: "Google Scholar", icon: "school",         url: "" }
  ],

  // Home: "Areas of Focus" cards (keywords optional; leave "" to show only the title)
  focusAreas: [
    { icon: "dna",                title: "Transcriptomics & Gene Networks",          keywords: "" },
    { icon: "brain",              title: "Multimodal & Multi-omics Learning", keywords: "" },
    { icon: "heart-rate-monitor", title: "Biomedical Imaging & Signals",              keywords: "" },
    { icon: "binary-tree",        title: "Sequence Models in Genomics",               keywords: "" }
  ],

  // Home: "Currently Working On" cards. 
  currentWork: [
    {
      title: "Multimodal Deep Learning for Alzheimer's & Parkinson's",
      line: "Disease classification and cross-disease biomarker transfer",
      link: "research.html#thesis"
    },
    {
      title: "Pneumonia Detection & Subtyping from Chest X-rays",
      line: "Deep learning for detecting and classifying pneumonia subtypes",
      link: "research.html#chest-xray"
    },
    {
      title: "Detecting Focal Cortical Dysplasia on Brain MRI",
      line: "Asymmetry-aware 3D segmentation of subtle epilepsy lesions, with external validation",
      link: "research.html#fcd"
    }
  ],

  // Small italic line under the "Currently Working On" cards (leave "" to hide)
  workTagline: "And after that? No idea yet. How exciting.",

  // Home: "On my desk"
  onMyDesk: {
    title: "Biological structure and function emerge from scaling unsupervised learning to 250 million protein sequences",
    author: "Rives et al.",
    link: ""   // optional: link to the paper
  },


  /* ================= ABOUT PAGE ================= */

  // Big quote at the top of the About page
  beliefLine: "I believe ideas that begin with a well-asked question, carefully tested and honestly reported, can change how we understand and treat disease.",

  // About me paragraphs. Wrap words in *stars* to make them italic.
  aboutParagraphs: [
    "Final-year Computer Science and Engineering student at BRAC University, graduating in January 2027. My work sits where computation meets biology: transcriptomics and gene networks, biomedical images and signals, and multimodal deep learning for neurodegenerative disease.",
    "Bioinformatics found me in CSE443. After every topic, our instructor would ask: *How would a computer scientist think about this? Is this a computational problem?* For my course project, I put that question to something I genuinely cared about: whether women with PCOS (now PMOS) face a higher risk of developing Alzheimer's disease. Data scarcity meant I couldn't answer it, and the result came back negative, but my instructor thought the idea was a good one, and that stayed with me. It taught me that a well-asked question is worth pursuing even when the data isn't ready yet, and it's what pulled me into bioinformatics. *Awakenings*, with Robin Williams, my favorite actor, later turned that curiosity toward the brain and what happens when it goes wrong.",
    "Since few of my classmates shared the interest, I built most of my bioinformatics projects on my own: finding public datasets, writing the pipelines, and learning to report what the data actually shows, null results included. I do my best thinking in quiet, focused work, but research is better shared. I value collaborators who enjoy thinking things through together, and I'm keen to work in teams, learn from others, and trade ideas with people who care about the same questions.",
    "I'm looking for PhD and Master's opportunities starting Fall 2027 in bioinformatics, computational biology, and machine learning for health.",
    "Handball taught me teamwork long before research did. I played in school and still love playing and watching sports. Outside work, it's films, anime, music, and books, and the best ones, like the best research, leave you with something memorable."
  ],

  // Skills, grouped. A skill can be a link: { label: "Name", url: "https://..." }
  skills: [
    { group: "Bioinformatics",                   items: ["Multi-omics integration", "RNA-seq analysis", "Salmon", "tximport", "DESeq2", "limma", "fgsea", "ComBat", "MOFA+", "igraph", "Snakemake", "GEO/SRA", { label: "Rosalind", url: "https://rosalind.info/users/roza18/" }] },
    { group: "Machine learning & deep learning", items: ["PyTorch", "scikit-learn", "CNNs", "transformers", "VAEs", "ESM-2", "FAISS", "contrastive learning", "transfer learning (ImageNet-pretrained models)", "multimodal fusion", "retrieval-augmented generation"] },
    { group: "Programming",                      items: ["Python", "R", "C", "C++", "SQL"] },
    { group: "Web development",                  items: ["MERN stack (MongoDB, Express, React, Node.js)", "PHP"] },
    { group: "Hardware & embedded",              items: ["Verilog", "8086 Assembly", "Arduino", "STM32"] },
    { group: "Tools",                            items: ["Git", "Conda", "LaTeX"] }
  ],


  /* ================= EDUCATION PAGE ================= */

  // hidden: true keeps an entry out of the page without deleting it
  education: [
    { degree: "B.Sc. in Computer Science and Engineering", school: "BRAC University, Dhaka", when: "Spring 2023 – Fall 2026 (expected)", detail: "" },   // CGPA hidden for now; to show it: detail: "CGPA: 3.61 / 4.00"
    { hidden: true, degree: "Higher Secondary Certificate (HSC)", school: "Viqarunnisa Noon School and College, Dhaka", when: "2020", detail: "Group: Science · GPA: 5.00 / 5.00" },
    { hidden: true, degree: "Secondary School Certificate (SSC)", school: "Viqarunnisa Noon School, Dhaka", when: "2018", detail: "Group: Science · GPA: 5.00 / 5.00" }
  ],

  // English test: stays hidden until "overall" has a value
  englishTest: {
    test: "IELTS Academic",
    overall: "",                 // e.g. "7.5"
    sections: "",                // e.g. "L 8.0 · R 7.5 · W 7.0 · S 7.0"
    date: ""                     // e.g. "Nov 2026"
  },

  coursework: [
    { group: "Biology & bioinformatics", items: ["CSE443 Bioinformatics", "BIO101 Introduction to Biology", "BTE101 Introduction to Biotechnology and Genetic Engineering"] },
    { group: "AI, signals & imaging",    items: ["CSE490F Biological Signal and Image Analysis", "CSE425 Neural Networks", "CSE422 Artificial Intelligence"] },
    { group: "Systems",                  items: ["CSE321 Operating Systems", "CSE340 Computer Architecture", "CSE370 Database Systems", "CSE260 Digital Logic Design", "CSE423 Computer Graphics"] },
    { group: "Foundations",              items: ["CSE110 Programming Language I", "CSE111 Programming Language II", "CSE220 Data Structures", "CSE221 Algorithms"] }
  ],

  thesis: {
    title: "A Framework for Learning Transferable Representations Across Neurological Disorders",
    supervisor: "Dr. Swakkhar Shatabda",
    link: "research.html#thesis"
  },

  // hidden: true keeps an achievement off the page without deleting it
  achievements: [
    { group: "Academic", items: [
      { hidden: true, title: "Dean's List / VC's List, BRAC University", when: "Summer 2023 · Summer 2025", note: "Academic excellence recognition in two semesters" }
    ]},
    { group: "Projects", items: [
      { title: "FlowSynq: Top-6 project, System Analysis and Design (CSE471)", when: "Spring 2026", note: "Selected for presentation, BRAC University" }
    ]},
    { group: "Sports", items: [
      { title: "Polar Inter-School Handball Tournament", when: "2014", note: "2nd runners-up" },
      { title: "Division-level handball", when: "2014", note: "Winning team" }
    ]}
  ],


  /* ================= RESEARCH PAGE ================= */

  researchStatement: "Biomedical models often look accurate for the wrong reasons: a scanner, a batch, or a hospital can quietly stand in for the disease. My research asks when models can be trusted, through multimodal and multi-omics integration, confounder and shortcut detection, and evaluation that holds up under batch, site, and acquisition shift.",

  // Each entry: id is used for links like research.html#thesis
  // Fields you can leave empty ("" or []) are hidden automatically.
  // figure: { src: "images/research/name.webp", caption: "..." } adds a figure (optional).
  research: [
    {
      id: "thesis",
      short: "Thesis: AD \u2194 PD transfer",            // label in the "On this page" list
      title: "A Framework for Learning Transferable Representations Across Neurological Disorders",
      meta: "Undergraduate thesis · Roza Akter, Sifatul Karim · Supervisor: Dr. Swakkhar Shatabda · Fall 2025 – Fall 2026",
      status: "Ongoing",
      story: "",
      line: "",
      question: "Do models trained on one neurodegenerative disorder help classify another (Alzheimer's ↔ Parkinson's)?",
      approach: "A 4-condition transfer framework on matched ADNI/PPMI cohorts (structural MRI, blood transcriptomics, fusion), with frozen encoders, patient-disjoint 5-fold CV × 3 seeds and paired bootstrap ΔAUC.",
      findings: [
        "Transfer did not beat models trained on the target disease alone.",
        "Apparent transfer came from confounds: ADNI scanner era and cell-composition shifts."
      ],
      worked: "Strict splits and paired testing exposed the confounds.",
      didnt: "The hoped-for cross-disease transfer didn't hold up.",
      tools: ["PyTorch", "ADNI", "PPMI", "Structural MRI", "Transcriptomics"],
      links: { code: "", paper: "" }
    },
    {
      id: "chest-xray",
      short: "Chest X-ray pneumonia",            // label in the "On this page" list
      title: "Pneumonia Detection & Subtyping from Chest X-rays",
      meta: "Team research project",
      status: "Ongoing",
      line: "Deep learning for detecting pneumonia and distinguishing its subtypes from chest radiographs.",
      question: "", approach: "", findings: [], worked: "", didnt: "", tools: [],
      links: { code: "", paper: "" }
    },
    {
      id: "fcd",
      short: "FCD detection on MRI",            // label in the "On this page" list
      title: "Detecting Focal Cortical Dysplasia on Brain MRI with Asymmetry-Aware Deep Learning",
      meta: "CSE490F project",
      status: "Ongoing",
      story: "",
      line: "Focal cortical dysplasia (FCD) type II is a leading, surgically curable cause of drug-resistant epilepsy, but its lesions are subtle and often missed on MRI. I'm building a 3D nnU-Net segmentation pipeline with a left–right asymmetry module, trained on the Bonn cohort and validated externally on the IDEAS cohort, with healthy controls to measure false alarms.",
      question: "", approach: "", findings: [], worked: "", didnt: "",
      tools: ["Python", "PyTorch", "nnU-Net v2", "ANTs", "SimpleITK", "HD-BET"],
      links: { code: "", paper: "" }
    },
    {
      id: "rasmussen",
      short: "Rasmussen Encephalitis",            // label in the "On this page" list
      title: "The Immune Cells Awake, the Network Sleeps: Rasmussen Encephalitis RNA-seq",
      meta: "Solo study",
      status: "2026",
      story: "It started with *Awakenings*, and a question about what changes inside an inflamed brain.",
      line: "",
      question: "Does Rasmussen encephalitis (RE), a rare childhood brain inflammation, rewire gene co-expression networks?",
      approach: "Bulk RNA-seq of RE, epilepsy and control brains (98 runs collapsed to 48 BioSamples), with Y-linked sex inference and a matched, permutation-tested network design.",
      findings: [
        "No change in network topology (p = 0.34).",
        "A heterogeneous cytotoxic T-cell/NK signature (*CXCL9*, *EOMES*)."
      ],
      figure: { src: "images/research/rasmussen-volcano.webp", caption: "Sex-adjusted differential expression, RE vs. control (24 vs. 14). Cytotoxic and NK immune genes such as CXCL9, GZMA and EOMES are higher in RE." },
      worked: "Removing pseudo-replication and sex confounds kept results honest.",
      didnt: "The expected network rewiring wasn't there.",
      tools: ["R", "Salmon", "tximport", "DESeq2", "igraph"],
      links: { code: "https://github.com/rozakter18/Rasmussen-Encephalitis-RNAseq", paper: "" }
    },
    {
      id: "ecg",
      short: "ECG\u2013report alignment",            // label in the "On this page" list
      title: "Contrastive ECG–Report Alignment on PTB-XL: Measuring the Gap Between Learned Representations and Prompt-Based Diagnosis",
      meta: "Tasbir Ahmed, Roza Akter · AgIA4BioHealth Workshop, IEEE BIBM 2026",
      status: "Accepted, to appear · Dec 2026",
      story: "",
      line: "",
      question: "When ECG–text models fail at prompt-based diagnosis, is the encoder or the prompt to blame?",
      approach: "Contrastive 12-lead ECG–language model (1D-CNN + Bio_ClinicalBERT) on 21,799 PTB-XL records, comparing prompts against a linear probe on the same frozen encoder.",
      findings: [
        "A 0.334 macro-AUPRC gap: 0.417 for prompts vs. 0.751 for the probe.",
        "Prompts reach only ~32% of the signal the encoder already holds."
      ],
      figure: { src: "images/research/ecg-per-class.webp", caption: "Per-class AUPRC (a) and AUROC (b) for prompt-based diagnosis vs. a linear probe on the same frozen encoder. Red lines mark chance. Conduction disturbance (CD) shows the largest gap. From the accepted paper." },
      worked: "Fixing the encoder isolated the prompting step.",
      didnt: "Prompt wording remains the bottleneck.",
      tools: ["PyTorch", "1D-CNN", "Bio_ClinicalBERT", "PTB-XL"],
      links: { code: "", paper: "" }      // add the DOI link to "paper" once it's on IEEE Xplore
    },
    {
      id: "nsclc",
      short: "NSCLC multi-omics",            // label in the "On this page" list
      title: "NSCLC Multi-Omics Integration and Knowledge Mining",
      meta: "Research project",
      status: "2026",
      story: "",
      line: "",
      question: "Does multi-omics data predict NSCLC tumor stage better than RNA alone?",
      approach: "MOFA+ integration of RNA, methylation and copy number across 818 TCGA lung adenocarcinoma and squamous cell carcinoma patients in a leakage-free 7-step pipeline, with knowledge mining and external GEO validation (GSE37745).",
      findings: [
        "Stage signal was modest: AUROC 0.603 vs. 0.609 for RNA alone.",
        "Identified candidate drivers supported across omics layers and clinical cohorts."
      ],
      figure: { src: "images/research/nsclc-variance-explained.webp", caption: "MOFA+ variance explained per factor and omics layer in LUAD and LUSC. Methylation dominates Factor 1 in both subtypes." },
      worked: "A leakage-free design made the comparison fair.",
      didnt: "Integration didn't beat RNA alone.",
      tools: ["Python", "MOFA+", "TCGA", "GEO"],
      links: { code: "https://github.com/rozakter18/nsclc-multiomics", paper: "" }
    },
    {
      id: "pmos-ad",
      short: "PMOS\u2013Alzheimer's",            // label in the "On this page" list
      title: "Toward Early Alzheimer's Risk Detection in PMOS (PCOS) Patients: A Multi-Tissue, Multi-Method Gene Expression Investigation",
      meta: "Individual CSE443 research project",
      status: "2025",
      story: "The project that pulled me into bioinformatics.",
      line: "",
      question: "Can gene expression reveal individual Alzheimer's risk in PCOS (now PMOS) patients?",
      approach: "4 GEO datasets (brain, adipose, blood) with ComBat harmonization, leakage-free 5-fold CV with fold-wise PCA, and fgsea pathway analysis.",
      findings: [
        "No individual-level Alzheimer's risk signal.",
        "14 immune pathways suppressed in PCOS but elevated in AD brain."
      ],
      figure: { src: "images/research/pmos-ad-likeness.webp", caption: "Individual-level \"AD-likeness\": PCOS samples do not score higher than controls under any of the three methods." },
      worked: "Caught a cross-platform scale mismatch before it inflated results.",
      didnt: "Too little data to answer the individual-level question.",
      tools: ["R", "DESeq2", "limma", "fgsea", "ComBat"],
      links: { code: "https://github.com/rozakter18/PCOS-AD-Transcriptomic-Investigation", paper: "" }
    },
    {
      id: "crispr",
      short: "CRISPR positional encodings",            // label in the "On this page" list
      title: "Benchmarking Transformer Positional Encodings on CRISPR Periodicity",
      meta: "Single-author study",
      status: "2026",
      story: "",
      line: "",
      question: "Do relative positional encodings beat absolute ones on periodic CRISPR sequences?",
      approach: "Four encodings (Sinusoidal, Learned, RoPE, ALiBi) on 1,773 units from 18 genomes, with similarity-clustered splits and equal training budgets.",
      findings: [
        "Sinusoidal and RoPE performed equivalently under fair comparison.",
        "An 8–10 nt boundary lag caused 37–48% of errors."
      ],
      figure: { src: "images/research/crispr-boundary-lag.webp", caption: "Accuracy recovery after a repeat/spacer boundary. All four encodings need roughly 8–10 nt to lock onto a new block, the source of 37–48% of errors." },
      worked: "Controlling the pipeline revealed up to 0.28 MCC of false gains.",
      didnt: "The expected advantage of relative encodings vanished.",
      tools: ["PyTorch", "NCBI"],
      links: { code: "https://github.com/rozakter18/CRISPR-Positional-Encoding-Benchmark", paper: "" }
    },
    {
      id: "surgical",
      short: "Surgical segmentation reliability",            // label in the "On this page" list
      title: "Event-Conditioned Temporal Shape Drift Monitoring for Surgical Anatomy Segmentation Reliability",
      meta: "Single-author study",
      status: "2025",
      story: "",
      line: "",
      question: "Can a lightweight monitor flag unreliable surgical segmentation masks without labels?",
      approach: "Temporal shape descriptors conditioned on surgical events, tested on controlled corruptions and two U-Net models on ATLAS-120k.",
      findings: [
        "Beat baselines in simulation; only partly on real model predictions.",
        "Tool occlusion drove false-alarm rates of 0.81–0.98."
      ],
      figure: { src: "images/research/surgical-drift-timeline.webp", caption: "One held-out clip: organ area, centroid drift, the shape-drift score with ground-truth failures marked (×), and the tool pixel ratio over time." },
      worked: "Three-tier testing showed where the method holds.",
      didnt: "Tool occlusion is still unsolved.",
      tools: ["Python", "PyTorch", "segmentation_models_pytorch", "ATLAS-120k"],
      links: { code: "https://github.com/rozakter18/event-conditioned-shape-drift", paper: "" }
    }
  ],


  /* ================= PUBLICATIONS PAGE ================= */

  publicationsIntro: "Peer-reviewed work. Ongoing research is on the Research page.",

  // Your name is bolded automatically in author lists.
  // Buttons appear only when a link / bibtex is filled in.
  publications: [
    {
      type: "Conference & Workshop Papers",
      title: "Contrastive ECG–Report Alignment on PTB-XL: Measuring the Gap Between Learned Representations and Prompt-Based Diagnosis",
      authors: ["Tasbir Ahmed", "Roza Akter"],
      venue: "AgIA4BioHealth Workshop, IEEE International Conference on Bioinformatics and Biomedicine (BIBM)",
      year: "2026",
      status: "Accepted, to appear",           // after Dec 3: change to "" and add the DOI below
      note: "To be presented Dec 2026",        // shown next to the status; clear it after the conference
      summary: "Separates encoder quality from prompt quality in ECG–language models. Prompt-based diagnosis reaches 0.417 macro-AUPRC against 0.751 for a linear probe on the same frozen encoder, a 0.334 retrieval gap, identifying prompt wording as the main bottleneck.",
      figure: "images/research/ecg-per-class.webp",   // optional
      more: "research.html#ecg",               // link to the Research page entry
      links: { paper: "", code: "" },          // paper: DOI link, e.g. "https://doi.org/..."
      bibtex: ""                               // paste the BibTeX citation here once available
    }
  ],


  /* ================= PROJECTS PAGE ================= */

  // Categories in display order, each with an icon from icons.js and a banner color
  // (the banner shows on cards that have no image)
  projectCategories: [
    { name: "Bioinformatics",                         icon: "dna", color: "#C0622F" },
    { name: "Machine Learning",                       icon: "chart-dots-3", color: "#3F6E8C" },
    { name: "Software Engineering",                   icon: "users", color: "#5B7F5E" },
    { name: "Operating Systems",                      icon: "terminal-2", color: "#6F5A8C" },
    { name: "Computer Architecture & Microprocessors", icon: "cpu", color: "#8A6A3A" },
    { name: "Computer Networks",                      icon: "network", color: "#3E7B76" },
    { name: "Computer Graphics",                      icon: "device-gamepad-2", color: "#9A4F5E" },
    { name: "Data Structures & Programming",          icon: "code", color: "#5A6372" }
  ],

  // image: optional, e.g. "images/projects/protein.png" (shows instead of the icon)
  // site + siteLabel: optional extra button (e.g. a profile or demo link)
  projects: [
    { category: "Bioinformatics", title: "Know Thy (Nearest) Neighbor: Retrieval-Augmented Annotation of a Neglected Parasite's Dark Proteome", course: "", year: "2026",
      line: "A retrieval-augmented framework (ESM-2 embeddings, FAISS retrieval, Qwen2.5-7B grounded synthesis) for the 32.7% uncharacterized proteome of Leishmania donovani. Corrected embedding anisotropy, restored score calibration from 20% to 98.6%, and produced 119 validated high-confidence function predictions.",
      tags: ["ESM-2", "FAISS", "Qwen2.5", "Python"], code: "https://github.com/rozakter18/Protein-RAG-Functional-Annotation", image: "images/projects/protein-calibration.webp" },
    { category: "Bioinformatics", title: "Antimicrobial Peptide Classification", course: "", year: "2026",
      line: "An amino-acid Transformer trained from scratch beat 3-mer logistic regression and MLP baselines on every metric (AUROC 0.968 vs. 0.956), mainly by rejecting non-AMPs better (specificity 0.938 vs. ~0.90), on 13,213 length-matched sequences.",
      tags: ["PyTorch", "Transformers", "scikit-learn"], code: "https://github.com/rozakter18/Antimicrobial-Peptide-Transformer-Classifier", image: "images/projects/amp-results.webp" },

    { category: "Machine Learning", title: "Two Wrongs Make a Benchmark Look Hard: Clinical Text Benchmark Audit", course: "", year: "2026",
      line: "Found two defects in the mtsamples clinical NLP corpus (duplicates and a mixed label taxonomy) whose effects cancel out, released a corrected 9-class benchmark, and compared 12 models over 5 seeds. Bio_ClinicalBERT led (balanced accuracy 0.946).",
      tags: ["PyTorch", "scikit-learn", "NLP"], code: "https://github.com/rozakter18/Clinical-Text-Classification-Benchmark-Audit", image: "images/projects/clinical-protocol-ablation.webp" },
    { category: "Machine Learning", title: "Variational Autoencoders for Clustering Hybrid-Language, Hybrid-Genre Music", course: "CSE425", year: "2025",
      line: "Clustered 3,157 multilingual, multi-genre tracks using VAEs on fused audio and lyric features. Multi-stage agglomerative clustering on VAE latents recovered language structure best (ARI 0.625 vs. 0.12 or lower for K-Means and agglomerative), while genre-conditioning (CVAE) didn't help with a long-tailed genre vocabulary.",
      tags: ["PyTorch", "VAE", "Clustering"], code: "https://github.com/rozakter18/CSE425-Neural-Network-VAE-Music-Clustering", image: "images/projects/vae-music-ari.webp" },
    { category: "Machine Learning", title: "Obesity Risk Classification", course: "CSE422", year: "2025",
      line: "Predicted family history of overweight from lifestyle and physical features with KNN, decision tree, logistic regression, Naive Bayes, a neural network and K-Means. The neural network reached the best ROC-AUC (0.95); recall and AUC were weighted over accuracy because of class imbalance.",
      tags: ["scikit-learn", "Neural networks", "Python"], code: "https://github.com/rozakter18/CSE422-AI-Obesity-Classification", image: "images/projects/obesity-roc.webp" },

    { category: "Software Engineering", title: "FlowSynq", course: "CSE471", year: "2026",
      line: "A port operations and trade logistics platform with role-based access, real-time alerts and sanctions compliance, ranked in the top 6 and selected for presentation. In a team, I built regional gas demand entry for analysts, the AI module that forecasts demand 7–30 days ahead, sanction-checked shipment requests, and cost and performance analytics with AI optimization recommendations.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Python", "Socket.IO"], code: "https://github.com/sifatulwho/CSE471_Project_FlowSynq", image: "" },
    { category: "Software Engineering", title: "AbleLink", course: "CSE470", year: "2025",
      line: "An accessibility-first platform for people with disabilities, with jobs, courses, health tools, community features and an AI assistant. In a team of four, I built role-based dashboards and access control, the adaptive UI framework, employer job posting and interviews, volunteer matching, and doctor appointments.",
      tags: ["Laravel", "PHP", "Tailwind CSS", "Team project"], code: "https://github.com/Faustus-Faber/AbleLink", image: "" },
    { category: "Software Engineering", title: "ResearchVerse", course: "CSE370", year: "",
      line: "A research collaboration platform: find peers by research interest, send collaboration requests, book appointments with advisors for paper reviews, share beginner resources such as published papers and upcoming conferences, plus a community space, wishlist and progress tracker.",
      tags: ["PHP", "MySQL", "HTML", "CSS"], code: "https://github.com/rozakter18/CSE370_Project_ResearchVerse", image: "" },

    { category: "Operating Systems", title: "Multithreaded Process Manager", course: "CSE321", year: "",
      line: "Operating Systems project 1: a multithreaded process manager.",
      tags: ["C", "Multithreading"], code: "https://github.com/rozakter18/Operating-System-Project-1-Multithreaded-Process-Manager", image: "" },
    { category: "Operating Systems", title: "Metadata Journaling", course: "CSE321", year: "",
      line: "Operating Systems project 2: metadata journaling for a file system.",
      tags: ["C", "File systems"], code: "https://github.com/rozakter18/Operating-System-Project-2-Metadata-Journaling", image: "" },

    { category: "Computer Architecture & Microprocessors", title: "Parallel Inference Engine for Autonomous Disaster Drones", course: "CSE340", year: "",
      line: "A research-based architecture proposal for real-time, low-power, fault-tolerant CNN inference on disaster-response drones: ARM control with a RISC-V SPMD inference array, shared-memory weight reuse, tile-based parallelism, and ECC with spare cores for graceful degradation. Targets under 150\u00a0ms per frame within 2\u00a0W.",
      tags: ["RISC-V", "SPMD", "CNN acceleration", "Fault tolerance"], code: "https://github.com/rozakter18/CSE340-Parallel-Inference-Engine-for-Autonomous-Disaster-Drones", image: "",
      site: "https://github.com/rozakter18/CSE340-Parallel-Inference-Engine-for-Autonomous-Disaster-Drones/blob/main/paper/Parallel_Inference_Engine_for_Autonomous_Disaster_Drones.pdf", siteLabel: "Paper" },
    { category: "Computer Architecture & Microprocessors", title: "Tower of Hanoi: Array-Based Visualizer in 8086 Assembly", course: "CSE341", year: "",
      line: "Solves Tower of Hanoi for 1–6 disks iteratively (no recursion) in 16-bit x86 assembly, storing pegs in arrays, redrawing every move with macros, and recording a move history that can replay the whole solution in reverse.",
      tags: ["8086 Assembly", "MASM/TASM", "DOS INT 21h"], code: "https://github.com/rozakter18/CSE341-Tower-of-Hanoi-Array-Visualizer-8086", image: "" },

    { category: "Computer Networks", title: "The Crystal Realm of LUMINARA", course: "CSE421", year: "",
      line: "A Cisco Packet Tracer network for six regions of a fictional kingdom: VLSM addressing from 18.46.0.0/16, static and floating backup routes plus RIPv2, and centralized DHCP, DNS, web and email services, verified end to end. Team of four.",
      tags: ["Cisco Packet Tracer", "VLSM", "RIPv2", "DHCP / DNS"], code: "https://github.com/rozakter18/CSE421-Luminara-Network-Project", image: "" },

    { category: "Computer Graphics", title: "Obstacle Dodge: A 3D Survival", course: "CSE423", year: "",
      line: "A 3D survival game in Python with a wormhole funnel arena, a multiverse system, and homing bullets.",
      tags: ["Python", "PyOpenGL", "GLUT"], code: "https://github.com/rozakter18/CSE423-Obstacle-Dodge-A-3D-Survival", image: "" },

    { category: "Data Structures & Programming", title: "Emergency Waiting Room Management", course: "CSE220", year: "",
      line: "A waiting-room management system built on a doubly circular linked list.",
      tags: ["Data structures"], code: "https://github.com/rozakter18/CSE220-Emergency-Waiting-Room-Management", image: "" },
    { category: "Data Structures & Programming", title: "Tic Tac Toe", course: "CSE111", year: "",
      line: "A Tic Tac Toe game from an early programming course.",
      tags: ["Python"], code: "https://github.com/rozakter18/CSE111-Tic-Tac-Toe", image: "" }
  ],

  // Footer
  footerMotto: "Carpe diem",
  footerLine: "powered by coffee and curiosity"
};

/* Site menu. "page" must match the data-page on each HTML file's <body>. */
window.NAV = [
  { page: "home",         label: "Home",         icon: "home",   href: "index.html" },
  { page: "about",        label: "About",        icon: "user",   href: "about.html" },
  { page: "education",    label: "Education",    icon: "school", href: "education.html" },
  { page: "research",     label: "Research",     icon: "flask",  href: "research.html" },
  { page: "publications", label: "Publications", icon: "book-2", href: "publications.html" },
  { page: "projects",     label: "Projects",     icon: "folder", href: "projects.html" }
  // To add a Notes page later, remove the two slashes at the start of the next line (and add a comma after the Projects line):
  // { page: "notes",        label: "Notes",        icon: "pencil", href: "notes.html" }
];
