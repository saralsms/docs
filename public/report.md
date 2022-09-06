### Reports
Use this API to get historical messages reports including networks, charges and status.

### Auth
Send a valid `X-Auth-Token` header for authorization.

### Method
Use an HTTP `GET` method.

### cURL Request
```bash
curl --request GET \
  --url 'https://cloudapi.saralsms.com/v1/reports' \
  --header 'x-auth-token: fe3b17a2f645eff...e7eb71c8a3bfd27ed'
```
The API respond with first page by default. Optionally `page` parameter can be passed to fetch other pages. Example: `/report?page=12` for a 12th page.

### Sample Response
```json
{
  "pages": 126,
  "data": [
    {
      "id": 56480058,
      "receiver": "9779851xxx123",
      "network": "ntc",
      "message": "Fruits are an excellent source of essential vitamins and minerals.",
      "api_credit": "1",
      "delivery_at": "2020-07-09 01:45:09"
    },
    {
      "id": 56480057,
      "receiver": "9779801xxx456",
      "network": "ncell",
      "message": "Vegetables are important sources of many nutrients, including potassium, dietary fiber.",
      "api_credit": "1",
      "delivery_at": "2020-07-08 07:25:31"
    }
  ]
}
```