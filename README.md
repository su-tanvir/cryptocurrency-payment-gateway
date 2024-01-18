# Cryptocurrency payment gateway

- **Goal**: create a cryptocurrency payment gateway in a test environment
- **System functional requirement**
  - [ ] Create payment order with a currency
  - Confirm payment with
    - [ ] Smart QR
    - [ ] Web3

## Tools

- Pages route with Nextjs (v14)
- UI with React[TS] + CSS Modules
- Store management with Zustand
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

## Notes

- Rendering mode: CSR
- Use of **Screaming architecture** based on features
- Applied following patterns: compound + hooks + render props
