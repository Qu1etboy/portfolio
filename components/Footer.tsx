const Footer = () => {
  return (
    <footer className="w-full bottom-0 p-5 mt-auto text-gray-500 flex flex-col items-center">
      <span className="text-sm">
        &copy; {new Date().getFullYear()} Qu1etboy. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
