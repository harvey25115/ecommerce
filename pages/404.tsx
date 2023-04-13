import Image from "next/image";

export default function NotFound() {
  return (
    <div className="notFound">
      <Image src="/undraw_empty_re_opql.svg" alt="" width={300} height={300} />
      <div>No item(s) found. Please try again later.</div>
    </div>
  );
}
