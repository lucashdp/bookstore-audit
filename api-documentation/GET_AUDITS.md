# Audit Resources

    GET v1/public/audits

## Description
Returns a listing of audits objects.


## Example
**Request**

    https://bookstore-audit.herokuapp.com/v1/public/audits

**Return**
``` json
[
    {
        "_id": 4905955,
        "object": "{ text: 'teste 1', value: 'value teste 1'}",
        "clientIp" : "201.17.157.13",
        "timeAudit" : "Sun Sep 28 2018 12:46:21 GMT-0300 (Horário Padrão de Brasília)" 
    },
    {
        "_id": 4905956,
        "object": "{ text: 'teste', value: 'value teste'}",
        "clientIp" : "201.17.157.13",
        "timeAudit" : "Sun Sep 30 2018 12:46:21 GMT-0300 (Horário Padrão de Brasília)" 
    }
]
```