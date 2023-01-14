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
    <Link href={url}>
      <div className="cursor-pointer">
        <div className="h-[300px] md:h-[150px] rounded-lg relative overflow-hidden">
          <Image
            src={thumbnail}
            fill={true}
            alt="thumbnail"
            loading="lazy"
            className="max-w-full max-h-full"
          />
        </div>
        <div className="text-center p-5">
          <h1 className="font-bold text-lg mb-5">{title}</h1>
          <p className="text-sm">{children}</p>
        </div>
      </div>
    </Link>
  );
};
