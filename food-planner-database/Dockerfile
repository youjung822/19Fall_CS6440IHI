FROM postgres:latest
ENV POSTGRES_DB foodplanner2database
#ADD account.sql /docker-entrypoint-initdb.d/  #useless
USER postgres
RUN /etc/init.d/postgresql start &&\
psql --command "CREATE USER test WITH SUPERUSER PASSWORD 'test';"