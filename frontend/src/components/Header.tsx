import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";

export default function Header() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link href="/">
          Country App
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/country/new" variant="flat">
            Add Country
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
