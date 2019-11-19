package backend.operation;

import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.api.MethodOutcome;
import ca.uhn.fhir.rest.client.api.IGenericClient;
import ca.uhn.fhir.rest.gclient.ReferenceClientParam;
import ca.uhn.fhir.rest.gclient.StringClientParam;
import ca.uhn.fhir.rest.gclient.TokenClientParam;
import org.hl7.fhir.dstu3.model.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * This class contains methods for reading resources from the FHIR server.
 */
public class SimpleRead {

    IGenericClient client = null;

    public SimpleRead(String baseUrl) {
        FhirContext ctx = FhirContext.forDstu3();
        client = ctx.newRestfulGenericClient(baseUrl);
    }

    /**
     * Find the patient with the given ID and return the full name as a
     * single string.
     */
    public String getNameByPatientID(String id) {
        // Hint, there is a method that will return the full name including
        // prefix, first, last, and suffix
        //Place your code here

        // Invoke the client
        Bundle bundle = (Bundle) client.search().forResource(Patient.class)
                .where(new TokenClientParam("_id").exactly().code(id))
                .prettyPrint()
                .execute();

        return((Patient) bundle.getEntry().get(0).getResource()).getName().get(0).getNameAsSingleString();
    }

    /**
     * Find all the patients that have the provided name and return a list
     * of the IDs for those patients.  The search should include matches
     * where any part of the patient name (family, given, prefix, etc.)
     * matches the method 'name' parameter.
     */
    public List<String> getIDByPatientName(String name) {
        //Place your code here
        Bundle bundle = (Bundle) client.search().forResource(Patient.class)
                .where(new StringClientParam("name").matchesExactly().value(name))
                .returnBundle(Bundle.class)
                .prettyPrint()
                .execute();

        List list = new ArrayList<String>();
        int i = 0;
        while (bundle.getEntry().size() > i){
            list.add(bundle.getEntry().get(i).getResource().getIdElement().getIdPart());
            i++;
        }

        while (bundle.getLink(Bundle.LINK_NEXT) != null) {
            bundle = client.loadPage().next(bundle).execute();
            i = 0;
            while (bundle.getEntry().size() > i){
                list.add(bundle.getEntry().get(i).getResource().getIdElement().getIdPart());
                i++;
            }
        }
        return list;
    }


    public List<String> getAllergy(String id) {
        // Hint, there is a method that will return the full name including
        // prefix, first, last, and suffix
        //Place your code here

        // Invoke the client
        Bundle bundle = (Bundle) client.search().forResource(AllergyIntolerance.class)
                .where(new ReferenceClientParam("patient").hasId(id))
                .prettyPrint()
                .execute();
        List<String> allergies = new ArrayList<>();
        for (Bundle.BundleEntryComponent entry : bundle.getEntry()) {
            allergies.add(entry.getResource().getChildByName("code").getValues().get(0).getChildByName("coding").getValues().get(0).getChildByName("display").getValues().get(0).toString());
        }

        return allergies.stream().distinct().collect(Collectors.toList());
    }

    public List<String> getCondition(String id) {
        // Hint, there is a method that will return the full name including
        // prefix, first, last, and suffix
        //Place your code here

        // Invoke the client
        Bundle bundle = (Bundle) client.search().forResource(Condition.class)
                .where(new ReferenceClientParam("subject").hasId(id))
                .prettyPrint()
                .execute();
        List<String> conditions = new ArrayList<>();
        for (Bundle.BundleEntryComponent entry : bundle.getEntry()) {
            conditions.add(entry.getResource().getChildByName("code").getValues().get(0).getChildByName("coding").getValues().get(0).getChildByName("display").getValues().get(0).toString());
        }

        return conditions.stream().distinct().collect(Collectors.toList());
    }

    public String addPatient(String firstName, String lastName) {
        //Place your code here
        Patient patient = new Patient();
        patient.addIdentifier().setSystem("urn:mrns").setValue("12345");
        patient.addName().setFamily(lastName).addGiven(firstName);

        MethodOutcome outcome = client.create()
                .resource(patient)
                .prettyPrint()
                .execute();
        return outcome.getId().getIdPart();
    }
}