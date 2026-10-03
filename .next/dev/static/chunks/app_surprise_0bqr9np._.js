(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/surprise/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "surpriseContent",
    ()=>surpriseContent
]);
const surpriseContent = {
    name: 'Nivethaa',
    signature: 'Shakthi',
    experienceName: 'NIVETHAA_OS // LOVE.EXE',
    bootChecks: [
        'Memories loaded',
        'First movie loaded',
        'First date loaded',
        '11 years loaded'
    ],
    criticalDependency: 'YOU ❤️',
    firstMemory: {
        title: 'The First Words',
        question: 'Who said “I love you” first?',
        choices: [
            'SHAKTHI',
            'NIVETHAA'
        ],
        message: 'Maybe one of us said it first. But from that moment on, the feeling belonged to both of us.'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/surprise/surprise-experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SurpriseExperience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/surprise/surprise.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/surprise/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function SurpriseExperience() {
    _s();
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('boot');
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [checks, setChecks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [choice, setChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurpriseExperience.useEffect": ()=>{
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const timers = [];
            const later = {
                "SurpriseExperience.useEffect.later": (callback, delay)=>{
                    timers.push(window.setTimeout(callback, reducedMotion ? 0 : delay));
                }
            }["SurpriseExperience.useEffect.later"];
            [
                25,
                50,
                75,
                100
            ].forEach({
                "SurpriseExperience.useEffect": (value, index)=>{
                    later({
                        "SurpriseExperience.useEffect": ()=>setProgress(value)
                    }["SurpriseExperience.useEffect"], 500 + index * 450);
                    if (index < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].bootChecks.length) {
                        later({
                            "SurpriseExperience.useEffect": ()=>setChecks(index + 1)
                        }["SurpriseExperience.useEffect"], 850 + index * 450);
                    }
                }
            }["SurpriseExperience.useEffect"]);
            later({
                "SurpriseExperience.useEffect": ()=>setStage('ready')
            }["SurpriseExperience.useEffect"], reducedMotion ? 0 : 3100);
            return ({
                "SurpriseExperience.useEffect": ()=>timers.forEach(window.clearTimeout)
            })["SurpriseExperience.useEffect"];
        }
    }["SurpriseExperience.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurpriseExperience.useEffect": ()=>{
            if (stage === 'boot') return;
            const scene = sceneRef.current;
            if (!scene || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            const panel = scene.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel}`);
            if (panel) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(panel, {
                    opacity: 0,
                    y: 22,
                    filter: 'blur(5px)'
                }, {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    duration: 0.8,
                    ease: 'power3.out'
                });
            }
        }
    }["SurpriseExperience.useEffect"], [
        stage
    ]);
    const begin = ()=>setStage('question');
    const choose = (answer)=>{
        setChoice(answer);
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.setTimeout(()=>setStage('success'), reducedMotion ? 0 : 650);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experience,
        ref: sceneRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ambient,
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orb
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].petalOne,
                        children: "✿"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].petalTwo,
                        children: "✿"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].petalThree,
                        children: "✿"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/surprise-experience.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topline,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].experienceName
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].online,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 69,
                                columnNumber: 41
                            }, this),
                            " PRIVATE SESSION"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/surprise-experience.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            stage === 'boot' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].boot}`,
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].seal,
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "✳"
                        }, void 0, false, {
                            fileName: "[project]/app/surprise/surprise-experience.tsx",
                            lineNumber: 74,
                            columnNumber: 59
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                        children: "A little story, made just for you"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].name.split('').join(' ')
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bootLabel,
                        children: [
                            "SYSTEM INITIALIZING",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cursor,
                                children: "_"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 77,
                                columnNumber: 62
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressMeta,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "LOADING OUR STORY"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    String(progress).padStart(3, '0'),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 80,
                                columnNumber: 43
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressTrack,
                        role: "progressbar",
                        "aria-label": "Loading our story",
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": progress,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: `${progress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/surprise/surprise-experience.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checks,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].bootChecks.map((check, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: index < checks ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkVisible : '',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                    check
                                ]
                            }, check, true, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dependency} ${progress === 100 ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dependencyVisible : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].warning,
                                children: "✳"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "One critical dependency found..."
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].criticalDependency
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/surprise-experience.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this) : stage === 'ready' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ready}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readyGlyph,
                        "aria-hidden": "true",
                        children: "♡"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                        children: "All the important things are here"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: [
                            "Before we continue,",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 104,
                                columnNumber: 34
                            }, this),
                            "I need to verify one thing."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signature,
                        children: [
                            "With all my love, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].signature
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 105,
                                columnNumber: 61
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                        onClick: begin,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "BEGIN"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 107,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].microcopy,
                        children: "A small trip down memory lane"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/surprise-experience.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this) : stage === 'question' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memory}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memoryTopline,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "MEMORY 01"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 113,
                                columnNumber: 49
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "01 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                                        lineNumber: 113,
                                        columnNumber: 80
                                    }, this),
                                    " 04"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 113,
                                columnNumber: 71
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memoryOrnament,
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "✳"
                        }, void 0, false, {
                            fileName: "[project]/app/surprise/surprise-experience.tsx",
                            lineNumber: 114,
                            columnNumber: 69
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                        children: "A moment I keep close"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].firstMemory.title
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].question,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].firstMemory.question
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answers,
                        role: "group",
                        "aria-label": "Choose who said I love you first",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].firstMemory.choices.map((answer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answer} ${choice === answer ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerSelected : ''}`,
                                onClick: ()=>choose(answer),
                                type: "button",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerIndex,
                                        children: [
                                            "0",
                                            index + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: answer
                                    }, void 0, false, {
                                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerArrow,
                                        "aria-hidden": "true",
                                        children: "↗"
                                    }, void 0, false, {
                                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, answer, true, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].microcopy,
                        children: "Take your time, my love."
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/surprise-experience.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].success}`,
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memoryTopline,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "MEMORY 01"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 136,
                                columnNumber: 49
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "FOUND ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        children: "♡"
                                    }, void 0, false, {
                                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                                        lineNumber: 136,
                                        columnNumber: 83
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 136,
                                columnNumber: 71
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heartBloom,
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heart,
                                children: "♥"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: "✿"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: "✧"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 139,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: "✿"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 139,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: "✧"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 139,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 139,
                                columnNumber: 45
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 139,
                                columnNumber: 53
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                        children: "Some things never leave us"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: [
                            "The words were only",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 142,
                                columnNumber: 34
                            }, this),
                            "the beginning."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memoryMessage,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].firstMemory.message
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    choice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chosenAnswer,
                        children: [
                            "YOU CHOSE ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: choice
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 144,
                                columnNumber: 67
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 144,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signatureRule
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signature,
                        children: [
                            "Always yours, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].signature
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 146,
                                columnNumber: 57
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comingSoon,
                        children: [
                            "MORE MEMORIES WAIT AHEAD ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "···"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 147,
                                columnNumber: 69
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/surprise-experience.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "BUILT WITH LOVE"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "01 / ∞"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 152,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/surprise-experience.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/surprise/surprise-experience.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(SurpriseExperience, "hn5MhICCNxmpZKy6FxVpVgxKL20=");
_c = SurpriseExperience;
var _c;
__turbopack_context__.k.register(_c, "SurpriseExperience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/surprise/surprise.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "ambient": "surprise-module__gwZywq__ambient",
  "answer": "surprise-module__gwZywq__answer",
  "answerArrow": "surprise-module__gwZywq__answerArrow",
  "answerIndex": "surprise-module__gwZywq__answerIndex",
  "answerSelected": "surprise-module__gwZywq__answerSelected",
  "answers": "surprise-module__gwZywq__answers",
  "blink": "surprise-module__gwZywq__blink",
  "bloom": "surprise-module__gwZywq__bloom",
  "boot": "surprise-module__gwZywq__boot",
  "bootLabel": "surprise-module__gwZywq__bootLabel",
  "checkVisible": "surprise-module__gwZywq__checkVisible",
  "checks": "surprise-module__gwZywq__checks",
  "chosenAnswer": "surprise-module__gwZywq__chosenAnswer",
  "comingSoon": "surprise-module__gwZywq__comingSoon",
  "cursor": "surprise-module__gwZywq__cursor",
  "dependency": "surprise-module__gwZywq__dependency",
  "dependencyVisible": "surprise-module__gwZywq__dependencyVisible",
  "drift": "surprise-module__gwZywq__drift",
  "experience": "surprise-module__gwZywq__experience",
  "footer": "surprise-module__gwZywq__footer",
  "heart": "surprise-module__gwZywq__heart",
  "heartBloom": "surprise-module__gwZywq__heartBloom",
  "kicker": "surprise-module__gwZywq__kicker",
  "memory": "surprise-module__gwZywq__memory",
  "memoryMessage": "surprise-module__gwZywq__memoryMessage",
  "memoryOrnament": "surprise-module__gwZywq__memoryOrnament",
  "memoryTopline": "surprise-module__gwZywq__memoryTopline",
  "microcopy": "surprise-module__gwZywq__microcopy",
  "name": "surprise-module__gwZywq__name",
  "online": "surprise-module__gwZywq__online",
  "orb": "surprise-module__gwZywq__orb",
  "panel": "surprise-module__gwZywq__panel",
  "petalOne": "surprise-module__gwZywq__petalOne",
  "petalThree": "surprise-module__gwZywq__petalThree",
  "petalTwo": "surprise-module__gwZywq__petalTwo",
  "primaryButton": "surprise-module__gwZywq__primaryButton",
  "progressMeta": "surprise-module__gwZywq__progressMeta",
  "progressTrack": "surprise-module__gwZywq__progressTrack",
  "question": "surprise-module__gwZywq__question",
  "ready": "surprise-module__gwZywq__ready",
  "readyGlyph": "surprise-module__gwZywq__readyGlyph",
  "seal": "surprise-module__gwZywq__seal",
  "sealGlow": "surprise-module__gwZywq__sealGlow",
  "signature": "surprise-module__gwZywq__signature",
  "signatureRule": "surprise-module__gwZywq__signatureRule",
  "success": "surprise-module__gwZywq__success",
  "topline": "surprise-module__gwZywq__topline",
  "warning": "surprise-module__gwZywq__warning",
});
}),
]);

//# sourceMappingURL=app_surprise_0bqr9np._.js.map