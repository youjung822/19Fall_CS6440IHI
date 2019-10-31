package backend;

import com.opencsv.CSVReader;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Ingredients {
    private List<String> ingredients;

    public Ingredients() {
        ingredients = new ArrayList<>();
    }

    public List<String> get() {

        try {
            InputStream is = Ingredients.class.getResourceAsStream("/top-1k-ingredients.csv");
            BufferedReader reader = new BufferedReader(new InputStreamReader(is));
            String line;
            while ((line = reader.readLine()) != null) {
                ingredients.add(line);
            }
        } catch (FileNotFoundException ex) {
            Logger.getLogger(Ingredients.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(Ingredients.class.getName()).log(Level.SEVERE, null, ex);
        }
        return ingredients;
    }
}