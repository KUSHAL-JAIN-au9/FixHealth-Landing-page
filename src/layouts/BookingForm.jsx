import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { data } from "../data";

const BookingForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [age, setage] = useState(null);
  const [company, setcompany] = useState("");
  const [city, setcity] = useState("");
  const [doctor, setdoctor] = useState("");
  const [isExperiencePhysiotherapy, setIsExperiencePhysiotherapy] =
    useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const myParam = queryParams.get("city");

  useEffect(() => {
    const listDoc = data.filter((item) => item.city == myParam);
    console.log("params changes", listDoc);
    setDoctors([...listDoc]);
  }, [myParam]);

  console.log("params", queryParams, myParam);
  //   queryParams.forEach((value, key) => {
  //     console.log(`${key}: ${value}`);
  //   });

  const handleChangeCity = (e) => {
    console.log(e.target.value);
    setcity(e.target.value);
    navigate(`/search?city=${e.target.value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formvalues", {
      name,
      age,
      city,
      isExperiencePhysiotherapy,
      phone,
      doctor,
      company,
    });
  };
  return (
    <form id="contact" class="max-w-sm mx-auto mb-4" onSubmit={handleSubmit}>
      <h1 className="w-full text-4xl text-brightColor font-semibold text-center lg:text-start">
        Book A Doctor
      </h1>
      <label for="name" class="block mt-4 mb-2 text-sm font-medium">
        Name:
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-describedby="helper-text-explanation"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder="name"
        required
      />

      <label for="number-input" class="block mt-4 mb-2 text-sm font-medium">
        Phone Number:
      </label>
      <input
        type="number"
        id="number-input"
        name="phone"
        value={phone}
        onChange={(e) => setphone(e.target.value)}
        aria-describedby="helper-text-explanation"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="your number"
        required
      />

      <label for="age" class="block mt-4 mb-2 text-sm font-medium">
        Age:
      </label>
      <input
        min={1}
        max={100}
        type="number"
        id="age"
        name="age"
        value={age}
        onChange={(e) => setage(e.target.value)}
        aria-describedby="helper-text-explanation"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="age"
        required
      />

      <label for="city" class="block mt-4 mb-2 text-sm font-medium">
        Select a city:
      </label>
      <select
        id="city"
        name="city"
        // value={city}
        onClick={handleChangeCity}
        required
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" selected hidden>
          Choose a city
        </option>
        <option value="Bangalore">Bangalore</option>
        <option value="Delhi">Delhi</option>
        <option value="Noida">Noida</option>
        <option value="Chennai">Chennai</option>
      </select>

      <label for="company" class="block mt-4 mb-2 text-sm font-medium">
        Company:
      </label>
      <input
        type="text"
        name="company"
        id="company"
        value={company}
        onChange={(e) => setcompany(e.target.value)}
        aria-describedby="helper-text-explanation"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="company name"
        required
      />

      {parseInt(age) >= 40 && (
        <div class="flex items-center  mt-4 mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            name="experience"
            value={isExperiencePhysiotherapy}
            onChange={(e) => setName(e.target.checked)}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2"
          />
          <label for="default-checkbox" class="ms-2 text-sm font-medium">
            Any previous experience with physiotherapy
          </label>
        </div>
      )}

      <label for="doctors" class="block mt-4 mb-2 text-sm font-medium">
        Select a doctor:
      </label>

      <select
        id="doctors"
        name="doctors"
        onClick={(e) => {
          setdoctor(e.target.value);
        }}
        required
        class="bg-gray-50 border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        {" "}
        {
          doctors.length == 0 && (
            <option selected value={null}>
              {" "}
              Doctor Not Available for city {myParam}
            </option>
          )
          // ) : (
          //   <option value={null} selected disabled>
          //     Choose a doctor
          //   </option>
          // )
        }
        {doctors.map((item, i) => (
          <option value={item.name}>{item.name}</option>
        ))}
        {/* <option value="Bangalore">Bangalore</option>
        <option value="Delhi">Delhi</option>
        <option value="Noida">Noida</option>
        <option value="Chennai">Chennai</option> */}
      </select>
      <button
        type="submit"
        disabled={city === "" && doctor == ""}
        className=" w-full mt-4 bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
        //   onClick={openForm}
      >
        Book
      </button>
    </form>
  );
};

export default BookingForm;
