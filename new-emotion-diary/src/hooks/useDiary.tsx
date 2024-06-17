import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import { State } from "../types/types";

const useDiary = (id: string | undefined) => {
  const data = useContext(DiaryStateContext);

  const [curDiaryItem, setCurDiaryItem] = useState<State | undefined>(
    undefined
  );
  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id, data, nav]);

  return curDiaryItem;
};

export default useDiary;
