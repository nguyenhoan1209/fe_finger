import React, { useState, useContext, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

const ListFingerPage = () => {
  const [token, setToken] = useContext(AuthContext);
  const [cif, setCif] = useState("");
  const [listFinger, setListFinger] = useState(null);
  const [loaded, setLoaded] = useState(false);


  const getListFinger = async () => {
    const bodyForm = new FormData();
    bodyForm.append("cif", cif);

    const requestOptions = {
      method: "POST",
      headers: { Authorization: "Bearer " + token.token },
      body: bodyForm,
    };

    const response = await fetch(
      "http://210.211.97.224:8004/api/fingerprint/list_image",
      requestOptions
    );

    const data = await response.json();

    if (data.status != 0) {
      setLoaded(false);
      console.log("Something went wrong");
    } else {
      setListFinger(data.list_images);
      setLoaded(true);
    }
  };

  useEffect(() => {
    getListFinger();
  }, [cif]);

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="flex justify-center h-40 mb-4 rounded bg-gray-50 dark:bg-gray-800">
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
            </p>
          </div>
          <div className="flex items-center justify-center h-96  mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <div className="w-5/6 relative overflow-y-scroll h-full shadow-md sm:rounded-lg">
              {loaded && listFinger ? (
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Finger ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Image URL
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {listFinger.map((finger, index) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={index}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {finger.finger_id}
                        </th>
                        <td className="px-6 py-4">
                          <img
                            className="object-cover h-20 w-20"
                            src={`data:image/jpeg;base64,${finger.encoded_image}`}
                          ></img>
                        </td>
                        <td className="px-6 py-4">
                          <a href={`${finger.image_url}`} target="_blank">
                            {finger.image_url}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-4xl flex justify-center items-center font-bold my-36">
                  {" "}
                  No data to display{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListFingerPage;
