FROM postgres:latest
ENV POSTGRES_DB foodplanner2database
COPY account.sql /docker-entrypoint-initdb.d/
RUN chmod 777 /docker-entry-point-initdb.d/account.sql
