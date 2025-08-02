import { onINP, onLCP } from "web-vitals/attribution";

const defaultStyles = {
	position: "fixed",
	bottom: "10px",
	right: "10px",
	padding: "6px 12px",
	fontSize: "12px",
	fontFamily: "sans-serif",
	background: "rgba(0,0,0,.7)",
	color: "#fff",
	borderRadius: "4px",
	zIndex: 9999,
	pointerEvents: "none",
};

export function mountSpeedBanner({
	containerId = "shrinkray-speed-banner",
} = {}) {
	if (typeof window === "undefined" || process.env.NODE_ENV === "production")
		return;

	let banner = document.getElementById(containerId);
	if (!banner) {
		banner = document.createElement("div");
		banner.id = containerId;
		Object.assign(banner.style, defaultStyles);
		document.body.appendChild(banner);
	}

	let lcpText = "LCP: ?";
	let inpText = "INP: ?";
	banner.textContent = `${lcpText} | ${inpText}`;

	onLCP((metric) => {
		console.log("onLCP", metric);
		lcpText = `LCP: ${Math.round(metric.value)}ms`;
		banner.textContent = `${lcpText} | ${inpText}`;
	});

	onINP((metric) => {
		console.log("onINP", metric);

		inpText = `INP: ${Math.round(metric.value)}ms`;
		banner.textContent = `${lcpText} | ${inpText}`;
	});
}
