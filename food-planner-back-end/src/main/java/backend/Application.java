package backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
@RestController
public class Application {
    private static final Logger logger = LoggerFactory.getLogger(Application.class);

    Ingredients ingredients = new Ingredients();

    @Autowired
    TestDatabase db = new TestDatabase();

    @Autowired
    private Environment environment;

    @RequestMapping("/")
    public String home() {
        logger.info("environment:" + Arrays.toString(environment.getActiveProfiles()));
        logger.info("url:" + environment.getProperty("spring.datasource.url"));
        logger.info("username:" + environment.getProperty("spring.datasource.username"));
        return "Hello Runtime Terror";
    }

    @RequestMapping("*")
    public String error() {
        return "Error 404!";
    }

    @RequestMapping("/status")
    public String status() {
        return "Good.";
    }

    @RequestMapping("/testdb")
    public String testdb() {
        return String.join(", ", db.test());
    }

    @RequestMapping(value = "/ingredients", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public List<String> listIngredients() {
        return ingredients.get();
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
