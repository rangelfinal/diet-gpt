import Link from "next/link";

export const Footer = () => (
  <footer className="flex justify-between px-8 absolute bottom-0 left-0 w-full">
    <div>
      By <Link href="https://vinta.com.br">Vinta</Link>
    </div>
    <div>
      <span>
        Powered by{" "}
        <Link href="https://github.com/vintasoftware/GPTBundle">GPTBundle</Link>
      </span>
    </div>
  </footer>
);
