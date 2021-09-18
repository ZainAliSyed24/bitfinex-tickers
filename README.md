
# Bitfinex Tickers

React Native application to display Bitfinex tickers list and information.


## Documentation

This project was created by Expo CLI.

I used `styled-components` for styles.

I used `react-query` for fetch data from the network.

## Demo

#### PWA
http://maxghafori.github.io/bitfinex-tickers

## Run Locally

Clone the project and then in project directory


```bash
  yarn install
```

### PWA
with expo cli
```bash
  expo start:web
```


### iOS
first
```bash
  cd ios && pod install
```

then run
```bash
  yarn ios
```

### Android
for run on an android device/simulator :
```bash
  yarn android
```
#### if you get  `SDK location not found` error :
you should set these variables :

`sdk.dir=YOUR SDK PATH` at `android/local.properties`.

`org.gradle.java.home=YOUR JDK PATH` at `android/gradle.properties`.



## Tech Stack

React Native, Expo, TypeScript, React Query.



## Authors

- [Mohsen Ghafori](https://www.github.com/maxghafori)

  
