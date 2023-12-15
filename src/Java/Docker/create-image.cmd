docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dokumentooborotkr-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t dokumentooborotkr-java/app ../../..
