import React, { useContext, useState } from "react";
import Sidebar from "../../components/Sidebar";
import AuthContext from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FingerRegisterPage = () => {
  const [token, setToken] = useContext(AuthContext);
  const [cif, setCif] = useState("");
  const [fingerid, setFingerid] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");

  const registerFinger = async () => {
    const requestOptions = {
      method: "GET",
    };
    const response = await fetch(
      "http://localhost:8896/register",
      requestOptions
    );

    const data = await response.json();

    if (data) {
      setImg1(data["finger1"]);
      setImg2(data["finger2"]);
      setImg3(data["finger3"]);
    } else {
      console.log("Something went register finger!");
    }

    if (img1 && img2 && img3) {
      const fingerForm = new FormData();
      fingerForm.append("cif", cif);
      fingerForm.append("finger_id", fingerid);
      fingerForm.append("encoded_image1", img1);
      fingerForm.append("encoded_image2", img2);
      fingerForm.append("encoded_image3", img3);

      const requestOptionsFinger = {
        method: "POST",
        headers: { Authorization: "Bearer " + token.token },
        body: fingerForm,
      };

      const resultResponse = await fetch(
        "http://210.211.97.224:8004/api/fingerprint/register",
        requestOptionsFinger
      );

      const datafinger = await resultResponse.json();
      if (datafinger.status == 0) {
        toast.success("User finger registed successfully !", {
          position: "top-center",
        });
      } else {
        toast.error("User finger registed fail !", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <>
      <Sidebar />

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="flex justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500 w-5/6">
              <label
                htmlFor="input-group-1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
              >
                Cif Serials
              </label>
              <div className="flex mb-4">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  value={cif}
                  onChange={(e) => setCif(e.target.value)}
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  placeholder="cif123567"
                />
              </div>
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Finger ID
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="number"
                  id="website-admin"
                  value={fingerid}
                  onChange={(e) => setFingerid(e.target.value)}
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="9"
                />
              </div>
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                {!img1 ? (
                  <img
                    className="object-cover h-40 w-40"
                    src="./finger.jpg"
                  ></img>
                ) : (
                  <img
                    className="object-cover h-40 w-40"
                    src={`data:image/jpeg;base64,${img1}`}
                  ></img>
                )}
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                {!img2 ? (
                  <img
                    className="object-cover h-40 w-40"
                    src="./finger.jpg"
                  ></img>
                ) : (
                  <img
                    className="object-cover h-40 w-40"
                    src={`data:image/jpeg;base64,${img2}`}
                  ></img>
                )}
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                {!img3 ? (
                  <img
                    className="object-cover h-40 w-40"
                    src="./finger.jpg"
                  ></img>
                ) : (
                  <img
                    className="object-cover h-40 w-40"
                    src={`data:image/jpeg;base64,${img3}`}
                  ></img>
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500 ">
              <button
                type="button"
                onClick={registerFinger}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
              >
                Register Finger
              </button>
            </p>
          </div>
          <div className="flex items-center justify-center h-96  mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <div className="w-5/6 relative overflow-y-scroll h-full shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Finger
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ID Code
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Ngón út trái
                    </th>
                    <td className="px-6 py-4">1</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Ngón áp út trái
                    </th>
                    <td className="px-6 py-4">2</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Ngón giữa trái
                    </th>
                    <td className="px-6 py-4">3</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Ngón trỏ trái
                    </th>
                    <td className="px-6 py-4">4</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Ngón cái trái
                    </th>
                    <td className="px-6 py-4">5</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Ngón út phải
                    </th>
                    <td className="px-6 py-4">6</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Ngón áp út phải
                    </th>
                    <td className="px-6 py-4">7</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Ngón giữa phải
                    </th>
                    <td className="px-6 py-4">8</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Ngón trỏ phải
                    </th>
                    <td className="px-6 py-4">9</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Ngón cái phải
                    </th>
                    <td className="px-6 py-4">10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default FingerRegisterPage;
