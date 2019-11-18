package backend.operation;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

import java.util.ArrayList;
import java.util.List;

/**
 * Unit test for simple Connection.
 */
public class SimpleReadTest extends TestCase {
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public SimpleReadTest(String testName) {
        super(testName);
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite() {
        return new TestSuite(SimpleReadTest.class);
    }

    /**
     * Rigourous Test :-)
     */
    public void testSimpleRead() {
        String serverBase ="http://hapi.fhir.org/baseDstu3";
        SimpleRead reader = new SimpleRead(serverBase);
        //do something with the reader to make sure it works...
        String patientID = "2508342";//find a good patient
        String expected_name = "Luis FHIR Madrid";
        String actual_name = reader.getNameByPatientID(patientID);
        assertEquals(expected_name, actual_name);
    }

    public void testSimpleRead0() {
        String serverBase ="http://hapi.fhir.org/baseDstu3";
        SimpleRead reader = new SimpleRead(serverBase);
        //do something with the reader to make sure it works...
        String patientID = "2087382";//find a good patient
        String expected_name = " fname gupta";
        String actual_name = reader.getNameByPatientID(patientID);
        assertEquals(expected_name, actual_name);
    }

    public void testSimpleRead1() {
        String serverBase = "http://hapi.fhir.org/baseDstu3";
        SimpleRead reader = new SimpleRead(serverBase);
        //do something with the reader to make sure it works...
        List expectedID = new ArrayList<String>();
        expectedID.add("1565595");
        expectedID.add("1970569");
        expectedID.add("1970570");
        expectedID.add("1970576");
        expectedID.add("2508342");
        List actualID = reader.getIDByPatientName("Luis");
        assertEquals(expectedID.size(), actualID.size()
        );
    }

//    public void testSimpleRead2() {
//        String serverBase ="http://hapi.fhir.org/baseDstu3";
//        SimpleRead reader = new SimpleRead(serverBase);
//        //do something with the reader to make sure it works...
//        List expectedID = new ArrayList<String>();
//        expectedID.add("1565595");
//        List actualID = reader.getIDByPatientName(" fname gupta");
//
//        assertEquals(expectedID.size(), actualID.size());
//    }

    public void testSimpleRead3() {
        String serverBase ="http://hapi.fhir.org/baseDstu3";
        SimpleRead reader = new SimpleRead(serverBase);
        //do something with the reader to make sure it works...
        String patientID = "2638050";//find a good patient
        List<String> expected_name = new ArrayList<>();
        expected_name.add("Allergy to eggs");
        expected_name.add("Ibuprofen");
        List<String> actual_name = reader.getAllergy(patientID);
        assertEquals(expected_name, actual_name);
    }

    public void testSimpleRead4() {
        String serverBase ="http://hapi.fhir.org/baseDstu3";
        SimpleRead reader = new SimpleRead(serverBase);
        //do something with the reader to make sure it works...
        String patientID = "2638050";//find a good patient
        List<String> expected_name = new ArrayList<>();
        expected_name.add("rheumatoid arthritis");
        expected_name.add("depression");
        expected_name.add("neuropathic pain");
        expected_name.add("GERD");
        expected_name.add("high cholesterol");
        expected_name.add("onychomycosis");
        expected_name.add("diabetes");
        expected_name.add("hypertension");
        expected_name.add("angina");
        expected_name.add("asthma");
        List<String> actual_name = reader.getCondition(patientID);
        assertEquals(expected_name, actual_name);
    }
}
