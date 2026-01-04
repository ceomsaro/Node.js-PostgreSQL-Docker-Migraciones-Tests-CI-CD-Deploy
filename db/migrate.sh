#!/bin/sh
echo "⏳ Esperando a Postgres..."
until pg_isready -h "$DB_HOST" -p "$DB_PORT"; do
  sleep 1
done

echo "✅ Ejecutando migraciones..."
for file in /app/db/migrations/*.sql; do
  psql -h "$DB_HOST" -U "$DB_USER" -d "$DB_NAME" -f "$file"
done
