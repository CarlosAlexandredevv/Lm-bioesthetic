type ButtonProps = React.ComponentProps<'button'> & {
  link: string;
};

export function Button({ link, children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-burgundy w-3/4 py-3 rounded-full text-white font-bold hover:opacity-70 duration-300"
      {...props}
    >
      <a target="_blank" href={link}>
        {children}
      </a>
    </button>
  );
}
