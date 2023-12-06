## Установка зависимостей
```bash
$ yarn # или npm i
```

## Создание .env файла
```bash
$ cp .env.example .env
# Далее в .env файле необходимо прописать переменные DB_HOST и DB_PASS
```

## Запуск
```bash
$ yarn dev # или npm run dev
```

## Изменение баланса

Ручка контроля баланса: `PUT http://localhost:{порт}/users/{айди пользователя}/balance?amount={значение}`. Значения могут быть как положительными, так и отрицательными.

```bash
$ curl -X PUT "http://localhost:8090/users/1/balance?amount=1" # увеличение баланса
$ curl -X PUT "http://localhost:8090/users/1/balance?amount=-1" # уменьшение баланса
```