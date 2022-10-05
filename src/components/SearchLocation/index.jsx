import React, { Fragment, useState } from "react";
import useLocation from "../../hooks/useLocation";
import { Combobox, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function SearchLocation({ onSelect }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const [queryParams, setQueryParams] = useState({});
  const { locations } = useLocation(queryParams);

  const handleChange = (e) => {
    const { value } = e.target;
    const params = {};

    if (value.trim()) {
      params.name = value;
    }

    setQueryParams(params);
  };

  const handleSelect = (location) => {
    onSelect(location);
    setSelectedLocation(location);
  };

  return (
    <Combobox
      className="combobox"
      value={selectedLocation.name}
      onChange={handleSelect}
      as="div"
    >
      <div className="combobox__input-wrapper">
        <FontAwesomeIcon icon={faSearch} className="combobox__input-icon" />
        <Combobox.Input className="combobox__input" onChange={handleChange} />
      </div>
      <Transition
        enter="enter"
        enterFrom="enter-from"
        enterTo="enter-to"
        leave="leave"
        leaveFrom="leave-from"
        leaveTo="leave-to"
      >
        <Combobox.Options className="combobox__results">
          {locations.map((location) => (
            <Combobox.Option key={location.id} value={location} as={Fragment}>
              {({ active }) => (
                <div
                  className={`combobox__results-item ${active && "selected"}`}
                >
                  {location.name}
                </div>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Transition>
    </Combobox>
  );
}

export default SearchLocation;
