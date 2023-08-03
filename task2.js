const API = "https://api.synerise.com/v4/events/custom";

const event_1 = JSON.stringify({
  label: "favorite.product",
  client: {
    email: "johnkowalska@gmail.com",
  },
  time: "2023-07-01T09:53:56.999+00:00",
  action: "favorite.product",
  params: {
    productName: "nike red",
    productURL: "https://sklep.pl/buty/nike/123-red",
    productColor: "red",
    productBrand: "nike",
    productDestination: "sport",
    productPricePLN: "500",
    eventCreateTime: "2022-07-28T09:53:56.999+00:00",
  },
});

const event_2 = JSON.stringify({
  label: "favorite.product",
  client: {
    email: "johnkowalska@gmail.com",
  },
  time: "2022-07-29T09:53:56.999+00:00",
  action: "favorite.product",
  params: {
    productName: "adidas yellow",
    productURL: "https://sklep.pl/buty/adidas/141-yellow",
    productColor: "yellow",
    productBrand: "adidas",
    productDestination: "sport",
    productPricePLN: "397",
    eventCreateTime: "2022-07-29T09:53:56.999+00:00",
  },
});

const event_3 = JSON.stringify({
  label: "favorite.product",
  client: {
    email: "johnkowalska@gmail.com",
  },
  time: "2022-07-30T14:53:56.999+00:00",
  action: "favorite.product",
  params: {
    productName: "gucci gold",
    productURL: "https://sklep.pl/buty/gucci/1-gold",
    productColor: "gold",
    productBrand: "gucci",
    productDestination: "party",
    productPricePLN: "1560",
    eventCreateTime: "2022-07-30T14:53:56.999+00:00",
  },
});

const event_4 = JSON.stringify({
  label: "favorite.product",
  client: {
    email: "johnkowalska@gmail.com",
  },
  time: "2022-08-01T21:53:56.999+00:00",
  action: "favorite.product",
  params: {
    productName: "tom ford perfumes",
    productURL: "https://sklep.pl/kosmetyki/perfumy/tomford/11-woman",
    productFragranceBase: "wood",
    productBrand: "tomford",
    productIsOnSale: "yes",
    productPricePLN: "460",
    eventCreateTime: "2022-08-01T21:53:56.999+00:00",
  },
});

let eventsArray = [event_1, event_2, event_3, event_4];

for (let i = 0; i < eventsArray.length; i++) {
  fetch(API, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Api-Version": "4.4",
      Authorization:
        "Bearer eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiI4ZjE5NzkzYjI2NzEwOTRlNjNhMTVhYjg4M2Q1MDEzNyIsImF1ZCI6IkFQSSIsInJsbSI6ImJ1c2luZXNzX3Byb2ZpbGUiLCJjdGQiOjE2OTA5MDY4MzkxMjgsImlzcyI6IlN5bmVyaXNlIiwiYnBpIjoxNTg2LCJzZXNzaW9uSWQiOiJhMDM0MDQzNi1lNTlhLTQwNjktOTE3ZC1jZWMyZjc0ZjcxNjAiLCJhcGtIYXNoIjoiYjM5NjQ0MDItZTFkMC00NmMyLTg5OWUtNDEzODA1ZDc3ZDhlIiwiZXhwIjoxNjkwOTEwNDM5fQ.qFXe6UeV_EvxnAIEEXVDdrEfac_HkS6ZH0fQX-ORnql_42w3CcBc9dN9MPyQ3-hsZMwhNiRrGHSwMX6dhVOMtrrMH1nWBgEB40bQlRVI-jyS-MKc329MI_AzkDwiRfRHwTPznF6hWIBmU3iF1Yig2B8WYPVQ3XbiF7h69b2HDtN8bzLAKmIWAxKowCF-FQ11eXb8AI1H8Ughauqt2rRnozKRo2GmWp6ZSc4yUcHM_AZhjEU2Sb-dsHTsiUfXgSdvm2NMvOgQ2pY3XXl2razptP7Gol2r6dyBcI8lshnIpsd9JlhPoARSXidPdobGX0iK38PE0Rm1eb0sqY0FzxbeCMnTpwiEueIF6Wb7wBAuiN537Q7i0Z3j4Gga6niWmh5koOF-zl2WtF3c4WBE_FrdOVEH3iaOL-D000LPNhH5XOqSAVHxOzcg1gjbGLHDnboBGjkC8rh521KG4BOLdBBb-z--HDHDzKtH66aF7dQchAzL9OQsPakzacR7wDSkiLupw8Kfd9OelDRRAjtbez41JFRzZENhkqKUn53ZRvgZ4rzOAkO4Jr9rRTEjxbtWVJH3hIFNG9nK1972L-qZIDqToBcLVv-Yav1AXnOUSE6gLzz2KX-eQZHeUTGfqFtqB3pMLCnRalYeNlJDXVpSL6DTI-3FWHW_Gxo-c36mOEvKlTw",
    },
    body: eventsArray[i],
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
