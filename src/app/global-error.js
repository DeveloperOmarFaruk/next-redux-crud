"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const globalError = () => {
  return (
    <>
      <div className="m-16  text-center mx-auto">
        <h3 className="text-2xl font-bold text-emerald-600 mb-8">
          Something Is Wrong !
        </h3>

        <Image
          src="https://leadgenera.com/wp-content/uploads/2023/05/1623438_Banner_DemystifyingErrorCode500_042423-1.png"
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

export default globalError;
