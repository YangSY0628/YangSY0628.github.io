export const zh = {
  meta: {
    homeTitle: "杨士远 — 博士研究生",
    homeDescription:
      "杨士远是澳门大学博士研究生，研究方向包括异构多机器人系统、图神经网络与视觉—语言—动作模型。",
  },
  profile: {
    name: "杨士远",
    field: "机器人学 · 自主系统",
    role: "博士研究生",
    affiliation: "澳门大学",
    location: "中国澳门",
    introduction:
      "我现为澳门大学机电工程专业博士研究生，研究方向包括异构多机器人系统、图神经网络与具身智能，涵盖纯视觉去中心化协同、轻量级视觉—语言—动作模型及其不确定性量化。在重返学术界之前，我曾在工业界从事三年感知与自主系统研发。",
    photoAlt: "杨士远的个人照片",
  },
  navigation: {
    highlights: "精选工作",
    publications: "论文成果",
    projects: "研究项目",
    experience: "个人经历",
  },
  common: {
    email: "邮箱",
    profileLinks: "个人链接",
    academicProfile: "学术主页内容",
    profileSections: "主页栏目",
    viewProject: "查看项目 →",
    paper: "论文",
    code: "代码",
    workAndResearch: "工作与研究经历",
    education: "教育经历",
    builtWith: "使用 Astro 构建 · 托管于 GitHub Pages",
    backToHighlights: "← 返回精选工作",
    fullProjectVideo: "完整项目视频",
    overview: "工作概述",
    aboutThisWork: "关于这项工作",
    resources: "相关资源",
    projectLinks: "项目链接",
    contact: "联系",
    interested: "对这项工作感兴趣？",
  },
  empty: {
    moreWork: "更多工作",
    nextHighlight: "下一项精选工作",
    nextHighlightDescription: "另一项代表性项目将在此展示。",
    inPreparation: "正在准备",
    highlightsTitle: "研究亮点即将发布。",
    highlightsDescription: "这里将展示代表性工作、实验图像、视频以及论文或代码链接。",
    publications: "论文成果",
    publicationsTitle: "代表性论文将在此展示。",
    publicationsDescription: "发布后将提供论文、代码、项目主页和视频链接。",
    projects: "研究项目",
    projectsTitle: "项目介绍与演示即将发布。",
    projectsDescription: "每个项目将重点介绍研究问题、个人贡献、方法与结果。",
  },
  highlights: {
    fabrivla: {
      eyebrow: "机器人学习",
      title: "FabriVLA",
      description: "一个拥有 8.8 亿参数的视觉—语言—动作模型，在 Meta-World MT50 上达到 90.0% 的平均成功率。",
      overview: [
        "FabriVLA 是一个面向精确多任务操作的轻量级视觉—语言—动作模型。它融合视觉语言骨干网络的浅层与中间层特征，使细粒度视觉信息能够传递到动作头；同时对动作 token 间的自注意力进行门控，使整段动作序列保持内部一致。该模型采用单阶段端到端训练，仅使用 8.8 亿参数便在 Meta-World MT50 上取得 90.0% 的平均成功率。",
        "在策略模型之上，联合共形动作块校准（JCAC）为冻结模型增加残差尺度头，使单次查询即可在用户指定的置信水平下为完整执行动作前缀建立界限。与无条件共形预测相比，该集合缩小了 3.3 倍；在 LIBERO-Safety 上，这些界限还能在动作执行前对不同轨迹的风险进行排序。",
      ],
      resources: [
        { label: "论文", value: "arXiv:2607.08575" },
        { label: "代码", value: "即将发布" },
        { label: "获奖", value: "2026 EvoStudio 全球排行榜第 1 名" },
      ],
    },
    "multi-robot-formation": {
      eyebrow: "多机器人系统",
      title: "隐式虚拟领航者",
      description: "面向异构多机器人编队的去中心化纯视觉相对位姿估计。",
      overview: [
        "传统领航者—跟随者编队存在单点故障，而多数替代方案依赖在 GPS 拒止环境中难以获得的绝对定位。隐式虚拟领航者（IVL）同时消除了这两个前提：图神经网络仅通过单目图像和机器人间通信隐式学习一个非物理编队参考，因此没有任何机器人具有特权，也不需要全局坐标系。",
        "该框架通过异方差高斯负对数似然输出头和 MC Dropout 端到端传播不确定性，使机器人能够降低不可靠邻居信息的权重，而不是平等信任所有估计。IVL 已在仿真和真实机器人上完成验证，覆盖异构平台和不同编队规模。",
      ],
      resources: [
        { label: "论文", value: "arXiv:2607.15708" },
        { label: "代码", value: "即将发布" },
        { label: "专利", value: "CN121962254A，2026" },
      ],
    },
  },
  publications: [
    {
      title: "FabriVLA：面向精确多任务操作的轻量级视觉—语言—动作模型",
      venue: "arXiv 预印本 arXiv:2607.08575",
    },
    {
      title: "隐式虚拟领航者：面向多机器人编队的去中心化纯视觉相对位姿估计",
      venue: "arXiv 预印本 arXiv:2607.15708",
    },
    {
      title: "面向无人水面艇的水面目标识别方法及应用",
      venue: "IEEE Access，第 10 卷，第 421–434 页",
    },
    {
      title: "面向无人艇智能感知的水面目标识别算法研究",
      venue: "《电子测量与仪器学报》，第 35 卷第 9 期，第 99–104 页",
    },
  ],
  patentsNote:
    "另作为共同发明人参与 14 项中国专利（2019–2026，已授权及申请中），涵盖机器人位姿估计、水面目标检测与定位、多传感器融合和自主水上救援。",
  projects: [
    {
      title: "异构多机器人仿真平台",
      description:
        "基于 NVIDIA Isaac Sim 构建异构机器人团队仿真平台，涵盖四足、轮式、轮腿式机器人及无人机控制算法。平台接入 ROS2 和 AI 智能体框架以支持任务级控制，并包含用于视觉语言导航的云—边—端系统。",
      tags: ["Isaac Sim", "ROS2", "多机器人", "视觉语言导航"],
    },
    {
      title: "云—边—端应急响应系统",
      description:
        "面向城市应急响应与救援的异构多机器人系统。机器人团队在云—边—端架构下自主采集数据、评估自身表现并执行救援任务。",
      tags: ["具身智能", "云边协同", "搜索与救援"],
    },
    {
      title: "正面吊自动集装箱装卸系统",
      description:
        "通过多激光雷达数据定位目标集装箱，并结合模糊控制与 PID 控制实现精准抓取和放置，支持最高五层 20 英尺集装箱堆叠；同时配套大型正面吊远程驾驶系统以保障安全遥操作。",
      tags: ["激光雷达", "模糊控制", "遥操作", "工业自主系统"],
    },
    {
      title: "智能水上救援系统",
      description:
        "基于 ROS2 的自主救援系统，融合图像识别、目标跟踪与定位，可自动检测溺水人员并调度救援机器人，已在中国多个城市部署。",
      tags: ["ROS2", "环境感知", "实际部署"],
    },
    {
      title: "无人艇目标识别与定位",
      description:
        "面向无人水面艇的相机、激光雷达和 INS 融合系统，包含点云预处理、基于 RANSAC 的水面噪声分割，以及基于 K-D 树欧氏聚类的目标检测。",
      tags: ["传感器融合", "PCL", "RANSAC", "无人艇"],
    },
    {
      title: "无人艇目标跟踪 — RobotX 2018",
      description:
        "融合相机、激光雷达和 GPS 的无人水面艇目标跟踪与跟随系统，在夏威夷举行的 2018 RobotX 海事挑战赛中完成多项任务。",
      tags: ["传感器融合", "目标跟踪", "机器人竞赛"],
    },
  ],
  experience: [
    {
      period: "2024年10月—至今",
      role: "博士研究：机器人学习与多机器人系统",
      organization: "澳门大学",
      description:
        "在 Isaac Sim 中构建异构多机器人仿真平台，随后提出用于纯视觉去中心化编队控制的隐式虚拟领航者框架，以及面向轻量级通用操作的 FabriVLA。目前正在研究面向城市应急响应的云—边—端机器人团队。FabriVLA 获得 2026 EvoStudio 全球排行榜第 1 名。",
    },
    {
      period: "2023年8月—2024年3月",
      role: "集装箱自动装卸与遥操作",
      organization: "三一集团有限公司 — 中国珠海",
      description:
        "开发基于多激光雷达定位、模糊控制和 PID 控制的正面吊集装箱自动装卸系统，并设计大型集装箱正面吊远程驾驶控制系统。",
    },
    {
      period: "2020年5月—2022年12月",
      role: "无人艇感知与水上救援系统",
      organization: "珠海云洲智能科技股份有限公司 — 中国珠海",
      description:
        "开发面向无人艇的相机—激光雷达—INS 目标识别与定位系统，以及能够自主检测并救援溺水人员的智能救生系统，相关系统已在中国多个城市部署。",
    },
    {
      period: "2017年10月—2018年12月",
      role: "无人艇目标跟踪研究",
      organization: "哈尔滨工程大学 — 中国哈尔滨",
      description:
        "开发无人水面艇多传感器融合目标跟踪系统，在 2018 RobotX 海事挑战赛中完成多项任务并获得最佳成本效益奖。",
    },
  ],
  education: [
    {
      period: "2025年8月—至今",
      role: "机电工程博士",
      organization: "澳门大学 — 中国澳门",
      description: "研究方向：异构多机器人系统、图神经网络与具身智能。",
    },
    {
      period: "2024年8月—2025年1月",
      role: "机器人与自主系统硕士",
      organization: "澳门大学 — 中国澳门",
      description: "GPA 3.43/4.00。",
    },
    {
      period: "2017年9月—2020年4月",
      role: "船舶与海洋工程硕士",
      organization: "哈尔滨工程大学 — 中国哈尔滨",
      description:
        "GPA 3.26/4.00。学位论文：基于多传感器融合的无人艇目标跟踪。获 2017 年研究生一等奖学金。",
    },
    {
      period: "2013年9月—2017年6月",
      role: "船舶与海洋工程学士",
      organization: "大连理工大学 — 中国大连",
      description: "获 2016 年优秀少数民族学生奖学金。",
    },
  ],
} as const;
