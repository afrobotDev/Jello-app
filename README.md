# Jello App

A TypeScript project for learning HTTP clients, APIs, and web fundamentals through an issue tracking application.

## Project Structure

```
├── Why-HTTP/         # HTTP fundamentals, URLs, and fetch API
├── DNS/              # Domain Name System concepts
├── URIs/             # URI/URL structure and components
├── Headers/          # HTTP headers and content types
├── Methods/          # HTTP methods (GET, POST, PUT)
├── Paths/            # URL paths and query parameters
├── JSON/             # JSON parsing, sending, and syntax
├── HTTPS/            # HTTPS protocol and secure requests
├── Errors/           # Error handling, async/await
├── Runtime-Validation/ # Zod schemas and runtime type validation
└── src/              # Main application source
```

## Getting Started

```bash
# Install dependencies
npm install

# Run the app
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint
```

## Modules

### Why-HTTP
- `http_urls.ts` - HTTP URL structure
- `js_fetch_api.ts` - Using the Fetch API
- `com_on_web.ts` - Communication on the web

### DNS
- `dns.ts` - DNS resolution
- `subdomain.ts` - Subdomain handling
- `web_address.ts` - Web address parsing

### URIs
- `sections_of_url.ts` - URL components
- `the_protocol.ts` - Protocol handling
- `url_paths.ts` - URL path structure

### Headers
- `http_headers.ts` - Reading HTTP headers
- `headers_useful.ts` - Common header patterns

### Methods
- `get_method.ts` - GET requests
- `post_method.ts` - POST requests
- `put_method.ts` - PUT requests
- `status_code.ts` - HTTP status codes

### Paths
- `url_path.ts` - URL path construction
- `query_params.ts` - Query parameter handling
- `multiple_query_params.ts` - Multiple query parameters

### JSON
- `json_syntax.ts` - JSON data structures
- `sending_json.ts` - Sending JSON payloads
- `parsing_json.ts` - Parsing JSON responses

### HTTPS
- `https.ts` - Secure HTTPS requests with validation

### Errors
- `error_handle.ts` - Try/catch error handling
- `async_await.ts` - Async/await with error handling

### Runtime-Validation
- `runtime_problem.ts` - Manual runtime validation
- `schemas_n_inference.ts` - Zod schema validation
- `validation_lib.ts` - Custom validation utilities
- `unit_test.ts` - Test framework
