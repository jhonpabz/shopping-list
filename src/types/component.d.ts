declare namespace ComponentsPropsNamespace {
  type BaseComponentLayout = React.HTMLAttributes<React.ReactHTMLElement>;

  type BaseImage = Omit<
    Parameters<typeof NextImage>["0"],
    "width" | "height"
  > & {
    width?: number;
    height?: number;
  };
}
