import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="m-16  text-center mx-auto">
        <h3 className="text-2xl font-bold text-emerald-600 mb-8">
          Page Not Found
        </h3>

        <Image
          src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
          width={500}
          height={500}
          alt="error-picture"
          className="mx-auto mb-8"
        />

        <Link href="/">
          <button className="btn btn-outline btn-success">
            Go Home <FontAwesomeIcon icon={faHouse} />
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
