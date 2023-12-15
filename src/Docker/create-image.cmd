docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dokumentooborotkr/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t dokumentooborotkr/app ../..
