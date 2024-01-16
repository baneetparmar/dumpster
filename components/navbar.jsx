import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
const Navigationbar = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Image
          src="/logo.png"
          width={32}
          height={32}
          alt="dumpster logo"
          className="m-1"
        />
        Dumpster
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/projects">Projects</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">Contact Us</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigationbar;
