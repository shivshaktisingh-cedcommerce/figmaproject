import { Select } from "@shopify/polaris";
import React, { useState } from "react";
import UpdatedComponent from "../components/hoc/UpdatedComponent";
import { saveFilter } from "../redux/FilterSlice";

const SelectField = (props) => {
  const [value, setValue] = useState(() => {
    let t = JSON.parse(sessionStorage.getItem("filter")) || {};
    return t[props.data] || "";
  });


  const handelChange = (value) => {
    setValue(value);
    let t = JSON.parse(sessionStorage.getItem("filter")) || {};
    t = { ...t, [props.data]: value };
    sessionStorage.setItem("filter", JSON.stringify(t));
    props.dispatch(saveFilter());
  };
  return <Select options={props.options} value={value} onChange={handelChange} />;
};

export default UpdatedComponent(SelectField);
