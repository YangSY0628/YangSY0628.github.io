export const profile = {
  name: "Shiyuan Yang",
  initials: "SY",
  role: "PhD Student",
  affiliation: "University of Macau",
  location: "Macau, China",
  email: "yc57974@um.edu.mo",
  introduction:
    "I am a PhD student in Electromechanical Engineering at the University of Macau, working on heterogeneous multi-robot systems, graph neural networks, and embodied AI — from vision-only decentralized coordination to lightweight vision-language-action models, both with uncertainty quantification. Before returning to academia I spent three years building perception and autonomy systems in industry.",
  links: {
    github: "https://github.com/YangSY0628",
    linkedin:
      "https://cn.linkedin.com/in/shiyuanyang51b941174?trk=people-guest_people_search-card",
  },
} as const;

export const navigation = [
  { id: "highlights", label: "Highlights" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
] as const;

export const highlights: Array<{
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  video: string;
  fullVideo: string;
  captions?: {
    src: string;
    srclang: string;
    label: string;
    isDefault?: boolean;
  };
  poster: string;
  overview: string[];
  resources: Array<{ label: string; value: string; href?: string }>;
  href?: string;
}> = [
  {
    slug: "fabrivla",
    eyebrow: "Robot Learning",
    title: "FabriVLA",
    description:
      "A 0.88B vision-language-action model reaching 90.0% average success on Meta-World MT50.",
    video: "/videos/fabrivla-highlight.mp4",
    fullVideo: "/videos/fabrivla-full.mp4",
    poster: "/images/fabrivla-poster.webp",
    overview: [
      "FabriVLA is a lightweight vision-language-action model for precise multi-task manipulation. It fuses shallow and intermediate layers of the vision-language backbone so that fine-grained visual detail survives into the action head, and gates self-attention across action tokens so that a chunk of actions stays internally consistent. The model is trained end-to-end in a single stage and reaches a state-of-the-art 90.0% average success rate on Meta-World MT50 with only 0.88B parameters.",
      "On top of the policy, Joint Conformal Action Chunk Calibration (JCAC) equips a frozen model with a residual scale head that bounds the entire executed action prefix at a user-chosen confidence level from a single query. The resulting sets are 3.3× tighter than unconditional conformal prediction, and on LIBERO-Safety the bounds rank rollouts by risk before any action is executed.",
    ],
    resources: [
      {
        label: "Paper",
        value: "arXiv:2607.08575",
        href: "https://arxiv.org/abs/2607.08575",
      },
      { label: "Code", value: "Coming soon" },
      { label: "Award", value: "1st place, EvoStudio Global Leaderboard 2026" },
    ],
  },
  {
    slug: "multi-robot-formation",
    eyebrow: "Multi-Robot Systems",
    title: "Implicit Virtual Leader",
    description:
      "Decentralized vision-only relative pose estimation for heterogeneous multi-robot formations.",
    video: "/videos/multi-robot-formation-highlight.mp4",
    fullVideo: "/videos/multi-robot-formation-full.mp4",
    captions: {
      src: "/videos/multi-robot-formation-en.vtt",
      srclang: "en",
      label: "English",
      isDefault: true,
    },
    poster: "/images/multi-robot-formation-poster.webp",
    overview: [
      "Leader-follower formations inherit a single point of failure, and most alternatives assume absolute localization that simply is not available in GPS-denied environments. The Implicit Virtual Leader (IVL) removes both assumptions: a graph neural network learns a non-physical formation reference implicitly, from monocular images and inter-robot communication alone, so no robot is privileged and no global frame is required.",
      "The framework carries uncertainty end-to-end through a heteroscedastic Gaussian negative log-likelihood head and MC Dropout, which lets a robot down-weight unreliable neighbours instead of trusting every estimate equally. IVL was validated in simulation and on real robots, across heterogeneous platforms and varying formation sizes.",
    ],
    resources: [
      {
        label: "Paper",
        value: "arXiv:2607.15708",
        href: "https://arxiv.org/abs/2607.15708",
      },
      { label: "Code", value: "Coming soon" },
      { label: "Patent", value: "CN121962254A, 2026" },
    ],
  },
];

export const publications: Array<{
  year: string;
  title: string;
  authors: string;
  venue: string;
  paper?: string;
  code?: string;
}> = [
  {
    year: "2026",
    title: "FabriVLA: A Lightweight Vision-Language-Action Model for Precise Multi-Task Manipulation",
    authors: "S. Yang, B. Zhang, J. Zhang, Z. Tao, J. Guo, D. Ran, X. Bian, Q. Li",
    venue: "arXiv preprint arXiv:2607.08575",
    paper: "https://arxiv.org/abs/2607.08575",
  },
  {
    year: "2026",
    title:
      "Implicit Virtual Leader: Decentralized Vision-Only Relative Pose Estimation for Multi-Robot Formations",
    authors:
      "S. Yang, Z. Wang, Z. Tao, Y. Wang, Z. Hou, X. Kong, B. Zhang, Y. F. Yeung, Y. Luo, S. Lee, Q. Li",
    venue: "arXiv preprint arXiv:2607.15708",
    paper: "https://arxiv.org/abs/2607.15708",
  },
  {
    year: "2021",
    title: "Water target recognition method and application for unmanned surface vessels",
    authors:
      "L. Cheng, B. Deng, Y. Yang, J. Lyu, J. Zhao, K. Zhou, C. Yang, L. Wang, S. Yang, Y. He",
    venue: "IEEE Access, vol. 10, pp. 421–434",
  },
  {
    year: "2021",
    title:
      "Research on water target recognition algorithms for intelligent perception of unmanned surface vehicles",
    authors: "L. Cheng, Y. Yang, Y. Zhang, D. Lin, C. Yang, S. Yang, L. Wang, Y. He",
    venue: "Journal of Electronic Measurement and Instrumentation, vol. 35, no. 9, pp. 99–104",
  },
];

export const patentsNote =
  "Also co-inventor on 14 Chinese patents (granted and pending, 2019–2026) covering robot pose estimation, water-surface target detection and localization, multi-sensor fusion, and autonomous water rescue.";

export const projects: Array<{
  title: string;
  description: string;
  tags: string[];
  image?: string;
  href?: string;
}> = [
  {
    title: "Heterogeneous Multi-Robot Simulator",
    description:
      "A NVIDIA Isaac Sim simulator for heterogeneous robot teams, with control algorithms for quadrupeds, wheeled and leg-wheeled robots, and drones. Bridged to ROS2 and to an AI agent framework for task-level control, plus a cloud-edge-device stack for vision-language navigation.",
    tags: ["Isaac Sim", "ROS2", "Multi-Robot", "VLN"],
  },
  {
    title: "Cloud-Edge-Device Emergency Response System",
    description:
      "An ongoing heterogeneous multi-robot system for urban emergency response and rescue. The team autonomously collects data, evaluates its own performance, and executes rescue tasks across the cloud-edge-device hierarchy.",
    tags: ["Embodied AI", "Cloud-Edge", "Search and Rescue"],
  },
  {
    title: "Autonomous Container Handling for Reach Stackers",
    description:
      "An automatic container handling system that localizes target containers from multi-LiDAR data and combines fuzzy and PID control for precise pickup and placement, supporting stacks of up to five 20ft containers. Paired with a remote driving system for safe teleoperation of large stackers.",
    tags: ["LiDAR", "Fuzzy Control", "Teleoperation", "Industrial Autonomy"],
  },
  {
    title: "Intelligent Water Rescue System",
    description:
      "A ROS2 system that autonomously detects drowning individuals and dispatches a rescue robot, integrating image recognition, target tracking, and positioning. Deployed in multiple cities across China.",
    tags: ["ROS2", "Perception", "Deployed"],
  },
  {
    title: "USV Target Recognition and Positioning",
    description:
      "Camera, LiDAR, and INS fusion for unmanned surface vessels: point cloud preprocessing, RANSAC-based water surface noise segmentation, and object detection via K-D tree Euclidean clustering.",
    tags: ["Sensor Fusion", "PCL", "RANSAC", "USV"],
  },
  {
    title: "USV Target Tracking — RobotX 2018",
    description:
      "A sensor-fusion target tracking and following system for unmanned surface vehicles, combining camera, LiDAR, and GPS. Completed multiple tasks at the 2018 RobotX Maritime Challenge in Hawaii.",
    tags: ["Sensor Fusion", "Tracking", "Competition"],
  },
];

export const experience = [
  {
    period: "Oct 2024 — Present",
    role: "PhD Researcher, Robot Learning and Multi-Robot Systems",
    organization: "University of Macau",
    description:
      "Built a heterogeneous multi-robot simulator in Isaac Sim, then the Implicit Virtual Leader framework for vision-only decentralized formation control and FabriVLA for lightweight general-purpose manipulation. Currently researching a cloud-edge-device robot team for urban emergency response. FabriVLA took 1st place on the EvoStudio Global Leaderboard (2026).",
  },
  {
    period: "Aug 2023 — Mar 2024",
    role: "Autonomous Container Handling and Teleoperation",
    organization: "SANY Group Co., Ltd — Zhuhai, China",
    description:
      "Developed an automatic container handling system for reach stackers using multi-LiDAR localization with fuzzy and PID control, and designed a remote driving control system for large container stackers.",
  },
  {
    period: "May 2020 — Dec 2022",
    role: "USV Perception and Water Rescue Systems",
    organization: "Zhuhai Yunzhou Intelligence Technology, Ltd. — Zhuhai, China",
    description:
      "Built a camera-LiDAR-INS target recognition and positioning system for unmanned boats, and an intelligent lifesaving system that autonomously detects and rescues drowning individuals, deployed in multiple cities across China.",
  },
  {
    period: "Oct 2017 — Dec 2018",
    role: "USV Target Tracking Research",
    organization: "Harbin Engineering University — Harbin, China",
    description:
      "Developed a sensor-fusion target tracking system for unmanned surface vehicles, which completed multiple tasks at the 2018 RobotX Maritime Challenge and won the Best Cost Efficiency Award.",
  },
] as const;

export const education = [
  {
    period: "Aug 2025 — Present",
    role: "PhD in Electromechanical Engineering",
    organization: "University of Macau — Macau, China",
    description:
      "Research interests: heterogeneous multi-robot systems, graph neural networks, embodied AI.",
  },
  {
    period: "Aug 2024 — Jan 2025",
    role: "M.S. in Robotics and Autonomous Systems",
    organization: "University of Macau — Macau, China",
    description: "GPA 3.43/4.00.",
  },
  {
    period: "Sep 2017 — Apr 2020",
    role: "M.S. in Naval Architecture and Engineering",
    organization: "Harbin Engineering University — Harbin, China",
    description:
      "GPA 3.26/4.00. Thesis: Target Tracking for Unmanned Surface Vehicles based on Sensor Fusion. First-class Graduate Student Scholarship (2017).",
  },
  {
    period: "Sep 2013 — Jun 2017",
    role: "B.E. in Naval Architecture and Engineering",
    organization: "Dalian University of Technology — Dalian, China",
    description:
      "Excellent Minority Student Scholarship (2016).",
  },
] as const;
