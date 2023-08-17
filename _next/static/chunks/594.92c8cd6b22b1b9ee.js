"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [594], {
        7877: function(e, a, t) {
            t.d(a, {
                offchainLookup: function() {
                    return g
                },
                offchainLookupSignature: function() {
                    return b
                }
            });
            var r = t(8538),
                s = t(2493),
                n = t(5402),
                o = t(8147);
            class c extends n.G {
                constructor({
                    callbackSelector: e,
                    cause: a,
                    data: t,
                    extraData: r,
                    sender: s,
                    urls: n
                }) {
                    super(a.shortMessage || "An error occurred while fetching for an offchain result.", {
                        cause: a,
                        metaMessages: [...a.metaMessages || [], a.metaMessages ? .length ? "" : [], "Offchain Gateway Call:", n && ["  Gateway URL(s):", ...n.map(e => `    ${(0,o.Gr)(e)}`)], `  Sender: ${s}`, `  Data: ${t}`, `  Callback selector: ${e}`, `  Extra data: ${r}`].flat()
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "OffchainLookupError"
                    })
                }
            }
            class i extends n.G {
                constructor({
                    result: e,
                    url: a
                }) {
                    super("Offchain gateway response is malformed. Response data must be a hex value.", {
                        metaMessages: [`Gateway URL: ${(0,o.Gr)(a)}`, `Response: ${(0,s.P)(e)}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "OffchainLookupResponseMalformedError"
                    })
                }
            }
            class u extends n.G {
                constructor({
                    sender: e,
                    to: a
                }) {
                    super("Reverted sender address does not match target contract address (`to`).", {
                        metaMessages: [`Contract address: ${a}`, `OffchainLookup sender address: ${e}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "OffchainLookupSenderMismatchError"
                    })
                }
            }
            var d = t(3926),
                l = t(1258),
                f = t(5040),
                h = t(1525),
                p = t(8863),
                w = t(4840),
                y = t(8075);
            let b = "0x556f1830",
                m = {
                    name: "OffchainLookup",
                    type: "error",
                    inputs: [{
                        name: "sender",
                        type: "address"
                    }, {
                        name: "urls",
                        type: "string[]"
                    }, {
                        name: "callData",
                        type: "bytes"
                    }, {
                        name: "callbackFunction",
                        type: "bytes4"
                    }, {
                        name: "extraData",
                        type: "bytes"
                    }]
                };
            async function g(e, {
                blockNumber: a,
                blockTag: t,
                data: s,
                to: n
            }) {
                let {
                    args: o
                } = (0, l.p)({
                    data: s,
                    abi: [m]
                }), [i, d, y, b, g] = o;
                try {
                    if (! function(e, a) {
                            if (!(0, p.U)(e)) throw new h.b({
                                address: e
                            });
                            if (!(0, p.U)(a)) throw new h.b({
                                address: a
                            });
                            return e.toLowerCase() === a.toLowerCase()
                        }(n, i)) throw new u({
                        sender: i,
                        to: n
                    });
                    let s = await k({
                            data: y,
                            sender: i,
                            urls: d
                        }),
                        {
                            data: o
                        } = await (0, r.R)(e, {
                            blockNumber: a,
                            blockTag: t,
                            data: (0, w.zo)([b, (0, f.E)([{
                                type: "bytes"
                            }, {
                                type: "bytes"
                            }], [s, g])]),
                            to: n
                        });
                    return o
                } catch (e) {
                    throw new c({
                        callbackSelector: b,
                        cause: e,
                        data: s,
                        extraData: g,
                        sender: i,
                        urls: d
                    })
                }
            }
            async function k({
                data: e,
                sender: a,
                urls: t
            }) {
                let r = Error("An unknown error occurred.");
                for (let n = 0; n < t.length; n++) {
                    let o = t[n],
                        c = o.includes("{sender}") || o.includes("{data}") ? "GET" : "POST",
                        u = "POST" === c ? {
                            data: e,
                            sender: a
                        } : void 0;
                    try {
                        let t;
                        let n = await fetch(o.replace("{sender}", a).replace("{data}", e), {
                            body: JSON.stringify(u),
                            method: c
                        });
                        if (t = n.headers.get("Content-Type") ? .startsWith("application/json") ? (await n.json()).data : await n.text(), !n.ok) {
                            r = new d.Gg({
                                body: u,
                                details: (0, s.P)(t.error) || n.statusText,
                                headers: n.headers,
                                status: n.status,
                                url: o
                            });
                            continue
                        }
                        if (!(0, y.v)(t)) {
                            r = new i({
                                result: t,
                                url: o
                            });
                            continue
                        }
                        return t
                    } catch (e) {
                        r = new d.Gg({
                            body: u,
                            details: e.message,
                            url: o
                        })
                    }
                }
                throw r
            }
        }
    }
]);