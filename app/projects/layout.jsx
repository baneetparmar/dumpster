import { ScrollShadow } from "@nextui-org/react";
export default function ProjectsLayout({ children }) {
  return (
    <div>
      <ScrollShadow>{children}</ScrollShadow>
    </div>
  );
}
