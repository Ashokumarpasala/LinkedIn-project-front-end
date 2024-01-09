try {
    // Code that may throw an exception
    const result = divide(10, 0); // Division by zero will throw an exception
    console.log('Result:', result); // This line won't be executed if an exception occurs
  } catch (error) {
    // Code to handle the exception
    console.error('Error:', error.message);
  } finally {
    // Code that will be executed regardless of whether an exception occurs or not
    console.log('Finally block executed.');
  }
  
  // Function that might throw an exception
  function divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero.');
    }
    return a / b;
  }
  