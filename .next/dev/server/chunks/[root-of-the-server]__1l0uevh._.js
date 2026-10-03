module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/app/api/favourite-memory/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic
]);
const STORE_KEY = 'haldi:favourite-memory';
const dynamic = 'force-dynamic';
function storageConfig() {
    const url = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, '');
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    return url && token ? {
        url,
        token
    } : null;
}
function unavailable() {
    return Response.json({
        error: 'Memory storage is not configured yet.'
    }, {
        status: 503,
        headers: {
            'Cache-Control': 'no-store'
        }
    });
}
async function POST(request) {
    const storage = storageConfig();
    if (!storage) return unavailable();
    if (Number(request.headers.get('content-length') ?? 0) > 12_000) {
        return Response.json({
            error: 'The memory is too long.'
        }, {
            status: 413
        });
    }
    const origin = request.headers.get('origin');
    const requestHost = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
    if (origin && requestHost) {
        try {
            if (new URL(origin).host !== requestHost) {
                return Response.json({
                    error: 'Request rejected.'
                }, {
                    status: 403
                });
            }
        } catch  {
            return Response.json({
                error: 'Request rejected.'
            }, {
                status: 403
            });
        }
    }
    let input;
    try {
        input = await request.json();
    } catch  {
        return Response.json({
            error: 'Please submit a memory.'
        }, {
            status: 400
        });
    }
    const memory = typeof input === 'object' && input !== null && 'memory' in input ? input.memory : undefined;
    if (typeof memory !== 'string' || !memory.trim() || memory.length > 2000) {
        return Response.json({
            error: 'The memory must be between 1 and 2000 characters.'
        }, {
            status: 400
        });
    }
    const savedEntry = JSON.stringify({
        memory: memory.trim(),
        submittedAt: new Date().toISOString()
    });
    try {
        const result = await fetch(storage.url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${storage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([
                'SET',
                STORE_KEY,
                savedEntry
            ]),
            cache: 'no-store',
            signal: AbortSignal.timeout(8000)
        });
        if (!result.ok) return Response.json({
            error: 'Could not save this memory.'
        }, {
            status: 502
        });
        const body = await result.json();
        if (body.result !== 'OK') return Response.json({
            error: 'Could not save this memory.'
        }, {
            status: 502
        });
        return Response.json({
            saved: true
        }, {
            headers: {
                'Cache-Control': 'no-store'
            }
        });
    } catch  {
        return Response.json({
            error: 'Could not save this memory right now.'
        }, {
            status: 502
        });
    }
}
async function GET(request) {
    const storage = storageConfig();
    if (!storage) return unavailable();
    if (request.headers.get('authorization') !== `Bearer ${storage.token}`) {
        return Response.json({
            error: 'Not found.'
        }, {
            status: 404,
            headers: {
                'Cache-Control': 'no-store'
            }
        });
    }
    try {
        const result = await fetch(`${storage.url}/get/${encodeURIComponent(STORE_KEY)}`, {
            headers: {
                Authorization: `Bearer ${storage.token}`
            },
            cache: 'no-store',
            signal: AbortSignal.timeout(8000)
        });
        if (!result.ok) return Response.json({
            error: 'Could not retrieve this memory.'
        }, {
            status: 502
        });
        const body = await result.json();
        if (!body.result) return Response.json({
            error: 'No memory has been submitted yet.'
        }, {
            status: 404,
            headers: {
                'Cache-Control': 'no-store'
            }
        });
        return Response.json(JSON.parse(body.result), {
            headers: {
                'Cache-Control': 'no-store'
            }
        });
    } catch  {
        return Response.json({
            error: 'Could not retrieve this memory right now.'
        }, {
            status: 502
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1l0uevh._.js.map