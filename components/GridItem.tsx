import Link from "next/link";

type WorkProps = {
  children: React.ReactNode;
  title: string;
  url: string;
};

export const WorkGridItem = ({ children, title, url }: WorkProps) => {
  return (
    <Link
      href={url}
      className="bg-neutral-100 dark:bg-neutral-900 border dark:border-gray-500 border-gray-400 hover:border-gray-300 rounded-lg hover:shadow-md hover:shadow-pink-500"
    >
      <div className="cursor-pointer">
        <div className="p-5 relative">
          <h2 className="font-bold text-lg mb-5">{title}</h2>
          <div className="text-sm dark:text-gray-100 font-light">
            {children}
          </div>
        </div>
      </div>
    </Link>
  );
};
