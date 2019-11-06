FROM postgres:latest
ENV POSTGRES_DB foodplanner2database
COPY dump.sql /usr/local/share/dump.sql
RUN pg_restore -U postgres -d postgres /usr/local/share/account.sql