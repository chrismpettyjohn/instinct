<p align="center">
  <img src="https://i.imgur.com/F0MPSW2.png" alt="Instinct Logo" />
</p>

## Developers

- **LeChris** ([chrismpettyjohn](https://github.com/chrismpettyjohn)) - Lead Developer & Creator
- **Raizer** - Cosmic Theme
- **necmi** - Ares Theme
- **Sonay** - Flat Theme & Bobba Theme
- **Cake** - Classic Theme

## Local Use Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 16.0.0)
- [Yarn](https://yarnpkg.com/)
- MySQL Database (ArcturusMS compatible)

### 1. Install Dependencies

Install all project dependencies from the repository root:

```bash
yarn
```

### 2. Build Packages

Build all Instinct packages:

```bash
yarn build
```

### 3. Environment Configuration

1. **API**: Copy `demo/api/.env.example` to `demo/api/.env` and update your database credentials:
   ```bash
   cp demo/api/.env.example demo/api/.env
   ```

2. **Web**: Copy `demo/web/.env.example` to `demo/web/.env`:
   ```bash
   cp demo/web/.env.example demo/web/.env
   ```

### 4. Start the Application

Start the API and Web demo applications in separate terminal windows:

- **Start API**:
  ```bash
  cd demo/api
  yarn start
  ```

- **Start Web**:
  ```bash
  cd demo/web
  yarn start
  ```
