import React, { useContext, useState } from "react";
import Sidebar from "../../components/Sidebar";
import AuthContext from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FingerVerifyPage = () => {
    const [token, setToken] = useContext(AuthContext);
    const [cif, setCif] = useState("");
    const [transactionID, setTransactionID] = useState("")
    const [imgVerify, setImgVerify] = useState("");
  
    const verifyFinger = async () => {
      const requestOptions = {
        method: "GET",
      };
      const response = await fetch(
        "http://localhost:8896/verify",
        requestOptions
      );
  
      const data = await response.json();
  
      if (data) {
        setImgVerify(data["finger"]);
      } else {
        console.log("Something went register finger!");
      }
    };
    const handleVerifyForm = async (e) =>{
      e.preventDefault();
      if (imgVerify) {
        const fingerForm = new FormData();
        fingerForm.append("cif", cif);
        fingerForm.append("encoded_image", imgVerify);
        fingerForm.append("transaction_id", transactionID);
  
        const requestOptionsFinger = {
          method: "POST",
          headers: { Authorization: "Bearer " + token.token },
          body: fingerForm,
        };
  
        const resultResponse = await fetch(
          "http://210.211.97.224:8004/api/fingerprint/verify",
          requestOptionsFinger
        );
  
        const datafinger = await resultResponse.json();
        if (datafinger.status == 0) {
          if (datafinger.matching == true){
          toast.success("Matching!", {
            position: "top-center",
          });} else{
            toast.warning("Unmatching!", {
              position: "top-center"
            })
          }
        } else {
          toast.error("Verify Fail !", {
            position: "top-center",
          });
        }
      }
    }
  
    return (
      <>
        <Sidebar />
  
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <form onSubmit={handleVerifyForm}>
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
                Transaction ID
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
                  type="text"
                  id="website-admin"
                  value={transactionID}
                  onChange={(e) => setTransactionID(e.target.value)}
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="transaction_123"
                />
              </div>
              </p>
            </div>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
            <div className="flex items-center justify-center h-20 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500 ">
                <button
                  type="button"
                  onClick={verifyFinger}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
                >
                  Click to register
                </button>
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center justify-center h-30 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  
                </p>
              </div>
              <div className="flex items-center justify-center h-30 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  {!imgVerify ? (
                    <img
                      className="object-cover h-40 w-40"
                      src="./finger.jpg"
                    ></img>
                  ) : (
                    <img
                      className="object-cover h-40 w-40"
                      src={`data:image/jpeg;base64,${imgVerify}`}
                    ></img>
                  )}
                </p>
              </div>
              <div className="flex items-center justify-center h-30 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  
                </p>
              </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center h-24 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500 ">
                <button
                  type="submit"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Send to verify
                </button>
              </p>
            </div>
            </form>
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

export default FingerVerifyPage