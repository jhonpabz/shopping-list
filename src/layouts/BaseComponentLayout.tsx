import React from "react"

export default function BaseComponentLayout(props: ComponentsPropsNamespace.BaseComponentLayout) {
  const { className: classNameInherit, children: __children, ...restProps } = props
  const children = React.Children.map(__children, (child) => {
    if (child && React.isValidElement(child)) {
      const className = (() => {
        return [classNameInherit, child.props.className].filter(Boolean).join(" ") || undefined
      })()
      return React.cloneElement<React.ReactHTMLElement<HTMLElement>>(
        // @ts-ignore
        child,
        {
          className,
          ...restProps,
        },
      )
    }
    return child
  })

  return <>{children}</>
}
