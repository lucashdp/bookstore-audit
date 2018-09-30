# Audit Resources

    GET v1/public/audits/:auditId

## Description
Returns a audit object.


## Example
**Request**

    https://bookstore-audit.herokuapp.com/v1/public/audits/4905955

**Return**
``` json
    {
        "_id": 4905955,
        "object": "{ text: 'teste 1', value: 'value teste 1'}",
        "clientIp" : "201.17.157.13",
        "timeAudit" : "Sun Sep 28 2018 12:46:21 GMT-0300 (Horário Padrão de Brasília)" 
    }
```