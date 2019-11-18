package backend.controller;

import backend.exception.ResourceNotFoundException;
import backend.model.Patient;
import backend.operation.SimpleRead;
import backend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class PatientController {
    String serverBase ="http://hapi.fhir.org/baseDstu3";
    SimpleRead reader = new SimpleRead(serverBase);

    @Autowired
    private PatientRepository patientRepository;

    @GetMapping("/patients")
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @GetMapping("/patients/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Patient patient = patientRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found: " + id));

        patient.setAllergies(reader.getAllergy(patient.getPatientId()));
        patient.setConditions(reader.getCondition(patient.getPatientId()));

        return ResponseEntity.ok().body(patient);
    }

    @PostMapping("/patients")
    public Patient createPatient(@Valid @RequestBody Patient patient) {
        return patientRepository.save(patient);
    }

    @PutMapping("/patients/{id}")
    public ResponseEntity<Patient> updateUser(@PathVariable(value = "id") Long id,
                                              @Valid @RequestBody Patient patientDetails) throws ResourceNotFoundException {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found: " + id));

        patient.setEmail(patientDetails.getEmail());
        if (patientDetails.getLastName() != null)
            patient.setLastName(patientDetails.getLastName());
        if (patientDetails.getFirstName() != null)
            patient.setFirstName(patientDetails.getFirstName());
        if (patientDetails.getPassword() != null)
            patient.setPassword(patientDetails.getPassword());
        if (patientDetails.getConditions() != null)
            patient.setConditions(patientDetails.getConditions());
        if (patientDetails.getAllergies() != null)
            patient.setAllergies(patientDetails.getAllergies());
        final Patient updatedUser = patientRepository.save(patient);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/patients/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found: " + id));

        patientRepository.delete(patient);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @PostMapping("/login")
    public ResponseEntity<Patient> login(@Valid @RequestBody Patient patientDetails) throws ResourceNotFoundException {
        Patient patient = patientRepository.findByUserName(patientDetails.getUserName());

        if (!patient.getPassword().equals(patientDetails.getPassword()))
            throw new ResourceNotFoundException("Patient userName: " + patientDetails.getUserName() + " has incorrect password!");

        patient.setAllergies(reader.getAllergy(patient.getPatientId()));
        patient.setConditions(reader.getCondition(patient.getPatientId()));

        return ResponseEntity.ok().body(patient);
    }
}