FROM postgres:latest
ENV POSTGRES_DB foodplanner2database
COPY account.sql /usr/local/share/account.sql
RUN pg_restore -U $POSTGRES_USER -d 'foodplanner2database' /usr/local/share/account.sql
