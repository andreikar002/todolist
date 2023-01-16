export function formToNormal(oldForm) {
    const newForm = {};
    // console.log("use form to normal");
    for (var key in oldForm) {
      if (!useIsEmpty(oldForm[key])) newForm[key] = oldForm[key];
    }
    // console.log(newForm, "res form to normal");
    return newForm;
  }
  