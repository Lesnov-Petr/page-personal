import { lazy } from "react";

const About = lazy(() => import("../pages/About"));
const Main = lazy(() => import("../pages/Main"));
const Hobby = lazy(() => import("../pages/Hobby"));
const Resume = lazy(() => import("../pages/Resume"));
const Travel = lazy(() => import("../pages/Travel"));

interface Route {
  id: string;
  exact?: boolean;
  label: string;
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  isProtected: boolean;
  redirectTo?: string | undefined;
}

export const routes: Route[] = [
  {
    id: "main",
    exact: true,
    label: "Main",
    path: "/",
    component: Main,
    isProtected: false,
    redirectTo: "/",
  },
  {
    id: "about",
    label: "About",
    path: "/about",
    component: About,
    isProtected: false,
    redirectTo: "/",
  },
  {
    id: "hobby",
    label: "Hobby",
    path: "/hobby",
    component: Hobby,
    isProtected: false,
    redirectTo: "/",
  },
  {
    id: "resume",
    label: "Resume",
    path: "/resume",
    component: Resume,
    isProtected: false,
    redirectTo: "/",
  },
  {
    id: "travel",
    label: "Travel",
    path: "/travel",
    component: Travel,
    isProtected: false,
    redirectTo: "/",
  },
  {
    id: "404",
    label: "404",
    path: "*",
    component: Main,
    isProtected: false,
  },
];
