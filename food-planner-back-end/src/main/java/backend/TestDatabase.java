package backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Component
public class TestDatabase {

    private static final Logger logger = LoggerFactory.getLogger(TestDatabase.class);

    @Autowired
    private Environment environment;

    public List<String> test() {
        List<String> result = new ArrayList<>();

        String url = environment.getProperty("spring.datasource.url");
        String username = environment.getProperty("spring.datasource.username");
        String password = environment.getProperty("spring.datasource.password");

        logger.info("Trying to connect to: " + url);

        try (Connection connection = DriverManager.getConnection(url, username, password)) {


//            System.out.println("Connected to PostgreSQL database!");
            Statement statement = connection.createStatement();
//            System.out.println("Reading accounts records...");
            ResultSet resultSet = statement.executeQuery("SELECT * FROM account;");
            while (resultSet.next()) {
                System.out.printf("%-30.30s  %-30.30s%n", resultSet.getString("user_id"), resultSet.getString("username"));
                result.add(resultSet.getString("user_id") + " " + resultSet.getString("username"));
            }

        } catch (SQLException e) {
            System.out.println("Connection failure.");
            logger.debug("Connection failure.", e);
        }

        return result;
    }
}
