export default function Button({ children, as = 'button', className = '', ...props }) {
  const Component = as
  return (
    <Component className={`btn ${className}`.trim()} {...props}>
      {children}
    </Component>
  )
}
