const FIREBASE_DOMAIN = "https://userdetails-d84c5-default-rtdb.firebaseio.com";

export async function getAllStaff() {
  const response = await fetch(`${FIREBASE_DOMAIN}/staff.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch staff.");
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}

export async function getSingleStaff(staffId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/staff/${staffId}.json`);
  const data = await response.json();
 

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedQuote = {
    id: staffId,
    ...data,
  };

  return loadedQuote;
}

export async function addstaff(staffData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/staff.json`, {
    method: "POST",
    body: JSON.stringify(staffData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}
export async function getAllStudent() {
  const response = await fetch(`${FIREBASE_DOMAIN}/student.json`);
  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch staff.");
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}

export async function getSingleStudent(studentId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/student/${studentId}.json`);
  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedQuote = {
    id: studentId,
    ...data,
  };

  return loadedQuote;
}

export async function addstudent(studentData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/student.json`, {
    method: "POST",
    body: JSON.stringify(studentData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}


export async function getDetailsStudent(studentId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/student/${studentId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedQuote = {
    id: studentId,
    ...data,
  };

  return loadedQuote;
}
//-ND-W7QSbcPJme6zVAqn
export async function getTimetable(idd) {
  const response = await fetch(`${FIREBASE_DOMAIN}/staff/${idd}/timeTable.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch staff.");
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}

// export async function addComment(requestData) {
//   const response = await fetch(
//     `${FIREBASE_DOMAIN}/staff/${requestData.quoteId}.json`,
//     {
//       method: "POST",
//       body: JSON.stringify(requestData.commentData),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not add comment.");
//   }

//   return { commentId: data.name };
// }

// export async function getAllComments(quoteId) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not get comments.");
//   }

//   const transformedComments = [];

//   for (const key in data) {
//     const commentObj = {
//       id: key,
//       ...data[key],
//     };

//     transformedComments.push(commentObj);
//   }

//   return transformedComments;
// }

export async function getAllNotification(teacherId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/staff/${teacherId}/notification.json/`);
 
  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch staff.");
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}