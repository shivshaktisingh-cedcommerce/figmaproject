import {Tag, Stack} from '@shopify/polaris';
import {useState, useCallback, useEffect, memo} from 'react';

function RemovableTagComponent(props) {
  const [selectedTags, setSelectedTags] = useState([]);

  const removeTag = useCallback(
    (tag) => () => {
      setSelectedTags((previousTags) =>
        previousTags.filter((previousTag) => previousTag !== tag),
      );
    },
    [],
  );
  useEffect(()=>{
    let tempArray = []
    if(props.tagContent==="Error"){
      tempArray.push("Activity Equals " +props.tagContent)
    } 
    if(props.tagContent==="All"){
      tempArray=[]
    } 
    if(props.tagContent==="Incomplete" || props.tagContent==="Active" ||props.tagContent==="Not Listed" || props.tagContent==="Inactive"){
      tempArray.push("Product Status Equals " +props.tagContent)
    } 
    setSelectedTags(tempArray)
  },[props.tagContent])

  const tagMarkup = selectedTags.map((option) => (
    <Tag key={option} onRemove={removeTag(option)}>
      {option}
    </Tag>
  ));

  return (
  <Stack spacing="tight">{tagMarkup}</Stack>
  );
}

export default  memo(RemovableTagComponent)
