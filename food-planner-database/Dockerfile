FROM postgres:latest
ENV POSTGRES_DB foodplanner2database
#ADD account.sql /docker-entrypoint-initdb.d/  #useless
RUN psql --command "CREATE USER test WITH SUPERUSER PASSWORD 'test';"