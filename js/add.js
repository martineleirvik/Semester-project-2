function onStrapiFormSubmit({ form }) {
    const body = new FormData();
    // Create an empty formData instance
    const inputData = {};
    // Create an empty object to spool data
  
    for (let inputElement of form.elements) {
      switch (inputElement.type) {
        case "file":
          // If the current input is a file
          for (let file of inputElement.files) {
            body.append(`files.${inputElement.name}`, file, file.name);
            // Add the file to the formData instance with the correct name
            // files.fieldName
          }
          break;
    
        case 'submit':
          // Intentionally do nothing
          break;
    
        default:
          inputData[inputElement.name] = inputElement.value;
          // Spool the remaining input data into an object
          break;
      }
    }
  
    body.append('data', JSON.stringify(inputData));
    // Stringify the non-file data and append it to the instance
  
    const response = await fetch(form.action, {
      method: form.method,
      body
    });
    // Send the data to the form action URL using the form method
    // <form action="/api/endpoint" method="POST">
  
    const result = await response.json();
    // Parse the results as JSON
    console.log(result);
    // Log the results
  }