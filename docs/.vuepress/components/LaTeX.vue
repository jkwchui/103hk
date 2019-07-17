<template>
    <vue-mathjax :formula="parsed" />
</template>

<script>
import { VueMathjax } from 'vue-mathjax'

    export default {
        beforeMount() {

               window.MathJax = {
                extensions: ["tex2jax.js"],
                TeX: {
                    equationNumbers: {
                        autoNumber: "AMS"
                    },
                    extensions: ["[mhchem]/mhchem.js", "cancel.js"],
                    Macros: {
                        gas: ["{\\color{#ad1644}\\mathrm{_{(g)}}}"],
                        liquid: ["{\\color{#e6a23c}\\mathrm{_{(l)}}}"],
                        solid: ["{\\color{#2F4F4F}\\mathrm{_{(s)}}}"],
                        aq: ["{\\color{#0064a6}\\mathrm{_{(aq)}}}"],
                        cmc: ["{\\mathrm{cm^{3}}}"],
                        dmc: ["{\\mathrm{dm^{3}}}"],
                        molar: ["{\\mathrm{mol \\cdot{} dm^{-3}}}"],
                        kilo: ["{\\mathrm{k}}"],
                        milli: ["{\\mathrm{m}}"],
                        micro: ["{\\mu}"],
                        nano: ["{\\mathrm{n}}"],
                        angstrom: ["{\\unicode{x212B}}"],
                        joule: ["{\\mathrm{J}}"],
                        kelvin: ["{\\mathrm{K}}"],
                        pascal: ["{\\mathrm{Pa}}"],
                        meter: ["{\\mathrm{m}}"],
                        cubed: ["{\\mathrm{^{3}}}"],
                        celsius: ["{\\mathrm{^{\\circ}C}}"],
                    }
                },
                tex2jax: {
                    inlineMath: [
                        ['$', '$'],
                        ["\\(", "\\)"]
                    ],
                    displayMath: [
                        ['$$', '$$'],
                        ["\\[", "\\]"]
                    ],
                    processEscapes: true
                },
                mhchem: {
                    legacy: false
                },
                AuthorInit: function () {
                    MathJax.Ajax.config.path["mhchem"] = "https://cdnjs.cloudflare.com/ajax/libs/mathjax-mhchem/3.3.0";
                }
            };

            var body = document.getElementsByTagName("body")[0], script;
            script = document.createElement("script");
            script.type = "text/x-mathjax-config";
            script.src="../siunitx.js";
            body.appendChild(script);
            script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-AMS_SVG";
            body.appendChild(script);
        },
        components: {
            'vue-mathjax': VueMathjax
        },
        data () {
            return {
            // formula: '$$\\ce{H2SO4\\aq{} <=> H+ + HSO4^-} = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$'
            }
        },
        props: {
            formula: String,
            inline: Boolean
        },
        computed: {
            parsed: function () {
                if (this.inline === true)
                    return '$' + this.formula + '$'
                else
                    return '$$' + this.formula + '$$'
            }
        }
    }
</script>