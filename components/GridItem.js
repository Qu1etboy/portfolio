import Image from "next/image";
import Link from "next/link";

export const WorkGridItem = ({ children, thumbnail, title, url }) => {
  return (
    <Link href={url}>
      <div className="cursor-pointer">
        <div className="h-[150px] w-[200px] bg-slate-50 rounded-lg overflow-hidden">
          <Image
            src={thumbnail}
            width="200"
            height="150"
            alt="thumbnail"
            className="max-w-full max-h-full"
          />
        </div>
        <div className="text-center p-5 h-[200px] w-[200px]">
          <h1 className="font-bold text-lg mb-5">{title}</h1>
          <p>{children}</p>
        </div>
      </div>
    </Link>
  );
};
