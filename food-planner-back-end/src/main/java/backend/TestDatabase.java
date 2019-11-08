package backend;

import java.sql.*;

public class TestDatabase {

    public List<String> test() {
        List<String> result = new ArrayList<>();

        try (Connection connection = DriverManager.getConnection("jdbc:postgresql://foodplanner2database:5432", "test", "test")) {

            System.out.println("Java JDBC PostgreSQL Example");
            // When this class first attempts to establish a connection, it automatically loads any JDBC 4.0 drivers found within
            // the class path. Note that your application must manually load any JDBC drivers prior to version 4.0.
            //          Class.forName("org.postgresql.Driver");

            System.out.println("Connected to PostgreSQL database!");
            Statement statement = connection.createStatement();
            System.out.println("Reading accounts records...");
            ResultSet resultSet = statement.executeQuery("SELECT * FROM account;");
            while (resultSet.next()) {
                System.out.printf("%-30.30s  %-30.30s%n", resultSet.getString("user_id"), resultSet.getString("username"));
                result.add("%-30.30s  %-30.30s%n", resultSet.getString("user_id"), resultSet.getString("username");
            }

        } /*catch (ClassNotFoundException e) {
        System.out.println("PostgreSQL JDBC driver not found.");
        e.printStackTrace();
        }*/ catch (SQLException e) {
            System.out.println("Connection failure.");
            e.printStackTrace();
        }

        return result
    }
}
