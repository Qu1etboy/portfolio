import Image from "next/image";
import Link from "next/link";

type WorkProps = {
  children: React.ReactNode;
  thumbnail: string;
  title: string;
  url: string;
};

export const WorkGridItem = ({
  children,
  thumbnail,
  title,
  url,
}: WorkProps) => {
  return (
    <Link
      href={url}
      className="bg-neutral-100 dark:bg-neutral-900 border dark:border-gray-500 border-gray-400 hover:border-gray-300 rounded-lg hover:shadow-md hover:shadow-pink-500"
    >
      <div className="cursor-pointer">
        {/* <div className="h-[300px] md:h-[150px] rounded-lg relative overflow-hidden">
          <Image
            src={thumbnail}
            fill={true}
            alt="thumbnail"
            loading="lazy"
            className="max-w-full max-h-full"
          />
        </div> */}
        <div className="p-5 relative">
          <h1 className="font-bold text-lg mb-5">{title}</h1>
          <div className="text-sm dark:text-gray-100 font-light">
            {children}
          </div>
        </div>
      </div>
    </Link>
  );
};
