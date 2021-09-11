const firebase =
  "https://react-test-451d1-default-rtdb.asia-southeast1.firebasedatabase.app";

export const getData = async () => {
  const req = await fetch(`${firebase}/quotes.json`);
  const res = await req.json();

  if (!req.ok) {
    throw new Error("somethig went wrong!");
  }

  let loadedData = [];
  for (const key in res) {
    const newData = { ...res[key], uniqueID: key };
    loadedData.push(newData);
  }
  return loadedData;
};

export const sendData = async (data) => {
  await fetch(`${firebase}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return null;
};

export const sendComment = async (comment) => {
  fetch(`${firebase}/comment/${comment.id}.json`, {
    // the id is the quote id
    method: "POST",
    body: JSON.stringify(comment.body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return null;
};

// quote ID
export const getComments = async (quoteID) => {
  const req = await fetch(`${firebase}/comment/${quoteID}.json`);
  const res = await req.json();

  if (!req.ok) {
    throw new Error("Something Went Wrong!");
  }

  let loadedData = [];

  for (const key in res) {
    loadedData.push({...res[key], id: key});
  }

  return loadedData;
};

export const getSingleQuote = async (itemID) => {
  const req = await fetch(`${firebase}/quotes.json`);
  const res = await req.json();

  if (!req.ok) {
    throw new Error("Request Did Not Completed!");
  }

  let loadedData = [];
  for (const key in res) {
    if (res[key].id === +itemID) {
      const newItem = {...res[key], uniqueID: key}
      loadedData.push(newItem);
      break;
    }
  }
  return loadedData;
};
