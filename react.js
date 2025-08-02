import React, { useEffect } from "react";
import { onINP, onLCP } from "web-vitals/attribution";

const bannerStyles = {
	position: "fixed",
	bottom: "10px",
	right: "10px",
	padding: "6px 12px",
	fontSize: "12px",
	fontFamily: "sans-serif",
	background: "rgba(0,0,0,0.7)",
	color: "#fff",
	borderRadius: "4px",
	zIndex: 9999,
	pointerEvents: "none",
};

export function SpeedBanner({ containerId = "shrinkray-speed-banner" }) {
	useEffect(() => {
		if (typeof window === "undefined" || process.env.NODE_ENV === "production")
			return;

		const el = document.getElementById(containerId);
		if (!el) return;

		let lcpText = "LCP: ?";
		let inpText = "INP: ?";
		el.textContent = `${lcpText} | ${inpText}`;

		onLCP((metric) => {
			lcpText = `LCP: ${Math.round(metric.value)}ms`;
			el.textContent = `${lcpText} | ${inpText}`;
		});

		onINP((metric) => {
			inpText = `INP: ${Math.round(metric.value)}ms`;
			el.textContent = `${lcpText} | ${inpText}`;
		});
	}, [containerId]);

	return <div id={containerId} style={bannerStyles}></div>;
}
