import { forwardRef, HTMLAttributes, useCallback, useMemo } from 'react'

interface IButtonProp extends HTMLAttributes<HTMLButtonElement> {
  variant?: string
}
const Button = forwardRef<HTMLButtonElement, IButtonProp>(
  ({ className, variant, children, ...props }, ref) => {
    const generateStyle = useMemo(() => {
      switch (variant) {
        case 'primary':
          return 'bg-slate-200 text-white'
        default:
          return 'bg-slate-200 text-black hover:bg-slate-200/80'
      }
    }, [variant])
    return (
      <button
        className={` px-5 py-2 text-base duration-300 rounded-md ${generateStyle} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

export default Button
