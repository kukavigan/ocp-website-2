import {
  FileText,
  PhoneCall,
  Headphones,
  ClipboardList,
  ShieldCheck,
  Briefcase,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  icon: LucideIcon;
  overview: string;
  capabilities: string[];
  workflow: { step: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "claims-file-services",
    title: "Claims File Services",
    shortDesc:
      "Comprehensive claims file management — from intake and documentation to review and resolution support.",
    icon: FileText,
    overview:
      "OCP manages the full lifecycle of insurance claims files with meticulous attention to detail. Our specialists handle documentation, data entry, correspondence, and file organization so that adjusters can focus on decision-making rather than administrative workload.",
    capabilities: [
      "Claims file setup and organization",
      "Document indexing and digital archiving",
      "Correspondence management and logging",
      "Data entry and validation",
      "File review preparation",
      "Diary and deadline tracking",
      "Regulatory compliance documentation",
    ],
    workflow: [
      {
        step: "Intake",
        desc: "Claims file is received and logged into the system with full documentation.",
      },
      {
        step: "Organization",
        desc: "All documents are indexed, categorized, and digitally archived.",
      },
      {
        step: "Data Entry",
        desc: "Key claim data is entered and validated against source documents.",
      },
      {
        step: "Review Prep",
        desc: "File is prepared for adjuster review with summaries and flagging.",
      },
      {
        step: "Resolution",
        desc: "Ongoing diary management until claim resolution and closure.",
      },
    ],
    benefits: [
      {
        title: "Reduced Administrative Load",
        desc: "Adjusters spend time on decisions, not paperwork.",
      },
      {
        title: "Improved Accuracy",
        desc: "Structured data entry and validation reduce errors.",
      },
      {
        title: "Faster Turnaround",
        desc: "Organized files accelerate the review and resolution process.",
      },
      {
        title: "Compliance Confidence",
        desc: "Documentation meets regulatory and audit standards.",
      },
    ],
    faqs: [
      {
        q: "What types of claims files does OCP manage?",
        a: "We support property, casualty, auto, and specialty lines. Our team adapts to your existing file structures and protocols.",
      },
      {
        q: "Can OCP work within our existing claims management system?",
        a: "Yes. Our specialists are trained to work within client-specific platforms and follow established workflows.",
      },
      {
        q: "How do you ensure data accuracy?",
        a: "Every file goes through structured data validation and quality checks before being released for adjuster review.",
      },
    ],
  },
  {
    slug: "fnol-support",
    title: "FNOL Support",
    shortDesc:
      "First Notice of Loss intake — capturing claim details accurately at the critical first touchpoint.",
    icon: PhoneCall,
    overview:
      "The first notice of loss is the foundation of every claim. OCP specialists capture, verify, and route FNOL information with speed and precision, ensuring that claims start with accurate, complete data and reach the right adjuster without delay.",
    capabilities: [
      "24/7 FNOL intake support",
      "Claimant interview and information gathering",
      "Loss detail verification and cross-referencing",
      "Photo and document collection",
      "Policy coverage verification",
      "Claim routing and assignment",
      "Urgency triage and escalation",
    ],
    workflow: [
      {
        step: "Contact",
        desc: "Claimant reaches OCP via phone, email, or digital channel.",
      },
      {
        step: "Capture",
        desc: "Specialist gathers all loss details, photos, and documentation.",
      },
      {
        step: "Verify",
        desc: "Policy information and loss details are cross-referenced and validated.",
      },
      {
        step: "Triage",
        desc: "Claim is categorized by complexity, urgency, and assignment.",
      },
      {
        step: "Route",
        desc: "Claim is routed to the appropriate adjuster with full context.",
      },
    ],
    benefits: [
      {
        title: "Faster Response",
        desc: "Claims are captured and routed within minutes, not hours.",
      },
      {
        title: "Cleaner Data",
        desc: "Accurate intake reduces downstream rework and delays.",
      },
      {
        title: "Better Claimant Experience",
        desc: "Professional, empathetic first contact sets the tone.",
      },
      {
        title: "Proper Triage",
        desc: "Complexity-based routing ensures the right resources are applied.",
      },
    ],
    faqs: [
      {
        q: "What channels can OCP handle FNOL through?",
        a: "We support phone, email, web forms, and integrated digital intake channels based on your needs.",
      },
      {
        q: "Are FNOL specialists trained in insurance terminology?",
        a: "Yes, all specialists complete insurance-specific training covering policy types, loss categories, and industry terminology.",
      },
      {
        q: "How quickly are FNOL reports delivered to adjusters?",
        a: "FNOL reports are routed in real-time or within an agreed SLA, typically within minutes of intake completion.",
      },
    ],
  },
  {
    slug: "customer-care",
    title: "Customer Care",
    shortDesc:
      "Policyholder support that combines empathy with operational discipline across every touchpoint.",
    icon: Headphones,
    overview:
      "OCP delivers policyholder support that represents your brand with professionalism and care. From status inquiries to complaint handling, our customer care specialists are trained in both insurance processes and human communication.",
    capabilities: [
      "Claim status inquiries and updates",
      "Policyholder question handling",
      "Complaint intake and escalation",
      "Appointment scheduling",
      "Adjuster-policyholder liaison",
      "Satisfaction follow-up calls",
      "Multichannel support (phone, email, chat)",
    ],
    workflow: [
      {
        step: "Inquiry",
        desc: "Policyholder contacts OCP with a question or request.",
      },
      {
        step: "Verification",
        desc: "Identity and claim details are verified for security.",
      },
      {
        step: "Resolution",
        desc: "Specialist addresses the inquiry or coordinates with the adjuster.",
      },
      {
        step: "Documentation",
        desc: "Every interaction is logged in the claim file.",
      },
      {
        step: "Follow-up",
        desc: "Satisfaction check ensures the policyholder was served well.",
      },
    ],
    benefits: [
      {
        title: "Higher Satisfaction",
        desc: "Empathetic, knowledgeable support improves CSAT scores.",
      },
      {
        title: "Reduced Adjuster Interruption",
        desc: "Routine inquiries are handled without involving adjusters.",
      },
      {
        title: "Brand Consistency",
        desc: "Every interaction reflects your brand standards and tone.",
      },
      {
        title: "Complete Documentation",
        desc: "All interactions are captured for audit and quality purposes.",
      },
    ],
    faqs: [
      {
        q: "What languages does OCP customer care support?",
        a: "We primarily support English. Additional language capabilities can be arranged based on client requirements.",
      },
      {
        q: "How are customer care specialists trained?",
        a: "Specialists complete insurance product training, communication skills coaching, and client-specific protocol onboarding.",
      },
      {
        q: "Can you integrate with our existing phone system?",
        a: "Yes, we can work with your telephony platform or provide our own with call routing configured to your specifications.",
      },
    ],
  },
  {
    slug: "back-office-operations",
    title: "Back Office Operations",
    shortDesc:
      "Scalable back-office support for data processing, documentation, and administrative workflows.",
    icon: ClipboardList,
    overview:
      "OCP provides scalable back-office support that handles the operational workload behind your claims process. From data processing to vendor coordination, we take on the tasks that keep your operations running smoothly.",
    capabilities: [
      "Data processing and data entry",
      "Vendor and supplier coordination",
      "Invoice processing and validation",
      "Report generation and distribution",
      "Mail and correspondence handling",
      "Document digitization and filing",
      "Administrative task management",
    ],
    workflow: [
      {
        step: "Request",
        desc: "Task is received from the client or generated by workflow rules.",
      },
      {
        step: "Process",
        desc: "Specialist completes the task following established protocols.",
      },
      {
        step: "Validate",
        desc: "Output is checked for accuracy and completeness.",
      },
      {
        step: "Deliver",
        desc: "Completed work is delivered to the appropriate system or team.",
      },
      {
        step: "Report",
        desc: "Throughput and quality metrics are reported to the client.",
      },
    ],
    benefits: [
      {
        title: "Operational Scalability",
        desc: "Scale back-office capacity up or down based on demand.",
      },
      {
        title: "Cost Efficiency",
        desc: "Reduce overhead by outsourcing routine administrative work.",
      },
      {
        title: "Process Consistency",
        desc: "Standardized workflows ensure repeatable, reliable output.",
      },
      {
        title: "Free Internal Resources",
        desc: "Your team focuses on core claims decisions, not admin.",
      },
    ],
    faqs: [
      {
        q: "What volume of back-office tasks can OCP handle?",
        a: "Our operations are designed for scalability, from hundreds to tens of thousands of tasks per month.",
      },
      {
        q: "How do you track task completion?",
        a: "We provide client-specific reporting on throughput, accuracy, and SLA compliance.",
      },
      {
        q: "Can you work with our existing vendors and suppliers?",
        a: "Yes, we coordinate with your existing vendor network following your established processes.",
      },
    ],
  },
  {
    slug: "qa-auditing",
    title: "QA & Auditing",
    shortDesc:
      "Independent quality assurance and audit services that uphold service standards and identify improvement areas.",
    icon: ShieldCheck,
    overview:
      "OCP quality assurance specialists provide independent, structured audits of claims files, customer interactions, and operational processes. We identify errors, measure compliance, and deliver actionable findings that drive continuous improvement.",
    capabilities: [
      "Claims file quality audits",
      "Customer interaction monitoring",
      "Compliance and regulatory checks",
      "Process adherence audits",
      "Error pattern analysis",
      "Corrective action recommendations",
      "Trend reporting and dashboards",
    ],
    workflow: [
      {
        step: "Sample",
        desc: "Audit sample is selected based on risk and volume criteria.",
      },
      {
        step: "Review",
        desc: "Specialist reviews files against quality standards and checklists.",
      },
      {
        step: "Score",
        desc: "Each file is scored on accuracy, completeness, and compliance.",
      },
      {
        step: "Report",
        desc: "Findings are compiled into detailed audit reports with recommendations.",
      },
      {
        step: "Improve",
        desc: "Trends inform training updates and process refinements.",
      },
    ],
    benefits: [
      {
        title: "Objective Quality Measurement",
        desc: "Independent audits provide an honest quality picture.",
      },
      {
        title: "Risk Reduction",
        desc: "Catch errors before they become regulatory or financial issues.",
      },
      {
        title: "Continuous Improvement",
        desc: "Trend analysis drives targeted training and process changes.",
      },
      {
        title: "Client Confidence",
        desc: "Demonstrable quality metrics build trust with stakeholders.",
      },
    ],
    faqs: [
      {
        q: "What audit sampling methods do you use?",
        a: "We use risk-based, random, and targeted sampling based on client requirements and regulatory standards.",
      },
      {
        q: "Can audits be customized to our quality standards?",
        a: "Absolutely. We build audit checklists and scoring rubrics around your specific quality framework.",
      },
      {
        q: "How frequently are audits conducted?",
        a: "Audit frequency is determined by client needs — weekly, monthly, quarterly, or project-based.",
      },
    ],
  },
  {
    slug: "adjuster-support",
    title: "Adjuster Support",
    shortDesc:
      "Dedicated support for field and desk adjusters — research, coordination, and administrative relief.",
    icon: Briefcase,
    overview:
      "Adjusters carry the weight of claim decisions. OCP provides dedicated support that handles research, scheduling, document collection, and administrative tasks so adjusters can focus on what matters most: accurate, timely claim decisions.",
    capabilities: [
      "Claim research and information gathering",
      "Appointment and inspection scheduling",
      "Document and photo collection",
      "Vendor and expert coordination",
      "File preparation and summarization",
      "Correspondence drafting",
      "Report formatting and quality checks",
    ],
    workflow: [
      {
        step: "Assign",
        desc: "Adjuster assigns a support task to the OCP specialist team.",
      },
      {
        step: "Research",
        desc: "Specialist gathers information, documents, and coordinates parties.",
      },
      {
        step: "Prepare",
        desc: "Findings are organized into a clear summary for the adjuster.",
      },
      {
        step: "Review",
        desc: "Adjuster reviews the prepared materials and makes decisions.",
      },
      {
        step: "Close",
        desc: "Task is completed and documented in the claim file.",
      },
    ],
    benefits: [
      {
        title: "More Claims Per Adjuster",
        desc: "Offload admin work and increase adjuster capacity.",
      },
      {
        title: "Better Prepared Files",
        desc: "Adjusters receive organized, complete information.",
      },
      {
        title: "Faster Scheduling",
        desc: "Inspections and appointments are coordinated without adjuster involvement.",
      },
      {
        title: "Reduced Burnout",
        desc: "Sharing the workload keeps adjusters focused and effective.",
      },
    ],
    faqs: [
      {
        q: "How are support tasks assigned to OCP specialists?",
        a: "Tasks can be assigned through your claims management system, email, or a dedicated coordination channel.",
      },
      {
        q: "Can OCP support both field and desk adjusters?",
        a: "Yes, we support both. Field adjusters benefit from scheduling and coordination, while desk adjusters get research and file preparation support.",
      },
      {
        q: "What is the typical turnaround for a support task?",
        a: "Turnaround depends on task complexity, but most support tasks are completed within 24 hours.",
      },
    ],
  },
  {
    slug: "survey-reporting",
    title: "Survey & Reporting",
    shortDesc:
      "Structured surveys, data collection, and operational reporting that turn information into insight.",
    icon: BarChart3,
    overview:
      "OCP designs and executes surveys, collects operational data, and produces reports that give insurance organizations visibility into their claims processes. From claimant satisfaction surveys to operational performance dashboards, we turn data into decisions.",
    capabilities: [
      "Claimant satisfaction surveys",
      "Operational data collection",
      "Custom report design and generation",
      "Performance dashboards",
      "Trend analysis and visualization",
      "SLA tracking and reporting",
      "Executive summary reporting",
    ],
    workflow: [
      {
        step: "Define",
        desc: "Reporting requirements and metrics are defined with the client.",
      },
      {
        step: "Collect",
        desc: "Data is gathered from claims files, surveys, and operational systems.",
      },
      {
        step: "Analyze",
        desc: "Specialists analyze data for trends, patterns, and anomalies.",
      },
      {
        step: "Report",
        desc: "Findings are compiled into clear, visual reports and dashboards.",
      },
      {
        step: "Review",
        desc: "Client reviews reports and uses insights for operational decisions.",
      },
    ],
    benefits: [
      {
        title: "Data-Driven Decisions",
        desc: "Clear reporting supports informed operational choices.",
      },
      {
        title: "Operational Visibility",
        desc: "Dashboards reveal bottlenecks and improvement opportunities.",
      },
      {
        title: "Stakeholder Communication",
        desc: "Executive summaries communicate performance to leadership.",
      },
      {
        title: "Trend Awareness",
        desc: "Longitudinal analysis surfaces patterns before they become problems.",
      },
    ],
    faqs: [
      {
        q: "Can reports be customized to our KPIs?",
        a: "Yes, all reports and dashboards are built around your specific performance indicators and reporting needs.",
      },
      {
        q: "How are survey results collected?",
        a: "We use phone, email, and digital survey channels. Methodology is tailored to response rate goals and claimant preferences.",
      },
      {
        q: "What reporting frequency do you support?",
        a: "We provide real-time dashboards, weekly summaries, monthly operational reports, and quarterly executive reviews.",
      },
    ],
  },
];
