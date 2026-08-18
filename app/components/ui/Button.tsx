import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import ArrowIcon, { type ArrowDirection } from "./ArrowIcon";

export type ButtonVariant = "primary" | "secondary" | "dark" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type Common = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: ArrowDirection | false;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
};

type AsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
  };

type AsLink = Common &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "children" | "className" | "href"
  > & {
    href: string;
  };

export type ButtonProps = AsButton | AsLink;

function buildClass(
  variant: ButtonVariant,
  size: ButtonSize,
  fullWidth: boolean | undefined,
  className: string | undefined,
) {
  return [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? "btn--full" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    arrow,
    fullWidth,
    children,
    className,
    ...rest
  } = props;
  const cls = buildClass(variant, size, fullWidth, className);
  const content = (
    <>
      <span className="btn__label">{children}</span>
      {arrow ? <ArrowIcon direction={arrow} /> : null}
    </>
  );

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...linkRest } =
      rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <Link href={href} className={cls} {...linkRest}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonRest } =
    rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={cls} {...buttonRest}>
      {content}
    </button>
  );
}
