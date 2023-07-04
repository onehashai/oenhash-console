import Image from "next/image";
export default function Plans() {
  return (
    <div>
      <div className="navbar">
        <Image
          src="https://uploads-ssl.webflow.com/5e53d34464688e6f5960a338/610a36c2792530d601aaf35f_OneHash_Logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div>
        <span> Support</span>
      </div>
    </div>
  );
}
