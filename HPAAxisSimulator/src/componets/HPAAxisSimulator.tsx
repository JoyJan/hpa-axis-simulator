import React, { useState } from 'react';
import { Activity, Brain, Zap, ShieldAlert } from 'lucide-react';

const HPAAxisSimulator = () => {
const [adrenaline, setAdrenaline] = useState(20); // 0-100
const [cortisol, setCortisol] = useState(20); // 0-100

// Combined arousal level (0-100)
const arousal = (adrenaline * 0.7) + (cortisol * 0.3);

// Determine Neuroscience State
const getNeuroState = () => {
if (adrenaline > 75 && cortisol > 75) return {
title: "Allostatic Overload",
neuro: "Prefrontal Cortex (PFC) Offline.",
desc: "The Amygdala has hijacked the brain. Logical reasoning is inhibited. Memory formation is fragmented. Risk of excitotoxicity.",
zone: "Panic / Burnout",
zoneColor: "text-red-600",
barColor: "bg-red-600"
};
if (adrenaline > 60) return {
title: "Sympathetic Dominance",
neuro: "Amygdala Hijack.",
desc: "Limbic system dominates. Attention acts like a spotlight (tunnel vision). High immediate reaction time, low complex problem solving.",
zone: "High Anxiety",
zoneColor: "text-orange-600",
barColor: "bg-orange-500"
};
if (cortisol > 70) return {
title: "HPA Axis Dysregulation",
neuro: "Hippocampal Inhibition.",
desc: "Chronic glucocorticoid exposure may reduce synaptic plasticity. 'Brain fog' and difficulty retrieving memories. Feedback loop may be blunted.",
zone: "Chronic Strain",
zoneColor: "text-yellow-600",
barColor: "bg-yellow-500"
};
if (arousal > 30 && arousal < 70) return {
title: "Optimal Arousal (Eustress)",
neuro: "PFC & Limbic Balance.",
desc: "Ideal state for learning and performance ('Flow'). Neurotransmitters facilitate focus without overwhelming neural circuits.",
zone: "Peak Performance",
zoneColor: "text-blue-600",
barColor: "bg-blue-500"
};
return {
title: "Hypoarousal",
neuro: "Default Mode Network.",
desc: "Baseline neural activity. Rest and digest. Good for recovery, but low motivation for complex tasks.",
zone: "Calm / Boredom",
zoneColor: "text-emerald-600",
barColor: "bg-emerald-500"
};
};

const neuroState = getNeuroState();

return (
<div className="min-h-screen bg-slate-50 p-2 md:p-6 font-sans text-slate-800">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
{/* LEFT COLUMN: DIAGRAM VISUALIZATION (7 cols) */}
<div className="lg:col-span-7 flex flex-col gap-6">
<div className="bg-white rounded-3xl shadow-xl p-6 relative overflow-hidden border border-slate-200">
<h2 className="text-xl font-bold mb-4 flex items-center gap-2">
<Activity className="text-blue-500" />
Anatomy of Stress (HPA & SAM)
</h2>

<div className="relative w-full aspect-[4/5] md:aspect-[16/14] bg-gradient-to-b from-slate-50 to-white rounded-xl border border-slate-200 overflow-hidden">
<svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 600 550">
<defs>
<marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
<path d="M0,0 L0,6 L6,3 z" fill="#3b82f6" />
</marker>
<marker id="arrow-orange" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
<path d="M0,0 L0,6 L6,3 z" fill="#f97316" />
</marker>
<filter id="glow-orange">
<feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
<feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
</filter>
<radialGradient id="brain-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
<stop offset="0%" stopColor="#fde047" stopOpacity="0.6" />
<stop offset="100%" stopColor="#fde047" stopOpacity="0" />
</radialGradient>
</defs>

{/* --- 0. HUMAN SILHOUETTE --- */}
<g transform="translate(140, 40) scale(0.9)">
<path 
d="M 160 0 
C 220 0, 240 40, 240 90 
C 240 120, 230 140, 210 150 
C 210 150, 260 160, 300 180 
C 350 200, 380 250, 380 350 
L 380 520 
L 50 520 
L 50 350
C 50 250, 80 200, 120 180
C 150 165, 120 150, 110 140
C 90 120, 90 100, 100 90
C 100 40, 120 0, 160 0 Z" 
fill="#f8e3cc" 
stroke="#d4a373" 
strokeWidth="3"
/>
<path d="M 300 180 C 300 180, 310 250, 310 350 L 310 520" fill="none" stroke="#e6c2a0" strokeWidth="2" />
<path d="M 120 180 C 120 180, 110 250, 110 350 L 110 520" fill="none" stroke="#e6c2a0" strokeWidth="2" />
</g>
{/* Spinal Cord Hint */}
<path d="M 330 170 L 330 400" stroke="#cbd5e1" strokeWidth="6" strokeDasharray="5,5" opacity="0.6" strokeLinecap="round"/>

{/* --- LABELS (Top Corners) --- */}
<text x="50" y="50" fontSize="16" fontWeight="bold" fill="#0f172a">HPA axis</text>
<text x="50" y="70" fontSize="12" fill="#64748b">Hypothalamic-Pituitary-Adrenal</text>
<text x="480" y="50" fontSize="16" fontWeight="bold" fill="#0f172a">SAM axis</text>
<text x="480" y="70" fontSize="12" fill="#64748b">Sympathetic-Adreno-Medullary</text>

{/* --- 1. BRAIN REGION (Inside Head) --- */}
<g transform="translate(330, 100)">
{/* Brain Glow */}
{(cortisol > 50 || adrenaline > 50) && (
<circle cx="0" cy="0" r="45" fill="url(#brain-glow)" />
)}

{/* Brain Outline */}
<path d="M -35 -25 C -45 -35, -35 -55, 0 -55 C 35 -55, 45 -35, 35 -10 C 25 10, -25 10, -35 -25" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
{/* Hypothalamus (Orange) */}
<ellipse cx="-5" cy="-8" rx="10" ry="5" fill="#fdba74" stroke="#f97316" strokeWidth="0.5" />
{/* Pituitary (Blue - Dangling) */}
<path d="M -5 -3 L -5 8" stroke="#94a3b8" strokeWidth="2" />
<circle cx="-5" cy="8" r="5" fill="#60a5fa" stroke="#2563eb" strokeWidth="0.5"/>

{/* LABELS: Hypothalamus & Pituitary */}
{/* Hypothalamus Label */}
<line x1="-15" y1="-8" x2="-80" y2="-20" stroke="#475569" strokeWidth="1" />
<text x="-85" y="-18" fontSize="12" fontWeight="bold" textAnchor="end" fill="#1e293b">Hypothalamus</text>

{/* Pituitary Gland Label */}
<line x1="-10" y1="8" x2="-80" y2="8" stroke="#475569" strokeWidth="1" />
<text x="-85" y="12" fontSize="12" fontWeight="bold" textAnchor="end" fill="#1d4ed8">Pituitary Gland</text>
</g>

{/* --- 2. ADRENAL GLANDS (Inside Torso) --- */}
<g transform="translate(300, 350)">
{/* Kidney */}
<path d="M -20 10 Q 15 45 40 10 C 50 20, 30 70, -10 60 C -30 50, -30 25, -20 10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2"/>
{/* Adrenal Gland */}
<path d="M -10 10 L 15 -15 L 35 10 Z" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" opacity={cortisol > 10 ? 1 : 0.8} />
<ellipse cx="12" cy="5" rx="5" ry="8" fill="#fdba74" stroke="#f97316" strokeWidth="1.5" opacity={adrenaline > 10 ? 1 : 0.8} />

{/* Label */}
<line x1="-15" y1="5" x2="-80" y2="5" stroke="#475569" strokeWidth="1" />
<text x="-85" y="10" fontSize="12" fontWeight="bold" textAnchor="end" fill="#1e293b">Adrenal Gland</text>
</g>

{/* --- 3. CIRCULATION & HORMONES --- */}
<g transform="translate(150, 480)">
<rect x="50" y="0" width="300" height="30" rx="15" fill="#fecaca" fillOpacity="0.9" stroke="#ef4444" strokeWidth="2" />
{/* Cortisol Label pointing to blood */}
<text x="40" y="20" fontSize="12" fontWeight="bold" textAnchor="end" fill="#1e40af">Cortisol</text>
<line x1="45" y1="15" x2="65" y2="15" stroke="#1e40af" strokeWidth="1" markerEnd="url(#arrow-blue)"/>

{/* Adrenaline Label pointing to blood */}
<text x="360" y="20" fontSize="12" fontWeight="bold" textAnchor="start" fill="#c2410c">Adrenaline</text>
<line x1="355" y1="15" x2="335" y2="15" stroke="#c2410c" strokeWidth="1" markerEnd="url(#arrow-orange)"/>

{/* Moving Particles */}
{(cortisol > 5 || adrenaline > 5) && (
<>
<circle r="4" fill="#1d4ed8" opacity="0.8"><animate attributeName="cx" from="60" to="340" dur="3s" repeatCount="indefinite" /><animate attributeName="cy" values="10;20;10" dur="4s" repeatCount="indefinite" /></circle>
<circle r="3" fill="#c2410c" opacity="0.8"><animate attributeName="cx" from="340" to="60" dur="2s" repeatCount="indefinite" /><animate attributeName="cy" values="20;10;20" dur="3s" repeatCount="indefinite" /></circle>
</>
)}
</g>

{/* --- PATHWAYS --- */}

{/* HPA Step 1: Hypothalamus -> Pituitary (CRH) */}
<path id="path-crh" d="M 325 95 L 325 105" stroke="#2563eb" strokeWidth="2" />
<text x="340" y="100" fontSize="10" fill="#64748b">CRH</text>
{/* HPA Step 2: Pituitary -> Blood -> Adrenal Cortex (ACTH) */}
<path id="path-acth" d="M 325 115 Q 320 200 300 300 L 305 335" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrow-blue)" opacity="0.8" />
{/* ACTH Label positioned along the curve */}
<rect x="290" y="220" width="35" height="16" fill="white" rx="4" opacity="0.9" />
<text x="307" y="232" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#1d4ed8">ACTH</text>
{cortisol > 5 && (
<circle r="3" fill="#2563eb">
<animateMotion dur={`${5 - (cortisol/25)}s`} repeatCount="indefinite">
<mpath href="#path-acth"/>
</animateMotion>
</circle>
)}

{/* SAM: Brain -> Spinal Cord -> Adrenal Medulla */}
<path id="path-sam" d="M 335 100 Q 350 150 340 250 T 320 345" fill="none" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrow-orange)" opacity="0.8" />
{adrenaline > 5 && (
<circle r="3" fill="#ea580c" filter="url(#glow-orange)">
<animateMotion dur={`${2 - (adrenaline/60)}s`} repeatCount="indefinite">
<mpath href="#path-sam"/>
</animateMotion>
</circle>
)}
{/* Output Lines to Blood */}
<path d="M 310 360 Q 310 420 280 480" fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.6" />
<path d="M 320 360 Q 320 420 340 480" fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.6" />

