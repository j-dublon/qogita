import React from "react";
import { useRouter } from "next/router";

const ErrorPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="error-page">
      <h1>Something went wrong!</h1>
      <p>
        Sorry, an error has occurred. Please{" "}
        <button
          onClick={() => router.push("/")}
          className="text-blue-500 hover:underline"
        >
          go home
        </button>{" "}
        and try again.
      </p>
    </div>
  );
};

export default ErrorPage;
