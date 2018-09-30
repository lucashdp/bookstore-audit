# bookstore-audit (Audit API)
Bookstore Audit is the API for logging any object, it is generic. The reason for this API is a postgraduate work in Software Architecture at PUC MINAS, in the field of Backend Architecture and Microservices.

## Deploy
**[This API was deploy at https://bookstore-audit.herokuapp.com](https://bookstore-audit.herokuapp.com)**

## Database
This API connect with a mongoDB. Any log will be registered with this database.
Your connection string is: <code>mongodb://iplaycore:t0k3n@iplaycore-shard-00-00-m6ecr.mongodb.net:27017,iplaycore-shard-00-01-m6ecr.mongodb.net:27017,iplaycore-shard-00-02-m6ecr.mongodb.net:27017/bookstore-audit?ssl=true&replicaSet=iplaycore-shard-0&authSource=admin</code>

## Endpoints

#### Audit Resources

- **[<code>GET</code> v1/public/audits](https://github.com/lucashdp/bookstore-audit/blob/master/api-documentation/GET_AUDITS.md)**
- **[<code>GET</code> v1/public/audits/:auditId](https://github.com/lucashdp/bookstore-audit/blob/master/api-documentation/GET_AUDITS_BY_ID.md)**

- **[<code>POST</code> v1/public/audits](https://github.com/lucashdp/bookstore-audit/blob/master/api-documentation/POST_AUDITS.md)**