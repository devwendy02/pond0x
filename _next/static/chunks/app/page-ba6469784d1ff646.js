(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        3415: function(e, s, f) {
            Promise.resolve().then(f.bind(f, 5387))
        },
        5387: function(e, s, f) {
            "use strict";
            f.r(s), f.d(s, {
                default: function() {
                    return S
                }
            });
            var d = f(9914),
                o = f(3962),
                b = f(3089),
                a = f(9999),
                c = f(5214),
                t = f(6369),
                k = f.n(t),
                D = f(7875),
                E = f(3162),
                F = f(7948),
                B = f(3011),
                C = f(9652),
                A = f(1179),
                l = f(6838),
                n = f(7182),
                r = f(7522);
            let x = e => {
                    let {
                        num: s,
                        unit: f,
                        flip: o
                    } = e;
                    return (0, d.jsx)("span", {
                        children: s
                    })
                },
                i = e => {
                    let {
                        days: s,
                        hours: f,
                        minutes: o,
                        seconds: b,
                        breakWordOnMobile: a
                    } = e, c = parseFloat(s), t = parseFloat(f), k = parseFloat(o), D = parseFloat(b), E = !1, F = !1, B = !1, C = !0;
                    return (0 == D && (0 != k && (D = 59), C = !1, B = !0), 0 == k && (0 != t && (k = 59), B = !1, F = !0), 0 == t && (F = !1, 0 != c && (E = !0)), c < 10 && (s = "0" + c), t < 10 && (f = "0" + t), k < 10 && (o = "0" + k), D < 10 && (b = "0" + D), s = c.toString().padStart(2, "0"), f = t.toString().padStart(2, "0"), o = k.toString().padStart(2, "0"), b = D.toString().padStart(2, "0"), c > 7) ? (0, d.jsxs)("div", {
                        children: [(0, d.jsx)(x, {
                            num: s,
                            unit: "Days",
                            flip: E
                        }), "d", " ", (0, d.jsx)(x, {
                            num: f,
                            unit: "Hours",
                            flip: F
                        }), "h"]
                    }) : c > 1 ? (0, d.jsxs)("div", {
                        children: [(0, d.jsx)(x, {
                            num: s,
                            unit: "Days",
                            flip: E
                        }), " d", (0, d.jsx)(x, {
                            num: f,
                            unit: "Hours",
                            flip: F
                        }), " h"]
                    }) : (0, d.jsxs)("div", {
                        className: "flex pt-1.5",
                        children: [(0, d.jsxs)("span", {
                            className: (0, n.Z)(a, "block md:inline leading-[.8]"),
                            children: [(0, d.jsx)(x, {
                                num: s,
                                unit: "Days",
                                flip: E
                            }), ":"]
                        }), (0, d.jsxs)("span", {
                            className: (0, n.Z)(a, "block md:inline leading-[.8]"),
                            children: [(0, d.jsx)(x, {
                                num: f,
                                unit: "Hours",
                                flip: F
                            }), ":"]
                        }), (0, d.jsxs)("span", {
                            className: (0, n.Z)(a, "block md:inline leading-[.8]"),
                            children: [(0, d.jsx)(x, {
                                num: o,
                                unit: "Minutes",
                                flip: B
                            }), ":"]
                        }), (0, d.jsx)("span", {
                            className: (0, n.Z)(a, "block md:inline leading-[.8]"),
                            children: (0, d.jsx)(x, {
                                num: b,
                                unit: "Seconds",
                                flip: C
                            })
                        })]
                    })
                };
            var p = e => {
                let {
                    activeDate: s,
                    title: f,
                    color: b,
                    className: a,
                    breakWordOnMobile: c
                } = e, [t, k] = (0, o.useState)(0), [D, E] = (0, o.useState)(0), [F, B] = (0, o.useState)(0), [C, A] = (0, o.useState)(0), [l, n] = (0, o.useState)(0), [x, p] = (0, o.useState)("");
                return (0, r.xQ)((e, f) => {
                    var d = s - new Date().getTime();
                    if (d <= 0) {
                        E(0), B(0), A(0), n(0);
                        return
                    }
                    E(Math.floor(d / 864e5)), B(Math.floor(d % 864e5 / 36e5)), A(Math.floor(d % 36e5 / 6e4)), n(Math.floor(d % 6e4 / 1e3))
                }), (0, d.jsx)("div", {
                    className: a,
                    children: (0, d.jsx)(i, {
                        breakWordOnMobile: c,
                        days: D,
                        hours: F,
                        minutes: C,
                        seconds: l
                    })
                })
            };
            let u = [{
                value: BigInt(1e18),
                suffix: "e"
            }, {
                value: BigInt(1e15),
                suffix: "p"
            }, {
                value: BigInt(1e12),
                suffix: "t"
            }, {
                value: BigInt(1e9),
                suffix: "b"
            }, {
                value: BigInt(1e6),
                suffix: "m"
            }, {
                value: BigInt(1e3),
                suffix: "k"
            }];
            var m = f(1214),
                h = f.n(m),
                j = () => {
                    let {
                        address: e,
                        isConnected: s
                    } = (0, C.mA)(), f = (0, o.useMemo)(() => (0, B.j)(e), [e]), {
                        data: b
                    } = (0, C.F6)({
                        address: e
                    }), {
                        data: a
                    } = (0, C.KQ)({
                        address: e
                    }), {
                        connect: c,
                        connectors: t,
                        error: k,
                        isLoading: D,
                        pendingConnector: E
                    } = (0, C.$4)(), {
                        open: A,
                        isOpen: l
                    } = (0, F.k_)();
                    return s ? (0, d.jsxs)("div", {
                        className: "relative flex items-center text-2xs lg:text-xs  group hover:rounded-none transition-all cursor-pointer",
                        children: [(0, d.jsx)("div", {
                            onClick: () => A(),
                            className: "hidden text-right text-white pr-2 lg:pr-4 flex items-center",
                            children: a && (0, d.jsxs)(d.Fragment, {
                                children: [(0, d.jsx)("div", {
                                    className: "lg:p-1 mx-1 lg:mx-2",
                                    children: (0, d.jsx)("svg", {
                                        className: "w-4 h-4",
                                        viewBox: "0 0 256 417",
                                        version: "1.1",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        preserveAspectRatio: "xMidYMid",
                                        children: (0, d.jsxs)("g", {
                                            children: [(0, d.jsx)("polygon", {
                                                fill: "#343434",
                                                points: "127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
                                            }), (0, d.jsx)("polygon", {
                                                fill: "#8C8C8C",
                                                points: "127.962 0 0 212.32 127.962 287.959 127.962 154.158"
                                            }), (0, d.jsx)("polygon", {
                                                fill: "#3C3C3B",
                                                points: "127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
                                            }), (0, d.jsx)("polygon", {
                                                fill: "#8C8C8C",
                                                points: "127.962 416.9052 127.962 312.1852 0 236.5852"
                                            }), (0, d.jsx)("polygon", {
                                                fill: "#141414",
                                                points: "127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
                                            }), (0, d.jsx)("polygon", {
                                                fill: "#393939",
                                                points: "0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
                                            })]
                                        })
                                    })
                                }), function(e) {
                                    for (let s of u)
                                        if (e >= Number(s.value)) {
                                            let f = Math.floor(10 * e / Number(s.value)) / 10;
                                            return "".concat(f).concat(s.suffix)
                                        }
                                    return ("number" != typeof e && (e = Number(e)), e < 10) ? parseFloat(e.toFixed(3)).toString() : e < 100 ? parseFloat(e.toFixed(2)).toString() : e < 1e3 ? parseFloat(e.toFixed(1)).toString() : e.toString()
                                }(parseFloat(a.formatted)), " ETH"]
                            })
                        }), (0, d.jsxs)("div", {
                            className: "flex lg:space-x-3 lg:tracking-2px items-center text-white lg:p-2 p-1  hover:bg-white/10 ",
                            children: [(0, d.jsx)("div", {
                                className: "flex flex-col justify-start text-left  ",
                                children: (0, d.jsx)("div", {
                                    className: "lg:text-xs mb-0.5",
                                    children: b ? "".concat(b, " (").concat(f, ")") : f
                                })
                            }), (0, d.jsx)("div", {
                                onClick: () => A(),
                                className: "relative w-10 h-10 px-5",
                                children: (0, d.jsx)(h(), {
                                    src: "/images/pepe.jpeg",
                                    className: "rounded-full",
                                    fill: !0,
                                    alt: "Profile picture"
                                })
                            })]
                        })]
                    }) : (0, d.jsxs)("div", {
                        children: [t.map(e => (0, d.jsxs)("button", {
                            disabled: !e.ready,
                            onClick: () => c({
                                connector: e
                            }),
                            children: [e.name, !e.ready && " (unsupported)", D && e.id === (null == E ? void 0 : E.id) && " (connecting)"]
                        }, e.id)), k && (0, d.jsx)("div", {
                            children: k.message
                        })]
                    })
                },
                g = e => {
                    let {
                        className: s,
                        ...f
                    } = e, [b, a] = (0, o.useState)(!1), {
                        open: c,
                        isOpen: t
                    } = (0, F.k_)(), {
                        isConnected: k
                    } = (0, C.mA)(), {
                        chain: D,
                        chains: B
                    } = (0, E.Hy)(), {
                        disconnect: A
                    } = (0, C.qL)();
                    return (0, o.useEffect)(() => {
                        k || a(t)
                    }, [t]), (0, d.jsxs)("div", {
                        children: [b, k ? (null == D ? void 0 : D.unsupported) ? (0, d.jsx)("button", {
                            onClick: () => c({
                                route: "SelectNetwork"
                            }),
                            type: "button",
                            children: (0, d.jsx)("div", {
                                className: "relative z-10",
                                children: "Wrong network"
                            })
                        }) : (0, d.jsx)(j, {}) : (0, d.jsx)("button", {
                            className: "".concat(s || "flex items-center justify-center w-24 h-10 p-3 text-center text-black w-full border border-black rounded-lg cursor-pointer hover:bg-purple-900 bg-neutral-800"),
                            onClick: c,
                            disabled: b,
                            type: "button",
                            children: (0, d.jsxs)("div", {
                                className: "relative z-10",
                                children: [" ", t ? "Loading..." : k ? "Disconnect" : "Connect Wallet", " "]
                            })
                        })]
                    })
                },
                y = JSON.parse('[{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"alreadyClaimedByAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"beforeStartBuffer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint32[]","name":"offsets","type":"uint32[]"},{"internalType":"bytes32[][]","name":"merkleProofs","type":"bytes32[][]"}],"name":"canClaim","outputs":[{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canEndAfterTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint32[]","name":"offsets","type":"uint32[]"},{"internalType":"bytes32[][]","name":"merkleProofs","type":"bytes32[][]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"close","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentOffset","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ended","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openedAtBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openedAtTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"opener","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pondCoin","outputs":[{"internalType":"contract IPondCoin","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
            let v = (0, b.v)({
                chain: c.RJ,
                transport: (0, a.d)()
            });

            function N() {
                let {
                    address: e,
                    isConnected: s
                } = (0, C.mA)(), {
                    disconnect: f
                } = (0, C.qL)(), {
                    open: b,
                    isOpen: a
                } = (0, F.k_)(), {
                    chain: t,
                    chains: n
                } = (0, E.Hy)(), r = (0, o.useMemo)(() => (0, B.j)(e), [e]), x = [], i = 0, [u, m] = (0, o.useState)(!1), [h, j] = (0, o.useState)(!1), [N, z] = (0, o.useState)(), [M, S] = (0, o.useState)(), [_, L] = (0, o.useState)(), [T, O] = (0, o.useState)(0), [I, P] = (0, o.useState)(0), [H, V] = (0, o.useState)(0), [R, W] = (0, o.useState)(""), [Z, J] = (0, o.useState)(!1), [Y, q] = (0, o.useState)(0), [K, $] = (0, o.useState)(!1), [Q, U] = (0, o.useState)(!1), [G, X] = (0, o.useState)(!1), [ee, es] = (0, o.useState)(2), [ef, ed] = (0, o.useState)(0), [eo, eb] = (0, o.useState)(""), [ea, ec] = (0, o.useState)(""), [et, ek] = (0, o.useState)(), [eD, eE] = (0, o.useState)(""), [eF, eB] = (0, o.useState)(0), [eC, eA] = (0, o.useState)(""), [el, en] = (0, o.useState)("0"), [er, ex] = (0, o.useState)(), [ei, ep] = (0, o.useState)(""), [eu, em] = (0, o.useState)(!1), [eh, ej] = (0, o.useState)(), [eg, ew] = (0, o.useState)(0), [ey, ev] = (0, o.useState)(""), eN = "0x423f4e6138E475D85CF7Ea071AC92097Ed631eea", ez = "0xe7f01261EF9792095E22aBBF7F6f7B881D423C28", eM = async () => {
                    let e = (0, A.K)({
                        chain: c.RJ,
                        transport: (0, l.P)(window.ethereum)
                    });
                    await e.watchAsset({
                        type: "ERC20",
                        options: {
                            address: eN,
                            decimals: 18,
                            symbol: "POND"
                        }
                    })
                };
                (0, o.useEffect)(() => {}, []), (0, o.useEffect)(() => {
                    eo && 0 !== eo.length && U(!0)
                }, [eo]), (0, o.useEffect)(() => {
                    if (!e || _) return;
                    let s = async () => {
                        let e = await v.getBlock();
                        L(e.number), parseInt(e.number.toString()), parseInt(R)
                    };
                    setInterval(async () => {
                        s()
                    }, 15e3), s()
                }, [v, R, e]), (0, o.useEffect)(() => {
                    (async () => {
                        if (er) {
                            let e = await v.waitForTransactionReceipt({
                                hash: er,
                                confirmations: 1
                            });
                            ej(e), U(!1)
                        }
                    })()
                }, [er, v]), (0, o.useEffect)(() => {}, [M]), (0, o.useEffect)(() => {
                    e && (_ && J(!0), (async () => {
                        if (!e) return;
                        let s = w.filter(s => s.address === e);
                        if (0 === s.length || (null == t ? void 0 : t.unsupported)) return;
                        S(s), s[0].tokens;
                        let f = s[0].offset + i,
                            d = await v.readContract({
                                address: ez,
                                abi: y,
                                functionName: "openedAtBlock"
                            }),
                            o = await v.readContract({
                                address: ez,
                                abi: y,
                                functionName: "currentOffset"
                            });
                        i = parseInt(d.toString());
                        let b = s.map(async (s, d) => {
                                let b = parseFloat(s.offset.toString()),
                                    a = await v.readContract({
                                        address: ez,
                                        abi: y,
                                        args: [e, b],
                                        functionName: "alreadyClaimedByAddress"
                                    });
                                return f = s.offset + i, {
                                    address: s.address,
                                    tokens: s.tokens,
                                    tokensSort: parseInt(s.tokens),
                                    block: s.block,
                                    tikOffset: s.offset,
                                    offset: f,
                                    inx: d,
                                    claimed: a,
                                    canClaim: parseInt(o) > s.offset,
                                    claimIn: parseInt(_) - f
                                }
                            }),
                            a = await Promise.all(b);
                        a = [...(a = a.map(e => {
                            if (a.filter(s => s.tikOffset === e.tikOffset).length > 1) {
                                let s = a.filter(s => s.tikOffset === e.tikOffset).map(e => e.tokensSort).reduce((e, s) => BigInt(e) + BigInt(s), 0);
                                e.tokens = s.toString(), j(!0)
                            }
                            return e
                        })).sort((e, s) => e.tikOffset - s.tikOffset)];
                        let c = a.filter(e => e.canClaim && !e.claimed).sort((e, s) => e.tokensSort - s.tokensSort),
                            k = a.filter(e => !e.claimed).sort((e, s) => e.tokensSort - s.tokensSort);
                        $(c.length), k.length && W(k[0].block.toString()), k.length ? (W(k[0].offset), ev(parseFloat((0, D.d)(k[0].tokens)).toLocaleString()), q(k[0].tikOffset), en(k[0].tokens)) : ev("".concat(a.length, "/").concat(a.length, " CLAIMED")), S(a), P(a.filter(e => e.claimed).length), J(!0)
                    })())
                }, [e, v, eh, _]);
                let eS = async () => {
                        U(!0);
                        let s = (0, A.K)({
                                chain: c.RJ,
                                transport: (0, l.P)(window.ethereum)
                            }),
                            f = M.find(e => e.tikOffset === Y);
                        if (!f) {
                            U(!1);
                            return
                        }
                        let d = {
                                address: f.address,
                                amount: f.tokens,
                                offset: f.tikOffset
                            },
                            o = x.getProof(Object.values(d));
                        try {
                            let f = await v.simulateContract({
                                    address: ez,
                                    abi: y,
                                    functionName: "claim",
                                    account: e,
                                    args: [
                                        [d.address],
                                        [d.amount],
                                        [d.offset],
                                        [o]
                                    ]
                                }),
                                b = await s.writeContract(f.request);
                            ex(b)
                        } catch (e) {
                            U(!1)
                        }
                    },
                    e_ = async () => {
                        U(!0)
                    },
                    eL = async () => {
                        U(!0)
                    };
                (0, o.useEffect)(() => {
                    m(!0)
                }, []);
                let eT = e => {
                        eb(eO(e.target.value))
                    },
                    eO = e => {
                        let s = RegExp("([0-9]*[\\.|\\,]{0,5}[0-9]{0,8})", "s");
                        return e.match(s)[0]
                    };
                return (0, d.jsxs)("div", {
                    className: "w-full  mx-auto flex flex-col  relative z-30",
                    children: [u && (0, d.jsxs)("div", {
                        className: "flex flex-row mt-2 text-[14px] sm:text-[18px] text-center  gap-2 z-20 monotix mb-0",
                        children: [(0, d.jsx)("div", {
                            className: 0 === ee ? "text-white p-2 sm:p-[20px] bg-primary flex flex-col rounded-[20px] grow text-center items-center justify-center cursor-pointer" : " grow  cursor-pointer text-center items-center  justify-center rounded-[20px] flex flex-col text-black p-2 sm:p-[20px] bg-white border border-secondary",
                            children: "⛏️ Mine "
                        }), (0, d.jsx)("div", {
                            onClick: () => es(2),
                            className: 2 === ee ? "text-white  p-0 sm:p-[20px]  bg-[#1e1f26] flex flex-col rounded-[20px]  grow  text-center items-center  justify-center cursor-pointer" : " grow  cursor-pointer text-center items-center  justify-center rounded-[20px] flex flex-col text-black p-2 sm:p-[20px] bg-white border border-primary",
                            children: "\uD83C\uDF9F️ Claim "
                        }), (0, d.jsx)("div", {
                            className: 1 === ee ? "text-white  p-0 sm:p-[20px]  bg-secondary flex flex-col rounded-[20px]  grow  text-center items-center  justify-center cursor-pointer" : " grow  cursor-pointer text-center items-center  justify-center rounded-[20px] flex flex-col text-purple-500 p-2 sm:p-[20px] bg-white border border-primary",
                            children: "\uD83D\uDC38 Spawn \uD83E\uDDEA"
                        })]
                    }), 0 === ee && (0, d.jsxs)("div", {
                        className: "py-3 gap-2 flex flex-col w-full",
                        children: [(0, d.jsxs)("div", {
                            className: "bg-white border border-ccc rounded-xl flex justify-between py-2 px-2 sm:py-3",
                            children: [(0, d.jsx)("input", {
                                value: eo,
                                onChange: e => eT(e),
                                type: "number",
                                className: "focus:outline-none text-xl sm:text-2xl text-black bg-transparent w-3/5",
                                placeholder: "0"
                            }), (0, d.jsxs)("svg", {
                                className: "w-12 h-12 sm:w-18 sm:h-18",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, d.jsxs)("g", {
                                    clipPath: "url(#clip0_2_42)",
                                    children: [(0, d.jsx)("rect", {
                                        width: 24,
                                        height: 24,
                                        rx: 12,
                                        fill: "#5C7DFF"
                                    }), (0, d.jsxs)("g", {
                                        clipPath: "url(#clip1_2_42)",
                                        children: [(0, d.jsx)("path", {
                                            d: "M11.9984 2.5L11.8776 2.9102V14.8121L11.9984 14.9326L17.523 11.6669L11.9984 2.5Z",
                                            fill: "#C0CCF7"
                                        }), (0, d.jsx)("path", {
                                            d: "M11.9984 2.5L6.47363 11.6669L11.9984 14.9326V9.15571V2.5Z",
                                            fill: "white"
                                        }), (0, d.jsx)("path", {
                                            d: "M11.9984 15.9786L11.9303 16.0615V20.3012L11.9984 20.4999L17.5264 12.7146L11.9984 15.9786Z",
                                            fill: "#C0CCF7"
                                        }), (0, d.jsx)("path", {
                                            d: "M11.9984 20.4999V15.9786L6.47363 12.7146L11.9984 20.4999Z",
                                            fill: "white"
                                        }), (0, d.jsx)("path", {
                                            d: "M11.9984 14.9325L17.523 11.6669L11.9984 9.1557V14.9325Z",
                                            fill: "#8198EE"
                                        }), (0, d.jsx)("path", {
                                            d: "M6.47363 11.6669L11.9984 14.9325V9.1557L6.47363 11.6669Z",
                                            fill: "#C0CCF7"
                                        })]
                                    })]
                                }), (0, d.jsxs)("defs", {
                                    children: [(0, d.jsx)("clipPath", {
                                        id: "clip0_2_42",
                                        children: (0, d.jsx)("rect", {
                                            width: 24,
                                            height: 24,
                                            fill: "white"
                                        })
                                    }), (0, d.jsx)("clipPath", {
                                        id: "clip1_2_42",
                                        children: (0, d.jsx)("rect", {
                                            width: 18,
                                            height: 18,
                                            fill: "white",
                                            transform: "translate(3 2.5)"
                                        })
                                    })]
                                })]
                            })]
                        }), (0, d.jsx)("div", {
                            onClick: () => em(e => !e),
                            className: "border border-ccc !bg-white rounded-xl flex py-1 px-1 w-fit mx-auto -mt-6 -mb-6 z-30 cursor-pointer",
                            children: eu ? (0, d.jsxs)("div", {
                                className: "path flex justify-center gap-3 -my-0.5",
                                children: [(0, d.jsxs)("span", {
                                    children: [(0, d.jsx)("img", {
                                        className: "w-6 h-6",
                                        src: "images/ethereum-eth.svg"
                                    }), " "]
                                }), (0, d.jsx)("span", {
                                    children: " → "
                                }), (0, d.jsx)("span", {
                                    children: (0, d.jsx)("img", {
                                        src: "images/eth-pepe.png",
                                        className: "h-[23px] mt-[6px]"
                                    })
                                }), (0, d.jsx)("span", {
                                    children: " → "
                                }), (0, d.jsx)("span", {
                                    children: (0, d.jsx)("img", {
                                        className: "w-6 h-6",
                                        src: "images/POND_ICON_FLAT.svg"
                                    })
                                })]
                            }) : (0, d.jsx)("div", {
                                className: "path flex justify-center my-0 cursor-pointer",
                                children: (0, d.jsx)("div", {
                                    className: "h-6 px-2 arial font-bold",
                                    children: (0, d.jsx)("span", {
                                        children: "HOP INTO"
                                    })
                                })
                            })
                        }), (0, d.jsxs)("div", {
                            className: "bg-white border border-ccc rounded-xl flex justify-between py-2 px-2 sm:text-4xl",
                            children: [(0, d.jsx)("input", {
                                type: "text",
                                value: ea,
                                disabled: !0,
                                className: "focus:outline-none text-xl sm:text-2xl text-black bg-transparent  w-4/5",
                                placeholder: "0"
                            }), (0, d.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-12 h-12 sm:w-18 sm:h-18",
                                viewBox: "0 0 318 317",
                                children: (0, d.jsx)("g", {
                                    fill: "none",
                                    fillRule: "evenodd",
                                    stroke: "none",
                                    strokeWidth: "1",
                                    children: (0, d.jsxs)("g", {
                                        children: [(0, d.jsx)("path", {
                                            fill: "#E7F2DC",
                                            d: "M233.63 79.3c.29-.28-.28.27 0 0-.28.27.29-.28 0 0z"
                                        }), (0, d.jsx)("path", {
                                            fill: "#6BB345",
                                            fillRule: "nonzero",
                                            d: "M221.6 97.24c9.74-7.38 18.76-12.33 29.61-18.31 6.06-3.34 14.76-9.52 21.7-10.31 7.12-.82 10.39 8.29 13.67 13.74 17.69 29.42 24.89 67.11 18.53 100.99-13.12 69.89-75.48 123.15-147.28 122.25-71.27-.89-133.5-53.3-145.19-123.95C.95 111.03 42.54 44.12 108 17.98c35.98-14.37 80.32-10.63 114.82 5.9 6.37 3.05 19.09 7.65 23.42 13.42 4.48 5.97-3.39 16.2-6.37 22.67-6.04 13.11-13.02 25.3-21.61 36.56 2.03 2.03 1.29-1.32 3.34.71zM101.72 275.13c-.61 14 19.46 15.82 21.54 2.33 2.3-15.02-21.54-17.53-21.54-2.33zm41.06-247.44c-.03-10.89-15.89-11.3-16.78-.6-.98 11.89 16.82 12.45 16.78.6zm-64.4 233.75c0 9.17 13.61 10.94 15.09 2.03 1.57-9.46-15.08-12.17-15.09-2.03zm33.53-222.32c8.28-.08 7-12.92-1.01-11-6.04 1.45-5.8 11.06 1.01 11zm-6.44 218.13c5.82.41 4.91-8.06.4-8.53-4.61-.47-7.08 9-.4 8.53z"
                                        }), (0, d.jsx)("path", {
                                            fill: "#4A9945",
                                            d: "M153.69 157.4c-14.43 18.34-33.23 34.19-49.73 50.69-4.7 4.7-47.12 49.18-49.56 46.48-2.15-2.39 87.03-92.88 98.32-98.49 2.06-1.29 2.23-.17.97 1.32zM25.53 160.88c-3.49 0-6.33.42-6.33-2.41 0-3.3 20.39-2.82 28.55-3.5 12.46-1.04 24.86-2.63 37.29-3.93 11.56-1.21 23.15-1.96 34.73-3.01 8.83-.8 30.45-6.61 32.9-1.62 1.45 3.82-19.56 3.92-26.92 4.57-11.8 1.04-23.58 2.29-35.36 3.55-21.62 2.29-43.29 3.5-64.86 6.35zM161.79 296.68c-3.44-8.88-1.02-21.05-.53-30.54.61-12.02 1.21-24.04 1.66-36.07.44-11.82.86-23.64 1.25-35.45.3-8.92-2.5-25.31 2.16-32.84 3.59-.72 2.12 22.2 1.79 29.54-.54 11.94-1.17 23.86-1.6 35.81-.38 10.55-1.11 21.09-1.42 31.65-.36 12.05 1.5 25.97-1.95 37.62-.46.08-.91.18-1.36.28zM248.24 257.27c-7.69-5.62-12.52-15.45-18.22-23.04-6.82-9.08-13.76-18.07-20.6-27.13-6.56-8.68-13.14-17.35-19.71-26.02-5.07-6.69-15.35-19.35-14.86-23.4 2.09-2.94 13.41 14.23 18.31 20.64 6.62 8.65 12.73 17.73 19.13 26.54 11.97 16.46 28.97 32.7 37.08 51.36-.38.35-.76.7-1.13 1.05zM60.37 61.27c18.51 9.47 35.12 24.49 51.79 36.9 8.54 6.36 17.06 12.72 25.6 19.08 7.44 5.54 16.54 10.47 21.89 18.1.7.77.17 1.81-.84 1.27-18.59-7.67-35.2-25.15-51.42-36.96C91.24 87.9 73.98 76.59 59.12 63.25c-.45-1.48.2-1.98 1.25-1.98zM183.61 145.5c17.96 1.68 35.9 3.46 53.85 5.23 9.21.91 18.43 1.71 27.64 2.52 6.71.59 25.41-.6 24.16 4.41-.87 4.95-19.57.06-27.57-.71-9.55-.92-19.09-1.9-28.61-3.03-9.11-1.08-18.08-1.91-27.23-2.39-6.94-.37-26.72.04-26-3.79.35-1.68 2.37-2.5 3.76-2.24zM166.63 78.56c.55 9.23.99 18.44 1.29 27.69.26 8.13 2.05 25.63-1.02 25.91-3.71-.26-2.29-17.59-2.73-25.88-.54-10.22-1.07-20.43-1.45-30.66-.36-9.61-.6-19.21-1.03-28.82-.34-7.56-2.73-22.83.94-24.44 2.88.2 3.07 18.78 3.11 27.08.5 9.73.91 19.39.89 29.12.06.01-.05 0 0 0z"
                                        }), (0, d.jsx)("path", {
                                            fill: "#7FC343",
                                            d: "M101.72 275.13c0-15.2 23.85-12.69 21.54 2.33-2.08 13.49-22.15 11.67-21.54-2.33z"
                                        }), (0, d.jsx)("path", {
                                            fill: "#7FC142",
                                            d: "M142.78 27.69c.04 11.85-17.76 11.29-16.78-.6.89-10.7 16.75-10.29 16.78.6zM78.38 261.44c0-10.15 16.66-7.44 15.09 2.03-1.48 8.92-15.09 7.15-15.09-2.03zM111.91 39.12c-6.82.06-7.05-9.55-1.01-11 8.02-1.92 9.29 10.92 1.01 11z"
                                        }), (0, d.jsx)("path", {
                                            fill: "#7DC142",
                                            d: "M105.47 257.25c-6.68.46-4.22-9 .4-8.53 4.51.47 5.42 8.94-.4 8.53z"
                                        }), (0, d.jsx)("path", {
                                            fill: "#4C9544",
                                            fillRule: "nonzero",
                                            d: "M316.68 146.98c-.27-4.16-.67-6.9-1.7-11.65-4.23-21.11-10.02-43.53-23.72-64.4-7.68-11.74-13.04-16.42-28.75-8.73-8.05 4.63-12.62 7.72-18.67 11.82l-2.05 1.38c2.66-4.28 6.29-10.38 8.87-15.53.38-.75.99-1.76 1.69-2.94 4.66-7.88 8.35-14.88 6.18-20.77-1.98-5.35-9.1-10.93-21.18-16.56l-3.36-1.58c-5.98-2.8-11.68-5.47-17.96-7.91-28.78-11.2-60.07-13.05-95.58-5.68-55.28 11.45-101.93 58-116.1 115.83-14.18 57.78 6.96 120.54 53.85 159.88 28.16 23.63 63.78 35.88 99.99 35.88 22.66 0 45.53-4.8 66.94-14.6 52.23-23.91 88.17-76.46 91.55-133.78.57-7.8.36-13.45 0-20.66zM110.27 24.1c14.24-5.69 30.21-8.5 46.56-8.5 21.35 0 43.37 4.79 63.05 14.22 1.36.65 2.99 1.38 4.77 2.15 5.18 2.27 13.85 6.08 16.27 9.31.74 1.7-2.98 8.38-4.37 10.9-1.04 1.85-2 3.61-2.42 4.59l-5.77 9.96c-7.21 12.54-12.42 21.61-22.33 34.38-1.84 3.05-.93 6.95 2.28 9.68l5.04 3.85 4.17-3.47c.79-.61 23.06-17.84 38.11-26.14 1.96-1.08 4.06-2.47 6.21-3.92 3.93-2.63 8.38-5.6 11.66-5.98 1.08-.1 4.06 4.59 5.45 7.19.66 1.22 1.29 2.4 1.93 3.44 17.1 28.44 23.71 64.5 17.72 96.45-12.58 66.96-72.22 116.96-139.15 116.96-.56 0-1.12-.01-1.69-.01-68.13-.85-127.82-51.8-138.86-118.52C7.92 114.35 45.5 49.96 110.27 24.1z"
                                        }), (0, d.jsx)("path", {
                                            fill: "#000",
                                            fillRule: "nonzero",
                                            d: "M91.54 89.38h85.57c39.72 0 64.44 16.7 64.44 58.13 0 41.42-24.72 58.29-64.09 58.29h-29.83v26.77H91.54V89.38zm80.29 70.06c7.84 0 13.13-4.09 13.13-11.93s-5.29-11.76-12.79-11.76h-24.55v23.7h24.21v-.01z"
                                        }), (0, d.jsx)("g", {
                                            fill: "#6BB345",
                                            transform: "translate(202 118)",
                                            children: (0, d.jsxs)("g", {
                                                children: [(0, d.jsx)("path", {
                                                    d: "M.88 5.46c0 6.68 9.91 7.97 10.99 1.48C13.01.04.88-1.94.88 5.46z"
                                                }), (0, d.jsx)("path", {
                                                    d: "M.88 5.46c0-7.39 12.13-5.42 10.99 1.48-1.08 6.49-11 5.2-10.99-1.48z"
                                                })]
                                            })
                                        }), (0, d.jsx)("g", {
                                            fill: "#4C9544",
                                            transform: "translate(206 107)",
                                            children: (0, d.jsxs)("g", {
                                                children: [(0, d.jsx)("path", {
                                                    d: "M.71 3.6c0 5.11 7.58 6.1 8.41 1.13C9.99-.54.72-2.05.71 3.6z"
                                                }), (0, d.jsx)("path", {
                                                    d: "M.71 3.6c0-5.65 9.28-4.14 8.41 1.13C8.3 9.7.71 8.71.71 3.6z"
                                                })]
                                            })
                                        }), (0, d.jsx)("g", {
                                            transform: "translate(189 103)",
                                            children: (0, d.jsxs)("g", {
                                                children: [(0, d.jsx)("path", {
                                                    fill: "#6BB345",
                                                    d: "M.48 9.26c0 9.59 14.23 11.44 15.77 2.12C17.89 1.49.49-1.34.48 9.26z"
                                                }), (0, d.jsx)("path", {
                                                    fill: "#7FC142",
                                                    d: "M.48 7.25C.49-3.36 17.89-.52 16.25 9.37 14.71 18.69.48 16.84.48 7.25z"
                                                })]
                                            })
                                        })]
                                    })
                                })
                            })]
                        }), u && s && "0" !== ea && "" !== ea && !1, u && s && (null == t ? void 0 : t.unsupported) && "" === ei && (0, d.jsx)("button", {
                            onClick: () => b({
                                route: "SelectNetwork"
                            }),
                            className: "-mt-1 !w-full text-red-200 bg-red-500 px-5 py-5 rounded-[20px] text-[18px] font-bold arial",
                            children: (0, d.jsx)("div", {
                                className: "relative z-10 text-center",
                                children: Q ? (0, d.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    className: "animate-spin mx-auto h-8 w-8 text-black",
                                    viewBox: "0 0 24 24",
                                    children: [(0, d.jsx)("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4",
                                        className: "opacity-25"
                                    }), (0, d.jsx)("path", {
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                        className: "opacity-75"
                                    })]
                                }) : "Wrong Blockchain"
                            })
                        }), u && s && !(null == t ? void 0 : t.unsupported) && "" !== ei && (0, d.jsx)("button", {
                            className: "-mt-1 !w-full text-red-200 bg-red-500 px-5 py-5 rounded-[20px] text-[18px] font-bold arial",
                            children: (0, d.jsx)("div", {
                                className: "relative z-10 text-center",
                                children: Q ? (0, d.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    className: "animate-spin mx-auto h-8 w-8 text-black",
                                    viewBox: "0 0 24 24",
                                    children: [(0, d.jsx)("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4",
                                        className: "opacity-25"
                                    }), (0, d.jsx)("path", {
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                        className: "opacity-75"
                                    })]
                                }) : ei
                            })
                        }), u && s && !(null == t ? void 0 : t.unsupported) && "" === ei && (0, d.jsx)("button", {
                            disabled: !0,
                            onClick: () => eL(),
                            className: "-mt-1 !w-full text-white bg-primary px-5 py-5 rounded-[20px] text-[18px] font-bold arial",
                            children: (0, d.jsx)("div", {
                                className: "relative z-10 text-center",
                                children: Q ? (0, d.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    className: "animate-spin mx-auto h-8 w-8 text-black",
                                    viewBox: "0 0 24 24",
                                    children: [(0, d.jsx)("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4",
                                        className: "opacity-25"
                                    }), (0, d.jsx)("path", {
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                        className: "opacity-75"
                                    })]
                                }) : "COMPLETED"
                            })
                        }), u && !s && (0, d.jsx)(g, {
                            className: "-mt-1 !w-full bluebutton px-5 py-5 rounded-[20px] text-[18px] font-bold arial"
                        })]
                    }), 1 === ee && (0, d.jsxs)("div", {
                        className: "py-3 gap-3 flex flex-col w-full",
                        children: [N && (0, d.jsx)("div", {
                            className: "",
                            children: "error"
                        }), (0, d.jsxs)("div", {
                            className: "bg-white border border-ccc rounded-xl flex justify-between py-11 px-2",
                            children: [(0, d.jsx)("input", {
                                type: "text",
                                value: "--",
                                disabled: !0,
                                className: "focus:outline-none  text-2xl text-black bg-transparent w-full",
                                placeholder: "0"
                            }), (0, d.jsx)("img", {
                                className: "w-12 h-12 sm:w-18 sm:h-18 rounded-full",
                                src: "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x6982508145454Ce325dDbE47a25d4ec3d2311933/logo.png"
                            })]
                        }), u && "0" != el && "" != el ? (0, d.jsx)("button", {
                            onClick: () => e_(),
                            className: "!w-full bg-secondary !text-white px-5 py-5 rounded-[20px] text-[18px] font-bold arial",
                            children: (0, d.jsx)("div", {
                                className: "relative z-10 text-center",
                                children: Q ? (0, d.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    className: "animate-spin mx-auto h-8 w-8 text-black",
                                    viewBox: "0 0 24 24",
                                    children: [(0, d.jsx)("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4",
                                        className: "opacity-25"
                                    }), (0, d.jsx)("path", {
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                        className: "opacity-75"
                                    })]
                                }) : "Claim Airdrop"
                            })
                        }) : (0, d.jsx)("button", {
                            disabled: !0,
                            className: "-mt-1 !w-full bg-disabled px-5 py-5 rounded-[20px] text-[18px] font-bold arial",
                            children: (0, d.jsx)("div", {
                                className: "relative z-10",
                                children: "Claim 234"
                            })
                        })]
                    }), 2 === ee && (0, d.jsxs)("div", {
                        className: "py-3 gap-3 flex flex-col w-full",
                        children: [(0, d.jsxs)("div", {
                            className: "bg-white relative border border-ccc rounded-xl flex justify-between py-5 px-3",
                            children: [(0, d.jsx)("input", {
                                type: "text",
                                value: ey,
                                disabled: !0,
                                className: "focus:outline-none text-xl sm:text-2xl text-black bg-transparent w-[60%]",
                                placeholder: "\uD83D\uDD12"
                            }), (0, d.jsxs)("div", {
                                className: "text-black arial flex gap-1  font-bold items-center mr-1 text-lg sm:text-2xl bg-white rounded-full py-2 px-3",
                                children: ["  ", (0, d.jsx)("img", {
                                    className: "w-8 h-8 sm:w-18 sm:h-18 rounded-full",
                                    src: "pond-icon.png"
                                }), "$PNDC"]
                            })]
                        }), u && s && 0 !== T && (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)("button", {
                                onClick: () => eS(),
                                disabled: !K,
                                className: "-mt-1 !w-full  bg-[#1e1f26] px-5 py-5 rounded-[20px] text-[18px] font-bold arial",
                                children: (0, d.jsxs)("div", {
                                    className: "relative z-10",
                                    children: [!Q && (0, d.jsx)(d.Fragment, {
                                        children: I + 1 <= T && M.filter(e => !e.claimed).length > 0 ? (0, d.jsxs)(d.Fragment, {
                                            children: ["Claim", h ? " All" : " ".concat(I + 1, "/").concat(T)]
                                        }) : (0, d.jsx)(d.Fragment, {
                                            children: "Claim Complete"
                                        })
                                    }), Q && (0, d.jsx)(d.Fragment, {
                                        children: (0, d.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            className: "animate-spin mx-auto h-8 w-8 text-primary",
                                            viewBox: "0 0 24 24",
                                            children: [(0, d.jsx)("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                stroke: "currentColor",
                                                strokeWidth: "4",
                                                className: "opacity-25"
                                            }), (0, d.jsx)("path", {
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                                className: "opacity-75"
                                            })]
                                        })
                                    })]
                                })
                            }), T && R && _ && (0, d.jsxs)("div", {
                                className: "text-black font-black arial text-center",
                                children: ["\uD83C\uDF9F️ ", (0, d.jsxs)("span", {
                                    className: "text-black/40",
                                    children: ["You mined ", T, " time(s)"]
                                }), " ⛏️", (0, d.jsx)("br", {}), I > 0 && (0, d.jsxs)("div", {
                                    className: "text-black font-black arial text-center",
                                    children: [(0, d.jsxs)("span", {
                                        className: "text-black/40",
                                        children: ["You claimed ", I, " time(s)"]
                                    }), (0, d.jsx)("br", {}), " "]
                                }), h && (0, d.jsxs)("div", {
                                    className: "text-black font-black arial text-center",
                                    children: [(0, d.jsx)("span", {
                                        className: "text-black/40",
                                        children: "Your claims have been merged"
                                    }), (0, d.jsx)("br", {}), " "]
                                }), parseInt(R) > parseInt(_.toString()) && (0, d.jsxs)("div", {
                                    className: "flex justify-center text-black/30",
                                    children: ["Your next claim: ", R, "  ~(", (0, d.jsx)(p, {
                                        activeDate: new Date(new Date().getTime() + (parseInt(R) - parseInt(_.toString())) * 12e3)
                                    }), ") "]
                                })]
                            })]
                        }), !u || s && 0 === T && (0, d.jsx)("button", {
                            disabled: !0,
                            className: "!w-full bg-[#1e1f26] px-5 py-5 rounded-[20px] text-[18px] font-bold arial",
                            children: (0, d.jsx)("div", {
                                className: "relative z-10 text-center",
                                children: Q ? (0, d.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    className: "animate-spin mx-auto h-8 w-8 !text-white",
                                    viewBox: "0 0 24 24",
                                    children: [(0, d.jsx)("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4",
                                        className: "opacity-25"
                                    }), (0, d.jsx)("path", {
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                        className: "opacity-75"
                                    })]
                                }) : "Claim Period Complete"
                            })
                        }), u && !s && !(null == t ? void 0 : t.unsupported) && (0, d.jsx)(g, {
                            className: "-mt-1 !w-full bluebutton px-5 py-5 rounded-[20px] text-[18px] font-bold arial"
                        }), u && s && (null == t ? void 0 : t.unsupported) && "" === ei && (0, d.jsx)("button", {
                            onClick: () => b({
                                route: "SelectNetwork"
                            }),
                            className: "-mt-1 !w-full text-red-200 bg-red-500 px-5 py-5 rounded-[20px] text-[18px] font-bold arial",
                            children: (0, d.jsx)("div", {
                                className: "relative z-10 text-center",
                                children: Q ? (0, d.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    className: "animate-spin mx-auto h-8 w-8 text-black",
                                    viewBox: "0 0 24 24",
                                    children: [(0, d.jsx)("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4",
                                        className: "opacity-25"
                                    }), (0, d.jsx)("path", {
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                        className: "opacity-75"
                                    })]
                                }) : "Wrong Blockchain"
                            })
                        })]
                    }), (0, d.jsxs)("div", {
                        className: "px-4 py-2 flex flex-col text-black w-full hidden",
                        children: [(0, d.jsx)("div", {
                            className: "btmspace strapline text-black sm:text-white"
                        }), u && 0 === ee && (0, d.jsx)(d.Fragment, {})]
                    }), (0, d.jsxs)("footer", {
                        className: "justifiy-center flex flex-col !text-black px-4 sm:px-0",
                        children: [u && (0, d.jsx)(k(), {
                            href: "/miningrig",
                            children: (0, d.jsx)("img", {
                                src: "images/brain-pepe2.svg",
                                className: "mx-auto mt-2 mb-2"
                            })
                        }), (0, d.jsxs)("div", {
                            className: "mt-5 arial flex flex-col justify-center  ".concat(u && s ? "  gap-4 md:gap-1" : "justify-center"),
                            children: [(0, d.jsx)(k(), {
                                target: "_blank",
                                href: "https://".concat("www", ".etherscan.io/address/").concat(eN),
                                children: (0, d.jsxs)("div", {
                                    className: "flex gap-1 mx-auto justify-center",
                                    children: [(0, d.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-5 h-5",
                                        fill: "none",
                                        viewBox: "0 0 122 122",
                                        children: [(0, d.jsx)("path", {
                                            fill: "#fff",
                                            d: "M25.29 57.914a5.156 5.156 0 015.181-5.156l8.59.028a5.164 5.164 0 015.164 5.164v32.48c.967-.287 2.209-.593 3.568-.913a4.3 4.3 0 003.317-4.187V45.04a5.165 5.165 0 015.164-5.165h8.607a5.165 5.165 0 015.164 5.165v37.393s2.155-.872 4.254-1.758a4.312 4.312 0 002.632-3.967V32.13a5.164 5.164 0 015.163-5.164H90.7a5.164 5.164 0 015.164 5.164v36.709c7.462-5.408 15.024-11.912 21.025-19.733a8.661 8.661 0 001.319-8.092A60.79 60.79 0 0015.361 20.577a60.789 60.789 0 00-7.284 70.67 7.688 7.688 0 007.334 3.8c1.628-.142 3.655-.345 6.065-.628a4.3 4.3 0 003.815-4.27l-.001-32.235z"
                                        }), (0, d.jsx)("path", {
                                            fill: "#000",
                                            d: "M25.102 110.009a60.813 60.813 0 0063.371 5.013 60.816 60.816 0 0033.212-54.203c0-1.4-.065-2.785-.158-4.162-22.219 33.138-63.244 48.63-96.423 53.347"
                                        })]
                                    }), (0, d.jsx)("span", {
                                        className: "hidden sm:flex",
                                        children: "Contract:"
                                    }), " ", (0, B.j)(eN)]
                                })
                            }), u && s && e && (0, d.jsxs)("div", {
                                className: "flex mt-2 mb-2 mx-auto cursor-pointer gap-1 justify-center md:justify-start ",
                                onClick: () => eM(),
                                children: [(0, d.jsxs)("svg", {
                                    className: "w-6 h-6 cursor-pointer",
                                    version: "1.1",
                                    viewBox: "0 0 318.6 318.6",
                                    children: [(0, d.jsx)("style", {
                                        dangerouslySetInnerHTML: {
                                            __html: "\n    .st1,.st6{fill:#e4761b;stroke:#e4761b;stroke-linecap:round;stroke-linejoin:round}.st6{fill:#f6851b;stroke:#f6851b}\n  "
                                        }
                                    }), (0, d.jsx)("path", {
                                        fill: "#e2761b",
                                        stroke: "#e2761b",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "m274.1 35.5-99.5 73.9L193 65.8z"
                                    }), (0, d.jsx)("path", {
                                        d: "m44.4 35.5 98.7 74.6-17.5-44.3zm193.9 171.3-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z",
                                        className: "st1"
                                    }), (0, d.jsx)("path", {
                                        d: "m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zm111.3 0-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5 33.9 16.5-4.7-39.3z",
                                        className: "st1"
                                    }), (0, d.jsx)("path", {
                                        fill: "#d7c1b3",
                                        stroke: "#d7c1b3",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zm-105 0 31.5 14.9-.2-9.3 2.5-22.1z"
                                    }), (0, d.jsx)("path", {
                                        fill: "#233447",
                                        stroke: "#233447",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "m138.8 193.5-28.2-8.3 19.9-9.1zm40.9 0 8.3-17.4 20 9.1z"
                                    }), (0, d.jsx)("path", {
                                        fill: "#cd6116",
                                        stroke: "#cd6116",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "m106.8 247.4 4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1 20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
                                    }), (0, d.jsx)("path", {
                                        fill: "#e4751f",
                                        stroke: "#e4751f",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "m87.8 162.1 23.6 46-.8-22.9zm120.3 23.1-1 22.9 23.7-46zm-64-20.6-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0-2.7 18 1.2 45 6.7-34.1z"
                                    }), (0, d.jsx)("path", {
                                        d: "m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z",
                                        className: "st6"
                                    }), (0, d.jsx)("path", {
                                        fill: "#c0ad9e",
                                        stroke: "#c0ad9e",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
                                    }), (0, d.jsx)("path", {
                                        fill: "#161616",
                                        stroke: "#161616",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
                                    }), (0, d.jsx)("path", {
                                        fill: "#763d16",
                                        stroke: "#763d16",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
                                    }), (0, d.jsx)("path", {
                                        d: "m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4 3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z",
                                        className: "st6"
                                    })]
                                }), "Add ", (0, d.jsx)("span", {
                                    className: "hidden sm:flex",
                                    children: "$PNDC"
                                }), " to Metamask"]
                            }), (0, d.jsxs)("div", {
                                className: "flex gap-3 items-center justify-center",
                                children: [(0, d.jsx)(k(), {
                                    target: "_blank",
                                    href: "https://twitter.com/pond0x",
                                    children: (0, d.jsx)("div", {
                                        className: "flex gap-1 mx-auto justify-center",
                                        children: (0, d.jsx)("svg", {
                                            className: "w-6 h-6 cursor-pointer -translate-y-0.5",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 248 204",
                                            children: (0, d.jsx)("path", {
                                                fill: "#1d9bf0",
                                                d: "M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0022.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0022.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 00104.08 52.76 50.532 50.532 0 0114.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 01-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 01-25.2 26.16z"
                                            })
                                        })
                                    })
                                }), (0, d.jsx)(k(), {
                                    target: "_blank",
                                    href: "https://coinmarketcap.com/currencies/pond0x/",
                                    children: (0, d.jsxs)("div", {
                                        className: "flex gap-1 mx-auto mt-3 mb-5 justify-center",
                                        children: [(0, d.jsx)("svg", {
                                            className: "w-6 h-6 cursor-pointer",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 2462 2500",
                                            children: (0, d.jsx)("g", {
                                                fill: "none",
                                                fillRule: "evenodd",
                                                stroke: "none",
                                                strokeWidth: "1",
                                                children: (0, d.jsx)("g", {
                                                    fill: "#000",
                                                    fillRule: "nonzero",
                                                    children: (0, d.jsx)("path", {
                                                        d: "M2461 1250v-4.4C2458.8 559.8 1905.6 0 1230.6 0 552.3 0 .1 559.8.1 1250c0 688 552.2 1250 1230.4 1250 313.1 0 607.6-118.5 835.9-334.8 45.6-43.5 48.9-114.1 4.4-159.8-41.3-45.7-112-48.9-157.6-7.6l-2.2 2.2c-183.7 173.9-431.5 273.9-685.9 273.9-297.8 0-564.1-130.4-748.9-339.1l526.1-842.4v390.2c0 187 72.8 246.7 133.7 264.1 60.9 17.4 152.2 4.3 252.2-152.2l288-467.4c9.8-14.1 17.4-29.3 27.2-39.1v237c0 173.9 70.7 315.2 191.3 382.6 108.7 63.1 246.7 55.4 360.9-14.1 140.2-92.4 215.2-252.2 205.4-443.5zm-319.6 244.6c-43.5 27.2-94.6 31.5-133.7 9.8-48.9-29.3-77.2-94.6-77.2-183.7v-273.9c0-130.4-51.1-225-138-250-147.8-43.5-259.8 138-301.1 206.5l-260.9 418.5V905.4c-3.3-118.5-41.3-188-114.1-209.8-48.9-14.1-120.7-7.6-191.3 98.9l-583.7 934.8C263.2 1581.5 223 1417.4 223 1250c0-564.1 453.3-1022.8 1007.6-1022.8 554.4 0 1007.6 458.7 1007.6 1022.8v4.4c4.3 109.7-29.4 196.7-96.8 240.2z"
                                                    })
                                                })
                                            })
                                        }), (0, d.jsx)("span", {
                                            className: "flex hidden",
                                            children: "CoinmarketCap"
                                        })]
                                    })
                                }), (0, d.jsx)(k(), {
                                    target: "_blank",
                                    href: "https://www.coingecko.com/en/coins/pondcoin",
                                    children: (0, d.jsx)("div", {
                                        className: "flex gap-1 mx-auto mt-3 mb-5 justify-center",
                                        children: (0, d.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-7 h-7 cursor-pointer",
                                            viewBox: "0 0 159 160",
                                            children: (0, d.jsx)("g", {
                                                fill: "none",
                                                fillRule: "evenodd",
                                                stroke: "none",
                                                strokeWidth: "1",
                                                children: (0, d.jsxs)("g", {
                                                    children: [(0, d.jsx)("path", {
                                                        fill: "#8DC63F",
                                                        d: "M158.8 79.9c.1 32.1-19 61.1-48.6 73.5-29.6 12.4-63.7 5.8-86.5-16.8C.9 114-6 79.9 6.1 50.2c12.1-29.7 41-49.1 73-49.3 43.9-.1 79.5 35.2 79.7 79z"
                                                    }), (0, d.jsx)("path", {
                                                        fill: "#F9E988",
                                                        d: "M152.9 79.9c.1 29.7-17.6 56.5-45 68s-58.9 5.3-80-15.5C6.8 111.5.4 80 11.6 52.6 22.8 25.1 49.5 7.2 79.1 7c40.6-.2 73.6 32.4 73.8 72.9z"
                                                    }), (0, d.jsx)("path", {
                                                        fill: "#FFF",
                                                        d: "M80.9 11.7c4.7-.8 9.4-.8 14.1 0 4.7.7 9.3 2.3 13.5 4.5 4.2 2.3 7.8 5.4 11.4 8.3 3.6 2.9 7.2 5.9 10.6 9.2 3.5 3.2 6.5 6.9 9 10.9 2.6 4 4.7 8.3 6.3 12.7 3.1 9 4.1 18.7 2.6 27.9h-.5c-1.5-9.2-3.6-17.9-6.9-26.2-1.5-4.2-3.4-8.3-5.4-12.2-2.2-3.9-4.5-7.8-7.1-11.4-2.6-3.7-5.9-7-9.6-9.7-3.7-2.7-8-4.4-12.1-6-4.1-1.6-8.3-3.3-12.6-4.6-4.3-1.2-8.7-2.2-13.3-3.1v-.3z"
                                                    }), (0, d.jsx)("path", {
                                                        fill: "#8BC53F",
                                                        d: "M116.7 54c-5.3-1.5-10.8-3.7-16.4-5.9-.3-1.4-1.6-3.1-4.1-5.3-3.6-3.2-10.5-3.1-16.4-1.7-6.5-1.5-13-2.1-19.2-.6-50.7 14-22 48-40.6 82.3 2.6 5.6 31.2 38.4 72.5 29.6 0 0-14.1-33.9 17.8-50.2 25.9-13.2 44.5-37.8 6.4-48.2z"
                                                    }), (0, d.jsx)("path", {
                                                        fill: "#009345",
                                                        d: "M79.8 41.1c3.7.3 17.1 4.6 20.5 7-2.9-8.3-12.5-9.4-20.5-7z"
                                                    }), (0, d.jsx)("path", {
                                                        fill: "#FFF",
                                                        fillRule: "nonzero",
                                                        d: "M123 76.3c0 2.7-3.3 4.1-5.2 2.2-1.9-1.9-.6-5.2 2.1-5.3 1.7.1 3.1 1.4 3.1 3.1zM83.3 62.2c0 5.7-3.5 10.9-8.8 13.1-5.3 2.2-11.4 1-15.5-3.1S53.7 62 55.9 56.7c2.2-5.3 7.4-8.8 13.1-8.8 3.8 0 7.4 1.5 10 4.1 2.8 2.8 4.3 6.4 4.3 10.2z"
                                                    }), (0, d.jsx)("path", {
                                                        fill: "#58595B",
                                                        d: "M79.1 62.3c0 4-2.4 7.7-6.2 9.2-3.7 1.5-8 .7-10.9-2.2-2.9-2.9-3.7-7.1-2.2-10.9 1.5-3.7 5.2-6.2 9.2-6.2 5.6.1 10.1 4.6 10.1 10.1z"
                                                    }), (0, d.jsx)("path", {
                                                        fill: "#8BC53F",
                                                        d: "M134.5 82.6c-11.5 8.1-24.6 14.2-43.1 14.2-8.7 0-10.4-9.2-16.2-4.7-3 2.3-13.4 7.5-21.7 7.2-8.3-.4-21.7-5.3-25.4-22.9-1.5 17.7-2.2 30.7-8.9 45.6 13.2 21.2 44.7 37.5 73.3 30.5-3.1-21.5 15.7-42.5 26.2-53.2 4.1-4.2 11.8-10.8 15.8-16.7z"
                                                    }), (0, d.jsx)("path", {
                                                        fill: "#58595B",
                                                        d: "M134 83.1c-3.6 3.3-7.8 5.7-12.1 7.8-4.4 2.1-8.9 3.7-13.6 5-4.7 1.2-9.6 2.1-14.5 1.7-5-.4-10-2.1-13.3-5.8l.2-.2c4 2.6 8.7 3.5 13.3 3.7 4.7.1 9.4-.2 14-1.1 4.6-1 9.2-2.4 13.6-4.2 4.4-1.8 8.7-3.9 12.5-6.9h-.1z"
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })]
                            })]
                        }), (0, d.jsxs)("div", {
                            className: "mt-2 flex flex-col justify-center",
                            children: [u && s && e && (0, d.jsxs)("div", {
                                className: "cursor-pointer flex flex-col gap-1 items-center justify-center mb-3",
                                onClick: () => b(),
                                children: [(0, d.jsxs)("div", {
                                    className: "flex gap-1",
                                    children: [(0, d.jsx)("div", {
                                        className: "w-3 h-3 bg-primary rounded-full translate-y-1.5 "
                                    }), " Connected To: ", r, " "]
                                }), _ && (0, d.jsxs)("div", {
                                    className: "flex gap-1",
                                    children: [" Block: ", null == _ ? void 0 : _.toString(), " "]
                                })]
                            }), (0, d.jsxs)("div", {
                                className: "flex justify-center gap-3",
                                children: [(0, d.jsx)(k(), {
                                    href: "https://docs.pond0x.com/terms",
                                    className: "termslink",
                                    target: "_blank",
                                    children: "Terms"
                                }), "|", (0, d.jsx)(k(), {
                                    href: "https://docs.pond0x.com/privacy",
                                    className: "termslink",
                                    target: "_blank",
                                    children: "Privacy"
                                })]
                            })]
                        })]
                    }), (0, d.jsx)("div", {
                        className: "toast toast-end",
                        children: eh && eh.transactionHash && "success" === eh.status && (0, d.jsx)("div", {
                            onClick: () => ej(""),
                            className: "alert alert-success cursor-pointer",
                            children: (0, d.jsxs)("span", {
                                children: ["SUCCESS! ", (0, d.jsx)(k(), {
                                    className: "underline",
                                    href: "https://".concat("www", ".etherscan.io/tx/").concat(eh.transactionHash),
                                    target: "_blank",
                                    children: "View on etherscan"
                                })]
                            })
                        })
                    })]
                })
            }
            let z = "0xe7f01261EF9792095E22aBBF7F6f7B881D423C28",
                M = (0, b.v)({
                    chain: c.RJ,
                    transport: (0, a.d)()
                });

            function S() {
                let e = function(e) {
                        let s = e => window.matchMedia(e).matches,
                            [f, d] = (0, o.useState)(s(e));

                        function b() {
                            d(s(e))
                        }
                        return (0, o.useEffect)(() => {
                            let s = window.matchMedia(e);
                            return b(), s.addListener ? s.addListener(b) : s.addEventListener("change", b), () => {
                                s.removeListener ? s.removeListener(b) : s.removeEventListener("change", b)
                            }
                        }, [e]), f
                    }("(min-width: 768px)"),
                    [s, f] = (0, o.useState)(0);
                return (0, o.useEffect)(() => {
                    (async () => {
                        let e = await M.readContract({
                                address: z,
                                abi: y,
                                functionName: "openedAtTimestamp"
                            }),
                            s = await M.readContract({
                                address: z,
                                abi: y,
                                functionName: "canEndAfterTime"
                            });
                        parseInt(e.toString()), parseInt(s.toString()), f(1691355255e3)
                    })()
                }, [M]), (0, d.jsxs)("div", {
                    className: "w-full px-0 max-w-[500px] mt-0 sm:mt-16 !mx-auto flex flex-col pt-[100px] sm:pt-[50px]",
                    children: [(0, d.jsx)("div", {
                        className: "push__wrapper",
                        children: (0, d.jsx)("div", {
                            className: "push__box",
                            children: (0, d.jsxs)("div", {
                                className: "push__content",
                                children: [(0, d.jsxs)("div", {
                                    className: "push__top",
                                    children: [(0, d.jsxs)("div", {
                                        className: "col",
                                        children: [(0, d.jsx)("div", {
                                            className: "push__imgwrap",
                                            children: (0, d.jsx)("img", {
                                                className: "push__icon",
                                                src: "https://www.yougetnothin.com/icon-ios-msg.png",
                                                alt: ""
                                            })
                                        }), (0, d.jsx)("span", {
                                            className: "push__title !text-black",
                                            children: "Messages"
                                        })]
                                    }), (0, d.jsx)("div", {
                                        className: "col",
                                        children: (0, d.jsx)("div", {
                                            className: "push__time",
                                            children: "Just Now"
                                        })
                                    })]
                                }), (0, d.jsxs)("div", {
                                    className: "push__main",
                                    children: [(0, d.jsx)("div", {
                                        className: "push__person !text-black",
                                        children: "Maybe: Pauly0x"
                                    }), (0, d.jsx)("div", {
                                        className: "!text-black flex gap-2",
                                        children: "Wen Binance?"
                                    })]
                                })]
                            })
                        })
                    }), (0, d.jsxs)("div", {
                        className: "p-2 z-30",
                        children: [(0, d.jsx)(o.Suspense, {
                            fallback: (0, d.jsx)("div", {}),
                            children: (0, d.jsx)("div", {
                                className: "logo btmspace mt-5 sm:mt-0",
                                children: e ? (0, d.jsx)("video", {
                                    autoPlay: !0,
                                    loop: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    poster: "images/pond-logo.png",
                                    children: (0, d.jsx)("source", {
                                        src: "pond-logo.webm",
                                        type: "video/webm"
                                    })
                                }) : (0, d.jsx)("img", {
                                    src: "images/pond-logo.png"
                                })
                            })
                        }), (0, d.jsx)(N, {})]
                    }), e && (0, d.jsx)("div", {
                        className: "water z-20h-[100vh] w-[100%] bottom-0",
                        style: {
                            top: "0%"
                        },
                        children: (0, d.jsx)("video", {
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            controls: !1,
                            className: "object-fill  w-[240%] h-[300%] sm:w-[100%] sm:h-[100%] mt-[-60%] sm:mt-0",
                            children: (0, d.jsx)("source", {
                                src: "images/water3.mp4",
                                type: "video/mp4"
                            })
                        })
                    })]
                })
            }
        },
        3011: function(e, s, f) {
            "use strict";
            f.d(s, {
                j: function() {
                    return d
                }
            });
            let d = e => {
                if (!e) return "";
                let s = e.substring(0, 6),
                    f = e.substring(38, 42);
                return "".concat(s, "...").concat(f)
            }
        }
    },
    function(e) {
        e.O(0, [330, 369, 964, 64, 857, 744], function() {
            return e(e.s = 3415)
        }), _N_E = e.O()
    }
]);