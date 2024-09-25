export enum Features {
  Breakfast = 'Breakfast',
  AirConditioner = 'Air Conditioner',
  LaptopWorkspace = 'Laptop friemdly workspace',
  BabySeat = 'Baby seat',
  Washer = 'Washer',
  Towels = 'Towels',
  Fridge = 'Fridge'
}

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussel = 'Brussel',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const PARIS_COORDINATES = [
  { lat: 48.85661, lng: 2.35222 }, // Центр Парижа
  { lat: 48.86061, lng: 2.33764 }, // Лувр
  { lat: 48.85341, lng: 2.3488 }, // Нотр-Дам
  { lat: 48.88417, lng: 2.34694 }, // Монмартр
  { lat: 48.87378, lng: 2.29503 }, // Опера Гарнье
  { lat: 48.84217, lng: 2.29435 } // Сакре-Кёр
];

export const COLOGNE_COORDINATES = [
  { lat: 50.93753, lng: 6.96028 }, // Центр Кельна
  { lat: 50.94129, lng: 6.95828 }, // Кельнский собор
  { lat: 50.93333, lng: 6.94974 }, // Музей шоколада
  { lat: 50.93384, lng: 6.95278 }, // Римско-германский музей
  { lat: 50.94167, lng: 6.95833 }, // Старый рынок
  { lat: 50.93444, lng: 6.95111 } // Мост Хохенцоллерн
];


export const DUSSELDORF_COORDINATES = [
  { lat: 51.22774, lng: 6.77346 }, // Центр Дюссельдорфа
  { lat: 51.22793, lng: 6.77544 }, // Рейнская набережная
  { lat: 51.22759, lng: 6.77345 }, // Старый город
  { lat: 51.22788, lng: 6.77588 }, // Музей современного искусства
  { lat: 51.22745, lng: 6.77412 }, // Кунстпаласт
  { lat: 51.22712, lng: 6.77399 } // Штандарт
];

export const AMSTERDAM_COORDINATES = [
  { lat: 52.3676, lng: 4.9041 }, // Центр Амстердама
  { lat: 52.3784, lng: 4.9009 }, // Площадь Дам
  { lat: 52.3752, lng: 4.8897 }, // Вонделпарк
  { lat: 52.3906, lng: 4.8782 }, // Rijksmuseum
  { lat: 52.3674, lng: 4.8922 }, // Каналы Амстердама
  { lat: 52.3740, lng: 4.8897 }, // Анна Франк Хаус
];

export const HAMBURG_COORDINATES = [
  { lat: 53.5511, lng: 9.9937 }, // Центр Гамбурга
  { lat: 53.5585, lng: 9.9876 }, // Эльбская филармония
  { lat: 53.5525, lng: 9.9920 }, // Старый порт
  { lat: 53.5533, lng: 9.9925 }, // Ратуша Гамбурга
  { lat: 53.5580, lng: 9.9333 }, // Парк Плентен ун Бломен
  { lat: 53.5587, lng: 9.9931 }, // Музей искусств и ремесел
];

export const BRUSSELS_COORDINATES = [
  { lat: 50.8503, lng: 4.3517 }, // Центр Брюсселя
  { lat: 50.8467, lng: 4.3499 }, // Гран-Плас
  { lat: 50.8430, lng: 4.3518 }, // Маннекен Пис
  { lat: 50.8460, lng: 4.3493 }, // Королевский дворец
  { lat: 50.8371, lng: 4.3676 }, // Европейский парламент
  { lat: 50.8442, lng: 4.3517 }, // Атомиум
];
