// NOTE: Didn't end up using this - ended up creating refs to grab ref.current.value

// API: Pass in a template for your data like the following, plus the form submit event

// Example dataTemplateObject:
// let data = {
//   titleBarText: '',
//   welcomeBannerHeading: '',
//   welcomeBannerText: '',
// };

const getFormData = (dataTemplateObject, event) => {
  const formData = new FormData();
  const returnObject = {};
  const returnObjectKeys = [];
  const returnObjectValues = [];

  for (let key in dataTemplateObject) {
    returnObjectKeys.push(key);
  };

  for (let element of event.target) {
    returnObjectValues.push(element.value);

    if (element.tagName === 'INPUT' && element.value === '') {
      return 'empty input value';
    };
  };

  returnObjectValues.forEach((value, valueIndex) => {
    returnObjectKeys.forEach((key, keyIndex) => {
      if (valueIndex === keyIndex) {
        formData.append(key, value);
      };
    });
  });

  for (var keyValuePairArray of formData.entries()) {
    returnObject[keyValuePairArray[0]] = keyValuePairArray[1];
  };

  return returnObject;
};

export default getFormData;
