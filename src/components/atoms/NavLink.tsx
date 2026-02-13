interface NavLinkProps {
  href: string;
  classLink?: string;
  children: string;
}

const NavLink = ({ href = "#", classLink, children }: NavLinkProps) => {
  return (
    <>
      <li>
        <a href={href} className={classLink}>
          {children}
        </a>
      </li>
    </>
  );
};

export default NavLink;
