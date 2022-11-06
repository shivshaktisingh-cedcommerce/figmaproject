import { Filters } from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";
import { filterHeaders, filterUrl } from "../../utils/AllUtilities";
import InputField from "../../utils/InputField";
import SelectField from "../../utils/SelectField";

function FilterOptions() {
  const [taggedWith, setTaggedWith] = useState(null);
  const [queryValue, setQueryValue] = useState(null);
  const [filters, setFilters] = useState([]);
  const [filterData, setFilterData] = useState({
    title: "",
    tags: "",
    type: "",
    price: "",
    sku: "",
    quantity: "",
    status: "",
    variant_attributes: "",
    "collection.collection_id": "",
    product_type: "",
    brand: "",
  });

  const inventoryOptions = [
    { label: "Equals", value: "equals" },
    { label: "Not Equals", value: "not equals" },
    { label: "Greater Than or Equals to", value: "greater than or equals to" },
    { label: "Less Than or Equals to", value: "less than or equals to" },
  ];

  const skuOptions = [
    { label: "Equals", value: "equals" },
    { label: "Not Equals", value: "not equals" },
    { label: "Contains", value: "contains" },
    { label: "Does not Contains", value: "does not contains" },
    { label: "Ends With", value: "starts with" },
    { label: "Ends With", value: "ends with" },
  ];
  const vendorOptions = [
    { label: "Equals", value: "equals" },
    { label: "Not Equals", value: "not equals" },
  ];

  const handleTaggedWithChange = useCallback(
    (value) => setTaggedWith(value),
    []
  );
  const handleQueryValueChange = useCallback(
    (value) => setQueryValue(value),
    []
  );
  const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
  const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);

  const handleClearAll = useCallback(() => {
    handleTaggedWithRemove();
    handleQueryValueRemove();
  }, [handleQueryValueRemove, handleTaggedWithRemove]);

  const handelFilterChange = (data, value) => {
    console.log(data, value);
    console.log("filData===>", filterData);
    setQueryValue(value)
    setFilterData({ ...filterData, [data]: value });
  };
  useEffect(() => {
    console.log(filterData);
  }, [filterData]);

  useEffect(() => {
    fetch(filterUrl, filterHeaders)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          let fil = [];
          res.data.map((item) => {
            let t = {};
            t.key = item.code;
            t.label = item.title;
            t.filter = item.options ? (
              <SelectField options={item.options} data={item.code} />
            ) : (
              <InputField data={item.code}/>
            );
            fil = [...fil, t];
          });
          setFilters(fil);
        } else alert(res.message);
      });
  }, []);

  const appliedFilters = !isEmpty(taggedWith)
    ? [
        {
          key: "taggedWith",
          label: disambiguateLabel("taggedWith", taggedWith),
          onRemove: handleTaggedWithRemove,
        },
      ]
    : [];

  return (
    <Filters
      queryValue={queryValue}
      filters={filters}
      appliedFilters={appliedFilters}
      onQueryChange={handleQueryValueChange}
      onQueryClear={handleQueryValueRemove}
      onClearAll={handleClearAll}
      hideQueryField
    ></Filters>
  );

  function disambiguateLabel(key, value) {
    switch (key) {
      case "taggedWith":
        return `Tagged with ${value}`;
      default:
        return value;
    }
  }

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return value === "" || value == null;
    }
  }
}

export default FilterOptions;
