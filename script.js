// Dom

const ammountElem = document.getElementById("amountData");
const personElem = document.getElementById("person");

const totalHeaderElem = document.getElementById("data2");

const tipCalc = () => {
  const amount = Number(ammountElem.value);
  const person = Number(personElem.value);
  const TotalElem = amount / person;

  console.log(TotalElem);

  data2.innerHTML = `$${TotalElem}`;
};
