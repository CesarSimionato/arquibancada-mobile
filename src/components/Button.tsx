import { type VariantProps, cva } from "class-variance-authority"
import { Text, TouchableOpacity } from "react-native"

import { cn } from "../lib/utils"

const buttonVariants = cva(
  "flex flex-row items-center justify-center rounded-md w-full",
  {
    variants: {
      variant: {
        default: "bg-primary-500",
        outline: "bg-transparent border-2 border-primary-500",
      },
      size: {
        default: "h-14 px-4",
        sm: "h-8 px-2",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const buttonTextVariants = cva("text-center font-medium", {
  variants: {
    variant: {
      default: "text-white",
      outline: "text-primary-500",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label: string
  labelClasses?: string
}
function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <Text
        className={cn(
          buttonTextVariants({ variant, size, className: labelClasses })
        )}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export { Button, buttonVariants, buttonTextVariants }
