import { useState } from "react";
import { useRouter } from "next/router";
import CoinAddress from "./coin-address";
import CoinCreator from "./coin-creator";
import CoinInfo from "./coin-info";
import CoinSocials from "./coin-socials";
import CoinListing from "./coin-listing";
import { validateProfileImage } from "../../lib/validations/image-validations";
import {
  projectName,
} from "../../lib/validations/input-validations";
import { uploadCoin } from "../../lib/helper-functions/upload-coin";

export default function SubmitCoin(props) {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    coinImg: "",
    nameInput: "",
    symbol: "",
    network: "Binance Smart Chain (BSC)",
    contactAddress: "",
    description: "",
    day: "",
    month: "",
    year: "",
    customChart: "",
    customSwap: "",
    websiteURL: "",
    telegramURL: "",
    twitterURL: "",
    discordURL: "",
    otherURL: "",
    cmcURL: "",
    cgURL: "",
    contactTelegramURL: "",
  });
  const [formValidity, setFormValidity] = useState(null);
  const [formSuccess, setFormSuccess] = useState(false);

  const FormTitles = [
    "Project Information",
    "Project Chain",
    "Project Socials",
    "Project Info",
    "Listing Packages"
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <CoinInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <CoinAddress formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <CoinSocials formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return (
        <CoinCreator
          formData={formData}
          setFormData={setFormData}
          userEmail={props.userEmail}
        />
      );
    } else if (page === 4) {
      return <CoinListing formData={formData} setFormData={setFormData} />;
    }
  };
  

  const ProgressValue = () => {
    if (page === 0) {
      return 20;
    } else if (page === 1) {
      return 40;
    } else if (page === 2) {
      return 60;
    } else if (page === 3) {
      return 80;
    } else if (page === 4) {
      return 100;
    }
  };

  const handleCoinSubmit = async () => {
    const result = await uploadCoin(
      formData.coinImg,
      formData.nameInput,
      formData.symbol,
      formData.network,
      formData.contactAddress,
      formData.description,
      formData.day,
      formData.month,
      formData.year,
      formData.customChart,
      formData.customSwap,
      formData.websiteURL,
      formData.telegramURL,
      formData.twitterURL,
      formData.discordURL,
      formData.otherURL,
      formData.cmcURL,
      formData.cgURL,
      formData.contactTelegramURL,
      props.userEmail
    );

    if (result) {
      setIsLoading(false);
      setFormSuccess("Project was submitted successfully.");
    } else {
      setIsLoading(false);
      setFormValidity("Project submission unsuccessful.");
    }
  };

  const submitCoin = () => {
    setFormValidity(null);
    setFormSuccess(null);

    if (!formData.coinImg) {
      setFormValidity("Project Image not set.");
      setPage(0);
      return;
    } else {
      const result = validateProfileImage(formData.coinImg);

      if (result !== "success") {
        setFormValidity(result);
        setPage(0);
        return;
      }
    }

    if (!formData.nameInput) {
      setFormValidity("Project Name not set.");
      setPage(0);
      return;
    } else if (!projectName(formData.nameInput)) {
      setFormValidity("Project Name should be more than 3 characters.");
      setPage(0);
      return;
    }

    if (!formData.symbol) {
      setFormValidity("Project Symbol not set.");
      setPage(0);
      return;
    }

    if (!formData.contactAddress) {
      setFormValidity("Project Contract Address not set.");
      setPage(1);
      return;
    }

    if (!formData.description) {
      setFormValidity("Project Description not set");
      setPage(1);
      return;
    }

    if (!formData.day || !formData.month || !formData.year) {
      setFormValidity("Project Launch Date not set.");
      setPage(1);
      return;
    }

    if (!formData.websiteURL) {
      setFormValidity("Website not set.");
      setPage(2);
      return;
    }

    if (!formData.telegramURL) {
      setFormValidity("Telegram link not set.");
      setPage(2);
      return;
    }

    if (!formData.contactTelegramURL) {
      setFormValidity("Contact Telegram link not set.");
      setPage(3);
      return;
    }

    setIsLoading(true);

    handleCoinSubmit();
  };

  return (
    <div>
      <div className="p-3">
        <progress
          className="progress progress-accent w-full bg-opacity-0"
          value={ProgressValue()}
          max="100"
        ></progress>
      </div>

      <div
        style={{
          border: "1px solid green",
          boxShadow: "0px 0px 50px rgb(26 173 46 / 15%)",
        }}
        className="rounded-lg mt-3 text-white bg-indigo-500 p-7 w-[90%] m-auto lg:w-[800px] md:w-[800px] bg-darkzero"
        align="center"
      >
        <div style={{ color: "#758199" }} className="uppercase">
          {FormTitles[page]}
        </div>

        {PageDisplay()}

        {formValidity && (
          <div className="alert alert-error shadow-lg mt-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>{formValidity}</span>
            </div>
          </div>
        )}

        {formSuccess && (
          <div className="alert alert-success shadow-lg mt-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{formSuccess}</span>
            </div>
          </div>
        )}

          <div className="m-5" align="center">
          <button
            className="btn gap-2 mr-3"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Previous
          </button>

          <button
            className={`btn gap-2 ${isLoading ? "loading" : ""}`}
            onClick={() => {
              if (page === FormTitles.length - 1) {
                submitCoin();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
        <button className="btn btn-circle" onClick={() => router.push("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}