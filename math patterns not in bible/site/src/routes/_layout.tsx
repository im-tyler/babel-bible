import "../styles/global.css";
import "katex/dist/katex.min.css";
import AppShell from "../components/AppShell";

export default function Layout(props: { children?: unknown }) {
  return <AppShell>{props.children}</AppShell>;
}