{/* FEEDBACK LOOP */}
<path id="path-feedback" d="M 150 500 C 50 500 80 100 245 80" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="5,5" opacity={cortisol > 30 ? 0.8 : 0.2} markerEnd="url(#arrow-blue)" />
<text x="80" y="300" fontSize="11" fill="#1e293b" fontWeight="bold" transform="rotate(-90 80 300)">Negative Feedback (Cortisol)</text>

{cortisol > 30 && (
<circle r="3" fill="#334155">
<animateMotion dur="6s" repeatCount="indefinite">
<mpath href="#path-feedback"/>
</animateMotion>
</circle>
)}

</svg>
</div>
</div>
</div>

{/* RIGHT COLUMN: CONTROLS & NEUROSCIENCE (5 cols) */}
<div className="lg:col-span-5 flex flex-col gap-6">

{/* 1. CONTROLS */}
<div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-200">
<h3 className="font-bold text-lg mb-4">Hormone Regulators</h3>
{/* Adrenaline */}
<div className="mb-6">
<div className="flex justify-between mb-2">
<label className="flex items-center gap-2 text-sm font-bold text-orange-700">
<Zap size={16} fill="currentColor"/> Adrenaline (SAM)
</label>
<span className="text-xs font-mono bg-orange-100 text-orange-800 px-2 py-1 rounded">{adrenaline}%</span>
</div>
<input type="range" min="0" max="100" value={adrenaline} onChange={(e) => setAdrenaline(parseInt(e.target.value))}
className="w-full h-2 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-orange-500" />
<div className="flex justify-between text-xs text-slate-400 mt-1">
<span>Rest</span>
<span>Fight/Flight</span>
</div>
</div>

