import { useState } from "react";
import { Counter } from "./Counter";

import cloneDeep from "lodash/cloneDeep";
import range from "lodash/range";

const TEST_ARRAY = range(5); // [0, 1, 2, 3, 4]

function KeySample() {
  const [list, setList] = useState(TEST_ARRAY);

  const deleteFirstItem = () => {
    const [_, ...rest] = list;
    setList(rest);
  };

  const deleteLastItem = () => {
    const newList = cloneDeep(list);
    newList.pop();
    setList(newList);
  };

  return (
    <>
      <button onClick={deleteFirstItem}>Delete first item</button>
      <button onClick={deleteLastItem}>Delete last item</button>
      <ul>
        {list.map((n) => (
          <Counter key={n} />
        ))}
      </ul>
    </>
  );
}

export default KeySample;
