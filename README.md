# Cryptocurrency payment gateway

- **Goal**: create a cryptocurrency payment gateway in a test environment
- **System functional requirement**
  - [x] Create payment order with a currency
  - [x] Confirm payment with
    - Smart QR (considering WebSocket)
    - <del>Web3</del>

## Tools

- Pages route with **Nextjs** (v14)
- UI with **React[TS]** + **CSS** Modules
- Store management with **Zustand**
- [Bitnovo API](./doc/api.yaml)

## Getting started

- Requirements
  - Nodejs (+v18)
  - NPM
- Execution

  ```bash
  git clone <repo-link>
  cd cryptocurrency-payment-gateway
  cp .env.example .env  # add secrets
  npm install
  npm run dev
  ```

## Local demo

- [Demo](./doc/demo.mkv)

## Production

<div align="center">
  <a href="https://crypto-payment-service.vercel.app" target="_blank">
    <img alt="App" src="./doc/app.png" >
  </a>
  <p>Make your payment with cryptocurrency.</p>
  <a href="https://crypto-payment-service.vercel.app"><strong>Explore the app »</strong></a>
</div>

## Notes

- Rendering mode: **CSR**
- Use of **Screaming architecture** based on features
- Applied following **patterns**: compound + hooks + render props
