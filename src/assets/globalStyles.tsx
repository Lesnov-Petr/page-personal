import { createGlobalStyle, css } from "styled-components";

export const cubic = "cubic-bezier(0.4, 0, 0.2, 1);";

//======================== Цвета ========================================
export const color = {
  text: "#fff",
  textHero: "#042847",
  header: "#063953",
  accent: "#FF4500",
  logo: "#073826",
  bg: "#0B1D26",
  white: "white",
};

//======================== Шрифты ========================================
const fontsFamaly = {
  logo: "Amaranth",
  standart: "Poppins",
};
const sizeFonts = {
  mobile: { standart: "14px" },
  desktop: {
    standart: "22px",
    title: "18px",
    logo: "64px",
  },
  table: {
    standart: "14px",
    title: "18px",
    logo: "48px",
  },
};
export const fontMixin = {
  logo: css`
    font-family: ${fontsFamaly.logo};
    font-size: ${sizeFonts.desktop.logo};
    font-weight: ${400};
    line-height: ${1.21};
    color: white;
  `,
  standart: css`
    font-family: ${fontsFamaly.standart};
    font-size: ${sizeFonts.desktop.standart};
    font-weight: ${400};
    line-height: ${1};
  `,
  title: css`
    font-family: ${fontsFamaly.standart};
    font-size: ${sizeFonts.desktop.title};
    font-weight: ${700};
    line-height: ${1.21};
    letter-spacing: ${"1.5px"};
  `,
  subTitle: css`
    font-family: ${fontsFamaly.standart};
    font-size: ${sizeFonts.desktop.title};
    font-weight: ${700};
    line-height: auto;
    letter-spacing: ${"6px"};
  `,
};

//======================== Размеры девайса ===============================
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopS: "1280px",
  laptopM: "1366px",
  laptopL: "1440px",
  desktopS: "1680px",
  desktopM: "1920px",
  desktopL: "2560px",
};

export const device = {
  mobileS: `max-width: ${size.mobileS}`,
  mobileM: `max-width: ${size.mobileM}`,
  mobileL: `max-width: ${size.mobileL}`,
  tablet: `max-width: ${size.tablet}`,
  laptop: `max-width: ${size.laptop}`,
  laptopS: `max-width: ${size.laptopS}`,
  laptopM: `max-width: ${size.laptopM}`,
  laptopL: `max-width: ${size.laptopL}`,
  desktopS: `max-width: ${size.desktopS}`,
  desktopM: `max-width: ${size.desktopM}`,
  desktopL: `max-width: ${size.desktopL}`,
};

//======================== Глобальные стили ===============================
export const GlobalStyle = createGlobalStyle`
	body {
		scroll-behavior: smooth;
		text-rendering: optimizeSpeed;
		font-family: Philosopher, sans-serif;
		font-size: 1.6vmin;
		font-weight: 700;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: ${color.text};
		letter-spacing: 0.1px;
		/* overflow: hidden; */
		transition: background-color 500ms ease-in-out;
		background-color: ${color.bg};
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	ol,
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	body,
	h1,
	h2,
	h3,
	h4,
	p,
	ul[class],
	ol[class],
	li,
	figure,
	figcaption,
	blockquote,
	dl,
	dd,
	hr {
		margin: 0;
	}

	a {
		cursor: pointer;
		text-decoration: none;
		color: inherit;
	}

	a:not([class]) {
		text-decoration-skip-ink: auto;
	}

	img {
		max-width: 100%;
		max-height: 100%;
		display: block;
	}

	article>*+* {
		margin-top: 1em;
	}

	input,
	button,
	textarea,
	select {
		border: none;
		outline: none;
		padding: 0;
		font: inherit;
	}

	button {
		cursor: pointer;
		background: none;
		>*{
			pointer-events: none;
		}
	}

	svg {
		width: 100%; 
		height: 100%;
	}

	.g-recaptcha {
		margin-top: 1vh;
	}
`;
