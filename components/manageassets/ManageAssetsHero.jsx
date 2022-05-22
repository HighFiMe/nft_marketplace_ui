import React from "react";
import Select from "react-select";
import { SearchIcon } from "../common/Icons";

const ManageAssetsHero = () => {
  const options = [
    { value: "most-viewed", label: "Most Viewed" },
    { value: "recently-viewed", label: "Recently Viewed" },
    { value: "lats-viewed", label: "Last Viewed" },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="main-header color-white ff-messapiaBold mb-5">
              Manage Assets
            </h1>
            <div className="d-flex  flex-column flex-md-row align-items-start align-items-md-center justify-content-between pb-4">
              <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center w-100">
                <div className="d-flex align-items-center">
                  <button className="common-filltd-green-button px-3 px-sm-4 d-flex align-items-center">
                    <span className="me-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 13H13V17H11V13H7V11H11V7H13V11H17V13ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span> Add new NFT</span>
                  </button>

                  <button className="common-filltd-grey-button px-3 px-sm-4 mx-3 d-flex align-items-center">
                    <span className="me-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 13H13V17H11V13H7V11H11V7H13V11H17V13ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span> Add new NFT</span>
                  </button>
                </div>

                {/* SEARCH BAR  */}
                <div className="search-wrapper-navbar-manage-assets my-4 my-md-0">
                  <SearchIcon />
                  <input type="text" placeholder="Search" />
                </div>
              </div>

              {/* OPTIONS BUTTON  */}
              <button className="common-filltd-grey-button px-4">
                Options
                <span className="ms-2">
                  <svg
                    width="16"
                    height="4"
                    viewBox="0 0 16 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C12 1.46957 12.2107 0.96086 12.5858 0.585787C12.9609 0.210714 13.4696 0 14 0C14.5304 0 15.0391 0.210714 15.4142 0.585787C15.7893 0.96086 16 1.46957 16 2C16 2.53043 15.7893 3.03914 15.4142 3.41421C15.0391 3.78929 14.5304 4 14 4C13.4696 4 12.9609 3.78929 12.5858 3.41421C12.2107 3.03914 12 2.53043 12 2ZM6 2C6 1.46957 6.21071 0.96086 6.58579 0.585787C6.96086 0.210714 7.46957 0 8 0C8.53043 0 9.03914 0.210714 9.41421 0.585787C9.78929 0.96086 10 1.46957 10 2C10 2.53043 9.78929 3.03914 9.41421 3.41421C9.03914 3.78929 8.53043 4 8 4C7.46957 4 6.96086 3.78929 6.58579 3.41421C6.21071 3.03914 6 2.53043 6 2ZM0 2C0 1.46957 0.210714 0.96086 0.585786 0.585787C0.960859 0.210714 1.46957 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585787C3.78929 0.96086 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className="border-hero"></div>
            <p className="fs-xs fw-bold color-primary-green pt-3">
              Current Rentals
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
              <div className="d-flex  align-items-center mb-4 mb-md-0">
                <button className="common-outline-button d-flex align-items-center">
                  <span className="me-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 16H16V12H12V16ZM12 10H16V6H12V10ZM6 4H10V0H6V4ZM12 4H16V0H12V4ZM6 10H10V6H6V10ZM0 10H4V6H0V10ZM0 16H4V12H0V16ZM6 16H10V12H6V16ZM0 4H4V0H0V4Z"
                        fill="#43B45C"
                      />
                    </svg>
                  </span>
                  All
                </button>
                <button className="common-outline-button d-flex align-items-center ms-3">
                  <span className="me-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24 12C24 5.3736 18.6264 0 12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12ZM5.14805 9.45599C5.23685 6.9072 6.52805 7.93919 6.52805 7.93919C6.52805 7.93919 10.0512 9.89519 10.8336 10.356C11.61 10.8071 11.3576 11.1032 10.9501 11.5812L10.9368 11.5968C10.524 12.084 10.4208 11.8032 10.4208 11.8032C10.4208 11.8032 10.3584 11.6976 9.97204 11.3208C9.58564 10.944 9.45604 11.148 9.45604 11.148C9.45604 11.148 8.85604 11.7264 8.04244 12.492C7.27946 13.21 7.23199 13.0815 7.10434 12.7362C7.09587 12.7133 7.08705 12.6894 7.07764 12.6648C6.92645 12.0984 7.25044 11.8368 7.25044 11.8368C7.25044 11.8368 8.29924 10.8744 8.66404 10.596C8.91805 10.4005 8.76946 10.3423 8.34061 10.1742C8.15356 10.1009 7.91319 10.0068 7.62964 9.87119C6.13685 9.09839 6.60965 13.1544 6.97445 14.4576C7.40302 15.8802 7.87916 15.4903 8.80835 14.7293C9.0031 14.5698 9.21775 14.394 9.45604 14.2152C11.5296 12.5496 15.3216 8.87279 16.524 7.6968C17.7264 6.5208 18.2832 6.996 18.6624 8.04239C19.164 9.72239 19.2432 13.6656 19.248 15.0432C19.2216 16.7784 18.7176 16.7832 17.8344 16.5264C17.0012 16.2929 15.1254 15.0749 14.0746 14.3926C13.7754 14.1983 13.5432 14.0475 13.4208 13.9752C12.9237 13.6799 13.0176 13.5653 13.2941 13.2282C13.3233 13.1926 13.3545 13.1546 13.3872 13.1136C13.824 12.576 14.0088 12.9072 14.0088 12.9072C14.0088 12.9072 14.9664 13.6032 15.9744 14.2512C17.3088 15.1776 17.6016 14.6592 17.664 13.9752C17.8458 11.9735 17.649 11.0859 17.452 10.1971C17.4305 10.1002 17.409 10.0032 17.388 9.90479C16.9506 7.97633 15.1653 9.90895 13.8229 11.3621C13.508 11.703 13.2175 12.0175 12.9744 12.2496C11.6952 13.4712 8.67364 16.2552 7.83844 16.872C6.87845 17.5512 6.36245 17.76 5.97605 17.0784C5.06165 15.2664 5.05925 11.4312 5.14805 9.45599Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Axie Infinity
                </button>
              </div>
              <div className="most-view-select-wrapper">
                <Select options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageAssetsHero;
