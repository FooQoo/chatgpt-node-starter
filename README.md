# chatgpt-node-starter

## install

```
$ yarn install
```

## setup

Get the openai API key and copy the .env.sample to create the .env.

```
$ cp .env.sample .env
```

## run on local

```
$ yarn dev
```

## run on server

```
$ yarn build
$ yarn start
```

## usage

```
$ curl -i -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "message": "ここ3年でAIによって代替される職業を教えてください。"
}' \
 'http://localhost:3000/api/chat'
```

## Reference

- [OpenAI API](https://beta.openai.com/docs/api-reference/introduction)
- [ChatGPT API](https://github.com/transitive-bullshit/chatgpt-api)
