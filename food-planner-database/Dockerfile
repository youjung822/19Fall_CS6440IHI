FROM postgres:latest
ENV POSTGRES_DB foodplanner2database
COPY account.sql /usr/local/share/account.sql
RUN pg_restore -U $POSTGRES_USER -d 'postgres' /usr/local/share/account.sql
