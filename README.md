# @ecommerce/contracts

Shared types, events, and messages for ecommerce microservices.

## Usage

Add as git submodule:
```bash
git submodule add git@github.com:yourorg/contracts.git contracts
```

Reference in service `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@ecommerce/contracts": ["../contracts/src/index.ts"]
    }
  }
}
```

Reference in service `package.json`:
```json
{
  "dependencies": {
    "@ecommerce/contracts": "file:../contracts"
  }
}
```

## Structure

- `src/enums/` — Shared enums (OrderStatus, UserRole)
- `src/events/` — Fire-and-forget domain events
- `src/messages/` — RabbitMQ request-reply contracts