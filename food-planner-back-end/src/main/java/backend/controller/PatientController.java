package backend.controller;

import backend.exception.ResourceNotFoundException;
import backend.model.Patient;
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
    @Autowired
    private PatientRepository patientRepository;

    @GetMapping("/patients")
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @GetMapping("/patients/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable(value = "id") Long patientId)
            throws ResourceNotFoundException {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found: " + patientId));
        return ResponseEntity.ok().body(patient);
    }

    @PostMapping("/patients")
    public Patient createPatient(@Valid @RequestBody Patient patient) {
        return patientRepository.save(patient);
    }

    @PutMapping("/patients/{id}")
    public ResponseEntity<Patient> updateUser(@PathVariable(value = "id") Long patientId,
                                              @Valid @RequestBody Patient patientDetails) throws ResourceNotFoundException {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found: " + patientId));

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
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long patientId)
            throws ResourceNotFoundException {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found: " + patientId));

        patientRepository.delete(patient);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @PostMapping("/login")
    public ResponseEntity<Patient> login(@Valid @RequestBody Patient patientDetails) throws ResourceNotFoundException {
        Patient patient = patientRepository.findByUserName(patientDetails.getUserName());
        if (patient == null) throw new ResourceNotFoundException("Patient not found: " + patientDetails.getUserName());

        if (!patient.getPassword().equals(patientDetails.getPassword()))
            throw new ResourceNotFoundException("Patient userName: " + patientDetails.getUserName() + " has incorrect password!");

        return ResponseEntity.ok().body(patient);
    }
}