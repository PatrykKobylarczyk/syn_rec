const API = "https://api.synerise.com/v4/clients";

const data = JSON.stringify({
  firstName: "John",
  lastName: "Kowalski",
  gender: "MALE",
  phone: "+48111222333",
  birthDate: "1987-10-24",
  email: "johnkowalska@gmail.com",
  agreements: {
    email: true,
  },
  tags: ["syneriseUS"],
});

fetch(API, {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "Api-Version": "4.4",
    Authorization:
      "Bearer eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiI4ZjE5NzkzYjI2NzEwOTRlNjNhMTVhYjg4M2Q1MDEzNyIsImF1ZCI6IkFQSSIsInJsbSI6ImJ1c2luZXNzX3Byb2ZpbGUiLCJjdGQiOjE2OTA4OTQzNTQ4NzEsImlzcyI6IlN5bmVyaXNlIiwiYnBpIjoxNTg2LCJzZXNzaW9uSWQiOiIyNTMzOTFhNy1iMWE3LTQ4MmYtODg0Yi05MzI2ZTJhZmRhMjIiLCJhcGtIYXNoIjoiZjVmNjNlYmUtY2UyMy00OGJhLWI3OTktOTYxZTQxOWY3YWJmIiwiZXhwIjoxNjkwODk3OTU0fQ.DQcYW_HwMKU92Ikt-O_b2wnf9IkO76iDvTFfDtn2GtOcl12m3BdvZF1Qm75T9iD0B1hMT4vp-ZwveVG-A8Kba-QXRbBs0J1EgxCFuie_e7wEFIPYKEcjm5smp74km2B16jplWAclf6KfGu2cO22rt7-pVNuiHLQFBSwtxNMJo9CAzj04ROPFaycAG8_vvnCIsR6sq8GU9iNUcQh_4Yw3z9r6ACn9Udjiz8I3fHf3KIn1cWkecZOrLdaHnMuL5twq_bBmYxJ7jX_fykHitiHEwnAJsOWbC8cw9qsA456agpuAnp1O1m72h_oqhaLLvUwHF6Yb5tKkz5i69Miphfil7HOx22ODImWRJei-uKfC62VTsTJssBydGaXl0kf2aNtghknv4kvMrPysmIdJabFulnUkbLCwsjHvgru8RUc4dbD2oDCaYUm0RNheYtR91epbuMc3TY2wPXlMkD3Rych61jpgW0ufpKXUO0VA3d71pfDJmJSreA8dOfLwgaKodBYKwGCBxOvnQ-phJCHCOLjeXUE9W6D_Y8EauoGr-FaUrxRCtu5zdHPkX9wwMmFHm23Po-NQytkhh5U9b9Mri24SM_-WDiL65Sll44nTJjQg7NhQaRTSRqI30qvVu_2cZVS8oH5_SGt7APyRH4O87x_KV1CK1cGI3fIyWKh9HTgFvss",
  },
  body: data,
})
  .then((response) => response.json())
  .then((responseData) => {
    console.log(responseData);
  })
  .catch((error) => {
    console.log(error.message);
  });
  