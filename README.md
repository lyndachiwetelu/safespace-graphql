### About this Repo
This is a graphql layer over an existing JSON REST API built using Graphql Mesh.
Good for a proof of concept for using [graphql-mesh](https://www.graphql-mesh.com/) with REST APIs.

### Prerequisites 
- Node, yarn
- An existing API URL that accepts and returns JSON

### How to use
- Copy `.env.example` to `.env` modify values to match yours. Example BASE_URL
- add the corresponding request and response samples to the `jsonSchema` folder and modify `.meshrc.yaml` to match your added schema samples
- Run `yarn install`
- Run `yarn dev` for development

