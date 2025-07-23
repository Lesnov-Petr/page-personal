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

//======================== Размеры девайса ===============================
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "767px",
  tabletS: "768px",
  tabletL: "1279px",
  laptopS: "1280px",
  laptopM: "1366px",
  laptopL: "1440px",
  desktopS: "1680px",
  desktopM: "1920px",
  desktopL: "2560px",
};

export const device = {
  mobile: `(max-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tabletS}) and (max-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptopS}) and (max-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktopS})`,
};

type DeviceType = keyof typeof device;

export const media = (
  deviceType: DeviceType,
  styles: TemplateStringsArray | string
) => {
  return `@media ${device[deviceType]} { ${styles} }`;
};

//======================== Шрифты ========================================
const fontsFamaly = {
  logo: "Amaranth",
  standart: "Poppins",
};
const sizeFonts = {
  desktop: {
    title: "22px",
    subtitle: "18px",
    standart: "16px",
    logo: "64px",
  },
  tablet: {
    title: "18px",
    subtitle: "18px",
    standart: "14px",
    logo: "48px",
  },
  mobile: {
    title: "18px",
    subtitle: "16px",
    standart: "14px",
    logo: "30px",
  },
};
export const fontMixin = {
  logo: css`
    font-family: ${fontsFamaly.logo};
    font-weight: ${400};
    line-height: ${1.21};
    color: white;

    font-size: ${sizeFonts.desktop.logo};

    @media (${device.tablet}) {
      font-size: ${sizeFonts.tablet.logo};
    }

    @media (${device.mobile}) {
      font-size: ${sizeFonts.mobile.logo};
    }
  `,
  standart: css`
    font-family: ${fontsFamaly.standart};
    font-weight: ${400};
    line-height: ${1};

    font-size: ${sizeFonts.desktop.standart};

    @media (${device.tablet}) {
      font-size: ${sizeFonts.tablet.standart};
    }

    @media (${device.mobile}) {
      font-size: ${sizeFonts.mobile.standart};
    }
  `,
  title: css`
    font-family: ${fontsFamaly.standart};
    font-weight: ${700};
    line-height: ${1.21};
    letter-spacing: ${"1.5px"};

    font-size: ${sizeFonts.desktop.title};

    @media (${device.tablet}) {
      font-size: ${sizeFonts.tablet.title};
    }

    @media (${device.mobile}) {
      font-size: ${sizeFonts.mobile.title};
    }
  `,
  subTitle: css`
    font-family: ${fontsFamaly.standart};
    font-weight: ${700};
    line-height: auto;
    letter-spacing: ${"6px"};

    font-size: ${sizeFonts.desktop.title};

    @media (${device.tablet}) {
      font-size: ${sizeFonts.tablet.standart};
    }

    @media (${device.mobile}) {
      font-size: ${sizeFonts.mobile.standart};
    }
  `,
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
