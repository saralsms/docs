### Send SMS
Use this API to send SMS in one or multiple number. The messages get delivered on realtime.

### Auth
Send a valid `X-Auth-Token` header for authorization.

### Method
Use an HTTP `POST` method.

### Content Body
It is recommended to send content body in `application/json` format. We also support `application/x-www-form-urlencoded` format as fallback.

### Parameters
| Param 	| Values                                  	| Required 	| Description                                 	|
|:------	|:----------------------------------------	|:---------	|:--------------------------------------------	|
| to    	| 9851xxx123, 9851xxx124, 9851xxx125, ... 	| Y        	| One or multiple numbers separated by comma. 	|
| text  	| This is the test message from API.      	| Y        	| The text message to be delivered.           	|

### cURL Request / JSON
```bash
curl --request POST \
  --url 'https://cloudapi.saralsms.com/v1/send' \
  --header 'X-Auth-Token: fe3b17a2f645eff...e7eb71c8a3bfd27ed' \
  --header 'Content-Type: application/json' \
  --data '{"to":"9851xxx123,9851xxx124,9851xxx125,...","text":"This is the test message from API."}'
```

### cURL Request / UrlEncoded
```bash
curl --request POST \
  --url 'https://cloudapi.saralsms.com/v1/send' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'X-Auth-Token: fe3b17a2f645eff...e7eb71c8a3bfd27ed' \
  --data 'to=9851xxx123,9851xxx124,9851xxx125,...' \
  --data 'text=This is the test message from API.'
```

### Sample Response
```json
{
  "message": "65 messages queued for delivery. 3 numbers are invalid.",
  "undelivered": [
    "98512xxx123",
    "98032xxx456",
    "96712xxx789"
  ]
}
```
If there are invalid numbers or message not delivered in particular number, they are attached to `undelivered` array in response. The undelivered messages are not chargeable.