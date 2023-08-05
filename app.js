
let arr = [
    {
        brand: "Samsung",
        model: 'A30',
        price: '40000',
        camera: '40px',
        ram: '8gb',
        rom: '128gb',
        isApprove: 'true'
    },
    {
        brand: "Samsung",
        model: 'A10',
        price: '40000',
        camera: '40px',
        ram: '4gb',
        rom: '128gb',
        isApprove: 'true'
    },
    {
        brand: "Samsung",
        model: 'A20',
        price: '40000',
        camera: '40px',
        ram: '8gb',
        rom: '128gb',
        isApprove: 'false'

    },
    {
        brand: 'Vivo',
        model: 'Y20',
        price: '20000',
        camera: '40px',
        ram: '2gb',
        rom: '32gb',
        isApprove: 'false'

    },
    {
        brand: 'Vivo',
        model: 'Y11',
        price: '20000',
        camera: '40px',
        ram: '3gb',
        rom: '32gb'

    },
    {
        brand: 'Vivo',
        model: 'Y15',
        price: '30000',
        camera: '2px',
        ram: '4gb',
        rom: '32gb', isApprove: 'true'

    },
    {
        brand: 'Motrolla',
        model: '123',
        price: '5000',
        camera: '2px',
        ram: '2gb',
        rom: '32gb',
        isApprove: 'true'

    },
    {
        brand: 'IPhone',
        model: '14',
        price: '300000',
        camera: '40px',
        ram: '8gb',
        rom: '128gb',
        isApprove: 'true'

    },

    {
        brand: 'IPhone',
        model: '13',
        price: '300000',
        camera: '40px',
        ram: '8gb',
        rom: '128gb',
        isApprove: 'true'
    },


]

function hey() {
    const userInputBrand = document.querySelector('input[name="brandSelect"]').value.trim();
    const selectedModel = document.getElementById('modelSelect').value;
  
    if (userInputBrand !== "" && selectedModel !== "") {
      const arrFilteredBrand = arr.filter((x) => x.brand.toLowerCase().includes(userInputBrand.toLowerCase()));
      const arrFilteredModel = arrFilteredBrand.filter((x) => x.model.toLowerCase() === selectedModel.toLowerCase());
  
      if (arrFilteredModel.length > 0) {
        console.log("Properties of the selected model:");
        console.log(arrFilteredModel[0]);
      } else {
        console.log("No matching model found.");
      }
    } else {
      console.log("Please enter the brand name and select a model.");
    }
  }
  