{/* Cortisol */}
<div>
<div className="flex justify-between mb-2">
<label className="flex items-center gap-2 text-sm font-bold text-blue-700">
<ShieldAlert size={16}/> Cortisol (HPA)
</label>
<span className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded">{cortisol}%</span>
</div>
<input type="range" min="0" max="100" value={cortisol} onChange={(e) => setCortisol(parseInt(e.target.value))}
className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-500" />
<div className="flex justify-between text-xs text-slate-400 mt-1">
<span>Baseline</span>
<span>Chronic Stress</span>
</div>
</div>
</div>

{/* 2. NEUROSCIENCE PERSPECTIVE */}
<div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl flex-grow flex flex-col">
<div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-3">
<Brain className="text-purple-400" />
<h3 className="font-bold">Neuro-Cognitive State</h3>
</div>

<div className="mb-6">
<div className="flex justify-between items-end mb-2">
<span className={`text-2xl font-bold ${neuroState.zoneColor}`}>{neuroState.zone}</span>
<span className="text-xs text-slate-400">Yerkes-Dodson Curve</span>
</div>
{/* Simplified Yerkes-Dodson Visualization */}
<div className="relative h-24 w-full bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
{/* The Bell Curve Shape */}
<svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
<path d="M0 100 Q 50 -50 100 100" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4,4" />
</svg>
{/* Active Point */}
<div 
className="absolute bottom-0 w-1 bg-white transition-all duration-500 flex flex-col items-center"
style={{ 
left: `${arousal}%`, 
height: `${arousal < 50 ? arousal * 1.8 : (100 - arousal) * 1.8}%`,
maxHeight: '90%' 
}}
>
<div className={`w-4 h-4 rounded-full -mt-2 ${neuroState.barColor} shadow-[0_0_15px_rgba(255,255,255,0.5)]`}></div>
</div>
{/* Labels */}
<span className="absolute bottom-1 left-2 text-[10px] text-slate-500">Boredom</span>
<span className="absolute bottom-1 right-2 text-[10px] text-slate-500">Burnout</span>
<span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-slate-500">Peak Performance</span>
</div>
</div>

<div className="space-y-4">
<div>
<h4 className="text-xs uppercase tracking-widest text-slate-500 mb-1">Dominant Pathway</h4>
<p className="font-semibold text-lg">{neuroState.title}</p>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-slate-500 mb-1">Brain Region Impact</h4>
<p className="text-purple-300 flex items-start gap-2">
<Activity size={16} className="mt-1 shrink-0"/>
{neuroState.neuro}
</p>
</div>

<div className="bg-white/5 p-3 rounded-lg border border-white/10">
<p className="text-sm text-slate-300 leading-relaxed italic">
"{neuroState.desc}"
</p>
</div>
</div>
</div>

</div>
</div>
</div>
);
};

export default HPAAxisSimulator;
