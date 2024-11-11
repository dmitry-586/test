import Script from "next/script";
export default function Home() {
  return (
    <>
      <Script src="//teleton.me/tools/chat.js" />
      <div className="flex justify-center items-center">
        <p>Hello world!</p>
      </div>
    </>
  );
}
