declare namespace ComponentsPropsNamespace {
  type BaseComponentLayout = React.HTMLAttributes<React.ReactHTMLElement>;

  type BaseImage = Omit<
    Parameters<typeof NextImage>["0"],
    "width" | "height"
  > & {
    width?: number;
    height?: number;
  };

  type BaseButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };

  type Modal = React.HTMLAttributes<HTMLDivElement> & {
    isOpen: boolean;
    onClose?: ChangeEvent<HTMLElement> | (() => void);
    dismissible?: boolean | undefined;
    overlayExtendedClassName?: string;
    modalContainerExtendedClassName?: string;
    modalContentExtendedClassName?: string;
  };

  type ListContainer = React.HTMLAttributes<HTMLDivElement>;

  type DefaultFormFieldProps = {
    formState: {
      errors: FieldError | undefined;
      dirtyFields?: Dirtied<TFieldValues>;
    };
    control: Control<FieldValues, CreateFaceInput>;
  };

  type TextField = React.HTMLAttributes<HTMLDivElement> & {
    required?: boolean | undefined;
    form: DefaultFormFieldProps;
    name: string;
    label: string;
    placeholder: string;
    changeListener?: ChangeEvent<HTMLInputElement> | (() => void);
  };

  type SelectField = React.HTMLAttributes<HTMLDivElement> & {
    form: DefaultFormFieldProps;
    name: string;
    label: string;
    register: any;
    options: any;
  };
}
