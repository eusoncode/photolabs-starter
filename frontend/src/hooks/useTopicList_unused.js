import {useEffect, useState} from "react";
import topics from "../mocks/topics.js";

function useTopicList() {
  const [list, setList] = useState([])
  
  // const sampleDataForTopicList = [
  //   {
  //     id: "1",
  //     slug: "topic-1",
  //     title: "Nature",
  //   },
  //   {
  //     id: "2",
  //     slug: "topic-2",
  //     title: "Travel",
  //   },
  //   {
  //     id: "3",
  //     slug: "topic-3",
  //     title: "People",
  //   },
  // ];
  
  useEffect(() => {
    setList(topics);
  }, [])

  return list;
}

export default useTopicList;