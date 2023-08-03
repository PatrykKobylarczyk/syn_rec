# syn-req

## Task 1

Tworzenie nowego klienta:

{
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
}

## Task 2

Tworzenie eventów dla uprzednio stworzonego klienta:

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

## Zadanie techniczne
Skrypt do uruchomienia w konsoli przeglądarki podczas oglądania produktu w sklepie internetowym MediaMarkt mediamarkt.pl
