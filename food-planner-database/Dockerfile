FROM postgres:latest
ENV POSTGRES_DB foodplanner2database
ADD account.sql /docker-entrypoint-initdb.d/
RUN chmod -R 755 /docker-entrypoint-initdb.d/account.sql