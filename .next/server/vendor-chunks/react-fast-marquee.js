/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-fast-marquee";
exports.ids = ["vendor-chunks/react-fast-marquee"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-fast-marquee/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-fast-marquee/dist/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("/* __next_internal_client_entry_do_not_use__  cjs */ \nfunction ___$insertStyle(css) {\n    if (!css || \"undefined\" === 'undefined') {\n        return;\n    }\n    const style = document.createElement('style');\n    style.setAttribute('type', 'text/css');\n    style.innerHTML = css;\n    document.head.appendChild(style);\n    return css;\n}\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nvar React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\nfunction _interopDefaultLegacy(e) {\n    return e && typeof e === 'object' && 'default' in e ? e : {\n        'default': e\n    };\n}\nvar React__default = /*#__PURE__*/ _interopDefaultLegacy(React);\n___$insertStyle(\".rfm-marquee-container {\\n  overflow-x: hidden;\\n  display: flex;\\n  flex-direction: row;\\n  position: relative;\\n  width: var(--width);\\n  transform: var(--transform);\\n}\\n.rfm-marquee-container:hover div {\\n  animation-play-state: var(--pause-on-hover);\\n}\\n.rfm-marquee-container:active div {\\n  animation-play-state: var(--pause-on-click);\\n}\\n\\n.rfm-overlay {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n}\\n.rfm-overlay::before, .rfm-overlay::after {\\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\\n  content: \\\"\\\";\\n  height: 100%;\\n  position: absolute;\\n  width: var(--gradient-width);\\n  z-index: 2;\\n  pointer-events: none;\\n  touch-action: none;\\n}\\n.rfm-overlay::after {\\n  right: 0;\\n  top: 0;\\n  transform: rotateZ(180deg);\\n}\\n.rfm-overlay::before {\\n  left: 0;\\n  top: 0;\\n}\\n\\n.rfm-marquee {\\n  flex: 0 0 auto;\\n  min-width: var(--min-width);\\n  z-index: 1;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\\n  animation-play-state: var(--play);\\n  animation-delay: var(--delay);\\n  animation-direction: var(--direction);\\n}\\n@keyframes scroll {\\n  0% {\\n    transform: translateX(0%);\\n  }\\n  100% {\\n    transform: translateX(-100%);\\n  }\\n}\\n\\n.rfm-initial-child-container {\\n  flex: 0 0 auto;\\n  display: flex;\\n  min-width: auto;\\n  flex-direction: row;\\n  align-items: center;\\n}\\n\\n.rfm-child {\\n  transform: var(--transform);\\n}\");\nconst Marquee = React.forwardRef(function Marquee({ style = {}, className = \"\", autoFill = false, play = true, pauseOnHover = false, pauseOnClick = false, direction = \"left\", speed = 50, delay = 0, loop = 0, gradient = false, gradientColor = \"white\", gradientWidth = 200, onFinish, onCycleComplete, onMount, children }, ref) {\n    // React Hooks\n    const [containerWidth, setContainerWidth] = React.useState(0);\n    const [marqueeWidth, setMarqueeWidth] = React.useState(0);\n    const [multiplier, setMultiplier] = React.useState(1);\n    const [isMounted, setIsMounted] = React.useState(false);\n    const rootRef = React.useRef(null);\n    const containerRef = ref || rootRef;\n    const marqueeRef = React.useRef(null);\n    // Calculate width of container and marquee and set multiplier\n    const calculateWidth = React.useCallback({\n        \"Marquee.Marquee.useCallback[calculateWidth]\": ()=>{\n            if (marqueeRef.current && containerRef.current) {\n                const containerRect = containerRef.current.getBoundingClientRect();\n                const marqueeRect = marqueeRef.current.getBoundingClientRect();\n                let containerWidth = containerRect.width;\n                let marqueeWidth = marqueeRect.width;\n                // Swap width and height if direction is up or down\n                if (direction === \"up\" || direction === \"down\") {\n                    containerWidth = containerRect.height;\n                    marqueeWidth = marqueeRect.height;\n                }\n                if (autoFill && containerWidth && marqueeWidth) {\n                    setMultiplier(marqueeWidth < containerWidth ? Math.ceil(containerWidth / marqueeWidth) : 1);\n                } else {\n                    setMultiplier(1);\n                }\n                setContainerWidth(containerWidth);\n                setMarqueeWidth(marqueeWidth);\n            }\n        }\n    }[\"Marquee.Marquee.useCallback[calculateWidth]\"], [\n        autoFill,\n        containerRef,\n        direction\n    ]);\n    // Calculate width and multiplier on mount and on window resize\n    React.useEffect({\n        \"Marquee.Marquee.useEffect\": ()=>{\n            if (!isMounted) return;\n            calculateWidth();\n            if (marqueeRef.current && containerRef.current) {\n                const resizeObserver = new ResizeObserver({\n                    \"Marquee.Marquee.useEffect\": ()=>calculateWidth()\n                }[\"Marquee.Marquee.useEffect\"]);\n                resizeObserver.observe(containerRef.current);\n                resizeObserver.observe(marqueeRef.current);\n                return ({\n                    \"Marquee.Marquee.useEffect\": ()=>{\n                        if (!resizeObserver) return;\n                        resizeObserver.disconnect();\n                    }\n                })[\"Marquee.Marquee.useEffect\"];\n            }\n        }\n    }[\"Marquee.Marquee.useEffect\"], [\n        calculateWidth,\n        containerRef,\n        isMounted\n    ]);\n    // Recalculate width when children change\n    React.useEffect({\n        \"Marquee.Marquee.useEffect\": ()=>{\n            calculateWidth();\n        }\n    }[\"Marquee.Marquee.useEffect\"], [\n        calculateWidth,\n        children\n    ]);\n    React.useEffect({\n        \"Marquee.Marquee.useEffect\": ()=>{\n            setIsMounted(true);\n        }\n    }[\"Marquee.Marquee.useEffect\"], []);\n    // Runs the onMount callback, if it is a function, when Marquee is mounted.\n    React.useEffect({\n        \"Marquee.Marquee.useEffect\": ()=>{\n            if (typeof onMount === \"function\") {\n                onMount();\n            }\n        }\n    }[\"Marquee.Marquee.useEffect\"], []);\n    // Animation duration\n    const duration = React.useMemo({\n        \"Marquee.Marquee.useMemo[duration]\": ()=>{\n            if (autoFill) {\n                return marqueeWidth * multiplier / speed;\n            } else {\n                return marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed;\n            }\n        }\n    }[\"Marquee.Marquee.useMemo[duration]\"], [\n        autoFill,\n        containerWidth,\n        marqueeWidth,\n        multiplier,\n        speed\n    ]);\n    const containerStyle = React.useMemo({\n        \"Marquee.Marquee.useMemo[containerStyle]\": ()=>Object.assign(Object.assign({}, style), {\n                [\"--pause-on-hover\"]: !play || pauseOnHover ? \"paused\" : \"running\",\n                [\"--pause-on-click\"]: !play || pauseOnHover && !pauseOnClick || pauseOnClick ? \"paused\" : \"running\",\n                [\"--width\"]: direction === \"up\" || direction === \"down\" ? `100vh` : \"100%\",\n                [\"--transform\"]: direction === \"up\" ? \"rotate(-90deg)\" : direction === \"down\" ? \"rotate(90deg)\" : \"none\"\n            })\n    }[\"Marquee.Marquee.useMemo[containerStyle]\"], [\n        style,\n        play,\n        pauseOnHover,\n        pauseOnClick,\n        direction\n    ]);\n    const gradientStyle = React.useMemo({\n        \"Marquee.Marquee.useMemo[gradientStyle]\": ()=>({\n                [\"--gradient-color\"]: gradientColor,\n                [\"--gradient-width\"]: typeof gradientWidth === \"number\" ? `${gradientWidth}px` : gradientWidth\n            })\n    }[\"Marquee.Marquee.useMemo[gradientStyle]\"], [\n        gradientColor,\n        gradientWidth\n    ]);\n    const marqueeStyle = React.useMemo({\n        \"Marquee.Marquee.useMemo[marqueeStyle]\": ()=>({\n                [\"--play\"]: play ? \"running\" : \"paused\",\n                [\"--direction\"]: direction === \"left\" ? \"normal\" : \"reverse\",\n                [\"--duration\"]: `${duration}s`,\n                [\"--delay\"]: `${delay}s`,\n                [\"--iteration-count\"]: !!loop ? `${loop}` : \"infinite\",\n                [\"--min-width\"]: autoFill ? `auto` : \"100%\"\n            })\n    }[\"Marquee.Marquee.useMemo[marqueeStyle]\"], [\n        play,\n        direction,\n        duration,\n        delay,\n        loop,\n        autoFill\n    ]);\n    const childStyle = React.useMemo({\n        \"Marquee.Marquee.useMemo[childStyle]\": ()=>({\n                [\"--transform\"]: direction === \"up\" ? \"rotate(90deg)\" : direction === \"down\" ? \"rotate(-90deg)\" : \"none\"\n            })\n    }[\"Marquee.Marquee.useMemo[childStyle]\"], [\n        direction\n    ]);\n    // Render {multiplier} number of children\n    const multiplyChildren = React.useCallback({\n        \"Marquee.Marquee.useCallback[multiplyChildren]\": (multiplier)=>{\n            return [\n                ...Array(Number.isFinite(multiplier) && multiplier >= 0 ? multiplier : 0)\n            ].map({\n                \"Marquee.Marquee.useCallback[multiplyChildren]\": (_, i)=>React__default['default'].createElement(React.Fragment, {\n                        key: i\n                    }, React.Children.map(children, {\n                        \"Marquee.Marquee.useCallback[multiplyChildren]\": (child)=>{\n                            return React__default['default'].createElement(\"div\", {\n                                style: childStyle,\n                                className: \"rfm-child\"\n                            }, child);\n                        }\n                    }[\"Marquee.Marquee.useCallback[multiplyChildren]\"]))\n            }[\"Marquee.Marquee.useCallback[multiplyChildren]\"]);\n        }\n    }[\"Marquee.Marquee.useCallback[multiplyChildren]\"], [\n        childStyle,\n        children\n    ]);\n    return !isMounted ? null : React__default['default'].createElement(\"div\", {\n        ref: containerRef,\n        style: containerStyle,\n        className: \"rfm-marquee-container \" + className\n    }, gradient && React__default['default'].createElement(\"div\", {\n        style: gradientStyle,\n        className: \"rfm-overlay\"\n    }), React__default['default'].createElement(\"div\", {\n        className: \"rfm-marquee\",\n        style: marqueeStyle,\n        onAnimationIteration: onCycleComplete,\n        onAnimationEnd: onFinish\n    }, React__default['default'].createElement(\"div\", {\n        className: \"rfm-initial-child-container\",\n        ref: marqueeRef\n    }, React.Children.map(children, (child)=>{\n        return React__default['default'].createElement(\"div\", {\n            style: childStyle,\n            className: \"rfm-child\"\n        }, child);\n    })), multiplyChildren(multiplier - 1)), React__default['default'].createElement(\"div\", {\n        className: \"rfm-marquee\",\n        style: marqueeStyle\n    }, multiplyChildren(multiplier)));\n});\nexports[\"default\"] = Marquee; //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZmFzdC1tYXJxdWVlL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTBITSxPQUFPLEdBQXFCQSxNQUFBQSxVQUFVLENBQUMsU0FBUyxPQUFPLENBQzNELEVBQ0UsS0FBSyxHQUFHLEVBQUUsRUFDVixTQUFTLEdBQUcsRUFBRSxFQUNkLFFBQVEsR0FBRyxLQUFLLEVBQ2hCLElBQUksR0FBRyxJQUFJLEVBQ1gsWUFBWSxHQUFHLEtBQUssRUFDcEIsWUFBWSxHQUFHLEtBQUssRUFDcEIsU0FBUyxHQUFHLE1BQU0sRUFDbEIsS0FBSyxHQUFHLEVBQUUsRUFDVixLQUFLLEdBQUcsQ0FBQyxFQUNULElBQUksR0FBRyxDQUFDLEVBQ1IsUUFBUSxHQUFHLEtBQUssRUFDaEIsYUFBYSxHQUFHLE9BQU8sRUFDdkIsYUFBYSxHQUFHLEdBQUcsRUFDbkIsUUFBUSxFQUNSLGVBQWUsRUFDZixPQUFPLEVBQ1AsUUFBUSxFQUNULEVBQ0QsR0FBRzs7SUFHSCxNQUFNLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLEdBQUdDLE1BQUFBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHQSxNQUFBQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBR0EsTUFBQUEsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUdBLE1BQUFBLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxNQUFNLE9BQU8sR0FBR0MsTUFBQUEsTUFBTSxDQUFpQixJQUFJLENBQUMsQ0FBQztJQUM3QyxNQUFNLFlBQVksR0FBSSxHQUF3QyxJQUFJLE9BQU8sQ0FBQztJQUMxRSxNQUFNLFVBQVUsR0FBR0EsTUFBQUEs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RyxFQUFFLFlBQVk7UUFDakIsS0FBSyxFQUFFLGNBQWM7UUFDckIsU0FBUyxFQUFFLHdCQUF3QixHQUFHLFNBQVM7SUFBQSxHQUU5QyxRQUFRLElBQUlBLGNBQUFBLENBQUFBLFVBQUFBLENBQUFBLGFBQUFBLENBQUFBLE9BQUFBO1FBQUssS0FBSyxFQUFFLGFBQWE7UUFBRSxTQUFTLEVBQUMsYUFBYTtJQUFBLEVBQUcsRUFDbEVBLGNBQUFBLENBQUFBLFVBQUFBLENBQUFBLGFBQUFBLENBQUFBLE9BQUFBO1FBQ0UsU0FBUyxFQUFDLGFBQWE7UUFDdkIsS0FBSyxFQUFFLFlBQVk7UUFDbkIsb0JBQW9CLEVBQUUsZUFBZTtRQUNyQyxjQUFjLEVBQUUsUUFBUTtJQUFBLEdBRXhCQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxhQUFBQSxDQUFBQSxPQUFBQTtRQUFLLFNBQVMsRUFBQyw2QkFBNkI7UUFBQyxHQUFHLEVBQUUsVUFBVTtJQUFBLEdBQ3pERSxNQUFBQSxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUs7UUFDNUIsT0FDRUYsY0FBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsYUFBQUEsQ0FBQUEsT0FBQUE7WUFBSyxLQUFLLEVBQUUsVUFBVTtZQUFFLFNBQVMsRUFBQyxXQUFXO1FBQUEsR0FDMUMsS0FBSyxDQUNGO0tBRVQsQ0FBQyxDQUNFLEVBQ0wsZ0JBQWdCLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUM3QixFQUNOQSxjQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxhQUFBQSxDQUFBQSxPQUFBQTtRQUFLLFNBQVMsRUFBQyxhQUFhO1FBQUMsS0FBSyxFQUFFLFlBQVk7SUFBQSxHQUM3QyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FDekIsQ0FDRixDQUNQO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxwcml5YW5rYW1cXHNyY1xcY29tcG9uZW50c1xcTWFycXVlZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIEZyYWdtZW50LFxuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxuICB1c2VSZWYsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VNZW1vLFxuICBSZWFjdE5vZGUsXG4gIENTU1Byb3BlcnRpZXMsXG4gIEZDLFxuICBmb3J3YXJkUmVmLFxuICBDaGlsZHJlbixcbiAgTXV0YWJsZVJlZk9iamVjdCxcbiAgUmVmQXR0cmlidXRlcyxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL01hcnF1ZWUuc2Nzc1wiO1xuXG5leHBvcnQgdHlwZSBNYXJxdWVlUHJvcHMgPSB7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSW5saW5lIHN0eWxlIGZvciB0aGUgY29udGFpbmVyIGRpdlxuICAgKiBAdHlwZSB7Q1NTUHJvcGVydGllc31cbiAgICogQGRlZmF1bHQge31cbiAgICovXG4gIHN0eWxlPzogQ1NTUHJvcGVydGllcztcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBDbGFzcyBuYW1lIHRvIHN0eWxlIHRoZSBjb250YWluZXIgZGl2XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0IFwiXCJcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBXaGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgZmlsbCBibGFuayBzcGFjZSBpbiB0aGUgbWFycXVlZSB3aXRoIGNvcGllcyBvZiB0aGUgY2hpbGRyZW4gb3Igbm90XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgYXV0b0ZpbGw/OiBib29sZWFuO1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFdoZXRoZXIgdG8gcGxheSBvciBwYXVzZSB0aGUgbWFycXVlZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgcGxheT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gV2hldGhlciB0byBwYXVzZSB0aGUgbWFycXVlZSB3aGVuIGhvdmVyZWRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBwYXVzZU9uSG92ZXI/OiBib29sZWFuO1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFdoZXRoZXIgdG8gcGF1c2UgdGhlIG1hcnF1ZWUgd2hlbiBjbGlja2VkXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgcGF1c2VPbkNsaWNrPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgZGlyZWN0aW9uIHRoZSBtYXJxdWVlIGlzIHNsaWRpbmdcbiAgICogQHR5cGUge1wibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJ1cFwiIHwgXCJkb3duXCJ9XG4gICAqIEBkZWZhdWx0IFwibGVmdFwiXG4gICAqL1xuICBkaXJlY3Rpb24/OiBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwidXBcIiB8IFwiZG93blwiO1xuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFNwZWVkIGNhbGN1bGF0ZWQgYXMgcGl4ZWxzL3NlY29uZFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCA1MFxuICAgKi9cbiAgc3BlZWQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRHVyYXRpb24gdG8gZGVsYXkgdGhlIGFuaW1hdGlvbiBhZnRlciByZW5kZXIsIGluIHNlY29uZHNcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMFxuICAgKi9cbiAgZGVsYXk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIG51bWJlciBvZiB0aW1lcyB0aGUgbWFycXVlZSBzaG91bGQgbG9vcCwgMCBpcyBlcXVpdmFsZW50IHRvIGluZmluaXRlXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDBcbiAgICovXG4gIGxvb3A/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gV2hldGhlciB0byBzaG93IHRoZSBncmFkaWVudCBvciBub3RcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBncmFkaWVudD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIGNvbG9yIG9mIHRoZSBncmFkaWVudFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCBcIndoaXRlXCJcbiAgICovXG4gIGdyYWRpZW50Q29sb3I/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhlIHdpZHRoIG9mIHRoZSBncmFkaWVudCBvbiBlaXRoZXIgc2lkZVxuICAgKiBAdHlwZSB7bnVtYmVyIHwgc3RyaW5nfVxuICAgKiBAZGVmYXVsdCAyMDBcbiAgICovXG4gIGdyYWRpZW50V2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQSBjYWxsYmFjayBmb3Igd2hlbiB0aGUgbWFycXVlZSBmaW5pc2hlcyBzY3JvbGxpbmcgYW5kIHN0b3BzLiBPbmx5IGNhbGxzIGlmIGxvb3AgaXMgbm9uLXplcm8uXG4gICAqIEB0eXBlIHsoKSA9PiB2b2lkfVxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICBvbkZpbmlzaD86ICgpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQSBjYWxsYmFjayBmb3Igd2hlbiB0aGUgbWFycXVlZSBmaW5pc2hlcyBhIGxvb3AuIERvZXMgbm90IGNhbGwgaWYgbWF4aW11bSBsb29wcyBhcmUgcmVhY2hlZCAodXNlIG9uRmluaXNoIGluc3RlYWQpLlxuICAgKiBAdHlwZSB7KCkgPT4gdm9pZH1cbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKi9cbiAgb25DeWNsZUNvbXBsZXRlPzogKCkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbjogQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgb25jZSB0aGUgbWFycXVlZSBoYXMgZmluaXNoZWQgbW91bnRpbmcuIEl0IGNhbiBiZSB1dGlsaXplZCB0byByZWNhbGN1bGF0ZSB0aGUgcGFnZSBzaXplLCBpZiBuZWNlc3NhcnkuXG4gICAqIEB0eXBlIHsoKSA9PiB2b2lkfVxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICBvbk1vdW50PzogKCkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgY2hpbGRyZW4gcmVuZGVyZWQgaW5zaWRlIHRoZSBtYXJxdWVlXG4gICAqIEB0eXBlIHtSZWFjdE5vZGV9XG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xufSAmIFJlZkF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+O1xuXG5jb25zdCBNYXJxdWVlOiBGQzxNYXJxdWVlUHJvcHM+ID0gZm9yd2FyZFJlZihmdW5jdGlvbiBNYXJxdWVlKFxuICB7XG4gICAgc3R5bGUgPSB7fSxcbiAgICBjbGFzc05hbWUgPSBcIlwiLFxuICAgIGF1dG9GaWxsID0gZmFsc2UsXG4gICAgcGxheSA9IHRydWUsXG4gICAgcGF1c2VPbkhvdmVyID0gZmFsc2UsXG4gICAgcGF1c2VPbkNsaWNrID0gZmFsc2UsXG4gICAgZGlyZWN0aW9uID0gXCJsZWZ0XCIsXG4gICAgc3BlZWQgPSA1MCxcbiAgICBkZWxheSA9IDAsXG4gICAgbG9vcCA9IDAsXG4gICAgZ3JhZGllbnQgPSBmYWxzZSxcbiAgICBncmFkaWVudENvbG9yID0gXCJ3aGl0ZVwiLFxuICAgIGdyYWRpZW50V2lkdGggPSAyMDAsXG4gICAgb25GaW5pc2gsXG4gICAgb25DeWNsZUNvbXBsZXRlLFxuICAgIG9uTW91bnQsXG4gICAgY2hpbGRyZW4sXG4gIH0sXG4gIHJlZlxuKSB7XG4gIC8vIFJlYWN0IEhvb2tzXG4gIGNvbnN0IFtjb250YWluZXJXaWR0aCwgc2V0Q29udGFpbmVyV2lkdGhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttYXJxdWVlV2lkdGgsIHNldE1hcnF1ZWVXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW211bHRpcGxpZXIsIHNldE11bHRpcGxpZXJdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtpc01vdW50ZWQsIHNldElzTW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvb3RSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjb250YWluZXJSZWYgPSAocmVmIGFzIE11dGFibGVSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+KSB8fCByb290UmVmO1xuICBjb25zdCBtYXJxdWVlUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICAvLyBDYWxjdWxhdGUgd2lkdGggb2YgY29udGFpbmVyIGFuZCBtYXJxdWVlIGFuZCBzZXQgbXVsdGlwbGllclxuICBjb25zdCBjYWxjdWxhdGVXaWR0aCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAobWFycXVlZVJlZi5jdXJyZW50ICYmIGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBjb250YWluZXJSZWN0ID0gY29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBtYXJxdWVlUmVjdCA9IG1hcnF1ZWVSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGxldCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lclJlY3Qud2lkdGg7XG4gICAgICBsZXQgbWFycXVlZVdpZHRoID0gbWFycXVlZVJlY3Qud2lkdGg7XG5cbiAgICAgIC8vIFN3YXAgd2lkdGggYW5kIGhlaWdodCBpZiBkaXJlY3Rpb24gaXMgdXAgb3IgZG93blxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcbiAgICAgICAgY29udGFpbmVyV2lkdGggPSBjb250YWluZXJSZWN0LmhlaWdodDtcbiAgICAgICAgbWFycXVlZVdpZHRoID0gbWFycXVlZVJlY3QuaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZiAoYXV0b0ZpbGwgJiYgY29udGFpbmVyV2lkdGggJiYgbWFycXVlZVdpZHRoKSB7XG4gICAgICAgIHNldE11bHRpcGxpZXIoXG4gICAgICAgICAgbWFycXVlZVdpZHRoIDwgY29udGFpbmVyV2lkdGhcbiAgICAgICAgICAgID8gTWF0aC5jZWlsKGNvbnRhaW5lcldpZHRoIC8gbWFycXVlZVdpZHRoKVxuICAgICAgICAgICAgOiAxXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRNdWx0aXBsaWVyKDEpO1xuICAgICAgfVxuXG4gICAgICBzZXRDb250YWluZXJXaWR0aChjb250YWluZXJXaWR0aCk7XG4gICAgICBzZXRNYXJxdWVlV2lkdGgobWFycXVlZVdpZHRoKTtcbiAgICB9XG4gIH0sIFthdXRvRmlsbCwgY29udGFpbmVyUmVmLCBkaXJlY3Rpb25dKTtcblxuICAvLyBDYWxjdWxhdGUgd2lkdGggYW5kIG11bHRpcGxpZXIgb24gbW91bnQgYW5kIG9uIHdpbmRvdyByZXNpemVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuO1xuXG4gICAgY2FsY3VsYXRlV2lkdGgoKTtcbiAgICBpZiAobWFycXVlZVJlZi5jdXJyZW50ICYmIGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiBjYWxjdWxhdGVXaWR0aCgpKTtcbiAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoY29udGFpbmVyUmVmLmN1cnJlbnQpO1xuICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShtYXJxdWVlUmVmLmN1cnJlbnQpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCFyZXNpemVPYnNlcnZlcikgcmV0dXJuO1xuICAgICAgICByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2NhbGN1bGF0ZVdpZHRoLCBjb250YWluZXJSZWYsIGlzTW91bnRlZF0pO1xuXG4gIC8vIFJlY2FsY3VsYXRlIHdpZHRoIHdoZW4gY2hpbGRyZW4gY2hhbmdlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2FsY3VsYXRlV2lkdGgoKTtcbiAgfSwgW2NhbGN1bGF0ZVdpZHRoLCBjaGlsZHJlbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgLy8gUnVucyB0aGUgb25Nb3VudCBjYWxsYmFjaywgaWYgaXQgaXMgYSBmdW5jdGlvbiwgd2hlbiBNYXJxdWVlIGlzIG1vdW50ZWQuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBvbk1vdW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIG9uTW91bnQoKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBBbmltYXRpb24gZHVyYXRpb25cbiAgY29uc3QgZHVyYXRpb24gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoYXV0b0ZpbGwpIHtcbiAgICAgIHJldHVybiAobWFycXVlZVdpZHRoICogbXVsdGlwbGllcikgLyBzcGVlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1hcnF1ZWVXaWR0aCA8IGNvbnRhaW5lcldpZHRoXG4gICAgICAgID8gY29udGFpbmVyV2lkdGggLyBzcGVlZFxuICAgICAgICA6IG1hcnF1ZWVXaWR0aCAvIHNwZWVkO1xuICAgIH1cbiAgfSwgW2F1dG9GaWxsLCBjb250YWluZXJXaWR0aCwgbWFycXVlZVdpZHRoLCBtdWx0aXBsaWVyLCBzcGVlZF0pO1xuXG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgLi4uc3R5bGUsXG4gICAgICBbXCItLXBhdXNlLW9uLWhvdmVyXCIgYXMgc3RyaW5nXTpcbiAgICAgICAgIXBsYXkgfHwgcGF1c2VPbkhvdmVyID8gXCJwYXVzZWRcIiA6IFwicnVubmluZ1wiLFxuICAgICAgW1wiLS1wYXVzZS1vbi1jbGlja1wiIGFzIHN0cmluZ106XG4gICAgICAgICFwbGF5IHx8IChwYXVzZU9uSG92ZXIgJiYgIXBhdXNlT25DbGljaykgfHwgcGF1c2VPbkNsaWNrXG4gICAgICAgICAgPyBcInBhdXNlZFwiXG4gICAgICAgICAgOiBcInJ1bm5pbmdcIixcbiAgICAgIFtcIi0td2lkdGhcIiBhcyBzdHJpbmddOlxuICAgICAgICBkaXJlY3Rpb24gPT09IFwidXBcIiB8fCBkaXJlY3Rpb24gPT09IFwiZG93blwiID8gYDEwMHZoYCA6IFwiMTAwJVwiLFxuICAgICAgW1wiLS10cmFuc2Zvcm1cIiBhcyBzdHJpbmddOlxuICAgICAgICBkaXJlY3Rpb24gPT09IFwidXBcIlxuICAgICAgICAgID8gXCJyb3RhdGUoLTkwZGVnKVwiXG4gICAgICAgICAgOiBkaXJlY3Rpb24gPT09IFwiZG93blwiXG4gICAgICAgICAgPyBcInJvdGF0ZSg5MGRlZylcIlxuICAgICAgICAgIDogXCJub25lXCIsXG4gICAgfSksXG4gICAgW3N0eWxlLCBwbGF5LCBwYXVzZU9uSG92ZXIsIHBhdXNlT25DbGljaywgZGlyZWN0aW9uXVxuICApO1xuXG4gIGNvbnN0IGdyYWRpZW50U3R5bGUgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBbXCItLWdyYWRpZW50LWNvbG9yXCIgYXMgc3RyaW5nXTogZ3JhZGllbnRDb2xvcixcbiAgICAgIFtcIi0tZ3JhZGllbnQtd2lkdGhcIiBhcyBzdHJpbmddOlxuICAgICAgICB0eXBlb2YgZ3JhZGllbnRXaWR0aCA9PT0gXCJudW1iZXJcIlxuICAgICAgICAgID8gYCR7Z3JhZGllbnRXaWR0aH1weGBcbiAgICAgICAgICA6IGdyYWRpZW50V2lkdGgsXG4gICAgfSksXG4gICAgW2dyYWRpZW50Q29sb3IsIGdyYWRpZW50V2lkdGhdXG4gICk7XG5cbiAgY29uc3QgbWFycXVlZVN0eWxlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgW1wiLS1wbGF5XCIgYXMgc3RyaW5nXTogcGxheSA/IFwicnVubmluZ1wiIDogXCJwYXVzZWRcIixcbiAgICAgIFtcIi0tZGlyZWN0aW9uXCIgYXMgc3RyaW5nXTogZGlyZWN0aW9uID09PSBcImxlZnRcIiA/IFwibm9ybWFsXCIgOiBcInJldmVyc2VcIixcbiAgICAgIFtcIi0tZHVyYXRpb25cIiBhcyBzdHJpbmddOiBgJHtkdXJhdGlvbn1zYCxcbiAgICAgIFtcIi0tZGVsYXlcIiBhcyBzdHJpbmddOiBgJHtkZWxheX1zYCxcbiAgICAgIFtcIi0taXRlcmF0aW9uLWNvdW50XCIgYXMgc3RyaW5nXTogISFsb29wID8gYCR7bG9vcH1gIDogXCJpbmZpbml0ZVwiLFxuICAgICAgW1wiLS1taW4td2lkdGhcIiBhcyBzdHJpbmddOiBhdXRvRmlsbCA/IGBhdXRvYCA6IFwiMTAwJVwiLFxuICAgIH0pLFxuICAgIFtwbGF5LCBkaXJlY3Rpb24sIGR1cmF0aW9uLCBkZWxheSwgbG9vcCwgYXV0b0ZpbGxdXG4gICk7XG5cbiAgY29uc3QgY2hpbGRTdHlsZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIFtcIi0tdHJhbnNmb3JtXCIgYXMgc3RyaW5nXTpcbiAgICAgICAgZGlyZWN0aW9uID09PSBcInVwXCJcbiAgICAgICAgICA/IFwicm90YXRlKDkwZGVnKVwiXG4gICAgICAgICAgOiBkaXJlY3Rpb24gPT09IFwiZG93blwiXG4gICAgICAgICAgPyBcInJvdGF0ZSgtOTBkZWcpXCJcbiAgICAgICAgICA6IFwibm9uZVwiLFxuICAgIH0pLFxuICAgIFtkaXJlY3Rpb25dXG4gICk7XG5cbiAgLy8gUmVuZGVyIHttdWx0aXBsaWVyfSBudW1iZXIgb2YgY2hpbGRyZW5cbiAgY29uc3QgbXVsdGlwbHlDaGlsZHJlbiA9IHVzZUNhbGxiYWNrKFxuICAgIChtdWx0aXBsaWVyOiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLkFycmF5KFxuICAgICAgICAgIE51bWJlci5pc0Zpbml0ZShtdWx0aXBsaWVyKSAmJiBtdWx0aXBsaWVyID49IDAgPyBtdWx0aXBsaWVyIDogMFxuICAgICAgICApLFxuICAgICAgXS5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtjaGlsZFN0eWxlfSBjbGFzc05hbWU9XCJyZm0tY2hpbGRcIj5cbiAgICAgICAgICAgICAgICB7Y2hpbGR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICkpO1xuICAgIH0sXG4gICAgW2NoaWxkU3R5bGUsIGNoaWxkcmVuXVxuICApO1xuXG4gIHJldHVybiAhaXNNb3VudGVkID8gbnVsbCA6IChcbiAgICA8ZGl2XG4gICAgICByZWY9e2NvbnRhaW5lclJlZn1cbiAgICAgIHN0eWxlPXtjb250YWluZXJTdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17XCJyZm0tbWFycXVlZS1jb250YWluZXIgXCIgKyBjbGFzc05hbWV9XG4gICAgPlxuICAgICAge2dyYWRpZW50ICYmIDxkaXYgc3R5bGU9e2dyYWRpZW50U3R5bGV9IGNsYXNzTmFtZT1cInJmbS1vdmVybGF5XCIgLz59XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInJmbS1tYXJxdWVlXCJcbiAgICAgICAgc3R5bGU9e21hcnF1ZWVTdHlsZX1cbiAgICAgICAgb25BbmltYXRpb25JdGVyYXRpb249e29uQ3ljbGVDb21wbGV0ZX1cbiAgICAgICAgb25BbmltYXRpb25FbmQ9e29uRmluaXNofVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJmbS1pbml0aWFsLWNoaWxkLWNvbnRhaW5lclwiIHJlZj17bWFycXVlZVJlZn0+XG4gICAgICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtjaGlsZFN0eWxlfSBjbGFzc05hbWU9XCJyZm0tY2hpbGRcIj5cbiAgICAgICAgICAgICAgICB7Y2hpbGR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHttdWx0aXBseUNoaWxkcmVuKG11bHRpcGxpZXIgLSAxKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZm0tbWFycXVlZVwiIHN0eWxlPXttYXJxdWVlU3R5bGV9PlxuICAgICAgICB7bXVsdGlwbHlDaGlsZHJlbihtdWx0aXBsaWVyKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcnF1ZWU7XG4iXSwibmFtZXMiOlsiZm9yd2FyZFJlZiIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwiUmVhY3QiLCJGcmFnbWVudCIsIkNoaWxkcmVuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-fast-marquee/dist/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/react-fast-marquee/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-fast-marquee/dist/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { createProxy } = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js")

module.exports = createProxy("C:\\Users\\priyankam\\madpopo-revamp\\node_modules\\react-fast-marquee\\dist\\index.js")


/***/ })

};
;