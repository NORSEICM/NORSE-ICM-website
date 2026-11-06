/* Demande d'analyse de cytokines : mail pré-rempli, utilisé par la page d'accueil et le pied de page.
   Pour changer l'adresse qui reçoit les demandes, modifie REFERRAL_EMAIL. */

export const REFERRAL_EMAIL = "aurelie.hanin@icm-institute.org";

const referralBody = `Dear NORSE-ICM team,

I would like to request a cytokine analysis.

Name and position:
Institution / Department:
Phone:

Context (patient with suspected NORSE / FIRES, research project, other):
Sample type (serum, plasma, CSF):
Number of samples:
Questions / comments:

Please do not include any directly identifying patient information (name, date of birth, record number).`;

export const REFERRAL_MAILTO = `mailto:${REFERRAL_EMAIL}?subject=${encodeURIComponent(
  "Cytokine analysis request"
)}&body=${encodeURIComponent(referralBody)}`;