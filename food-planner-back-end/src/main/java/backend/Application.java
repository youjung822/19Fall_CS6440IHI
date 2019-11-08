package backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
@RestController
public class Application {
    Ingredients ingredients = new Ingredients();
    TestDatabase db = new TestDatabase();

    @RequestMapping("/")
    public String home() {
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

    @RequestMapping("/test")
    public String test() {
        return String.join(", ", db.test);
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
