type Props = {
  children?: React.ReactNode;
  className?: string; 
};

const Container = ({ children, className }: Props) => {
  return <div className={`container mx-auto max-w-6xl px-4 ${className ? className : ''}`}>{children}</div>;
};

export default Container;

