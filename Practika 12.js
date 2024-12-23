const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const share = (a, b) =>  a / b;
console.log(addition(5, 3));      
console.log(subtraction(10, 4)); 
console.log(multiplication(7, 2));  
console.log(share(15, 3));   

const checkTestConditions = function(sostoyanie1, sostoyanie2, sostoyanie3) {
    return sostoyanie1 && sostoyanie2 && sostoyanie3;
  };
  console.log(checkTestConditions(true, true, true));   
  console.log(checkTestConditions(true, false, true));  

  const isPalindromeLastName = (lastName) => {
    const processedLastName = lastName.toLowerCase().replace(/\s/g, '');
    return processedLastName === processedLastName.split('').reverse().join('');
  };
  const myLastName = "Мишган";
  console.log(isPalindromeLastName(myLastName));

  const calculateAverage = (arr) => {
    if (arr.length === 0) return 0; 
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
  };
  const numbers = [1, 2, 3, 4, 5];
  console.log(calculateAverage(numbers));

  const daysUntilNewYear = () => {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = newYear.getTime() - now.getTime();
    return Math.ceil(diff / ( 1000 * 60 * 60 * 24)); };
  console.log(daysUntilNewYear());

  const emptyFunction = () => {};
console.log(emptyFunction());

const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = row.reduce((total, num) => total + num, 0);
const evenRow = row.filter(num => num % 2 === 0);
const doubledRow = row.map(num => num * 2);
console.log("Sum:", sum);    
console.log("Even row:", evenRow);
console.log("Doubled row:", doubledRow); 

const emails = [
    "rep@yandex.com",
    "tune@mail.com",
    "samp@work.net",
    "test@gmail.com",
    "tit@mail.com",
  ];
  const filterEmails = (filterText) => {
      const filteredEmails = emails.filter(email => email.toLowerCase().includes(filterText.toLowerCase()));
      const List = document.getElementById("List");
    List.innerHTML = ''; 
      filteredEmails.forEach(email => {
          const Item = document.createElement("li");
          Item.textContent = email;
          List.appendChild(Item);
      });
  };
  const Input = document.getElementById("emailFilter");
  Input.addEventListener("input", () => filterEmails(Input.value));