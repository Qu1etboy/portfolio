export default function Badge({
  text,
  color = "pink",
}: {
  text: string;
  color?: string;
}) {
  const colors = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    pink: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  };

  return (
    <span
      className={`${colors[color]} text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`}
    >
      {text}
    </span>
  );
}
