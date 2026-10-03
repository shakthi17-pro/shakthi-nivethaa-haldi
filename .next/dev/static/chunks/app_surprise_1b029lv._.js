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
    years: 13,
    experienceName: 'NIVETHAA_OS // LOVE.EXE',
    bootChecks: [
        'Memories loaded',
        'First movie loaded',
        'First date loaded',
        '13 years loaded'
    ],
    criticalDependency: 'YOU ❤️',
    firstMemory: {
        title: 'The First Words',
        question: 'Who said “I love you” first?',
        choices: [
            'SHAKTHI',
            'NIVETHAA'
        ],
        revealHeadline: 'The words were only the beginning.',
        message: 'Maybe one of us said it first. But from that moment on, the feeling belonged to both of us.'
    },
    movieMemory: {
        title: 'A Movie',
        question: 'What was our first movie?',
        // Replace these with the real movie titles before sharing the page.
        choices: [
            'Comali',
            'Dear Comrade',
            'Nerkonda Paarvai'
        ],
        // Keep the existing answer until Shakthi confirms the real movie.
        answer: 'Our first movie together',
        revealHeadline: 'Our first movie.',
        message: 'The screen went dark, but that little memory stayed with me.'
    },
    dateMemory: {
        title: 'The Beginning',
        question: 'What was our first date?',
        // Replace these with your real places or date memories before sharing.
        choices: [
            'Ice Cream Parlour',
            'Maruthamalai Temple',
            'A quiet café in Coimbatore'
        ],
        // Keep the existing answer until Shakthi confirms the real first date.
        answer: 'The day our story began',
        revealHeadline: 'The beginning of us.',
        message: 'Somehow, every road after that kept bringing me closer to you.'
    },
    favouriteMemory: {
        title: 'One Last Thing...',
        question: 'What is our favourite memory?',
        reveal: 'My favourite memories are the ordinary moments that became extraordinary because I was with you. And after all this time, I still choose you.'
    },
    yearsMessage: '13 years of becoming us.',
    haldi: {
        date: 'OCTOBER 3',
        venue: 'ARO VILLAS',
        city: 'MADURAI',
        finalMessage: "Close this. I'm waiting for you."
    },
    comfortRoom: {
        eyebrow: 'A quiet little place, just for you',
        title: 'Take a breath, my love.',
        message: 'Whatever today brings, you do not have to carry it alone. I am right here with you. We can take this one moment at a time.',
        signoff: 'Always by your side, Shakthi ❤️'
    },
    secretMessage: 'You found my little secret. I love you more than this code could ever say.'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/surprise/scenes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BootScene",
    ()=>BootScene,
    "CelebrationScene",
    ()=>CelebrationScene,
    "ComfortScene",
    ()=>ComfortScene,
    "DateScene",
    ()=>DateScene,
    "FavouriteScene",
    ()=>FavouriteScene,
    "HaldiScene",
    ()=>HaldiScene,
    "LoveQuestionScene",
    ()=>LoveQuestionScene,
    "MemoryRevealScene",
    ()=>MemoryRevealScene,
    "MovieScene",
    ()=>MovieScene,
    "ProcessingScene",
    ()=>ProcessingScene,
    "ReadyScene",
    ()=>ReadyScene,
    "YearsScene",
    ()=>YearsScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/surprise/surprise.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/surprise/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function MemoryHeading({ index, title, question }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memoryTopline,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "MEMORY ",
                            index
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 14,
                        columnNumber: 45
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            index,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 14,
                                columnNumber: 86
                            }, this),
                            " 04"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 14,
                        columnNumber: 72
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memoryOrnament,
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "✳"
                }, void 0, false, {
                    fileName: "[project]/app/surprise/scenes.tsx",
                    lineNumber: 15,
                    columnNumber: 65
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                children: "A moment I keep close"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: title
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].question,
                children: question
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/surprise/scenes.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = MemoryHeading;
function BootScene({ progress, checks }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].boot}`,
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].seal,
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "✳"
                }, void 0, false, {
                    fileName: "[project]/app/surprise/scenes.tsx",
                    lineNumber: 26,
                    columnNumber: 55
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                children: "A little story, made just for you"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].name.split('').join(' ')
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bootLabel,
                children: [
                    "SYSTEM INITIALIZING",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cursor,
                        children: "_"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 29,
                        columnNumber: 58
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressMeta,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "LOADING OUR STORY"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 30,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            String(progress).padStart(3, '0'),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 30,
                        columnNumber: 74
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 30,
                columnNumber: 7
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
                    fileName: "[project]/app/surprise/scenes.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 31,
                columnNumber: 7
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
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 36,
                                columnNumber: 81
                            }, this),
                            check
                        ]
                    }, check, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dependency} ${progress === 100 ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dependencyVisible : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].warning,
                        children: "✳"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "One critical dependency found..."
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 40,
                        columnNumber: 50
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].criticalDependency
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 40,
                        columnNumber: 95
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/surprise/scenes.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = BootScene;
function ReadyScene({ onBegin }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ready}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readyGlyph,
                "aria-hidden": "true",
                children: "♡"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                children: "All the important things are here"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: [
                    "Before we continue,",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 51,
                        columnNumber: 30
                    }, this),
                    "I need to verify one thing."
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signature,
                children: [
                    "With all my love, ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].signature
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 52,
                        columnNumber: 57
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                onClick: onBegin,
                type: "button",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "BEGIN"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 53,
                        columnNumber: 80
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "↗"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 53,
                        columnNumber: 98
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].microcopy,
                children: "A small trip down memory lane"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/surprise/scenes.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c2 = ReadyScene;
function LoveQuestionScene({ onChoose, feedback, selected }) {
    const memory = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].firstMemory;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memory}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MemoryHeading, {
                index: "01",
                title: memory.title,
                question: memory.question
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answers,
                role: "group",
                "aria-label": "Choose who said I love you first",
                children: memory.choices.map((answer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answer} ${selected === answer ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerSelected : ''}`,
                        onClick: ()=>onChoose(answer),
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerIndex,
                                children: [
                                    "0",
                                    index + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: answer
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 67,
                                columnNumber: 69
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerArrow,
                                "aria-hidden": "true",
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 67,
                                columnNumber: 90
                            }, this)
                        ]
                    }, answer, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].feedback,
                "aria-live": "polite",
                children: feedback
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].microcopy,
                children: "Take your time, my love."
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/surprise/scenes.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c3 = LoveQuestionScene;
function MemoryRevealScene({ index, headline, message, onNext, nextLabel = 'NEXT MEMORY' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reveal}`,
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memoryTopline,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "MEMORY ",
                            index
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 80,
                        columnNumber: 45
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "FOUND ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: "♡"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 80,
                                columnNumber: 84
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 80,
                        columnNumber: 72
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heartBloom,
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heart,
                        children: "♥"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 81,
                        columnNumber: 61
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        children: "✿"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 81,
                        columnNumber: 100
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        children: "✧"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 81,
                        columnNumber: 108
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        children: "✿"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 81,
                        columnNumber: 116
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        children: "✧"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 81,
                        columnNumber: 124
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        children: "·"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 81,
                        columnNumber: 132
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        children: "·"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 81,
                        columnNumber: 140
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                children: "Some things never leave us"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: headline
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memoryMessage,
                children: message
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signatureRule
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signature,
                children: [
                    "Always yours, ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].signature
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 86,
                        columnNumber: 53
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                onClick: onNext,
                type: "button",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: nextLabel
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 87,
                        columnNumber: 79
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "↗"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 87,
                        columnNumber: 103
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/surprise/scenes.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_c4 = MemoryRevealScene;
function MovieScene({ onChoose, feedback }) {
    _s();
    const memory = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].movieMemory;
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memory} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].movieScene}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MemoryHeading, {
                index: "02",
                title: memory.title,
                question: memory.question
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tickets,
                role: "group",
                "aria-label": "Choose our first movie",
                children: memory.choices.map((movie, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ticket} ${selected === movie ? movie === String(memory.answer) ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ticketSelected : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ticketPicked : ''}`,
                        onClick: ()=>{
                            setSelected(movie);
                            onChoose(movie);
                        },
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ticketStub,
                                children: [
                                    "ADMIT ONE ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        children: "✳"
                                    }, void 0, false, {
                                        fileName: "[project]/app/surprise/scenes.tsx",
                                        lineNumber: 101,
                                        columnNumber: 59
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ticketNumber,
                                children: [
                                    "0",
                                    index + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ticketTitle,
                                children: movie
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ticketFoot,
                                children: "A NIGHT TO REMEMBER"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        ]
                    }, movie, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].feedback,
                "aria-live": "polite",
                children: feedback
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            selected === String(memory.answer) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filmTransition,
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/app/surprise/scenes.tsx",
                    lineNumber: 109,
                    columnNumber: 104
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 109,
                columnNumber: 46
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/surprise/scenes.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(MovieScene, "PVKrpNrydW4BpnDEq9OT3cVmCk4=");
_c5 = MovieScene;
function DateScene({ complete, onChoose, feedback }) {
    const memory = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].dateMemory;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memory} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dateScene}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MemoryHeading, {
                index: "03",
                title: memory.title,
                question: memory.question
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].map} ${complete ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapComplete : ''}`,
                "aria-label": complete ? 'The route to the memory is revealed' : 'A map waiting for its destination',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapGrid
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 320 122",
                        role: "img",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].routeUnderlay,
                                d: "M24 93 C68 95 58 31 111 40 S162 101 199 72 S242 21 296 29"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].routePath,
                                d: "M24 93 C68 95 58 31 111 40 S162 101 199 72 S242 21 296 29"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapStart,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 125,
                                columnNumber: 43
                            }, this),
                            "THEN"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapDestination,
                        children: "♡"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapEnd,
                        children: "US"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            !complete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answers,
                role: "group",
                "aria-label": "Choose our first date",
                children: [
                    memory.choices.map((place, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answer,
                            onClick: ()=>onChoose(place),
                            type: "button",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerIndex,
                                    children: [
                                        "0",
                                        index + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/surprise/scenes.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: place
                                }, void 0, false, {
                                    fileName: "[project]/app/surprise/scenes.tsx",
                                    lineNumber: 133,
                                    columnNumber: 71
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerArrow,
                                    "aria-hidden": "true",
                                    children: "↗"
                                }, void 0, false, {
                                    fileName: "[project]/app/surprise/scenes.tsx",
                                    lineNumber: 133,
                                    columnNumber: 91
                                }, this)
                            ]
                        }, place, true, {
                            fileName: "[project]/app/surprise/scenes.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].feedback,
                        "aria-live": "polite",
                        children: feedback
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapMemory,
                "aria-live": "polite",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: memory.message
                }, void 0, false, {
                    fileName: "[project]/app/surprise/scenes.tsx",
                    lineNumber: 139,
                    columnNumber: 62
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/surprise/scenes.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_c6 = DateScene;
function FavouriteScene({ value, error, onChange, onSubmit }) {
    function submit(event) {
        event.preventDefault();
        onSubmit(value);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memory} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].favouriteScene}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memoryTopline,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "MEMORY 04"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 162,
                        columnNumber: 45
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "ONE LAST THING"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 162,
                        columnNumber: 67
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memoryOrnament,
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "❧"
                }, void 0, false, {
                    fileName: "[project]/app/surprise/scenes.tsx",
                    lineNumber: 163,
                    columnNumber: 65
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                children: "A page only we could write"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].favouriteMemory.title
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].question,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].favouriteMemory.question
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memoryForm,
                onSubmit: submit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visuallyHidden,
                        htmlFor: "favourite-memory",
                        children: "Your favourite memory"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "favourite-memory",
                        value: value,
                        onChange: (event)=>onChange(event.target.value),
                        placeholder: "A place, a day, a tiny detail...",
                        rows: 3,
                        maxLength: 2000,
                        required: true,
                        "aria-describedby": error ? 'memory-save-error' : undefined
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                        type: "submit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "KEEP THIS MEMORY"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 170,
                                columnNumber: 64
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 170,
                                columnNumber: 93
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveError,
                id: "memory-save-error",
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 172,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].microcopy,
                children: "There is no wrong answer here."
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/surprise/scenes.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_c7 = FavouriteScene;
function ProcessingScene({ match, onNext }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processing}`,
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processingRing,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: match ? '♥' : '...'
                }, void 0, false, {
                    fileName: "[project]/app/surprise/scenes.tsx",
                    lineNumber: 181,
                    columnNumber: 46
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                children: match ? 'The heart remembers' : 'Just a little moment'
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: match ? 'MATCH FOUND' : 'PROCESSING...'
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            match && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].matchHeart,
                        children: "❤️"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 184,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memoryMessage,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].favouriteMemory.reveal
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 184,
                        columnNumber: 58
                    }, this),
                    onNext && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                        onClick: onNext,
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "CONTINUE"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 184,
                                columnNumber: 221
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 184,
                                columnNumber: 242
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 184,
                        columnNumber: 149
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 184,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/surprise/scenes.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
_c8 = ProcessingScene;
function YearsScene({ onRun }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].yearsScene}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].yearsMessage
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].systemLabel,
                children: "SYSTEM STATUS"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusRows,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "MEMORIES"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 195,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 195,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "100%"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 195,
                                columnNumber: 38
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "LOVE"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 196,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 196,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "100%"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 196,
                                columnNumber: 34
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "TRUST"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 197,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 197,
                                columnNumber: 30
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "100%"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 197,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "TIME TOGETHER"
                            }, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 198,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 198,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].years,
                                    " YEARS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/surprise/scenes.tsx",
                                lineNumber: 198,
                                columnNumber: 43
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].systemReady,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 200,
                        columnNumber: 41
                    }, this),
                    " SYSTEM READY"
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].runCommand,
                children: [
                    "RUN NEXT_CHAPTER",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "()"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 201,
                        columnNumber: 56
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                onClick: onRun,
                type: "button",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "RUN"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 202,
                        columnNumber: 78
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "↗"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 202,
                        columnNumber: 94
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/surprise/scenes.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
_c9 = YearsScene;
function HaldiScene({ onGo }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].haldiScene}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mandala,
                "aria-hidden": "true",
                children: "✺"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                children: "The next chapter begins"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nextChapter,
                children: "NEXT CHAPTER"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lotus,
                "aria-hidden": "true",
                children: "🪷"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "HALDI"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].haldiDetails,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].haldi.date
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 215,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        children: "✦"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 215,
                        columnNumber: 85
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].haldi.venue
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 215,
                        columnNumber: 93
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].haldi.city
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 215,
                        columnNumber: 135
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readyQuestion,
                children: "ARE YOU READY?"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].haldiButton}`,
                onClick: onGo,
                type: "button",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "LET'S GO"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 217,
                        columnNumber: 104
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "↗"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 217,
                        columnNumber: 125
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/surprise/scenes.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_c10 = HaldiScene;
function CelebrationScene({ commandsVisible, onComfort }) {
    const commands = [
        '> executing haldi.exe',
        `> destination: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].haldi.venue}, ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].haldi.city}`,
        '> status: READY ❤️'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].celebration}`,
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].celebrationPetals,
                "aria-hidden": "true",
                children: "✿　✧　✿"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                children: "The moment is almost here"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].terminal,
                "aria-label": "Haldi launch status",
                children: commands.slice(0, commandsVisible).map((command)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: command
                    }, command, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 229,
                        columnNumber: 62
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            commandsVisible >= commands.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].finalMessage,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].haldi.finalMessage
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 231,
                columnNumber: 46
            }, this),
            commandsVisible >= commands.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comfortTrigger,
                type: "button",
                "aria-label": "Open your quiet comfort room",
                onClick: onComfort,
                children: "✿"
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 232,
                columnNumber: 46
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/surprise/scenes.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
_c11 = CelebrationScene;
function ComfortScene({ onReturn }) {
    const room = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].comfortRoom;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comfortScene}`,
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comfortBloom,
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "♡"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 241,
                        columnNumber: 63
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        children: "✿"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 241,
                        columnNumber: 77
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        children: "✧"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 241,
                        columnNumber: 85
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        children: "✿"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 241,
                        columnNumber: 93
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                children: room.eyebrow
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: room.title
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comfortMessage,
                children: room.message
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comfortSignoff,
                children: room.signoff
            }, void 0, false, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                type: "button",
                onClick: onReturn,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "BACK TO OUR MOMENT"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 246,
                        columnNumber: 81
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "↗"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/scenes.tsx",
                        lineNumber: 246,
                        columnNumber: 112
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/scenes.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/surprise/scenes.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
_c12 = ComfortScene;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "MemoryHeading");
__turbopack_context__.k.register(_c1, "BootScene");
__turbopack_context__.k.register(_c2, "ReadyScene");
__turbopack_context__.k.register(_c3, "LoveQuestionScene");
__turbopack_context__.k.register(_c4, "MemoryRevealScene");
__turbopack_context__.k.register(_c5, "MovieScene");
__turbopack_context__.k.register(_c6, "DateScene");
__turbopack_context__.k.register(_c7, "FavouriteScene");
__turbopack_context__.k.register(_c8, "ProcessingScene");
__turbopack_context__.k.register(_c9, "YearsScene");
__turbopack_context__.k.register(_c10, "HaldiScene");
__turbopack_context__.k.register(_c11, "CelebrationScene");
__turbopack_context__.k.register(_c12, "ComfortScene");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/surprise/scenes.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const reducedMotionQuery = '(prefers-reduced-motion: reduce)';
function SurpriseExperience() {
    _s();
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('boot');
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [checks, setChecks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loveChoice, setLoveChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dateComplete, setDateComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [secretOpen, setSecretOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [commandCount, setCommandCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [musicPlaying, setMusicPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [musicAvailable, setMusicAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [favouriteDraft, setFavouriteDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [favouriteSaveError, setFavouriteSaveError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const secretTaps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const secretTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurpriseExperience.useEffect": ()=>{
            console.info('%c// Hey Nivethaa 👀\n// If you\'re reading this,\n// yes, I actually coded this for you.\n//\n// - Shakthi ❤️', 'color: #d6b873; font: 14px Georgia, serif; line-height: 1.6;');
            const reducedMotion = window.matchMedia(reducedMotionQuery).matches;
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
                    later({
                        "SurpriseExperience.useEffect": ()=>setChecks(index + 1)
                    }["SurpriseExperience.useEffect"], 850 + index * 450);
                }
            }["SurpriseExperience.useEffect"]);
            later({
                "SurpriseExperience.useEffect": ()=>setStage('ready')
            }["SurpriseExperience.useEffect"], 3100);
            return ({
                "SurpriseExperience.useEffect": ()=>timers.forEach(window.clearTimeout)
            })["SurpriseExperience.useEffect"];
        }
    }["SurpriseExperience.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurpriseExperience.useEffect": ()=>{
            if (stage === 'boot' || window.matchMedia(reducedMotionQuery).matches) return;
            const panel = sceneRef.current?.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel}`);
            if (!panel) return;
            const tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(panel, {
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
            return ({
                "SurpriseExperience.useEffect": ()=>{
                    tween.kill();
                }
            })["SurpriseExperience.useEffect"];
        }
    }["SurpriseExperience.useEffect"], [
        stage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurpriseExperience.useEffect": ()=>{
            if (stage !== 'celebration') return;
            setCommandCount(0);
            const timer = window.setInterval({
                "SurpriseExperience.useEffect.timer": ()=>{
                    setCommandCount({
                        "SurpriseExperience.useEffect.timer": (count)=>{
                            if (count >= 3) {
                                window.clearInterval(timer);
                                return 3;
                            }
                            return count + 1;
                        }
                    }["SurpriseExperience.useEffect.timer"]);
                }
            }["SurpriseExperience.useEffect.timer"], window.matchMedia(reducedMotionQuery).matches ? 0 : 650);
            return ({
                "SurpriseExperience.useEffect": ()=>window.clearInterval(timer)
            })["SurpriseExperience.useEffect"];
        }
    }["SurpriseExperience.useEffect"], [
        stage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurpriseExperience.useEffect": ()=>({
                "SurpriseExperience.useEffect": ()=>{
                    if (secretTimer.current) window.clearTimeout(secretTimer.current);
                }
            })["SurpriseExperience.useEffect"]
    }["SurpriseExperience.useEffect"], []);
    const moveAfter = (next, delay = 650)=>{
        window.setTimeout(()=>setStage(next), window.matchMedia(reducedMotionQuery).matches ? 0 : delay);
    };
    const toggleMusic = async ()=>{
        const audio = audioRef.current;
        if (!audio) return;
        if (!audio.paused) {
            audio.pause();
            setMusicPlaying(false);
            return;
        }
        try {
            await audio.play();
            setMusicPlaying(true);
        } catch  {
            setMusicPlaying(false);
        }
    };
    const beginExperience = ()=>{
        setStage('loveQuestion');
        void toggleMusic();
    };
    const submitFavouriteMemory = async (memory)=>{
        const startedAt = Date.now();
        setFavouriteDraft(memory);
        setFavouriteSaveError('');
        setStage('processing');
        try {
            const response = await fetch('/api/favourite-memory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    memory
                })
            });
            if (!response.ok) throw new Error('The memory could not be saved.');
            const remainingAnimation = Math.max(0, 1500 - (Date.now() - startedAt));
            window.setTimeout(()=>setStage('match'), remainingAnimation);
        } catch  {
            setFavouriteSaveError('I couldn’t save that memory just yet. Please try again in a moment.');
            setStage('favourite');
        }
    };
    const chooseMovie = (answer)=>{
        const configuredAnswerExists = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].movieMemory.choices.includes(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].movieMemory.answer);
        if (configuredAnswerExists && answer !== __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].movieMemory.answer) {
            setFeedback('Not that one, love. Give it another little try.');
            return;
        }
        setFeedback('');
        moveAfter('movieReveal');
    };
    const chooseDate = (answer)=>{
        const configuredAnswerExists = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].dateMemory.choices.includes(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].dateMemory.answer);
        if (configuredAnswerExists && answer !== __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].dateMemory.answer) {
            setFeedback('Almost, my love. Follow the memory once more.');
            return;
        }
        setFeedback('');
        setDateComplete(true);
    };
    const unlockSecret = ()=>{
        secretTaps.current += 1;
        if (secretTimer.current) window.clearTimeout(secretTimer.current);
        if (secretTaps.current >= 5) {
            secretTaps.current = 0;
            setSecretOpen(true);
            return;
        }
        secretTimer.current = window.setTimeout(()=>{
            secretTaps.current = 0;
        }, 2400);
    };
    const renderStage = ()=>{
        switch(stage){
            case 'boot':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BootScene"], {
                    progress: progress,
                    checks: checks
                }, void 0, false, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 177,
                    columnNumber: 27
                }, this);
            case 'ready':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyScene"], {
                    onBegin: beginExperience
                }, void 0, false, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 178,
                    columnNumber: 28
                }, this);
            case 'loveQuestion':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoveQuestionScene"], {
                    onChoose: (answer)=>{
                        setLoveChoice(answer);
                        moveAfter('loveReveal');
                    },
                    selected: loveChoice,
                    feedback: feedback
                }, void 0, false, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 179,
                    columnNumber: 35
                }, this);
            case 'loveReveal':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryRevealScene"], {
                    index: "01",
                    headline: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].firstMemory.revealHeadline,
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].firstMemory.message,
                    onNext: ()=>setStage('movieQuestion')
                }, void 0, false, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 180,
                    columnNumber: 33
                }, this);
            case 'movieQuestion':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MovieScene"], {
                    onChoose: chooseMovie,
                    feedback: feedback
                }, void 0, false, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 181,
                    columnNumber: 36
                }, this);
            case 'movieReveal':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryRevealScene"], {
                    index: "02",
                    headline: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].movieMemory.revealHeadline,
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].movieMemory.message,
                    onNext: ()=>setStage('dateQuestion')
                }, void 0, false, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 182,
                    columnNumber: 34
                }, this);
            case 'dateQuestion':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DateScene"], {
                    complete: dateComplete,
                    onChoose: chooseDate,
                    feedback: feedback
                }, void 0, false, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 183,
                    columnNumber: 35
                }, this);
            case 'dateReveal':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryRevealScene"], {
                    index: "03",
                    headline: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].dateMemory.revealHeadline,
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].dateMemory.message,
                    onNext: ()=>setStage('favourite')
                }, void 0, false, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 184,
                    columnNumber: 33
                }, this);
            case 'favourite':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FavouriteScene"], {
                    value: favouriteDraft,
                    error: favouriteSaveError,
                    onChange: setFavouriteDraft,
                    onSubmit: submitFavouriteMemory
                }, void 0, false, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 185,
                    columnNumber: 32
                }, this);
            case 'processing':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProcessingScene"], {
                    match: false
                }, void 0, false, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 186,
                    columnNumber: 33
                }, this);
            case 'match':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProcessingScene"], {
                    match: true,
                    onNext: ()=>setStage('years')
                }, void 0, false, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 187,
                    columnNumber: 28
                }, this);
            case 'years':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YearsScene"], {
                    onRun: ()=>setStage('haldi')
                }, void 0, false, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 188,
                    columnNumber: 28
                }, this);
            case 'haldi':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HaldiScene"], {
                    onGo: ()=>setStage('celebration')
                }, void 0, false, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 189,
                    columnNumber: 28
                }, this);
            case 'celebration':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CelebrationScene"], {
                    commandsVisible: commandCount,
                    onComfort: ()=>setStage('comfort')
                }, void 0, false, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 190,
                    columnNumber: 34
                }, this);
            case 'comfort':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$scenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComfortScene"], {
                    onReturn: ()=>setStage('celebration')
                }, void 0, false, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 191,
                    columnNumber: 30
                }, this);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurpriseExperience.useEffect": ()=>{
            if (dateComplete && stage === 'dateQuestion') moveAfter('dateReveal', 2000);
        // The completed route draws first, then the memory is revealed.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["SurpriseExperience.useEffect"], [
        dateComplete,
        stage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experience,
        ref: sceneRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: "/audio/moonu_3_bike_ride.mp3",
                loop: true,
                preload: "none",
                onPlay: ()=>setMusicPlaying(true),
                onPause: ()=>setMusicPlaying(false),
                onError: ()=>{
                    setMusicAvailable(false);
                    setMusicPlaying(false);
                }
            }, void 0, false, {
                fileName: "[project]/app/surprise/surprise-experience.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ambient,
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orb
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].petalOne,
                        children: "✿"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 213,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].petalTwo,
                        children: "✿"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 213,
                        columnNumber: 82
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].petalThree,
                        children: "✿"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 213,
                        columnNumber: 124
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/surprise-experience.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topline,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].experienceName
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerActions,
                        children: [
                            stage !== 'boot' && stage !== 'ready' && musicAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].musicControl,
                                type: "button",
                                onClick: ()=>void toggleMusic(),
                                "aria-label": musicPlaying ? 'Pause background music' : 'Play background music',
                                "aria-pressed": musicPlaying,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: musicPlaying ? 'Ⅱ' : '▶'
                                    }, void 0, false, {
                                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this),
                                    musicPlaying ? ' MUSIC ON' : ' MUSIC OFF'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].online,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                                        lineNumber: 223,
                                        columnNumber: 43
                                    }, this),
                                    " PRIVATE SESSION"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/surprise/surprise-experience.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/surprise-experience.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            renderStage(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "BUILT WITH LOVE"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secretTrigger,
                        type: "button",
                        "aria-label": "A little hidden surprise",
                        onClick: unlockSecret,
                        children: "✧"
                    }, void 0, false, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].years,
                            " / ∞"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/surprise/surprise-experience.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/surprise/surprise-experience.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            secretOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secretOverlay,
                role: "presentation",
                onClick: ()=>setSecretOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secretCard,
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "secret-title",
                    onClick: (event)=>event.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secretClose,
                            type: "button",
                            "aria-label": "Close secret message",
                            onClick: ()=>setSecretOpen(false),
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/app/surprise/surprise-experience.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$surprise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                            children: "Only for you"
                        }, void 0, false, {
                            fileName: "[project]/app/surprise/surprise-experience.tsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "secret-title",
                            children: "❤️ SECRET MODE UNLOCKED"
                        }, void 0, false, {
                            fileName: "[project]/app/surprise/surprise-experience.tsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$surprise$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surpriseContent"].secretMessage
                        }, void 0, false, {
                            fileName: "[project]/app/surprise/surprise-experience.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/surprise/surprise-experience.tsx",
                    lineNumber: 234,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/surprise/surprise-experience.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/surprise/surprise-experience.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
_s(SurpriseExperience, "jaIDy0NFVc1Mm9CqEvAywbfickc=");
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
  "celebration": "surprise-module__gwZywq__celebration",
  "celebrationPetals": "surprise-module__gwZywq__celebrationPetals",
  "checkVisible": "surprise-module__gwZywq__checkVisible",
  "checks": "surprise-module__gwZywq__checks",
  "chosenAnswer": "surprise-module__gwZywq__chosenAnswer",
  "comfortBloom": "surprise-module__gwZywq__comfortBloom",
  "comfortMessage": "surprise-module__gwZywq__comfortMessage",
  "comfortScene": "surprise-module__gwZywq__comfortScene",
  "comfortSignoff": "surprise-module__gwZywq__comfortSignoff",
  "comfortTrigger": "surprise-module__gwZywq__comfortTrigger",
  "comingSoon": "surprise-module__gwZywq__comingSoon",
  "cursor": "surprise-module__gwZywq__cursor",
  "dependency": "surprise-module__gwZywq__dependency",
  "dependencyVisible": "surprise-module__gwZywq__dependencyVisible",
  "drift": "surprise-module__gwZywq__drift",
  "experience": "surprise-module__gwZywq__experience",
  "favouriteScene": "surprise-module__gwZywq__favouriteScene",
  "feedback": "surprise-module__gwZywq__feedback",
  "filmFade": "surprise-module__gwZywq__filmFade",
  "filmTransition": "surprise-module__gwZywq__filmTransition",
  "filmWipe": "surprise-module__gwZywq__filmWipe",
  "finalMessage": "surprise-module__gwZywq__finalMessage",
  "float": "surprise-module__gwZywq__float",
  "footer": "surprise-module__gwZywq__footer",
  "haldiButton": "surprise-module__gwZywq__haldiButton",
  "haldiDetails": "surprise-module__gwZywq__haldiDetails",
  "haldiScene": "surprise-module__gwZywq__haldiScene",
  "headerActions": "surprise-module__gwZywq__headerActions",
  "heart": "surprise-module__gwZywq__heart",
  "heartBloom": "surprise-module__gwZywq__heartBloom",
  "kicker": "surprise-module__gwZywq__kicker",
  "lotus": "surprise-module__gwZywq__lotus",
  "mandala": "surprise-module__gwZywq__mandala",
  "map": "surprise-module__gwZywq__map",
  "mapComplete": "surprise-module__gwZywq__mapComplete",
  "mapDestination": "surprise-module__gwZywq__mapDestination",
  "mapEnd": "surprise-module__gwZywq__mapEnd",
  "mapGrid": "surprise-module__gwZywq__mapGrid",
  "mapMemory": "surprise-module__gwZywq__mapMemory",
  "mapStart": "surprise-module__gwZywq__mapStart",
  "matchHeart": "surprise-module__gwZywq__matchHeart",
  "memory": "surprise-module__gwZywq__memory",
  "memoryForm": "surprise-module__gwZywq__memoryForm",
  "memoryMessage": "surprise-module__gwZywq__memoryMessage",
  "memoryOrnament": "surprise-module__gwZywq__memoryOrnament",
  "memoryTopline": "surprise-module__gwZywq__memoryTopline",
  "microcopy": "surprise-module__gwZywq__microcopy",
  "movieScene": "surprise-module__gwZywq__movieScene",
  "musicControl": "surprise-module__gwZywq__musicControl",
  "name": "surprise-module__gwZywq__name",
  "nextChapter": "surprise-module__gwZywq__nextChapter",
  "online": "surprise-module__gwZywq__online",
  "orb": "surprise-module__gwZywq__orb",
  "panel": "surprise-module__gwZywq__panel",
  "petalOne": "surprise-module__gwZywq__petalOne",
  "petalThree": "surprise-module__gwZywq__petalThree",
  "petalTwo": "surprise-module__gwZywq__petalTwo",
  "primaryButton": "surprise-module__gwZywq__primaryButton",
  "processing": "surprise-module__gwZywq__processing",
  "processingRing": "surprise-module__gwZywq__processingRing",
  "progressMeta": "surprise-module__gwZywq__progressMeta",
  "progressTrack": "surprise-module__gwZywq__progressTrack",
  "question": "surprise-module__gwZywq__question",
  "ready": "surprise-module__gwZywq__ready",
  "readyGlyph": "surprise-module__gwZywq__readyGlyph",
  "readyQuestion": "surprise-module__gwZywq__readyQuestion",
  "reveal": "surprise-module__gwZywq__reveal",
  "routePath": "surprise-module__gwZywq__routePath",
  "routeUnderlay": "surprise-module__gwZywq__routeUnderlay",
  "runCommand": "surprise-module__gwZywq__runCommand",
  "saveError": "surprise-module__gwZywq__saveError",
  "seal": "surprise-module__gwZywq__seal",
  "sealGlow": "surprise-module__gwZywq__sealGlow",
  "secretCard": "surprise-module__gwZywq__secretCard",
  "secretClose": "surprise-module__gwZywq__secretClose",
  "secretOverlay": "surprise-module__gwZywq__secretOverlay",
  "secretTrigger": "surprise-module__gwZywq__secretTrigger",
  "signature": "surprise-module__gwZywq__signature",
  "signatureRule": "surprise-module__gwZywq__signatureRule",
  "spin": "surprise-module__gwZywq__spin",
  "statusRows": "surprise-module__gwZywq__statusRows",
  "success": "surprise-module__gwZywq__success",
  "systemLabel": "surprise-module__gwZywq__systemLabel",
  "systemReady": "surprise-module__gwZywq__systemReady",
  "terminal": "surprise-module__gwZywq__terminal",
  "ticket": "surprise-module__gwZywq__ticket",
  "ticketFoot": "surprise-module__gwZywq__ticketFoot",
  "ticketNumber": "surprise-module__gwZywq__ticketNumber",
  "ticketPicked": "surprise-module__gwZywq__ticketPicked",
  "ticketSelect": "surprise-module__gwZywq__ticketSelect",
  "ticketSelected": "surprise-module__gwZywq__ticketSelected",
  "ticketStub": "surprise-module__gwZywq__ticketStub",
  "ticketTitle": "surprise-module__gwZywq__ticketTitle",
  "tickets": "surprise-module__gwZywq__tickets",
  "topline": "surprise-module__gwZywq__topline",
  "turn": "surprise-module__gwZywq__turn",
  "visuallyHidden": "surprise-module__gwZywq__visuallyHidden",
  "warning": "surprise-module__gwZywq__warning",
  "yearsScene": "surprise-module__gwZywq__yearsScene",
});
}),
]);

//# sourceMappingURL=app_surprise_1b029lv._.js.map