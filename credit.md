### Credits
Use this API to get available credits and total messages sent over time.

### Auth
Send a valid `X-Auth-Token` header for authorization.

### Method
Use an HTTP `GET` method.

### cURL Request
```bash
curl --request GET \
  --url https://cloudapi.saralsms.com/v1/credit \
  --header 'X-Auth-Token: fe3b17a2f645eff...e7eb71c8a3bfd27ed'
```

### Sample Response
```json
{
  "credit": 6584,
  "total_sent": 3416
}
```