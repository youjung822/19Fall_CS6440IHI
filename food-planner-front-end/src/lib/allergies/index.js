import { ALLERGIES } from '../constants';

export function mapAllergies(patientAllergies) {
  return ALLERGIES.filter(allergy => {
    let hasAllergy = false;
    patientAllergies.forEach(a => {
      if (a.toLowerCase().includes(allergy.toLowerCase())) {
        hasAllergy = true;
      }
    });

    return hasAllergy;
  });
}
