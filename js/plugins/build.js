! function t(e, n, a) {
    function i(o, s) {
        if (!n[o]) {
            if (!e[o]) {
                var l = "function" == typeof require && require;
                if (!s && l) return l(o, !0);
                if (r) return r(o, !0);
                var d = new Error("Cannot find module '" + o + "'");
                throw d.code = "MODULE_NOT_FOUND", d
            }
            var u = n[o] = {
                exports: {}
            };
            e[o][0].call(u.exports, function(t) {
                var n = e[o][1][t];
                return i(n ? n : t)
            }, u, u.exports, t, e, n, a)
        }
        return n[o].exports
    }
    for (var r = "function" == typeof require && require, o = 0; o < a.length; o++) i(a[o]);
    return i
}({
    1: [function(t, e, n) {
        var a = t("./core/core.js")();
        t("./core/core.helpers")(a), t("./core/core.canvasHelpers")(a), t("./core/core.element")(a), t("./core/core.animation")(a), t("./core/core.controller")(a), t("./core/core.datasetController")(a), t("./core/core.layoutService")(a), t("./core/core.scaleService")(a), t("./core/core.plugin.js")(a), t("./core/core.scale")(a), t("./core/core.title")(a), t("./core/core.legend")(a), t("./core/core.tooltip")(a), t("./elements/element.arc")(a), t("./elements/element.line")(a), t("./elements/element.point")(a), t("./elements/element.rectangle")(a), t("./scales/scale.linearbase.js")(a), t("./scales/scale.category")(a), t("./scales/scale.linear")(a), t("./scales/scale.logarithmic")(a), t("./scales/scale.radialLinear")(a), t("./scales/scale.time")(a), t("./controllers/controller.bar")(a), t("./controllers/controller.bubble")(a), t("./controllers/controller.doughnut")(a), t("./controllers/controller.line")(a), t("./controllers/controller.polarArea")(a), t("./controllers/controller.radar")(a), t("./charts/Chart.Bar")(a), t("./charts/Chart.Bubble")(a), t("./charts/Chart.Doughnut")(a), t("./charts/Chart.Line")(a), t("./charts/Chart.PolarArea")(a), t("./charts/Chart.Radar")(a), t("./charts/Chart.Scatter")(a), window.Chart = e.exports = a
    }, {
        "./charts/Chart.Bar": 2,
        "./charts/Chart.Bubble": 3,
        "./charts/Chart.Doughnut": 4,
        "./charts/Chart.Line": 5,
        "./charts/Chart.PolarArea": 6,
        "./charts/Chart.Radar": 7,
        "./charts/Chart.Scatter": 8,
        "./controllers/controller.bar": 9,
        "./controllers/controller.bubble": 10,
        "./controllers/controller.doughnut": 11,
        "./controllers/controller.line": 12,
        "./controllers/controller.polarArea": 13,
        "./controllers/controller.radar": 14,
        "./core/core.animation": 15,
        "./core/core.canvasHelpers": 16,
        "./core/core.controller": 17,
        "./core/core.datasetController": 18,
        "./core/core.element": 19,
        "./core/core.helpers": 20,
        "./core/core.js": 21,
        "./core/core.layoutService": 22,
        "./core/core.legend": 23,
        "./core/core.plugin.js": 24,
        "./core/core.scale": 25,
        "./core/core.scaleService": 26,
        "./core/core.title": 27,
        "./core/core.tooltip": 28,
        "./elements/element.arc": 29,
        "./elements/element.line": 30,
        "./elements/element.point": 31,
        "./elements/element.rectangle": 32,
        "./scales/scale.category": 33,
        "./scales/scale.linear": 34,
        "./scales/scale.linearbase.js": 35,
        "./scales/scale.logarithmic": 36,
        "./scales/scale.radialLinear": 37,
        "./scales/scale.time": 38
    }],
    2: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            t.Bar = function(e, n) {
                return n.type = "bar", new t(e, n)
            }
        }
    }, {}],
    3: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            t.Bubble = function(e, n) {
                return n.type = "bubble", new t(e, n)
            }
        }
    }, {}],
    4: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            t.Doughnut = function(e, n) {
                return n.type = "doughnut", new t(e, n)
            }
        }
    }, {}],
    5: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            t.Line = function(e, n) {
                return n.type = "line", new t(e, n)
            }
        }
    }, {}],
    6: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            t.PolarArea = function(e, n) {
                return n.type = "polarArea", new t(e, n)
            }
        }
    }, {}],
    7: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            t.Radar = function(e, n) {
                return n.options = t.helpers.configMerge({
                    aspectRatio: 1
                }, n.options), n.type = "radar", new t(e, n)
            }
        }
    }, {}],
    8: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom",
                        id: "x-axis-1"
                    }],
                    yAxes: [{
                        type: "linear",
                        position: "left",
                        id: "y-axis-1"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t) {
                            return "(" + t.xLabel + ", " + t.yLabel + ")"
                        }
                    }
                }
            };
            t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function(e, n) {
                return n.type = "scatter", new t(e, n)
            }
        }
    }, {}],
    9: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.bar = {
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }],
                    yAxes: [{
                        type: "linear"
                    }]
                }
            }, t.controllers.bar = t.DatasetController.extend({
                dataElementType: t.elements.Rectangle,
                initialize: function(e, n) {
                    t.DatasetController.prototype.initialize.call(this, e, n), this.getMeta().bar = !0
                },
                getBarCount: function() {
                    var t = this,
                        n = 0;
                    return e.each(t.chart.data.datasets, function(e, a) {
                        var i = t.chart.getDatasetMeta(a);
                        i.bar && t.chart.isDatasetVisible(a) && ++n
                    }, t), n
                },
                update: function(t) {
                    var n = this;
                    e.each(n.getMeta().data, function(e, a) {
                        n.updateElement(e, a, t)
                    }, n)
                },
                updateElement: function(t, n, a) {
                    var i = this,
                        r = i.getMeta(),
                        o = i.getScaleForId(r.xAxisID),
                        s = i.getScaleForId(r.yAxisID),
                        l = s.getBasePixel(),
                        d = i.chart.options.elements.rectangle,
                        u = t.custom || {},
                        c = i.getDataset();
                    e.extend(t, {
                        _xScale: o,
                        _yScale: s,
                        _datasetIndex: i.index,
                        _index: n,
                        _model: {
                            x: i.calculateBarX(n, i.index),
                            y: a ? l : i.calculateBarY(n, i.index),
                            label: i.chart.data.labels[n],
                            datasetLabel: c.label,
                            base: a ? l : i.calculateBarBase(i.index, n),
                            width: i.calculateBarWidth(n),
                            backgroundColor: u.backgroundColor ? u.backgroundColor : e.getValueAtIndexOrDefault(c.backgroundColor, n, d.backgroundColor),
                            borderSkipped: u.borderSkipped ? u.borderSkipped : d.borderSkipped,
                            borderColor: u.borderColor ? u.borderColor : e.getValueAtIndexOrDefault(c.borderColor, n, d.borderColor),
                            borderWidth: u.borderWidth ? u.borderWidth : e.getValueAtIndexOrDefault(c.borderWidth, n, d.borderWidth)
                        }
                    }), t.pivot()
                },
                calculateBarBase: function(t, e) {
                    var n = this,
                        a = n.getMeta(),
                        i = n.getScaleForId(a.yAxisID),
                        r = 0;
                    if (i.options.stacked) {
                        for (var o = n.chart, s = o.data.datasets, l = Number(s[t].data[e]), d = 0; d < t; d++) {
                            var u = s[d],
                                c = o.getDatasetMeta(d);
                            if (c.bar && c.yAxisID === i.id && o.isDatasetVisible(d)) {
                                var h = Number(u.data[e]);
                                r += l < 0 ? Math.min(h, 0) : Math.max(h, 0)
                            }
                        }
                        return i.getPixelForValue(r)
                    }
                    return i.getBasePixel()
                },
                getRuler: function(t) {
                    var e, n = this,
                        a = n.getMeta(),
                        i = n.getScaleForId(a.xAxisID),
                        r = n.getBarCount();
                    e = "category" === i.options.type ? i.getPixelForTick(t + 1) - i.getPixelForTick(t) : i.width / i.ticks.length;
                    var o = e * i.options.categoryPercentage,
                        s = (e - e * i.options.categoryPercentage) / 2,
                        l = o / r;
                    if (i.ticks.length !== n.chart.data.labels.length) {
                        var d = i.ticks.length / n.chart.data.labels.length;
                        l *= d
                    }
                    var u = l * i.options.barPercentage,
                        c = l - l * i.options.barPercentage;
                    return {
                        datasetCount: r,
                        tickWidth: e,
                        categoryWidth: o,
                        categorySpacing: s,
                        fullBarWidth: l,
                        barWidth: u,
                        barSpacing: c
                    }
                },
                calculateBarWidth: function(t) {
                    var e = this.getScaleForId(this.getMeta().xAxisID);
                    if (e.options.barThickness) return e.options.barThickness;
                    var n = this.getRuler(t);
                    return e.options.stacked ? n.categoryWidth : n.barWidth
                },
                getBarIndex: function(t) {
                    var e, n, a = 0;
                    for (n = 0; n < t; ++n) e = this.chart.getDatasetMeta(n), e.bar && this.chart.isDatasetVisible(n) && ++a;
                    return a
                },
                calculateBarX: function(t, e) {
                    var n = this,
                        a = n.getMeta(),
                        i = n.getScaleForId(a.xAxisID),
                        r = n.getBarIndex(e),
                        o = n.getRuler(t),
                        s = i.getPixelForValue(null, t, e, n.chart.isCombo);
                    return s -= n.chart.isCombo ? o.tickWidth / 2 : 0, i.options.stacked ? s + o.categoryWidth / 2 + o.categorySpacing : s + o.barWidth / 2 + o.categorySpacing + o.barWidth * r + o.barSpacing / 2 + o.barSpacing * r
                },
                calculateBarY: function(t, e) {
                    var n = this,
                        a = n.getMeta(),
                        i = n.getScaleForId(a.yAxisID),
                        r = Number(n.getDataset().data[t]);
                    if (i.options.stacked) {
                        for (var o = 0, s = 0, l = 0; l < e; l++) {
                            var d = n.chart.data.datasets[l],
                                u = n.chart.getDatasetMeta(l);
                            if (u.bar && u.yAxisID === i.id && n.chart.isDatasetVisible(l)) {
                                var c = Number(d.data[t]);
                                c < 0 ? s += c || 0 : o += c || 0
                            }
                        }
                        return r < 0 ? i.getPixelForValue(s + r) : i.getPixelForValue(o + r)
                    }
                    return i.getPixelForValue(r)
                },
                draw: function(t) {
                    var n = this,
                        a = t || 1;
                    e.each(n.getMeta().data, function(t, e) {
                        var i = n.getDataset().data[e];
                        null === i || void 0 === i || isNaN(i) || t.transition(a).draw()
                    }, n)
                },
                setHoverStyle: function(t) {
                    var n = this.chart.data.datasets[t._datasetIndex],
                        a = t._index,
                        i = t.custom || {},
                        r = t._model;
                    r.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : e.getValueAtIndexOrDefault(n.hoverBackgroundColor, a, e.getHoverColor(r.backgroundColor)), r.borderColor = i.hoverBorderColor ? i.hoverBorderColor : e.getValueAtIndexOrDefault(n.hoverBorderColor, a, e.getHoverColor(r.borderColor)), r.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : e.getValueAtIndexOrDefault(n.hoverBorderWidth, a, r.borderWidth)
                },
                removeHoverStyle: function(t) {
                    var n = this.chart.data.datasets[t._datasetIndex],
                        a = t._index,
                        i = t.custom || {},
                        r = t._model,
                        o = this.chart.options.elements.rectangle;
                    r.backgroundColor = i.backgroundColor ? i.backgroundColor : e.getValueAtIndexOrDefault(n.backgroundColor, a, o.backgroundColor), r.borderColor = i.borderColor ? i.borderColor : e.getValueAtIndexOrDefault(n.borderColor, a, o.borderColor), r.borderWidth = i.borderWidth ? i.borderWidth : e.getValueAtIndexOrDefault(n.borderWidth, a, o.borderWidth)
                }
            }), t.defaults.horizontalBar = {
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        position: "left",
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }]
                },
                elements: {
                    rectangle: {
                        borderSkipped: "left"
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function(t, e) {
                            var n = "";
                            return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n
                        },
                        label: function(t, e) {
                            var n = e.datasets[t.datasetIndex].label || "";
                            return n + ": " + t.xLabel
                        }
                    }
                }
            }, t.controllers.horizontalBar = t.controllers.bar.extend({
                updateElement: function(t, n, a) {
                    var i = this,
                        r = i.getMeta(),
                        o = i.getScaleForId(r.xAxisID),
                        s = i.getScaleForId(r.yAxisID),
                        l = o.getBasePixel(),
                        d = t.custom || {},
                        u = i.getDataset(),
                        c = i.chart.options.elements.rectangle;
                    e.extend(t, {
                        _xScale: o,
                        _yScale: s,
                        _datasetIndex: i.index,
                        _index: n,
                        _model: {
                            x: a ? l : i.calculateBarX(n, i.index),
                            y: i.calculateBarY(n, i.index),
                            label: i.chart.data.labels[n],
                            datasetLabel: u.label,
                            base: a ? l : i.calculateBarBase(i.index, n),
                            height: i.calculateBarHeight(n),
                            backgroundColor: d.backgroundColor ? d.backgroundColor : e.getValueAtIndexOrDefault(u.backgroundColor, n, c.backgroundColor),
                            borderSkipped: d.borderSkipped ? d.borderSkipped : c.borderSkipped,
                            borderColor: d.borderColor ? d.borderColor : e.getValueAtIndexOrDefault(u.borderColor, n, c.borderColor),
                            borderWidth: d.borderWidth ? d.borderWidth : e.getValueAtIndexOrDefault(u.borderWidth, n, c.borderWidth)
                        },
                        draw: function() {
                            function t(t) {
                                return l[(u + t) % 4]
                            }
                            var e = this._chart.ctx,
                                n = this._view,
                                a = n.height / 2,
                                i = n.y - a,
                                r = n.y + a,
                                o = n.base - (n.base - n.x),
                                s = n.borderWidth / 2;
                            n.borderWidth && (i += s, r -= s, o += s), e.beginPath(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth;
                            var l = [
                                    [n.base, r],
                                    [n.base, i],
                                    [o, i],
                                    [o, r]
                                ],
                                d = ["bottom", "left", "top", "right"],
                                u = d.indexOf(n.borderSkipped, 0);
                            u === -1 && (u = 0), e.moveTo.apply(e, t(0));
                            for (var c = 1; c < 4; c++) e.lineTo.apply(e, t(c));
                            e.fill(), n.borderWidth && e.stroke()
                        },
                        inRange: function(t, e) {
                            var n = this._view,
                                a = !1;
                            return n && (a = n.x < n.base ? e >= n.y - n.height / 2 && e <= n.y + n.height / 2 && t >= n.x && t <= n.base : e >= n.y - n.height / 2 && e <= n.y + n.height / 2 && t >= n.base && t <= n.x), a
                        }
                    }), t.pivot()
                },
                calculateBarBase: function(t, e) {
                    var n = this,
                        a = n.getMeta(),
                        i = n.getScaleForId(a.xAxisID),
                        r = 0;
                    if (i.options.stacked) {
                        for (var o = n.chart, s = o.data.datasets, l = Number(s[t].data[e]), d = 0; d < t; d++) {
                            var u = s[d],
                                c = o.getDatasetMeta(d);
                            if (c.bar && c.xAxisID === i.id && o.isDatasetVisible(d)) {
                                var h = Number(u.data[e]);
                                r += l < 0 ? Math.min(h, 0) : Math.max(h, 0)
                            }
                        }
                        return i.getPixelForValue(r)
                    }
                    return i.getBasePixel()
                },
                getRuler: function(t) {
                    var e, n = this,
                        a = n.getMeta(),
                        i = n.getScaleForId(a.yAxisID),
                        r = n.getBarCount();
                    e = "category" === i.options.type ? i.getPixelForTick(t + 1) - i.getPixelForTick(t) : i.width / i.ticks.length;
                    var o = e * i.options.categoryPercentage,
                        s = (e - e * i.options.categoryPercentage) / 2,
                        l = o / r;
                    if (i.ticks.length !== n.chart.data.labels.length) {
                        var d = i.ticks.length / n.chart.data.labels.length;
                        l *= d
                    }
                    var u = l * i.options.barPercentage,
                        c = l - l * i.options.barPercentage;
                    return {
                        datasetCount: r,
                        tickHeight: e,
                        categoryHeight: o,
                        categorySpacing: s,
                        fullBarHeight: l,
                        barHeight: u,
                        barSpacing: c
                    }
                },
                calculateBarHeight: function(t) {
                    var e = this,
                        n = e.getScaleForId(e.getMeta().yAxisID);
                    if (n.options.barThickness) return n.options.barThickness;
                    var a = e.getRuler(t);
                    return n.options.stacked ? a.categoryHeight : a.barHeight
                },
                calculateBarX: function(t, e) {
                    var n = this,
                        a = n.getMeta(),
                        i = n.getScaleForId(a.xAxisID),
                        r = Number(n.getDataset().data[t]);
                    if (i.options.stacked) {
                        for (var o = 0, s = 0, l = 0; l < e; l++) {
                            var d = n.chart.data.datasets[l],
                                u = n.chart.getDatasetMeta(l);
                            if (u.bar && u.xAxisID === i.id && n.chart.isDatasetVisible(l)) {
                                var c = Number(d.data[t]);
                                c < 0 ? s += c || 0 : o += c || 0
                            }
                        }
                        return r < 0 ? i.getPixelForValue(s + r) : i.getPixelForValue(o + r)
                    }
                    return i.getPixelForValue(r)
                },
                calculateBarY: function(t, e) {
                    var n = this,
                        a = n.getMeta(),
                        i = n.getScaleForId(a.yAxisID),
                        r = n.getBarIndex(e),
                        o = n.getRuler(t),
                        s = i.getPixelForValue(null, t, e, n.chart.isCombo);
                    return s -= n.chart.isCombo ? o.tickHeight / 2 : 0, i.options.stacked ? s + o.categoryHeight / 2 + o.categorySpacing : s + o.barHeight / 2 + o.categorySpacing + o.barHeight * r + o.barSpacing / 2 + o.barSpacing * r
                }
            })
        }
    }, {}],
    10: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.bubble = {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        position: "left",
                        id: "y-axis-0"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            var n = e.datasets[t.datasetIndex].label || "",
                                a = e.datasets[t.datasetIndex].data[t.index];
                            return n + ": (" + a.x + ", " + a.y + ", " + a.r + ")"
                        }
                    }
                }
            }, t.controllers.bubble = t.DatasetController.extend({
                dataElementType: t.elements.Point,
                update: function(t) {
                    var n = this,
                        a = n.getMeta(),
                        i = a.data;
                    e.each(i, function(e, a) {
                        n.updateElement(e, a, t)
                    })
                },
                updateElement: function(n, a, i) {
                    var r = this,
                        o = r.getMeta(),
                        s = r.getScaleForId(o.xAxisID),
                        l = r.getScaleForId(o.yAxisID),
                        d = n.custom || {},
                        u = r.getDataset(),
                        c = u.data[a],
                        h = r.chart.options.elements.point,
                        f = r.index;
                    e.extend(n, {
                        _xScale: s,
                        _yScale: l,
                        _datasetIndex: f,
                        _index: a,
                        _model: {
                            x: i ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof c ? c : NaN, a, f, r.chart.isCombo),
                            y: i ? l.getBasePixel() : l.getPixelForValue(c, a, f),
                            radius: i ? 0 : d.radius ? d.radius : r.getRadius(c),
                            hitRadius: d.hitRadius ? d.hitRadius : e.getValueAtIndexOrDefault(u.hitRadius, a, h.hitRadius)
                        }
                    }), t.DatasetController.prototype.removeHoverStyle.call(r, n, h);
                    var g = n._model;
                    g.skip = d.skip ? d.skip : isNaN(g.x) || isNaN(g.y), n.pivot()
                },
                getRadius: function(t) {
                    return t.r || this.chart.options.elements.point.radius
                },
                setHoverStyle: function(n) {
                    var a = this;
                    t.DatasetController.prototype.setHoverStyle.call(a, n);
                    var i = a.chart.data.datasets[n._datasetIndex],
                        r = n._index,
                        o = n.custom || {},
                        s = n._model;
                    s.radius = o.hoverRadius ? o.hoverRadius : e.getValueAtIndexOrDefault(i.hoverRadius, r, a.chart.options.elements.point.hoverRadius) + a.getRadius(i.data[r])
                },
                removeHoverStyle: function(e) {
                    var n = this;
                    t.DatasetController.prototype.removeHoverStyle.call(n, e, n.chart.options.elements.point);
                    var a = n.chart.data.datasets[e._datasetIndex].data[e._index],
                        i = e.custom || {},
                        r = e._model;
                    r.radius = i.radius ? i.radius : n.getRadius(a)
                }
            })
        }
    }, {}],
    11: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                n = t.defaults;
            n.doughnut = {
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                aspectRatio: 1,
                hover: {
                    mode: "single"
                },
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var n = t.data,
                        a = n.datasets,
                        i = n.labels;
                    if (a.length)
                        for (var r = 0; r < a[0].data.length; ++r) e.push('<li><span style="background-color:' + a[0].backgroundColor[r] + '"></span>'), i[r] && e.push(i[r]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(t) {
                            var n = t.data;
                            return n.labels.length && n.datasets.length ? n.labels.map(function(a, i) {
                                var r = t.getDatasetMeta(0),
                                    o = n.datasets[0],
                                    s = r.data[i],
                                    l = s && s.custom || {},
                                    d = e.getValueAtIndexOrDefault,
                                    u = t.options.elements.arc,
                                    c = l.backgroundColor ? l.backgroundColor : d(o.backgroundColor, i, u.backgroundColor),
                                    h = l.borderColor ? l.borderColor : d(o.borderColor, i, u.borderColor),
                                    f = l.borderWidth ? l.borderWidth : d(o.borderWidth, i, u.borderWidth);
                                return {
                                    text: a,
                                    fillStyle: c,
                                    strokeStyle: h,
                                    lineWidth: f,
                                    hidden: isNaN(o.data[i]) || r.data[i].hidden,
                                    index: i
                                }
                            }) : []
                        }
                    },
                    onClick: function(t, e) {
                        var n, a, i, r = e.index,
                            o = this.chart;
                        for (n = 0, a = (o.data.datasets || []).length; n < a; ++n) i = o.getDatasetMeta(n), i.data[r] && (i.data[r].hidden = !i.data[r].hidden);
                        o.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: Math.PI * -.5,
                circumference: 2 * Math.PI,
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            return e.labels[t.index] + ": " + e.datasets[t.datasetIndex].data[t.index]
                        }
                    }
                }
            }, n.pie = e.clone(n.doughnut), e.extend(n.pie, {
                cutoutPercentage: 0
            }), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                dataElementType: t.elements.Arc,
                linkScales: e.noop,
                getRingIndex: function(t) {
                    for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
                    return e
                },
                update: function(t) {
                    var n = this,
                        a = n.chart,
                        i = a.chartArea,
                        r = a.options,
                        o = r.elements.arc,
                        s = i.right - i.left - o.borderWidth,
                        l = i.bottom - i.top - o.borderWidth,
                        d = Math.min(s, l),
                        u = {
                            x: 0,
                            y: 0
                        },
                        c = n.getMeta(),
                        h = r.cutoutPercentage,
                        f = r.circumference;
                    if (f < 2 * Math.PI) {
                        var g = r.rotation % (2 * Math.PI);
                        g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0);
                        var p = g + f,
                            m = {
                                x: Math.cos(g),
                                y: Math.sin(g)
                            },
                            v = {
                                x: Math.cos(p),
                                y: Math.sin(p)
                            },
                            b = g <= 0 && 0 <= p || g <= 2 * Math.PI && 2 * Math.PI <= p,
                            y = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                            x = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
                            k = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                            S = h / 100,
                            _ = {
                                x: x ? -1 : Math.min(m.x * (m.x < 0 ? 1 : S), v.x * (v.x < 0 ? 1 : S)),
                                y: k ? -1 : Math.min(m.y * (m.y < 0 ? 1 : S), v.y * (v.y < 0 ? 1 : S))
                            },
                            w = {
                                x: b ? 1 : Math.max(m.x * (m.x > 0 ? 1 : S), v.x * (v.x > 0 ? 1 : S)),
                                y: y ? 1 : Math.max(m.y * (m.y > 0 ? 1 : S), v.y * (v.y > 0 ? 1 : S))
                            },
                            M = {
                                width: .5 * (w.x - _.x),
                                height: .5 * (w.y - _.y)
                            };
                        d = Math.min(s / M.width, l / M.height), u = {
                            x: (w.x + _.x) * -.5,
                            y: (w.y + _.y) * -.5
                        }
                    }
                    a.borderWidth = n.getMaxBorderWidth(c.data), a.outerRadius = Math.max((d - a.borderWidth) / 2, 0), a.innerRadius = Math.max(h ? a.outerRadius / 100 * h : 1, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), a.offsetX = u.x * a.outerRadius, a.offsetY = u.y * a.outerRadius, c.total = n.calculateTotal(), n.outerRadius = a.outerRadius - a.radiusLength * n.getRingIndex(n.index), n.innerRadius = n.outerRadius - a.radiusLength, e.each(c.data, function(e, a) {
                        n.updateElement(e, a, t)
                    })
                },
                updateElement: function(t, n, a) {
                    var i = this,
                        r = i.chart,
                        o = r.chartArea,
                        s = r.options,
                        l = s.animation,
                        d = (o.left + o.right) / 2,
                        u = (o.top + o.bottom) / 2,
                        c = s.rotation,
                        h = s.rotation,
                        f = i.getDataset(),
                        g = a && l.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(f.data[n]) * (s.circumference / (2 * Math.PI)),
                        p = a && l.animateScale ? 0 : i.innerRadius,
                        m = a && l.animateScale ? 0 : i.outerRadius,
                        v = e.getValueAtIndexOrDefault;
                    e.extend(t, {
                        _datasetIndex: i.index,
                        _index: n,
                        _model: {
                            x: d + r.offsetX,
                            y: u + r.offsetY,
                            startAngle: c,
                            endAngle: h,
                            circumference: g,
                            outerRadius: m,
                            innerRadius: p,
                            label: v(f.label, n, r.data.labels[n])
                        }
                    });
                    var b = t._model;
                    this.removeHoverStyle(t), a && l.animateRotate || (0 === n ? b.startAngle = s.rotation : b.startAngle = i.getMeta().data[n - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot()
                },
                removeHoverStyle: function(e) {
                    t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                },
                calculateTotal: function() {
                    var t, n = this.getDataset(),
                        a = this.getMeta(),
                        i = 0;
                    return e.each(a.data, function(e, a) {
                        t = n.data[a], isNaN(t) || e.hidden || (i += Math.abs(t))
                    }), i
                },
                calculateCircumference: function(t) {
                    var e = this.getMeta().total;
                    return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
                },
                getMaxBorderWidth: function(t) {
                    for (var e, n, a = 0, i = this.index, r = t.length, o = 0; o < r; o++) e = t[o]._model ? t[o]._model.borderWidth : 0, n = t[o]._chart ? t[o]._chart.config.data.datasets[i].hoverBorderWidth : 0, a = e > a ? e : a, a = n > a ? n : a;
                    return a
                }
            })
        }
    }, {}],
    12: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            function e(t, e) {
                return n.getValueOrDefault(t.showLine, e.showLines)
            }
            var n = t.helpers;
            t.defaults.line = {
                showLines: !0,
                spanGaps: !1,
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        id: "y-axis-0"
                    }]
                }
            }, t.controllers.line = t.DatasetController.extend({
                datasetElementType: t.elements.Line,
                dataElementType: t.elements.Point,
                addElementAndReset: function(n) {
                    var a = this,
                        i = a.chart.options,
                        r = a.getMeta();
                    t.DatasetController.prototype.addElementAndReset.call(a, n), e(a.getDataset(), i) && 0 !== r.dataset._model.tension && a.updateBezierControlPoints()
                },
                update: function(t) {
                    var a, i, r, o = this,
                        s = o.getMeta(),
                        l = s.dataset,
                        d = s.data || [],
                        u = o.chart.options,
                        c = u.elements.line,
                        h = o.getScaleForId(s.yAxisID),
                        f = o.getDataset(),
                        g = e(f, u);
                    for (g && (r = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = o.index, l._children = d, l._model = {
                            spanGaps: f.spanGaps ? f.spanGaps : u.spanGaps,
                            tension: r.tension ? r.tension : n.getValueOrDefault(f.lineTension, c.tension),
                            backgroundColor: r.backgroundColor ? r.backgroundColor : f.backgroundColor || c.backgroundColor,
                            borderWidth: r.borderWidth ? r.borderWidth : f.borderWidth || c.borderWidth,
                            borderColor: r.borderColor ? r.borderColor : f.borderColor || c.borderColor,
                            borderCapStyle: r.borderCapStyle ? r.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
                            borderDash: r.borderDash ? r.borderDash : f.borderDash || c.borderDash,
                            borderDashOffset: r.borderDashOffset ? r.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
                            borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
                            fill: r.fill ? r.fill : void 0 !== f.fill ? f.fill : c.fill,
                            steppedLine: r.steppedLine ? r.steppedLine : n.getValueOrDefault(f.steppedLine, c.stepped),
                            cubicInterpolationMode: r.cubicInterpolationMode ? r.cubicInterpolationMode : n.getValueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode),
                            scaleTop: h.top,
                            scaleBottom: h.bottom,
                            scaleZero: h.getBasePixel()
                        }, l.pivot()), a = 0, i = d.length; a < i; ++a) o.updateElement(d[a], a, t);
                    for (g && 0 !== l._model.tension && o.updateBezierControlPoints(), a = 0, i = d.length; a < i; ++a) d[a].pivot()
                },
                getPointBackgroundColor: function(t, e) {
                    var a = this.chart.options.elements.point.backgroundColor,
                        i = this.getDataset(),
                        r = t.custom || {};
                    return r.backgroundColor ? a = r.backgroundColor : i.pointBackgroundColor ? a = n.getValueAtIndexOrDefault(i.pointBackgroundColor, e, a) : i.backgroundColor && (a = i.backgroundColor), a
                },
                getPointBorderColor: function(t, e) {
                    var a = this.chart.options.elements.point.borderColor,
                        i = this.getDataset(),
                        r = t.custom || {};
                    return r.borderColor ? a = r.borderColor : i.pointBorderColor ? a = n.getValueAtIndexOrDefault(i.pointBorderColor, e, a) : i.borderColor && (a = i.borderColor), a
                },
                getPointBorderWidth: function(t, e) {
                    var a = this.chart.options.elements.point.borderWidth,
                        i = this.getDataset(),
                        r = t.custom || {};
                    return r.borderWidth ? a = r.borderWidth : i.pointBorderWidth ? a = n.getValueAtIndexOrDefault(i.pointBorderWidth, e, a) : i.borderWidth && (a = i.borderWidth), a
                },
                updateElement: function(t, e, a) {
                    var i, r, o = this,
                        s = o.getMeta(),
                        l = t.custom || {},
                        d = o.getDataset(),
                        u = o.index,
                        c = d.data[e],
                        h = o.getScaleForId(s.yAxisID),
                        f = o.getScaleForId(s.xAxisID),
                        g = o.chart.options.elements.point,
                        p = o.chart.data.labels || [],
                        m = 1 === p.length || 1 === d.data.length || o.chart.isCombo;
                    void 0 !== d.radius && void 0 === d.pointRadius && (d.pointRadius = d.radius), void 0 !== d.hitRadius && void 0 === d.pointHitRadius && (d.pointHitRadius = d.hitRadius), i = f.getPixelForValue("object" == typeof c ? c : NaN, e, u, m), r = a ? h.getBasePixel() : o.calculatePointY(c, e, u), t._xScale = f, t._yScale = h, t._datasetIndex = u, t._index = e, t._model = {
                        x: i,
                        y: r,
                        skip: l.skip || isNaN(i) || isNaN(r),
                        radius: l.radius || n.getValueAtIndexOrDefault(d.pointRadius, e, g.radius),
                        pointStyle: l.pointStyle || n.getValueAtIndexOrDefault(d.pointStyle, e, g.pointStyle),
                        backgroundColor: o.getPointBackgroundColor(t, e),
                        borderColor: o.getPointBorderColor(t, e),
                        borderWidth: o.getPointBorderWidth(t, e),
                        tension: s.dataset._model ? s.dataset._model.tension : 0,
                        steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                        hitRadius: l.hitRadius || n.getValueAtIndexOrDefault(d.pointHitRadius, e, g.hitRadius)
                    }
                },
                calculatePointY: function(t, e, n) {
                    var a, i, r, o = this,
                        s = o.chart,
                        l = o.getMeta(),
                        d = o.getScaleForId(l.yAxisID),
                        u = 0,
                        c = 0;
                    if (d.options.stacked) {
                        for (a = 0; a < n; a++)
                            if (i = s.data.datasets[a], r = s.getDatasetMeta(a), "line" === r.type && r.yAxisID === d.id && s.isDatasetVisible(a)) {
                                var h = Number(d.getRightValue(i.data[e]));
                                h < 0 ? c += h || 0 : u += h || 0
                            }
                        var f = Number(d.getRightValue(t));
                        return f < 0 ? d.getPixelForValue(c + f) : d.getPixelForValue(u + f)
                    }
                    return d.getPixelForValue(t)
                },
                updateBezierControlPoints: function() {
                    function t(t, e, n) {
                        return Math.max(Math.min(t, n), e)
                    }
                    var e, a, i, r, o, s = this,
                        l = s.getMeta(),
                        d = s.chart.chartArea,
                        u = l.data || [];
                    if (l.dataset._model.spanGaps && (u = u.filter(function(t) {
                            return !t._model.skip
                        })), "monotone" === l.dataset._model.cubicInterpolationMode) n.splineCurveMonotone(u);
                    else
                        for (e = 0, a = u.length; e < a; ++e) i = u[e], r = i._model, o = n.splineCurve(n.previousItem(u, e)._model, r, n.nextItem(u, e)._model, l.dataset._model.tension), r.controlPointPreviousX = o.previous.x, r.controlPointPreviousY = o.previous.y, r.controlPointNextX = o.next.x, r.controlPointNextY = o.next.y;
                    if (s.chart.options.elements.line.capBezierPoints)
                        for (e = 0, a = u.length; e < a; ++e) r = u[e]._model, r.controlPointPreviousX = t(r.controlPointPreviousX, d.left, d.right), r.controlPointPreviousY = t(r.controlPointPreviousY, d.top, d.bottom), r.controlPointNextX = t(r.controlPointNextX, d.left, d.right), r.controlPointNextY = t(r.controlPointNextY, d.top, d.bottom)
                },
                draw: function(t) {
                    var n, a, i = this,
                        r = i.getMeta(),
                        o = r.data || [],
                        s = t || 1;
                    for (n = 0, a = o.length; n < a; ++n) o[n].transition(s);
                    for (e(i.getDataset(), i.chart.options) && r.dataset.transition(s).draw(), n = 0, a = o.length; n < a; ++n) o[n].draw()
                },
                setHoverStyle: function(t) {
                    var e = this.chart.data.datasets[t._datasetIndex],
                        a = t._index,
                        i = t.custom || {},
                        r = t._model;
                    r.radius = i.hoverRadius || n.getValueAtIndexOrDefault(e.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius), r.backgroundColor = i.hoverBackgroundColor || n.getValueAtIndexOrDefault(e.pointHoverBackgroundColor, a, n.getHoverColor(r.backgroundColor)), r.borderColor = i.hoverBorderColor || n.getValueAtIndexOrDefault(e.pointHoverBorderColor, a, n.getHoverColor(r.borderColor)), r.borderWidth = i.hoverBorderWidth || n.getValueAtIndexOrDefault(e.pointHoverBorderWidth, a, r.borderWidth)
                },
                removeHoverStyle: function(t) {
                    var e = this,
                        a = e.chart.data.datasets[t._datasetIndex],
                        i = t._index,
                        r = t.custom || {},
                        o = t._model;
                    void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), o.radius = r.radius || n.getValueAtIndexOrDefault(a.pointRadius, i, e.chart.options.elements.point.radius), o.backgroundColor = e.getPointBackgroundColor(t, i), o.borderColor = e.getPointBorderColor(t, i), o.borderWidth = e.getPointBorderWidth(t, i)
                }
            })
        }
    }, {}],
    13: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.polarArea = {
                scale: {
                    type: "radialLinear",
                    lineArc: !0,
                    ticks: {
                        beginAtZero: !0
                    }
                },
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                startAngle: -.5 * Math.PI,
                aspectRatio: 1,
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var n = t.data,
                        a = n.datasets,
                        i = n.labels;
                    if (a.length)
                        for (var r = 0; r < a[0].data.length; ++r) e.push('<li><span style="background-color:' + a[0].backgroundColor[r] + '">'), i[r] && e.push(i[r]), e.push("</span></li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(t) {
                            var n = t.data;
                            return n.labels.length && n.datasets.length ? n.labels.map(function(a, i) {
                                var r = t.getDatasetMeta(0),
                                    o = n.datasets[0],
                                    s = r.data[i],
                                    l = s.custom || {},
                                    d = e.getValueAtIndexOrDefault,
                                    u = t.options.elements.arc,
                                    c = l.backgroundColor ? l.backgroundColor : d(o.backgroundColor, i, u.backgroundColor),
                                    h = l.borderColor ? l.borderColor : d(o.borderColor, i, u.borderColor),
                                    f = l.borderWidth ? l.borderWidth : d(o.borderWidth, i, u.borderWidth);
                                return {
                                    text: a,
                                    fillStyle: c,
                                    strokeStyle: h,
                                    lineWidth: f,
                                    hidden: isNaN(o.data[i]) || r.data[i].hidden,
                                    index: i
                                }
                            }) : []
                        }
                    },
                    onClick: function(t, e) {
                        var n, a, i, r = e.index,
                            o = this.chart;
                        for (n = 0, a = (o.data.datasets || []).length; n < a; ++n) i = o.getDatasetMeta(n), i.data[r].hidden = !i.data[r].hidden;
                        o.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            return e.labels[t.index] + ": " + t.yLabel
                        }
                    }
                }
            }, t.controllers.polarArea = t.DatasetController.extend({
                dataElementType: t.elements.Arc,
                linkScales: e.noop,
                update: function(t) {
                    var n = this,
                        a = n.chart,
                        i = a.chartArea,
                        r = n.getMeta(),
                        o = a.options,
                        s = o.elements.arc,
                        l = Math.min(i.right - i.left, i.bottom - i.top);
                    a.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), a.innerRadius = Math.max(o.cutoutPercentage ? a.outerRadius / 100 * o.cutoutPercentage : 1, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), n.outerRadius = a.outerRadius - a.radiusLength * n.index, n.innerRadius = n.outerRadius - a.radiusLength, r.count = n.countVisibleElements(), e.each(r.data, function(e, a) {
                        n.updateElement(e, a, t)
                    })
                },
                updateElement: function(t, n, a) {
                    for (var i = this, r = i.chart, o = i.getDataset(), s = r.options, l = s.animation, d = r.scale, u = e.getValueAtIndexOrDefault, c = r.data.labels, h = i.calculateCircumference(o.data[n]), f = d.xCenter, g = d.yCenter, p = 0, m = i.getMeta(), v = 0; v < n; ++v) isNaN(o.data[v]) || m.data[v].hidden || ++p;
                    var b = s.startAngle,
                        y = t.hidden ? 0 : d.getDistanceFromCenterForValue(o.data[n]),
                        x = b + h * p,
                        k = x + (t.hidden ? 0 : h),
                        S = l.animateScale ? 0 : d.getDistanceFromCenterForValue(o.data[n]);
                    e.extend(t, {
                        _datasetIndex: i.index,
                        _index: n,
                        _scale: d,
                        _model: {
                            x: f,
                            y: g,
                            innerRadius: 0,
                            outerRadius: a ? S : y,
                            startAngle: a && l.animateRotate ? b : x,
                            endAngle: a && l.animateRotate ? b : k,
                            label: u(c, n, c[n])
                        }
                    }), i.removeHoverStyle(t), t.pivot()
                },
                removeHoverStyle: function(e) {
                    t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                },
                countVisibleElements: function() {
                    var t = this.getDataset(),
                        n = this.getMeta(),
                        a = 0;
                    return e.each(n.data, function(e, n) {
                        isNaN(t.data[n]) || e.hidden || a++
                    }), a
                },
                calculateCircumference: function(t) {
                    var e = this.getMeta().count;
                    return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
                }
            })
        }
    }, {}],
    14: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.radar = {
                scale: {
                    type: "radialLinear"
                },
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }, t.controllers.radar = t.DatasetController.extend({
                datasetElementType: t.elements.Line,
                dataElementType: t.elements.Point,
                linkScales: e.noop,
                addElementAndReset: function(e) {
                    t.DatasetController.prototype.addElementAndReset.call(this, e), this.updateBezierControlPoints()
                },
                update: function(t) {
                    var n = this,
                        a = n.getMeta(),
                        i = a.dataset,
                        r = a.data,
                        o = i.custom || {},
                        s = n.getDataset(),
                        l = n.chart.options.elements.line,
                        d = n.chart.scale;
                    void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), e.extend(a.dataset, {
                        _datasetIndex: n.index,
                        _children: r,
                        _loop: !0,
                        _model: {
                            tension: o.tension ? o.tension : e.getValueOrDefault(s.lineTension, l.tension),
                            backgroundColor: o.backgroundColor ? o.backgroundColor : s.backgroundColor || l.backgroundColor,
                            borderWidth: o.borderWidth ? o.borderWidth : s.borderWidth || l.borderWidth,
                            borderColor: o.borderColor ? o.borderColor : s.borderColor || l.borderColor,
                            fill: o.fill ? o.fill : void 0 !== s.fill ? s.fill : l.fill,
                            borderCapStyle: o.borderCapStyle ? o.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                            borderDash: o.borderDash ? o.borderDash : s.borderDash || l.borderDash,
                            borderDashOffset: o.borderDashOffset ? o.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                            borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle,
                            scaleTop: d.top,
                            scaleBottom: d.bottom,
                            scaleZero: d.getBasePosition()
                        }
                    }), a.dataset.pivot(), e.each(r, function(e, a) {
                        n.updateElement(e, a, t)
                    }, n), n.updateBezierControlPoints()
                },
                updateElement: function(t, n, a) {
                    var i = this,
                        r = t.custom || {},
                        o = i.getDataset(),
                        s = i.chart.scale,
                        l = i.chart.options.elements.point,
                        d = s.getPointPositionForValue(n, o.data[n]);
                    e.extend(t, {
                        _datasetIndex: i.index,
                        _index: n,
                        _scale: s,
                        _model: {
                            x: a ? s.xCenter : d.x,
                            y: a ? s.yCenter : d.y,
                            tension: r.tension ? r.tension : e.getValueOrDefault(o.tension, i.chart.options.elements.line.tension),
                            radius: r.radius ? r.radius : e.getValueAtIndexOrDefault(o.pointRadius, n, l.radius),
                            backgroundColor: r.backgroundColor ? r.backgroundColor : e.getValueAtIndexOrDefault(o.pointBackgroundColor, n, l.backgroundColor),
                            borderColor: r.borderColor ? r.borderColor : e.getValueAtIndexOrDefault(o.pointBorderColor, n, l.borderColor),
                            borderWidth: r.borderWidth ? r.borderWidth : e.getValueAtIndexOrDefault(o.pointBorderWidth, n, l.borderWidth),
                            pointStyle: r.pointStyle ? r.pointStyle : e.getValueAtIndexOrDefault(o.pointStyle, n, l.pointStyle),
                            hitRadius: r.hitRadius ? r.hitRadius : e.getValueAtIndexOrDefault(o.hitRadius, n, l.hitRadius)
                        }
                    }), t._model.skip = r.skip ? r.skip : isNaN(t._model.x) || isNaN(t._model.y)
                },
                updateBezierControlPoints: function() {
                    var t = this.chart.chartArea,
                        n = this.getMeta();
                    e.each(n.data, function(a, i) {
                        var r = a._model,
                            o = e.splineCurve(e.previousItem(n.data, i, !0)._model, r, e.nextItem(n.data, i, !0)._model, r.tension);
                        r.controlPointPreviousX = Math.max(Math.min(o.previous.x, t.right), t.left), r.controlPointPreviousY = Math.max(Math.min(o.previous.y, t.bottom), t.top), r.controlPointNextX = Math.max(Math.min(o.next.x, t.right), t.left), r.controlPointNextY = Math.max(Math.min(o.next.y, t.bottom), t.top), a.pivot()
                    })
                },
                draw: function(t) {
                    var n = this.getMeta(),
                        a = t || 1;
                    e.each(n.data, function(t) {
                        t.transition(a)
                    }), n.dataset.transition(a).draw(), e.each(n.data, function(t) {
                        t.draw()
                    })
                },
                setHoverStyle: function(t) {
                    var n = this.chart.data.datasets[t._datasetIndex],
                        a = t.custom || {},
                        i = t._index,
                        r = t._model;
                    r.radius = a.hoverRadius ? a.hoverRadius : e.getValueAtIndexOrDefault(n.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), r.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : e.getValueAtIndexOrDefault(n.pointHoverBackgroundColor, i, e.getHoverColor(r.backgroundColor)), r.borderColor = a.hoverBorderColor ? a.hoverBorderColor : e.getValueAtIndexOrDefault(n.pointHoverBorderColor, i, e.getHoverColor(r.borderColor)), r.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : e.getValueAtIndexOrDefault(n.pointHoverBorderWidth, i, r.borderWidth)
                },
                removeHoverStyle: function(t) {
                    var n = this.chart.data.datasets[t._datasetIndex],
                        a = t.custom || {},
                        i = t._index,
                        r = t._model,
                        o = this.chart.options.elements.point;
                    r.radius = a.radius ? a.radius : e.getValueAtIndexOrDefault(n.radius, i, o.radius), r.backgroundColor = a.backgroundColor ? a.backgroundColor : e.getValueAtIndexOrDefault(n.pointBackgroundColor, i, o.backgroundColor), r.borderColor = a.borderColor ? a.borderColor : e.getValueAtIndexOrDefault(n.pointBorderColor, i, o.borderColor), r.borderWidth = a.borderWidth ? a.borderWidth : e.getValueAtIndexOrDefault(n.pointBorderWidth, i, o.borderWidth)
                }
            })
        }
    }, {}],
    15: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.global.animation = {
                duration: 1e3,
                easing: "easeOutQuart",
                onProgress: e.noop,
                onComplete: e.noop
            }, t.Animation = t.Element.extend({
                currentStep: null,
                numSteps: 60,
                easing: "",
                render: null,
                onAnimationProgress: null,
                onAnimationComplete: null
            }), t.animationService = {
                frameDuration: 17,
                animations: [],
                dropFrames: 0,
                request: null,
                addAnimation: function(t, e, n, a) {
                    var i = this;
                    a || (t.animating = !0);
                    for (var r = 0; r < i.animations.length; ++r)
                        if (i.animations[r].chartInstance === t) return void(i.animations[r].animationObject = e);
                    i.animations.push({
                        chartInstance: t,
                        animationObject: e
                    }), 1 === i.animations.length && i.requestAnimationFrame()
                },
                cancelAnimation: function(t) {
                    var n = e.findIndex(this.animations, function(e) {
                        return e.chartInstance === t
                    });
                    n !== -1 && (this.animations.splice(n, 1), t.animating = !1)
                },
                requestAnimationFrame: function() {
                    var t = this;
                    null === t.request && (t.request = e.requestAnimFrame.call(window, function() {
                        t.request = null, t.startDigest()
                    }))
                },
                startDigest: function() {
                    var t = this,
                        e = Date.now(),
                        n = 0;
                    t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1);
                    for (var a = 0; a < t.animations.length;) null === t.animations[a].animationObject.currentStep && (t.animations[a].animationObject.currentStep = 0), t.animations[a].animationObject.currentStep += 1 + n, t.animations[a].animationObject.currentStep > t.animations[a].animationObject.numSteps && (t.animations[a].animationObject.currentStep = t.animations[a].animationObject.numSteps), t.animations[a].animationObject.render(t.animations[a].chartInstance, t.animations[a].animationObject), t.animations[a].animationObject.onAnimationProgress && t.animations[a].animationObject.onAnimationProgress.call && t.animations[a].animationObject.onAnimationProgress.call(t.animations[a].chartInstance, t.animations[a]), t.animations[a].animationObject.currentStep === t.animations[a].animationObject.numSteps ? (t.animations[a].animationObject.onAnimationComplete && t.animations[a].animationObject.onAnimationComplete.call && t.animations[a].animationObject.onAnimationComplete.call(t.animations[a].chartInstance, t.animations[a]), t.animations[a].chartInstance.animating = !1, t.animations.splice(a, 1)) : ++a;
                    var i = Date.now(),
                        r = (i - e) / t.frameDuration;
                    t.dropFrames += r, t.animations.length > 0 && t.requestAnimationFrame()
                }
            }
        }
    }, {}],
    16: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.canvasHelpers = {};
            e.drawPoint = function(t, e, n, a, i) {
                var r, o, s, l, d, u;
                if ("object" == typeof e && (r = e.toString(), "[object HTMLImageElement]" === r || "[object HTMLCanvasElement]" === r)) return void t.drawImage(e, a - e.width / 2, i - e.height / 2);
                if (!(isNaN(n) || n <= 0)) {
                    switch (e) {
                        default: t.beginPath(),
                        t.arc(a, i, n, 0, 2 * Math.PI),
                        t.closePath(),
                        t.fill();
                        break;
                        case "triangle":
                                t.beginPath(),
                            o = 3 * n / Math.sqrt(3),
                            d = o * Math.sqrt(3) / 2,
                            t.moveTo(a - o / 2, i + d / 3),
                            t.lineTo(a + o / 2, i + d / 3),
                            t.lineTo(a, i - 2 * d / 3),
                            t.closePath(),
                            t.fill();
                            break;
                        case "rect":
                                u = 1 / Math.SQRT2 * n,
                            t.beginPath(),
                            t.fillRect(a - u, i - u, 2 * u, 2 * u),
                            t.strokeRect(a - u, i - u, 2 * u, 2 * u);
                            break;
                        case "rectRot":
                                u = 1 / Math.SQRT2 * n,
                            t.beginPath(),
                            t.moveTo(a - u, i),
                            t.lineTo(a, i + u),
                            t.lineTo(a + u, i),
                            t.lineTo(a, i - u),
                            t.closePath(),
                            t.fill();
                            break;
                        case "cross":
                                t.beginPath(),
                            t.moveTo(a, i + n),
                            t.lineTo(a, i - n),
                            t.moveTo(a - n, i),
                            t.lineTo(a + n, i),
                            t.closePath();
                            break;
                        case "crossRot":
                                t.beginPath(),
                            s = Math.cos(Math.PI / 4) * n,
                            l = Math.sin(Math.PI / 4) * n,
                            t.moveTo(a - s, i - l),
                            t.lineTo(a + s, i + l),
                            t.moveTo(a - s, i + l),
                            t.lineTo(a + s, i - l),
                            t.closePath();
                            break;
                        case "star":
                                t.beginPath(),
                            t.moveTo(a, i + n),
                            t.lineTo(a, i - n),
                            t.moveTo(a - n, i),
                            t.lineTo(a + n, i),
                            s = Math.cos(Math.PI / 4) * n,
                            l = Math.sin(Math.PI / 4) * n,
                            t.moveTo(a - s, i - l),
                            t.lineTo(a + s, i + l),
                            t.moveTo(a - s, i + l),
                            t.lineTo(a + s, i - l),
                            t.closePath();
                            break;
                        case "line":
                                t.beginPath(),
                            t.moveTo(a - n, i),
                            t.lineTo(a + n, i),
                            t.closePath();
                            break;
                        case "dash":
                                t.beginPath(),
                            t.moveTo(a, i),
                            t.lineTo(a + n, i),
                            t.closePath()
                    }
                    t.stroke()
                }
            }
        }
    }, {}],
    17: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.types = {}, t.instances = {}, t.controllers = {}, t.Controller = function(n) {
                return this.chart = n, this.config = n.config, this.options = this.config.options = e.configMerge(t.defaults.global, t.defaults[this.config.type], this.config.options || {}), this.id = e.uid(), Object.defineProperty(this, "data", {
                    get: function() {
                        return this.config.data
                    }
                }), t.instances[this.id] = this, this.options.responsive && this.resize(!0), this.initialize(), this
            }, e.extend(t.Controller.prototype, {
                initialize: function() {
                    var e = this;
                    return t.plugins.notify("beforeInit", [e]), e.bindEvents(), e.ensureScalesHaveIDs(), e.buildOrUpdateControllers(), e.buildScales(), e.updateLayout(), e.resetElements(), e.initToolTip(), e.update(), t.plugins.notify("afterInit", [e]), e
                },
                clear: function() {
                    return e.clear(this.chart), this
                },
                stop: function() {
                    return t.animationService.cancelAnimation(this), this
                },
                resize: function(n) {
                    var a = this,
                        i = a.chart,
                        r = i.canvas,
                        o = e.getMaximumWidth(r),
                        s = i.aspectRatio,
                        l = a.options.maintainAspectRatio && isNaN(s) === !1 && isFinite(s) && 0 !== s ? o / s : e.getMaximumHeight(r),
                        d = i.width !== o || i.height !== l;
                    if (!d) return a;
                    r.width = i.width = o, r.height = i.height = l, e.retinaScale(i);
                    var u = {
                        width: o,
                        height: l
                    };
                    return t.plugins.notify("resize", [a, u]), a.options.onResize && a.options.onResize(a, u), n || (a.stop(), a.update(a.options.responsiveAnimationDuration)), a
                },
                ensureScalesHaveIDs: function() {
                    var t = this.options,
                        n = t.scales || {},
                        a = t.scale;
                    e.each(n.xAxes, function(t, e) {
                        t.id = t.id || "x-axis-" + e
                    }), e.each(n.yAxes, function(t, e) {
                        t.id = t.id || "y-axis-" + e
                    }), a && (a.id = a.id || "scale")
                },
                buildScales: function() {
                    var n = this,
                        a = n.options,
                        i = n.scales = {},
                        r = [];
                    a.scales && (r = r.concat((a.scales.xAxes || []).map(function(t) {
                        return {
                            options: t,
                            dtype: "category"
                        }
                    }), (a.scales.yAxes || []).map(function(t) {
                        return {
                            options: t,
                            dtype: "linear"
                        }
                    }))), a.scale && r.push({
                        options: a.scale,
                        dtype: "radialLinear",
                        isDefault: !0
                    }), e.each(r, function(a) {
                        var r = a.options,
                            o = e.getValueOrDefault(r.type, a.dtype),
                            s = t.scaleService.getScaleConstructor(o);
                        if (s) {
                            var l = new s({
                                id: r.id,
                                options: r,
                                ctx: n.chart.ctx,
                                chart: n
                            });
                            i[l.id] = l, a.isDefault && (n.scale = l)
                        }
                    }), t.scaleService.addScalesToLayout(this)
                },
                updateLayout: function() {
                    t.layoutService.update(this, this.chart.width, this.chart.height)
                },
                buildOrUpdateControllers: function() {
                    var n = this,
                        a = [],
                        i = [];
                    if (e.each(n.data.datasets, function(e, r) {
                            var o = n.getDatasetMeta(r);
                            o.type || (o.type = e.type || n.config.type), a.push(o.type), o.controller ? o.controller.updateIndex(r) : (o.controller = new t.controllers[o.type](n, r), i.push(o.controller))
                        }, n), a.length > 1)
                        for (var r = 1; r < a.length; r++)
                            if (a[r] !== a[r - 1]) {
                                n.isCombo = !0;
                                break
                            }
                    return i
                },
                resetElements: function() {
                    var t = this;
                    e.each(t.data.datasets, function(e, n) {
                        t.getDatasetMeta(n).controller.reset()
                    }, t)
                },
                update: function(n, a) {
                    var i = this;
                    t.plugins.notify("beforeUpdate", [i]), i.tooltip._data = i.data;
                    var r = i.buildOrUpdateControllers();
                    e.each(i.data.datasets, function(t, e) {
                        i.getDatasetMeta(e).controller.buildOrUpdateElements()
                    }, i), t.layoutService.update(i, i.chart.width, i.chart.height), t.plugins.notify("afterScaleUpdate", [i]), e.each(r, function(t) {
                        t.reset()
                    }), i.updateDatasets(), t.plugins.notify("afterUpdate", [i]), i.render(n, a)
                },
                updateDatasets: function() {
                    var e, n, a = this;
                    if (t.plugins.notify("beforeDatasetsUpdate", [a])) {
                        for (e = 0, n = a.data.datasets.length; e < n; ++e) a.getDatasetMeta(e).controller.update();
                        t.plugins.notify("afterDatasetsUpdate", [a])
                    }
                },
                render: function(n, a) {
                    var i = this;
                    t.plugins.notify("beforeRender", [i]);
                    var r = i.options.animation;
                    if (r && ("undefined" != typeof n && 0 !== n || "undefined" == typeof n && 0 !== r.duration)) {
                        var o = new t.Animation;
                        o.numSteps = (n || r.duration) / 16.66, o.easing = r.easing, o.render = function(t, n) {
                            var a = e.easingEffects[n.easing],
                                i = n.currentStep / n.numSteps,
                                r = a(i);
                            t.draw(r, i, n.currentStep)
                        }, o.onAnimationProgress = r.onProgress, o.onAnimationComplete = r.onComplete, t.animationService.addAnimation(i, o, n, a)
                    } else i.draw(), r && r.onComplete && r.onComplete.call && r.onComplete.call(i);
                    return i
                },
                draw: function(n) {
                    var a = this,
                        i = n || 1;
                    a.clear(), t.plugins.notify("beforeDraw", [a, i]), e.each(a.boxes, function(t) {
                        t.draw(a.chartArea)
                    }, a), a.scale && a.scale.draw(), t.plugins.notify("beforeDatasetsDraw", [a, i]), e.each(a.data.datasets, function(t, e) {
                        a.isDatasetVisible(e) && a.getDatasetMeta(e).controller.draw(n)
                    }, a, !0), t.plugins.notify("afterDatasetsDraw", [a, i]), a.tooltip.transition(i).draw(), t.plugins.notify("afterDraw", [a, i])
                },
                getElementAtEvent: function(t) {
                    var n = this,
                        a = e.getRelativePosition(t, n.chart),
                        i = [];
                    return e.each(n.data.datasets, function(t, r) {
                        if (n.isDatasetVisible(r)) {
                            var o = n.getDatasetMeta(r);
                            e.each(o.data, function(t) {
                                if (t.inRange(a.x, a.y)) return i.push(t), i
                            })
                        }
                    }), i.slice(0, 1)
                },
                getElementsAtEvent: function(t) {
                    var n = this,
                        a = e.getRelativePosition(t, n.chart),
                        i = [],
                        r = function() {
                            if (n.data.datasets)
                                for (var t = 0; t < n.data.datasets.length; t++) {
                                    var e = n.getDatasetMeta(t);
                                    if (n.isDatasetVisible(t))
                                        for (var i = 0; i < e.data.length; i++)
                                            if (e.data[i].inRange(a.x, a.y)) return e.data[i]
                                }
                        }.call(n);
                    return r ? (e.each(n.data.datasets, function(t, e) {
                        if (n.isDatasetVisible(e)) {
                            var a = n.getDatasetMeta(e),
                                o = a.data[r._index];
                            o && !o._view.skip && i.push(o)
                        }
                    }, n), i) : i
                },
                getElementsAtXAxis: function(t) {
                    var n = this,
                        a = e.getRelativePosition(t, n.chart),
                        i = [],
                        r = function() {
                            if (n.data.datasets)
                                for (var t = 0; t < n.data.datasets.length; t++) {
                                    var e = n.getDatasetMeta(t);
                                    if (n.isDatasetVisible(t))
                                        for (var i = 0; i < e.data.length; i++)
                                            if (e.data[i].inLabelRange(a.x, a.y)) return e.data[i]
                                }
                        }.call(n);
                    return r ? (e.each(n.data.datasets, function(t, a) {
                        if (n.isDatasetVisible(a)) {
                            var o = n.getDatasetMeta(a),
                                s = e.findIndex(o.data, function(t) {
                                    return r._model.x === t._model.x
                                });
                            s === -1 || o.data[s]._view.skip || i.push(o.data[s])
                        }
                    }, n), i) : i
                },
                getElementsAtEventForMode: function(t, e) {
                    var n = this;
                    switch (e) {
                        case "single":
                            return n.getElementAtEvent(t);
                        case "label":
                            return n.getElementsAtEvent(t);
                        case "dataset":
                            return n.getDatasetAtEvent(t);
                        case "x-axis":
                            return n.getElementsAtXAxis(t);
                        default:
                            return t
                    }
                },
                getDatasetAtEvent: function(t) {
                    var e = this.getElementAtEvent(t);
                    return e.length > 0 && (e = this.getDatasetMeta(e[0]._datasetIndex).data), e
                },
                getDatasetMeta: function(t) {
                    var e = this,
                        n = e.data.datasets[t];
                    n._meta || (n._meta = {});
                    var a = n._meta[e.id];
                    return a || (a = n._meta[e.id] = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null
                    }), a
                },
                getVisibleDatasetCount: function() {
                    for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++;
                    return t
                },
                isDatasetVisible: function(t) {
                    var e = this.getDatasetMeta(t);
                    return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                },
                generateLegend: function() {
                    return this.options.legendCallback(this)
                },
                destroy: function() {
                    var n = this;
                    n.stop(), n.clear(), e.unbindEvents(n, n.events), e.removeResizeListener(n.chart.canvas.parentNode);
                    var a = n.chart.canvas;
                    a.width = n.chart.width, a.height = n.chart.height, void 0 !== n.chart.originalDevicePixelRatio && n.chart.ctx.scale(1 / n.chart.originalDevicePixelRatio, 1 / n.chart.originalDevicePixelRatio), a.style.width = n.chart.originalCanvasStyleWidth, a.style.height = n.chart.originalCanvasStyleHeight, t.plugins.notify("destroy", [n]), delete t.instances[n.id]
                },
                toBase64Image: function() {
                    return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
                },
                initToolTip: function() {
                    var e = this;
                    e.tooltip = new t.Tooltip({
                        _chart: e.chart,
                        _chartInstance: e,
                        _data: e.data,
                        _options: e.options.tooltips
                    }, e)
                },
                bindEvents: function() {
                    var t = this;
                    e.bindEvents(t, t.options.events, function(e) {
                        t.eventHandler(e)
                    })
                },
                updateHoverStyle: function(t, e, n) {
                    var a, i, r, o = n ? "setHoverStyle" : "removeHoverStyle";
                    switch (e) {
                        case "single":
                            t = [t[0]];
                            break;
                        case "label":
                        case "dataset":
                        case "x-axis":
                            break;
                        default:
                            return
                    }
                    for (i = 0, r = t.length; i < r; ++i) a = t[i], a && this.getDatasetMeta(a._datasetIndex).controller[o](a)
                },
                eventHandler: function(t) {
                    var n = this,
                        a = n.tooltip,
                        i = n.options || {},
                        r = i.hover,
                        o = i.tooltips;
                    return n.lastActive = n.lastActive || [], n.lastTooltipActive = n.lastTooltipActive || [], "mouseout" === t.type ? (n.active = [], n.tooltipActive = []) : (n.active = n.getElementsAtEventForMode(t, r.mode), n.tooltipActive = n.getElementsAtEventForMode(t, o.mode)), r.onHover && r.onHover.call(n, n.active), n.legend && n.legend.handleEvent && n.legend.handleEvent(t), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, r.mode, !1), n.active.length && r.mode && n.updateHoverStyle(n.active, r.mode, !0), (o.enabled || o.custom) && (a.initialize(), a._active = n.tooltipActive, a.update(!0)), a.pivot(), n.animating || e.arrayEquals(n.active, n.lastActive) && e.arrayEquals(n.tooltipActive, n.lastTooltipActive) || (n.stop(), (o.enabled || o.custom) && a.update(!0), n.render(r.animationDuration, !0)), n.lastActive = n.active, n.lastTooltipActive = n.tooltipActive, n
                }
            })
        }
    }, {}],
    18: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                n = e.noop;
            t.DatasetController = function(t, e) {
                this.initialize(t, e)
            }, e.extend(t.DatasetController.prototype, {
                datasetElementType: null,
                dataElementType: null,
                initialize: function(t, e) {
                    var n = this;
                    n.chart = t, n.index = e, n.linkScales(), n.addElements()
                },
                updateIndex: function(t) {
                    this.index = t
                },
                linkScales: function() {
                    var t = this,
                        e = t.getMeta(),
                        n = t.getDataset();
                    null === e.xAxisID && (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null === e.yAxisID && (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id)
                },
                getDataset: function() {
                    return this.chart.data.datasets[this.index]
                },
                getMeta: function() {
                    return this.chart.getDatasetMeta(this.index)
                },
                getScaleForId: function(t) {
                    return this.chart.scales[t]
                },
                reset: function() {
                    this.update(!0)
                },
                createMetaDataset: function() {
                    var t = this,
                        e = t.datasetElementType;
                    return e && new e({
                        _chart: t.chart.chart,
                        _datasetIndex: t.index
                    })
                },
                createMetaData: function(t) {
                    var e = this,
                        n = e.dataElementType;
                    return n && new n({
                        _chart: e.chart.chart,
                        _datasetIndex: e.index,
                        _index: t
                    })
                },
                addElements: function() {
                    var t, e, n = this,
                        a = n.getMeta(),
                        i = n.getDataset().data || [],
                        r = a.data;
                    for (t = 0, e = i.length; t < e; ++t) r[t] = r[t] || n.createMetaData(a, t);
                    a.dataset = a.dataset || n.createMetaDataset()
                },
                addElementAndReset: function(t) {
                    var e = this,
                        n = e.createMetaData(t);
                    e.getMeta().data.splice(t, 0, n), e.updateElement(n, t, !0)
                },
                buildOrUpdateElements: function() {
                    var t = this.getMeta(),
                        e = t.data,
                        n = this.getDataset().data.length,
                        a = e.length;
                    if (n < a) e.splice(n, a - n);
                    else if (n > a)
                        for (var i = a; i < n; ++i) this.addElementAndReset(i)
                },
                update: n,
                draw: function(t) {
                    var n = t || 1;
                    e.each(this.getMeta().data, function(t) {
                        t.transition(n).draw()
                    })
                },
                removeHoverStyle: function(t, n) {
                    var a = this.chart.data.datasets[t._datasetIndex],
                        i = t._index,
                        r = t.custom || {},
                        o = e.getValueAtIndexOrDefault,
                        s = t._model;
                    s.backgroundColor = r.backgroundColor ? r.backgroundColor : o(a.backgroundColor, i, n.backgroundColor), s.borderColor = r.borderColor ? r.borderColor : o(a.borderColor, i, n.borderColor), s.borderWidth = r.borderWidth ? r.borderWidth : o(a.borderWidth, i, n.borderWidth)
                },
                setHoverStyle: function(t) {
                    var n = this.chart.data.datasets[t._datasetIndex],
                        a = t._index,
                        i = t.custom || {},
                        r = e.getValueAtIndexOrDefault,
                        o = e.getHoverColor,
                        s = t._model;
                    s.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : r(n.hoverBackgroundColor, a, o(s.backgroundColor)), s.borderColor = i.hoverBorderColor ? i.hoverBorderColor : r(n.hoverBorderColor, a, o(s.borderColor)), s.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : r(n.hoverBorderWidth, a, s.borderWidth)
                }
            }), t.DatasetController.extend = e.inherits
        }
    }, {}],
    19: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.elements = {}, t.Element = function(t) {
                e.extend(this, t), this.initialize.apply(this, arguments)
            }, e.extend(t.Element.prototype, {
                initialize: function() {
                    this.hidden = !1
                },
                pivot: function() {
                    var t = this;
                    return t._view || (t._view = e.clone(t._model)), t._start = e.clone(t._view), t
                },
                transition: function(t) {
                    var n = this;
                    return n._view || (n._view = e.clone(n._model)), 1 === t ? (n._view = n._model, n._start = null, n) : (n._start || n.pivot(), e.each(n._model, function(a, i) {
                        if ("_" === i[0]);
                        else if (n._view.hasOwnProperty(i))
                            if (a === n._view[i]);
                            else if ("string" == typeof a) try {
                            var r = e.color(n._model[i]).mix(e.color(n._start[i]), t);
                            n._view[i] = r.rgbString()
                        } catch (o) {
                            n._view[i] = a
                        } else if ("number" == typeof a) {
                            var s = void 0 !== n._start[i] && isNaN(n._start[i]) === !1 ? n._start[i] : 0;
                            n._view[i] = (n._model[i] - s) * t + s
                        } else n._view[i] = a;
                        else "number" != typeof a || isNaN(n._view[i]) ? n._view[i] = a : n._view[i] = a * t
                    }, n), n)
                },
                tooltipPosition: function() {
                    return {
                        x: this._model.x,
                        y: this._model.y
                    }
                },
                hasValue: function() {
                    return e.isNumber(this._model.x) && e.isNumber(this._model.y)
                }
            }), t.Element.extend = e.inherits
        }
    }, {}],
    20: [function(t, e, n) {
        "use strict";
        var a = t("chartjs-color");
        e.exports = function(t) {
            function e(t, e, n) {
                var a;
                return "string" == typeof t ? (a = parseInt(t, 10), t.indexOf("%") !== -1 && (a = a / 100 * e.parentNode[n])) : a = t, a
            }

            function n(t) {
                return void 0 !== t && null !== t && "none" !== t
            }

            function i(t, a, i) {
                var r = document.defaultView,
                    o = t.parentNode,
                    s = r.getComputedStyle(t)[a],
                    l = r.getComputedStyle(o)[a],
                    d = n(s),
                    u = n(l),
                    c = Number.POSITIVE_INFINITY;
                return d || u ? Math.min(d ? e(s, t, i) : c, u ? e(l, o, i) : c) : "none"
            }
            var r = t.helpers = {};
            r.each = function(t, e, n, a) {
                var i, o;
                if (r.isArray(t))
                    if (o = t.length, a)
                        for (i = o - 1; i >= 0; i--) e.call(n, t[i], i);
                    else
                        for (i = 0; i < o; i++) e.call(n, t[i], i);
                else if ("object" == typeof t) {
                    var s = Object.keys(t);
                    for (o = s.length, i = 0; i < o; i++) e.call(n, t[s[i]], s[i])
                }
            }, r.clone = function(t) {
                var e = {};
                return r.each(t, function(t, n) {
                    r.isArray(t) ? e[n] = t.slice(0) : "object" == typeof t && null !== t ? e[n] = r.clone(t) : e[n] = t
                }), e
            }, r.extend = function(t) {
                for (var e = function(e, n) {
                        t[n] = e
                    }, n = 1, a = arguments.length; n < a; n++) r.each(arguments[n], e);
                return t
            }, r.configMerge = function(e) {
                var n = r.clone(e);
                return r.each(Array.prototype.slice.call(arguments, 1), function(e) {
                    r.each(e, function(e, a) {
                        if ("scales" === a) n[a] = r.scaleMerge(n.hasOwnProperty(a) ? n[a] : {}, e);
                        else if ("scale" === a) n[a] = r.configMerge(n.hasOwnProperty(a) ? n[a] : {}, t.scaleService.getScaleDefaults(e.type), e);
                        else if (n.hasOwnProperty(a) && r.isArray(n[a]) && r.isArray(e)) {
                            var i = n[a];
                            r.each(e, function(t, e) {
                                e < i.length ? "object" == typeof i[e] && null !== i[e] && "object" == typeof t && null !== t ? i[e] = r.configMerge(i[e], t) : i[e] = t : i.push(t)
                            })
                        } else n.hasOwnProperty(a) && "object" == typeof n[a] && null !== n[a] && "object" == typeof e ? n[a] = r.configMerge(n[a], e) : n[a] = e
                    })
                }), n
            }, r.scaleMerge = function(e, n) {
                var a = r.clone(e);
                return r.each(n, function(e, n) {
                    "xAxes" === n || "yAxes" === n ? a.hasOwnProperty(n) ? r.each(e, function(e, i) {
                        var o = r.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear"),
                            s = t.scaleService.getScaleDefaults(o);
                        i >= a[n].length || !a[n][i].type ? a[n].push(r.configMerge(s, e)) : e.type && e.type !== a[n][i].type ? a[n][i] = r.configMerge(a[n][i], s, e) : a[n][i] = r.configMerge(a[n][i], e)
                    }) : (a[n] = [], r.each(e, function(e) {
                        var i = r.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear");
                        a[n].push(r.configMerge(t.scaleService.getScaleDefaults(i), e))
                    })) : a.hasOwnProperty(n) && "object" == typeof a[n] && null !== a[n] && "object" == typeof e ? a[n] = r.configMerge(a[n], e) : a[n] = e
                }), a
            }, r.getValueAtIndexOrDefault = function(t, e, n) {
                return void 0 === t || null === t ? n : r.isArray(t) ? e < t.length ? t[e] : n : t
            }, r.getValueOrDefault = function(t, e) {
                return void 0 === t ? e : t
            }, r.indexOf = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var n = 0, a = t.length; n < a; ++n)
                    if (t[n] === e) return n;
                return -1
            }, r.where = function(t, e) {
                if (r.isArray(t) && Array.prototype.filter) return t.filter(e);
                var n = [];
                return r.each(t, function(t) {
                    e(t) && n.push(t)
                }), n
            }, r.findIndex = Array.prototype.findIndex ? function(t, e, n) {
                return t.findIndex(e, n)
            } : function(t, e, n) {
                n = void 0 === n ? t : n;
                for (var a = 0, i = t.length; a < i; ++a)
                    if (e.call(n, t[a], a, t)) return a;
                return -1
            }, r.findNextWhere = function(t, e, n) {
                void 0 !== n && null !== n || (n = -1);
                for (var a = n + 1; a < t.length; a++) {
                    var i = t[a];
                    if (e(i)) return i
                }
            }, r.findPreviousWhere = function(t, e, n) {
                void 0 !== n && null !== n || (n = t.length);
                for (var a = n - 1; a >= 0; a--) {
                    var i = t[a];
                    if (e(i)) return i
                }
            }, r.inherits = function(t) {
                var e = this,
                    n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return e.apply(this, arguments)
                    },
                    a = function() {
                        this.constructor = n
                    };
                return a.prototype = e.prototype, n.prototype = new a, n.extend = r.inherits, t && r.extend(n.prototype, t), n.__super__ = e.prototype, n
            }, r.noop = function() {}, r.uid = function() {
                var t = 0;
                return function() {
                    return t++
                }
            }(), r.isNumber = function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }, r.almostEquals = function(t, e, n) {
                return Math.abs(t - e) < n
            }, r.max = function(t) {
                return t.reduce(function(t, e) {
                    return isNaN(e) ? t : Math.max(t, e)
                }, Number.NEGATIVE_INFINITY)
            }, r.min = function(t) {
                return t.reduce(function(t, e) {
                    return isNaN(e) ? t : Math.min(t, e)
                }, Number.POSITIVE_INFINITY)
            }, r.sign = Math.sign ? function(t) {
                return Math.sign(t)
            } : function(t) {
                return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
            }, r.log10 = Math.log10 ? function(t) {
                return Math.log10(t)
            } : function(t) {
                return Math.log(t) / Math.LN10
            }, r.toRadians = function(t) {
                return t * (Math.PI / 180)
            }, r.toDegrees = function(t) {
                return t * (180 / Math.PI)
            }, r.getAngleFromPoint = function(t, e) {
                var n = e.x - t.x,
                    a = e.y - t.y,
                    i = Math.sqrt(n * n + a * a),
                    r = Math.atan2(a, n);
                return r < -.5 * Math.PI && (r += 2 * Math.PI), {
                    angle: r,
                    distance: i
                }
            }, r.aliasPixel = function(t) {
                return t % 2 === 0 ? 0 : .5
            }, r.splineCurve = function(t, e, n, a) {
                var i = t.skip ? e : t,
                    r = e,
                    o = n.skip ? e : n,
                    s = Math.sqrt(Math.pow(r.x - i.x, 2) + Math.pow(r.y - i.y, 2)),
                    l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                    d = s / (s + l),
                    u = l / (s + l);
                d = isNaN(d) ? 0 : d, u = isNaN(u) ? 0 : u;
                var c = a * d,
                    h = a * u;
                return {
                    previous: {
                        x: r.x - c * (o.x - i.x),
                        y: r.y - c * (o.y - i.y)
                    },
                    next: {
                        x: r.x + h * (o.x - i.x),
                        y: r.y + h * (o.y - i.y)
                    }
                }
            }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function(t) {
                var e, n, a, i, o = (t || []).map(function(t) {
                        return {
                            model: t._model,
                            deltaK: 0,
                            mK: 0
                        }
                    }),
                    s = o.length;
                for (e = 0; e < s; ++e) a = o[e], a.model.skip || (n = e > 0 ? o[e - 1] : null, i = e < s - 1 ? o[e + 1] : null, i && !i.model.skip && (a.deltaK = (i.model.y - a.model.y) / (i.model.x - a.model.x)), !n || n.model.skip ? a.mK = a.deltaK : !i || i.model.skip ? a.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(a.deltaK) ? a.mK = 0 : a.mK = (n.deltaK + a.deltaK) / 2);
                var l, d, u, c;
                for (e = 0; e < s - 1; ++e) a = o[e], i = o[e + 1], a.model.skip || i.model.skip || (r.almostEquals(a.deltaK, 0, this.EPSILON) ? a.mK = i.mK = 0 : (l = a.mK / a.deltaK, d = i.mK / a.deltaK, c = Math.pow(l, 2) + Math.pow(d, 2), c <= 9 || (u = 3 / Math.sqrt(c), a.mK = l * u * a.deltaK, i.mK = d * u * a.deltaK)));
                var h;
                for (e = 0; e < s; ++e) a = o[e], a.model.skip || (n = e > 0 ? o[e - 1] : null, i = e < s - 1 ? o[e + 1] : null, n && !n.model.skip && (h = (a.model.x - n.model.x) / 3, a.model.controlPointPreviousX = a.model.x - h, a.model.controlPointPreviousY = a.model.y - h * a.mK), i && !i.model.skip && (h = (i.model.x - a.model.x) / 3, a.model.controlPointNextX = a.model.x + h, a.model.controlPointNextY = a.model.y + h * a.mK))
            }, r.nextItem = function(t, e, n) {
                return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
            }, r.previousItem = function(t, e, n) {
                return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
            }, r.niceNum = function(t, e) {
                var n, a = Math.floor(r.log10(t)),
                    i = t / Math.pow(10, a);
                return n = e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10, n * Math.pow(10, a)
            };
            var o = r.easingEffects = {
                linear: function(t) {
                    return t
                },
                easeInQuad: function(t) {
                    return t * t
                },
                easeOutQuad: function(t) {
                    return -1 * t * (t - 2)
                },
                easeInOutQuad: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                },
                easeInCubic: function(t) {
                    return t * t * t
                },
                easeOutCubic: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t + 1)
                },
                easeInOutCubic: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                },
                easeInQuart: function(t) {
                    return t * t * t * t
                },
                easeOutQuart: function(t) {
                    return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                },
                easeInOutQuart: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                },
                easeInQuint: function(t) {
                    return 1 * (t /= 1) * t * t * t * t
                },
                easeOutQuint: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                },
                easeInOutQuint: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                },
                easeInSine: function(t) {
                    return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                },
                easeOutSine: function(t) {
                    return 1 * Math.sin(t / 1 * (Math.PI / 2))
                },
                easeInOutSine: function(t) {
                    return -.5 * (Math.cos(Math.PI * t / 1) - 1)
                },
                easeInExpo: function(t) {
                    return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                },
                easeOutExpo: function(t) {
                    return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
                },
                easeInOutExpo: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                },
                easeInCirc: function(t) {
                    return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                },
                easeOutCirc: function(t) {
                    return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                },
                easeInOutCirc: function(t) {
                    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                },
                easeInElastic: function(t) {
                    var e = 1.70158,
                        n = 0,
                        a = 1;
                    return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (n || (n = .3), a < Math.abs(1) ? (a = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / a), -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)))
                },
                easeOutElastic: function(t) {
                    var e = 1.70158,
                        n = 0,
                        a = 1;
                    return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (n || (n = .3), a < Math.abs(1) ? (a = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / n) + 1)
                },
                easeInOutElastic: function(t) {
                    var e = 1.70158,
                        n = 0,
                        a = 1;
                    return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (n || (n = 1 * (.3 * 1.5)), a < Math.abs(1) ? (a = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / a), t < 1 ? -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)) : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n) * .5 + 1)
                },
                easeInBack: function(t) {
                    var e = 1.70158;
                    return 1 * (t /= 1) * t * ((e + 1) * t - e)
                },
                easeOutBack: function(t) {
                    var e = 1.70158;
                    return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                },
                easeInOutBack: function(t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                },
                easeInBounce: function(t) {
                    return 1 - o.easeOutBounce(1 - t)
                },
                easeOutBounce: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                },
                easeInOutBounce: function(t) {
                    return t < .5 ? .5 * o.easeInBounce(2 * t) : .5 * o.easeOutBounce(2 * t - 1) + .5
                }
            };
            r.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }
            }(), r.cancelAnimFrame = function() {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                    return window.clearTimeout(t, 1e3 / 60)
                }
            }(), r.getRelativePosition = function(t, e) {
                var n, a, i = t.originalEvent || t,
                    o = t.currentTarget || t.srcElement,
                    s = o.getBoundingClientRect(),
                    l = i.touches;
                l && l.length > 0 ? (n = l[0].clientX, a = l[0].clientY) : (n = i.clientX, a = i.clientY);
                var d = parseFloat(r.getStyle(o, "padding-left")),
                    u = parseFloat(r.getStyle(o, "padding-top")),
                    c = parseFloat(r.getStyle(o, "padding-right")),
                    h = parseFloat(r.getStyle(o, "padding-bottom")),
                    f = s.right - s.left - d - c,
                    g = s.bottom - s.top - u - h;
                return n = Math.round((n - s.left - d) / f * o.width / e.currentDevicePixelRatio), a = Math.round((a - s.top - u) / g * o.height / e.currentDevicePixelRatio), {
                    x: n,
                    y: a
                }
            }, r.addEvent = function(t, e, n) {
                t.addEventListener ? t.addEventListener(e, n) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n
            }, r.removeEvent = function(t, e, n) {
                t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = r.noop
            }, r.bindEvents = function(t, e, n) {
                var a = t.events = t.events || {};
                r.each(e, function(e) {
                    a[e] = function() {
                        n.apply(t, arguments)
                    }, r.addEvent(t.chart.canvas, e, a[e])
                })
            }, r.unbindEvents = function(t, e) {
                var n = t.chart.canvas;
                r.each(e, function(t, e) {
                    r.removeEvent(n, e, t)
                })
            }, r.getConstraintWidth = function(t) {
                return i(t, "max-width", "clientWidth")
            }, r.getConstraintHeight = function(t) {
                return i(t, "max-height", "clientHeight")
            }, r.getMaximumWidth = function(t) {
                var e = t.parentNode,
                    n = parseInt(r.getStyle(e, "padding-left"), 10),
                    a = parseInt(r.getStyle(e, "padding-right"), 10),
                    i = e.clientWidth - n - a,
                    o = r.getConstraintWidth(t);
                return isNaN(o) ? i : Math.min(i, o)
            }, r.getMaximumHeight = function(t) {
                var e = t.parentNode,
                    n = parseInt(r.getStyle(e, "padding-top"), 10),
                    a = parseInt(r.getStyle(e, "padding-bottom"), 10),
                    i = e.clientHeight - n - a,
                    o = r.getConstraintHeight(t);
                return isNaN(o) ? i : Math.min(i, o)
            }, r.getStyle = function(t, e) {
                return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
            }, r.retinaScale = function(t) {
                var e = t.ctx,
                    n = t.canvas,
                    a = n.width,
                    i = n.height,
                    r = t.currentDevicePixelRatio = window.devicePixelRatio || 1;
                1 !== r && (n.height = i * r, n.width = a * r, e.scale(r, r), t.originalDevicePixelRatio = t.originalDevicePixelRatio || r), n.style.width = a + "px", n.style.height = i + "px"
            }, r.clear = function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            }, r.fontString = function(t, e, n) {
                return e + " " + t + "px " + n
            }, r.longestText = function(t, e, n, a) {
                a = a || {};
                var i = a.data = a.data || {},
                    o = a.garbageCollect = a.garbageCollect || [];
                a.font !== e && (i = a.data = {}, o = a.garbageCollect = [], a.font = e), t.font = e;
                var s = 0;
                r.each(n, function(e) {
                    void 0 !== e && null !== e && r.isArray(e) !== !0 ? s = r.measureText(t, i, o, s, e) : r.isArray(e) && r.each(e, function(e) {
                        void 0 === e || null === e || r.isArray(e) || (s = r.measureText(t, i, o, s, e))
                    })
                });
                var l = o.length / 2;
                if (l > n.length) {
                    for (var d = 0; d < l; d++) delete i[o[d]];
                    o.splice(0, l)
                }
                return s
            }, r.measureText = function(t, e, n, a, i) {
                var r = e[i];
                return r || (r = e[i] = t.measureText(i).width, n.push(i)), r > a && (a = r), a
            }, r.numberOfLabelLines = function(t) {
                var e = 1;
                return r.each(t, function(t) {
                    r.isArray(t) && t.length > e && (e = t.length)
                }), e
            }, r.drawRoundedRectangle = function(t, e, n, a, i, r) {
                t.beginPath(), t.moveTo(e + r, n), t.lineTo(e + a - r, n), t.quadraticCurveTo(e + a, n, e + a, n + r), t.lineTo(e + a, n + i - r), t.quadraticCurveTo(e + a, n + i, e + a - r, n + i), t.lineTo(e + r, n + i), t.quadraticCurveTo(e, n + i, e, n + i - r), t.lineTo(e, n + r), t.quadraticCurveTo(e, n, e + r, n), t.closePath()
            }, r.color = function(e) {
                return a ? a(e instanceof CanvasGradient ? t.defaults.global.defaultColor : e) : (console.error("Color.js not found!"), e)
            }, r.addResizeListener = function(t, e) {
                var n = document.createElement("iframe"),
                    a = "chartjs-hidden-iframe";
                n.classlist ? n.classlist.add(a) : n.setAttribute("class", a), n.tabIndex = -1;
                var i = n.style;
                i.width = "100%", i.display = "block", i.border = 0, i.height = 0, i.margin = 0, i.position = "absolute", i.left = 0, i.right = 0, i.top = 0, i.bottom = 0, t.insertBefore(n, t.firstChild), (n.contentWindow || n).onresize = function() {
                    if (e) return e()
                }
            }, r.removeResizeListener = function(t) {
                var e = t.querySelector(".chartjs-hidden-iframe");
                e && e.parentNode.removeChild(e)
            }, r.isArray = Array.isArray ? function(t) {
                return Array.isArray(t)
            } : function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }, r.arrayEquals = function(t, e) {
                var n, a, i, o;
                if (!t || !e || t.length !== e.length) return !1;
                for (n = 0, a = t.length; n < a; ++n)
                    if (i = t[n], o = e[n], i instanceof Array && o instanceof Array) {
                        if (!r.arrayEquals(i, o)) return !1
                    } else if (i !== o) return !1;
                return !0
            }, r.callCallback = function(t, e, n) {
                t && "function" == typeof t.call && t.apply(n, e)
            }, r.getHoverColor = function(t) {
                return t instanceof CanvasPattern ? t : r.color(t).saturate(.5).darken(.1).rgbString()
            }
        }
    }, {
        "chartjs-color": 40
    }],
    21: [function(t, e, n) {
        "use strict";
        e.exports = function() {
            var t = function(e, n) {
                var a = this,
                    i = t.helpers;
                return a.config = n || {
                    data: {
                        datasets: []
                    }
                }, e.length && e[0].getContext && (e = e[0]), e.getContext && (e = e.getContext("2d")), a.ctx = e, a.canvas = e.canvas, e.canvas.style.display = e.canvas.style.display || "block", a.width = e.canvas.width || parseInt(i.getStyle(e.canvas, "width"), 10) || i.getMaximumWidth(e.canvas), a.height = e.canvas.height || parseInt(i.getStyle(e.canvas, "height"), 10) || i.getMaximumHeight(e.canvas), a.aspectRatio = a.width / a.height, (isNaN(a.aspectRatio) || isFinite(a.aspectRatio) === !1) && (a.aspectRatio = void 0 !== n.aspectRatio ? n.aspectRatio : 2), a.originalCanvasStyleWidth = e.canvas.style.width, a.originalCanvasStyleHeight = e.canvas.style.height, i.retinaScale(a), a.controller = new t.Controller(a), i.addResizeListener(e.canvas.parentNode, function() {
                    a.controller && a.controller.config.options.responsive && a.controller.resize()
                }), a.controller ? a.controller : a
            };
            return t.defaults = {
                global: {
                    responsive: !0,
                    responsiveAnimationDuration: 0,
                    maintainAspectRatio: !0,
                    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                    hover: {
                        onHover: null,
                        mode: "single",
                        animationDuration: 400
                    },
                    onClick: null,
                    defaultColor: "rgba(0,0,0,0.1)",
                    defaultFontColor: "#666",
                    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    defaultFontSize: 12,
                    defaultFontStyle: "normal",
                    showLines: !0,
                    elements: {},
                    legendCallback: function(t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        for (var n = 0; n < t.data.datasets.length; n++) e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    }
                }
            }, t.Chart = t, t
        }
    }, {}],
    22: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.layoutService = {
                defaults: {},
                addBox: function(t, e) {
                    t.boxes || (t.boxes = []), t.boxes.push(e)
                },
                removeBox: function(t, e) {
                    t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1)
                },
                update: function(t, n, a) {
                    function i(t) {
                        var e, n = t.isHorizontal();
                        n ? (e = t.update(t.options.fullWidth ? p : k, x), S -= e.height) : (e = t.update(y, b), k -= e.width), _.push({
                            horizontal: n,
                            minSize: e,
                            box: t
                        })
                    }

                    function r(t) {
                        var n = e.findNextWhere(_, function(e) {
                            return e.box === t
                        });
                        if (n)
                            if (t.isHorizontal()) {
                                var a = {
                                    left: w,
                                    right: M,
                                    top: 0,
                                    bottom: 0
                                };
                                t.update(t.options.fullWidth ? p : k, m / 2, a)
                            } else t.update(n.minSize.width, S)
                    }

                    function o(t) {
                        var n = e.findNextWhere(_, function(e) {
                                return e.box === t
                            }),
                            a = {
                                left: 0,
                                right: 0,
                                top: D,
                                bottom: C
                            };
                        n && t.update(n.minSize.width, S, a)
                    }

                    function s(t) {
                        t.isHorizontal() ? (t.left = t.options.fullWidth ? l : w, t.right = t.options.fullWidth ? n - l : w + k, t.top = F, t.bottom = F + t.height, F = t.bottom) : (t.left = A, t.right = A + t.width, t.top = D, t.bottom = D + S, A = t.right)
                    }
                    if (t) {
                        var l = 0,
                            d = 0,
                            u = e.where(t.boxes, function(t) {
                                return "left" === t.options.position
                            }),
                            c = e.where(t.boxes, function(t) {
                                return "right" === t.options.position
                            }),
                            h = e.where(t.boxes, function(t) {
                                return "top" === t.options.position
                            }),
                            f = e.where(t.boxes, function(t) {
                                return "bottom" === t.options.position
                            }),
                            g = e.where(t.boxes, function(t) {
                                return "chartArea" === t.options.position
                            });
                        h.sort(function(t, e) {
                            return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0)
                        }), f.sort(function(t, e) {
                            return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0)
                        });
                        var p = n - 2 * l,
                            m = a - 2 * d,
                            v = p / 2,
                            b = m / 2,
                            y = (n - v) / (u.length + c.length),
                            x = (a - b) / (h.length + f.length),
                            k = p,
                            S = m,
                            _ = [];
                        e.each(u.concat(c, h, f), i);
                        var w = l,
                            M = l,
                            D = d,
                            C = d;
                        e.each(u.concat(c), r), e.each(u, function(t) {
                            w += t.width
                        }), e.each(c, function(t) {
                            M += t.width
                        }), e.each(h.concat(f), r), e.each(h, function(t) {
                            D += t.height
                        }), e.each(f, function(t) {
                            C += t.height
                        }), e.each(u.concat(c), o), w = l, M = l, D = d, C = d, e.each(u, function(t) {
                            w += t.width
                        }), e.each(c, function(t) {
                            M += t.width
                        }), e.each(h, function(t) {
                            D += t.height
                        }), e.each(f, function(t) {
                            C += t.height
                        });
                        var T = a - D - C,
                            P = n - w - M;
                        P === k && T === S || (e.each(u, function(t) {
                            t.height = T
                        }), e.each(c, function(t) {
                            t.height = T
                        }), e.each(h, function(t) {
                            t.options.fullWidth || (t.width = P)
                        }), e.each(f, function(t) {
                            t.options.fullWidth || (t.width = P)
                        }), S = T, k = P);
                        var A = l,
                            F = d;
                        e.each(u.concat(h), s), A += k, F += S, e.each(c, s), e.each(f, s), t.chartArea = {
                            left: w,
                            top: D,
                            right: w + k,
                            bottom: D + S
                        }, e.each(g, function(e) {
                            e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, S)
                        })
                    }
                }
            }
        }
    }, {}],
    23: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                n = e.noop;
            t.defaults.global.legend = {
                display: !0,
                position: "top",
                fullWidth: !0,
                reverse: !1,
                onClick: function(t, e) {
                    var n = e.datasetIndex,
                        a = this.chart,
                        i = a.getDatasetMeta(n);
                    i.hidden = null === i.hidden ? !a.data.datasets[n].hidden : null, a.update()
                },
                onHover: null,
                labels: {
                    boxWidth: 40,
                    padding: 10,
                    generateLabels: function(t) {
                        var n = t.data;
                        return e.isArray(n.datasets) ? n.datasets.map(function(n, a) {
                            return {
                                text: n.label,
                                fillStyle: e.isArray(n.backgroundColor) ? n.backgroundColor[0] : n.backgroundColor,
                                hidden: !t.isDatasetVisible(a),
                                lineCap: n.borderCapStyle,
                                lineDash: n.borderDash,
                                lineDashOffset: n.borderDashOffset,
                                lineJoin: n.borderJoinStyle,
                                lineWidth: n.borderWidth,
                                strokeStyle: n.borderColor,
                                pointStyle: n.pointStyle,
                                datasetIndex: a
                            }
                        }, this) : []
                    }
                }
            }, t.Legend = t.Element.extend({
                initialize: function(t) {
                    e.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                },
                beforeUpdate: n,
                update: function(t, e, n) {
                    var a = this;
                    return a.beforeUpdate(), a.maxWidth = t, a.maxHeight = e, a.margins = n, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize
                },
                afterUpdate: n,
                beforeSetDimensions: n,
                setDimensions: function() {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: n,
                beforeBuildLabels: n,
                buildLabels: function() {
                    var t = this;
                    t.legendItems = t.options.labels.generateLabels.call(t, t.chart), t.options.reverse && t.legendItems.reverse()
                },
                afterBuildLabels: n,
                beforeFit: n,
                fit: function() {
                    var n = this,
                        a = n.options,
                        i = a.labels,
                        r = a.display,
                        o = n.ctx,
                        s = t.defaults.global,
                        l = e.getValueOrDefault,
                        d = l(i.fontSize, s.defaultFontSize),
                        u = l(i.fontStyle, s.defaultFontStyle),
                        c = l(i.fontFamily, s.defaultFontFamily),
                        h = e.fontString(d, u, c),
                        f = n.legendHitBoxes = [],
                        g = n.minSize,
                        p = n.isHorizontal();
                    if (p ? (g.width = n.maxWidth, g.height = r ? 10 : 0) : (g.width = r ? 10 : 0, g.height = n.maxHeight), r)
                        if (o.font = h, p) {
                            var m = n.lineWidths = [0],
                                v = n.legendItems.length ? d + i.padding : 0;
                            o.textAlign = "left", o.textBaseline = "top", e.each(n.legendItems, function(t, e) {
                                var a = i.usePointStyle ? d * Math.sqrt(2) : i.boxWidth,
                                    r = a + d / 2 + o.measureText(t.text).width;
                                m[m.length - 1] + r + i.padding >= n.width && (v += d + i.padding, m[m.length] = n.left), f[e] = {
                                    left: 0,
                                    top: 0,
                                    width: r,
                                    height: d
                                }, m[m.length - 1] += r + i.padding
                            }), g.height += v
                        } else {
                            var b = i.padding,
                                y = n.columnWidths = [],
                                x = i.padding,
                                k = 0,
                                S = 0,
                                _ = d + b;
                            e.each(n.legendItems, function(t, e) {
                                var n = i.usePointStyle ? 2 * i.boxWidth : i.boxWidth,
                                    a = n + d / 2 + o.measureText(t.text).width;
                                S + _ > g.height && (x += k + i.padding, y.push(k), k = 0, S = 0), k = Math.max(k, a), S += _, f[e] = {
                                    left: 0,
                                    top: 0,
                                    width: a,
                                    height: d
                                }
                            }), x += k, y.push(k), g.width += x
                        }
                    n.width = g.width, n.height = g.height
                },
                afterFit: n,
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                draw: function() {
                    var n = this,
                        a = n.options,
                        i = a.labels,
                        r = t.defaults.global,
                        o = r.elements.line,
                        s = n.width,
                        l = n.lineWidths;
                    if (a.display) {
                        var d, u = n.ctx,
                            c = e.getValueOrDefault,
                            h = c(i.fontColor, r.defaultFontColor),
                            f = c(i.fontSize, r.defaultFontSize),
                            g = c(i.fontStyle, r.defaultFontStyle),
                            p = c(i.fontFamily, r.defaultFontFamily),
                            m = e.fontString(f, g, p);
                        u.textAlign = "left", u.textBaseline = "top", u.lineWidth = .5, u.strokeStyle = h, u.fillStyle = h, u.font = m;
                        var v = i.boxWidth,
                            b = n.legendHitBoxes,
                            y = function(e, n, i) {
                                if (!(isNaN(v) || v <= 0)) {
                                    u.save(), u.fillStyle = c(i.fillStyle, r.defaultColor), u.lineCap = c(i.lineCap, o.borderCapStyle), u.lineDashOffset = c(i.lineDashOffset, o.borderDashOffset), u.lineJoin = c(i.lineJoin, o.borderJoinStyle), u.lineWidth = c(i.lineWidth, o.borderWidth), u.strokeStyle = c(i.strokeStyle, r.defaultColor);
                                    var s = 0 === c(i.lineWidth, o.borderWidth);
                                    if (u.setLineDash && u.setLineDash(c(i.lineDash, o.borderDash)), a.labels && a.labels.usePointStyle) {
                                        var l = f * Math.SQRT2 / 2,
                                            d = l / Math.SQRT2,
                                            h = e + d,
                                            g = n + d;
                                        t.canvasHelpers.drawPoint(u, i.pointStyle, l, h, g)
                                    } else s || u.strokeRect(e, n, v, f), u.fillRect(e, n, v, f);
                                    u.restore()
                                }
                            },
                            x = function(t, e, n, a) {
                                u.fillText(n.text, v + f / 2 + t, e), n.hidden && (u.beginPath(), u.lineWidth = 2, u.moveTo(v + f / 2 + t, e + f / 2), u.lineTo(v + f / 2 + t + a, e + f / 2), u.stroke())
                            },
                            k = n.isHorizontal();
                        d = k ? {
                            x: n.left + (s - l[0]) / 2,
                            y: n.top + i.padding,
                            line: 0
                        } : {
                            x: n.left + i.padding,
                            y: n.top + i.padding,
                            line: 0
                        };
                        var S = f + i.padding;
                        e.each(n.legendItems, function(t, e) {
                            var a = u.measureText(t.text).width,
                                r = i.usePointStyle ? f + f / 2 + a : v + f / 2 + a,
                                o = d.x,
                                c = d.y;
                            k ? o + r >= s && (c = d.y += S, d.line++, o = d.x = n.left + (s - l[d.line]) / 2) : c + S > n.bottom && (o = d.x = o + n.columnWidths[d.line] + i.padding, c = d.y = n.top, d.line++), y(o, c, t), b[e].left = o, b[e].top = c, x(o, c, t, a), k ? d.x += r + i.padding : d.y += S
                        })
                    }
                },
                handleEvent: function(t) {
                    var n = this,
                        a = n.options,
                        i = "mouseup" === t.type ? "click" : t.type;
                    if ("mousemove" === i) {
                        if (!a.onHover) return
                    } else {
                        if ("click" !== i) return;
                        if (!a.onClick) return
                    }
                    var r = e.getRelativePosition(t, n.chart.chart),
                        o = r.x,
                        s = r.y;
                    if (o >= n.left && o <= n.right && s >= n.top && s <= n.bottom)
                        for (var l = n.legendHitBoxes, d = 0; d < l.length; ++d) {
                            var u = l[d];
                            if (o >= u.left && o <= u.left + u.width && s >= u.top && s <= u.top + u.height) {
                                if ("click" === i) {
                                    a.onClick.call(n, t, n.legendItems[d]);
                                    break
                                }
                                if ("mousemove" === i) {
                                    a.onHover.call(n, t, n.legendItems[d]);
                                    break
                                }
                            }
                        }
                }
            }), t.plugins.register({
                beforeInit: function(e) {
                    var n = e.options,
                        a = n.legend;
                    a && (e.legend = new t.Legend({
                        ctx: e.chart.ctx,
                        options: a,
                        chart: e
                    }), t.layoutService.addBox(e, e.legend))
                }
            })
        }
    }, {}],
    24: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers.noop;
            t.plugins = {
                _plugins: [],
                register: function(t) {
                    var e = this._plugins;
                    [].concat(t).forEach(function(t) {
                        e.indexOf(t) === -1 && e.push(t)
                    })
                },
                unregister: function(t) {
                    var e = this._plugins;
                    [].concat(t).forEach(function(t) {
                        var n = e.indexOf(t);
                        n !== -1 && e.splice(n, 1)
                    })
                },
                clear: function() {
                    this._plugins = []
                },
                count: function() {
                    return this._plugins.length
                },
                getAll: function() {
                    return this._plugins
                },
                notify: function(t, e) {
                    var n, a, i = this._plugins,
                        r = i.length;
                    for (n = 0; n < r; ++n)
                        if (a = i[n], "function" == typeof a[t] && a[t].apply(a, e || []) === !1) return !1;
                    return !0
                }
            }, t.PluginBase = t.Element.extend({
                beforeInit: e,
                afterInit: e,
                beforeUpdate: e,
                afterUpdate: e,
                beforeDraw: e,
                afterDraw: e,
                destroy: e
            }), t.pluginService = t.plugins
        }
    }, {}],
    25: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.scale = {
                display: !0,
                position: "left",
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {
                    labelString: "",
                    display: !1
                },
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 10,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: function(t) {
                        return e.isArray(t) ? t : "" + t
                    }
                }
            }, t.Scale = t.Element.extend({
                beforeUpdate: function() {
                    e.callCallback(this.options.beforeUpdate, [this])
                },
                update: function(t, n, a) {
                    var i = this;
                    return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = n, i.margins = e.extend({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, a), i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeDataLimits(), i.determineDataLimits(), i.afterDataLimits(), i.beforeBuildTicks(), i.buildTicks(), i.afterBuildTicks(), i.beforeTickToLabelConversion(), i.convertTicksToLabels(), i.afterTickToLabelConversion(), i.beforeCalculateTickRotation(), i.calculateTickRotation(), i.afterCalculateTickRotation(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                },
                afterUpdate: function() {
                    e.callCallback(this.options.afterUpdate, [this])
                },
                beforeSetDimensions: function() {
                    e.callCallback(this.options.beforeSetDimensions, [this])
                },
                setDimensions: function() {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                },
                afterSetDimensions: function() {
                    e.callCallback(this.options.afterSetDimensions, [this])
                },
                beforeDataLimits: function() {
                    e.callCallback(this.options.beforeDataLimits, [this])
                },
                determineDataLimits: e.noop,
                afterDataLimits: function() {
                    e.callCallback(this.options.afterDataLimits, [this])
                },
                beforeBuildTicks: function() {
                    e.callCallback(this.options.beforeBuildTicks, [this])
                },
                buildTicks: e.noop,
                afterBuildTicks: function() {
                    e.callCallback(this.options.afterBuildTicks, [this])
                },
                beforeTickToLabelConversion: function() {
                    e.callCallback(this.options.beforeTickToLabelConversion, [this])
                },
                convertTicksToLabels: function() {
                    var t = this;
                    t.ticks = t.ticks.map(function(e, n, a) {
                        return t.options.ticks.userCallback ? t.options.ticks.userCallback(e, n, a) : t.options.ticks.callback(e, n, a)
                    }, t)
                },
                afterTickToLabelConversion: function() {
                    e.callCallback(this.options.afterTickToLabelConversion, [this])
                },
                beforeCalculateTickRotation: function() {
                    e.callCallback(this.options.beforeCalculateTickRotation, [this])
                },
                calculateTickRotation: function() {
                    var n = this,
                        a = n.ctx,
                        i = t.defaults.global,
                        r = n.options.ticks,
                        o = e.getValueOrDefault(r.fontSize, i.defaultFontSize),
                        s = e.getValueOrDefault(r.fontStyle, i.defaultFontStyle),
                        l = e.getValueOrDefault(r.fontFamily, i.defaultFontFamily),
                        d = e.fontString(o, s, l);
                    a.font = d;
                    var u, c = a.measureText(n.ticks[0]).width,
                        h = a.measureText(n.ticks[n.ticks.length - 1]).width;
                    if (n.labelRotation = r.minRotation || 0, n.paddingRight = 0, n.paddingLeft = 0, n.options.display && n.isHorizontal()) {
                        n.paddingRight = h / 2 + 3, n.paddingLeft = c / 2 + 3, n.longestTextCache || (n.longestTextCache = {});
                        for (var f, g, p = e.longestText(a, d, n.ticks, n.longestTextCache), m = p, v = n.getPixelForTick(1) - n.getPixelForTick(0) - 6; m > v && n.labelRotation < r.maxRotation;) {
                            if (f = Math.cos(e.toRadians(n.labelRotation)), g = Math.sin(e.toRadians(n.labelRotation)), u = f * c, u + o / 2 > n.yLabelWidth && (n.paddingLeft = u + o / 2), n.paddingRight = o / 2, g * p > n.maxHeight) {
                                n.labelRotation--;
                                break
                            }
                            n.labelRotation++, m = f * p
                        }
                    }
                    n.margins && (n.paddingLeft = Math.max(n.paddingLeft - n.margins.left, 0), n.paddingRight = Math.max(n.paddingRight - n.margins.right, 0))
                },
                afterCalculateTickRotation: function() {
                    e.callCallback(this.options.afterCalculateTickRotation, [this])
                },
                beforeFit: function() {
                    e.callCallback(this.options.beforeFit, [this])
                },
                fit: function() {
                    var n = this,
                        a = n.minSize = {
                            width: 0,
                            height: 0
                        },
                        i = n.options,
                        r = t.defaults.global,
                        o = i.ticks,
                        s = i.scaleLabel,
                        l = i.gridLines,
                        d = i.display,
                        u = n.isHorizontal(),
                        c = e.getValueOrDefault(o.fontSize, r.defaultFontSize),
                        h = e.getValueOrDefault(o.fontStyle, r.defaultFontStyle),
                        f = e.getValueOrDefault(o.fontFamily, r.defaultFontFamily),
                        g = e.fontString(c, h, f),
                        p = e.getValueOrDefault(s.fontSize, r.defaultFontSize),
                        m = i.gridLines.tickMarkLength;
                    if (u ? a.width = n.isFullWidth() ? n.maxWidth - n.margins.left - n.margins.right : n.maxWidth : a.width = d && l.drawTicks ? m : 0, u ? a.height = d && l.drawTicks ? m : 0 : a.height = n.maxHeight, s.display && d && (u ? a.height += 1.5 * p : a.width += 1.5 * p), o.display && d) {
                        n.longestTextCache || (n.longestTextCache = {});
                        var v = e.longestText(n.ctx, g, n.ticks, n.longestTextCache),
                            b = e.numberOfLabelLines(n.ticks),
                            y = .5 * c;
                        if (u) {
                            n.longestLabelWidth = v;
                            var x = Math.sin(e.toRadians(n.labelRotation)) * n.longestLabelWidth + c * b + y * b;
                            a.height = Math.min(n.maxHeight, a.height + x), n.ctx.font = g;
                            var k = n.ctx.measureText(n.ticks[0]).width,
                                S = n.ctx.measureText(n.ticks[n.ticks.length - 1]).width,
                                _ = Math.cos(e.toRadians(n.labelRotation)),
                                w = Math.sin(e.toRadians(n.labelRotation));
                            n.paddingLeft = 0 !== n.labelRotation ? _ * k + 3 : k / 2 + 3, n.paddingRight = 0 !== n.labelRotation ? w * (c / 2) + 3 : S / 2 + 3
                        } else {
                            var M = n.maxWidth - a.width,
                                D = o.mirror;
                            D ? v = 0 : v += n.options.ticks.padding, v < M ? a.width += v : a.width = n.maxWidth, n.paddingTop = c / 2, n.paddingBottom = c / 2
                        }
                    }
                    n.margins && (n.paddingLeft = Math.max(n.paddingLeft - n.margins.left, 0), n.paddingTop = Math.max(n.paddingTop - n.margins.top, 0), n.paddingRight = Math.max(n.paddingRight - n.margins.right, 0), n.paddingBottom = Math.max(n.paddingBottom - n.margins.bottom, 0)), n.width = a.width, n.height = a.height
                },
                afterFit: function() {
                    e.callCallback(this.options.afterFit, [this])
                },
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                isFullWidth: function() {
                    return this.options.fullWidth
                },
                getRightValue: function(t) {
                    return null === t || "undefined" == typeof t ? NaN : "number" == typeof t && isNaN(t) ? NaN : "object" == typeof t ? t instanceof Date || t.isValid ? t : this.getRightValue(this.isHorizontal() ? t.x : t.y) : t
                },
                getLabelForIndex: e.noop,
                getPixelForValue: e.noop,
                getValueForPixel: e.noop,
                getPixelForTick: function(t, e) {
                    var n = this;
                    if (n.isHorizontal()) {
                        var a = n.width - (n.paddingLeft + n.paddingRight),
                            i = a / Math.max(n.ticks.length - (n.options.gridLines.offsetGridLines ? 0 : 1), 1),
                            r = i * t + n.paddingLeft;
                        e && (r += i / 2);
                        var o = n.left + Math.round(r);
                        return o += n.isFullWidth() ? n.margins.left : 0
                    }
                    var s = n.height - (n.paddingTop + n.paddingBottom);
                    return n.top + t * (s / (n.ticks.length - 1))
                },
                getPixelForDecimal: function(t) {
                    var e = this;
                    if (e.isHorizontal()) {
                        var n = e.width - (e.paddingLeft + e.paddingRight),
                            a = n * t + e.paddingLeft,
                            i = e.left + Math.round(a);
                        return i += e.isFullWidth() ? e.margins.left : 0
                    }
                    return e.top + t * e.height
                },
                getBasePixel: function() {
                    var t = this,
                        e = t.min,
                        n = t.max;
                    return t.getPixelForValue(t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0)
                },
                draw: function(n) {
                    var a = this,
                        i = a.options;
                    if (i.display) {
                        var r, o, s = a.ctx,
                            l = t.defaults.global,
                            d = i.ticks,
                            u = i.gridLines,
                            c = i.scaleLabel,
                            h = 0 !== a.labelRotation,
                            f = d.autoSkip,
                            g = a.isHorizontal();
                        d.maxTicksLimit && (o = d.maxTicksLimit);
                        var p = e.getValueOrDefault(d.fontColor, l.defaultFontColor),
                            m = e.getValueOrDefault(d.fontSize, l.defaultFontSize),
                            v = e.getValueOrDefault(d.fontStyle, l.defaultFontStyle),
                            b = e.getValueOrDefault(d.fontFamily, l.defaultFontFamily),
                            y = e.fontString(m, v, b),
                            x = u.tickMarkLength,
                            k = e.getValueOrDefault(u.borderDash, l.borderDash),
                            S = e.getValueOrDefault(u.borderDashOffset, l.borderDashOffset),
                            _ = e.getValueOrDefault(c.fontColor, l.defaultFontColor),
                            w = e.getValueOrDefault(c.fontSize, l.defaultFontSize),
                            M = e.getValueOrDefault(c.fontStyle, l.defaultFontStyle),
                            D = e.getValueOrDefault(c.fontFamily, l.defaultFontFamily),
                            C = e.fontString(w, M, D),
                            T = e.toRadians(a.labelRotation),
                            P = Math.cos(T),
                            A = a.longestLabelWidth * P;
                        s.fillStyle = p;
                        var F = [];
                        if (g) {
                            if (r = !1, h && (A /= 2), (A + d.autoSkipPadding) * a.ticks.length > a.width - (a.paddingLeft + a.paddingRight) && (r = 1 + Math.floor((A + d.autoSkipPadding) * a.ticks.length / (a.width - (a.paddingLeft + a.paddingRight)))), o && a.ticks.length > o)
                                for (; !r || a.ticks.length / (r || 1) > o;) r || (r = 1), r += 1;
                            f || (r = !1)
                        }
                        var I = "right" === i.position ? a.left : a.right - x,
                            O = "right" === i.position ? a.left + x : a.right,
                            R = "bottom" === i.position ? a.top : a.bottom - x,
                            L = "bottom" === i.position ? a.top + x : a.bottom;
                        if (e.each(a.ticks, function(t, o) {
                                if (void 0 !== t && null !== t) {
                                    var s = a.ticks.length === o + 1,
                                        l = r > 1 && o % r > 0 || o % r === 0 && o + r >= a.ticks.length;
                                    if ((!l || s) && void 0 !== t && null !== t) {
                                        var c, f;
                                        o === ("undefined" != typeof a.zeroLineIndex ? a.zeroLineIndex : 0) ? (c = u.zeroLineWidth, f = u.zeroLineColor) : (c = e.getValueAtIndexOrDefault(u.lineWidth, o), f = e.getValueAtIndexOrDefault(u.color, o));
                                        var p, m, v, b, y, _, w, M, D, C, P = "middle",
                                            A = "middle";
                                        if (g) {
                                            h || (A = "top" === i.position ? "bottom" : "top"), P = h ? "right" : "center";
                                            var W = a.getPixelForTick(o) + e.aliasPixel(c);
                                            D = a.getPixelForTick(o, u.offsetGridLines) + d.labelOffset, C = h ? a.top + 12 : "top" === i.position ? a.bottom - x : a.top + x, p = v = y = w = W, m = R, b = L, _ = n.top, M = n.bottom
                                        } else {
                                            "left" === i.position ? d.mirror ? (D = a.right + d.padding, P = "left") : (D = a.right - d.padding, P = "right") : d.mirror ? (D = a.left - d.padding, P = "right") : (D = a.left + d.padding, P = "left");
                                            var V = a.getPixelForTick(o);
                                            V += e.aliasPixel(c), C = a.getPixelForTick(o, u.offsetGridLines), p = I, v = O, y = n.left, w = n.right, m = b = _ = M = V
                                        }
                                        F.push({
                                            tx1: p,
                                            ty1: m,
                                            tx2: v,
                                            ty2: b,
                                            x1: y,
                                            y1: _,
                                            x2: w,
                                            y2: M,
                                            labelX: D,
                                            labelY: C,
                                            glWidth: c,
                                            glColor: f,
                                            glBorderDash: k,
                                            glBorderDashOffset: S,
                                            rotation: -1 * T,
                                            label: t,
                                            textBaseline: A,
                                            textAlign: P
                                        })
                                    }
                                }
                            }), e.each(F, function(t) {
                                if (u.display && (s.save(), s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), u.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), u.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
                                    s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = y, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign;
                                    var n = t.label;
                                    if (e.isArray(n))
                                        for (var a = 0, i = -(n.length - 1) * m * .75; a < n.length; ++a) s.fillText("" + n[a], 0, i), i += 1.5 * m;
                                    else s.fillText(n, 0, 0);
                                    s.restore()
                                }
                            }), c.display) {
                            var W, V, B = 0;
                            if (g) W = a.left + (a.right - a.left) / 2, V = "bottom" === i.position ? a.bottom - w / 2 : a.top + w / 2;
                            else {
                                var Y = "left" === i.position;
                                W = Y ? a.left + w / 2 : a.right - w / 2, V = a.top + (a.bottom - a.top) / 2, B = Y ? -.5 * Math.PI : .5 * Math.PI
                            }
                            s.save(), s.translate(W, V), s.rotate(B), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = _, s.font = C, s.fillText(c.labelString, 0, 0), s.restore()
                        }
                        if (u.drawBorder) {
                            s.lineWidth = e.getValueAtIndexOrDefault(u.lineWidth, 0), s.strokeStyle = e.getValueAtIndexOrDefault(u.color, 0);
                            var z = a.left,
                                H = a.right,
                                N = a.top,
                                E = a.bottom,
                                U = e.aliasPixel(s.lineWidth);
                            g ? (N = E = "top" === i.position ? a.bottom : a.top, N += U, E += U) : (z = H = "left" === i.position ? a.right : a.left, z += U, H += U), s.beginPath(), s.moveTo(z, N), s.lineTo(H, E), s.stroke()
                        }
                    }
                }
            })
        }
    }, {}],
    26: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.scaleService = {
                constructors: {},
                defaults: {},
                registerScaleType: function(t, n, a) {
                    this.constructors[t] = n, this.defaults[t] = e.clone(a)
                },
                getScaleConstructor: function(t) {
                    return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                },
                getScaleDefaults: function(n) {
                    return this.defaults.hasOwnProperty(n) ? e.scaleMerge(t.defaults.scale, this.defaults[n]) : {}
                },
                updateScaleDefaults: function(t, n) {
                    var a = this.defaults;
                    a.hasOwnProperty(t) && (a[t] = e.extend(a[t], n))
                },
                addScalesToLayout: function(n) {
                    e.each(n.scales, function(e) {
                        t.layoutService.addBox(n, e)
                    })
                }
            }
        }
    }, {}],
    27: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.global.title = {
                display: !1,
                position: "top",
                fullWidth: !0,
                fontStyle: "bold",
                padding: 10,
                text: ""
            };
            var n = e.noop;
            t.Title = t.Element.extend({
                initialize: function(n) {
                    var a = this;
                    e.extend(a, n), a.options = e.configMerge(t.defaults.global.title, n.options), a.legendHitBoxes = []
                },
                beforeUpdate: function() {
                    var n = this.chart.options;
                    n && n.title && (this.options = e.configMerge(t.defaults.global.title, n.title))
                },
                update: function(t, e, n) {
                    var a = this;
                    return a.beforeUpdate(), a.maxWidth = t, a.maxHeight = e, a.margins = n, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize
                },
                afterUpdate: n,
                beforeSetDimensions: n,
                setDimensions: function() {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: n,
                beforeBuildLabels: n,
                buildLabels: n,
                afterBuildLabels: n,
                beforeFit: n,
                fit: function() {
                    var n = this,
                        a = e.getValueOrDefault,
                        i = n.options,
                        r = t.defaults.global,
                        o = i.display,
                        s = a(i.fontSize, r.defaultFontSize),
                        l = n.minSize;
                    n.isHorizontal() ? (l.width = n.maxWidth, l.height = o ? s + 2 * i.padding : 0) : (l.width = o ? s + 2 * i.padding : 0, l.height = n.maxHeight), n.width = l.width, n.height = l.height
                },
                afterFit: n,
                isHorizontal: function() {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t
                },
                draw: function() {
                    var n = this,
                        a = n.ctx,
                        i = e.getValueOrDefault,
                        r = n.options,
                        o = t.defaults.global;
                    if (r.display) {
                        var s, l, d = i(r.fontSize, o.defaultFontSize),
                            u = i(r.fontStyle, o.defaultFontStyle),
                            c = i(r.fontFamily, o.defaultFontFamily),
                            h = e.fontString(d, u, c),
                            f = 0,
                            g = n.top,
                            p = n.left,
                            m = n.bottom,
                            v = n.right;
                        a.fillStyle = i(r.fontColor, o.defaultFontColor), a.font = h, n.isHorizontal() ? (s = p + (v - p) / 2, l = g + (m - g) / 2) : (s = "left" === r.position ? p + d / 2 : v - d / 2, l = g + (m - g) / 2, f = Math.PI * ("left" === r.position ? -.5 : .5)), a.save(), a.translate(s, l), a.rotate(f), a.textAlign = "center", a.textBaseline = "middle", a.fillText(r.text, 0, 0), a.restore()
                    }
                }
            }), t.plugins.register({
                beforeInit: function(e) {
                    var n = e.options,
                        a = n.title;
                    a && (e.titleBlock = new t.Title({
                        ctx: e.chart.ctx,
                        options: a,
                        chart: e
                    }), t.layoutService.addBox(e, e.titleBlock))
                }
            })
        }
    }, {}],
    28: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            function e(t, e) {
                return e && (i.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
            }

            function n(t) {
                if (!t.length) return !1;
                var e, n, a = [],
                    i = [];
                for (e = 0, n = t.length; e < n; ++e) {
                    var r = t[e];
                    if (r && r.hasValue()) {
                        var o = r.tooltipPosition();
                        a.push(o.x), i.push(o.y)
                    }
                }
                var s = 0,
                    l = 0;
                for (e = 0; e < a.length; ++e) a[e] && (s += a[e], l += i[e]);
                return {
                    x: Math.round(s / a.length),
                    y: Math.round(l / a.length)
                }
            }

            function a(t) {
                var e = t._xScale,
                    n = t._yScale || t._scale,
                    a = t._index,
                    i = t._datasetIndex;
                return {
                    xLabel: e ? e.getLabelForIndex(a, i) : "",
                    yLabel: n ? n.getLabelForIndex(a, i) : "",
                    index: a,
                    datasetIndex: i
                }
            }
            var i = t.helpers;
            t.defaults.global.tooltips = {
                enabled: !0,
                custom: null,
                mode: "single",
                backgroundColor: "rgba(0,0,0,0.8)",
                titleFontStyle: "bold",
                titleSpacing: 2,
                titleMarginBottom: 6,
                titleFontColor: "#fff",
                titleAlign: "left",
                bodySpacing: 2,
                bodyFontColor: "#fff",
                bodyAlign: "left",
                footerFontStyle: "bold",
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFontColor: "#fff",
                footerAlign: "left",
                yPadding: 6,
                xPadding: 6,
                yAlign: "center",
                xAlign: "center",
                caretSize: 5,
                cornerRadius: 6,
                multiKeyBackground: "#fff",
                callbacks: {
                    beforeTitle: i.noop,
                    title: function(t, e) {
                        var n = "",
                            a = e.labels,
                            i = a ? a.length : 0;
                        if (t.length > 0) {
                            var r = t[0];
                            r.xLabel ? n = r.xLabel : i > 0 && r.index < i && (n = a[r.index])
                        }
                        return n
                    },
                    afterTitle: i.noop,
                    beforeBody: i.noop,
                    beforeLabel: i.noop,
                    label: function(t, e) {
                        var n = e.datasets[t.datasetIndex].label || "";
                        return n + ": " + t.yLabel
                    },
                    labelColor: function(t, e) {
                        var n = e.getDatasetMeta(t.datasetIndex),
                            a = n.data[t.index],
                            i = a._view;
                        return {
                            borderColor: i.borderColor,
                            backgroundColor: i.backgroundColor
                        }
                    },
                    afterLabel: i.noop,
                    afterBody: i.noop,
                    beforeFooter: i.noop,
                    footer: i.noop,
                    afterFooter: i.noop
                }
            }, t.Tooltip = t.Element.extend({
                initialize: function() {
                    var e = this,
                        n = t.defaults.global,
                        a = e._options,
                        r = i.getValueOrDefault;
                    i.extend(e, {
                        _model: {
                            xPadding: a.xPadding,
                            yPadding: a.yPadding,
                            xAlign: a.xAlign,
                            yAlign: a.yAlign,
                            bodyFontColor: a.bodyFontColor,
                            _bodyFontFamily: r(a.bodyFontFamily, n.defaultFontFamily),
                            _bodyFontStyle: r(a.bodyFontStyle, n.defaultFontStyle),
                            _bodyAlign: a.bodyAlign,
                            bodyFontSize: r(a.bodyFontSize, n.defaultFontSize),
                            bodySpacing: a.bodySpacing,
                            titleFontColor: a.titleFontColor,
                            _titleFontFamily: r(a.titleFontFamily, n.defaultFontFamily),
                            _titleFontStyle: r(a.titleFontStyle, n.defaultFontStyle),
                            titleFontSize: r(a.titleFontSize, n.defaultFontSize),
                            _titleAlign: a.titleAlign,
                            titleSpacing: a.titleSpacing,
                            titleMarginBottom: a.titleMarginBottom,
                            footerFontColor: a.footerFontColor,
                            _footerFontFamily: r(a.footerFontFamily, n.defaultFontFamily),
                            _footerFontStyle: r(a.footerFontStyle, n.defaultFontStyle),
                            footerFontSize: r(a.footerFontSize, n.defaultFontSize),
                            _footerAlign: a.footerAlign,
                            footerSpacing: a.footerSpacing,
                            footerMarginTop: a.footerMarginTop,
                            caretSize: a.caretSize,
                            cornerRadius: a.cornerRadius,
                            backgroundColor: a.backgroundColor,
                            opacity: 0,
                            legendColorBackground: a.multiKeyBackground
                        }
                    })
                },
                getTitle: function() {
                    var t = this,
                        n = t._options,
                        a = n.callbacks,
                        i = a.beforeTitle.apply(t, arguments),
                        r = a.title.apply(t, arguments),
                        o = a.afterTitle.apply(t, arguments),
                        s = [];
                    return s = e(s, i), s = e(s, r), s = e(s, o)
                },
                getBeforeBody: function() {
                    var t = this._options.callbacks.beforeBody.apply(this, arguments);
                    return i.isArray(t) ? t : void 0 !== t ? [t] : []
                },
                getBody: function(t, n) {
                    var a = this,
                        r = a._options.callbacks,
                        o = [];
                    return i.each(t, function(t) {
                        var i = {
                            before: [],
                            lines: [],
                            after: []
                        };
                        e(i.before, r.beforeLabel.call(a, t, n)), e(i.lines, r.label.call(a, t, n)), e(i.after, r.afterLabel.call(a, t, n)), o.push(i)
                    }), o
                },
                getAfterBody: function() {
                    var t = this._options.callbacks.afterBody.apply(this, arguments);
                    return i.isArray(t) ? t : void 0 !== t ? [t] : []
                },
                getFooter: function() {
                    var t = this,
                        n = t._options.callbacks,
                        a = n.beforeFooter.apply(t, arguments),
                        i = n.footer.apply(t, arguments),
                        r = n.afterFooter.apply(t, arguments),
                        o = [];
                    return o = e(o, a), o = e(o, i), o = e(o, r)
                },
                update: function(t) {
                    var e, r, o = this,
                        s = o._options,
                        l = o._model,
                        d = o._active,
                        u = o._data,
                        c = o._chartInstance;
                    if (d.length) {
                        l.opacity = 1;
                        var h = [],
                            f = n(d),
                            g = [];
                        for (e = 0, r = d.length; e < r; ++e) g.push(a(d[e]));
                        s.itemSort && (g = g.sort(function(t, e) {
                            return s.itemSort(t, e, u)
                        })), d.length > 1 && i.each(g, function(t) {
                            h.push(s.callbacks.labelColor.call(o, t, c))
                        }), i.extend(l, {
                            title: o.getTitle(g, u),
                            beforeBody: o.getBeforeBody(g, u),
                            body: o.getBody(g, u),
                            afterBody: o.getAfterBody(g, u),
                            footer: o.getFooter(g, u),
                            x: Math.round(f.x),
                            y: Math.round(f.y),
                            caretPadding: i.getValueOrDefault(f.padding, 2),
                            labelColors: h
                        });
                        var p = o.getTooltipSize(l);
                        o.determineAlignment(p), i.extend(l, o.getBackgroundPoint(l, p))
                    } else o._model.opacity = 0;
                    return t && s.custom && s.custom.call(o, l), o
                },
                getTooltipSize: function(t) {
                    var e = this._chart.ctx,
                        n = {
                            height: 2 * t.yPadding,
                            width: 0
                        },
                        a = t.body,
                        r = a.reduce(function(t, e) {
                            return t + e.before.length + e.lines.length + e.after.length
                        }, 0);
                    r += t.beforeBody.length + t.afterBody.length;
                    var o = t.title.length,
                        s = t.footer.length,
                        l = t.titleFontSize,
                        d = t.bodyFontSize,
                        u = t.footerFontSize;
                    n.height += o * l, n.height += (o - 1) * t.titleSpacing, n.height += o ? t.titleMarginBottom : 0, n.height += r * d, n.height += r ? (r - 1) * t.bodySpacing : 0, n.height += s ? t.footerMarginTop : 0, n.height += s * u, n.height += s ? (s - 1) * t.footerSpacing : 0;
                    var c = 0,
                        h = function(t) {
                            n.width = Math.max(n.width, e.measureText(t).width + c)
                        };
                    return e.font = i.fontString(l, t._titleFontStyle, t._titleFontFamily), i.each(t.title, h), e.font = i.fontString(d, t._bodyFontStyle, t._bodyFontFamily), i.each(t.beforeBody.concat(t.afterBody), h), c = a.length > 1 ? d + 2 : 0, i.each(a, function(t) {
                        i.each(t.before, h), i.each(t.lines, h), i.each(t.after, h)
                    }), c = 0, e.font = i.fontString(u, t._footerFontStyle, t._footerFontFamily), i.each(t.footer, h), n.width += 2 * t.xPadding, n
                },
                determineAlignment: function(t) {
                    var e = this,
                        n = e._model,
                        a = e._chart,
                        i = e._chartInstance.chartArea;
                    n.y < t.height ? n.yAlign = "top" : n.y > a.height - t.height && (n.yAlign = "bottom");
                    var r, o, s, l, d, u = (i.left + i.right) / 2,
                        c = (i.top + i.bottom) / 2;
                    "center" === n.yAlign ? (r = function(t) {
                        return t <= u
                    }, o = function(t) {
                        return t > u
                    }) : (r = function(e) {
                        return e <= t.width / 2
                    }, o = function(e) {
                        return e >= a.width - t.width / 2
                    }), s = function(e) {
                        return e + t.width > a.width
                    }, l = function(e) {
                        return e - t.width < 0
                    }, d = function(t) {
                        return t <= c ? "top" : "bottom"
                    }, r(n.x) ? (n.xAlign = "left", s(n.x) && (n.xAlign = "center", n.yAlign = d(n.y))) : o(n.x) && (n.xAlign = "right", l(n.x) && (n.xAlign = "center", n.yAlign = d(n.y)))
                },
                getBackgroundPoint: function(t, e) {
                    var n = {
                            x: t.x,
                            y: t.y
                        },
                        a = t.caretSize,
                        i = t.caretPadding,
                        r = t.cornerRadius,
                        o = t.xAlign,
                        s = t.yAlign,
                        l = a + i,
                        d = r + i;
                    return "right" === o ? n.x -= e.width : "center" === o && (n.x -= e.width / 2), "top" === s ? n.y += l : "bottom" === s ? n.y -= e.height + l : n.y -= e.height / 2, "center" === s ? "left" === o ? n.x += l : "right" === o && (n.x -= l) : "left" === o ? n.x -= d : "right" === o && (n.x += d), n
                },
                drawCaret: function(t, e, n) {
                    var a, r, o, s, l, d, u = this._view,
                        c = this._chart.ctx,
                        h = u.caretSize,
                        f = u.cornerRadius,
                        g = u.xAlign,
                        p = u.yAlign,
                        m = t.x,
                        v = t.y,
                        b = e.width,
                        y = e.height;
                    "center" === p ? ("left" === g ? (a = m, r = a - h, o = a) : (a = m + b, r = a + h, o = a), l = v + y / 2, s = l - h, d = l + h) : ("left" === g ? (a = m + f, r = a + h, o = r + h) : "right" === g ? (a = m + b - f, r = a - h, o = r - h) : (r = m + b / 2, a = r - h, o = r + h), "top" === p ? (s = v, l = s - h, d = s) : (s = v + y, l = s + h, d = s));
                    var x = i.color(u.backgroundColor);
                    c.fillStyle = x.alpha(n * x.alpha()).rgbString(), c.beginPath(), c.moveTo(a, s), c.lineTo(r, l), c.lineTo(o, d), c.closePath(), c.fill()
                },
                drawTitle: function(t, e, n, a) {
                    var r = e.title;
                    if (r.length) {
                        n.textAlign = e._titleAlign, n.textBaseline = "top";
                        var o = e.titleFontSize,
                            s = e.titleSpacing,
                            l = i.color(e.titleFontColor);
                        n.fillStyle = l.alpha(a * l.alpha()).rgbString(), n.font = i.fontString(o, e._titleFontStyle, e._titleFontFamily);
                        var d, u;
                        for (d = 0, u = r.length; d < u; ++d) n.fillText(r[d], t.x, t.y), t.y += o + s, d + 1 === r.length && (t.y += e.titleMarginBottom - s)
                    }
                },
                drawBody: function(t, e, n, a) {
                    var r = e.bodyFontSize,
                        o = e.bodySpacing,
                        s = e.body;
                    n.textAlign = e._bodyAlign, n.textBaseline = "top";
                    var l = i.color(e.bodyFontColor),
                        d = l.alpha(a * l.alpha()).rgbString();
                    n.fillStyle = d, n.font = i.fontString(r, e._bodyFontStyle, e._bodyFontFamily);
                    var u = 0,
                        c = function(e) {
                            n.fillText(e, t.x + u, t.y), t.y += r + o
                        };
                    i.each(e.beforeBody, c);
                    var h = s.length > 1;
                    u = h ? r + 2 : 0, i.each(s, function(o, s) {
                        i.each(o.before, c), i.each(o.lines, function(o) {
                            h && (n.fillStyle = i.color(e.legendColorBackground).alpha(a).rgbaString(), n.fillRect(t.x, t.y, r, r), n.strokeStyle = i.color(e.labelColors[s].borderColor).alpha(a).rgbaString(), n.strokeRect(t.x, t.y, r, r), n.fillStyle = i.color(e.labelColors[s].backgroundColor).alpha(a).rgbaString(), n.fillRect(t.x + 1, t.y + 1, r - 2, r - 2), n.fillStyle = d), c(o)
                        }), i.each(o.after, c)
                    }), u = 0, i.each(e.afterBody, c), t.y -= o
                },
                drawFooter: function(t, e, n, a) {
                    var r = e.footer;
                    if (r.length) {
                        t.y += e.footerMarginTop, n.textAlign = e._footerAlign, n.textBaseline = "top";
                        var o = i.color(e.footerFontColor);
                        n.fillStyle = o.alpha(a * o.alpha()).rgbString(), n.font = i.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), i.each(r, function(a) {
                            n.fillText(a, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing
                        })
                    }
                },
                draw: function() {
                    var t = this._chart.ctx,
                        e = this._view;
                    if (0 !== e.opacity) {
                        var n = this.getTooltipSize(e),
                            a = {
                                x: e.x,
                                y: e.y
                            },
                            r = Math.abs(e.opacity < .001) ? 0 : e.opacity;
                        if (this._options.enabled) {
                            var o = i.color(e.backgroundColor);
                            t.fillStyle = o.alpha(r * o.alpha()).rgbString(), i.drawRoundedRectangle(t, a.x, a.y, n.width, n.height, e.cornerRadius), t.fill(), this.drawCaret(a, n, r), a.x += e.xPadding, a.y += e.yPadding, this.drawTitle(a, e, t, r), this.drawBody(a, e, t, r), this.drawFooter(a, e, t, r)
                        }
                    }
                }
            })
        }
    }, {}],
    29: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                n = t.defaults.global;
            n.elements.arc = {
                backgroundColor: n.defaultColor,
                borderColor: "#fff",
                borderWidth: 2
            }, t.elements.Arc = t.Element.extend({
                inLabelRange: function(t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                },
                inRange: function(t, n) {
                    var a = this._view;
                    if (a) {
                        for (var i = e.getAngleFromPoint(a, {
                                x: t,
                                y: n
                            }), r = i.angle, o = i.distance, s = a.startAngle, l = a.endAngle; l < s;) l += 2 * Math.PI;
                        for (; r > l;) r -= 2 * Math.PI;
                        for (; r < s;) r += 2 * Math.PI;
                        var d = r >= s && r <= l,
                            u = o >= a.innerRadius && o <= a.outerRadius;
                        return d && u
                    }
                    return !1
                },
                tooltipPosition: function() {
                    var t = this._view,
                        e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                        n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                    return {
                        x: t.x + Math.cos(e) * n,
                        y: t.y + Math.sin(e) * n
                    }
                },
                draw: function() {
                    var t = this._chart.ctx,
                        e = this._view,
                        n = e.startAngle,
                        a = e.endAngle;
                    t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, a), t.arc(e.x, e.y, e.innerRadius, a, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                }
            })
        }
    }, {}],
    30: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                n = t.defaults.global;
            t.defaults.global.elements.line = {
                tension: .4,
                backgroundColor: n.defaultColor,
                borderWidth: 3,
                borderColor: n.defaultColor,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                capBezierPoints: !0,
                fill: !0
            }, t.elements.Line = t.Element.extend({
                draw: function() {
                    function t(t, e) {
                        var n = e._view;
                        e._view.steppedLine === !0 ? (l.lineTo(n.x, t._view.y), l.lineTo(n.x, n.y)) : 0 === e._view.tension ? l.lineTo(n.x, n.y) : l.bezierCurveTo(t._view.controlPointNextX, t._view.controlPointNextY, n.controlPointPreviousX, n.controlPointPreviousY, n.x, n.y)
                    }
                    var a = this,
                        i = a._view,
                        r = i.spanGaps,
                        o = i.scaleZero,
                        s = a._loop,
                        l = a._chart.ctx;
                    l.save();
                    var d = a._children.slice(),
                        u = -1;
                    s && d.length && d.push(d[0]);
                    var c, h, f, g;
                    if (d.length && i.fill) {
                        for (l.beginPath(), c = 0; c < d.length; ++c) h = d[c], f = e.previousItem(d, c), g = h._view, 0 === c ? (s ? l.moveTo(o.x, o.y) : l.moveTo(g.x, o), g.skip || (u = c, l.lineTo(g.x, g.y))) : (f = u === -1 ? f : d[u], g.skip ? r || u !== c - 1 || (s ? l.lineTo(o.x, o.y) : l.lineTo(f._view.x, o)) : (u !== c - 1 ? r && u !== -1 ? t(f, h) : s ? l.lineTo(g.x, g.y) : (l.lineTo(g.x, o), l.lineTo(g.x, g.y)) : t(f, h), u = c));
                        s || u === -1 || l.lineTo(d[u]._view.x, o), l.fillStyle = i.backgroundColor || n.defaultColor, l.closePath(), l.fill()
                    }
                    var p = n.elements.line;
                    for (l.lineCap = i.borderCapStyle || p.borderCapStyle, l.setLineDash && l.setLineDash(i.borderDash || p.borderDash), l.lineDashOffset = i.borderDashOffset || p.borderDashOffset, l.lineJoin = i.borderJoinStyle || p.borderJoinStyle, l.lineWidth = i.borderWidth || p.borderWidth, l.strokeStyle = i.borderColor || n.defaultColor, l.beginPath(), u = -1, c = 0; c < d.length; ++c) h = d[c], f = e.previousItem(d, c), g = h._view, 0 === c ? g.skip || (l.moveTo(g.x, g.y), u = c) : (f = u === -1 ? f : d[u], g.skip || (u !== c - 1 && !r || u === -1 ? l.moveTo(g.x, g.y) : t(f, h), u = c));
                    l.stroke(), l.restore()
                }
            })
        }
    }, {}],
    31: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                n = t.defaults.global,
                a = n.defaultColor;
            n.elements.point = {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: a,
                borderWidth: 1,
                borderColor: a,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }, t.elements.Point = t.Element.extend({
                inRange: function(t, e) {
                    var n = this._view;
                    return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                },
                inLabelRange: function(t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2)
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y,
                        padding: t.radius + t.borderWidth
                    }
                },
                draw: function() {
                    var i = this._view,
                        r = this._chart.ctx,
                        o = i.pointStyle,
                        s = i.radius,
                        l = i.x,
                        d = i.y;
                    i.skip || (r.strokeStyle = i.borderColor || a, r.lineWidth = e.getValueOrDefault(i.borderWidth, n.elements.point.borderWidth), r.fillStyle = i.backgroundColor || a, t.canvasHelpers.drawPoint(r, o, s, l, d))
                }
            })
        }
    }, {}],
    32: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.defaults.global;
            e.elements.rectangle = {
                backgroundColor: e.defaultColor,
                borderWidth: 0,
                borderColor: e.defaultColor,
                borderSkipped: "bottom"
            }, t.elements.Rectangle = t.Element.extend({
                draw: function() {
                    function t(t) {
                        return l[(u + t) % 4]
                    }
                    var e = this._chart.ctx,
                        n = this._view,
                        a = n.width / 2,
                        i = n.x - a,
                        r = n.x + a,
                        o = n.base - (n.base - n.y),
                        s = n.borderWidth / 2;
                    n.borderWidth && (i += s, r -= s, o += s), e.beginPath(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth;
                    var l = [
                            [i, n.base],
                            [i, o],
                            [r, o],
                            [r, n.base]
                        ],
                        d = ["bottom", "left", "top", "right"],
                        u = d.indexOf(n.borderSkipped, 0);
                    u === -1 && (u = 0), e.moveTo.apply(e, t(0));
                    for (var c = 1; c < 4; c++) e.lineTo.apply(e, t(c));
                    e.fill(), n.borderWidth && e.stroke()
                },
                height: function() {
                    var t = this._view;
                    return t.base - t.y
                },
                inRange: function(t, e) {
                    var n = this._view;
                    return !!n && (n.y < n.base ? t >= n.x - n.width / 2 && t <= n.x + n.width / 2 && e >= n.y && e <= n.base : t >= n.x - n.width / 2 && t <= n.x + n.width / 2 && e >= n.base && e <= n.y)
                },
                inLabelRange: function(t) {
                    var e = this._view;
                    return !!e && (t >= e.x - e.width / 2 && t <= e.x + e.width / 2)
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                }
            })
        }
    }, {}],
    33: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                n = {
                    position: "bottom"
                },
                a = t.Scale.extend({
                    getLabels: function() {
                        var t = this.chart.data;
                        return (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                    },
                    determineDataLimits: function() {
                        var t = this,
                            n = t.getLabels();
                        t.minIndex = 0, t.maxIndex = n.length - 1;
                        var a;
                        void 0 !== t.options.ticks.min && (a = e.indexOf(n, t.options.ticks.min), t.minIndex = a !== -1 ? a : t.minIndex), void 0 !== t.options.ticks.max && (a = e.indexOf(n, t.options.ticks.max), t.maxIndex = a !== -1 ? a : t.maxIndex), t.min = n[t.minIndex], t.max = n[t.maxIndex]
                    },
                    buildTicks: function() {
                        var t = this,
                            e = t.getLabels();
                        t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                    },
                    getLabelForIndex: function(t, e) {
                        var n = this,
                            a = n.chart.data,
                            i = n.isHorizontal();
                        return a.xLabels && i || a.yLabels && !i ? n.getRightValue(a.datasets[e].data[t]) : n.ticks[t]
                    },
                    getPixelForValue: function(t, e, n, a) {
                        var i = this,
                            r = Math.max(i.maxIndex + 1 - i.minIndex - (i.options.gridLines.offsetGridLines ? 0 : 1), 1);
                        if (void 0 !== t && isNaN(e)) {
                            var o = i.getLabels(),
                                s = o.indexOf(t);
                            e = s !== -1 ? s : e
                        }
                        if (i.isHorizontal()) {
                            var l = i.width - (i.paddingLeft + i.paddingRight),
                                d = l / r,
                                u = d * (e - i.minIndex) + i.paddingLeft;
                            return (i.options.gridLines.offsetGridLines && a || i.maxIndex === i.minIndex && a) && (u += d / 2), i.left + Math.round(u)
                        }
                        var c = i.height - (i.paddingTop + i.paddingBottom),
                            h = c / r,
                            f = h * (e - i.minIndex) + i.paddingTop;
                        return i.options.gridLines.offsetGridLines && a && (f += h / 2), i.top + Math.round(f)
                    },
                    getPixelForTick: function(t, e) {
                        return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e)
                    },
                    getValueForPixel: function(t) {
                        var e, n = this,
                            a = Math.max(n.ticks.length - (n.options.gridLines.offsetGridLines ? 0 : 1), 1),
                            i = n.isHorizontal(),
                            r = i ? n.width - (n.paddingLeft + n.paddingRight) : n.height - (n.paddingTop + n.paddingBottom),
                            o = r / a;
                        return t -= i ? n.left : n.top, n.options.gridLines.offsetGridLines && (t -= o / 2), t -= i ? n.paddingLeft : n.paddingTop, e = t <= 0 ? 0 : Math.round(t / o)
                    },
                    getBasePixel: function() {
                        return this.bottom
                    }
                });
            t.scaleService.registerScaleType("category", a, n)
        }
    }, {}],
    34: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                n = {
                    position: "left",
                    ticks: {
                        callback: function(t, n, a) {
                            var i = a.length > 3 ? a[2] - a[1] : a[1] - a[0];
                            Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                            var r = e.log10(Math.abs(i)),
                                o = "";
                            if (0 !== t) {
                                var s = -1 * Math.floor(r);
                                s = Math.max(Math.min(s, 20), 0), o = t.toFixed(s)
                            } else o = "0";
                            return o
                        }
                    }
                },
                a = t.LinearScaleBase.extend({
                    determineDataLimits: function() {
                        function t(t) {
                            return s ? t.xAxisID === n.id : t.yAxisID === n.id
                        }
                        var n = this,
                            a = n.options,
                            i = n.chart,
                            r = i.data,
                            o = r.datasets,
                            s = n.isHorizontal();
                        if (n.min = null, n.max = null, a.stacked) {
                            var l = {};
                            e.each(o, function(r, o) {
                                var s = i.getDatasetMeta(o);
                                void 0 === l[s.type] && (l[s.type] = {
                                    positiveValues: [],
                                    negativeValues: []
                                });
                                var d = l[s.type].positiveValues,
                                    u = l[s.type].negativeValues;
                                i.isDatasetVisible(o) && t(s) && e.each(r.data, function(t, e) {
                                    var i = +n.getRightValue(t);
                                    isNaN(i) || s.data[e].hidden || (d[e] = d[e] || 0, u[e] = u[e] || 0, a.relativePoints ? d[e] = 100 : i < 0 ? u[e] += i : d[e] += i)
                                })
                            }), e.each(l, function(t) {
                                var a = t.positiveValues.concat(t.negativeValues),
                                    i = e.min(a),
                                    r = e.max(a);
                                n.min = null === n.min ? i : Math.min(n.min, i), n.max = null === n.max ? r : Math.max(n.max, r)
                            })
                        } else e.each(o, function(a, r) {
                            var o = i.getDatasetMeta(r);
                            i.isDatasetVisible(r) && t(o) && e.each(a.data, function(t, e) {
                                var a = +n.getRightValue(t);
                                isNaN(a) || o.data[e].hidden || (null === n.min ? n.min = a : a < n.min && (n.min = a), null === n.max ? n.max = a : a > n.max && (n.max = a))
                            })
                        });
                        this.handleTickRangeOptions()
                    },
                    getTickLimit: function() {
                        var n, a = this,
                            i = a.options.ticks;
                        if (a.isHorizontal()) n = Math.min(i.maxTicksLimit ? i.maxTicksLimit : 11, Math.ceil(a.width / 50));
                        else {
                            var r = e.getValueOrDefault(i.fontSize, t.defaults.global.defaultFontSize);
                            n = Math.min(i.maxTicksLimit ? i.maxTicksLimit : 11, Math.ceil(a.height / (2 * r)))
                        }
                        return n
                    },
                    handleDirectionalChanges: function() {
                        this.isHorizontal() || this.ticks.reverse()
                    },
                    getLabelForIndex: function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    getPixelForValue: function(t) {
                        var e, n, a = this,
                            i = a.paddingLeft,
                            r = a.paddingBottom,
                            o = a.start,
                            s = +a.getRightValue(t),
                            l = a.end - o;
                        return a.isHorizontal() ? (n = a.width - (i + a.paddingRight), e = a.left + n / l * (s - o), Math.round(e + i)) : (n = a.height - (a.paddingTop + r), e = a.bottom - r - n / l * (s - o), Math.round(e))
                    },
                    getValueForPixel: function(t) {
                        var e = this,
                            n = e.isHorizontal(),
                            a = e.paddingLeft,
                            i = e.paddingBottom,
                            r = n ? e.width - (a + e.paddingRight) : e.height - (e.paddingTop + i),
                            o = (n ? t - e.left - a : e.bottom - i - t) / r;
                        return e.start + (e.end - e.start) * o
                    },
                    getPixelForTick: function(t) {
                        return this.getPixelForValue(this.ticksAsNumbers[t])
                    }
                });
            t.scaleService.registerScaleType("linear", a, n)
        }
    }, {}],
    35: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                n = e.noop;
            t.LinearScaleBase = t.Scale.extend({
                handleTickRangeOptions: function() {
                    var t = this,
                        n = t.options,
                        a = n.ticks;
                    if (a.beginAtZero) {
                        var i = e.sign(t.min),
                            r = e.sign(t.max);
                        i < 0 && r < 0 ? t.max = 0 : i > 0 && r > 0 && (t.min = 0)
                    }
                    void 0 !== a.min ? t.min = a.min : void 0 !== a.suggestedMin && (t.min = Math.min(t.min, a.suggestedMin)), void 0 !== a.max ? t.max = a.max : void 0 !== a.suggestedMax && (t.max = Math.max(t.max, a.suggestedMax)), t.min === t.max && (t.max++, a.beginAtZero || t.min--)
                },
                getTickLimit: n,
                handleDirectionalChanges: n,
                buildTicks: function() {
                    var t = this,
                        n = t.options,
                        a = t.ticks = [],
                        i = n.ticks,
                        r = e.getValueOrDefault,
                        o = t.getTickLimit();
                    o = Math.max(2, o);
                    var s, l = i.fixedStepSize && i.fixedStepSize > 0 || i.stepSize && i.stepSize > 0;
                    if (l) s = r(i.fixedStepSize, i.stepSize);
                    else {
                        var d = e.niceNum(t.max - t.min, !1);
                        s = e.niceNum(d / (o - 1), !0)
                    }
                    var u = Math.floor(t.min / s) * s,
                        c = Math.ceil(t.max / s) * s,
                        h = (c - u) / s;
                    h = e.almostEquals(h, Math.round(h), s / 1e3) ? Math.round(h) : Math.ceil(h), a.push(void 0 !== i.min ? i.min : u);
                    for (var f = 1; f < h; ++f) a.push(u + f * s);
                    a.push(void 0 !== i.max ? i.max : c), t.handleDirectionalChanges(), t.max = e.max(a), t.min = e.min(a), i.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                },
                convertTicksToLabels: function() {
                    var e = this;
                    e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
                }
            })
        }
    }, {}],
    36: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                n = {
                    position: "left",
                    ticks: {
                        callback: function(t, n, a) {
                            var i = t / Math.pow(10, Math.floor(e.log10(t)));
                            return 0 === t ? "0" : 1 === i || 2 === i || 5 === i || 0 === n || n === a.length - 1 ? t.toExponential() : ""
                        }
                    }
                },
                a = t.Scale.extend({
                    determineDataLimits: function() {
                        function t(t) {
                            return d ? t.xAxisID === n.id : t.yAxisID === n.id
                        }
                        var n = this,
                            a = n.options,
                            i = a.ticks,
                            r = n.chart,
                            o = r.data,
                            s = o.datasets,
                            l = e.getValueOrDefault,
                            d = n.isHorizontal();
                        if (n.min = null, n.max = null, n.minNotZero = null, a.stacked) {
                            var u = {};
                            e.each(s, function(i, o) {
                                var s = r.getDatasetMeta(o);
                                r.isDatasetVisible(o) && t(s) && (void 0 === u[s.type] && (u[s.type] = []), e.each(i.data, function(t, e) {
                                    var i = u[s.type],
                                        r = +n.getRightValue(t);
                                    isNaN(r) || s.data[e].hidden || (i[e] = i[e] || 0, a.relativePoints ? i[e] = 100 : i[e] += r)
                                }))
                            }), e.each(u, function(t) {
                                var a = e.min(t),
                                    i = e.max(t);
                                n.min = null === n.min ? a : Math.min(n.min, a), n.max = null === n.max ? i : Math.max(n.max, i)
                            })
                        } else e.each(s, function(a, i) {
                            var o = r.getDatasetMeta(i);
                            r.isDatasetVisible(i) && t(o) && e.each(a.data, function(t, e) {
                                var a = +n.getRightValue(t);
                                isNaN(a) || o.data[e].hidden || (null === n.min ? n.min = a : a < n.min && (n.min = a), null === n.max ? n.max = a : a > n.max && (n.max = a), 0 !== a && (null === n.minNotZero || a < n.minNotZero) && (n.minNotZero = a))
                            })
                        });
                        n.min = l(i.min, n.min), n.max = l(i.max, n.max), n.min === n.max && (0 !== n.min && null !== n.min ? (n.min = Math.pow(10, Math.floor(e.log10(n.min)) - 1), n.max = Math.pow(10, Math.floor(e.log10(n.max)) + 1)) : (n.min = 1, n.max = 10))
                    },
                    buildTicks: function() {
                        for (var t = this, n = t.options, a = n.ticks, i = e.getValueOrDefault, r = t.ticks = [], o = i(a.min, Math.pow(10, Math.floor(e.log10(t.min)))); o < t.max;) {
                            r.push(o);
                            var s, l;
                            0 === o ? (s = Math.floor(e.log10(t.minNotZero)), l = Math.round(t.minNotZero / Math.pow(10, s))) : (s = Math.floor(e.log10(o)), l = Math.floor(o / Math.pow(10, s)) + 1), 10 === l && (l = 1, ++s), o = l * Math.pow(10, s)
                        }
                        var d = i(a.max, o);
                        r.push(d), t.isHorizontal() || r.reverse(), t.max = e.max(r), t.min = e.min(r), a.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                    },
                    convertTicksToLabels: function() {
                        this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                    },
                    getLabelForIndex: function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    getPixelForTick: function(t) {
                        return this.getPixelForValue(this.tickValues[t])
                    },
                    getPixelForValue: function(t) {
                        var n, a, i, r = this,
                            o = r.start,
                            s = +r.getRightValue(t),
                            l = r.paddingTop,
                            d = r.paddingBottom,
                            u = r.paddingLeft,
                            c = r.options,
                            h = c.ticks;
                        return r.isHorizontal() ? (i = e.log10(r.end) - e.log10(o), 0 === s ? a = r.left + u : (n = r.width - (u + r.paddingRight), a = r.left + n / i * (e.log10(s) - e.log10(o)), a += u)) : (n = r.height - (l + d), 0 !== o || h.reverse ? 0 === r.end && h.reverse ? (i = e.log10(r.start) - e.log10(r.minNotZero), a = s === r.end ? r.top + l : s === r.minNotZero ? r.top + l + .02 * n : r.top + l + .02 * n + .98 * n / i * (e.log10(s) - e.log10(r.minNotZero))) : (i = e.log10(r.end) - e.log10(o), n = r.height - (l + d), a = r.bottom - d - n / i * (e.log10(s) - e.log10(o))) : (i = e.log10(r.end) - e.log10(r.minNotZero), a = s === o ? r.bottom - d : s === r.minNotZero ? r.bottom - d - .02 * n : r.bottom - d - .02 * n - .98 * n / i * (e.log10(s) - e.log10(r.minNotZero)))), a
                    },
                    getValueForPixel: function(t) {
                        var n, a, i = this,
                            r = e.log10(i.end) - e.log10(i.start);
                        return i.isHorizontal() ? (a = i.width - (i.paddingLeft + i.paddingRight), n = i.start * Math.pow(10, (t - i.left - i.paddingLeft) * r / a)) : (a = i.height - (i.paddingTop + i.paddingBottom), n = Math.pow(10, (i.bottom - i.paddingBottom - t) * r / a) / i.start), n
                    }
                });
            t.scaleService.registerScaleType("logarithmic", a, n)
        }
    }, {}],
    37: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                n = t.defaults.global,
                a = {
                    display: !0,
                    animate: !0,
                    lineArc: !1,
                    position: "chartArea",
                    angleLines: {
                        display: !0,
                        color: "rgba(0, 0, 0, 0.1)",
                        lineWidth: 1
                    },
                    ticks: {
                        showLabelBackdrop: !0,
                        backdropColor: "rgba(255,255,255,0.75)",
                        backdropPaddingY: 2,
                        backdropPaddingX: 2
                    },
                    pointLabels: {
                        fontSize: 10,
                        callback: function(t) {
                            return t
                        }
                    }
                },
                i = t.LinearScaleBase.extend({
                    getValueCount: function() {
                        return this.chart.data.labels.length
                    },
                    setDimensions: function() {
                        var t = this,
                            a = t.options,
                            i = a.ticks;
                        t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                        var r = e.min([t.height, t.width]),
                            o = e.getValueOrDefault(i.fontSize, n.defaultFontSize);
                        t.drawingArea = a.display ? r / 2 - (o / 2 + i.backdropPaddingY) : r / 2
                    },
                    determineDataLimits: function() {
                        var t = this,
                            n = t.chart;
                        t.min = null, t.max = null, e.each(n.data.datasets, function(a, i) {
                            if (n.isDatasetVisible(i)) {
                                var r = n.getDatasetMeta(i);
                                e.each(a.data, function(e, n) {
                                    var a = +t.getRightValue(e);
                                    isNaN(a) || r.data[n].hidden || (null === t.min ? t.min = a : a < t.min && (t.min = a), null === t.max ? t.max = a : a > t.max && (t.max = a))
                                })
                            }
                        }), t.handleTickRangeOptions()
                    },
                    getTickLimit: function() {
                        var t = this.options.ticks,
                            a = e.getValueOrDefault(t.fontSize, n.defaultFontSize);
                        return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * a)))
                    },
                    convertTicksToLabels: function() {
                        var e = this;
                        t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                    },
                    getLabelForIndex: function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    fit: function() {
                        var t, a, i, r, o, s, l, d, u, c, h, f, g = this.options.pointLabels,
                            p = e.getValueOrDefault(g.fontSize, n.defaultFontSize),
                            m = e.getValueOrDefault(g.fontStyle, n.defaultFontStyle),
                            v = e.getValueOrDefault(g.fontFamily, n.defaultFontFamily),
                            b = e.fontString(p, m, v),
                            y = e.min([this.height / 2 - p - 5, this.width / 2]),
                            x = this.width,
                            k = 0;
                        for (this.ctx.font = b, a = 0; a < this.getValueCount(); a++) {
                            t = this.getPointPosition(a, y), i = this.ctx.measureText(this.pointLabels[a] ? this.pointLabels[a] : "").width + 5;
                            var S = this.getIndexAngle(a) + Math.PI / 2,
                                _ = 360 * S / (2 * Math.PI) % 360;
                            0 === _ || 180 === _ ? (r = i / 2, t.x + r > x && (x = t.x + r, o = a), t.x - r < k && (k = t.x - r, l = a)) : _ < 180 ? t.x + i > x && (x = t.x + i, o = a) : t.x - i < k && (k = t.x - i, l = a)
                        }
                        u = k, c = Math.ceil(x - this.width), s = this.getIndexAngle(o), d = this.getIndexAngle(l), h = c / Math.sin(s + Math.PI / 2), f = u / Math.sin(d + Math.PI / 2), h = e.isNumber(h) ? h : 0, f = e.isNumber(f) ? f : 0, this.drawingArea = Math.round(y - (f + h) / 2), this.setCenterPoint(f, h)
                    },
                    setCenterPoint: function(t, e) {
                        var n = this,
                            a = n.width - e - n.drawingArea,
                            i = t + n.drawingArea;
                        n.xCenter = Math.round((i + a) / 2 + n.left), n.yCenter = Math.round(n.height / 2 + n.top)
                    },
                    getIndexAngle: function(t) {
                        var e = 2 * Math.PI / this.getValueCount(),
                            n = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
                            a = n * Math.PI * 2 / 360;
                        return t * e - Math.PI / 2 + a
                    },
                    getDistanceFromCenterForValue: function(t) {
                        var e = this;
                        if (null === t) return 0;
                        var n = e.drawingArea / (e.max - e.min);
                        return e.options.reverse ? (e.max - t) * n : (t - e.min) * n
                    },
                    getPointPosition: function(t, e) {
                        var n = this,
                            a = n.getIndexAngle(t);
                        return {
                            x: Math.round(Math.cos(a) * e) + n.xCenter,
                            y: Math.round(Math.sin(a) * e) + n.yCenter
                        }
                    },
                    getPointPositionForValue: function(t, e) {
                        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                    },
                    getBasePosition: function() {
                        var t = this,
                            e = t.min,
                            n = t.max;
                        return t.getPointPositionForValue(0, t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0)
                    },
                    draw: function() {
                        var t = this,
                            a = t.options,
                            i = a.gridLines,
                            r = a.ticks,
                            o = a.angleLines,
                            s = a.pointLabels,
                            l = e.getValueOrDefault;
                        if (a.display) {
                            var d = t.ctx,
                                u = l(r.fontSize, n.defaultFontSize),
                                c = l(r.fontStyle, n.defaultFontStyle),
                                h = l(r.fontFamily, n.defaultFontFamily),
                                f = e.fontString(u, c, h);
                            if (e.each(t.ticks, function(o, s) {
                                    if (s > 0 || a.reverse) {
                                        var c = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]),
                                            h = t.yCenter - c;
                                        if (i.display && 0 !== s)
                                            if (d.strokeStyle = e.getValueAtIndexOrDefault(i.color, s - 1), d.lineWidth = e.getValueAtIndexOrDefault(i.lineWidth, s - 1), a.lineArc) d.beginPath(), d.arc(t.xCenter, t.yCenter, c, 0, 2 * Math.PI), d.closePath(), d.stroke();
                                            else {
                                                d.beginPath();
                                                for (var g = 0; g < t.getValueCount(); g++) {
                                                    var p = t.getPointPosition(g, c);
                                                    0 === g ? d.moveTo(p.x, p.y) : d.lineTo(p.x, p.y)
                                                }
                                                d.closePath(), d.stroke()
                                            }
                                        if (r.display) {
                                            var m = l(r.fontColor, n.defaultFontColor);
                                            if (d.font = f, r.showLabelBackdrop) {
                                                var v = d.measureText(o).width;
                                                d.fillStyle = r.backdropColor, d.fillRect(t.xCenter - v / 2 - r.backdropPaddingX, h - u / 2 - r.backdropPaddingY, v + 2 * r.backdropPaddingX, u + 2 * r.backdropPaddingY)
                                            }
                                            d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = m, d.fillText(o, t.xCenter, h)
                                        }
                                    }
                                }), !a.lineArc) {
                                d.lineWidth = o.lineWidth, d.strokeStyle = o.color;
                                for (var g = t.getDistanceFromCenterForValue(a.reverse ? t.min : t.max), p = l(s.fontSize, n.defaultFontSize), m = l(s.fontStyle, n.defaultFontStyle), v = l(s.fontFamily, n.defaultFontFamily), b = e.fontString(p, m, v), y = t.getValueCount() - 1; y >= 0; y--) {
                                    if (o.display) {
                                        var x = t.getPointPosition(y, g);
                                        d.beginPath(), d.moveTo(t.xCenter, t.yCenter), d.lineTo(x.x, x.y), d.stroke(), d.closePath()
                                    }
                                    var k = t.getPointPosition(y, g + 5),
                                        S = l(s.fontColor, n.defaultFontColor);
                                    d.font = b, d.fillStyle = S;
                                    var _ = t.pointLabels,
                                        w = this.getIndexAngle(y) + Math.PI / 2,
                                        M = 360 * w / (2 * Math.PI) % 360;
                                    0 === M || 180 === M ? d.textAlign = "center" : M < 180 ? d.textAlign = "left" : d.textAlign = "right", 90 === M || 270 === M ? d.textBaseline = "middle" : M > 270 || M < 90 ? d.textBaseline = "bottom" : d.textBaseline = "top", d.fillText(_[y] ? _[y] : "", k.x, k.y)
                                }
                            }
                        }
                    }
                });
            t.scaleService.registerScaleType("radialLinear", i, a)
        }
    }, {}],
    38: [function(t, e, n) {
        "use strict";
        var a = t("moment");
        a = "function" == typeof a ? a : window.moment, e.exports = function(t) {
            var e = t.helpers,
                n = {
                    units: [{
                        name: "millisecond",
                        steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                    }, {
                        name: "second",
                        steps: [1, 2, 5, 10, 30]
                    }, {
                        name: "minute",
                        steps: [1, 2, 5, 10, 30]
                    }, {
                        name: "hour",
                        steps: [1, 2, 3, 6, 12]
                    }, {
                        name: "day",
                        steps: [1, 2, 5]
                    }, {
                        name: "week",
                        maxStep: 4
                    }, {
                        name: "month",
                        maxStep: 3
                    }, {
                        name: "quarter",
                        maxStep: 4
                    }, {
                        name: "year",
                        maxStep: !1
                    }]
                },
                i = {
                    position: "bottom",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm:ss a",
                            hour: "MMM D, hA",
                            day: "ll",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {
                        autoSkip: !1
                    }
                },
                r = t.Scale.extend({
                    initialize: function() {
                        if (!a) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        t.Scale.prototype.initialize.call(this)
                    },
                    getLabelMoment: function(t, e) {
                        return null === t || null === e ? null : "undefined" != typeof this.labelMoments[t] ? this.labelMoments[t][e] : null
                    },
                    getLabelDiff: function(t, e) {
                        var n = this;
                        return null === t || null === e ? null : (void 0 === n.labelDiffs && n.buildLabelDiffs(), "undefined" != typeof n.labelDiffs[t] ? n.labelDiffs[t][e] : null)
                    },
                    getMomentStartOf: function(t) {
                        var e = this;
                        return "week" === e.options.time.unit && e.options.time.isoWeekday !== !1 ? t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday) : t.clone().startOf(e.tickUnit)
                    },
                    determineDataLimits: function() {
                        var t = this;
                        t.labelMoments = [];
                        var n = [];
                        t.chart.data.labels && t.chart.data.labels.length > 0 ? (e.each(t.chart.data.labels, function(e) {
                            var a = t.parseTime(e);
                            a.isValid() && (t.options.time.round && a.startOf(t.options.time.round), n.push(a))
                        }, t), t.firstTick = a.min.call(t, n), t.lastTick = a.max.call(t, n)) : (t.firstTick = null, t.lastTick = null), e.each(t.chart.data.datasets, function(i, r) {
                            var o = [],
                                s = t.chart.isDatasetVisible(r);
                            "object" == typeof i.data[0] && null !== i.data[0] ? e.each(i.data, function(e) {
                                var n = t.parseTime(t.getRightValue(e));
                                n.isValid() && (t.options.time.round && n.startOf(t.options.time.round), o.push(n), s && (t.firstTick = null !== t.firstTick ? a.min(t.firstTick, n) : n, t.lastTick = null !== t.lastTick ? a.max(t.lastTick, n) : n))
                            }, t) : o = n, t.labelMoments.push(o)
                        }, t), t.options.time.min && (t.firstTick = t.parseTime(t.options.time.min)), t.options.time.max && (t.lastTick = t.parseTime(t.options.time.max)), t.firstTick = (t.firstTick || a()).clone(), t.lastTick = (t.lastTick || a()).clone()
                    },
                    buildLabelDiffs: function() {
                        var t = this;
                        t.labelDiffs = [];
                        var n = [];
                        t.chart.data.labels && t.chart.data.labels.length > 0 && e.each(t.chart.data.labels, function(e) {
                            var a = t.parseTime(e);
                            a.isValid() && (t.options.time.round && a.startOf(t.options.time.round), n.push(a.diff(t.firstTick, t.tickUnit, !0)))
                        }, t), e.each(t.chart.data.datasets, function(a) {
                            var i = [];
                            "object" == typeof a.data[0] && null !== a.data[0] ? e.each(a.data, function(e) {
                                var n = t.parseTime(t.getRightValue(e));
                                n.isValid() && (t.options.time.round && n.startOf(t.options.time.round), i.push(n.diff(t.firstTick, t.tickUnit, !0)))
                            }, t) : i = n, t.labelDiffs.push(i)
                        }, t)
                    },
                    buildTicks: function() {
                        var a = this;
                        a.ctx.save();
                        var i = e.getValueOrDefault(a.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                            r = e.getValueOrDefault(a.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                            o = e.getValueOrDefault(a.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                            s = e.fontString(i, r, o);
                        if (a.ctx.font = s, a.ticks = [], a.unitScale = 1, a.scaleSizeInUnits = 0, a.options.time.unit) a.tickUnit = a.options.time.unit || "day", a.displayFormat = a.options.time.displayFormats[a.tickUnit], a.scaleSizeInUnits = a.lastTick.diff(a.firstTick, a.tickUnit, !0), a.unitScale = e.getValueOrDefault(a.options.time.unitStepSize, 1);
                        else {
                            var l = a.isHorizontal() ? a.width - (a.paddingLeft + a.paddingRight) : a.height - (a.paddingTop + a.paddingBottom),
                                d = a.tickFormatFunction(a.firstTick, 0, []),
                                u = a.ctx.measureText(d).width,
                                c = Math.cos(e.toRadians(a.options.ticks.maxRotation)),
                                h = Math.sin(e.toRadians(a.options.ticks.maxRotation));
                            u = u * c + i * h;
                            var f = l / u;
                            a.tickUnit = a.options.time.minUnit, a.scaleSizeInUnits = a.lastTick.diff(a.firstTick, a.tickUnit, !0), a.displayFormat = a.options.time.displayFormats[a.tickUnit];
                            for (var g = 0, p = n.units[g]; g < n.units.length;) {
                                if (a.unitScale = 1, e.isArray(p.steps) && Math.ceil(a.scaleSizeInUnits / f) < e.max(p.steps)) {
                                    for (var m = 0; m < p.steps.length; ++m)
                                        if (p.steps[m] >= Math.ceil(a.scaleSizeInUnits / f)) {
                                            a.unitScale = e.getValueOrDefault(a.options.time.unitStepSize, p.steps[m]);
                                            break
                                        }
                                    break
                                }
                                if (p.maxStep === !1 || Math.ceil(a.scaleSizeInUnits / f) < p.maxStep) {
                                    a.unitScale = e.getValueOrDefault(a.options.time.unitStepSize, Math.ceil(a.scaleSizeInUnits / f));
                                    break
                                }++g, p = n.units[g], a.tickUnit = p.name;
                                var v = a.firstTick.diff(a.getMomentStartOf(a.firstTick), a.tickUnit, !0),
                                    b = a.getMomentStartOf(a.lastTick.clone().add(1, a.tickUnit)).diff(a.lastTick, a.tickUnit, !0);
                                a.scaleSizeInUnits = a.lastTick.diff(a.firstTick, a.tickUnit, !0) + v + b, a.displayFormat = a.options.time.displayFormats[p.name]
                            }
                        }
                        var y;
                        if (a.options.time.min ? y = a.getMomentStartOf(a.firstTick) : (a.firstTick = a.getMomentStartOf(a.firstTick), y = a.firstTick), !a.options.time.max) {
                            var x = a.getMomentStartOf(a.lastTick),
                                k = x.diff(a.lastTick, a.tickUnit, !0);
                            k < 0 ? a.lastTick = a.getMomentStartOf(a.lastTick.add(1, a.tickUnit)) : k >= 0 && (a.lastTick = x), a.scaleSizeInUnits = a.lastTick.diff(a.firstTick, a.tickUnit, !0)
                        }
                        a.options.time.displayFormat && (a.displayFormat = a.options.time.displayFormat), a.ticks.push(a.firstTick.clone());
                        for (var S = 1; S <= a.scaleSizeInUnits; ++S) {
                            var _ = y.clone().add(S, a.tickUnit);
                            if (a.options.time.max && _.diff(a.lastTick, a.tickUnit, !0) >= 0) break;
                            S % a.unitScale === 0 && a.ticks.push(_)
                        }
                        var w = a.ticks[a.ticks.length - 1].diff(a.lastTick, a.tickUnit);
                        0 === w && 0 !== a.scaleSizeInUnits || (a.options.time.max ? (a.ticks.push(a.lastTick.clone()), a.scaleSizeInUnits = a.lastTick.diff(a.ticks[0], a.tickUnit, !0)) : (a.ticks.push(a.lastTick.clone()), a.scaleSizeInUnits = a.lastTick.diff(a.firstTick, a.tickUnit, !0))), a.ctx.restore(), a.labelDiffs = void 0
                    },
                    getLabelForIndex: function(t, e) {
                        var n = this,
                            a = n.chart.data.labels && t < n.chart.data.labels.length ? n.chart.data.labels[t] : "";
                        return "object" == typeof n.chart.data.datasets[e].data[0] && (a = n.getRightValue(n.chart.data.datasets[e].data[t])), n.options.time.tooltipFormat && (a = n.parseTime(a).format(n.options.time.tooltipFormat)), a
                    },
                    tickFormatFunction: function(t, n, a) {
                        var i = t.format(this.displayFormat),
                            r = this.options.ticks,
                            o = e.getValueOrDefault(r.callback, r.userCallback);
                        return o ? o(i, n, a) : i
                    },
                    convertTicksToLabels: function() {
                        var t = this;
                        t.tickMoments = t.ticks, t.ticks = t.ticks.map(t.tickFormatFunction, t)
                    },
                    getPixelForValue: function(t, e, n) {
                        var a = this,
                            i = null;
                        if (void 0 !== e && void 0 !== n && (i = a.getLabelDiff(n, e)), null === i && (t && t.isValid || (t = a.parseTime(a.getRightValue(t))), t && t.isValid && t.isValid() && (i = t.diff(a.firstTick, a.tickUnit, !0))), null !== i) {
                            var r = 0 !== i ? i / a.scaleSizeInUnits : i;
                            if (a.isHorizontal()) {
                                var o = a.width - (a.paddingLeft + a.paddingRight),
                                    s = o * r + a.paddingLeft;
                                return a.left + Math.round(s)
                            }
                            var l = a.height - (a.paddingTop + a.paddingBottom),
                                d = l * r + a.paddingTop;
                            return a.top + Math.round(d)
                        }
                    },
                    getPixelForTick: function(t) {
                        return this.getPixelForValue(this.tickMoments[t], null, null)
                    },
                    getValueForPixel: function(t) {
                        var e = this,
                            n = e.isHorizontal() ? e.width - (e.paddingLeft + e.paddingRight) : e.height - (e.paddingTop + e.paddingBottom),
                            i = (t - (e.isHorizontal() ? e.left + e.paddingLeft : e.top + e.paddingTop)) / n;
                        return i *= e.scaleSizeInUnits, e.firstTick.clone().add(a.duration(i, e.tickUnit).asSeconds(), "seconds")
                    },
                    parseTime: function(t) {
                        var e = this;
                        return "string" == typeof e.options.time.parser ? a(t, e.options.time.parser) : "function" == typeof e.options.time.parser ? e.options.time.parser(t) : "function" == typeof t.getMonth || "number" == typeof t ? a(t) : t.isValid && t.isValid() ? t : "string" != typeof e.options.time.format && e.options.time.format.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"), e.options.time.format(t)) : a(t, e.options.time.format)
                    }
                });
            t.scaleService.registerScaleType("time", r, i)
        }
    }, {
        moment: 44
    }],
    39: [function(t, e, n) {
        function a(t) {
            if (t) {
                var e = /^#([a-fA-F0-9]{3})$/,
                    n = /^#([a-fA-F0-9]{6})$/,
                    a = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                    i = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                    r = /(\w+)/,
                    o = [0, 0, 0],
                    s = 1,
                    l = t.match(e);
                if (l) {
                    l = l[1];
                    for (var d = 0; d < o.length; d++) o[d] = parseInt(l[d] + l[d], 16)
                } else if (l = t.match(n)) {
                    l = l[1];
                    for (var d = 0; d < o.length; d++) o[d] = parseInt(l.slice(2 * d, 2 * d + 2), 16)
                } else if (l = t.match(a)) {
                    for (var d = 0; d < o.length; d++) o[d] = parseInt(l[d + 1]);
                    s = parseFloat(l[4])
                } else if (l = t.match(i)) {
                    for (var d = 0; d < o.length; d++) o[d] = Math.round(2.55 * parseFloat(l[d + 1]));
                    s = parseFloat(l[4])
                } else if (l = t.match(r)) {
                    if ("transparent" == l[1]) return [0, 0, 0, 0];
                    if (o = x[l[1]], !o) return
                }
                for (var d = 0; d < o.length; d++) o[d] = b(o[d], 0, 255);
                return s = s || 0 == s ? b(s, 0, 1) : 1, o[3] = s, o
            }
        }

        function i(t) {
            if (t) {
                var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                    n = t.match(e);
                if (n) {
                    var a = parseFloat(n[4]),
                        i = b(parseInt(n[1]), 0, 360),
                        r = b(parseFloat(n[2]), 0, 100),
                        o = b(parseFloat(n[3]), 0, 100),
                        s = b(isNaN(a) ? 1 : a, 0, 1);
                    return [i, r, o, s]
                }
            }
        }

        function r(t) {
            if (t) {
                var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                    n = t.match(e);
                if (n) {
                    var a = parseFloat(n[4]),
                        i = b(parseInt(n[1]), 0, 360),
                        r = b(parseFloat(n[2]), 0, 100),
                        o = b(parseFloat(n[3]), 0, 100),
                        s = b(isNaN(a) ? 1 : a, 0, 1);
                    return [i, r, o, s]
                }
            }
        }

        function o(t) {
            var e = a(t);
            return e && e.slice(0, 3)
        }

        function s(t) {
            var e = i(t);
            return e && e.slice(0, 3)
        }

        function l(t) {
            var e = a(t);
            return e ? e[3] : (e = i(t)) ? e[3] : (e = r(t)) ? e[3] : void 0
        }

        function d(t) {
            return "#" + y(t[0]) + y(t[1]) + y(t[2])
        }

        function u(t, e) {
            return e < 1 || t[3] && t[3] < 1 ? c(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
        }

        function c(t, e) {
            return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
        }

        function h(t, e) {
            if (e < 1 || t[3] && t[3] < 1) return f(t, e);
            var n = Math.round(t[0] / 255 * 100),
                a = Math.round(t[1] / 255 * 100),
                i = Math.round(t[2] / 255 * 100);
            return "rgb(" + n + "%, " + a + "%, " + i + "%)"
        }

        function f(t, e) {
            var n = Math.round(t[0] / 255 * 100),
                a = Math.round(t[1] / 255 * 100),
                i = Math.round(t[2] / 255 * 100);
            return "rgba(" + n + "%, " + a + "%, " + i + "%, " + (e || t[3] || 1) + ")"
        }

        function g(t, e) {
            return e < 1 || t[3] && t[3] < 1 ? p(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
        }

        function p(t, e) {
            return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
        }

        function m(t, e) {
            return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
        }

        function v(t) {
            return k[t.slice(0, 3)]
        }

        function b(t, e, n) {
            return Math.min(Math.max(e, t), n)
        }

        function y(t) {
            var e = t.toString(16).toUpperCase();
            return e.length < 2 ? "0" + e : e
        }
        var x = t("color-name");
        e.exports = {
            getRgba: a,
            getHsla: i,
            getRgb: o,
            getHsl: s,
            getHwb: r,
            getAlpha: l,
            hexString: d,
            rgbString: u,
            rgbaString: c,
            percentString: h,
            percentaString: f,
            hslString: g,
            hslaString: p,
            hwbString: m,
            keyword: v
        };
        var k = {};
        for (var S in x) k[x[S]] = S
    }, {
        "color-name": 43
    }],
    40: [function(t, e, n) {
        var a = t("color-convert"),
            i = t("chartjs-color-string"),
            r = function(t) {
                if (t instanceof r) return t;
                if (!(this instanceof r)) return new r(t);
                this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1
                };
                var e;
                if ("string" == typeof t)
                    if (e = i.getRgba(t)) this.setValues("rgb", e);
                    else if (e = i.getHsla(t)) this.setValues("hsl", e);
                else {
                    if (!(e = i.getHwb(t))) throw new Error('Unable to parse color from string "' + t + '"');
                    this.setValues("hwb", e)
                } else if ("object" == typeof t)
                    if (e = t, void 0 !== e.r || void 0 !== e.red) this.setValues("rgb", e);
                    else if (void 0 !== e.l || void 0 !== e.lightness) this.setValues("hsl", e);
                else if (void 0 !== e.v || void 0 !== e.value) this.setValues("hsv", e);
                else if (void 0 !== e.w || void 0 !== e.whiteness) this.setValues("hwb", e);
                else {
                    if (void 0 === e.c && void 0 === e.cyan) throw new Error("Unable to parse color from object " + JSON.stringify(t));
                    this.setValues("cmyk", e)
                }
            };
        r.prototype = {
            rgb: function() {
                return this.setSpace("rgb", arguments)
            },
            hsl: function() {
                return this.setSpace("hsl", arguments)
            },
            hsv: function() {
                return this.setSpace("hsv", arguments)
            },
            hwb: function() {
                return this.setSpace("hwb", arguments)
            },
            cmyk: function() {
                return this.setSpace("cmyk", arguments)
            },
            rgbArray: function() {
                return this.values.rgb
            },
            hslArray: function() {
                return this.values.hsl
            },
            hsvArray: function() {
                return this.values.hsv
            },
            hwbArray: function() {
                var t = this.values;
                return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
            },
            cmykArray: function() {
                return this.values.cmyk
            },
            rgbaArray: function() {
                var t = this.values;
                return t.rgb.concat([t.alpha])
            },
            hslaArray: function() {
                var t = this.values;
                return t.hsl.concat([t.alpha])
            },
            alpha: function(t) {
                return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
            },
            red: function(t) {
                return this.setChannel("rgb", 0, t)
            },
            green: function(t) {
                return this.setChannel("rgb", 1, t)
            },
            blue: function(t) {
                return this.setChannel("rgb", 2, t)
            },
            hue: function(t) {
                return t && (t %= 360, t = t < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
            },
            saturation: function(t) {
                return this.setChannel("hsl", 1, t)
            },
            lightness: function(t) {
                return this.setChannel("hsl", 2, t)
            },
            saturationv: function(t) {
                return this.setChannel("hsv", 1, t)
            },
            whiteness: function(t) {
                return this.setChannel("hwb", 1, t)
            },
            blackness: function(t) {
                return this.setChannel("hwb", 2, t)
            },
            value: function(t) {
                return this.setChannel("hsv", 2, t)
            },
            cyan: function(t) {
                return this.setChannel("cmyk", 0, t)
            },
            magenta: function(t) {
                return this.setChannel("cmyk", 1, t)
            },
            yellow: function(t) {
                return this.setChannel("cmyk", 2, t)
            },
            black: function(t) {
                return this.setChannel("cmyk", 3, t)
            },
            hexString: function() {
                return i.hexString(this.values.rgb)
            },
            rgbString: function() {
                return i.rgbString(this.values.rgb, this.values.alpha)
            },
            rgbaString: function() {
                return i.rgbaString(this.values.rgb, this.values.alpha)
            },
            percentString: function() {
                return i.percentString(this.values.rgb, this.values.alpha)
            },
            hslString: function() {
                return i.hslString(this.values.hsl, this.values.alpha)
            },
            hslaString: function() {
                return i.hslaString(this.values.hsl, this.values.alpha)
            },
            hwbString: function() {
                return i.hwbString(this.values.hwb, this.values.alpha)
            },
            keyword: function() {
                return i.keyword(this.values.rgb, this.values.alpha)
            },
            rgbNumber: function() {
                var t = this.values.rgb;
                return t[0] << 16 | t[1] << 8 | t[2]
            },
            luminosity: function() {
                for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                    var a = t[n] / 255;
                    e[n] = a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
                }
                return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
            },
            contrast: function(t) {
                var e = this.luminosity(),
                    n = t.luminosity();
                return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
            },
            level: function(t) {
                var e = this.contrast(t);
                return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
            },
            dark: function() {
                var t = this.values.rgb,
                    e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
                return e < 128
            },
            light: function() {
                return !this.dark()
            },
            negate: function() {
                for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                return this.setValues("rgb", t), this
            },
            lighten: function(t) {
                var e = this.values.hsl;
                return e[2] += e[2] * t, this.setValues("hsl", e), this
            },
            darken: function(t) {
                var e = this.values.hsl;
                return e[2] -= e[2] * t, this.setValues("hsl", e), this
            },
            saturate: function(t) {
                var e = this.values.hsl;
                return e[1] += e[1] * t, this.setValues("hsl", e), this
            },
            desaturate: function(t) {
                var e = this.values.hsl;
                return e[1] -= e[1] * t, this.setValues("hsl", e), this
            },
            whiten: function(t) {
                var e = this.values.hwb;
                return e[1] += e[1] * t, this.setValues("hwb", e), this
            },
            blacken: function(t) {
                var e = this.values.hwb;
                return e[2] += e[2] * t, this.setValues("hwb", e), this
            },
            greyscale: function() {
                var t = this.values.rgb,
                    e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                return this.setValues("rgb", [e, e, e]), this
            },
            clearer: function(t) {
                var e = this.values.alpha;
                return this.setValues("alpha", e - e * t), this
            },
            opaquer: function(t) {
                var e = this.values.alpha;
                return this.setValues("alpha", e + e * t), this
            },
            rotate: function(t) {
                var e = this.values.hsl,
                    n = (e[0] + t) % 360;
                return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this
            },
            mix: function(t, e) {
                var n = this,
                    a = t,
                    i = void 0 === e ? .5 : e,
                    r = 2 * i - 1,
                    o = n.alpha() - a.alpha(),
                    s = ((r * o === -1 ? r : (r + o) / (1 + r * o)) + 1) / 2,
                    l = 1 - s;
                return this.rgb(s * n.red() + l * a.red(), s * n.green() + l * a.green(), s * n.blue() + l * a.blue()).alpha(n.alpha() * i + a.alpha() * (1 - i))
            },
            toJSON: function() {
                return this.rgb()
            },
            clone: function() {
                var t, e, n = new r,
                    a = this.values,
                    i = n.values;
                for (var o in a) a.hasOwnProperty(o) && (t = a[o], e = {}.toString.call(t), "[object Array]" === e ? i[o] = t.slice(0) : "[object Number]" === e ? i[o] = t : console.error("unexpected color value:", t));
                return n
            }
        }, r.prototype.spaces = {
            rgb: ["red", "green", "blue"],
            hsl: ["hue", "saturation", "lightness"],
            hsv: ["hue", "saturation", "value"],
            hwb: ["hue", "whiteness", "blackness"],
            cmyk: ["cyan", "magenta", "yellow", "black"]
        }, r.prototype.maxes = {
            rgb: [255, 255, 255],
            hsl: [360, 100, 100],
            hsv: [360, 100, 100],
            hwb: [360, 100, 100],
            cmyk: [100, 100, 100, 100]
        }, r.prototype.getValues = function(t) {
            for (var e = this.values, n = {}, a = 0; a < t.length; a++) n[t.charAt(a)] = e[t][a];
            return 1 !== e.alpha && (n.a = e.alpha), n
        }, r.prototype.setValues = function(t, e) {
            var n, i = this.values,
                r = this.spaces,
                o = this.maxes,
                s = 1;
            if ("alpha" === t) s = e;
            else if (e.length) i[t] = e.slice(0, t.length), s = e[t.length];
            else if (void 0 !== e[t.charAt(0)]) {
                for (n = 0; n < t.length; n++) i[t][n] = e[t.charAt(n)];
                s = e.a
            } else if (void 0 !== e[r[t][0]]) {
                var l = r[t];
                for (n = 0; n < t.length; n++) i[t][n] = e[l[n]];
                s = e.alpha
            }
            if (i.alpha = Math.max(0, Math.min(1, void 0 === s ? i.alpha : s)), "alpha" === t) return !1;
            var d;
            for (n = 0; n < t.length; n++) d = Math.max(0, Math.min(o[t][n], i[t][n])), i[t][n] = Math.round(d);
            for (var u in r) u !== t && (i[u] = a[t][u](i[t]));
            return !0
        }, r.prototype.setSpace = function(t, e) {
            var n = e[0];
            return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
        }, r.prototype.setChannel = function(t, e, n) {
            var a = this.values[t];
            return void 0 === n ? a[e] : n === a[e] ? this : (a[e] = n, this.setValues(t, a), this)
        }, "undefined" != typeof window && (window.Color = r), e.exports = r
    }, {
        "chartjs-color-string": 39,
        "color-convert": 42
    }],
    41: [function(t, e, n) {
        function a(t) {
            var e, n, a, i = t[0] / 255,
                r = t[1] / 255,
                o = t[2] / 255,
                s = Math.min(i, r, o),
                l = Math.max(i, r, o),
                d = l - s;
            return l == s ? e = 0 : i == l ? e = (r - o) / d : r == l ? e = 2 + (o - i) / d : o == l && (e = 4 + (i - r) / d), e = Math.min(60 * e, 360), e < 0 && (e += 360), a = (s + l) / 2, n = l == s ? 0 : a <= .5 ? d / (l + s) : d / (2 - l - s), [e, 100 * n, 100 * a]
        }

        function i(t) {
            var e, n, a, i = t[0],
                r = t[1],
                o = t[2],
                s = Math.min(i, r, o),
                l = Math.max(i, r, o),
                d = l - s;
            return n = 0 == l ? 0 : d / l * 1e3 / 10, l == s ? e = 0 : i == l ? e = (r - o) / d : r == l ? e = 2 + (o - i) / d : o == l && (e = 4 + (i - r) / d), e = Math.min(60 * e, 360), e < 0 && (e += 360), a = l / 255 * 1e3 / 10, [e, n, a]
        }

        function o(t) {
            var e = t[0],
                n = t[1],
                i = t[2],
                r = a(t)[0],
                o = 1 / 255 * Math.min(e, Math.min(n, i)),
                i = 1 - 1 / 255 * Math.max(e, Math.max(n, i));
            return [r, 100 * o, 100 * i]
        }

        function s(t) {
            var e, n, a, i, r = t[0] / 255,
                o = t[1] / 255,
                s = t[2] / 255;
            return i = Math.min(1 - r, 1 - o, 1 - s), e = (1 - r - i) / (1 - i) || 0, n = (1 - o - i) / (1 - i) || 0, a = (1 - s - i) / (1 - i) || 0, [100 * e, 100 * n, 100 * a, 100 * i]
        }

        function l(t) {
            return K[JSON.stringify(t)]
        }

        function d(t) {
            var e = t[0] / 255,
                n = t[1] / 255,
                a = t[2] / 255;
            e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92;
            var i = .4124 * e + .3576 * n + .1805 * a,
                r = .2126 * e + .7152 * n + .0722 * a,
                o = .0193 * e + .1192 * n + .9505 * a;
            return [100 * i, 100 * r, 100 * o]
        }

        function u(t) {
            var e, n, a, i = d(t),
                r = i[0],
                o = i[1],
                s = i[2];
            return r /= 95.047, o /= 100, s /= 108.883, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, e = 116 * o - 16, n = 500 * (r - o), a = 200 * (o - s), [e, n, a]
        }

        function c(t) {
            return B(u(t))
        }

        function h(t) {
            var e, n, a, i, r, o = t[0] / 360,
                s = t[1] / 100,
                l = t[2] / 100;
            if (0 == s) return r = 255 * l, [r, r, r];
            n = l < .5 ? l * (1 + s) : l + s - l * s, e = 2 * l - n, i = [0, 0, 0];
            for (var d = 0; d < 3; d++) a = o + 1 / 3 * -(d - 1), a < 0 && a++, a > 1 && a--, r = 6 * a < 1 ? e + 6 * (n - e) * a : 2 * a < 1 ? n : 3 * a < 2 ? e + (n - e) * (2 / 3 - a) * 6 : e, i[d] = 255 * r;
            return i
        }

        function f(t) {
            var e, n, a = t[0],
                i = t[1] / 100,
                r = t[2] / 100;
            return 0 === r ? [0, 0, 0] : (r *= 2, i *= r <= 1 ? r : 2 - r, n = (r + i) / 2, e = 2 * i / (r + i), [a, 100 * e, 100 * n])
        }

        function p(t) {
            return o(h(t))
        }

        function m(t) {
            return s(h(t))
        }

        function v(t) {
            return l(h(t))
        }

        function y(t) {
            var e = t[0] / 60,
                n = t[1] / 100,
                a = t[2] / 100,
                i = Math.floor(e) % 6,
                r = e - Math.floor(e),
                o = 255 * a * (1 - n),
                s = 255 * a * (1 - n * r),
                l = 255 * a * (1 - n * (1 - r)),
                a = 255 * a;
            switch (i) {
                case 0:
                    return [a, l, o];
                case 1:
                    return [s, a, o];
                case 2:
                    return [o, a, l];
                case 3:
                    return [o, s, a];
                case 4:
                    return [l, o, a];
                case 5:
                    return [a, o, s]
            }
        }

        function x(t) {
            var e, n, a = t[0],
                i = t[1] / 100,
                r = t[2] / 100;
            return n = (2 - i) * r, e = i * r, e /= n <= 1 ? n : 2 - n, e = e || 0, n /= 2, [a, 100 * e, 100 * n]
        }

        function k(t) {
            return o(y(t))
        }

        function S(t) {
            return s(y(t))
        }

        function _(t) {
            return l(y(t))
        }

        function w(t) {
            var e, n, a, i, o = t[0] / 360,
                s = t[1] / 100,
                l = t[2] / 100,
                d = s + l;
            switch (d > 1 && (s /= d, l /= d), e = Math.floor(6 * o), n = 1 - l, a = 6 * o - e, 0 != (1 & e) && (a = 1 - a), i = s + a * (n - s), e) {
                default:
                    case 6:
                    case 0:
                    r = n,
                g = i,
                b = s;
                break;
                case 1:
                        r = i,
                    g = n,
                    b = s;
                    break;
                case 2:
                        r = s,
                    g = n,
                    b = i;
                    break;
                case 3:
                        r = s,
                    g = i,
                    b = n;
                    break;
                case 4:
                        r = i,
                    g = s,
                    b = n;
                    break;
                case 5:
                        r = n,
                    g = s,
                    b = i
            }
            return [255 * r, 255 * g, 255 * b]
        }

        function M(t) {
            return a(w(t))
        }

        function D(t) {
            return i(w(t))
        }

        function C(t) {
            return s(w(t))
        }

        function T(t) {
            return l(w(t))
        }

        function P(t) {
            var e, n, a, i = t[0] / 100,
                r = t[1] / 100,
                o = t[2] / 100,
                s = t[3] / 100;
            return e = 1 - Math.min(1, i * (1 - s) + s), n = 1 - Math.min(1, r * (1 - s) + s), a = 1 - Math.min(1, o * (1 - s) + s), [255 * e, 255 * n, 255 * a]
        }

        function A(t) {
            return a(P(t))
        }

        function F(t) {
            return i(P(t))
        }

        function I(t) {
            return o(P(t))
        }

        function O(t) {
            return l(P(t))
        }

        function R(t) {
            var e, n, a, i = t[0] / 100,
                r = t[1] / 100,
                o = t[2] / 100;
            return e = 3.2406 * i + r * -1.5372 + o * -.4986, n = i * -.9689 + 1.8758 * r + .0415 * o, a = .0557 * i + r * -.204 + 1.057 * o, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e = 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n = 12.92 * n, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a = 12.92 * a, e = Math.min(Math.max(0, e), 1), n = Math.min(Math.max(0, n), 1), a = Math.min(Math.max(0, a), 1), [255 * e, 255 * n, 255 * a]
        }

        function L(t) {
            var e, n, a, i = t[0],
                r = t[1],
                o = t[2];
            return i /= 95.047, r /= 100, o /= 108.883, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, e = 116 * r - 16, n = 500 * (i - r), a = 200 * (r - o), [e, n, a]
        }

        function W(t) {
            return B(L(t))
        }

        function V(t) {
            var e, n, a, i, r = t[0],
                o = t[1],
                s = t[2];
            return r <= 8 ? (n = 100 * r / 903.3, i = 7.787 * (n / 100) + 16 / 116) : (n = 100 * Math.pow((r + 16) / 116, 3), i = Math.pow(n / 100, 1 / 3)), e = e / 95.047 <= .008856 ? e = 95.047 * (o / 500 + i - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + i, 3), a = a / 108.883 <= .008859 ? a = 108.883 * (i - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(i - s / 200, 3), [e, n, a]
        }

        function B(t) {
            var e, n, a, i = t[0],
                r = t[1],
                o = t[2];
            return e = Math.atan2(o, r), n = 360 * e / 2 / Math.PI, n < 0 && (n += 360), a = Math.sqrt(r * r + o * o), [i, a, n]
        }

        function Y(t) {
            return R(V(t))
        }

        function z(t) {
            var e, n, a, i = t[0],
                r = t[1],
                o = t[2];
            return a = o / 360 * 2 * Math.PI, e = r * Math.cos(a), n = r * Math.sin(a), [i, e, n]
        }

        function H(t) {
            return V(z(t))
        }

        function N(t) {
            return Y(z(t))
        }

        function E(t) {
            return X[t]
        }

        function U(t) {
            return a(E(t))
        }

        function j(t) {
            return i(E(t))
        }

        function G(t) {
            return o(E(t))
        }

        function q(t) {
            return s(E(t))
        }

        function Z(t) {
            return u(E(t))
        }

        function J(t) {
            return d(E(t))
        }
        e.exports = {
            rgb2hsl: a,
            rgb2hsv: i,
            rgb2hwb: o,
            rgb2cmyk: s,
            rgb2keyword: l,
            rgb2xyz: d,
            rgb2lab: u,
            rgb2lch: c,
            hsl2rgb: h,
            hsl2hsv: f,
            hsl2hwb: p,
            hsl2cmyk: m,
            hsl2keyword: v,
            hsv2rgb: y,
            hsv2hsl: x,
            hsv2hwb: k,
            hsv2cmyk: S,
            hsv2keyword: _,
            hwb2rgb: w,
            hwb2hsl: M,
            hwb2hsv: D,
            hwb2cmyk: C,
            hwb2keyword: T,
            cmyk2rgb: P,
            cmyk2hsl: A,
            cmyk2hsv: F,
            cmyk2hwb: I,
            cmyk2keyword: O,
            keyword2rgb: E,
            keyword2hsl: U,
            keyword2hsv: j,
            keyword2hwb: G,
            keyword2cmyk: q,
            keyword2lab: Z,
            keyword2xyz: J,
            xyz2rgb: R,
            xyz2lab: L,
            xyz2lch: W,
            lab2xyz: V,
            lab2rgb: Y,
            lab2lch: B,
            lch2lab: z,
            lch2xyz: H,
            lch2rgb: N
        };
        var X = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            },
            K = {};
        for (var Q in X) K[JSON.stringify(X[Q])] = Q
    }, {}],
    42: [function(t, e, n) {
        var a = t("./conversions"),
            i = function() {
                return new d
            };
        for (var r in a) {
            i[r + "Raw"] = function(t) {
                return function(e) {
                    return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), a[t](e)
                }
            }(r);
            var o = /(\w+)2(\w+)/.exec(r),
                s = o[1],
                l = o[2];
            i[s] = i[s] || {}, i[s][l] = i[r] = function(t) {
                return function(e) {
                    "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                    var n = a[t](e);
                    if ("string" == typeof n || void 0 === n) return n;
                    for (var i = 0; i < n.length; i++) n[i] = Math.round(n[i]);
                    return n
                }
            }(r)
        }
        var d = function() {
            this.convs = {}
        };
        d.prototype.routeSpace = function(t, e) {
            var n = e[0];
            return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n))
        }, d.prototype.setValues = function(t, e) {
            return this.space = t, this.convs = {}, this.convs[t] = e, this
        }, d.prototype.getValues = function(t) {
            var e = this.convs[t];
            if (!e) {
                var n = this.space,
                    a = this.convs[n];
                e = i[n][t](a), this.convs[t] = e
            }
            return e
        }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
            d.prototype[t] = function(e) {
                return this.routeSpace(t, arguments)
            }
        }), e.exports = i
    }, {
        "./conversions": 41
    }],
    43: [function(t, e, n) {
        e.exports = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        }
    }, {}],
    44: [function(t, e, n) {
        ! function(t, a) {
            "object" == typeof n && "undefined" != typeof e ? e.exports = a() : "function" == typeof define && define.amd ? define(a) : t.moment = a()
        }(this, function() {
            "use strict";

            function n() {
                return pa.apply(null, arguments)
            }

            function a(t) {
                pa = t
            }

            function i(t) {
                return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
            }

            function r(t) {
                return null != t && "[object Object]" === Object.prototype.toString.call(t)
            }

            function o(t) {
                var e;
                for (e in t) return !1;
                return !0
            }

            function s(t) {
                return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
            }

            function l(t, e) {
                var n, a = [];
                for (n = 0; n < t.length; ++n) a.push(e(t[n], n));
                return a
            }

            function d(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function u(t, e) {
                for (var n in e) d(e, n) && (t[n] = e[n]);
                return d(e, "toString") && (t.toString = e.toString), d(e, "valueOf") && (t.valueOf = e.valueOf), t
            }

            function c(t, e, n, a) {
                return be(t, e, n, a, !0).utc()
            }

            function h() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null
                }
            }

            function f(t) {
                return null == t._pf && (t._pf = h()), t._pf
            }

            function g(t) {
                if (null == t._isValid) {
                    var e = f(t),
                        n = ma.call(e.parsedDateParts, function(t) {
                            return null != t
                        }),
                        a = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
                    if (t._strict && (a = a && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return a;
                    t._isValid = a
                }
                return t._isValid
            }

            function p(t) {
                var e = c(NaN);
                return null != t ? u(f(e), t) : f(e).userInvalidated = !0, e
            }

            function m(t) {
                return void 0 === t
            }

            function v(t, e) {
                var n, a, i;
                if (m(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), m(e._i) || (t._i = e._i), m(e._f) || (t._f = e._f), m(e._l) || (t._l = e._l), m(e._strict) || (t._strict = e._strict), m(e._tzm) || (t._tzm = e._tzm), m(e._isUTC) || (t._isUTC = e._isUTC), m(e._offset) || (t._offset = e._offset), m(e._pf) || (t._pf = f(e)), m(e._locale) || (t._locale = e._locale), va.length > 0)
                    for (n in va) a = va[n], i = e[a], m(i) || (t[a] = i);
                return t
            }

            function b(t) {
                v(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), ba === !1 && (ba = !0, n.updateOffset(this), ba = !1)
            }

            function y(t) {
                return t instanceof b || null != t && null != t._isAMomentObject
            }

            function x(t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
            }

            function k(t) {
                var e = +t,
                    n = 0;
                return 0 !== e && isFinite(e) && (n = x(e)), n
            }

            function S(t, e, n) {
                var a, i = Math.min(t.length, e.length),
                    r = Math.abs(t.length - e.length),
                    o = 0;
                for (a = 0; a < i; a++)(n && t[a] !== e[a] || !n && k(t[a]) !== k(e[a])) && o++;
                return o + r
            }

            function _(t) {
                n.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
            }

            function w(t, e) {
                var a = !0;
                return u(function() {
                    if (null != n.deprecationHandler && n.deprecationHandler(null, t), a) {
                        for (var i, r = [], o = 0; o < arguments.length; o++) {
                            if (i = "", "object" == typeof arguments[o]) {
                                i += "\n[" + o + "] ";
                                for (var s in arguments[0]) i += s + ": " + arguments[0][s] + ", ";
                                i = i.slice(0, -2)
                            } else i = arguments[o];
                            r.push(i)
                        }
                        _(t + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), a = !1
                    }
                    return e.apply(this, arguments)
                }, e)
            }

            function M(t, e) {
                null != n.deprecationHandler && n.deprecationHandler(t, e), ya[t] || (_(e), ya[t] = !0)
            }

            function D(t) {
                return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
            }

            function C(t) {
                var e, n;
                for (n in t) e = t[n], D(e) ? this[n] = e : this["_" + n] = e;
                this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }

            function T(t, e) {
                var n, a = u({}, t);
                for (n in e) d(e, n) && (r(t[n]) && r(e[n]) ? (a[n] = {}, u(a[n], t[n]), u(a[n], e[n])) : null != e[n] ? a[n] = e[n] : delete a[n]);
                for (n in t) d(t, n) && !d(e, n) && r(t[n]) && (a[n] = u({}, a[n]));
                return a
            }

            function P(t) {
                null != t && this.set(t)
            }

            function A(t, e, n) {
                var a = this._calendar[t] || this._calendar.sameElse;
                return D(a) ? a.call(e, n) : a
            }

            function F(t) {
                var e = this._longDateFormat[t],
                    n = this._longDateFormat[t.toUpperCase()];
                return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
                    return t.slice(1)
                }), this._longDateFormat[t])
            }

            function I() {
                return this._invalidDate
            }

            function O(t) {
                return this._ordinal.replace("%d", t)
            }

            function R(t, e, n, a) {
                var i = this._relativeTime[n];
                return D(i) ? i(t, e, n, a) : i.replace(/%d/i, t)
            }

            function L(t, e) {
                var n = this._relativeTime[t > 0 ? "future" : "past"];
                return D(n) ? n(e) : n.replace(/%s/i, e)
            }

            function W(t, e) {
                var n = t.toLowerCase();
                Ta[n] = Ta[n + "s"] = Ta[e] = t
            }

            function V(t) {
                return "string" == typeof t ? Ta[t] || Ta[t.toLowerCase()] : void 0
            }

            function B(t) {
                var e, n, a = {};
                for (n in t) d(t, n) && (e = V(n), e && (a[e] = t[n]));
                return a
            }

            function Y(t, e) {
                Pa[t] = e
            }

            function z(t) {
                var e = [];
                for (var n in t) e.push({
                    unit: n,
                    priority: Pa[n]
                });
                return e.sort(function(t, e) {
                    return t.priority - e.priority
                }), e
            }

            function H(t, e) {
                return function(a) {
                    return null != a ? (E(this, t, a), n.updateOffset(this, e), this) : N(this, t)
                }
            }

            function N(t, e) {
                return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
            }

            function E(t, e, n) {
                t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
            }

            function U(t) {
                return t = V(t), D(this[t]) ? this[t]() : this
            }

            function j(t, e) {
                if ("object" == typeof t) {
                    t = B(t);
                    for (var n = z(t), a = 0; a < n.length; a++) this[n[a].unit](t[n[a].unit])
                } else if (t = V(t), D(this[t])) return this[t](e);
                return this
            }

            function G(t, e, n) {
                var a = "" + Math.abs(t),
                    i = e - a.length,
                    r = t >= 0;
                return (r ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + a
            }

            function q(t, e, n, a) {
                var i = a;
                "string" == typeof a && (i = function() {
                    return this[a]()
                }), t && (Oa[t] = i), e && (Oa[e[0]] = function() {
                    return G(i.apply(this, arguments), e[1], e[2])
                }), n && (Oa[n] = function() {
                    return this.localeData().ordinal(i.apply(this, arguments), t)
                })
            }

            function Z(t) {
                return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
            }

            function J(t) {
                var e, n, a = t.match(Aa);
                for (e = 0, n = a.length; e < n; e++) Oa[a[e]] ? a[e] = Oa[a[e]] : a[e] = Z(a[e]);
                return function(e) {
                    var i, r = "";
                    for (i = 0; i < n; i++) r += a[i] instanceof Function ? a[i].call(e, t) : a[i];
                    return r
                }
            }

            function X(t, e) {
                return t.isValid() ? (e = K(e, t.localeData()), Ia[e] = Ia[e] || J(e), Ia[e](t)) : t.localeData().invalidDate()
            }

            function K(t, e) {
                function n(t) {
                    return e.longDateFormat(t) || t
                }
                var a = 5;
                for (Fa.lastIndex = 0; a >= 0 && Fa.test(t);) t = t.replace(Fa, n), Fa.lastIndex = 0, a -= 1;
                return t
            }

            function Q(t, e, n) {
                Ka[t] = D(e) ? e : function(t, a) {
                    return t && n ? n : e
                }
            }

            function $(t, e) {
                return d(Ka, t) ? Ka[t](e._strict, e._locale) : new RegExp(tt(t))
            }

            function tt(t) {
                return et(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, a, i) {
                    return e || n || a || i
                }))
            }

            function et(t) {
                return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function nt(t, e) {
                var n, a = e;
                for ("string" == typeof t && (t = [t]), "number" == typeof e && (a = function(t, n) {
                        n[e] = k(t)
                    }), n = 0; n < t.length; n++) Qa[t[n]] = a
            }

            function at(t, e) {
                nt(t, function(t, n, a, i) {
                    a._w = a._w || {}, e(t, a._w, a, i)
                })
            }

            function it(t, e, n) {
                null != e && d(Qa, t) && Qa[t](e, n._a, n, t)
            }

            function rt(t, e) {
                return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
            }

            function ot(t, e) {
                return t ? i(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || li).test(e) ? "format" : "standalone"][t.month()] : this._months
            }

            function st(t, e) {
                return t ? i(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[li.test(e) ? "format" : "standalone"][t.month()] : this._monthsShort
            }

            function lt(t, e, n) {
                var a, i, r, o = t.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) r = c([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(r, "").toLocaleLowerCase();
                return n ? "MMM" === e ? (i = ka.call(this._shortMonthsParse, o), i !== -1 ? i : null) : (i = ka.call(this._longMonthsParse, o), i !== -1 ? i : null) : "MMM" === e ? (i = ka.call(this._shortMonthsParse, o), i !== -1 ? i : (i = ka.call(this._longMonthsParse, o), i !== -1 ? i : null)) : (i = ka.call(this._longMonthsParse, o), i !== -1 ? i : (i = ka.call(this._shortMonthsParse, o), i !== -1 ? i : null))
            }

            function dt(t, e, n) {
                var a, i, r;
                if (this._monthsParseExact) return lt.call(this, t, e, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
                    if (i = c([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[a] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[a].test(t)) return a;
                    if (n && "MMM" === e && this._shortMonthsParse[a].test(t)) return a;
                    if (!n && this._monthsParse[a].test(t)) return a
                }
            }

            function ut(t, e) {
                var n;
                if (!t.isValid()) return t;
                if ("string" == typeof e)
                    if (/^\d+$/.test(e)) e = k(e);
                    else if (e = t.localeData().monthsParse(e), "number" != typeof e) return t;
                return n = Math.min(t.date(), rt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
            }

            function ct(t) {
                return null != t ? (ut(this, t), n.updateOffset(this, !0), this) : N(this, "Month")
            }

            function ht() {
                return rt(this.year(), this.month())
            }

            function ft(t) {
                return this._monthsParseExact ? (d(this, "_monthsRegex") || pt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = ci), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }

            function gt(t) {
                return this._monthsParseExact ? (d(this, "_monthsRegex") || pt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (d(this, "_monthsRegex") || (this._monthsRegex = hi), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
            }

            function pt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, a = [],
                    i = [],
                    r = [];
                for (e = 0; e < 12; e++) n = c([2e3, e]), a.push(this.monthsShort(n, "")), i.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
                for (a.sort(t), i.sort(t), r.sort(t), e = 0; e < 12; e++) a[e] = et(a[e]), i[e] = et(i[e]);
                for (e = 0; e < 24; e++) r[e] = et(r[e]);
                this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
            }

            function mt(t) {
                return vt(t) ? 366 : 365
            }

            function vt(t) {
                return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
            }

            function bt() {
                return vt(this.year())
            }

            function yt(t, e, n, a, i, r, o) {
                var s = new Date(t, e, n, a, i, r, o);
                return t < 100 && t >= 0 && isFinite(s.getFullYear()) && s.setFullYear(t), s
            }

            function xt(t) {
                var e = new Date(Date.UTC.apply(null, arguments));
                return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
            }

            function kt(t, e, n) {
                var a = 7 + e - n,
                    i = (7 + xt(t, 0, a).getUTCDay() - e) % 7;
                return -i + a - 1
            }

            function St(t, e, n, a, i) {
                var r, o, s = (7 + n - a) % 7,
                    l = kt(t, a, i),
                    d = 1 + 7 * (e - 1) + s + l;
                return d <= 0 ? (r = t - 1, o = mt(r) + d) : d > mt(t) ? (r = t + 1, o = d - mt(t)) : (r = t, o = d), {
                    year: r,
                    dayOfYear: o
                }
            }

            function _t(t, e, n) {
                var a, i, r = kt(t.year(), e, n),
                    o = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
                return o < 1 ? (i = t.year() - 1, a = o + wt(i, e, n)) : o > wt(t.year(), e, n) ? (a = o - wt(t.year(), e, n), i = t.year() + 1) : (i = t.year(), a = o), {
                    week: a,
                    year: i
                }
            }

            function wt(t, e, n) {
                var a = kt(t, e, n),
                    i = kt(t + 1, e, n);
                return (mt(t) - a + i) / 7
            }

            function Mt(t) {
                return _t(t, this._week.dow, this._week.doy).week
            }

            function Dt() {
                return this._week.dow
            }

            function Ct() {
                return this._week.doy
            }

            function Tt(t) {
                var e = this.localeData().week(this);
                return null == t ? e : this.add(7 * (t - e), "d")
            }

            function Pt(t) {
                var e = _t(this, 1, 4).week;
                return null == t ? e : this.add(7 * (t - e), "d")
            }

            function At(t, e) {
                return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
            }

            function Ft(t, e) {
                return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
            }

            function It(t, e) {
                return t ? i(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : this._weekdays
            }

            function Ot(t) {
                return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
            }

            function Rt(t) {
                return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
            }

            function Lt(t, e, n) {
                var a, i, r, o = t.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) r = c([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(r, "").toLocaleLowerCase();
                return n ? "dddd" === e ? (i = ka.call(this._weekdaysParse, o), i !== -1 ? i : null) : "ddd" === e ? (i = ka.call(this._shortWeekdaysParse, o), i !== -1 ? i : null) : (i = ka.call(this._minWeekdaysParse, o), i !== -1 ? i : null) : "dddd" === e ? (i = ka.call(this._weekdaysParse, o), i !== -1 ? i : (i = ka.call(this._shortWeekdaysParse, o), i !== -1 ? i : (i = ka.call(this._minWeekdaysParse, o), i !== -1 ? i : null))) : "ddd" === e ? (i = ka.call(this._shortWeekdaysParse, o), i !== -1 ? i : (i = ka.call(this._weekdaysParse, o), i !== -1 ? i : (i = ka.call(this._minWeekdaysParse, o), i !== -1 ? i : null))) : (i = ka.call(this._minWeekdaysParse, o), i !== -1 ? i : (i = ka.call(this._weekdaysParse, o), i !== -1 ? i : (i = ka.call(this._shortWeekdaysParse, o), i !== -1 ? i : null)))
            }

            function Wt(t, e, n) {
                var a, i, r;
                if (this._weekdaysParseExact) return Lt.call(this, t, e, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
                    if (i = c([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[a] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[a] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[a].test(t)) return a;
                    if (n && "ddd" === e && this._shortWeekdaysParse[a].test(t)) return a;
                    if (n && "dd" === e && this._minWeekdaysParse[a].test(t)) return a;
                    if (!n && this._weekdaysParse[a].test(t)) return a
                }
            }

            function Vt(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? (t = At(t, this.localeData()), this.add(t - e, "d")) : e
            }

            function Bt(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == t ? e : this.add(t - e, "d")
            }

            function Yt(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                if (null != t) {
                    var e = Ft(t, this.localeData());
                    return this.day(this.day() % 7 ? e : e - 7)
                }
                return this.day() || 7
            }

            function zt(t) {
                return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Et.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = bi), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }

            function Ht(t) {
                return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Et.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = yi), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }

            function Nt(t) {
                return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Et.call(this),
                    t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = xi), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }

            function Et() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, a, i, r, o = [],
                    s = [],
                    l = [],
                    d = [];
                for (e = 0; e < 7; e++) n = c([2e3, 1]).day(e), a = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), o.push(a), s.push(i), l.push(r), d.push(a), d.push(i), d.push(r);
                for (o.sort(t), s.sort(t), l.sort(t), d.sort(t), e = 0; e < 7; e++) s[e] = et(s[e]), l[e] = et(l[e]), d[e] = et(d[e]);
                this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
            }

            function Ut() {
                return this.hours() % 12 || 12
            }

            function jt() {
                return this.hours() || 24
            }

            function Gt(t, e) {
                q(t, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), e)
                })
            }

            function qt(t, e) {
                return e._meridiemParse
            }

            function Zt(t) {
                return "p" === (t + "").toLowerCase().charAt(0)
            }

            function Jt(t, e, n) {
                return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }

            function Xt(t) {
                return t ? t.toLowerCase().replace("_", "-") : t
            }

            function Kt(t) {
                for (var e, n, a, i, r = 0; r < t.length;) {
                    for (i = Xt(t[r]).split("-"), e = i.length, n = Xt(t[r + 1]), n = n ? n.split("-") : null; e > 0;) {
                        if (a = Qt(i.slice(0, e).join("-"))) return a;
                        if (n && n.length >= e && S(i, n, !0) >= e - 1) break;
                        e--
                    }
                    r++
                }
                return null
            }

            function Qt(n) {
                var a = null;
                if (!Mi[n] && "undefined" != typeof e && e && e.exports) try {
                    a = ki._abbr, t("./locale/" + n), $t(a)
                } catch (i) {}
                return Mi[n]
            }

            function $t(t, e) {
                var n;
                return t && (n = m(e) ? ne(t) : te(t, e), n && (ki = n)), ki._abbr
            }

            function te(t, e) {
                if (null !== e) {
                    var n = wi;
                    return e.abbr = t, null != Mi[t] ? (M("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Mi[t]._config) : null != e.parentLocale && (null != Mi[e.parentLocale] ? n = Mi[e.parentLocale]._config : M("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), Mi[t] = new P(T(n, e)), $t(t), Mi[t]
                }
                return delete Mi[t], null
            }

            function ee(t, e) {
                if (null != e) {
                    var n, a = wi;
                    null != Mi[t] && (a = Mi[t]._config), e = T(a, e), n = new P(e), n.parentLocale = Mi[t], Mi[t] = n, $t(t)
                } else null != Mi[t] && (null != Mi[t].parentLocale ? Mi[t] = Mi[t].parentLocale : null != Mi[t] && delete Mi[t]);
                return Mi[t]
            }

            function ne(t) {
                var e;
                if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ki;
                if (!i(t)) {
                    if (e = Qt(t)) return e;
                    t = [t]
                }
                return Kt(t)
            }

            function ae() {
                return xa(Mi)
            }

            function ie(t) {
                var e, n = t._a;
                return n && f(t).overflow === -2 && (e = n[ti] < 0 || n[ti] > 11 ? ti : n[ei] < 1 || n[ei] > rt(n[$a], n[ti]) ? ei : n[ni] < 0 || n[ni] > 24 || 24 === n[ni] && (0 !== n[ai] || 0 !== n[ii] || 0 !== n[ri]) ? ni : n[ai] < 0 || n[ai] > 59 ? ai : n[ii] < 0 || n[ii] > 59 ? ii : n[ri] < 0 || n[ri] > 999 ? ri : -1, f(t)._overflowDayOfYear && (e < $a || e > ei) && (e = ei), f(t)._overflowWeeks && e === -1 && (e = oi), f(t)._overflowWeekday && e === -1 && (e = si), f(t).overflow = e), t
            }

            function re(t) {
                var e, n, a, i, r, o, s = t._i,
                    l = Di.exec(s) || Ci.exec(s);
                if (l) {
                    for (f(t).iso = !0, e = 0, n = Pi.length; e < n; e++)
                        if (Pi[e][1].exec(l[1])) {
                            i = Pi[e][0], a = Pi[e][2] !== !1;
                            break
                        }
                    if (null == i) return void(t._isValid = !1);
                    if (l[3]) {
                        for (e = 0, n = Ai.length; e < n; e++)
                            if (Ai[e][1].exec(l[3])) {
                                r = (l[2] || " ") + Ai[e][0];
                                break
                            }
                        if (null == r) return void(t._isValid = !1)
                    }
                    if (!a && null != r) return void(t._isValid = !1);
                    if (l[4]) {
                        if (!Ti.exec(l[4])) return void(t._isValid = !1);
                        o = "Z"
                    }
                    t._f = i + (r || "") + (o || ""), ce(t)
                } else t._isValid = !1
            }

            function oe(t) {
                var e = Fi.exec(t._i);
                return null !== e ? void(t._d = new Date((+e[1]))) : (re(t), void(t._isValid === !1 && (delete t._isValid, n.createFromInputFallback(t))))
            }

            function se(t, e, n) {
                return null != t ? t : null != e ? e : n
            }

            function le(t) {
                var e = new Date(n.now());
                return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
            }

            function de(t) {
                var e, n, a, i, r = [];
                if (!t._d) {
                    for (a = le(t), t._w && null == t._a[ei] && null == t._a[ti] && ue(t), t._dayOfYear && (i = se(t._a[$a], a[$a]), t._dayOfYear > mt(i) && (f(t)._overflowDayOfYear = !0), n = xt(i, 0, t._dayOfYear), t._a[ti] = n.getUTCMonth(), t._a[ei] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = r[e] = a[e];
                    for (; e < 7; e++) t._a[e] = r[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                    24 === t._a[ni] && 0 === t._a[ai] && 0 === t._a[ii] && 0 === t._a[ri] && (t._nextDay = !0, t._a[ni] = 0), t._d = (t._useUTC ? xt : yt).apply(null, r), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[ni] = 24)
                }
            }

            function ue(t) {
                var e, n, a, i, r, o, s, l;
                e = t._w, null != e.GG || null != e.W || null != e.E ? (r = 1, o = 4, n = se(e.GG, t._a[$a], _t(ye(), 1, 4).year), a = se(e.W, 1), i = se(e.E, 1), (i < 1 || i > 7) && (l = !0)) : (r = t._locale._week.dow, o = t._locale._week.doy, n = se(e.gg, t._a[$a], _t(ye(), r, o).year), a = se(e.w, 1), null != e.d ? (i = e.d, (i < 0 || i > 6) && (l = !0)) : null != e.e ? (i = e.e + r, (e.e < 0 || e.e > 6) && (l = !0)) : i = r), a < 1 || a > wt(n, r, o) ? f(t)._overflowWeeks = !0 : null != l ? f(t)._overflowWeekday = !0 : (s = St(n, a, i, r, o), t._a[$a] = s.year, t._dayOfYear = s.dayOfYear)
            }

            function ce(t) {
                if (t._f === n.ISO_8601) return void re(t);
                t._a = [], f(t).empty = !0;
                var e, a, i, r, o, s = "" + t._i,
                    l = s.length,
                    d = 0;
                for (i = K(t._f, t._locale).match(Aa) || [], e = 0; e < i.length; e++) r = i[e], a = (s.match($(r, t)) || [])[0], a && (o = s.substr(0, s.indexOf(a)), o.length > 0 && f(t).unusedInput.push(o), s = s.slice(s.indexOf(a) + a.length), d += a.length), Oa[r] ? (a ? f(t).empty = !1 : f(t).unusedTokens.push(r), it(r, a, t)) : t._strict && !a && f(t).unusedTokens.push(r);
                f(t).charsLeftOver = l - d, s.length > 0 && f(t).unusedInput.push(s), t._a[ni] <= 12 && f(t).bigHour === !0 && t._a[ni] > 0 && (f(t).bigHour = void 0), f(t).parsedDateParts = t._a.slice(0), f(t).meridiem = t._meridiem, t._a[ni] = he(t._locale, t._a[ni], t._meridiem), de(t), ie(t)
            }

            function he(t, e, n) {
                var a;
                return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (a = t.isPM(n), a && e < 12 && (e += 12), a || 12 !== e || (e = 0), e) : e
            }

            function fe(t) {
                var e, n, a, i, r;
                if (0 === t._f.length) return f(t).invalidFormat = !0, void(t._d = new Date(NaN));
                for (i = 0; i < t._f.length; i++) r = 0, e = v({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[i], ce(e), g(e) && (r += f(e).charsLeftOver, r += 10 * f(e).unusedTokens.length, f(e).score = r, (null == a || r < a) && (a = r, n = e));
                u(t, n || e)
            }

            function ge(t) {
                if (!t._d) {
                    var e = B(t._i);
                    t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                        return t && parseInt(t, 10)
                    }), de(t)
                }
            }

            function pe(t) {
                var e = new b(ie(me(t)));
                return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
            }

            function me(t) {
                var e = t._i,
                    n = t._f;
                return t._locale = t._locale || ne(t._l), null === e || void 0 === n && "" === e ? p({
                    nullInput: !0
                }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), y(e) ? new b(ie(e)) : (i(n) ? fe(t) : s(e) ? t._d = e : n ? ce(t) : ve(t), g(t) || (t._d = null), t))
            }

            function ve(t) {
                var e = t._i;
                void 0 === e ? t._d = new Date(n.now()) : s(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? oe(t) : i(e) ? (t._a = l(e.slice(0), function(t) {
                    return parseInt(t, 10)
                }), de(t)) : "object" == typeof e ? ge(t) : "number" == typeof e ? t._d = new Date(e) : n.createFromInputFallback(t)
            }

            function be(t, e, n, a, s) {
                var l = {};
                return "boolean" == typeof n && (a = n, n = void 0), (r(t) && o(t) || i(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = s, l._l = n, l._i = t, l._f = e, l._strict = a, pe(l)
            }

            function ye(t, e, n, a) {
                return be(t, e, n, a, !1)
            }

            function xe(t, e) {
                var n, a;
                if (1 === e.length && i(e[0]) && (e = e[0]), !e.length) return ye();
                for (n = e[0], a = 1; a < e.length; ++a) e[a].isValid() && !e[a][t](n) || (n = e[a]);
                return n
            }

            function ke() {
                var t = [].slice.call(arguments, 0);
                return xe("isBefore", t)
            }

            function Se() {
                var t = [].slice.call(arguments, 0);
                return xe("isAfter", t)
            }

            function _e(t) {
                var e = B(t),
                    n = e.year || 0,
                    a = e.quarter || 0,
                    i = e.month || 0,
                    r = e.week || 0,
                    o = e.day || 0,
                    s = e.hour || 0,
                    l = e.minute || 0,
                    d = e.second || 0,
                    u = e.millisecond || 0;
                this._milliseconds = +u + 1e3 * d + 6e4 * l + 1e3 * s * 60 * 60, this._days = +o + 7 * r, this._months = +i + 3 * a + 12 * n, this._data = {}, this._locale = ne(), this._bubble()
            }

            function we(t) {
                return t instanceof _e
            }

            function Me(t) {
                return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t)
            }

            function De(t, e) {
                q(t, 0, 0, function() {
                    var t = this.utcOffset(),
                        n = "+";
                    return t < 0 && (t = -t, n = "-"), n + G(~~(t / 60), 2) + e + G(~~t % 60, 2)
                })
            }

            function Ce(t, e) {
                var n = (e || "").match(t) || [],
                    a = n[n.length - 1] || [],
                    i = (a + "").match(Li) || ["-", 0, 0],
                    r = +(60 * i[1]) + k(i[2]);
                return "+" === i[0] ? r : -r
            }

            function Te(t, e) {
                var a, i;
                return e._isUTC ? (a = e.clone(), i = (y(t) || s(t) ? t.valueOf() : ye(t).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + i), n.updateOffset(a, !1), a) : ye(t).local()
            }

            function Pe(t) {
                return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
            }

            function Ae(t, e) {
                var a, i = this._offset || 0;
                return this.isValid() ? null != t ? ("string" == typeof t ? t = Ce(Za, t) : Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && e && (a = Pe(this)), this._offset = t, this._isUTC = !0, null != a && this.add(a, "m"), i !== t && (!e || this._changeInProgress ? Ge(this, He(t - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? i : Pe(this) : null != t ? this : NaN
            }

            function Fe(t, e) {
                return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
            }

            function Ie(t) {
                return this.utcOffset(0, t)
            }

            function Oe(t) {
                return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Pe(this), "m")), this
            }

            function Re() {
                if (this._tzm) this.utcOffset(this._tzm);
                else if ("string" == typeof this._i) {
                    var t = Ce(qa, this._i);
                    0 === t ? this.utcOffset(0, !0) : this.utcOffset(Ce(qa, this._i))
                }
                return this
            }

            function Le(t) {
                return !!this.isValid() && (t = t ? ye(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0)
            }

            function We() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function Ve() {
                if (!m(this._isDSTShifted)) return this._isDSTShifted;
                var t = {};
                if (v(t, this), t = me(t), t._a) {
                    var e = t._isUTC ? c(t._a) : ye(t._a);
                    this._isDSTShifted = this.isValid() && S(t._a, e.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function Be() {
                return !!this.isValid() && !this._isUTC
            }

            function Ye() {
                return !!this.isValid() && this._isUTC
            }

            function ze() {
                return !!this.isValid() && (this._isUTC && 0 === this._offset)
            }

            function He(t, e) {
                var n, a, i, r = t,
                    o = null;
                return we(t) ? r = {
                    ms: t._milliseconds,
                    d: t._days,
                    M: t._months
                } : "number" == typeof t ? (r = {}, e ? r[e] = t : r.milliseconds = t) : (o = Wi.exec(t)) ? (n = "-" === o[1] ? -1 : 1, r = {
                    y: 0,
                    d: k(o[ei]) * n,
                    h: k(o[ni]) * n,
                    m: k(o[ai]) * n,
                    s: k(o[ii]) * n,
                    ms: k(Me(1e3 * o[ri])) * n
                }) : (o = Vi.exec(t)) ? (n = "-" === o[1] ? -1 : 1, r = {
                    y: Ne(o[2], n),
                    M: Ne(o[3], n),
                    w: Ne(o[4], n),
                    d: Ne(o[5], n),
                    h: Ne(o[6], n),
                    m: Ne(o[7], n),
                    s: Ne(o[8], n)
                }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (i = Ue(ye(r.from), ye(r.to)), r = {}, r.ms = i.milliseconds, r.M = i.months), a = new _e(r), we(t) && d(t, "_locale") && (a._locale = t._locale), a
            }

            function Ne(t, e) {
                var n = t && parseFloat(t.replace(",", "."));
                return (isNaN(n) ? 0 : n) * e
            }

            function Ee(t, e) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
            }

            function Ue(t, e) {
                var n;
                return t.isValid() && e.isValid() ? (e = Te(e, t), t.isBefore(e) ? n = Ee(t, e) : (n = Ee(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                    milliseconds: 0,
                    months: 0
                }
            }

            function je(t, e) {
                return function(n, a) {
                    var i, r;
                    return null === a || isNaN(+a) || (M(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = a, a = r), n = "string" == typeof n ? +n : n, i = He(n, a), Ge(this, i, t), this
                }
            }

            function Ge(t, e, a, i) {
                var r = e._milliseconds,
                    o = Me(e._days),
                    s = Me(e._months);
                t.isValid() && (i = null == i || i, r && t._d.setTime(t._d.valueOf() + r * a), o && E(t, "Date", N(t, "Date") + o * a), s && ut(t, N(t, "Month") + s * a), i && n.updateOffset(t, o || s))
            }

            function qe(t, e) {
                var n = t.diff(e, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }

            function Ze(t, e) {
                var a = t || ye(),
                    i = Te(a, this).startOf("day"),
                    r = n.calendarFormat(this, i) || "sameElse",
                    o = e && (D(e[r]) ? e[r].call(this, a) : e[r]);
                return this.format(o || this.localeData().calendar(r, this, ye(a)))
            }

            function Je() {
                return new b(this)
            }

            function Xe(t, e) {
                var n = y(t) ? t : ye(t);
                return !(!this.isValid() || !n.isValid()) && (e = V(m(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
            }

            function Ke(t, e) {
                var n = y(t) ? t : ye(t);
                return !(!this.isValid() || !n.isValid()) && (e = V(m(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
            }

            function Qe(t, e, n, a) {
                return a = a || "()", ("(" === a[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === a[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
            }

            function $e(t, e) {
                var n, a = y(t) ? t : ye(t);
                return !(!this.isValid() || !a.isValid()) && (e = V(e || "millisecond"), "millisecond" === e ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
            }

            function tn(t, e) {
                return this.isSame(t, e) || this.isAfter(t, e)
            }

            function en(t, e) {
                return this.isSame(t, e) || this.isBefore(t, e)
            }

            function nn(t, e, n) {
                var a, i, r, o;
                return this.isValid() ? (a = Te(t, this), a.isValid() ? (i = 6e4 * (a.utcOffset() - this.utcOffset()), e = V(e), "year" === e || "month" === e || "quarter" === e ? (o = an(this, a), "quarter" === e ? o /= 3 : "year" === e && (o /= 12)) : (r = this - a, o = "second" === e ? r / 1e3 : "minute" === e ? r / 6e4 : "hour" === e ? r / 36e5 : "day" === e ? (r - i) / 864e5 : "week" === e ? (r - i) / 6048e5 : r), n ? o : x(o)) : NaN) : NaN
            }

            function an(t, e) {
                var n, a, i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                    r = t.clone().add(i, "months");
                return e - r < 0 ? (n = t.clone().add(i - 1, "months"), a = (e - r) / (r - n)) : (n = t.clone().add(i + 1, "months"), a = (e - r) / (n - r)), -(i + a) || 0
            }

            function rn() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function on() {
                var t = this.clone().utc();
                return 0 < t.year() && t.year() <= 9999 ? D(Date.prototype.toISOString) ? this.toDate().toISOString() : X(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : X(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }

            function sn(t) {
                t || (t = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
                var e = X(this, t);
                return this.localeData().postformat(e)
            }

            function ln(t, e) {
                return this.isValid() && (y(t) && t.isValid() || ye(t).isValid()) ? He({
                    to: this,
                    from: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }

            function dn(t) {
                return this.from(ye(), t)
            }

            function un(t, e) {
                return this.isValid() && (y(t) && t.isValid() || ye(t).isValid()) ? He({
                    from: this,
                    to: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }

            function cn(t) {
                return this.to(ye(), t)
            }

            function hn(t) {
                var e;
                return void 0 === t ? this._locale._abbr : (e = ne(t), null != e && (this._locale = e), this)
            }

            function fn() {
                return this._locale
            }

            function gn(t) {
                switch (t = V(t)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                    case "date":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function pn(t) {
                return t = V(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
            }

            function mn() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }

            function vn() {
                return Math.floor(this.valueOf() / 1e3)
            }

            function bn() {
                return new Date(this.valueOf())
            }

            function yn() {
                var t = this;
                return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
            }

            function xn() {
                var t = this;
                return {
                    years: t.year(),
                    months: t.month(),
                    date: t.date(),
                    hours: t.hours(),
                    minutes: t.minutes(),
                    seconds: t.seconds(),
                    milliseconds: t.milliseconds()
                }
            }

            function kn() {
                return this.isValid() ? this.toISOString() : null
            }

            function Sn() {
                return g(this)
            }

            function _n() {
                return u({}, f(this))
            }

            function wn() {
                return f(this).overflow
            }

            function Mn() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }

            function Dn(t, e) {
                q(0, [t, t.length], 0, e)
            }

            function Cn(t) {
                return Fn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }

            function Tn(t) {
                return Fn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
            }

            function Pn() {
                return wt(this.year(), 1, 4)
            }

            function An() {
                var t = this.localeData()._week;
                return wt(this.year(), t.dow, t.doy)
            }

            function Fn(t, e, n, a, i) {
                var r;
                return null == t ? _t(this, a, i).year : (r = wt(t, a, i), e > r && (e = r), In.call(this, t, e, n, a, i))
            }

            function In(t, e, n, a, i) {
                var r = St(t, e, n, a, i),
                    o = xt(r.year, 0, r.dayOfYear);
                return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
            }

            function On(t) {
                return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
            }

            function Rn(t) {
                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add(t - e, "d")
            }

            function Ln(t, e) {
                e[ri] = k(1e3 * ("0." + t))
            }

            function Wn() {
                return this._isUTC ? "UTC" : ""
            }

            function Vn() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }

            function Bn(t) {
                return ye(1e3 * t)
            }

            function Yn() {
                return ye.apply(null, arguments).parseZone()
            }

            function zn(t) {
                return t
            }

            function Hn(t, e, n, a) {
                var i = ne(),
                    r = c().set(a, e);
                return i[n](r, t)
            }

            function Nn(t, e, n) {
                if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e) return Hn(t, e, n, "month");
                var a, i = [];
                for (a = 0; a < 12; a++) i[a] = Hn(t, a, n, "month");
                return i
            }

            function En(t, e, n, a) {
                "boolean" == typeof t ? ("number" == typeof e && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, "number" == typeof e && (n = e, e = void 0), e = e || "");
                var i = ne(),
                    r = t ? i._week.dow : 0;
                if (null != n) return Hn(e, (n + r) % 7, a, "day");
                var o, s = [];
                for (o = 0; o < 7; o++) s[o] = Hn(e, (o + r) % 7, a, "day");
                return s
            }

            function Un(t, e) {
                return Nn(t, e, "months")
            }

            function jn(t, e) {
                return Nn(t, e, "monthsShort")
            }

            function Gn(t, e, n) {
                return En(t, e, n, "weekdays")
            }

            function qn(t, e, n) {
                return En(t, e, n, "weekdaysShort")
            }

            function Zn(t, e, n) {
                return En(t, e, n, "weekdaysMin")
            }

            function Jn() {
                var t = this._data;
                return this._milliseconds = Ji(this._milliseconds), this._days = Ji(this._days), this._months = Ji(this._months), t.milliseconds = Ji(t.milliseconds), t.seconds = Ji(t.seconds), t.minutes = Ji(t.minutes), t.hours = Ji(t.hours), t.months = Ji(t.months), t.years = Ji(t.years), this
            }

            function Xn(t, e, n, a) {
                var i = He(e, n);
                return t._milliseconds += a * i._milliseconds, t._days += a * i._days, t._months += a * i._months, t._bubble()
            }

            function Kn(t, e) {
                return Xn(this, t, e, 1)
            }

            function Qn(t, e) {
                return Xn(this, t, e, -1)
            }

            function $n(t) {
                return t < 0 ? Math.floor(t) : Math.ceil(t)
            }

            function ta() {
                var t, e, n, a, i, r = this._milliseconds,
                    o = this._days,
                    s = this._months,
                    l = this._data;
                return r >= 0 && o >= 0 && s >= 0 || r <= 0 && o <= 0 && s <= 0 || (r += 864e5 * $n(na(s) + o), o = 0, s = 0), l.milliseconds = r % 1e3, t = x(r / 1e3), l.seconds = t % 60, e = x(t / 60), l.minutes = e % 60, n = x(e / 60), l.hours = n % 24, o += x(n / 24), i = x(ea(o)), s += i, o -= $n(na(i)), a = x(s / 12), s %= 12, l.days = o, l.months = s, l.years = a, this
            }

            function ea(t) {
                return 4800 * t / 146097
            }

            function na(t) {
                return 146097 * t / 4800
            }

            function aa(t) {
                var e, n, a = this._milliseconds;
                if (t = V(t), "month" === t || "year" === t) return e = this._days + a / 864e5, n = this._months + ea(e), "month" === t ? n : n / 12;
                switch (e = this._days + Math.round(na(this._months)), t) {
                    case "week":
                        return e / 7 + a / 6048e5;
                    case "day":
                        return e + a / 864e5;
                    case "hour":
                        return 24 * e + a / 36e5;
                    case "minute":
                        return 1440 * e + a / 6e4;
                    case "second":
                        return 86400 * e + a / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * e) + a;
                    default:
                        throw new Error("Unknown unit " + t)
                }
            }

            function ia() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12)
            }

            function ra(t) {
                return function() {
                    return this.as(t)
                }
            }

            function oa(t) {
                return t = V(t), this[t + "s"]()
            }

            function sa(t) {
                return function() {
                    return this._data[t]
                }
            }

            function la() {
                return x(this.days() / 7)
            }

            function da(t, e, n, a, i) {
                return i.relativeTime(e || 1, !!n, t, a)
            }

            function ua(t, e, n) {
                var a = He(t).abs(),
                    i = cr(a.as("s")),
                    r = cr(a.as("m")),
                    o = cr(a.as("h")),
                    s = cr(a.as("d")),
                    l = cr(a.as("M")),
                    d = cr(a.as("y")),
                    u = i < hr.s && ["s", i] || r <= 1 && ["m"] || r < hr.m && ["mm", r] || o <= 1 && ["h"] || o < hr.h && ["hh", o] || s <= 1 && ["d"] || s < hr.d && ["dd", s] || l <= 1 && ["M"] || l < hr.M && ["MM", l] || d <= 1 && ["y"] || ["yy", d];
                return u[2] = e, u[3] = +t > 0, u[4] = n, da.apply(null, u)
            }

            function ca(t) {
                return void 0 === t ? cr : "function" == typeof t && (cr = t, !0)
            }

            function ha(t, e) {
                return void 0 !== hr[t] && (void 0 === e ? hr[t] : (hr[t] = e, !0))
            }

            function fa(t) {
                var e = this.localeData(),
                    n = ua(this, !t, e);
                return t && (n = e.pastFuture(+this, n)), e.postformat(n)
            }

            function ga() {
                var t, e, n, a = fr(this._milliseconds) / 1e3,
                    i = fr(this._days),
                    r = fr(this._months);
                t = x(a / 60), e = x(t / 60), a %= 60, t %= 60, n = x(r / 12), r %= 12;
                var o = n,
                    s = r,
                    l = i,
                    d = e,
                    u = t,
                    c = a,
                    h = this.asSeconds();
                return h ? (h < 0 ? "-" : "") + "P" + (o ? o + "Y" : "") + (s ? s + "M" : "") + (l ? l + "D" : "") + (d || u || c ? "T" : "") + (d ? d + "H" : "") + (u ? u + "M" : "") + (c ? c + "S" : "") : "P0D"
            }
            var pa, ma;
            ma = Array.prototype.some ? Array.prototype.some : function(t) {
                for (var e = Object(this), n = e.length >>> 0, a = 0; a < n; a++)
                    if (a in e && t.call(this, e[a], a, e)) return !0;
                return !1
            };
            var va = n.momentProperties = [],
                ba = !1,
                ya = {};
            n.suppressDeprecationWarnings = !1, n.deprecationHandler = null;
            var xa;
            xa = Object.keys ? Object.keys : function(t) {
                var e, n = [];
                for (e in t) d(t, e) && n.push(e);
                return n
            };
            var ka, Sa = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                _a = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                wa = "Invalid date",
                Ma = "%d",
                Da = /\d{1,2}/,
                Ca = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                Ta = {},
                Pa = {},
                Aa = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                Fa = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                Ia = {},
                Oa = {},
                Ra = /\d/,
                La = /\d\d/,
                Wa = /\d{3}/,
                Va = /\d{4}/,
                Ba = /[+-]?\d{6}/,
                Ya = /\d\d?/,
                za = /\d\d\d\d?/,
                Ha = /\d\d\d\d\d\d?/,
                Na = /\d{1,3}/,
                Ea = /\d{1,4}/,
                Ua = /[+-]?\d{1,6}/,
                ja = /\d+/,
                Ga = /[+-]?\d+/,
                qa = /Z|[+-]\d\d:?\d\d/gi,
                Za = /Z|[+-]\d\d(?::?\d\d)?/gi,
                Ja = /[+-]?\d+(\.\d{1,3})?/,
                Xa = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                Ka = {},
                Qa = {},
                $a = 0,
                ti = 1,
                ei = 2,
                ni = 3,
                ai = 4,
                ii = 5,
                ri = 6,
                oi = 7,
                si = 8;
            ka = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                var e;
                for (e = 0; e < this.length; ++e)
                    if (this[e] === t) return e;
                return -1
            }, q("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }), q("MMM", 0, 0, function(t) {
                return this.localeData().monthsShort(this, t)
            }), q("MMMM", 0, 0, function(t) {
                return this.localeData().months(this, t)
            }), W("month", "M"), Y("month", 8), Q("M", Ya), Q("MM", Ya, La), Q("MMM", function(t, e) {
                return e.monthsShortRegex(t)
            }), Q("MMMM", function(t, e) {
                return e.monthsRegex(t)
            }), nt(["M", "MM"], function(t, e) {
                e[ti] = k(t) - 1
            }), nt(["MMM", "MMMM"], function(t, e, n, a) {
                var i = n._locale.monthsParse(t, a, n._strict);
                null != i ? e[ti] = i : f(n).invalidMonth = t
            });
            var li = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
                di = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                ui = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                ci = Xa,
                hi = Xa;
            q("Y", 0, 0, function() {
                var t = this.year();
                return t <= 9999 ? "" + t : "+" + t
            }), q(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }), q(0, ["YYYY", 4], 0, "year"), q(0, ["YYYYY", 5], 0, "year"), q(0, ["YYYYYY", 6, !0], 0, "year"), W("year", "y"), Y("year", 1), Q("Y", Ga), Q("YY", Ya, La), Q("YYYY", Ea, Va), Q("YYYYY", Ua, Ba), Q("YYYYYY", Ua, Ba), nt(["YYYYY", "YYYYYY"], $a), nt("YYYY", function(t, e) {
                e[$a] = 2 === t.length ? n.parseTwoDigitYear(t) : k(t)
            }), nt("YY", function(t, e) {
                e[$a] = n.parseTwoDigitYear(t)
            }), nt("Y", function(t, e) {
                e[$a] = parseInt(t, 10)
            }), n.parseTwoDigitYear = function(t) {
                return k(t) + (k(t) > 68 ? 1900 : 2e3)
            };
            var fi = H("FullYear", !0);
            q("w", ["ww", 2], "wo", "week"), q("W", ["WW", 2], "Wo", "isoWeek"), W("week", "w"), W("isoWeek", "W"), Y("week", 5), Y("isoWeek", 5), Q("w", Ya), Q("ww", Ya, La), Q("W", Ya), Q("WW", Ya, La), at(["w", "ww", "W", "WW"], function(t, e, n, a) {
                e[a.substr(0, 1)] = k(t)
            });
            var gi = {
                dow: 0,
                doy: 6
            };
            q("d", 0, "do", "day"), q("dd", 0, 0, function(t) {
                return this.localeData().weekdaysMin(this, t)
            }), q("ddd", 0, 0, function(t) {
                return this.localeData().weekdaysShort(this, t)
            }), q("dddd", 0, 0, function(t) {
                return this.localeData().weekdays(this, t)
            }), q("e", 0, 0, "weekday"), q("E", 0, 0, "isoWeekday"), W("day", "d"), W("weekday", "e"), W("isoWeekday", "E"), Y("day", 11), Y("weekday", 11), Y("isoWeekday", 11), Q("d", Ya), Q("e", Ya), Q("E", Ya), Q("dd", function(t, e) {
                return e.weekdaysMinRegex(t)
            }), Q("ddd", function(t, e) {
                return e.weekdaysShortRegex(t)
            }), Q("dddd", function(t, e) {
                return e.weekdaysRegex(t)
            }), at(["dd", "ddd", "dddd"], function(t, e, n, a) {
                var i = n._locale.weekdaysParse(t, a, n._strict);
                null != i ? e.d = i : f(n).invalidWeekday = t
            }), at(["d", "e", "E"], function(t, e, n, a) {
                e[a] = k(t)
            });
            var pi = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                mi = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                vi = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                bi = Xa,
                yi = Xa,
                xi = Xa;
            q("H", ["HH", 2], 0, "hour"), q("h", ["hh", 2], 0, Ut), q("k", ["kk", 2], 0, jt), q("hmm", 0, 0, function() {
                return "" + Ut.apply(this) + G(this.minutes(), 2)
            }), q("hmmss", 0, 0, function() {
                return "" + Ut.apply(this) + G(this.minutes(), 2) + G(this.seconds(), 2)
            }), q("Hmm", 0, 0, function() {
                return "" + this.hours() + G(this.minutes(), 2)
            }), q("Hmmss", 0, 0, function() {
                return "" + this.hours() + G(this.minutes(), 2) + G(this.seconds(), 2)
            }), Gt("a", !0), Gt("A", !1), W("hour", "h"), Y("hour", 13), Q("a", qt), Q("A", qt), Q("H", Ya), Q("h", Ya), Q("HH", Ya, La), Q("hh", Ya, La), Q("hmm", za), Q("hmmss", Ha), Q("Hmm", za), Q("Hmmss", Ha), nt(["H", "HH"], ni), nt(["a", "A"], function(t, e, n) {
                n._isPm = n._locale.isPM(t), n._meridiem = t
            }), nt(["h", "hh"], function(t, e, n) {
                e[ni] = k(t), f(n).bigHour = !0
            }), nt("hmm", function(t, e, n) {
                var a = t.length - 2;
                e[ni] = k(t.substr(0, a)), e[ai] = k(t.substr(a)), f(n).bigHour = !0
            }), nt("hmmss", function(t, e, n) {
                var a = t.length - 4,
                    i = t.length - 2;
                e[ni] = k(t.substr(0, a)), e[ai] = k(t.substr(a, 2)), e[ii] = k(t.substr(i)), f(n).bigHour = !0
            }), nt("Hmm", function(t, e, n) {
                var a = t.length - 2;
                e[ni] = k(t.substr(0, a)), e[ai] = k(t.substr(a))
            }), nt("Hmmss", function(t, e, n) {
                var a = t.length - 4,
                    i = t.length - 2;
                e[ni] = k(t.substr(0, a)), e[ai] = k(t.substr(a, 2)), e[ii] = k(t.substr(i))
            });
            var ki, Si = /[ap]\.?m?\.?/i,
                _i = H("Hours", !0),
                wi = {
                    calendar: Sa,
                    longDateFormat: _a,
                    invalidDate: wa,
                    ordinal: Ma,
                    ordinalParse: Da,
                    relativeTime: Ca,
                    months: di,
                    monthsShort: ui,
                    week: gi,
                    weekdays: pi,
                    weekdaysMin: vi,
                    weekdaysShort: mi,
                    meridiemParse: Si
                },
                Mi = {},
                Di = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                Ci = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                Ti = /Z|[+-]\d\d(?::?\d\d)?/,
                Pi = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                Ai = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                Fi = /^\/?Date\((\-?\d+)/i;
            n.createFromInputFallback = w("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
                t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
            }), n.ISO_8601 = function() {};
            var Ii = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var t = ye.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t < this ? this : t : p()
                }),
                Oi = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var t = ye.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t > this ? this : t : p()
                }),
                Ri = function() {
                    return Date.now ? Date.now() : +new Date
                };
            De("Z", ":"), De("ZZ", ""), Q("Z", Za), Q("ZZ", Za), nt(["Z", "ZZ"], function(t, e, n) {
                n._useUTC = !0, n._tzm = Ce(Za, t)
            });
            var Li = /([\+\-]|\d\d)/gi;
            n.updateOffset = function() {};
            var Wi = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Vi = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
            He.fn = _e.prototype;
            var Bi = je(1, "add"),
                Yi = je(-1, "subtract");
            n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var zi = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                return void 0 === t ? this.localeData() : this.locale(t)
            });
            q(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }), q(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }), Dn("gggg", "weekYear"), Dn("ggggg", "weekYear"), Dn("GGGG", "isoWeekYear"), Dn("GGGGG", "isoWeekYear"), W("weekYear", "gg"), W("isoWeekYear", "GG"), Y("weekYear", 1), Y("isoWeekYear", 1), Q("G", Ga), Q("g", Ga), Q("GG", Ya, La), Q("gg", Ya, La), Q("GGGG", Ea, Va), Q("gggg", Ea, Va), Q("GGGGG", Ua, Ba), Q("ggggg", Ua, Ba), at(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, a) {
                e[a.substr(0, 2)] = k(t)
            }), at(["gg", "GG"], function(t, e, a, i) {
                e[i] = n.parseTwoDigitYear(t)
            }), q("Q", 0, "Qo", "quarter"), W("quarter", "Q"), Y("quarter", 7), Q("Q", Ra), nt("Q", function(t, e) {
                e[ti] = 3 * (k(t) - 1)
            }), q("D", ["DD", 2], "Do", "date"), W("date", "D"), Y("date", 9), Q("D", Ya), Q("DD", Ya, La), Q("Do", function(t, e) {
                return t ? e._ordinalParse : e._ordinalParseLenient
            }), nt(["D", "DD"], ei), nt("Do", function(t, e) {
                e[ei] = k(t.match(Ya)[0], 10)
            });
            var Hi = H("Date", !0);
            q("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), W("dayOfYear", "DDD"), Y("dayOfYear", 4), Q("DDD", Na), Q("DDDD", Wa), nt(["DDD", "DDDD"], function(t, e, n) {
                n._dayOfYear = k(t)
            }), q("m", ["mm", 2], 0, "minute"), W("minute", "m"), Y("minute", 14), Q("m", Ya), Q("mm", Ya, La), nt(["m", "mm"], ai);
            var Ni = H("Minutes", !1);
            q("s", ["ss", 2], 0, "second"), W("second", "s"), Y("second", 15), Q("s", Ya), Q("ss", Ya, La), nt(["s", "ss"], ii);
            var Ei = H("Seconds", !1);
            q("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }), q(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }), q(0, ["SSS", 3], 0, "millisecond"), q(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }), q(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }), q(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }), q(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }), q(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }), q(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }), W("millisecond", "ms"), Y("millisecond", 16), Q("S", Na, Ra), Q("SS", Na, La), Q("SSS", Na, Wa);
            var Ui;
            for (Ui = "SSSS"; Ui.length <= 9; Ui += "S") Q(Ui, ja);
            for (Ui = "S"; Ui.length <= 9; Ui += "S") nt(Ui, Ln);
            var ji = H("Milliseconds", !1);
            q("z", 0, 0, "zoneAbbr"), q("zz", 0, 0, "zoneName");
            var Gi = b.prototype;
            Gi.add = Bi, Gi.calendar = Ze, Gi.clone = Je, Gi.diff = nn, Gi.endOf = pn, Gi.format = sn, Gi.from = ln, Gi.fromNow = dn, Gi.to = un, Gi.toNow = cn, Gi.get = U, Gi.invalidAt = wn, Gi.isAfter = Xe, Gi.isBefore = Ke, Gi.isBetween = Qe, Gi.isSame = $e, Gi.isSameOrAfter = tn, Gi.isSameOrBefore = en, Gi.isValid = Sn, Gi.lang = zi, Gi.locale = hn, Gi.localeData = fn, Gi.max = Oi, Gi.min = Ii, Gi.parsingFlags = _n, Gi.set = j, Gi.startOf = gn, Gi.subtract = Yi, Gi.toArray = yn, Gi.toObject = xn, Gi.toDate = bn, Gi.toISOString = on, Gi.toJSON = kn, Gi.toString = rn, Gi.unix = vn, Gi.valueOf = mn, Gi.creationData = Mn, Gi.year = fi, Gi.isLeapYear = bt, Gi.weekYear = Cn, Gi.isoWeekYear = Tn, Gi.quarter = Gi.quarters = On, Gi.month = ct, Gi.daysInMonth = ht, Gi.week = Gi.weeks = Tt, Gi.isoWeek = Gi.isoWeeks = Pt, Gi.weeksInYear = An, Gi.isoWeeksInYear = Pn, Gi.date = Hi, Gi.day = Gi.days = Vt, Gi.weekday = Bt, Gi.isoWeekday = Yt, Gi.dayOfYear = Rn, Gi.hour = Gi.hours = _i, Gi.minute = Gi.minutes = Ni, Gi.second = Gi.seconds = Ei, Gi.millisecond = Gi.milliseconds = ji, Gi.utcOffset = Ae, Gi.utc = Ie, Gi.local = Oe, Gi.parseZone = Re, Gi.hasAlignedHourOffset = Le, Gi.isDST = We, Gi.isLocal = Be, Gi.isUtcOffset = Ye, Gi.isUtc = ze, Gi.isUTC = ze, Gi.zoneAbbr = Wn, Gi.zoneName = Vn, Gi.dates = w("dates accessor is deprecated. Use date instead.", Hi), Gi.months = w("months accessor is deprecated. Use month instead", ct), Gi.years = w("years accessor is deprecated. Use year instead", fi), Gi.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Fe), Gi.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ve);
            var qi = Gi,
                Zi = P.prototype;
            Zi.calendar = A, Zi.longDateFormat = F, Zi.invalidDate = I, Zi.ordinal = O, Zi.preparse = zn, Zi.postformat = zn, Zi.relativeTime = R, Zi.pastFuture = L, Zi.set = C, Zi.months = ot, Zi.monthsShort = st, Zi.monthsParse = dt, Zi.monthsRegex = gt, Zi.monthsShortRegex = ft, Zi.week = Mt, Zi.firstDayOfYear = Ct, Zi.firstDayOfWeek = Dt, Zi.weekdays = It, Zi.weekdaysMin = Rt, Zi.weekdaysShort = Ot,
                Zi.weekdaysParse = Wt, Zi.weekdaysRegex = zt, Zi.weekdaysShortRegex = Ht, Zi.weekdaysMinRegex = Nt, Zi.isPM = Zt, Zi.meridiem = Jt, $t("en", {
                    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(t) {
                        var e = t % 10,
                            n = 1 === k(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                        return t + n
                    }
                }), n.lang = w("moment.lang is deprecated. Use moment.locale instead.", $t), n.langData = w("moment.langData is deprecated. Use moment.localeData instead.", ne);
            var Ji = Math.abs,
                Xi = ra("ms"),
                Ki = ra("s"),
                Qi = ra("m"),
                $i = ra("h"),
                tr = ra("d"),
                er = ra("w"),
                nr = ra("M"),
                ar = ra("y"),
                ir = sa("milliseconds"),
                rr = sa("seconds"),
                or = sa("minutes"),
                sr = sa("hours"),
                lr = sa("days"),
                dr = sa("months"),
                ur = sa("years"),
                cr = Math.round,
                hr = {
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                fr = Math.abs,
                gr = _e.prototype;
            gr.abs = Jn, gr.add = Kn, gr.subtract = Qn, gr.as = aa, gr.asMilliseconds = Xi, gr.asSeconds = Ki, gr.asMinutes = Qi, gr.asHours = $i, gr.asDays = tr, gr.asWeeks = er, gr.asMonths = nr, gr.asYears = ar, gr.valueOf = ia, gr._bubble = ta, gr.get = oa, gr.milliseconds = ir, gr.seconds = rr, gr.minutes = or, gr.hours = sr, gr.days = lr, gr.weeks = la, gr.months = dr, gr.years = ur, gr.humanize = fa, gr.toISOString = ga, gr.toString = ga, gr.toJSON = ga, gr.locale = hn, gr.localeData = fn, gr.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ga), gr.lang = zi, q("X", 0, 0, "unix"), q("x", 0, 0, "valueOf"), Q("x", Ga), Q("X", Ja), nt("X", function(t, e, n) {
                n._d = new Date(1e3 * parseFloat(t, 10))
            }), nt("x", function(t, e, n) {
                n._d = new Date(k(t))
            }), n.version = "2.15.1", a(ye), n.fn = qi, n.min = ke, n.max = Se, n.now = Ri, n.utc = c, n.unix = Bn, n.months = Un, n.isDate = s, n.locale = $t, n.invalid = p, n.duration = He, n.isMoment = y, n.weekdays = Gn, n.parseZone = Yn, n.localeData = ne, n.isDuration = we, n.monthsShort = jn, n.weekdaysMin = Zn, n.defineLocale = te, n.updateLocale = ee, n.locales = ae, n.weekdaysShort = qn, n.normalizeUnits = V, n.relativeTimeRounding = ca, n.relativeTimeThreshold = ha, n.calendarFormat = qe, n.prototype = qi;
            var pr = n;
            return pr
        })
    }, {}],
    45: [function(t, e, n) {
        "use strict";

        function a(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = function(t) {
            var e, n = function() {
                    var t = u(c);
                    h.forEach(function(e, n) {
                        e.data = d(), e.backgroundColor = t[n]
                    })
                },
                a = {
                    min: -100,
                    max: 100
                },
                i = new r["default"].Bubble(t, {
                    data: {
                        datasets: h
                    },
                    options: {
                        legend: {
                            display: !1
                        },
                        elements: {
                            point: {
                                borderColor: "rgba(0,0,0,0)",
                                hoverRadius: 0
                            }
                        },
                        animation: {
                            onComplete: function() {
                                e && clearTimeout(e), e = setTimeout(function() {
                                    n(), i.update()
                                }, 1e3)
                            }
                        },
                        scales: {
                            xAxes: [{
                                display: !1,
                                ticks: a
                            }],
                            yAxes: [{
                                display: !1,
                                ticks: a
                            }]
                        }
                    }
                })
        };
        var i = t("chart.js"),
            r = a(i),
            o = t("../colours.js"),
            s = function() {
                return (Math.random() > .5 ? 1 : -1) * Math.round(85 * Math.random())
            },
            l = function() {
                var t = Math.abs(s()) / 5;
                return {
                    x: s(),
                    y: s(),
                    r: t
                }
            },
            d = function() {
                for (var t = arguments.length <= 0 || void 0 === arguments[0] ? 10 : arguments[0], e = [], n = t - 1; n >= 0; n--) e.push(l());
                return e
            },
            u = function(t) {
                for (var e = t.length; e > 0;) {
                    var n = Math.floor(Math.random() * e);
                    e--;
                    var a = t[e];
                    t[e] = t[n], t[n] = a
                }
                return t
            },
            c = [o.grey, o.red, o.yellow, o.blue, o.green],
            h = [{
                backgroundColor: o.grey,
                data: d()
            }, {
                backgroundColor: o.red,
                data: d()
            }, {
                backgroundColor: o.blue,
                data: d()
            }, {
                backgroundColor: o.yellow,
                data: d()
            }, {
                backgroundColor: o.green,
                data: d()
            }]
    }, {
        "../colours.js": 49,
        "chart.js": 1
    }],
    46: [function(t, e, n) {
        "use strict";

        function a(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e["default"] = t, e
        }

        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = function(t) {
            var e = o["default"].helpers.color(l.red),
                n = {
                    datasets: [{
                        borderColor: e.alpha(1).rgbaString(),
                        backgroundColor: e.alpha(.5).rgbaString(),
                        pointBorderColor: e.alpha(1).rgbaString(),
                        pointBackgroundColor: "#FFFFFF",
                        pointBorderWidth: 2,
                        data: [{
                            x: 1,
                            y: -.01711
                        }, {
                            x: 1.58,
                            y: -.04285
                        }, {
                            x: 2.51,
                            y: -.1068
                        }, {
                            x: 3.98,
                            y: -.2635
                        }, {
                            x: 6.31,
                            y: -.6339
                        }, {
                            x: 10,
                            y: -1.445
                        }, {
                            x: 15.8,
                            y: -2.992
                        }, {
                            x: 25.1,
                            y: -5.429
                        }, {
                            x: 39.8,
                            y: -8.607
                        }, {
                            x: 63.1,
                            y: -12.23
                        }, {
                            x: 100,
                            y: -16.07
                        }]
                    }]
                };
            new o["default"].Scatter(t, {
                data: n,
                options: {
                    legend: {
                        display: !1
                    },
                    elements: {
                        point: {
                            radius: 4
                        }
                    },
                    scales: {
                        xAxes: [{
                            type: "logarithmic",
                            position: "top",
                            gridLines: {
                                color: "rgba(231,233,237,0.5)",
                                zeroLineColor: "rgba(231,233,237,1)"
                            },
                            ticks: {
                                userCallback: function(t) {
                                    var e = t / Math.pow(10, Math.floor(o["default"].helpers.log10(t)));
                                    return 1 === e || 2 === e || 5 === e ? t.toString() : ""
                                }
                            }
                        }],
                        yAxes: [{
                            type: "linear",
                            gridLines: {
                                color: "rgba(231,233,237,0.5)",
                                zeroLineColor: "rgba(231,233,237,1)"
                            },
                            ticks: {
                                display: !1
                            }
                        }]
                    }
                }
            })
        };
        var r = t("chart.js"),
            o = i(r),
            s = t("../colours.js"),
            l = a(s)
    }, {
        "../colours.js": 49,
        "chart.js": 1
    }],
    47: [function(t, e, n) {
        "use strict";

        function a(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = function(t) {
            for (var e, n = function() {
                    return 80 * Math.random() + 20
                }, a = 100, i = function() {
                    return Math.round(Math.random() * a)
                }, o = [], s = a - 1; s >= 0; s--) o.push(n());
            var l = {
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        legend: {
                            display: !1
                        },
                        scales: {
                            yAxes: [{
                                display: !1,
                                ticks: {
                                    beginAtZero: !0
                                }
                            }],
                            xAxes: [{
                                display: !1
                            }]
                        },
                        animation: {
                            onComplete: function() {
                                e && clearTimeout(e), e = setTimeout(function() {
                                    for (var t = i(), e = t - 1; e >= 0; e--) o[i()] = n();
                                    d.update()
                                }, 2e3)
                            }
                        }
                    },
                    data: {
                        labels: new Array(a),
                        datasets: [{
                            backgroundColor: "rgba(0,0,0,0.05)",
                            hoverBackgroundColor: "rgba(0,0,0,0.1)",
                            data: o
                        }]
                    }
                },
                d = new r["default"].Bar(t, l)
        };
        var i = t("chart.js"),
            r = a(i)
    }, {
        "chart.js": 1
    }],
    48: [function(t, e, n) {
        "use strict";

        function a(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e["default"] = t, e
        }

        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = function(t) {
            var e = {
                    labels: ["A", "B", "C", "D", "E", "F", "G"],
                    datasets: [{
                        type: "bar",
                        backgroundColor: l.mauve,
                        data: [d(), d(), d(), d(), d(), d(), d()],
                        borderColor: "white",
                        borderWidth: 2
                    }, {
                        type: "bar",
                        backgroundColor: l.blue,
                        data: [d(), d(), d(), d(), d(), d(), d()],
                        borderColor: "white",
                        borderWidth: 2
                    }, {
                        type: "line",
                        backgroundColor: o["default"].helpers.color(l.yellow).alpha(.5).rgbaString(),
                        data: [d(), d(), d(), d(), d(), d(), d()],
                        borderColor: o["default"].helpers.color(l.yellow).alpha(1).rgbaString(),
                        borderWidth: 1,
                        pointBorderColor: o["default"].helpers.color(l.yellow).alpha(1).rgbaString(),
                        pointBorderWidth: 2,
                        pointBackgroundColor: "white"
                    }]
                },
                n = o["default"].helpers.color(l.grey).alpha(.5).rgbaString(),
                a = o["default"].helpers.color(l.grey).alpha(1).rgbaString();
            new o["default"].Bar(t, {
                data: e,
                options: {
                    tooltips: {
                        enabled: !1
                    },
                    elements: {
                        point: {
                            radius: 4
                        }
                    },
                    scales: {
                        xAxes: [{
                            barPercentage: .75,
                            gridLines: {
                                color: n,
                                zeroLineColor: a
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: n,
                                zeroLineColor: a
                            },
                            ticks: {
                                display: !1
                            }
                        }]
                    },
                    responsive: !0,
                    legend: {
                        display: !1
                    }
                }
            })
        };
        var r = t("chart.js"),
            o = i(r),
            s = t("../colours.js"),
            l = a(s),
            d = function() {
                return Math.round(100 * Math.random())
            }
    }, {
        "../colours.js": 49,
        "chart.js": 1
    }],
    49: [function(t, e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.red = "rgba(255,99,132,0.8)", n.yellow = "rgba(255,205,86,0.8)", n.blue = "rgba(54,162,235,0.8)", n.green = "rgba(75,192,192,0.8)", n.grey = "rgba(231,233,237,0.8)", n.mauve = "rgba(179,181,198,0.8)"
    }, {}],
    50: [function(t, e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = function(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? [1, 0] : arguments[1],
                n = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
                a = document.getElementById(t),
                i = a.querySelectorAll("canvas")[n],
                r = a.querySelectorAll("code.lang-javascript"),
                o = e.map(function(t) {
                    return r[t].textContent
                }).join("");
            try {
                new Function(["ctx", "options"], o)(i, {})
            } catch (s) {}
        }
    }, {}],
    51: [function(t, e, n) {
        "use strict";

        function a(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        var i = t("chart.js"),
            r = a(i),
            o = t("./charts/backgroundBars"),
            s = a(o),
            l = t("./charts/mixedTypes"),
            d = a(l),
            u = t("./charts/axisTypes"),
            c = a(u),
            h = t("./charts/animatedChart"),
            f = a(h),
            g = t("./docs.js"),
            p = a(g);
        ! function() {
            document.location.pathname.match(/\/docs/) ? ((0, p["default"])("bar-chart", [2, 0]), (0, p["default"])("line-chart", [2, 1]), (0, p["default"])("radar-chart"), (0, p["default"])("polar-area-chart"), (0, p["default"])("doughnut-pie-chart", [2, 0]), (0, p["default"])("doughnut-pie-chart", [2, 1], 1), (0, p["default"])("bubble-chart")) : (r["default"].defaults.global.tooltips.enabled = !1, (0, s["default"])(document.getElementById("background-bar").getContext("2d")), (0, d["default"])(document.getElementById("mixed-chart").getContext("2d")), (0, c["default"])(document.getElementById("axis-chart").getContext("2d")), (0, f["default"])(document.getElementById("animate-chart").getContext("2d")))
        }()
    }, {
        "./charts/animatedChart": 45,
        "./charts/axisTypes": 46,
        "./charts/backgroundBars": 47,
        "./charts/mixedTypes": 48,
        "./docs.js": 50,
        "chart.js": 1
    }]
}, {}, [51]);