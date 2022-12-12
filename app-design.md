# Our Application

## Our API

### HTTP-based

"Resource Oriented Architecture"
- Resources
    - Important thingies you want to expose to the uswers of your APPI
    - Resources have names -- Uniform Resource Identifiers (URI) and they look like this:

` https://api.hypertheory.com:1338/policies/co?type=motorcycle`
- `https://` *Scheme* (either `http://` or `https://`)
    Https is transport-layer security -- it is encrypted on the transport layer
    Requires a combination of symetric and asymetric encryption using X-509 certificates

- `api.hypertheory.com` -- "server" or "authority"
- `:1338` is the TCP Port. The default for HTTP is port 80 (for HTTP) or 443 (for HTTPS), which means if your API is running on port 80, you don't have to specify it

# HTTP
An "application layer" protocol

the "application layer" is how two applicatinos can speak
the "transport layer" is how those two applications connect or send messages to each other across the internet
    - Transmission Control Protocol (TCP)
        - what HTTP users.*
        - It is stateful -- a client makes a connection and that connection is maintained for the duration of the conversation
    - User Datagram Protocol (UDP)

- HTTP defines two kinds of "messages"
    
- User Agents (the client of software)
    - creates REQUEST messages

```http
GET /people
Server: http://localhost:1337
Accept: application/json

```

- The server (origin) listens passively for requests and makes RESPONSE messagees

```http
200 Ok
Content-Type: application/json

{
    "people": [
        {"id": "1", "name"}...etc
    ]
}